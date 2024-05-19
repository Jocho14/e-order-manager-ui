import { useEffect, useState } from "react";

import CardGroup, { CardGroupProps } from "../../components/CardGroup";
import data from "../../utils/data";
import { get, getAll } from "../../services/ebook";

import "./styles.scss";

const HomePage = () => {
  const [ebooks, setEbooks] = useState<CardGroupProps>();

  useEffect(() => {
    const fetchEbooks = async () => {
      try {
        const allEbooks = await getAll();
        setEbooks(allEbooks);
      } catch (err) {
        console.error(err);
      } finally {
      }
    };
    console.log(ebooks);

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
        {/* <CardGroup cards={ebooks} tag={"Fantasy"} /> */}
        <CardGroup cards={data} tag={"Top 20"} />
        <CardGroup cards={data} tag={"Top 20"} />
        <CardGroup cards={data} tag={"Top 20"} />
      </div>
    </div>
  );
};

export default HomePage;
