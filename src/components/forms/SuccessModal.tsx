import React from 'react';
import { Check, X } from 'lucide-react';

interface SuccessModalProps {
  show: boolean;
  onClose: () => void;
}

export function SuccessModal({ show, onClose }: SuccessModalProps) {
  if (!show) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
      role="dialog"
      aria-modal="true"
      aria-labelledby="success-modal-title"
      id="success-modal"
      data-gtm-category="Modal"
      data-gtm-action="view"
      data-gtm-label="Success Modal"
    >
      <div className="bg-white rounded-2xl p-8 max-w-md mx-4 relative animate-fade-in">
        <div className="absolute top-4 right-4">
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Close modal"
            id="success-modal-close"
            data-gtm-category="Modal"
            data-gtm-action="click"
            data-gtm-label="Close Success Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <Check className="w-8 h-8 text-green-500" />
          </div>
          <h3 
            className="text-2xl font-bold text-gray-900 mb-2"
            id="success-modal-title"
          >
            Thank You!
          </h3>
          <p className="text-gray-600 mb-6">
            Your inquiry has been received. A member of our team will be in touch with you shortly.
          </p>
          <div 
            className="w-full h-2 bg-gray-100 rounded-full overflow-hidden"
            role="progressbar"
            aria-valuenow={100}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div 
              className="h-full bg-green-500 rounded-full transition-all duration-300"
              style={{ width: '100%' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}