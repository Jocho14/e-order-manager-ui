import { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

import { CartContext } from "../../context/CartContext";
import useResetScroll from "../../hooks/useResetScroll";
import PopupButton from "../../components/PopupButton";
import ProductDetailHighlights from "../../components/ProductDetailHighlights";
import detailHighlightsData from "../../utils/detailHighlightsData";
import { get } from "../../services/ebook";
// import data from "../../utils/data";

import "./styles.scss";

// interface ProductDetailPageProps {
//   product: {
//     id: string;
//     imageUrl: string;
//     title: string;
//     author: string;
//     rating: number;
//     hasVideo: boolean;
//     tag: string;
//     price: number; // Dodanie ceny
//   };
// }

interface ProductDetailPageProps {
  title: string;
  image: string;
  //author: string;
  rating: number;
  tag: string;
}

const ProductDetailPage = () => {
  useResetScroll();
  const { productId } = useParams<{ productId: string }>();
  const [details, setDetails] = useState<ProductDetailPageProps>();

  useEffect(() => {
    const fetchEbook = async () => {
      try {
        const ebookDetails = await get(Number(productId));
        console.log(ebookDetails);
        setDetails(ebookDetails);
      } catch (err) {
        console.log(err);
      }
    };

    fetchEbook();
  }, []);
  //const [productDetails, setProductDetails] =
  //useState<ProductDetailPageProps | null>(null);
  // const productDetails = data.find(
  //   (product) => product.id === Number(productId)
  // );
  const cart = useContext(CartContext);

  const [addToCartSuccess, setAddToCartSuccess] = useState(false);
  const [collapsed, setCollapsed] = useState<Boolean>(true);

  const toggleCollapsed = () => {
    return setCollapsed(!collapsed);
  };

  return (
    <div className="product-detail__wrapper">
      <div className="product-detail">
        <h1 className="product-detail__breadcrumb-path">
          Strona główna {">"} Tytuły {">"} Kategoria
        </h1>
        <div className="product-detail__view">
          <div className="product-detail__view-image__wrapper">
            <img
              className="product-detail__view-image"
              src={details?.image}
              alt="product image"
            />
          </div>
          <PopupButton
            onClick={() =>
              productId && setAddToCartSuccess(cart.add(Number(productId)))
            }
            label={"Dodaj do koszyka"}
            message={
              addToCartSuccess
                ? "Dodano do koszyka"
                : "Produkt znajduje się w koszyku"
            }
            className="product-detail__view-add-to-cart-btn"
          />
        </div>
        <div className="product-detail__info">
          <h1 className="product-detail__info-title">{details?.title}</h1>
          <div className="product-detail__info-author">
            Autor{/*{productDetails.author}*/}
          </div>
          <div className="product-detail__info-highlights">
            <ProductDetailHighlights {...detailHighlightsData} />
          </div>
          <div className="product-detail__info-description__wrapper">
            <div
              className={`product-detail__info-description ${
                collapsed ? "product-detail__info-description--collapsed" : ""
              }`}
            >
              {/* {productDetails.description} */}
              Opis: Duis aute irure dolor in reprehenderit in voluptate velit
              esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
              {collapsed && (
                <div className="product-detail__info-description__text-fade"></div>
              )}
            </div>
            <button
              className="product-detail__info-description__expand-btn"
              onClick={toggleCollapsed}
            >
              {collapsed ? "Pokaż więcej ↓" : "Pokaż mniej ↑"}
            </button>
          </div>
          <div className="product-detail__info-tags">
            #tag #tag #tag #tag
            {/* {props.tags.map((tag) => (
              <p>{tag}</p>
            ))} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
