import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import ProductCard, { ProductCardProps } from "../ProductCard";

import leftArrowIcon from "../../assets/images/left-arrow-icon.svg";
import rightArrowIcon from "../../assets/images/right-arrow-icon.svg";
import "./styles.scss";

interface CardGroupProps {
  cards: ProductCardProps[];
  tag: string;
}

const CardGroup: React.FC<CardGroupProps> = (props) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const detectTouch = () => {
      setIsTouchDevice(
        "ontouchstart" in window || navigator.maxTouchPoints > 0
      );
    };

    detectTouch();

    window.addEventListener("resize", detectTouch);
    return () => window.removeEventListener("resize", detectTouch);
  }, []);

  const checkScrollButtons = () => {
    const { current } = scrollRef;
    if (current) {
      const maxScrollLeft = current.scrollWidth - current.clientWidth;
      setCanScrollLeft(current.scrollLeft > 0);
      setCanScrollRight(current.scrollLeft < maxScrollLeft);
    }
  };

  useEffect(() => {
    checkScrollButtons();
    window.addEventListener("resize", checkScrollButtons);
    return () => window.removeEventListener("resize", checkScrollButtons);
  }, []);

  const scroll = (direction: string) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount =
        direction === "left" ? -current.offsetWidth : current.offsetWidth;
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      setTimeout(checkScrollButtons, 200);
    }
  };

  return (
    <div className="card-group__wrapper">
      <h1 className="card-group__tag">{props.tag + " →"}</h1>
      {canScrollLeft && !isTouchDevice && (
        <input
          type="image"
          src={leftArrowIcon}
          className="scroll-btn left"
          onClick={() => scroll("left")}
        />
      )}

      <div className="card-group" ref={scrollRef} onScroll={checkScrollButtons}>
        {props.cards
          .filter((card) => card.tag === props.tag)
          .map((card) => (
            <Link
              className="card-group__product-link"
              to={`/product/${card.id}`}
              key={card.id}
            >
              <ProductCard {...card} />
            </Link>
          ))}
      </div>
      {canScrollRight && !isTouchDevice && (
        <input
          type="image"
          src={rightArrowIcon}
          className="scroll-btn right"
          onClick={() => scroll("right")}
        />
      )}
    </div>
  );
};

export default CardGroup;
