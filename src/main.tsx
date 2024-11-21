import { StrictMode, lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { LoadingScreen } from './components/LoadingScreen';
import './index.css';

// Lazy load the main App component with artificial delay
const App = lazy(() => new Promise(resolve => {
  // Add a minimum delay of 2.5 seconds to ensure loading animation is visible
  setTimeout(() => {
    resolve(import('./App'));
  }, 2500);
}));

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Suspense fallback={<LoadingScreen />}>
        <App />
      </Suspense>
    </BrowserRouter>
  </StrictMode>
);