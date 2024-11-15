import React, { useState, useEffect, lazy, Suspense, memo } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { LoadingScreen } from './components/LoadingScreen';
import { Navigation } from './components/Navigation';

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
const WhySlate = lazy(() => import('./pages/WhySlate').then(m => ({ default: m.WhySlate })));

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
    // Use requestAnimationFrame for smoother loading state transitions
    const frame = requestAnimationFrame(() => {
      const timer = window.setTimeout(() => {
        setIsLoading(false);
        // Prefetch other routes after initial load
        const prefetchRoutes = async () => {
          const routes = ['/get-started', '/watch-demo', '/why-slate'];
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

  // Update meta tags based on route
  useEffect(() => {
    const titles: Record<string, string> = {
      '/': 'Slate AI | Transform Website Visitors into Customers',
      '/get-started': 'Get Started with Slate AI | Setup Your AI Assistant',
      '/watch-demo': 'Watch Slate AI Demo | See AI Customer Service in Action',
      '/why-slate': 'Why Choose Slate AI | Leading AI Customer Service Solution'
    };

    const descriptions: Record<string, string> = {
      '/': 'Transform your customer service with Slate AI. Our intelligent web assistant converts conversations into sales, providing 24/7 automated support.',
      '/get-started': 'Start your journey with Slate AI. Set up your AI assistant in minutes and transform your customer service experience.',
      '/watch-demo': 'Watch Slate AI in action. See how our AI assistant handles customer interactions, qualifies leads, and drives conversions.',
      '/why-slate': 'Discover why Slate AI is the leading choice for businesses looking to automate and enhance their customer service with artificial intelligence.'
    };

    document.title = titles[location.pathname] || titles['/'];
    document.querySelector('meta[name="description"]')?.setAttribute('content', descriptions[location.pathname] || descriptions['/']);
  }, [location]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-slate-900 overflow-x-hidden">
      <Navigation />
      <main role="main">
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
          <Route path="/why-slate" element={
            <Suspense fallback={<LoadingScreen />}>
              <WhySlate />
            </Suspense>
          } />
        </Routes>
      </main>
    </div>
  );
}