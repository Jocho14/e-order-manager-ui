const API_URL = "http://localhost:8080";

import { User } from "../context/AuthContext";

export const login = async (email: string, password: string): Promise<void> => {
  try {
    const response = await fetch(`${API_URL}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
      credentials: "include",
    });
    console.log("token: ", response);
    if (response.ok) {
      console.log("Successfuly logged in");
    } else {
      console.log("Login failed");
      throw new Error("Login failed due to server response.");
    }
  } catch (error) {
    console.error("Login failed:", error);
    throw error;
  }
};

export const validateSession = async (): Promise<User | null> => {
  try {
    const response = await fetch(`${API_URL}/api/auth/validate-session`, {
      credentials: "include",
    });
    console.log(response);

    if (!response.ok) {
      throw new Error("Session not valid");
    }

    const userData = await response.json();
    return { name: userData.name };
  } catch (error) {
    console.error("Session validation failed:", error);
    return null;
  }
};
