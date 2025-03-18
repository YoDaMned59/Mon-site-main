// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const Logo = ({ className }) => {
  return (
    <motion.div
      className={`logo ${className || ''}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <img 
        src="/images/Sd.png" 
        alt="SDuvivierTech - Un site à votre image" 
        className="logo__image"
      />
    </motion.div>
  );
};

export default Logo; 