import React, { createContext, useContext, useState, ReactNode } from "react";

import login from "../services/auth";

interface user {
  id: string;
  name: string;
}

type AuthContextType = {
  user: user;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState(null);
};
