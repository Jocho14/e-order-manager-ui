import { useContext } from "react";
import CheckoutForm from "../../components/CheckoutForm";

import { CartContext } from "../../context/CartContext";

import "./styles.scss";

const CheckoutPage = () => {
  const { items } = useContext(CartContext);

  return (
    <div>
      <CheckoutForm items={items} />
    </div>
  );
};

export default CheckoutPage;
