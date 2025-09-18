import React from 'react';
import AnimatedSection from './AnimatedSection';

const ImpactCard: React.FC<{ title: string; icon: React.ReactNode; children: React.ReactNode }> = ({ title, icon, children }) => (
  <div className="group bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
    <div className="flex justify-center mb-4">
        <div className="bg-green-100 text-green-600 p-4 rounded-full transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
            {icon}
        </div>
    </div>
    <h3 className="text-2xl font-bold text-green-700 mb-3 text-center">{title}</h3>
    <p className="text-gray-600 text-center">{children}</p>
  </div>
);

const Impact: React.FC = () => {
  return (
    <section id="impact" className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Impact & Benefits</h2>
            <p className="text-lg text-gray-600 mt-2">Driving change across multiple sectors.</p>
            <div className="mt-4 w-24 h-1 bg-green-500 mx-auto rounded"></div>
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8">
            <ImpactCard 
              title="Socially"
              icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>}
            >
              Transforms environmental education from a passive subject into meaningful, hands-on action, fostering a new generation of environmentally conscious citizens.
            </ImpactCard>
            <ImpactCard 
              title="Economically"
              icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>}
            >
              Creates opportunities for partnerships with sustainable businesses and NGOs, creating a green ecosystem that supports both education and corporate social responsibility.
            </ImpactCard>
            <ImpactCard 
              title="Environmentally"
              icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h1a2 2 0 002-2v-1a2 2 0 012-2h1.945M7.7 9.928l.346.345a.5.5 0 00.708 0l.346-.345a.5.5 0 01.708 0l.346.345a.5.5 0 00.708 0l.346-.345m0 0a2.488 2.488 0 113.52 3.52 2.488 2.488 0 01-3.52-3.52zM12 21a9 9 0 100-18 9 9 0 000 18z"></path></svg>}
            >
              Drives real, measurable actions such as waste reduction, water conservation, and afforestation, directly aligning with India’s national sustainability goals.
            </ImpactCard>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Impact;