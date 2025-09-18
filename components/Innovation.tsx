import React from 'react';
import AnimatedSection from './AnimatedSection';

const InnovationCard: React.FC<{ title: string; children: React.ReactNode; icon: React.ReactNode }> = ({ title, icon, children }) => (
    <div className="group p-6 sm:p-8 bg-gray-50 rounded-lg shadow-lg border-l-4 border-green-600 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 bg-green-100 text-green-600 p-3 rounded-full transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
          {icon}
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-3 text-green-700">{title}</h3>
          <p className="text-gray-600 leading-relaxed">
            {children}
          </p>
        </div>
      </div>
  </div>
);


const Innovation: React.FC = () => {
  return (
    <section id="innovation" className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Innovative Edge</h2>
            <p className="text-lg text-gray-600 mt-2">Leveraging technology for smarter, verifiable impact.</p>
            <div className="mt-4 w-24 h-1 bg-green-500 mx-auto rounded"></div>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <AnimatedSection>
            <InnovationCard 
              title="AI-Personalized Learning"
              icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>}
            >
                Our platform intelligently recommends content and learning paths based on user performance, interests, and local environmental context. This ensures that education is not just engaging but also highly relevant to each student's surroundings.
            </InnovationCard>
          </AnimatedSection>
          <AnimatedSection>
             <InnovationCard 
              title="Real-Data Integration"
              icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>}
            >
                We transparently link with NGO and government APIs to verify eco-actions like tree planting or waste management. This brings credibility and allows students to see the tangible results of their efforts, bridging the gap between action and impact.
            </InnovationCard>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Innovation;