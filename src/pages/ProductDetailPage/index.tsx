import { useParams } from "react-router-dom";

import useResetScroll from "../../hooks/useResetScroll";
import ProductDetailHighlights from "../../components/ProductDetailHighlights";
import { ProductDetailHighlightsProps } from "../../components/ProductDetailHighlights";

import detailHighlightsData from "../../utils/detailHighlightsData";
import "./styles.scss";

interface ProductDetailPageProps {
  title: string;
  author: string;
  highlights: ProductDetailHighlightsProps;
  description: string;
  tags: string[];
}

const ProductDetailPage: React.FC<ProductDetailPageProps> = (props) => {
  useResetScroll();
  const { productId } = useParams(); // TODO: use productId for data fetching

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
          <h1 className="product-detail__info-title">Tytuł{props.title}</h1>
          <div className="product-detail__info-author">Autor{props.author}</div>
          <div className="product-detail__info-highlights">
            <ProductDetailHighlights {...detailHighlightsData} />
          </div>
          <div className="product-detail__info-description">
            {props.description}
            Opis: Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum. Duis aute irure dolor
            in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
            in culpa qui officia deserunt mollit anim id est laborum. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
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
