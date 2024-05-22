import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import data from "../../utils/data"; // Upewnij się, że ścieżka do danych jest poprawna
import { get } from "../../services/ebook";
import "./styles.scss";

export interface CartProductProps {
  id: number;
  price: number;
  image: string;
  title: string;
}

function CartProduct(props: CartProductProps) {
  const cart = useContext(CartContext);
  const [cartProduct, setCartProduct] = useState<CartProductProps>();
  const { id } = props;

  useEffect(() => {
    const fetchEbook = async () => {
      try {
        const ebookDetails = await get(Number(id));
        setCartProduct(ebookDetails);
      } catch (err) {
        console.log(err);
      }
    };

    fetchEbook();
  }, []);

  if (!cartProduct) {
    return <p>Produkt nie został znaleziony.</p>;
  }

  return (
    <>
      <div className="cart-product__container">
        <img
          src={cartProduct.image}
          alt={cartProduct.title}
          className="cart-product__image"
        />
        <div className="cart-product__details">
          <h3 className="details__title">{cartProduct.title}</h3>

          <h3 className="details__info">Ebook + film</h3>

          <button
            onClick={() => cart.remove(id)}
            className="details__remove-btn"
          ></button>
        </div>
        <p className="cart-product__price">{cartProduct.price}zł</p>
      </div>
    </>
  );
}

export default CartProduct;
