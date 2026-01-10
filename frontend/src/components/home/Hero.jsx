import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';

const Hero = ({ isAuthenticated }) => {
  return (
    <section className="w-full bg-blue-600 text-white py-24 md:py-32">
      <div className="w-full px-6 md:px-12 lg:px-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Make a Difference Today
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
          Secure and transparent donation platform.  Start making an impact now.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {isAuthenticated ? (
            <Link to="/donate">
              <Button className="w-full sm:w-auto">Donate Now</Button>
            </Link>
          ) : (
            <>
              <Link to="/register" className="w-full sm:w-auto">
                <Button className="w-full">Get Started</Button>
              </Link>
              <Link to="/login" className="w-full sm:w-auto">
                <Button variant="secondary" className="w-full">Login</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;