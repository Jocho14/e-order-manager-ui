import { useState } from "react";
import { Link } from "react-router-dom";

import Gallery from "../../components/Gallery";
import SignInForm from "../../components/SignInForm";
import SignUpForm from "../../components/SignUpForm";

import galleryData from "../../utils/galleryData";
import leftArrowCircleIcon from "../../assets/images/left-arrow-circle-icon.svg";
import "./styles.scss";

const AuthPage = () => {
  const [activeForm, setActiveForm] = useState("signin");

  return (
    <div className="auth">
      <div className="auth__section auth__section--left">
        <Link to="/">
          <img className="auth__close-link" src={leftArrowCircleIcon} />
        </Link>
        <div className="auth__info">
          <h3 className="auth__title">E-order-manager</h3>
          <p className="auth__paragraph">Czytaj, oglądaj, inspiruj się!</p>
        </div>
        <div className="auth__gallery">
          <Gallery images={galleryData} />
        </div>
      </div>
      <div className="auth__section auth__section--right">
        <div className="auth__form">
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

export default AuthPage;
