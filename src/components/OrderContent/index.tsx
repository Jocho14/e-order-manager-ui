import React, { useState, useEffect } from "react";

import { get } from "../../services/ebook";

import "./styles.scss";

interface OrderContentProps {
  databaseIds: number[];
}

interface OrderEbookProps {
  title: string;
  image: string;
  mainContent: string;
  additionalContent: string;
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
          {ebooks.length > 1 ? (
            <p className="order-details__content-title">Kupione produkty</p>
          ) : (
            <p>Kupiony produkt</p>
          )}
          {ebooks.map((item) => (
            <div className="order-details__list">
              <div className="order-details__element">
                <img src={item.image} className="order-details__image" />
                <div className="order-details__links">
                  <p className="order-details__main-content">
                    Ebook: {item.mainContent}
                  </p>
                  {!!item.additionalContent && (
                    <p className="order-details__additional-content">
                      Dodatkowa zawartość: {item.additionalContent}
                    </p>
                  )}
                </div>
              </div>
              <p className="order-details__title">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderContent;
