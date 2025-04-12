import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FEATURES } from '../../utils/constants';
import { FeatureProps } from '../../utils/types';
import * as LucideIcons from 'lucide-react';

const Features: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  // Helper function to get icon component
  const getIconComponent = (iconName: string) => {
    const Icon = (LucideIcons as any)[iconName.charAt(0).toUpperCase() + iconName.slice(1)];
    return Icon ? <Icon className="h-10 w-10 text-[#E50914]" /> : null;
  };

  return (
    <section id="features" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            Why Choose Tune Center
          </motion.h2>
          <motion.p
            className="text-xl text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Experience entertainment like never before with our premium features
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {FEATURES.map((feature) => (
            <FeatureCard
              key={feature.id}
              feature={{
                ...feature,
                icon: getIconComponent(feature.icon)
              }}
              variants={itemVariants}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

interface FeatureCardProps {
  feature: {
    id: string;
    icon: React.ReactNode;
    title: string;
    description: string;
  };
  variants: any;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature, variants }) => {
  return (
    <motion.div
      variants={variants}
      className="bg-gray-900 rounded-lg p-8 hover:bg-gray-850 transition-colors duration-300"
    >
      <div className="mb-4">
        {feature.icon}
      </div>
      <h3 className="text-xl font-semibold text-white mb-3">
        {feature.title}
      </h3>
      <p className="text-gray-400">
        {feature.description}
      </p>
    </motion.div>
  );
};

export default Features;