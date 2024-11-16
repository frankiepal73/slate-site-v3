import React from 'react';
import { Mail } from 'lucide-react';

export function TermsOfService() {
  return (
    <div className="min-h-screen bg-slate-900 pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>
        
        <div className="prose prose-invert prose-slate max-w-none">
          <p className="text-white/70">Last updated: March 15, 2024</p>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-white mb-4">1. Agreement to Terms</h2>
            <p className="text-white/70">
              By accessing or using Slate's services, you agree to be bound by these Terms of Service. 
              If you disagree with any part of the terms, you may not access our services.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-white mb-4">2. Description of Services</h2>
            <p className="text-white/70">
              Slate provides AI-powered customer service automation solutions, including but not limited to:
            </p>
            <ul className="list-disc list-inside text-white/70 space-y-2 mt-4">
              <li>24/7 customer support automation</li>
              <li>Multi-language communication capabilities</li>
              <li>Lead generation and qualification</li>
              <li>Analytics and reporting tools</li>
              <li>Integration with existing business systems</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-white mb-4">3. User Responsibilities</h2>
            <p className="text-white/70 mb-4">You agree to:</p>
            <ul className="list-disc list-inside text-white/70 space-y-2">
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Use the services in compliance with applicable laws</li>
              <li>Not misuse or attempt to manipulate our services</li>
              <li>Respect intellectual property rights</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-white mb-4">4. Intellectual Property</h2>
            <p className="text-white/70">
              The service and its original content, features, and functionality are owned by Slate and are protected by 
              international copyright, trademark, patent, trade secret, and other intellectual property laws.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-white mb-4">5. Payment Terms</h2>
            <p className="text-white/70">
              Subscription fees are billed in advance on a recurring basis. You agree to pay all charges at 
              the prices then in effect for your subscription. You authorize us to charge your chosen payment 
              provider for any such payments.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-white mb-4">6. Service Availability</h2>
            <p className="text-white/70">
              While we strive for 99.9% uptime, we do not guarantee the services will be available at all times. 
              We may experience hardware, software, or other problems resulting in interruptions, delays, or errors. 
              We reserve the right to change, revise, update, suspend, discontinue, or modify the services at any time.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-white mb-4">7. Limitation of Liability</h2>
            <p className="text-white/70">
              Slate shall not be liable for any indirect, incidental, special, consequential, or punitive damages 
              resulting from your use of or inability to use the service.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-white mb-4">8. Termination</h2>
            <p className="text-white/70">
              We may terminate or suspend your access to our services immediately, without prior notice or liability, 
              for any reason whatsoever, including without limitation if you breach the Terms.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-white mb-4">9. Changes to Terms</h2>
            <p className="text-white/70">
              We reserve the right to modify or replace these Terms at any time. If a revision is material, 
              we will provide at least 30 days' notice prior to any new terms taking effect.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-white mb-4">10. Contact Us</h2>
            <p className="text-white/70 mb-4">
              If you have any questions about these Terms, please contact us at:
            </p>
            <a 
              href="mailto:frank@slatedigitalmedia.com"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
            >
              <Mail className="w-5 h-5" />
              frank@slatedigitalmedia.com
            </a>
          </section>
        </div>
      </div>
    </div>
  );
}