import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { LoadingScreen } from './components/LoadingScreen';
import { setupGTMClickHandling } from './utils/gtm';
import './index.css';

// Set up GTM click handling
setupGTMClickHandling();

// Lazy load App with controlled timing
const App = lazy(() => 
  new Promise(resolve => {
    // Ensure minimum loading time for smooth transition
    const minLoadTime = 2500;
    const startTime = Date.now();
    
    import('./App').then(module => {
      const elapsed = Date.now() - startTime;
      const remainingTime = Math.max(0, minLoadTime - elapsed);
      
      // Use setTimeout to ensure minimum display time
      setTimeout(() => {
        resolve(module);
      }, remainingTime);
    });
  })
);

// Initialize only once
const init = () => {
  const rootElement = document.getElementById('root');
  
  if (!rootElement?.hasAttribute('data-initialized')) {
    const root = createRoot(rootElement!);
    rootElement?.setAttribute('data-initialized', 'true');
    
    root.render(
      <StrictMode>
        <BrowserRouter>
          <Suspense fallback={<LoadingScreen />}>
            <App />
          </Suspense>
        </BrowserRouter>
      </StrictMode>
    );
  }
};

// Run initialization
init();