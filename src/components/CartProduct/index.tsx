import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import data from "../../utils/data"; // Upewnij się, że ścieżka do danych jest poprawna
import "./styles.scss";

export interface CartProductProps {
  id: number;
  price: number;
  imageUrl: string;
  name: string;
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
      <div className="cart-product__container">
        <img
          src={productData.imageUrl}
          alt={productData.title}
          className="cart-product__image"
        />
        <div className="cart-product__details">
          <h3 className="details__title">{productData.title}</h3>

          <h3 className="details__info">Ebook + film</h3>

          <button
            onClick={() => cart.remove(id)}
            className="details__remove-btn"
          ></button>
        </div>
        <p className="cart-product__price">{productData.price.toFixed(2)} zł</p>
      </div>
    </>
  );
}

export default CartProduct;
