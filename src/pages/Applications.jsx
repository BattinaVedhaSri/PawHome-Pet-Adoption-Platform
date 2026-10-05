import { useState } from "react";

function Applications() {
  const isAdminLoggedIn =
    localStorage.getItem("pawhomeAdminLoggedIn") === "true";

  const [applications, setApplications] = useState(
    JSON.parse(localStorage.getItem("pawhomeApplications")) || []
  );

  const updateStatus = (id, newStatus) => {
    const updatedApplications = applications.map(
      (application) =>
        application.id === id
          ? {
              ...application,
              status: newStatus,
            }
          : application
    );

    setApplications(updatedApplications);

    localStorage.setItem(
      "pawhomeApplications",
      JSON.stringify(updatedApplications)
    );
  };

  const updateBackgroundCheck = (
    id,
    newBackgroundStatus
  ) => {
    const updatedApplications = applications.map(
      (application) =>
        application.id === id
          ? {
              ...application,
              backgroundCheck: newBackgroundStatus,
            }
          : application
    );

    setApplications(updatedApplications);

    localStorage.setItem(
      "pawhomeApplications",
      JSON.stringify(updatedApplications)
    );
  };

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

  return (
    <main className="admin-applications-page">
      <div className="admin-applications-header">
        <div>
          <p className="welcome">
            PAWHOME ADMIN 🐾
          </p>

          <h1>Adoption Applications</h1>

          <p>
            Review applications and update their status.
          </p>
        </div>

        <a
          href="/admin-dashboard"
          className="secondary-btn"
        >
          ← Dashboard
        </a>
      </div>

      {applications.length === 0 ? (
        <div className="empty-applications">
          <h2>No Applications Yet 🐾</h2>

          <p>
            There are currently no adoption applications.
          </p>
        </div>
      ) : (
        <section className="admin-applications-list">
          {applications.map((application) => (
            <div
              className="admin-application-card"
              key={application.id}
            >
              <div className="application-details">
                <div className="applied-pet">
                  <span>🐾</span>

                  <div>
                    <small>Applying to Adopt</small>

                    <h2>
                      {application.petName ||
                        "General Application"}
                    </h2>

                    {application.petBreed && (
                      <p>
                        <strong>Breed:</strong>{" "}
                        {application.petBreed}
                      </p>
                    )}
                  </div>
                </div>

                <hr />

                <h3>Applicant Details</h3>

                <p>
                  <strong>Name:</strong>{" "}
                  {application.name}
                </p>

                <p>
                  <strong>Email:</strong>{" "}
                  {application.email}
                </p>

                <p>
                  <strong>Phone:</strong>{" "}
                  {application.phone}
                </p>

                <p>
                  <strong>Address:</strong>{" "}
                  {application.address}
                </p>

                <p>
                  <strong>Reason:</strong>{" "}
                  {application.reason}
                </p>

                <p>
                  <strong>Pet Experience:</strong>{" "}
                  {application.experience}
                </p>

                <p>
                  <strong>Submitted:</strong>{" "}
                  {application.date}
                </p>
              </div>

              <div className="application-review">
                <span
                  className={`status-badge ${application.status.toLowerCase()}`}
                >
                  {application.status}
                </span>

                <label>
                  Background Check
                </label>

                <select
                  value={
                    application.backgroundCheck ||
                    "Pending"
                  }
                  onChange={(e) =>
                    updateBackgroundCheck(
                      application.id,
                      e.target.value
                    )
                  }
                >
                  <option value="Pending">
                    Pending
                  </option>

                  <option value="In Progress">
                    In Progress
                  </option>

                  <option value="Completed">
                    Completed
                  </option>

                  <option value="Not Required">
                    Not Required
                  </option>
                </select>

                <label>
                  Update Application
                </label>

                <select
                  value={application.status}
                  onChange={(e) =>
                    updateStatus(
                      application.id,
                      e.target.value
                    )
                  }
                >
                  <option value="Pending">
                    Pending
                  </option>

                  <option value="Approved">
                    Approved
                  </option>

                  <option value="Rejected">
                    Rejected
                  </option>
                </select>
              </div>
            </div>
          ))}
        </section>
      )}
    </main>
  );
}

export default Applications;