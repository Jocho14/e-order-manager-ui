import React from "react";
import "./styles.scss";
import searchIcon from "../../assets/images/search-icon.svg";
import cartIcon from "../../assets/images/cart-icon.svg";

const Header = () => {
  return (
    <header>
      <nav className="fixed-navigation">
        <div className="fixed-navigation__nav">
          <h1>E-order-manager</h1>
          <ul>
            <li>Ebooki</li>
            <li>Audiobooki</li>
            <li>Poradniki</li>
          </ul>
        </div>
        <div className="fixed-navigation__action">
          <ul>
            <li>
              <img className="search-icon" src={searchIcon} />
            </li>
            <li>
              <img className="cart-icon" src={cartIcon} />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
