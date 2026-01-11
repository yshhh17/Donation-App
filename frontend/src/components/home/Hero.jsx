import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Button';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-gradient-to-b from-blue-50 to-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Make a Difference with{' '}
            <span className="text-blue-600">Every Donation</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Join thousands of donors making a real impact.  Secure, transparent, 
            and instant donations powered by PayPal.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="primary" 
              size="lg"
              onClick={() => navigate('/register')}
              className="w-full sm:w-auto px-8 py-4 text-lg"
            >
              Start Donating
            </Button>
            <Button 
              variant="secondary" 
              size="lg"
              onClick={() => navigate('/login')}
              className="w-full sm:w-auto px-8 py-4 text-lg"
            >
              Login
            </Button>
          </div>

          {/* Optional:  Trust Badge */}
        </div>
      </div>
    </section>
  );
};

export default Hero;