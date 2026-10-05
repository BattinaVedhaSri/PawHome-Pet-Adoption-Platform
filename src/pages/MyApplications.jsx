function MyApplications() {
  const currentUser =
    JSON.parse(localStorage.getItem("pawhomeCurrentUser")) || null;

  const applications =
    JSON.parse(localStorage.getItem("pawhomeApplications")) || [];

  const myApplications = currentUser
    ? applications.filter(
        (application) =>
          application.email === currentUser.email
      )
    : [];

  return (
    <main className="my-applications-page">
      <section className="my-applications-header">
        <p className="welcome">
          YOUR ADOPTION JOURNEY 🐾
        </p>

        <h1>My Applications</h1>

        <p>
          Track your adoption application and
          background-check status.
        </p>
      </section>

      {!currentUser ? (
        <div className="empty-applications">
          <h2>Please Login First 🐾</h2>

          <p>
            Login to view your adoption applications.
          </p>

          <a
            href="/login"
            className="primary-btn"
          >
            Login
          </a>
        </div>
      ) : myApplications.length === 0 ? (
        <div className="empty-applications">
          <h2>No Applications Yet 🐾</h2>

          <p>
            You haven't submitted any adoption
            applications yet.
          </p>

          <a
            href="/pets"
            className="primary-btn"
          >
            Browse Pets
          </a>
        </div>
      ) : (
        <section className="applications-list">
          {myApplications.map((application) => (
            <div
              className="application-status-card"
              key={application.id}
            >
              <div>
                <p className="application-pet">
                  🐾 Applying for:{" "}
                  <strong>
                    {application.petName ||
                      "General Application"}
                  </strong>
                </p>

                {application.petBreed && (
                  <p>
                    <strong>Breed:</strong>{" "}
                    {application.petBreed}
                  </p>
                )}

                <h2>
                  Adoption Application
                </h2>

                <p>
                  <strong>Name:</strong>{" "}
                  {application.name}
                </p>

                <p>
                  <strong>Email:</strong>{" "}
                  {application.email}
                </p>

                <p>
                  <strong>Submitted:</strong>{" "}
                  {application.date}
                </p>

                <p>
                  <strong>
                    Background Check:
                  </strong>{" "}
                  {application.backgroundCheck ||
                    "Pending"}
                </p>
              </div>

              <div>
                <p
                  style={{
                    marginBottom: "8px",
                    fontWeight: "bold",
                  }}
                >
                  Application Status
                </p>

                <div
                  className={`status-badge ${application.status.toLowerCase()}`}
                >
                  {application.status}
                </div>
              </div>
            </div>
          ))}
        </section>
      )}
    </main>
  );
}

export default MyApplications;