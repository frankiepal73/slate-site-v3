import React, { useState, useEffect } from 'react';
import { Bot, Building2, Users2, MessageSquare, ArrowRight, ArrowLeft, Check, Loader2, Package } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { submitFormData } from '../services/formService';
import { PackageCard } from '../components/forms/PackageCard';
import { FormProgress } from '../components/forms/FormProgress';
import { SuccessModal } from '../components/forms/SuccessModal';
import { FormField } from '../components/forms/FormField';
import type { FormData } from '../types/form';
import { steps } from '../config/formConfig';

export function GetStarted() {
  const navigate = useNavigate();
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

  const currentStepData = steps[currentStep];

  return (
    <div className="min-h-screen bg-slate-900 pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-2 bg-blue-500/10 rounded-full mb-6">
            <Bot className="w-8 h-8 text-blue-400" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">
            Let's customize your chatbot for your business needs
          </h1>
          {hasDiscount && (
            <div className="mt-4 inline-block px-4 py-2 bg-blue-500/20 rounded-full">
              <span className="text-blue-400 font-medium">20% discount applied!</span>
            </div>
          )}
        </div>

        <FormProgress steps={steps} currentStep={currentStep} />

        {/* Error message */}
        {(error || emailError) && (
          <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm">
            {emailError || error}
          </div>
        )}

        {/* Form */}
        <div className="bg-white/5 backdrop-blur-xl p-4 sm:p-8 rounded-2xl mb-8">
          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">{currentStepData.title}</h2>
            {currentStepData.subtitle && (
              <p className="text-white/70 mb-8">{currentStepData.subtitle}</p>
            )}
            <div className="space-y-6">
              {currentStepData.fields?.map((field, fieldIndex) => (
                <div key={fieldIndex}>
                  {field.type === 'package-select' ? (
                    <div className="grid grid-cols-1 gap-4 px-2 sm:px-0">
                      {field.packages.map((pkg: any) => (
                        <PackageCard
                          key={pkg.name}
                          pkg={pkg}
                          isSelected={formData[`${currentStepData.title}-${field.label}`] === pkg.name}
                          hasDiscount={hasDiscount}
                          onSelect={() => handleInputChange(`${currentStepData.title}-${field.label}`, pkg.name)}
                        />
                      ))}
                    </div>
                  ) : (
                    <FormField
                      field={field}
                      value={formData[`${currentStepData.title}-${field.label}`]}
                      onChange={(value) => handleInputChange(`${currentStepData.title}-${field.label}`, value)}
                      error={field.type === 'email' ? emailError : undefined}
                      stepTitle={currentStepData.title}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="flex justify-between">
          <button
            onClick={handlePrev}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl text-white font-medium transition-all ${
              currentStep === 0
                ? 'opacity-50 cursor-not-allowed'
                : 'hover:bg-white/10'
            }`}
            disabled={currentStep === 0}
          >
            <ArrowLeft className="w-5 h-5" />
            Previous
          </button>
          
          <button
            onClick={handleNext}
            disabled={isSubmitting}
            className="flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all text-white hover:bg-white/10"
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
      </div>

      <SuccessModal 
        show={showSuccess} 
        onClose={() => setShowSuccess(false)} 
      />
    </div>
  );
}