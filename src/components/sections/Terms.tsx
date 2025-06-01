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
              Last updated on June 1, 2025

              For the purpose of these Terms and Conditions, the terms "we", "us", "our" refer to Tune Center. The terms "you", "your", "user", "visitor" refer to any natural or legal person who is visiting our website and/or has agreed to purchase from us.

              Your use of the website and/or any purchase from us is governed by the following Terms and Conditions:

              The content of the pages of this website is subject to change without notice.

              Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness, or suitability of the information and materials found or offered on this website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.

              Your use of any information or materials on our website and/or product pages is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services, or information available through our website meet your specific requirements.

              This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance, and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.

              All trademarks reproduced on this website which are not the property of, or licensed to, the operator are acknowledged on the website.

              Unauthorized use of any information provided on this website may give rise to a claim for damages and/or be a criminal offense.

              From time to time, this website may also include links to other websites. These links are provided for your convenience to offer further information. They do not signify that we endorse the website(s). We have no responsibility for the content of the linked website(s).

              You may not create a link to this website from another website or document without prior written consent from Tune Center.

              Any dispute arising out of the use of this website and/or any purchase or engagement is subject to the laws of India.

              We shall not be liable for any loss or damage arising directly or indirectly from the decline of authorization for any transaction due to the cardholder having exceeded the preset limit agreed with the acquiring bank.

              {/* For any questions or concerns, please contact us at tunecenter.tm@gmail.com. */}
            </p>

            {/* <p>
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
            </p> */}

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
