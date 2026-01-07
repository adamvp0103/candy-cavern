import { useNavigate } from "react-router";
import Header from "../components/Header";
import BillingInformation from "../components/BillingInformation";
import ShippingInformation from "../components/ShippingInformation";
import Nav from "../components/Nav";
import type { BasketItem, Product } from "../types/types";
import OrderSummary from "../components/OrderSummary";

interface CheckoutProps {
  basket: BasketItem[];
  products: Product[];
}

function Checkout({ basket, products }: CheckoutProps) {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <Nav />
      <main>
        <h1>Checkout</h1>
        {basket.length > 0 ? (
          <>
            <OrderSummary basket={basket} products={products} />
            <section>
              <form onSubmit={() => navigate("/")}>
                <BillingInformation />
                <ShippingInformation />
                <button className="place-order-button">Place Order</button>
              </form>
            </section>
          </>
        ) : (
          <span>Your basket is empty</span>
        )}
      </main>
    </>
  );
}

export default Checkout;
