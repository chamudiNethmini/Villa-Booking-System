import { API_BASE_URL } from "../utils/api";

const AUTH_KEY = "villa_admin_auth";

export const loginAdmin = async (email, password) => {
  const response = await fetch(`${API_BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Login failed");
  }

  const adminData = {
    name: data.name,
    email: data.email,
    role: data.role,
    token: data.token,
  };

  localStorage.setItem(AUTH_KEY, JSON.stringify(adminData));

  return adminData;
};

export const logoutAdmin = () => {
  localStorage.removeItem(AUTH_KEY);
};

export const getCurrentAdmin = () => {
  const admin = localStorage.getItem(AUTH_KEY);
  return admin ? JSON.parse(admin) : null;
};

export const isAdminAuthenticated = () => {
  return Boolean(getCurrentAdmin());
};

export const getAuthHeaders = () => {
  const admin = getCurrentAdmin();

  if (!admin?.token) {
    return {};
  }

  return {
    Authorization: `Bearer ${admin.token}`,
  };
};