import React from 'react';
import AnimatedSection from './AnimatedSection';

// A reusable card component for technology features
const TechCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
    <div className="bg-white/80 backdrop-blur-md rounded-lg p-6 text-center shadow-lg border h-full transform transition-transform duration-300 hover:-translate-y-2">
        <div className="flex justify-center items-center mb-4 bg-green-100 text-green-600 rounded-full w-20 h-20 mx-auto">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 leading-relaxed">
            {description}
        </p>
    </div>
);

const Technology: React.FC = () => {
  const techFeatures = [
    {
      icon: <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.5 4.5 0 002.25 15z" /></svg>,
      title: "Scalable Cloud Infrastructure",
      description: "Built on a flexible cloud backbone, our platform is designed to seamlessly handle growth from a single school to millions of students across India."
    },
    {
      icon: <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25A2.25 2.25 0 015.25 3h4.5M15 3h4.5a2.25 2.25 0 012.25 2.25v4.5" /></svg>,
      title: "Cross-Platform Accessibility",
      description: "Our responsive design ensures a flawless experience on desktops, tablets, and smartphones, making environmental education truly accessible."
    },
    {
      icon: <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.956 11.956 0 013.545 4.51m5.236-2.484A11.956 11.956 0 0115.455 4.51M12 21.75v-3.75m-3.55-4.036a11.956 11.956 0 01-5.236 2.484A11.956 11.956 0 014.51 15.455m2.484-5.236A11.956 11.956 0 014.51 8.77m10.94-4.256A11.956 11.956 0 0120.49 8.77m-2.484 5.236A11.956 11.956 0 0120.49 15.455m-5.236 2.484A11.956 11.956 0 0116.455 20.49m-4.256-10.94A11.956 11.956 0 018.77 4.51m5.236 2.484A11.956 11.956 0 018.77 15.455m2.484 5.236A11.956 11.956 0 0115.455 16.455" /></svg>,
      title: "Data Security & Privacy",
      description: "We employ industry-standard encryption and privacy protocols to create a safe, secure, and trusted digital learning environment for all students."
    }
  ];

  return (
    <section id="technology" className="py-16 md:py-24 bg-white relative parallax-bg" style={{backgroundImage: "url('https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=2069&auto=format&fit=crop')"}}>
      <div className="absolute inset-0 bg-slate-50/95 backdrop-blur-sm"></div>
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Platform Architecture</h2>
            <p className="text-lg text-gray-600 mt-2">Engineered for a seamless, secure, and nationwide experience.</p>
            <div className="mt-4 w-24 h-1 bg-green-500 mx-auto rounded"></div>
          </div>
        </AnimatedSection>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 items-stretch">
          {techFeatures.map((feature, index) => (
             <AnimatedSection key={feature.title} delay={index * 100}>
                <TechCard 
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technology;