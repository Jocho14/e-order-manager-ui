import { useContext } from "react";
import { Link } from "react-router-dom";

import { useAuth } from "../../context/AuthContext";
import { CartContext } from "../../context/CartContext";

import searchIcon from "../../assets/images/search-icon.svg";
import cartIcon from "../../assets/images/cart-icon.svg";
import userIcon from "../../assets/images/user-icon.svg";
import "./styles.scss";

const Header = () => {
  const { user } = useAuth();
  const { productsCount } = useContext(CartContext);

  return (
    <nav className="fixed-navigation">
      <div className="fixed-navigation__nav">
        <Link className="home-link" to="/">
          <h1 className="fixed-navigation__logo">E-order-manager</h1>
        </Link>
        <ul>
          <li className="fixed-navigation__nav-link">Ebooki</li>
          <li className="fixed-navigation__nav-link">Audiobooki</li>
          <li className="fixed-navigation__nav-link">Poradniki</li>
        </ul>
      </div>
      <div className="fixed-navigation__action">
        <ul className="fixed-navigation__action__list">
          <li className="fixed-navigation__action__element">
            <img
              className="fixed-navigation__action-link"
              src={searchIcon}
              alt="search"
            />
          </li>
          <li className="fixed-navigation__action__element">
            <Link
              to="/cart"
              className="fixed-navigation__action-link cart-container"
            >
              <img src={cartIcon} className="cart-icon" />
              <span className="product-count">({productsCount})</span>
            </Link>
          </li>
          <li className="fixed-navigation__action__element">
            {user ? (
              <img
                className="fixed-navigation__action-link"
                src={userIcon}
                alt="user"
              />
            ) : (
              <Link to="/login" className="fixed-navigation__action-link login">
                <span>Zaloguj</span>
              </Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
