const AUTH_KEY = "villa_admin_auth";

const demoAdmin = {
  email: "admin@villa.com",
  password: "admin123",
  name: "Villa Owner",
  role: "Admin",
};

export const loginAdmin = (email, password) => {
  if (email === demoAdmin.email && password === demoAdmin.password) {
    const adminData = {
      name: demoAdmin.name,
      email: demoAdmin.email,
      role: demoAdmin.role,
      token: "demo-admin-token",
    };

    localStorage.setItem(AUTH_KEY, JSON.stringify(adminData));
    return adminData;
  }

  throw new Error("Invalid email or password");
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