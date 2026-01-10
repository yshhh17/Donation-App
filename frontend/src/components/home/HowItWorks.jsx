import React from 'react';

const HowItWorks = () => {
  const steps = [
    { number: 1, title: 'Sign Up', description: 'Create your free account' },
    { number: 2, title: 'Choose Amount', description: 'Select donation amount' },
    { number:  3, title: 'Pay Securely', description: 'Complete via PayPal' },
    { number: 4, title: 'Make Impact', description: 'See your contribution work' },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                {step.number}
              </div>
              <h3 className="font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;