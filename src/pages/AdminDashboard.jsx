function AdminDashboard() {
  const isAdminLoggedIn =
    localStorage.getItem("pawhomeAdminLoggedIn") === "true";

  if (!isAdminLoggedIn) {
    return (
      <main className="admin-page">
        <div className="admin-card">
          <h1>Access Denied 🔐</h1>

          <p>
            Please login as an administrator first.
          </p>

          <a
            href="/admin-login"
            className="primary-btn"
          >
            Admin Login
          </a>
        </div>
      </main>
    );
  }

  const users =
    JSON.parse(localStorage.getItem("pawhomeUsers")) || [];

  const defaultPets = [
    {
      id: 1,
      name: "Bruno",
    },
    {
      id: 2,
      name: "Milo",
    },
    {
      id: 3,
      name: "Rocky",
    },
    {
      id: 4,
      name: "Luna",
    },
    {
      id: 5,
      name: "Buddy",
    },
    {
      id: 6,
      name: "Coco",
    },
  ];

  const savedPets =
    localStorage.getItem("pawhomePets");

  const pets = savedPets
    ? JSON.parse(savedPets)
    : defaultPets;

  const applications =
    JSON.parse(
      localStorage.getItem("pawhomeApplications")
    ) || [];

  const messages =
    JSON.parse(
      localStorage.getItem("pawhomeMessages")
    ) || [];

  const pendingApplications =
    applications.filter(
      (application) =>
        application.status === "Pending"
    ).length;

  const handleLogout = () => {
    localStorage.removeItem(
      "pawhomeAdminLoggedIn"
    );

    window.location.href = "/admin-login";
  };

  return (
    <main className="admin-page">
      <section className="admin-header">
        <div>
          <p className="welcome">
            PAWHOME ADMIN 🐾
          </p>

          <h1>Admin Dashboard</h1>

          <p>
            Manage users, pets, adoption applications
            and communication.
          </p>
        </div>

        <button
          onClick={handleLogout}
          className="logout-btn"
        >
          Logout
        </button>
      </section>

      <section className="admin-stats">
        <div className="admin-stat-card">
          <span>👤</span>

          <h2>{users.length}</h2>

          <p>Registered Users</p>
        </div>

        <div className="admin-stat-card">
          <span>🐶</span>

          <h2>{pets.length}</h2>

          <p>Available Pets</p>
        </div>

        <div className="admin-stat-card">
          <span>📋</span>

          <h2>{applications.length}</h2>

          <p>Applications</p>
        </div>

        <div className="admin-stat-card">
          <span>⏳</span>

          <h2>{pendingApplications}</h2>

          <p>Pending Applications</p>
        </div>
      </section>

      <section className="admin-modules">
        <h2>Admin Modules</h2>

        <div className="admin-module-grid">
          <a
            href="/manage-pets"
            className="admin-module-card"
          >
            <span>🐕</span>

            <h3>Manage Pets</h3>

            <p>
              Add, manage and remove pets
              available for adoption.
            </p>
          </a>

          <a
            href="/applications"
            className="admin-module-card"
          >
            <span>📋</span>

            <h3>Applications</h3>

            <p>
              Review applications, background
              checks and adoption status.
            </p>
          </a>

          <a
            href="/admin-messages"
            className="admin-module-card"
          >
            <span>💬</span>

            <h3>Messages</h3>

            <p>
              View user messages and communicate
              with adopters.
            </p>
          </a>
        </div>
      </section>

      <section className="admin-summary">
        <h2>System Overview</h2>

        <div className="summary-grid">
          <div>
            <strong>{users.length}</strong>
            <span>Users</span>
          </div>

          <div>
            <strong>{pets.length}</strong>
            <span>Pets</span>
          </div>

          <div>
            <strong>{applications.length}</strong>
            <span>Applications</span>
          </div>

          <div>
            <strong>{messages.length}</strong>
            <span>Messages</span>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AdminDashboard;