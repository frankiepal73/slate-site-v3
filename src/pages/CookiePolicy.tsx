import React from 'react';
import { Mail } from 'lucide-react';

export function CookiePolicy() {
  return (
    <div className="min-h-screen bg-slate-900 pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-8">Cookie Policy</h1>
        
        <div className="prose prose-invert prose-slate max-w-none">
          <p className="text-white/70">Last updated: March 15, 2024</p>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-white mb-4">What Are Cookies</h2>
            <p className="text-white/70">
              Cookies are small text files that are stored on your computer or mobile device when you visit our website. 
              They help us make your visit to our site better by:
            </p>
            <ul className="list-disc list-inside text-white/70 space-y-2 mt-4">
              <li>Remembering your preferences and settings</li>
              <li>Understanding how you use our site</li>
              <li>Improving your user experience</li>
              <li>Providing you with relevant content</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Types of Cookies We Use</h2>
            
            <h3 className="text-xl font-semibold text-white mt-6 mb-3">Essential Cookies</h3>
            <p className="text-white/70 mb-4">
              These cookies are necessary for the website to function properly. They enable basic functions like page navigation 
              and access to secure areas of the website.
            </p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">Performance Cookies</h3>
            <p className="text-white/70 mb-4">
              These cookies help us understand how visitors interact with our website by collecting and reporting information 
              anonymously. This helps us improve our website's functionality.
            </p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">Functionality Cookies</h3>
            <p className="text-white/70 mb-4">
              These cookies allow the website to remember choices you make and provide enhanced, more personal features.
            </p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">Marketing Cookies</h3>
            <p className="text-white/70 mb-4">
              These cookies track your visit across our website and help us deliver more relevant advertising content.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-white mb-4">How to Control Cookies</h2>
            <p className="text-white/70 mb-4">
              Most web browsers allow you to control cookies through their settings preferences. However, limiting cookies 
              may impact your experience of our website. You can:
            </p>
            <ul className="list-disc list-inside text-white/70 space-y-2">
              <li>Delete all cookies from your browser</li>
              <li>Set your browser to prevent cookies from being set</li>
              <li>Accept or decline cookies when you first visit our site</li>
              <li>Manage cookie preferences through our cookie consent tool</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Third-Party Cookies</h2>
            <p className="text-white/70">
              We may use third-party services that also set cookies on our website. These include analytics tools, 
              advertising networks, and social media platforms. We do not have control over these third-party cookies.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Updates to This Policy</h2>
            <p className="text-white/70">
              We may update this Cookie Policy from time to time. We will notify you of any changes by posting the new 
              Cookie Policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
            <p className="text-white/70 mb-4">
              If you have any questions about our Cookie Policy, please contact us at:
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