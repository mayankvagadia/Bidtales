import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

// This is a workaround to prevent unused motion lint error
const MotionComponent = motion.div;

export default function AboutUs() {
  // Motion is used in the JSX below
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <MotionComponent
      className="min-h-screen bg-white pt-32 pb-20 px-4 sm:px-6 lg:px-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center"
          variants={itemVariants}
        >
          We're Not Just a Marketing Agency — We're a Growth Movement.
        </motion.h1>
        
        <motion.div className="prose prose-lg text-gray-600 mb-16" variants={itemVariants}>
          <p className="text-xl mb-8">
            BidTales is a powerhouse collective of marketers, designers, and strategists committed to launching brands. 
            Founded with a dream to build a global creative economy, we connect clients with top-tier professionals via transparent bidding.
          </p>
          
          <div className="bg-blue-50 p-6 rounded-xl mb-8">
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">Our Mission</h3>
            <p className="text-lg">
              Empower 10,000+ freelancers and 1,000+ brands by 2030.
            </p>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Core Values</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <ArrowRightIcon className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-lg">Integrity First</h4>
                  <p className="text-gray-600">We believe in doing what's right, even when no one is watching.</p>
                </div>
              </li>
              <li className="flex items-start">
                <ArrowRightIcon className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-lg">Innovation Always</h4>
                  <p className="text-gray-600">We constantly push boundaries and challenge the status quo.</p>
                </div>
              </li>
              <li className="flex items-start">
                <ArrowRightIcon className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-lg">People Over Profits</h4>
                  <p className="text-gray-600">Our community and relationships come before everything else.</p>
                </div>
              </li>
              <li className="flex items-start">
                <ArrowRightIcon className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-lg">Speed, Simplicity & Scalability</h4>
                  <p className="text-gray-600">We deliver efficient solutions that grow with your business.</p>
                </div>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </MotionComponent>
  );
}
