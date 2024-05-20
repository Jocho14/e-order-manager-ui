import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { CartContext } from "../../context/CartContext";
import CartProduct from "../../components/CartProduct";

import "./styles.scss";

const CartPage = () => {
  const { products, cartCount, getTotalCost } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <div className="cart__wrapper">
      {cartCount > 0 ? (
        <div className="cart__container">
          <h1 className="cart__title">Koszyk</h1>
          <div className="cart__headers">
            <h4>Szczegóły</h4>
            <h4>{""}</h4>
            <h4>Cena</h4>
          </div>
          <div className="cart__content">
            <div className="content__products">
              {products.map((currentProduct) => (
                <CartProduct
                  key={currentProduct.id}
                  id={currentProduct.id}
                  price={currentProduct.price}
                  image={currentProduct.image}
                  title={currentProduct.title}
                ></CartProduct>
              ))}
            </div>
            <div className="content__finalize">
              <h1>Podsumowanie</h1>
              <h2 className="finalize__sum">
                Suma: {getTotalCost().toFixed(2)} zł
              </h2>
              <button
                className="finalize__checkout-btn"
                onClick={() => navigate("/checkout")}
              >
                Przejdź do płatności
              </button>
            </div>
          </div>
        </div>
      ) : (
        <h1 className="cart__empty">Koszyk jest pusty</h1>
      )}
    </div>
  );
};

export default CartPage;
