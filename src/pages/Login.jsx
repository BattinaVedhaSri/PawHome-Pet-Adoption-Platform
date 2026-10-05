import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const users =
      JSON.parse(localStorage.getItem("pawhomeUsers")) || [];

    const user = users.find(
      (user) =>
        user.email === email && user.password === password
    );

    if (!user) {
      setMessage("Invalid email or password.");
      return;
    }

    localStorage.setItem("pawhomeCurrentUser", JSON.stringify(user));

    setMessage(`Welcome back, ${user.name}!`);

    setTimeout(() => {
      window.location.href = "/";
    }, 1000);
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-icon">🐾</div>

        <h1>Welcome Back</h1>

        <p>Login to continue your PawHome journey.</p>

        <form onSubmit={handleLogin}>
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Login</button>
        </form>

        {message && <div className="auth-message">{message}</div>}

        <p className="auth-bottom">
          Don't have an account?
          <a href="/signup"> Sign Up</a>
        </p>
      </div>
    </div>
  );
}

export default Login;