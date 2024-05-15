import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { CartContext } from "../../context/CartContext";
import CartProduct from "../../components/CartProduct";

import "./styles.scss";

const CartPage = () => {
  const { items, getTotalCost } = useContext(CartContext);
  const productsCount = items.reduce((acc) => acc + 1, 0);
  const navigate = useNavigate();

  return (
    <div className="cart">
      {productsCount > 0 ? (
        <>
          <h1 className="title">Przedmioty w koszyku:</h1>
          {items.map((currentProduct) => (
            // <h1 key={currentProduct.id}>{currentProduct.id} {currentProduct.title} ({currentProduct.quantity} x {currentProduct.price}zł)</h1>
            <CartProduct
              key={currentProduct.id}
              id={currentProduct.id}
              price={20}
            ></CartProduct>
          ))}

          <h1 className="sum">Suma: {getTotalCost().toFixed(2)} zł</h1>

          <button className="buy" onClick={() => navigate("/checkout")}>
            Przejdź do płatności
          </button>
        </>
      ) : (
        <h1 className="empty">Koszyk jest pusty</h1>
      )}
    </div>
  );
};

export default CartPage;
