//import { useState } from "react";

import "./styles.scss";

const SignUpForm = () => {
  //const [error, setError] = useState(false);
  const error = false; // remove (just for sucess production build)

  const handleSubmit = () => {};

  return (
    <form className="sign-in-form" onSubmit={handleSubmit}>
      <div className="sign-in-form__container">
        <label
          className={`sign-in-form__label ${error ? "error--label" : ""}`}
          htmlFor="email"
        >
          E-mail
        </label>
        <input
          className={`sign-in-form__input ${error ? "error--input" : ""}`}
          id="email"
          type="email"
          required
        />
      </div>

      <div className="sign-in-form__container">
        <label
          className={`sign-in-form__label ${error ? "error--label" : ""}`}
          htmlFor="name"
        >
          Imię
        </label>
        <input
          className={`sign-in-form__input ${error ? "error--input" : ""}`}
          id="name"
          type="text"
          required
        />
      </div>

      <div className="sign-in-form__container">
        <label
          className={`sign-in-form__label ${error ? "error--label" : ""}`}
          htmlFor="surname"
        >
          Nazwisko {"(opcjonalnie)"}
        </label>
        <input
          className={`sign-in-form__input ${error ? "error--input" : ""}`}
          id="surname"
          type="text"
          required
        />
      </div>

      <div className="sign-in-form__container">
        <label
          className={`sign-in-form__label ${error ? "error--label" : ""}`}
          htmlFor="password"
        >
          Hasło
        </label>
        <input
          className={`sign-in-form__input ${error ? "error--input" : ""}`}
          id="password"
          type="password"
          required
        />
      </div>
      <button className="sign-in-form__submit-btn" type="submit">
        Utwórz konto
      </button>
    </form>
  );
};

export default SignUpForm;
