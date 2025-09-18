import React from 'react';
import AnimatedSection from './AnimatedSection';

const Technology: React.FC = () => {
  return (
    <section id="technology" className="py-16 md:py-20 bg-green-50">
      <div className="container mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Technology & Feasibility</h2>
            <div className="mt-4 mb-8 w-24 h-1 bg-green-500 mx-auto rounded"></div>
            <p className="text-lg text-gray-600 mb-6">
              Our no-code/low-code development strategy enables rapid prototyping, iteration, and scalability. We are building our platform primarily on <span className="font-bold text-green-700">Bubble</span>, leveraging its robust visual editor and powerful database management capabilities to efficiently track users, points, and leaderboards.
            </p>
            <p className="text-lg text-gray-600">
              This approach significantly reduces development time and cost, allowing us to focus on creating a feature-rich, user-centric experience that can be quickly adapted and scaled to educational institutions across India.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Technology;