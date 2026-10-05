import { useState } from "react";

function AdminMessages() {
  const isAdminLoggedIn =
    localStorage.getItem("pawhomeAdminLoggedIn") === "true";

  const [messages, setMessages] = useState(
    JSON.parse(localStorage.getItem("pawhomeMessages")) || []
  );

  const [reply, setReply] = useState("");

  const sendReply = (e) => {
    e.preventDefault();

    if (!reply.trim()) {
      return;
    }

    const newMessage = {
      id: Date.now(),
      sender: "PawHome Admin",
      email: "admin@pawhome.com",
      message: reply.trim(),
      from: "Admin",
      date: new Date().toLocaleString(),
    };

    const updatedMessages = [
      ...messages,
      newMessage,
    ];

    setMessages(updatedMessages);

    localStorage.setItem(
      "pawhomeMessages",
      JSON.stringify(updatedMessages)
    );

    setReply("");
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
    <main className="admin-messages-page">
      <div className="admin-messages-header">
        <div>
          <p className="welcome">
            PAWHOME ADMIN 🐾
          </p>

          <h1>Messages</h1>

          <p>
            View and respond to messages from users.
          </p>
        </div>

        <a
          href="/admin-dashboard"
          className="secondary-btn"
        >
          ← Dashboard
        </a>
      </div>

      <div className="admin-messages-container">
        <div className="admin-message-list">
          {messages.length === 0 ? (
            <div className="no-messages">
              <h2>No Messages Yet 💬</h2>

              <p>
                Messages from users will appear here.
              </p>
            </div>
          ) : (
            messages.map((item) => (
              <div
                className={`message-item ${
                  item.from === "Admin"
                    ? "user-message"
                    : "admin-message"
                }`}
                key={item.id}
              >
                <div className="message-top">
                  <strong>
                    {item.sender}
                  </strong>

                  <span>
                    {item.date}
                  </span>
                </div>

                <p>
                  {item.message}
                </p>
              </div>
            ))
          )}
        </div>

        <form
          className="message-form"
          onSubmit={sendReply}
        >
          <textarea
            placeholder="Write a reply to the user..."
            value={reply}
            onChange={(e) =>
              setReply(e.target.value)
            }
          />

          <button type="submit">
            Send Reply 💬
          </button>
        </form>
      </div>
    </main>
  );
}

export default AdminMessages;