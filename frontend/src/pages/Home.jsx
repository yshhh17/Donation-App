import React from 'react';
import { useAuth } from '../hooks/useAuth';
import Hero from '../components/home/Hero';
import Stats from '../components/home/Stats';
import Features from '../components/home/Features';
import HowItWorks from '../components/home/HowItWorks';
import CTA from '../components/home/CTA';

const Home = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen">
      <Hero isAuthenticated={isAuthenticated} />
      <Stats />
      <Features />
      <HowItWorks />
      <CTA isAuthenticated={isAuthenticated} />
    </div>
  );
};

export default Home;