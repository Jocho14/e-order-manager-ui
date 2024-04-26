const API_URL = "http://localhost:8080";
const PRODUCTION_API_URL =
  "https://demo.braveflower-06f1145c.eastus.azurecontainerapps.io";

const login = async (email: string, password: string): Promise<void> => {
  try {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
      credentials: "include",
    });
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

export default login;
