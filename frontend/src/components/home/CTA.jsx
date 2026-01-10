import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';

const CTA = ({ isAuthenticated }) => {
  return (
    <section className="py-16 bg-blue-600 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Make an Impact?
        </h2>
        <p className="text-lg mb-8 opacity-90">
          Join our community of donors today. 
        </p>
        {! isAuthenticated && (
          <Link to="/register">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
              Sign Up Now
            </Button>
          </Link>
        )}
      </div>
    </section>
  );
};

export default CTA;