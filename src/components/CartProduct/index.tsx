import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import data from "../../utils/data"; // Upewnij się, że ścieżka do danych jest poprawna
import "./styles.scss";

interface CartProductProps {
  id: number;
  price: number;
}

function CartProduct(props: CartProductProps) {
  const cart = useContext(CartContext);
  const { id } = props;

  const productData = data.find((product) => product.id === id);

  if (!productData) {
    return <p>Produkt nie został znaleziony.</p>;
  }

  return (
    <>
      <div className="item">
        <img
          src={productData.imageUrl}
          alt={productData.title}
          className="product-image"
        />
        <div className="product-details">
          <h3>{productData.title}</h3>
          <p>Cena: {(20).toFixed(2)} zł</p>
          {/* <p>Cena: {productData.price.toFixed(2)} zł</p> */}
          <button
            onClick={() => cart.deleteFromCart(id)}
            className="remove-btn"
          >
            Usuń
          </button>
          <hr />
        </div>
      </div>
    </>
  );
}

export default CartProduct;
