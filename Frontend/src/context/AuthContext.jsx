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

    if (savedAdmin?.token) {
      setAdmin(savedAdmin);
    } else if (savedAdmin) {
      logoutAdmin();
    }

    setLoading(false);
  }, []);

  const login = async (email, password) => {
    const adminData = await loginAdmin(email, password);
    setAdmin(adminData);
    return adminData;
  };

  const logout = () => {
    logoutAdmin();
    setAdmin(null);
  };

  const isAuthenticated = Boolean(admin?.token);

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
