
type BaseProps = {
  addBase: (base: string) => void;
  pizza: { base: string; toppings: string[] };
};

function Base({ addBase, pizza }: BaseProps) {
  console.log(addBase, pizza);
  return <div>Base</div>;
}

export default Base;
