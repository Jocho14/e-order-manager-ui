import { STRIPE_DEV_URL } from "../constants/apiUrl";
import { STRIPE_PRODUCTION_URL } from "../constants/apiUrl";

const STRIPE_URL = STRIPE_DEV_URL;

interface Product {
  id: number;
  price: number;
  image: string;
  name: string;
}

export const createCheckoutSession = async (
  products: Product[]
): Promise<any> => {
  try {
    const response = await fetch(`${STRIPE_URL}/create-checkout-session`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        products: products,
      }),
    });
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
