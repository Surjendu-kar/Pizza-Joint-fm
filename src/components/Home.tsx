import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const Home = () => {
  return (
    <div className="home container">
      <motion.h2
        initial={{ x: '-100vw' }}
        animate={{
          fontSize: '70px',
          x: 0,
        }}
        transition={{
          duration: 4,
        }}
      >
        Welcome to Pizza Joint
      </motion.h2>
      <Link to="/base">
        <button>Create Your Pizza</button>
      </Link>
    </div>
  );
};

export default Home;
