
type ToppingsProps = {
  addTopping: (topping: string) => void;
  pizza: { base: string; toppings: string[] };
};

function Toppings({ addTopping, pizza }: ToppingsProps) {
  console.log(addTopping, pizza);
  return <div>Toppings</div>;
}

export default Toppings;
