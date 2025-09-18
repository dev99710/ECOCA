import React from 'react';
import AnimatedSection from './AnimatedSection';
import { testimonials } from '../constants';

const TestimonialCard: React.FC<{ testimonial: typeof testimonials[0] }> = ({ testimonial }) => (
    <div className="bg-white/60 backdrop-blur-lg p-8 rounded-lg shadow-lg flex flex-col h-full transform transition-transform duration-300 hover:-translate-y-2 border-t-4 border-green-500">
        <div className="flex-grow mb-4">
            <p className="text-gray-600 italic">"{testimonial.quote}"</p>
        </div>
        <div className="flex items-center">
            <img src={testimonial.avatar} alt={testimonial.name} className="w-14 h-14 rounded-full mr-4 border-2 border-green-200" />
            <div>
                <p className="font-bold text-gray-800">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.title}</p>
            </div>
        </div>
    </div>
);


const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-slate-100">
      <div className="container mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">What People Are Saying</h2>
            <p className="text-lg text-gray-600 mt-2">Endorsed by educators and loved by students.</p>
            <div className="mt-4 w-24 h-1 bg-green-500 mx-auto rounded"></div>
          </div>
        </AnimatedSection>
        <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
                <AnimatedSection key={index} delay={index * 100}>
                    <TestimonialCard testimonial={testimonial} />
                </AnimatedSection>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;