import React from "react";

import starHighlightIcon from "../../assets/images/star-highlight-icon.svg";
import stackHighlightIcon from "../../assets/images/stack-highlight-icon.svg";
import globeHighlightIcon from "../../assets/images/globe-highlight-icon.svg";
import bookHighlightIcon from "../../assets/images/book-highlight-icon.svg";
import videoHighlightIcon from "../../assets/images/video-highlight-icon.svg";
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
            <div className="highlights__list__item__stats">
              <img
                className="highlights__list__item__stats-icon"
                src={starHighlightIcon}
                alt="star"
              />
              {props.rating}
            </div>
          </li>
        )}
        {props.language && (
          <li className="highlights__list__item">
            <p>Język</p>
            <div className="highlights__list__item__stats">
              <img
                className="highlights__list__item__stats-icon"
                src={globeHighlightIcon}
                alt="globe"
              />
              {props.language}
            </div>
          </li>
        )}
        {props.hasVideo && (
          <li className="highlights__list__item">
            <p>Format</p>
            <div className="highlights__list__item__stats">
              {props.hasVideo && (
                <img
                  className="highlights__list__item__stats-icon"
                  src={videoHighlightIcon}
                  alt="video"
                />
              )}
              <img
                className="highlights__list__item__stats-icon"
                src={bookHighlightIcon}
                alt="book"
              />
            </div>
          </li>
        )}
        {props.category && (
          <li className="highlights__list__item">
            <p>Kategoria</p>
            <div className="highlights__list__item__stats">
              <img
                className="highlights__list__item__stats-icon"
                src={stackHighlightIcon}
                alt="stack"
              />
              {props.category}
            </div>
          </li>
        )}
      </ul>
    </div>
  );
};

export default ProductDetailHighlights;
