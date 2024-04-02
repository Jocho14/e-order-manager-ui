import "./styles.scss";
import searchIcon from "../../assets/images/search-icon.svg";
import cartIcon from "../../assets/images/cart-icon.svg";

const Header = () => {
  return (
    <nav className="fixed-navigation">
      <div className="fixed-navigation__nav">
        <h1>E-order-manager</h1>
        <ul>
          <li className="fixed-navigation__nav-link">Ebooki</li>
          <li className="fixed-navigation__nav-link">Audiobooki</li>
          <li className="fixed-navigation__nav-link">Poradniki</li>
        </ul>
      </div>
      <div className="fixed-navigation__action">
        <ul>
          <li>
            <img className="fixed-navigation__action-link" src={searchIcon} />
          </li>
          <li>
            <img className="fixed-navigation__action-link" src={cartIcon} />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
