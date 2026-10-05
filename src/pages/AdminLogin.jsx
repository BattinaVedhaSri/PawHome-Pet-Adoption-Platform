import { useState } from "react";

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (
      email === "admin@pawhome.com" &&
      password === "admin123"
    ) {
      localStorage.setItem("pawhomeAdminLoggedIn", "true");

      setMessage("Admin login successful! 🐾");

      setTimeout(() => {
        window.location.href = "/admin-dashboard";
      }, 800);
    } else {
      setMessage("Invalid admin email or password.");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-icon">🔐</div>

        <h1>Admin Login</h1>

        <p>Login to manage PawHome.</p>

        <form onSubmit={handleLogin}>
          <label>Email</label>

          <input
            type="email"
            placeholder="Enter admin email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>

          <input
            type="password"
            placeholder="Enter admin password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">
            Login as Admin
          </button>
        </form>

        {message && (
          <div className="auth-message">
            {message}
          </div>
        )}

        <p className="auth-bottom">
          <a href="/">← Back to Home</a>
        </p>
      </div>
    </div>
  );
}

export default AdminLogin;