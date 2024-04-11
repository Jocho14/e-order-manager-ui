import { useState } from "react";
// import { useParams } from "react-router-dom";

import useResetScroll from "../../hooks/useResetScroll";
import ProductDetailHighlights from "../../components/ProductDetailHighlights";
//import { ProductDetailHighlightsProps } from "../../components/ProductDetailHighlights";

import detailHighlightsData from "../../utils/detailHighlightsData";
import "./styles.scss";

// interface ProductDetailPageProps {
//   title: string;
//   author: string;
//   highlights: ProductDetailHighlightsProps;
//   description: string;
//   tags: string[];
// }

const ProductDetailPage = () => {
  useResetScroll();
  //const { productId } = useParams<{ productId: string }>(); // TODO: use productId for data fetching
  //const [productDetails, setProductDetails] =
  //useState<ProductDetailPageProps | null>(null);
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
              src={
                "https://firebasestorage.googleapis.com/v0/b/test-2bed7.appspot.com/o/test%2Fimage4.webp?alt=media&token=c1100445-feef-4419-b6a7-5a7ed019e9c4"
              }
              alt="product image"
            />
          </div>
          <button className="product-detail__view-add-to-cart-btn">
            Dodaj do koszyka
          </button>
        </div>
        <div className="product-detail__info">
          <h1 className="product-detail__info-title">
            Tytuł{/*{productDetails.title}*/}
          </h1>
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
