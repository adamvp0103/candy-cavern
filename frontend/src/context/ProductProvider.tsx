import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { Product } from "../types";

interface ProductContextType {
  products: Product[];
  productsLoading: boolean;
  productsError: boolean;
}

const ProductContext = createContext<ProductContextType>({
  products: [],
  productsLoading: false,
  productsError: false,
});

const useProducts = () => useContext(ProductContext);

interface ProductProviderProps {
  children: ReactNode;
}

function ProductProvider({ children }: ProductProviderProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [productsLoading, setProductsLoading] = useState(true);
  const [productsError, setProductsError] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // TODO: Replace with live URL
        const response = await fetch("http://localhost:3000/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setProductsError(true);
        console.error(`Error fetching products: ${error}`);
      } finally {
        setProductsLoading(false);
      }
    };

    fetchProducts();
  });

  return (
    <ProductContext value={{ products, productsLoading, productsError }}>
      {children}
    </ProductContext>
  );
}

export default ProductProvider;
export { useProducts };
