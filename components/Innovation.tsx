import React from 'react';
import AnimatedSection from './AnimatedSection';
import { innovation } from '../constants';

const InnovationCard: React.FC<{ item: typeof innovation[0], reverse?: boolean }> = ({ item, reverse = false }) => (
    <div className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${reverse ? 'md:grid-flow-col-dense' : ''}`}>
        <AnimatedSection className={`${reverse ? 'md:col-start-2' : ''}`}>
            <div className="relative aspect-video md:aspect-square rounded-lg shadow-2xl overflow-hidden group">
                <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110" loading="lazy" decoding="async" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10"></div>
            </div>
        </AnimatedSection>
        <AnimatedSection delay={100}>
            <div>
                <h3 className="text-2xl font-bold mb-3 text-green-700">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                    {item.description}
                </p>
            </div>
        </AnimatedSection>
    </div>
);


const Innovation: React.FC = () => {
  return (
    <section id="innovation" className="py-16 md:py-24 bg-gradient-to-b from-white to-slate-100">
      <div className="container mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Innovative Edge</h2>
            <p className="text-lg text-gray-600 mt-2">Leveraging technology for smarter, verifiable impact.</p>
            <div className="mt-4 w-24 h-1 bg-green-500 mx-auto rounded"></div>
          </div>
        </AnimatedSection>

        <div className="space-y-16 md:space-y-24">
          <InnovationCard item={innovation[0]} />
          <InnovationCard item={innovation[1]} reverse={true} />
        </div>
      </div>
    </section>
  );
};

export default Innovation;