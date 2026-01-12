import React from 'react';
import Card from '../components/Card';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Header Section */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            About <span className="text-blue-600">GiveHub</span>
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Empowering change through secure, transparent, and impactful giving.
          </p>
        </div>

        {/* Mission Card */}
        <Card className="p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            At GiveHub, we believe that everyone has the power to make a difference. 
            Our mission is to bridge the gap between compassionate donors and the causes 
            that need them most. We provide a seamless, secure platform where transparency 
            is paramount, ensuring that your generosity translates directly into real-world impact.
          </p>
        </Card>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Transparency</h3>
            <p className="text-gray-600">
              We believe in open books. Track your donations and see exactly where your money goes.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Security</h3>
            <p className="text-gray-600">
              Your financial safety is our top priority. We use industry-standard encryption and PayPal processing.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
            <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Impact</h3>
            <p className="text-gray-600">
              We focus on efficiency to maximize the value of every dollar donated to the causes you care about.
            </p>
          </div>
        </div>

        {/* Our Story */}
        <div className="bg-blue-50 rounded-2xl p-8 md:p-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Founded in 2026, GiveHub started as a simple idea: donating should be easy, transparent, and accessible to everyone. 
            Frustrated by clunky interfaces and opaque charity processes, our team of developers and philanthropists came together 
            to build a modern solution.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Today, we are proud to serve a growing community of donors who are changing the world, one contribution at a time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
