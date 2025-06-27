import { motion } from 'motion/react';

type OrderProps = {
  pizza: { base: string; toppings: string[] };
};
const conatinerVariants = {
  hidden: {
    x: '100vw',
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring' as const,
      delay: 0.5,
      when: 'beforeChildren',
    },
    // 'when: "beforeChildren"' ensures the parent animation completes
    // before any child animations start. This is useful for sequencing
    // animations so that the parent animates first, then the children.
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

function Order({ pizza }: OrderProps) {
  return (
    <motion.div
      className="container order"
      variants={conatinerVariants}
      initial="hidden"
      animate="visible"
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
