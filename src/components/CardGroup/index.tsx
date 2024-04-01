import React from "react";
import ProductCard from "../ProductCard";
import { ProductCardProps } from "../ProductCard";
import "./styles.scss"

interface CardGroupProps {
  cards: ProductCardProps[];
  tag: string;
}

const CardGroup: React.FC<CardGroupProps> = (props) => {
  return (
    <div className="card-group-wrapper">
      <h1 className="tag">{props.tag + " ->"}</h1>
      <div className="card-group">
        {props.cards
          .filter((card) => card.tag === props.tag)
          .map((card) => (
            <ProductCard key={card.id} {...card} />
          ))}
      </div>
    </div>
  );
};

export default CardGroup;
