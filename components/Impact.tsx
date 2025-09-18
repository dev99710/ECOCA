import React, { useState, useEffect, useRef } from 'react';
import AnimatedSection from './AnimatedSection';
import { impact, impactStats } from '../constants';

const StatCounter: React.FC<{ item: typeof impactStats[0] }> = ({ item }) => {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;
                    let start = 0;
                    const end = item.value;
                    if (start === end) return;
                    
                    const duration = 2000;
                    const startTime = performance.now();

                    const step = (currentTime: number) => {
                        const elapsedTime = currentTime - startTime;
                        const progress = Math.min(elapsedTime / duration, 1);
                        setCount(Math.floor(progress * (end - start) + start));
                        if (progress < 1) {
                            requestAnimationFrame(step);
                        } else {
                            setCount(end);
                        }
                    };
                    requestAnimationFrame(step);
                }
            },
            { threshold: 0.5 }
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [item.value]);

    return (
        <div ref={ref} className="text-center">
            <div className="text-4xl md:text-5xl font-extrabold text-white">
                {count.toLocaleString()}+
            </div>
            <p className="text-green-200 mt-1">{item.label}</p>
        </div>
    );
};

const ImpactCard: React.FC<{ title: string; icon: React.ReactNode; children: React.ReactNode }> = ({ title, icon, children }) => (
  <div className="group bg-white/60 backdrop-blur-lg p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full">
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
    <section id="impact" className="py-16 md:py-24 bg-gradient-to-br from-green-700 to-teal-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Tangible Results, Measurable Impact</h2>
            <p className="text-lg text-green-200 mt-2">Driving real change, one action at a time.</p>
             <div className="mt-4 w-24 h-1 bg-green-400 mx-auto rounded"></div>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {impactStats.map(stat => (
                <AnimatedSection key={stat.label}>
                    <StatCounter item={stat} />
                </AnimatedSection>
            ))}
        </div>
        
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