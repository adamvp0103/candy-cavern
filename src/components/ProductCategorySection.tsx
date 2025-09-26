import ProductCard from './ProductCard';

interface Product {
  name: string;
  price: number;
  description: string;
}

interface Category {
  name: string;
  products: Product[];
}

interface ProductCategorySectionProps {
  category: Category;
}

function ProductCategorySection({ category }: ProductCategorySectionProps) {
  return (
    <section key={category.name} className="product-category-section">
      <h2>{category.name}</h2>
      <ul className="product-cards">
        {category.products.map(product => (
          <ProductCard product={product} />
        ))}
      </ul>
    </section>
  );
}

export default ProductCategorySection;
