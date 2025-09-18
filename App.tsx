
import React, { Suspense, lazy } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ScrollToTopButton from './components/ScrollToTopButton';

const Features = lazy(() => import('./components/Features'));
const Innovation = lazy(() => import('./components/Innovation'));
const Technology = lazy(() => import('./components/Technology'));
const Impact = lazy(() => import('./components/Impact'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const CTA = lazy(() => import('./components/CTA'));
const Footer = lazy(() => import('./components/Footer'));

const SectionLoader: React.FC = () => (
    <div className="h-96 w-full flex justify-center items-center">
        <div className="w-12 h-12 border-4 border-t-green-500 border-gray-200 rounded-full animate-spin"></div>
    </div>
);

const App: React.FC = () => {
  return (
    <div className="bg-slate-50 text-gray-800 font-sans">
      <Header />
      <main>
        <Hero />
        <Suspense fallback={<SectionLoader />}>
          <Features />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Innovation />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Technology />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Impact />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Testimonials />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <CTA />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
      <ScrollToTopButton />
    </div>
  );
};

export default App;