import { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Base from './components/Base';
import Toppings from './components/Toppings';
import Order from './components/Order';
import { AnimatePresence } from 'motion/react';
import Modal from './components/Modal';

// Define the pizza type
interface Pizza {
  base: string;
  toppings: string[];
}

function App() {
  const [pizza, setPizza] = useState<Pizza>({ base: '', toppings: [] });
  const location = useLocation();
  const [showModal, setShowModal] = useState(false);

  const addBase = (base: string) => {
    setPizza({ ...pizza, base });
  };

  const addTopping = (topping: string) => {
    let newToppings: string[];
    if (!pizza.toppings.includes(topping)) {
      newToppings = [...pizza.toppings, topping];
    } else {
      newToppings = pizza.toppings.filter((item) => item !== topping);
    }
    setPizza({ ...pizza, toppings: newToppings });
  };

  return (
    <>
      <Header />
      <Modal showModal={showModal} />
      {/*  When we change routes, we want the old page/component to stay visible
      for a short time so it can play its exit animation (like fading out or
      sliding away).
      At the same time, the new page/component can start to
      appear (with its own enter animation).
      Both the old and new components
      are in the DOM for a brief moment—the old one is animating out, and the
      new one is animating in. */}
      <AnimatePresence mode="wait" onExitComplete={() => setShowModal(false)}>
        <Routes location={location} key={location.key}>
          <Route
            path="/base"
            element={<Base addBase={addBase} pizza={pizza} />}
          />
          <Route
            path="/toppings"
            element={<Toppings addTopping={addTopping} pizza={pizza} />}
          />
          <Route
            path="/order"
            element={<Order pizza={pizza} setShowModal={setShowModal} />}
          />
          <Route path="/" element={<Home />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
