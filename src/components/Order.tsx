import { motion } from 'motion/react';
import { useEffect } from 'react';

type OrderProps = {
  pizza: { base: string; toppings: string[] };
  setShowModal: (base: boolean) => void;
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
      // 'mass' controls how heavy the spring feels.
      // A higher mass makes the animation slower and more forceful,
      // while a lower mass makes it quicker and lighter.
      mass: 0.4,

      // 'damping' controls how quickly the spring comes to rest.
      // A higher damping value means less bounce and a quicker stop,
      // while a lower value means more bounce and a longer time to settle.
      damping: 8,
      when: 'beforeChildren',
      // 'staggerChildren' controls the delay between the start of each child's animation.
      // A higher value means each child will start animating further apart in time,
      // creating a staggered, cascading effect for child animations.
      staggerChildren: 0.4,
    },
    // 'when: "beforeChildren"' ensures the parent animation completes
    // before any child animations start. This is useful for sequencing
    // animations so that the parent animates first, then the children.
  },
  exit: {
    x: '100vw',
    transition: {
      ease: 'easeInOut' as const,
      // duration: 0.4,
    },
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

function Order({ pizza, setShowModal }: OrderProps) {
  useEffect(() => {
    setTimeout(() => {
      setShowModal(true);
    }, 1000);
  }, [setShowModal]);

  return (
    <motion.div
      className="container order"
      variants={conatinerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h2 className="text-2xl">Thank you for your order :)</h2>
      <motion.p variants={childVariants}>
        You ordered a {pizza.base} pizza with:
      </motion.p>
      {pizza.toppings.map((topping) => (
        <motion.div variants={childVariants} key={topping}>
          {topping}
        </motion.div>
      ))}
    </motion.div>
  );
}

export default Order;
