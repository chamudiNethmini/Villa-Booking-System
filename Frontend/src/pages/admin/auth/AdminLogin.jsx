import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";

function AdminLogin() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setError("Please enter email and password");
      return;
    }

    try {
      login(formData.email, formData.password);
      navigate("/admin/dashboard");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <section className="admin-login-page">
      <div className="admin-login-card">
        <div className="admin-login-brand">
          <span>CoastalStay Villa</span>
          <h1>Admin Login</h1>
          <p>Login to manage rooms, bookings, and villa dashboard.</p>
        </div>

        {error && <div className="login-error">{error}</div>}

        <form className="admin-login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="admin@villa.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="admin123"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="primary-btn admin-login-btn">
            Login
          </button>
        </form>

        <div className="demo-login-box">
          <p>
            <strong>Demo Email:</strong> admin@villa.com
          </p>
          <p>
            <strong>Demo Password:</strong> admin123
          </p>
        </div>
      </div>
    </section>
  );
}

export default AdminLogin;