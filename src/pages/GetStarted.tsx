import React, { useState, useEffect } from 'react';
import { Bot, Building2, Users2, ArrowRight, ArrowLeft, Loader2 } from 'lucide-react';
import { FormProgress } from '../components/forms/FormProgress';
import { FormField } from '../components/forms/FormField';
import { SuccessModal } from '../components/forms/SuccessModal';
import { submitFormData } from '../services/formService';
import type { FormData } from '../types/form';
import { steps } from '../config/formConfig';

export function GetStarted() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [hasDiscount] = useState(() => {
    const discountTimeLeft = sessionStorage.getItem('discountTimeLeft');
    if (discountTimeLeft) {
      const timeRemaining = parseInt(discountTimeLeft, 10) - Date.now();
      return timeRemaining > 0;
    }
    return false;
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentStep]);

  const validateEmail = (email: string): boolean => {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  };

  const validateCurrentStep = () => {
    const currentStepData = steps[currentStep];
    if (!currentStepData.fields) return true;

    return currentStepData.fields.every(field => {
      if (!field.required) return true;
      
      const value = formData[`${currentStepData.title}-${field.label}`];

      if (field.type === 'checkbox') {
        return Array.isArray(value) && value.length > 0;
      }

      if (field.type === 'single-checkbox') {
        return value === 'true';
      }

      if (field.type === 'email') {
        if (!value) {
          setEmailError('Email is required');
          return false;
        }
        if (!validateEmail(value as string)) {
          setEmailError('Please enter a valid email address');
          return false;
        }
        setEmailError(null);
        return true;
      }

      return value && value !== '';
    });
  };

  const handleNext = async () => {
    setError(null);
    
    if (!validateCurrentStep()) {
      if (!emailError) {
        setError('Please fill in all required fields');
      }
      return;
    }

    if (currentStep === steps.length - 1) {
      try {
        setIsSubmitting(true);
        const response = await submitFormData(formData);
        
        if (response.success) {
          setShowSuccess(true);
          setTimeout(() => {
            setShowSuccess(false);
            window.location.href = 'https://cal.com/frankpalmeri/slate-ai-initial-discovery-call';
          }, 2000);
        }
      } catch (err) {
        setError('Failed to submit form. Please try again.');
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
    }
  };

  const handlePrev = () => {
    setError(null);
    setEmailError(null);
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    setError(null);
    if (field.includes('Email')) {
      setEmailError(null);
    }
  };

  return (
    <div 
      className="min-h-screen bg-gray-50 pt-32 pb-20"
      id="get-started-page"
      data-gtm-category="Get Started"
      data-gtm-action="view"
      data-gtm-label="Get Started Page"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-2 bg-primary-500/10 rounded-full mb-6">
            <Bot className="w-8 h-8 text-primary-500" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Let's customize your chatbot for your business needs
          </h1>
          {hasDiscount && (
            <div className="mt-4 inline-block px-4 py-2 bg-primary-500/10 rounded-full">
              <span className="text-primary-600 font-medium">20% discount applied!</span>
            </div>
          )}
        </div>

        <FormProgress steps={steps} currentStep={currentStep} />

        {(error || emailError) && (
          <div 
            className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm"
            id="form-error-message"
            role="alert"
            aria-live="polite"
          >
            {emailError || error}
          </div>
        )}

        <form 
          id="get-started-form"
          onSubmit={(e) => {
            e.preventDefault();
            handleNext();
          }}
          className="space-y-8"
          data-gtm-category="Form"
          data-gtm-action="submit"
          data-gtm-label="Get Started Form"
        >
          <div className="bg-white p-4 sm:p-8 rounded-2xl mb-8 shadow-sm border border-gray-200">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">{steps[currentStep].title}</h2>
              {steps[currentStep].subtitle && (
                <p className="text-gray-600 mb-8">{steps[currentStep].subtitle}</p>
              )}
              <div className="space-y-6">
                {steps[currentStep].fields?.map((field, fieldIndex) => (
                  <div key={fieldIndex}>
                    <FormField
                      field={field}
                      value={formData[`${steps[currentStep].title}-${field.label}`]}
                      onChange={(value) => handleInputChange(`${steps[currentStep].title}-${field.label}`, value)}
                      error={field.type === 'email' ? emailError : undefined}
                      stepTitle={steps[currentStep].title}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-between">
            <button
              type="button"
              onClick={handlePrev}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-gray-700 font-medium transition-all ${
                currentStep === 0
                  ? 'opacity-50 cursor-not-allowed'
                  : 'hover:bg-gray-100'
              }`}
              disabled={currentStep === 0}
              id="form-prev-button"
              data-gtm-category="Form Navigation"
              data-gtm-action="click"
              data-gtm-label="Previous Step"
            >
              <ArrowLeft className="w-5 h-5" />
              Previous
            </button>
            
            <button
              type={currentStep === steps.length - 1 ? 'submit' : 'button'}
              onClick={currentStep === steps.length - 1 ? undefined : handleNext}
              disabled={isSubmitting}
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all bg-primary-500 text-white hover:bg-primary-600 shadow-lg shadow-primary-500/20 hover:shadow-xl hover:shadow-primary-500/30"
              id="form-next-button"
              data-gtm-category="Form Navigation"
              data-gtm-action="click"
              data-gtm-label={currentStep === steps.length - 1 ? "Submit Form" : "Next Step"}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  {currentStep === steps.length - 1 ? 'Submit' : 'Next'}
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </div>
        </form>
      </div>

      <SuccessModal 
        show={showSuccess} 
        onClose={() => setShowSuccess(false)} 
      />
    </div>
  );
}