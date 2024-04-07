import React from "react";

import starIcon from "../../assets/images/star-icon.svg";
import videoIcon from "../../assets/images/video-icon.svg";
import bookIcon from "../../assets/images/book-icon.svg";
import "./styles.scss";

export interface ProductCardProps {
  id: number;
  imageUrl: string;
  title: string;
  author: string;
  rating: number;
  hasVideo: boolean;
  tag: string;
}

const ProductCard: React.FC<ProductCardProps> = (props) => {
  const [imageLoaded, setimageLoaded] = React.useState(false);
  return (
    <div className="card">
      <div className="card__image-container">
        {!imageLoaded && <div className="card__image-loader"></div>}
        <img
          className="card__image"
          draggable="false"
          src={props.imageUrl}
          alt={props.title}
          onLoad={() => setimageLoaded(true)}
          style={{ display: imageLoaded ? "block" : "none" }}
        />
      </div>
      <div className="card__content">
        <div className="card__info">
          <div className="card__info-title">{props.title}</div>
          <div className="card__info-author">- {props.author}</div>
        </div>

        <div className="card__details">
          <div className="card__rating">
            <img className="card__rating-star-icon" src={starIcon} alt="Star" />
            <p className="card__rating-count">{props.rating}</p>
          </div>
          <div className="card__options">
            <img
              className="card__options-book-icon"
              src={bookIcon}
              alt="Book"
            />
            {props.hasVideo && (
              <img
                className="card__options-video-icon"
                src={videoIcon}
                alt="Video"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
