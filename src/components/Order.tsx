import React from 'react';

type OrderProps = {
  pizza: { base: string; toppings: string[] };
};

function Order({ pizza }: OrderProps) {
  console.log(pizza);
  return <div>Order</div>;
}

export default Order;
