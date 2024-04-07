import React from "react";

import "./styles.scss";

export interface ProductDetailHighlightsProps {
  reviewCount: number;
  rating: number;
  language: string;
  hasVideo: boolean;
  category: string;
}

const ProductDetailHighlights: React.FC<ProductDetailHighlightsProps> = (
  props
) => {
  return (
    <div className="highlights">
      <ul className="highlights__list">
        {props.reviewCount && (
          <li className="highlights__list__item">
            <p>{`${props.reviewCount} Ocena`}</p>
            {props.rating}
          </li>
        )}
        {props.language && (
          <li className="highlights__list__item">
            <p>Język</p>
            {props.language}
          </li>
        )}
        {props.hasVideo && (
          <li className="highlights__list__item">
            <p>Format</p>
            has video
          </li>
        )}
        {props.category && (
          <li className="highlights__list__item">
            <p>Kategoria</p>
            {props.category}
          </li>
        )}
      </ul>
    </div>
  );
};

export default ProductDetailHighlights;
