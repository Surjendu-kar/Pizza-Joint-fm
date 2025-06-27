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
        <motion.button
          animate={{
            scale: 1.1,
            transition: {
              duration: 2,
            },
          }}
          whileHover={{
            scale: 1.1,
            textShadow: '0px 0px 8px rgb(255,255,255)',
            boxShadow: '0px 0px 8px rgb(255,255,255)',
          }}
         
        >
          Create Your Pizza
        </motion.button>
      </Link>
    </div>
  );
};

export default Home;
