import { useContext } from "react";
import { Link } from "react-router-dom";

import CheckoutForm from "../../components/CheckoutForm";
import { CartContext } from "../../context/CartContext";

import leftArrowCircleDarkIcon from "../../assets/images/left-arrow-circle-dark-icon.svg";
import "./styles.scss";

const CheckoutPage = () => {
  const { products } = useContext(CartContext);

  return (
    <div className="checkout">
      <Link to="/cart" className="checkout__back-link">
        <img src={leftArrowCircleDarkIcon} className="checkout__back-arrow" />
      </Link>
      <CheckoutForm products={products} />
    </div>
  );
};

export default CheckoutPage;
