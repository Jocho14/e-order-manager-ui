import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import OrderProduct from "../OrderProduct";
import { get } from "../../services/ebook";

import "./styles.scss";

interface OrderContentProps {
  databaseIds: number[];
}

export interface OrderEbookProps {
  title: string;
  image: string;
  mainContent: string;
  additionalContents: any[];
}

const OrderContent: React.FC<OrderContentProps> = (props) => {
  const [ebooks, setEbooks] = useState<OrderEbookProps[]>([]);

  useEffect(() => {
    const fetchEbooks = async () => {
      try {
        const ebookPromises = props.databaseIds.map((id) => get(id));
        const fetchedEbooks = await Promise.all(ebookPromises);
        setEbooks(fetchedEbooks);
      } catch (err) {
        console.log(err);
      }
    };

    fetchEbooks();
  }, [props.databaseIds]);

  return (
    <div className="order-details__wrapper">
      <div className="order-details__container">
        <div className="order-details__content">
          {ebooks.length > 0 ? (
            ebooks.map((ebook, index) => (
              <OrderProduct
                key={index}
                title={ebook.title}
                image={ebook.image}
                mainContent={ebook.mainContent}
                additionalContents={ebook.additionalContents}
              />
            ))
          ) : (
            <p>Ładowanie...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderContent;
