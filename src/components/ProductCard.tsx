import imageDictionary from '../assets/images';

interface Product {
  name: string;
  price: number;
  description: string;
}

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <li key={product.name}>
      {/* TODO: Replace "test" with product.name after configuring image dictionary */}
      {/* TODO: Remove fixed width and height */}
      <img
        src={imageDictionary['test']}
        alt={product.name}
        width={100}
        height={100}
      />
      <h3>{product.name}</h3>
      <span>${product.price.toFixed(2)}</span>
      <p>{product.description}</p>
      {/* TODO: Implement add to basket */}
      <button>Add to Basket</button>
    </li>
  );
}

export default ProductCard;
