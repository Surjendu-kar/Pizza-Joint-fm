import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const containerVariants = {
  hidden: { opacity: 0.2 },
  visible: { opacity: 1, transition: { duration: 2, delay: 1.5 } },
  exit: {
    x: '-100vw',
    transition: {
      ease: 'easeInOut' as const,
      // duration: 0.4,
    },
  },
};

const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: '0px 0px 8px rgb(255,255,255)',
    boxShadow: '0px 0px 8px rgb(255,255,255)',
    transition: {
      duration: 0.3,
      repeat: Infinity,
      repeatType: 'reverse' as const,
    },
  },
};

const Home = () => {
  return (
    <motion.div
      className="home container"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={containerVariants}
    >
      <motion.h2
        initial={{ fontSize: '60px' }}
        animate={{
          fontSize: '70px',
        }}
        transition={{
          duration: 2,
        }}
        className="font-bold"
      >
        Welcome to Pizza Joint
      </motion.h2>
      <Link to="/base">
        <motion.button variants={buttonVariants} whileHover="hover">
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Home;
