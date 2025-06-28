import { motion, useCycle } from 'motion/react';

const loaderVariants = {
  animateOne: {
    x: [-20, 20],
    y: [0, -30, 0],

    transition: {
      x: { duration: 0.5, repeat: Infinity, repeatType: 'reverse' as const },
      y: {
        duration: 0.5,
        ease: 'easeOut' as const,
        repeat: Infinity,
        repeatType: 'reverse' as const,
      },
    },
  },
  animateTwo: {
    y: [0, -40],
    x: 0,
    transition: {
      y: {
        repeat: Infinity,
        duration: 0.25,
        ease: 'easeOut' as const,
        repeatType: 'reverse' as const,
      },
    },
  },
};

function Loader() {
  const [animation, cycleAnimation] = useCycle('animateOne', 'animateTwo');
  return (
    <>
      <motion.div
        className="loader"
        variants={loaderVariants}
        animate={animation}
      />
      <button onClick={() => cycleAnimation()}>change cycle</button>
    </>
  );
}

export default Loader;
