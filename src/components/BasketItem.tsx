import imageDictionary from "../assets/images";

interface BasketItem {
  name: string;
  price: number;
  quantity: number;
}

interface BasketItemProps {
  item: BasketItem;
}

function BasketItem({ item }: BasketItemProps) {
  return (
    <li key={item.name}>
      {/* TODO: Replace "test" with product.name after configuring image dictionary */}
      {/* TODO: Remove fixed width and height */}
      <img
        src={imageDictionary['test']}
        alt={item.name}
        width={100}
        height={100}
      />
      <h3>{item.name}</h3>
      <span>${item.price.toFixed(2)}</span>
      <div>
        {/* TODO: Implement quantity decrement */}
        <button>-</button>
        <span>{item.quantity}</span>
        {/* TODO: Implement quantity increment */}
        <button>+</button>
      </div>
      {/* TODO: Implement removal */}
      {/* TODO: Replace with remove icon */}
      <button>Remove</button>
    </li>
  );
}

export default BasketItem;