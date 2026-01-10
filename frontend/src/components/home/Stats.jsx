import React from 'react';

const Stats = () => {
  const stats = [
    { value: '10,000+', label: 'Total Donations' },
    { value: '$500K+', label: 'Funds Raised' },
    { value: '5,000+', label: 'Active Donors' },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats. map((stat, index) => (
            <div key={index} className="text-center">
              <h3 className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                {stat.value}
              </h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;