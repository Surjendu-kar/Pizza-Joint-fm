import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

type ToppingsProps = {
  addTopping: (topping: string) => void;
  pizza: { base: string; toppings: string[] };
};

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

function Toppings({ addTopping, pizza }: ToppingsProps) {
  let toppings = [
    'mushrooms',
    'peppers',
    'onions',
    'olives',
    'extra cheese',
    'tomatoes',
  ];
  return (
    <motion.div
      variants={conatinerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="toppings container"
    >
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map((topping) => {
          let spanClass = pizza.toppings.includes(topping) ? 'active' : '';
          return (
            <motion.li
              whileHover={{ scale: 1.3, color: '#f8e112', originX: 0 }}
              transition={{ type: 'spring', stiffness: 300 }}
              key={topping}
              onClick={() => addTopping(topping)}
            >
              <span className={spanClass}>{topping}</span>
            </motion.li>
          );
        })}
      </ul>

      <Link to="/order">
        <motion.button whileHover="hover" variants={buttonVariants}>
          Order
        </motion.button>
      </Link>
    </motion.div>
  );
}

export default Toppings;
