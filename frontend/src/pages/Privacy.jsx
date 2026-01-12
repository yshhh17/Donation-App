import React from 'react';
import Card from '../components/Card';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">Privacy Policy</h1>
          <p className="mt-4 text-gray-600">Last updated: January 12, 2026</p>
        </div>

        <Card className="space-y-8 p-8">
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">1. Introduction</h2>
            <p className="text-gray-600 leading-relaxed">
              Welcome to GiveHub. We respect your privacy and are committed to protecting your personal data. 
              This privacy policy will inform you as to how we look after your personal data when you visit our website 
              and tell you about your privacy rights and how the law protects you.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">2. Information We Collect</h2>
            <p className="text-gray-600 leading-relaxed mb-2">
              We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
              <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
              <li><strong>Contact Data:</strong> includes email address and telephone numbers.</li>
              <li><strong>Transaction Data:</strong> includes details about payments to and from you and other details of donations you have made.</li>
              <li><strong>Technical Data:</strong> includes internet protocol (IP) address, your login data, browser type and version.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">3. How We Use Your Data</h2>
            <p className="text-gray-600 leading-relaxed mb-2">
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
              <li>To register you as a new user.</li>
              <li>To process and deliver your donations.</li>
              <li>To manage our relationship with you.</li>
              <li>To improve our website, services, marketing and customer relationships.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">4. Payment Information</h2>
            <p className="text-gray-600 leading-relaxed">
              We use PayPal for processing donations. We do not store your credit card details on our servers. 
              Payment processing is subject to the terms and conditions and privacy policy of PayPal.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">5. Data Security</h2>
            <p className="text-gray-600 leading-relaxed">
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, 
              used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal 
              data to those employees, agents, contractors and other third parties who have a business need to know.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">6. Contact Us</h2>
            <p className="text-gray-600 leading-relaxed">
              If you have any questions about this privacy policy or our privacy practices, please contact us at:
              <br />
              <span className="font-semibold text-blue-600 mt-2 block">privacy@givehub.com</span>
            </p>
          </section>
        </Card>
      </div>
    </div>
  );
};

export default Privacy;
