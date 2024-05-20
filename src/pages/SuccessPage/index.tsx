import OrderContent from "../../components/OrderContent";

import cartSuccessIcon from "../../assets/images/cart-success-icon.svg";
import "./styles.scss";

interface SuccessPageProps {
  email: string;
  lineItems: any;
}

const SuccessPage: React.FC<SuccessPageProps> = (props) => {
  const databaseIds: any[] = [];
  props.lineItems.map((item: any) =>
    databaseIds.push(item.product_metadata.database_id)
  );
  return (
    <div className="success-page__wrapper">
      <div className="success-page__container">
        <img src={cartSuccessIcon} className="success-page__image" />
        <h1 className="success-page__title">Dziękujemy!</h1>
        <p className="success-page__info">
          Potwierdzenie zakupu oraz produkt zostały wysłane na podany adres
          e-mail: <span className="success-page__span">{props.email}</span>
        </p>
        <OrderContent databaseIds={databaseIds} />
      </div>
    </div>
  );
};

export default SuccessPage;
