import React, { useState, useEffect } from 'react';
import { Bot, Building2, Users2, MessageSquare, ArrowRight, ArrowLeft, Check, Loader2, Package, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { submitFormData } from '../services/formService';
import type { FormData } from '../types/form';

// Email validation regex
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const packages = [
  {
    name: 'Standard Assistant',
    price: '1,250',
    subscription: '20'
  },
  {
    name: 'Advanced Assistant',
    price: '1,450',
    subscription: '149'
  },
  {
    name: 'Premium Package',
    price: '2,150',
    subscription: '249'
  },
  {
    name: 'Custom Solution',
    price: null,
    subscription: null
  }
];

const steps = [
  {
    title: "Select Package",
    icon: Package,
    fields: [
      { 
        label: "Package", 
        type: "package-select", 
        required: true,
        packages
      }
    ]
  },
  {
    title: "Business Details",
    icon: Building2,
    fields: [
      { label: "Company Name", type: "text", placeholder: "Enter your company name", required: true },
      { label: "Website", type: "url", placeholder: "https://your-website.com", required: true },
      { label: "Industry", type: "select", options: ["E-commerce", "SaaS", "Healthcare", "Real Estate", "Other"], required: true }
    ]
  },
  {
    title: "Team Size",
    icon: Users2,
    fields: [
      { label: "Number of Employees", type: "select", options: ["1-10", "11-50", "51-200", "201-500", "500+"], required: true },
      { label: "Customer Service Team Size", type: "select", options: ["1-5", "6-20", "21-50", "50+"], required: true }
    ]
  },
  {
    title: "Current Setup",
    icon: MessageSquare,
    fields: [
      { label: "Current Support Channels", type: "checkbox", options: ["Email", "Phone", "Live Chat", "Social Media"], required: true },
      { label: "Average Monthly Conversations", type: "select", options: ["0-100", "101-500", "501-2000", "2000+"], required: true }
    ]
  },
  {
    title: "Contact Information",
    icon: Users2,
    fields: [
      { label: "Full Name", type: "text", placeholder: "Enter your full name", required: true },
      { label: "Email", type: "email", placeholder: "you@company.com", required: true },
      { 
        label: "Contact Consent", 
        type: "single-checkbox", 
        text: "I consent to being contacted regarding next steps",
        required: true 
      }
    ]
  }
];

export function GetStarted() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({});
  const [direction, setDirection] = useState('forward');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [hasDiscount, setHasDiscount] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const checkDiscount = () => {
      const discountTimeLeft = sessionStorage.getItem('discountTimeLeft');
      if (discountTimeLeft) {
        const timeRemaining = parseInt(discountTimeLeft, 10) - Date.now();
        setHasDiscount(timeRemaining > 0);
      } else {
        setHasDiscount(false);
      }
    };

    checkDiscount();
    const intervalId = setInterval(checkDiscount, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const validateEmail = (email: string): boolean => {
    return EMAIL_REGEX.test(email);
  };

  const validateCurrentStep = () => {
    const currentStepData = steps[currentStep];
    if (!currentStepData.fields) return true;

    return currentStepData.fields.every(field => {
      if (!field.required) return true;
      const value = formData[`${currentStepData.title}-${field.label}`];
      
      if (field.type === 'checkbox') {
        return field.options?.some(option => 
          formData[`${currentStepData.title}-${field.label}-${option}`] === 'true'
        );
      }

      if (field.type === 'single-checkbox') {
        return value === 'true';
      }

      // Special validation for email field
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
    setEmailError(null);
    
    if (!validateCurrentStep()) {
      if (!emailError) {
        setError('Please fill in all required fields');
      }
      return;
    }

    if (currentStep === steps.length - 1) {
      try {
        setIsSubmitting(true);
        const discountTimeLeft = sessionStorage.getItem('discountTimeLeft');
        const hasValidDiscount = discountTimeLeft ? (parseInt(discountTimeLeft, 10) - Date.now() > 0) : false;
        
        const response = await submitFormData({
          ...formData,
          hasDiscount: hasValidDiscount.toString()
        });
        
        if (response.success) {
          setShowSuccess(true);
          setTimeout(() => {
            setShowSuccess(false);
            navigate('/');
          }, 3000);
        }
      } catch (err) {
        setError('Failed to submit form. Please try again.');
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setDirection('forward');
      setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
    }
  };

  const handlePrev = () => {
    setError(null);
    setEmailError(null);
    setDirection('backward');
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setError(null);

    // Clear email error when user starts typing
    if (field.includes('Email')) {
      setEmailError(null);
    }
  };

  const renderPackageSelection = (field: any) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {field.packages.map((pkg: any) => (
        <div
          key={pkg.name}
          className={`relative p-6 rounded-xl cursor-pointer transition-all duration-300 ${
            formData[`${steps[currentStep].title}-${field.label}`] === pkg.name
              ? 'bg-blue-500/20 border-2 border-blue-500'
              : 'bg-white/5 border-2 border-transparent hover:bg-white/10'
          }`}
          onClick={() => handleInputChange(`${steps[currentStep].title}-${field.label}`, pkg.name)}
        >
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-lg font-semibold text-white">{pkg.name}</h3>
            {formData[`${steps[currentStep].title}-${field.label}`] === pkg.name && (
              <Check className="w-5 h-5 text-blue-400" />
            )}
          </div>
          {pkg.price ? (
            <div>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-2xl font-bold text-white">
                  ${hasDiscount ? (
                    <>
                      <span className="line-through text-white/50 text-lg">{pkg.price}</span>
                      {' '}
                      <span className="text-blue-400">
                        ${(parseInt(pkg.price.replace(',', '')) * 0.9).toLocaleString()}
                      </span>
                    </>
                  ) : pkg.price}
                </span>
                <span className="text-white/70">one-time build</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-xl font-bold text-white">${pkg.subscription}</span>
                <span className="text-white/70">/month</span>
              </div>
            </div>
          ) : (
            <p className="text-white/70">Custom pricing based on your needs</p>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-900 pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-2 bg-blue-500/10 rounded-full mb-6">
            <Bot className="w-8 h-8 text-blue-400" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">
            Get Started with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Slate</span>
          </h1>
          <p className="text-lg text-white/70">Let's customize Slate for your business needs</p>
          {hasDiscount && (
            <div className="mt-4 inline-block px-4 py-2 bg-blue-500/20 rounded-full">
              <span className="text-blue-400 font-medium">10% discount applied!</span>
            </div>
          )}
        </div>

        {/* Progress bar */}
        <div className="relative mb-12">
          <div className="h-2 bg-white/10 rounded-full">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            />
          </div>
          <div className="absolute -top-2 left-0 right-0 flex justify-between">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                  index <= currentStep 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                    : 'bg-white/10 text-white/50'
                }`}
              >
                {index < currentStep ? (
                  <Check className="w-4 h-4" />
                ) : (
                  <step.icon className="w-4 h-4" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Error message */}
        {(error || emailError) && (
          <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm">
            {emailError || error}
          </div>
        )}

        {/* Form */}
        <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 mb-8 overflow-hidden transition-all duration-300 ease-in-out">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`
                ${index === currentStep 
                  ? 'opacity-100 translate-x-0'
                  : index < currentStep
                  ? 'opacity-0 -translate-x-full'
                  : 'opacity-0 translate-x-full'
                }
                transition-all duration-500 ease-out
              `}
              style={{
                display: index === currentStep ? 'block' : 'none'
              }}
            >
              <h2 className="text-2xl font-semibold text-white mb-8">{step.title}</h2>
              <div className="space-y-6">
                {step.fields?.map((field, fieldIndex) => (
                  <div key={fieldIndex} className="space-y-2">
                    {field.type !== 'single-checkbox' && (
                      <label className="block text-sm font-medium text-white/70">
                        {field.label}
                        {field.required && <span className="text-red-400 ml-1">*</span>}
                      </label>
                    )}
                    {field.type === 'package-select' ? (
                      renderPackageSelection(field)
                    ) : field.type === 'select' ? (
                      <select
                        className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={(e) => handleInputChange(`${step.title}-${field.label}`, e.target.value)}
                        value={formData[`${step.title}-${field.label}`] as string || ''}
                      >
                        <option value="">Select an option</option>
                        {field.options?.map((option: string) => (
                          <option key={option} value={option}>{option}</option>
                        ))}
                      </select>
                    ) : field.type === 'checkbox' ? (
                      <div className="space-y-2">
                        {field.options?.map((option: string) => (
                          <label key={option} className="flex items-center gap-2">
                            <input
                              type="checkbox"
                              className="w-4 h-4 rounded text-blue-500 focus:ring-blue-500"
                              checked={formData[`${step.title}-${field.label}-${option}`] === 'true'}
                              onChange={(e) => handleInputChange(`${step.title}-${field.label}-${option}`, e.target.checked.toString())}
                            />
                            <span className="text-white">{option}</span>
                          </label>
                        ))}
                      </div>
                    ) : field.type === 'single-checkbox' ? (
                      <label className="flex items-center gap-2 cursor-pointer group">
                        <input
                          type="checkbox"
                          className="w-4 h-4 rounded text-blue-500 focus:ring-blue-500"
                          checked={formData[`${step.title}-${field.label}`] === 'true'}
                          onChange={(e) => handleInputChange(`${step.title}-${field.label}`, e.target.checked.toString())}
                        />
                        <span className="text-white group-hover:text-white/90 transition-colors">
                          {field.text}
                          {field.required && <span className="text-red-400 ml-1">*</span>}
                        </span>
                      </label>
                    ) : (
                      <input
                        type={field.type}
                        className={`w-full bg-white/10 border rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                          field.type === 'email' && emailError ? 'border-red-500' : 'border-white/10'
                        }`}
                        placeholder={field.placeholder}
                        onChange={(e) => handleInputChange(`${step.title}-${field.label}`, e.target.value)}
                        value={formData[`${step.title}-${field.label}`] as string || ''}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
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

      {/* Success Popup */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md mx-4 relative animate-fade-in">
            <div className="absolute top-4 right-4">
              <button 
                onClick={() => setShowSuccess(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Check className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
              <p className="text-gray-600 mb-6">
                Your inquiry has been received. A member of our team will be in touch with you shortly.
              </p>
              <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-green-500 rounded-full transition-all duration-300"
                  style={{ width: '100%' }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}