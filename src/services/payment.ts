//import { STRIPE_DEV_URL } from "../constants/apiUrl";
import { STRIPE_PRODUCTION_URL } from "../constants/apiUrl";

const STRIPE_URL = STRIPE_PRODUCTION_URL;

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

export const fetchSessionStatus = async (sessionId: string) => {
  try {
    const res = await fetch(
      `${STRIPE_URL}/session-status?session_id=${sessionId}`
    );
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
};
