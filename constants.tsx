import React from 'react';
import { Feature } from './types';

export const navLinks = [
  { id: 'home', title: 'Home' },
  { id: 'features', title: 'Features' },
  { id: 'innovation', title: 'Innovation' },
  { id: 'impact', title: 'Impact' },
  { id: 'testimonials', title: 'Testimonials' },
];

export const features: Feature[] = [
  {
    icon: <svg className="w-10 h-10 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" /></svg>,
    title: 'Interactive Lessons',
    description: 'Bite-sized, topic-relevant content on soil health, water conservation, etc., with instant quiz feedback.',
  },
  {
    icon: <svg className="w-10 h-10 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    title: 'Real-World Challenges',
    description: 'Track real actions like waste segregation or tree planting through photo uploads or GPS check-ins.',
  },
  {
    icon: <svg className="w-10 h-10 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9a9.75 9.75 0 100-13.5h9a9.75 9.75 0 100 13.5z" /><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9a9.75 9.75 0 100-13.5h9a9.75 9.75 0 100 13.5zM16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" /></svg>,
    title: 'Gamification System',
    description: 'Earn eco-points, unlock badges like "Green Farmer", and compete on school-level leaderboards.',
  },
  {
    icon: <svg className="w-10 h-10 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" /></svg>,
    title: 'Personalized Dashboard',
    description: 'An intuitive overview of progress and measurable impact, like tracking virtual trees planted.',
  },
];

export const innovation = [
  {
    title: 'AI-Personalized Learning',
    description: 'Our platform intelligently recommends content and learning paths based on user performance, interests, and local environmental context. This ensures that education is not just engaging but also highly relevant to each student\'s surroundings.',
    imageUrl: 'https://images.unsplash.com/photo-1620712943543-95fc6962a926?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: 'Real-Data Integration',
    description: 'We transparently link with NGO and government APIs to verify eco-actions like tree planting or waste management. This brings credibility and allows students to see the tangible results of their efforts, bridging the gap between action and impact.',
    imageUrl: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2070&auto=format&fit=crop'
  }
];

export const impact = [
  {
    title: "Socially",
    description: "Transforms environmental education from a passive subject into meaningful, hands-on action, fostering a new generation of environmentally conscious citizens.",
    icon: <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.5-2.928A9.095 9.095 0 0112 5.25c2.625 0 4.923.94 6.75 2.503M19.5 12a9.095 9.095 0 01-3.741 7.228A9.095 9.095 0 0112 21a9.095 9.095 0 01-6.75-2.503m13.5-9.497A9.095 9.095 0 0012 5.25a9.095 9.095 0 00-6.75 2.503m12.75 4.5A9.095 9.095 0 0112 13.5a9.095 9.095 0 01-6.75-2.503" /></svg>
  },
  {
    title: "Economically",
    description: "Creates opportunities for partnerships with sustainable businesses and NGOs, creating a green ecosystem that supports both education and corporate social responsibility.",
    icon: <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" /></svg>
  },
  {
    title: "Environmentally",
    description: "Drives real, measurable actions such as waste reduction, water conservation, and afforestation, directly aligning with India’s national sustainability goals.",
    icon: <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.362-3.797z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 15a3 3 0 100-6 3 3 0 000 6z" /></svg>
  }
];

export const testimonials = [
    {
        quote: "EcoLeap has revolutionized how our students perceive environmental science. The gamified challenges have turned learning into an adventure, and we've seen a tangible increase in eco-friendly practices around the campus.",
        name: "Dr. Anjali Sharma",
        title: "Principal, Delhi Public School",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
        quote: "The real-data integration is a game-changer. Our students feel a true sense of accomplishment seeing their tree-planting efforts verified and tracked. It connects their actions to a larger, measurable impact.",
        name: "Rajesh Kumar",
        title: "Head of Science Dept, Kendriya Vidyalaya",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
        quote: "As a student, I love competing with my friends on the leaderboard. Earning badges for completing challenges makes me want to do more for the environment. It's way more fun than just reading textbooks!",
        name: "Priya Singh",
        title: "Class 10 Student",
        avatar: "https://randomuser.me/api/portraits/women/68.jpg"
    }
];