import React from "react";
import { Link } from "react-router-dom";

import { OrderEbookProps } from "../OrderContent";

import linkArrowIcon from "../../assets/images/link-arrow-icon.svg";
import "./styles.scss";

const OrderProduct: React.FC<OrderEbookProps> = (props) => {
  return (
    <div className="order-product__container">
      <div className="order-product__left">
        <div className="order-product__left--wrapper">
          <img src={props.image} className="order-product__left--image" />
          <h4 className="order-product__left--title">{props.title}</h4>
        </div>
      </div>

      <div className="order-product__right">
        <Link
          to={props.mainContent}
          className="order-product__right--link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="order-product__right--btn">
            Otwórz ebooka{" "}
            <img className="order-product__right--icon" src={linkArrowIcon} />
          </button>
        </Link>

        {props.additionalContents.map((content) => {
          return (
            <Link
              to={content.contentURL}
              className="order-product__right--link"
              target="_blank"
              rel="noopener noreferrer"
              key={content.contentId}
            >
              <button className="order-product__right--btn grey">
                Otwórz dodatkową zawartość <img />
                <img
                  className="order-product__right--icon"
                  src={linkArrowIcon}
                />
              </button>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default OrderProduct;
