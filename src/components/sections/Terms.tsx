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
        <ScrollToTop></ScrollToTop>
        <motion.div
          ref={ref}
        //   initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Terms & Conditions
          </h2>

          <div className="space-y-6 text-sm md:text-base leading-relaxed">
            <p>
              Welcome to TuneCenter. These Terms and Conditions govern your use of our website located at <strong>tunecenter.vercel.app</strong>, operated by <strong>TC Admin</strong>.
            </p>

            <p>
              By accessing and using this website, you agree to be bound by these terms. If you do not agree, please do not use the service.
            </p>

            <h3 className="text-lg font-semibold text-white">1. Intellectual Property</h3>
            <p>
              All content, logos, images, and materials on this website are the property of TuneCenter. Unauthorized use is strictly prohibited.
            </p>

            <h3 className="text-lg font-semibold text-white">2. Use of the Website</h3>
            <p>
              You agree to use this website only for lawful purposes and not to infringe or restrict others' use and enjoyment of the site.
            </p>

            <h3 className="text-lg font-semibold text-white">3. Links to Other Websites</h3>
            <p>
              We may link to third-party websites. We are not responsible for their content or practices.
            </p>

            <h3 className="text-lg font-semibold text-white">4. Limitation of Liability</h3>
            <p>
              The content is provided "as is." TuneCenter is not liable for any damages arising from use of the site.
            </p>

            <h3 className="text-lg font-semibold text-white">5. Privacy</h3>
            <p>
              Please refer to our Privacy Policy for details on how we handle your personal information.
            </p>

            <h3 className="text-lg font-semibold text-white">6. Changes to These Terms</h3>
            <p>
              We may update our Terms at any time. Continued use of the site means you accept any changes.
            </p>

            <h3 className="text-lg font-semibold text-white">7. Governing Law</h3>
            <p>
              These Terms are governed by the laws of India (Tamil Nadu jurisdiction).
            </p>

            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <p>
              Questions? Email us at <a href="mailto:tunecenter.tm@gmail.com" className="text-blue-400 underline">tunecenter.tm@gmail.com</a>.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Terms;
