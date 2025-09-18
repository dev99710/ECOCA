import React from 'react';
import { features } from '../constants';
import { Feature } from '../types';
import AnimatedSection from './AnimatedSection';

const FeatureCard: React.FC<{ feature: Feature; index: number }> = ({ feature, index }) => (
  <div className="group bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-green-500 flex flex-col h-full transform hover:-translate-y-2">
    {/* Main feature content */}
    <div className="flex-grow">
      <div className="flex justify-center items-center mb-4 bg-green-100 rounded-full w-16 h-16 mx-auto transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
        {feature.icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-center text-gray-800">{feature.title}</h3>
      <p className="text-gray-600 text-center">{feature.description}</p>
    </div>

    {/* Conditional animation preview for the Dashboard card */}
    {feature.title === 'Personalized Dashboard' && (
      <div className="mt-6 pt-4 border-t border-gray-200">
        <p className="text-sm font-semibold text-gray-500 text-center mb-3">
          Animation Preview
        </p>
        <div className="flex items-center justify-center space-x-4">
          {/* Growing Plant Icon */}
          <div className="text-center">
            <svg className="w-8 h-8 text-green-500 mx-auto transition-transform duration-500 ease-in-out group-hover:scale-125 group-hover:rotate-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7.014a8.003 8.003 0 0110.014 10.014C19.5 15.5 17 16 15 16c1 2 2.657 2.657 2.657 2.657z"></path></svg>
             <p className="text-xs text-gray-500 mt-1">Growth</p>
          </div>
          {/* Progress Bar */}
          <div className="w-2/3">
             <p className="text-xs text-gray-500 mb-1 text-left">Progress</p>
             <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
              <div className="bg-green-600 h-2.5 rounded-full transition-all duration-1000 ease-out w-1/5 group-hover:w-4/5"></div>
            </div>
          </div>
        </div>
      </div>
    )}
  </div>
);

const Features: React.FC = () => {
  return (
    <section id="features" className="py-16 md:py-20 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Core Features</h2>
            <p className="text-lg text-gray-600 mt-2">Engaging tools designed for impactful learning.</p>
            <div className="mt-4 w-24 h-1 bg-green-500 mx-auto rounded"></div>
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={feature.title} feature={feature} index={index} />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Features;