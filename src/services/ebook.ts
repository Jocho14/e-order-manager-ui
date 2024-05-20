import { BACKEND_DEV_URL } from "../constants/apiUrl";
import { BACKEND_PRODUCTION_URL } from "../constants/apiUrl";

import { CardGroupProps } from "..//components/CardGroup";
import { ProductCardProps } from "../components/ProductCard";

const BACKEND_URL = BACKEND_DEV_URL;

export const get = async (id: number): Promise<any> => {
  try {
    const response = await fetch(`${BACKEND_URL}/api/ebook/get?id=${id}`, {
      credentials: "include",
    });
    if (!response.ok) {
      console.log("Ebook fetching failed");
      throw new Error("Ebook fetching failed due to server response.");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Ebook fetching failed:", error);
    throw error;
  }
};

export const getAll = async (): Promise<ProductCardProps[]> => {
  try {
    const response = await fetch(`${BACKEND_URL}/api/ebook/getAll`, {
      credentials: "include",
    });
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      return data;
    } else {
      console.log("All ebooks fetching failed");
      throw new Error("All ebooks fetching failed due to server response.");
    }
  } catch (error) {
    console.error("All ebooks fetching failed:", error);
    throw error;
  }
};
