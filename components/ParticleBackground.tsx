import React, { useRef, useEffect } from 'react';

const ParticleBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    // FIX: useRef was called without an initial value and was incorrectly typed.
    // Initializing with `undefined` and updating the type to `number | undefined`.
    const animationFrameId = useRef<number | undefined>(undefined);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let particles: Particle[] = [];

        const resizeCanvas = () => {
            if (!canvas.parentElement) return;
            canvas.width = canvas.parentElement.clientWidth;
            canvas.height = canvas.parentElement.clientHeight;
            init();
        };

        class Particle {
            x: number;
            y: number;
            size: number;
            speedX: number;
            speedY: number;

            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2 + 0.5; // smaller particles for subtlety
                this.speedX = (Math.random() - 0.5) * 0.4; // slightly slower
                this.speedY = (Math.random() - 0.5) * 0.4;
            }

            update() {
                if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
                if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
                this.x += this.speedX;
                this.y += this.speedY;
            }

            draw() {
                ctx!.fillStyle = 'rgba(110, 231, 183, 0.5)'; // slightly more transparent
                ctx!.beginPath();
                ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx!.fill();
            }
        }

        const init = () => {
            particles = [];
            // Reduce particle density based on screen size for performance
            const isMobile = window.innerWidth < 768;
            const particleDensity = isMobile ? 30000 : 20000;
            const numberOfParticles = Math.floor((canvas.width * canvas.height) / particleDensity);
            for (let i = 0; i < numberOfParticles; i++) {
                particles.push(new Particle());
            }
        };

        const connect = () => {
            const opacity = 0.1; // Reduced opacity for connections
            for (let a = 0; a < particles.length; a++) {
                for (let b = a; b < particles.length; b++) {
                    const distance = Math.hypot(
                        particles[a].x - particles[b].x,
                        particles[a].y - particles[b].y
                    );
                    if (distance < 110) {
                        ctx!.strokeStyle = `rgba(5, 150, 105, ${1 - distance / 110 * opacity})`;
                        ctx!.lineWidth = 0.5;
                        ctx!.beginPath();
                        ctx!.moveTo(particles[a].x, particles[a].y);
                        ctx!.lineTo(particles[b].x, particles[b].y);
                        ctx!.stroke();
                    }
                }
            }
        };

        const animate = () => {
            ctx!.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => {
                p.update();
                p.draw();
            });
            connect();
            animationFrameId.current = requestAnimationFrame(animate);
        };
        
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    if (!animationFrameId.current) {
                        resizeCanvas();
                        animate();
                    }
                } else {
                    if (animationFrameId.current) {
                        cancelAnimationFrame(animationFrameId.current);
                        animationFrameId.current = undefined;
                    }
                }
            },
            { threshold: 0.01 }
        );
        
        observer.observe(canvas);
        window.addEventListener('resize', resizeCanvas);
        
        resizeCanvas();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            observer.unobserve(canvas);
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current);
            }
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute top-0 left-0 w-full h-full z-0"
        />
    );
};

export default ParticleBackground;