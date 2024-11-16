import React from 'react';
import { Mail, ShieldOff } from 'lucide-react';

export function DataDeletion() {
  return (
    <div className="min-h-screen bg-slate-900 pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-8">
          <ShieldOff className="w-12 h-12 text-blue-400" />
          <h1 className="text-4xl font-bold text-white">Data Deletion Request</h1>
        </div>
        
        <div className="prose prose-invert prose-slate max-w-none">
          <section className="mb-8">
            <p className="text-white/70 text-lg leading-relaxed">
              We respect your right to control your personal data. If you would like to request the deletion of your personal 
              information from our systems, please contact us via email. We will process your request within 30 days in 
              accordance with applicable data protection laws.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4">What to Include in Your Request</h2>
            <p className="text-white/70 mb-4">
              To help us process your request efficiently, please include:
            </p>
            <ul className="list-disc list-inside text-white/70 space-y-2">
              <li>Your full name</li>
              <li>Email address associated with your account</li>
              <li>Company name (if applicable)</li>
              <li>A clear statement requesting data deletion</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4">What Happens Next</h2>
            <ul className="list-disc list-inside text-white/70 space-y-2">
              <li>We will confirm receipt of your request within 2 business days</li>
              <li>Our team will verify your identity to protect your privacy</li>
              <li>We will process your deletion request within 30 days</li>
              <li>You will receive confirmation once the deletion is complete</li>
            </ul>
          </section>

          <section className="bg-white/5 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
            <p className="text-white/70 mb-6">
              To submit your data deletion request, please email us at:
            </p>
            <a 
              href="mailto:frank@slatedigitalmedia.com"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-lg"
            >
              <Mail className="w-6 h-6" />
              frank@slatedigitalmedia.com
            </a>
          </section>
        </div>
      </div>
    </div>
  );
}