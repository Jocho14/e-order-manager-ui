import { useContext } from "react";
import { Link } from "react-router-dom";

import { useAuth } from "../../context/AuthContext";
import { CartContext } from "../../context/CartContext";

import searchIcon from "../../assets/images/search-icon.svg";
import cartIcon from "../../assets/images/cart-icon.svg";
import userIcon from "../../assets/images/user-icon.svg";
import userLoggedIcon from "../../assets/images/user-logged-icon.svg";
import "./styles.scss";

const Header = () => {
  const { user } = useAuth();
  const { cartCount } = useContext(CartContext);

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
              className="fixed-navigation__action-icon"
              src={searchIcon}
              alt="search"
            />
          </li>

          <li className="fixed-navigation__action__element cart-container">
            <Link to="/cart" className="fixed-navigation__action__link">
              <img
                src={cartIcon}
                className="fixed-navigation__action-icon"
                alt="cart-icon"
              />
              <span className="product-count">{cartCount}</span>
            </Link>
          </li>

          <li className="fixed-navigation__action__element">
            {!!user ? (
              <img
                className="fixed-navigation__action-icon"
                src={userLoggedIcon}
                alt="user-logged"
              />
            ) : (
              <Link to="/login" className="fixed-navigation__action__link">
                <img
                  className="fixed-navigation__action-icon logged-icon"
                  src={userIcon}
                  alt="user"
                />
              </Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
