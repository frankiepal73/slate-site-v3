import React from 'react';
import { Mail } from 'lucide-react';

export function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-slate-900 pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
        
        <div className="prose prose-invert prose-slate max-w-none">
          <p className="text-white/70">Last updated: March 15, 2024</p>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Introduction</h2>
            <p className="text-white/70">
              At Slate, we take your privacy seriously. This Privacy Policy explains how we collect, use, 
              disclose, and safeguard your information when you use our website and services.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Information We Collect</h2>
            <p className="text-white/70 mb-4">We collect information that you provide directly to us, including:</p>
            <ul className="list-disc list-inside text-white/70 space-y-2">
              <li>Name and contact information</li>
              <li>Company details</li>
              <li>Communication preferences</li>
              <li>Usage data and analytics</li>
              <li>Customer service interactions</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-white mb-4">How We Use Your Information</h2>
            <p className="text-white/70 mb-4">We use the collected information for:</p>
            <ul className="list-disc list-inside text-white/70 space-y-2">
              <li>Providing and improving our services</li>
              <li>Communicating with you about our services</li>
              <li>Analyzing and optimizing our website performance</li>
              <li>Protecting against fraudulent or illegal activity</li>
              <li>Complying with legal obligations</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Data Security</h2>
            <p className="text-white/70">
              We implement appropriate technical and organizational measures to protect your personal 
              information against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Your Rights</h2>
            <p className="text-white/70 mb-4">You have the right to:</p>
            <ul className="list-disc list-inside text-white/70 space-y-2">
              <li>Access your personal information</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to data processing</li>
              <li>Withdraw consent</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Cookies</h2>
            <p className="text-white/70">
              We use cookies and similar tracking technologies to improve your browsing experience, 
              analyze site traffic, and understand where our visitors come from.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
            <p className="text-white/70 mb-4">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <a 
              href="mailto:frank@slatedigitalmedia.com"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
            >
              <Mail className="w-5 h-5" />
              frank@slatedigitalmedia.com
            </a>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Changes to This Policy</h2>
            <p className="text-white/70">
              We may update this Privacy Policy from time to time. We will notify you of any changes by 
              posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}