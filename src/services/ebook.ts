import { BACKEND_DEV_URL } from "../constants/apiUrl";
import { BACKEND_PRODUCTION_URL } from "../constants/apiUrl";

import { CardGroupProps } from "..//components/CardGroup";

const BACKEND_URL = BACKEND_DEV_URL;

export const get = async (id: number): Promise<void> => {
  try {
    const response = await fetch(`${BACKEND_URL}/api/ebook/get`, {
      credentials: "include",
    });
    if (response.ok) {
      console.log("Ebook retrieved");
    } else {
      console.log("Ebook fetching failed");
      throw new Error("Ebook fetching failed due to server response.");
    }
  } catch (error) {
    console.error("Ebook fetching failed:", error);
    throw error;
  }
};

export const getAll = async (): Promise<CardGroupProps> => {
  try {
    const response = await fetch(`${BACKEND_URL}/api/ebook/getAll`, {
      credentials: "include",
    });
    console.log(response);
    if (response.ok) {
      console.log("All ebooks retrieved");
      const data = await response.json();
      console.log("data", data);
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
