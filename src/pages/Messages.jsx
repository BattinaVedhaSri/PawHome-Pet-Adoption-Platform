import { useState } from "react";

function Messages() {
  const currentUser =
    JSON.parse(localStorage.getItem("pawhomeCurrentUser")) || null;

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState(
    JSON.parse(localStorage.getItem("pawhomeMessages")) || []
  );

  const sendMessage = (e) => {
    e.preventDefault();

    if (!currentUser) {
      alert("Please login first.");
      return;
    }

    if (!message.trim()) {
      return;
    }

    const newMessage = {
      id: Date.now(),
      sender: currentUser.name,
      email: currentUser.email,
      message: message.trim(),
      from: "User",
      date: new Date().toLocaleString(),
    };

    const updatedMessages = [...messages, newMessage];

    setMessages(updatedMessages);

    localStorage.setItem(
      "pawhomeMessages",
      JSON.stringify(updatedMessages)
    );

    setMessage("");
  };

  return (
    <main className="messages-page">
      <div className="messages-header">
        <p className="welcome">PAWHOME COMMUNICATION 🐾</p>

        <h1>Messages</h1>

        <p>
          Communicate with the PawHome adoption team.
        </p>
      </div>

      {!currentUser ? (
        <div className="empty-applications">
          <h2>Please Login First 🐾</h2>

          <p>
            Login to send messages to the adoption team.
          </p>

          <a href="/login" className="primary-btn">
            Login
          </a>
        </div>
      ) : (
        <div className="messages-container">
          <div className="message-list">
            {messages.length === 0 ? (
              <div className="no-messages">
                <h2>No Messages Yet 💬</h2>
                <p>
                  Start a conversation with the PawHome team.
                </p>
              </div>
            ) : (
              messages.map((item) => (
                <div
                  className={`message-item ${
                    item.from === "User"
                      ? "user-message"
                      : "admin-message"
                  }`}
                  key={item.id}
                >
                  <div className="message-top">
                    <strong>{item.sender}</strong>
                    <span>{item.date}</span>
                  </div>

                  <p>{item.message}</p>
                </div>
              ))
            )}
          </div>

          <form
            className="message-form"
            onSubmit={sendMessage}
          >
            <textarea
              placeholder="Type your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <button type="submit">
              Send Message 💬
            </button>
          </form>
        </div>
      )}
    </main>
  );
}

export default Messages;