import "./styles.scss";
import ProductCard from "../../components/ProductCard";
//import CardGroup from "../../components/CardGroup";
import data from "../../utils/data";

const data1 = data[0];
const data2 = data[1];
const data3 = data[2];
const data4 = data[3];

const HomePage = () => {
  return (
    <div className="home">
      <ProductCard {...data1} />
      <ProductCard {...data2} />
      <ProductCard {...data3} />
      <ProductCard {...data4} />
      <ProductCard {...data2} />
      <ProductCard {...data3} />
      <ProductCard {...data1} />
      <ProductCard {...data2} />
      <ProductCard {...data3} />
      <ProductCard {...data1} />
      <ProductCard {...data2} />
      <ProductCard {...data3} />
      <ProductCard {...data1} />
      <ProductCard {...data2} />
    </div>
  );
};

export default HomePage;
