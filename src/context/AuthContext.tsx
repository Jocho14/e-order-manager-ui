import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
} from "react";

import { login, validateSession } from "../services/auth";

export interface User {
  name: string;
}

type AuthContextType = {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const initializeSession = async () => {
      const validatedUser = await validateSession();
      setUser(validatedUser);
    };

    initializeSession();
  }, []);

  // TODO: change api to return user's name
  const handleLogin = async (email: string, password: string) => {
    try {
      await login(email, password);

      setUser({ name: "[here goes user's name]" });
    } catch (error) {
      throw error;
    }
  };

  const handleLogout = useCallback(() => {
    setUser(null);
    // TODO: call a logout API to clear the cookie
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, login: handleLogin, logout: handleLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
