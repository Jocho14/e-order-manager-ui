import "./styles.scss";

interface SuccessPageProps {
  email: string;
}

const SuccessPage: React.FC<SuccessPageProps> = (props) => {
  return (
    <div>
      <h1>
        {`Dziękujemy za zakup. Produkt zostanie wysłany na adres e-mail: ${props.email}`}
      </h1>
    </div>
  );
};

export default SuccessPage;
