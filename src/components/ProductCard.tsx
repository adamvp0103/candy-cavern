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
    <li className="product-card" key={product.name}>
      {/* TODO: Replace "test" with product.name after configuring image dictionary */}
      {/* TODO: Remove fixed width and height */}
      <div className="product-card-except-button">
        <img
          className="product-card-image"
          src={imageDictionary['test']}
          alt={product.name}
          width={100}
          height={100}
        />
        <div className="product-card-info">
          <div className="product-card-title-and-price">
            <h3>{product.name}</h3>
            <span>${product.price.toFixed(2)}</span>
          </div>
          <p>{product.description}</p>
        </div>
      </div>
      {/* TODO: Implement add to basket */}
      <button className="product-card-button">Add to Basket</button>
    </li>
  );
}

export default ProductCard;
