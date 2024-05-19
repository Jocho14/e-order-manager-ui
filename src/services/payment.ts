const STRIPE_SERVER_URL = "http://localhost:4242";
// const STRIPE_SERVER_URL =
//   "https://e-order-manager-stripe-server.azurewebsites.net";

interface Product {
  id: number;
  price: number;
  image: string;
  name: string;
}

export const createCheckoutSession = async (
  products: Product[]
): Promise<any> => {
  console.log(
    JSON.stringify({
      products,
    })
  );
  try {
    const response = await fetch(
      `${STRIPE_SERVER_URL}/create-checkout-session`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          products: products,
        }),
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
