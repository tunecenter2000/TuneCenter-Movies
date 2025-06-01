import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ScrollToTop from '../shared/ScrollToTop';

const Terms: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="terms" className="py-20 bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 max-w-4xl">
        <ScrollToTop />
        <motion.div
          ref={ref}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-6 text-sm md:text-base leading-relaxed">

            {/* Privacy Policy Section */}
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-12 mb-8">
              Privacy Policy
            </h2>

            <p>
              At Tune Center, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you visit our website.
            </p>

            <h3 className="text-lg font-semibold text-white">1. Information We Collect</h3>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Personal Information:</strong> We do not collect personal information unless you voluntarily provide it through contact forms or other interactive features.</li>
              <li><strong>Usage Data:</strong> We may collect non-personal information such as browser type, operating system, and pages visited to improve our website's performance and user experience.</li>
            </ul>

            <h3 className="text-lg font-semibold text-white">2. Use of Information</h3>
            <p>The information we collect is used to:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Enhance and personalize your experience on our website.</li>
              <li>Monitor and analyze website usage and trends.</li>
              <li>Respond to user inquiries and feedback.</li>
            </ul>

            <h3 className="text-lg font-semibold text-white">3. Cookies</h3>
            <p>
              Tune Center may use cookies to improve functionality and user experience. You can choose to accept or decline cookies through your browser settings.
            </p>

            <h3 className="text-lg font-semibold text-white">4. Third-Party Services</h3>
            <p>
              Our website may contain links to third-party websites or services. We are not responsible for the privacy practices of these external sites. We recommend reviewing their privacy policies before providing any personal information.
            </p>

            <h3 className="text-lg font-semibold text-white">5. Data Security</h3>
            <p>
              We implement appropriate security measures to protect your information from unauthorized access, alteration, or disclosure.
            </p>

            <h3 className="text-lg font-semibold text-white">6. Changes to This Policy</h3>
            <p>
              Tune Center reserves the right to update this Privacy Policy at any time. We encourage users to review this page periodically for any changes.
            </p>

            <h3 className="text-lg font-semibold text-white">7. Contact Us</h3>
            <p>
              If you have any questions or concerns about this Privacy Policy, please contact us at <a href="mailto:tunecenter.tm@gmail.com" className="text-blue-400 underline">tunecenter.tm@gmail.com</a>.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Terms;
