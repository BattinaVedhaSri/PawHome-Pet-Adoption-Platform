import { useState } from "react";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setMessage("Please fill in all fields.");
      return;
    }

    const existingUsers =
      JSON.parse(localStorage.getItem("pawhomeUsers")) || [];

    const userExists = existingUsers.some(
      (user) => user.email === email
    );

    if (userExists) {
      setMessage("An account with this email already exists.");
      return;
    }

    const newUser = {
      id: Date.now(),
      name,
      email,
      password,
    };

    localStorage.setItem(
      "pawhomeUsers",
      JSON.stringify([...existingUsers, newUser])
    );

    setMessage("Signup successful! You can now login.");

    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-icon">🐾</div>

        <h1>Create Your Account</h1>

        <p>Join PawHome and help pets find loving homes.</p>

        <form onSubmit={handleSignup}>
          <label>Full Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

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
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Create Account</button>
        </form>

        {message && <div className="auth-message">{message}</div>}

        <p className="auth-bottom">
          Already have an account?
          <a href="/login"> Login</a>
        </p>
      </div>
    </div>
  );
}

export default Signup;