import { useState } from "react";
import { Link } from "react-router-dom";

import Gallery from "../../components/Gallery";
import SignInForm from "../../components/SignInForm";
import SignUpForm from "../../components/SignUpForm";

import galleryData from "../../utils/galleryData";
import leftArrowCircleIcon from "../../assets/images/left-arrow-circle-icon.svg";
import "./styles.scss";

const LogInPage = () => {
  const [activeForm, setActiveForm] = useState("signin");

  return (
    <div className="log-in">
      <Link to="/">
        <img className="log-in__close-link" src={leftArrowCircleIcon} />
      </Link>
      <div className="log-in__section log-in__section--left">
        <div className="log-in__info">
          <h3 className="log-in__title">E-order-manager</h3>
          <p className="log-in__paragraph">Czytaj, oglądaj, inspiruj się!</p>
        </div>
        <div className="log-in__gallery">
          <Gallery images={galleryData} />
        </div>
      </div>
      <div className="log-in__section log-in__section--right">
        <div className="log-in__form">
          <div className="form-switch">
            <button
              className={`form-switch__btn form-switch__btn--sign-in ${
                activeForm === "signin" ? "form-switch__btn--active" : ""
              } `}
              onClick={() => setActiveForm("signin")}
            >
              Zaloguj się
            </button>
            <button
              className={`form-switch__btn form-switch__btn--sign-up ${
                activeForm === "signup" ? "form-switch__btn--active" : ""
              } `}
              onClick={() => setActiveForm("signup")}
            >
              Utwórz konto
            </button>
          </div>
          <div className="form-content">
            {activeForm === "signin" ? <SignInForm /> : <SignUpForm />}
          </div>
          <div className="form-action"></div>
        </div>
      </div>
    </div>
  );
};

export default LogInPage;
