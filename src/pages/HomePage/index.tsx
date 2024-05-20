import { useEffect, useState } from "react";

import CardGroup, { CardGroupProps } from "../../components/CardGroup";
import { ProductCardProps } from "../../components/ProductCard";
import data from "../../utils/data";
import { get, getAll } from "../../services/ebook";

import "./styles.scss";

const HomePage = () => {
  const [ebooks, setEbooks] = useState<ProductCardProps[]>([]);

  useEffect(() => {
    const fetchEbooks = async () => {
      try {
        const allEbooks = await getAll();

        if (allEbooks !== null) {
          const cardGroupProps: CardGroupProps = {
            cards: allEbooks.map((ebook: any) => ({
              id: ebook.id,
              imageUrl: ebook.image,
              name: ebook.title,
              rating: ebook.rating,
              tag: ebook.tag, // Ensure the tag is included
            })),
            tag: "Fantasy", // Or another appropriate tag based on your needs
          };

          setEbooks(cardGroupProps.cards);
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchEbooks();
  }, []);

  console.log(ebooks);

  return (
    <div className="home">
      <div className="home__hero">
        <h1 className="home__hero-title">Ebooki</h1>
        <p className="home__hero-info">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="home__content">
        <CardGroup cards={ebooks} tag={"Fantasy"} />
        <CardGroup cards={ebooks} tag={"Biografia"} />
        <CardGroup cards={ebooks} tag={"Historia"} />
      </div>
    </div>
  );
};

export default HomePage;
