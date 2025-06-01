import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image */}
          <motion.div 
            ref={ref}
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Tune Center Team" 
                className="rounded-lg shadow-xl"
                loading="lazy"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#E50914] rounded-lg p-6 shadow-lg">
                <p className="text-white font-bold text-4xl">4+</p>
                <p className="text-white text-sm">Years of Excellence</p>
              </div>
            </div>
          </motion.div>
          
          {/* Content */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              About Tune Center Movies Hub
            </h2>
            <p className="text-gray-400 mb-6">
              Founded in 2021, Tune Center Movies Hub has revolutionized the way people enjoy entertainment. Our mission is to provide the best streaming experience with a vast library of high-quality content at an affordable price.
            </p>
            <p className="text-gray-400 mb-6">
              What started as a small startup has grown into a global platform serving millions of subscribers worldwide. We're passionate about storytelling and committed to bringing you the TV shows, and original content.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div>
                <p className="text-[#E50914] font-bold text-4xl mb-2">100+</p>
                <p className="text-white">Happy Subscribers</p>
              </div>
              <div>
                <p className="text-[#E50914] font-bold text-4xl mb-2">3+</p>
                <p className="text-white">Countries Served</p>
              </div>
              <div>
                <p className="text-[#E50914] font-bold text-4xl mb-2">10+</p>
                <p className="text-white">TV & Shows</p>
              </div>
              {/* <div>
                <p className="text-[#E50914] font-bold text-4xl mb-2">500+</p>
                <p className="text-white">Original Productions</p>
              </div> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;