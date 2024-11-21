import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';
import { GetStarted } from './pages/GetStarted';
import { WhyUs } from './pages/WhyUs';
import { HowThisWorks } from './pages/HowThisWorks';
import { WatchDemo } from './pages/WatchDemo';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfService } from './pages/TermsOfService';
import { CookiePolicy } from './pages/CookiePolicy';
import { DataDeletion } from './pages/DataDeletion';

// Memoize HomePage component
const HomePage = React.memo(() => (
  <>
    <Hero />
    <Features />
    <HowItWorks />
    <Testimonials />
    <Pricing />
  </>
));

export default function App() {
  return (
    <div className="min-h-screen bg-slate-900 overflow-x-hidden flex flex-col">
      <Navigation />
      <main role="main" className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/why-us" element={<WhyUs />} />
          <Route path="/how-this-works" element={<HowThisWorks />} />
          <Route path="/watch-demo" element={<WatchDemo />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/cookies" element={<CookiePolicy />} />
          <Route path="/data-deletion" element={<DataDeletion />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}