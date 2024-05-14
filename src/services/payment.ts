const STRIPE_SERVER_URL = "http://localhost:4242";
//const STRIPE_SERVER_URL = "http://e-order-manager-stripe-server.azurewebsites.net";

export const createCheckoutSession = async (): Promise<any> => {
  try {
    const response = await fetch(
      `${STRIPE_SERVER_URL}/create-checkout-session`,
      {
        method: "POST",
      }
    );
    if (!response.ok) {
      throw new Error("Payment failed");
    }
    const data = await response.json();
    return data.clientSecret;
  } catch (error) {
    console.error("Payment failed: ", error);
    return null;
  }
};
