import React from 'react';
import AnimatedSection from './AnimatedSection';
import { howItWorksSteps } from '../constants';

const HowItWorks: React.FC = () => {
  return (
    <section id="technology" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">How EcoLeap Works</h2>
            <p className="text-lg text-gray-600 mt-2">A simple yet powerful process to drive environmental action.</p>
            <div className="mt-4 w-24 h-1 bg-green-500 mx-auto rounded"></div>
          </div>
        </AnimatedSection>
        
        <div className="relative">
          {/* Desktop connecting line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-green-200 -translate-y-1/2"></div>
          
          <div className="grid md:grid-cols-4 gap-8 relative">
            {howItWorksSteps.map((step, index) => (
              <AnimatedSection key={step.title} delay={index * 150}>
                <div className="text-center p-6 bg-slate-50 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                  <div className="relative flex justify-center items-center mb-4">
                     {/* Mobile connecting line */}
                    {index !== 0 && <div className="md:hidden absolute bottom-full left-1/2 w-0.5 h-8 bg-green-200 -translate-x-1/2"></div>}
                    <div className="bg-green-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold z-10 ring-8 ring-slate-50">
                        {step.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;