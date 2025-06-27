import { AnimatePresence, motion } from 'motion/react';
import { Link } from 'react-router-dom';

type ModalProps = {
  showModal: boolean;
  // setShowModal: (base: boolean) => void;
};

const backdrop = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modal = {
  hidden: {
    y: '-100vh',
    opacity: 0,
  },
  visible: {
    y: 200,
    opacity: 1,
    transition: {
      // Added this delay so that the modal will come up 0.5 seconds after the background gets darker
      delay: 0.5,
    },
  },
};
function Modal({ showModal }: ModalProps) {
  return (
    <AnimatePresence mode="wait">
      {showModal && (
        <motion.div
          className="backdrop"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={backdrop}
        >
          <motion.div className="modal" variants={modal}>
            <p> Want to make another pizza</p>
            <Link to="/">
              <button>Start Again</button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Modal;
