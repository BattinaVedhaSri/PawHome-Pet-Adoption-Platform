function Navbar() {
  const currentUser =
    JSON.parse(localStorage.getItem("pawhomeCurrentUser")) || null;

  const isAdmin =
    localStorage.getItem("pawhomeAdminLoggedIn") === "true";

  const handleUserLogout = () => {
    localStorage.removeItem("pawhomeCurrentUser");
    window.location.href = "/";
  };

  const handleAdminLogout = () => {
    localStorage.removeItem("pawhomeAdminLoggedIn");
    window.location.href = "/";
  };

  return (
    <nav className="navbar">
      <div className="logo">🐾 PawHome</div>

      <div className="nav-links">
        <a href="/">Home</a>

        <a href="/pets">Browse Pets</a>

        <a href="/my-applications">My Applications</a>

        <a href="/messages">Messages</a>

        {!currentUser && !isAdmin && (
          <>
            <a href="/login">Login</a>
            <a href="/signup">Sign Up</a>
          </>
        )}

        {!currentUser && !isAdmin && (
          <a href="/admin-login">Admin</a>
        )}

        {currentUser && !isAdmin && (
          <>
            <span className="nav-user">
              Hi, {currentUser.name} 👋
            </span>

            <button
              onClick={handleUserLogout}
              className="nav-logout"
            >
              Logout
            </button>
          </>
        )}

        {isAdmin && (
          <>
            <a href="/admin-dashboard">
              Admin Dashboard
            </a>

            <button
              onClick={handleAdminLogout}
              className="nav-logout"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;