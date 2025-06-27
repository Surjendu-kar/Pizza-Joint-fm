import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

type BaseProps = {
  addBase: (base: string) => void;
  pizza: { base: string; toppings: string[] };
};

// 'hidden' represents the initial properties, and 'visible' represents the animate properties
const conatinerVariants = {
  hidden: {
    x: '-100vw',
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring' as const,
      delay: 0.5,
    },
  },
  exit: {
    x: '100vw',
    transition: {
      ease: 'easeInOut' as const,
      // duration: 0.4,
    },
  },
};

const nextVariants = {
  hidden: {
    x: '-100vw',
    opacity: 0,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring' as const,
      stiffness: 120,
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

const Base = ({ addBase, pizza }: BaseProps) => {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

  return (
    <motion.div
      className="base container"
      variants={conatinerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map((base) => {
          let spanClass = pizza.base === base ? 'active' : '';
          return (
            <motion.li
              whileHover={{ scale: 1.3, color: '#f8e112', originX: 0 }}
              transition={{ type: 'spring', stiffness: 300 }}
              key={base}
              onClick={() => addBase(base)}
            >
              <span className={spanClass}>{base}</span>
            </motion.li>
          );
        })}
      </ul>

      {pizza.base && (
        <motion.div
          className="next"
          variants={nextVariants}
          // The 'initial' and 'animate' props are inherited from the parent motion.div.
          // If the keys are the same, we don't need to specify them again in the child.
        >
          <Link to="/toppings">
            <motion.button variants={buttonVariants} whileHover="hover">
              Next
            </motion.button>
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Base;
