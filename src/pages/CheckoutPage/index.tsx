import { useContext } from "react";
import CheckoutForm from "../../components/CheckoutForm";

import { CartContext } from "../../context/CartContext";

import "./styles.scss";

const CheckoutPage = () => {
  const { products } = useContext(CartContext);

  return (
    <div>
      <CheckoutForm products={products} />
    </div>
  );
};

export default CheckoutPage;
