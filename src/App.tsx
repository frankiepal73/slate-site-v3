import React, { useState, useEffect, lazy, Suspense, memo } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { LoadingScreen } from './components/LoadingScreen';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';

// Lazy load page components with prefetch
const Hero = lazy(() => {
  const component = import('./components/Hero').then(m => ({ default: m.Hero }));
  // Prefetch other components after Hero loads
  import('./components/Features');
  import('./components/HowItWorks');
  return component;
});
const Features = lazy(() => import('./components/Features').then(m => ({ default: m.Features })));
const HowItWorks = lazy(() => import('./components/HowItWorks').then(m => ({ default: m.HowItWorks })));
const Testimonials = lazy(() => import('./components/Testimonials').then(m => ({ default: m.Testimonials })));
const Pricing = lazy(() => import('./components/Pricing').then(m => ({ default: m.Pricing })));
const GetStarted = lazy(() => import('./pages/GetStarted').then(m => ({ default: m.GetStarted })));
const WatchDemo = lazy(() => import('./pages/WatchDemo').then(m => ({ default: m.WatchDemo })));
const WhyUs = lazy(() => import('./pages/WhyUs').then(m => ({ default: m.WhyUs })));
const HowThisWorks = lazy(() => import('./pages/HowThisWorks').then(m => ({ default: m.HowThisWorks })));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy').then(m => ({ default: m.PrivacyPolicy })));
const TermsOfService = lazy(() => import('./pages/TermsOfService').then(m => ({ default: m.TermsOfService })));
const CookiePolicy = lazy(() => import('./pages/CookiePolicy').then(m => ({ default: m.CookiePolicy })));
const DataDeletion = lazy(() => import('./pages/DataDeletion').then(m => ({ default: m.DataDeletion })));

// Memoize route components to prevent unnecessary re-renders
const HomePage = memo(() => (
  <>
    <Hero />
    <section id="features" aria-label="Features" className="animate-on-scroll">
      <Features />
    </section>
    <section id="how-it-works" aria-label="How It Works" className="animate-on-scroll">
      <HowItWorks />
    </section>
    <section id="testimonials" aria-label="Testimonials" className="animate-on-scroll">
      <Testimonials />
    </section>
    <section id="pricing" aria-label="Pricing" className="animate-on-scroll">
      <Pricing />
    </section>
  </>
));

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      const timer = window.setTimeout(() => {
        setIsLoading(false);
        const prefetchRoutes = async () => {
          const routes = ['/get-started', '/watch-demo', '/why-us', '/how-this-works', '/privacy', '/terms', '/cookies', '/data-deletion'];
          routes.forEach(route => {
            const link = document.createElement('link');
            link.rel = 'prefetch';
            link.href = route;
            document.head.appendChild(link);
          });
        };
        prefetchRoutes();
      }, 2500);

      return () => {
        window.clearTimeout(timer);
        cancelAnimationFrame(frame);
      };
    });

    return () => {
      cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    const titles: Record<string, string> = {
      '/': 'Slate AI | Transform Website Visitors into Customers',
      '/get-started': 'Get Started with Slate AI | Setup Your AI Assistant',
      '/watch-demo': 'Watch Slate AI Demo | See AI Customer Service in Action',
      '/why-us': 'Why Slate AI | Leading AI Customer Service Solution',
      '/how-this-works': 'How Slate AI Works | Your Journey to Automated Success',
      '/privacy': 'Privacy Policy | Slate AI',
      '/terms': 'Terms of Service | Slate AI',
      '/cookies': 'Cookie Policy | Slate AI',
      '/data-deletion': 'Data Deletion Request | Slate AI'
    };

    const descriptions: Record<string, string> = {
      '/': 'Transform your customer service with Slate AI. Our intelligent web assistant converts conversations into sales, providing 24/7 automated support.',
      '/get-started': 'Start your journey with Slate AI. Set up your AI assistant in minutes and transform your customer service experience.',
      '/watch-demo': 'Watch Slate AI in action. See how our AI assistant handles customer interactions, qualifies leads, and drives conversions.',
      '/why-us': 'Discover why Slate AI is the leading choice for businesses looking to automate and enhance their customer service with artificial intelligence.',
      '/how-this-works': 'Learn how Slate AI transforms your business in 7 simple steps. From setup to success, we guide you through the entire journey.',
      '/privacy': 'Learn about how Slate AI protects your privacy and handles your data.',
      '/terms': 'Read our Terms of Service to understand your rights and responsibilities when using Slate AI.',
      '/cookies': 'Learn about how Slate AI uses cookies to improve your browsing experience.',
      '/data-deletion': 'Request deletion of your personal data from Slate AI systems.'
    };

    document.title = titles[location.pathname] || titles['/'];
    document.querySelector('meta[name="description"]')?.setAttribute('content', descriptions[location.pathname] || descriptions['/']);
  }, [location]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-slate-900 overflow-x-hidden flex flex-col">
      <Navigation />
      <main role="main" className="flex-grow">
        <Routes>
          <Route path="/" element={
            <Suspense fallback={<LoadingScreen />}>
              <HomePage />
            </Suspense>
          } />
          <Route path="/get-started" element={
            <Suspense fallback={<LoadingScreen />}>
              <GetStarted />
            </Suspense>
          } />
          <Route path="/watch-demo" element={
            <Suspense fallback={<LoadingScreen />}>
              <WatchDemo />
            </Suspense>
          } />
          <Route path="/why-us" element={
            <Suspense fallback={<LoadingScreen />}>
              <WhyUs />
            </Suspense>
          } />
          <Route path="/how-this-works" element={
            <Suspense fallback={<LoadingScreen />}>
              <HowThisWorks />
            </Suspense>
          } />
          <Route path="/privacy" element={
            <Suspense fallback={<LoadingScreen />}>
              <PrivacyPolicy />
            </Suspense>
          } />
          <Route path="/terms" element={
            <Suspense fallback={<LoadingScreen />}>
              <TermsOfService />
            </Suspense>
          } />
          <Route path="/cookies" element={
            <Suspense fallback={<LoadingScreen />}>
              <CookiePolicy />
            </Suspense>
          } />
          <Route path="/data-deletion" element={
            <Suspense fallback={<LoadingScreen />}>
              <DataDeletion />
            </Suspense>
          } />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}