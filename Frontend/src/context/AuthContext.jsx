import { createContext, useContext, useEffect, useState } from "react";
import {
  getCurrentAdmin,
  loginAdmin,
  logoutAdmin,
} from "../services/authService";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedAdmin = getCurrentAdmin();
    setAdmin(savedAdmin);
    setLoading(false);
  }, []);

  const login = (email, password) => {
    const adminData = loginAdmin(email, password);
    setAdmin(adminData);
    return adminData;
  };

  const logout = () => {
    logoutAdmin();
    setAdmin(null);
  };

  const isAuthenticated = Boolean(admin);

  return (
    <AuthContext.Provider
      value={{
        admin,
        login,
        logout,
        isAuthenticated,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}