import React, { useState, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Features from './components/sections/Features';
import About from './components/sections/About';
import LoadingSpinner from './components/shared/LoadingSpinner';
import ErrorBoundary from './components/shared/ErrorBoundary';
import { ToastNotificationContainer, showToast } from './components/shared/ToastNotification';
import Terms from './components/sections/Terms';
import ScrollToTop from './components/shared/ScrollToTop';

// Lazy-loaded components
const PremiumPlans = lazy(() => import('./components/sections/PremiumPlans'));

function App() {


  const handleSelectPlan = (planId: string) => {
    showToast({
      message: `You've selected the ${planId.charAt(0).toUpperCase() + planId.slice(1)} plan!`,
      type: 'success'
    });
  };

  const handleGetStarted = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Router>
      <ErrorBoundary>
        <div className="flex flex-col min-h-screen">
          <ScrollToTop></ScrollToTop>
          <Header />

          <main className="flex-grow">
            <Routes>
              <Route path="/" element={
                <>
                  <Hero onGetStarted={handleGetStarted} />
                  <Features />
                  <Suspense fallback={<div className="py-20 flex justify-center"><LoadingSpinner size="lg" /></div>}>
                    <PremiumPlans onSelectPlan={handleSelectPlan} />
                  </Suspense>
                  <About />
                  {/* <Contact /> */}
                </>
              } />
              {/* Add more routes as needed */}

              <Route path="/terms" element={
                <Suspense fallback={<LoadingSpinner size="lg" />}>
                  <Terms />
                </Suspense>
              } />
            </Routes>

          </main>

          <Footer />
          <ToastNotificationContainer />
        </div>
      </ErrorBoundary>
    </Router>
  );
}

export default App;