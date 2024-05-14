import { useCallback } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  EmbeddedCheckout,
  EmbeddedCheckoutProvider,
} from "@stripe/react-stripe-js";

import { createCheckoutSession } from "../../services/payment";

import "./styles.scss";

const stripePromise = loadStripe(
  "pk_test_51PEAIsGMVCMC9JftCyCqbN9mr01zN6W7M3sCOYX5e7sRU8FEiir8r55wGgFOw0I1kjKVzm21WkWgOgqXw2eWV0t1001DaqUP7n"
);

const CheckoutForm = () => {
  const fetchClientSecret = useCallback(createCheckoutSession, []);
  const options = { fetchClientSecret };

  return (
    <div id="checkout">
      <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  );
};

export default CheckoutForm;
