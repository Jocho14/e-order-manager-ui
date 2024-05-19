import { useContext } from "react";
import CheckoutForm from "../../components/CheckoutForm";

import { CartContext } from "../../context/CartContext";

import "./styles.scss";

const CheckoutPage = () => {
  const { products } = useContext(CartContext);
  console.log("checkout page products: ", products);

  return (
    <div>
      <CheckoutForm products={products} />
    </div>
  );
};

export default CheckoutPage;
