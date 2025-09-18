import React from 'react';
import AnimatedSection from './AnimatedSection';
import { impact } from '../constants';

const ImpactCard: React.FC<{ title: string; icon: React.ReactNode; children: React.ReactNode }> = ({ title, icon, children }) => (
  <div className="group bg-white/90 backdrop-blur-md p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full">
    <div className="flex justify-center mb-4">
        <div className="bg-green-100 text-green-600 p-5 rounded-full transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
            {icon}
        </div>
    </div>
    <h3 className="text-2xl font-bold text-green-700 mb-3 text-center">{title}</h3>
    <p className="text-gray-600 text-center">{children}</p>
  </div>
);

const Impact: React.FC = () => {
  return (
    <section id="impact" className="py-16 md:py-24 relative parallax-bg" style={{backgroundImage: "url('https://images.unsplash.com/photo-1509316975829-ff16484212c6?q=80&w=1964&auto=format&fit=crop')"}}>
       <div className="absolute inset-0 bg-slate-100/95"></div>
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Impact & Benefits</h2>
            <p className="text-lg text-gray-600 mt-2">Driving change across multiple sectors.</p>
            <div className="mt-4 w-24 h-1 bg-green-500 mx-auto rounded"></div>
          </div>
        </AnimatedSection>
        <div className="grid md:grid-cols-3 gap-8">
          {impact.map((item, index) => (
            <AnimatedSection key={item.title} delay={index * 100}>
              <ImpactCard 
                title={item.title}
                icon={item.icon}
              >
                {item.description}
              </ImpactCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;