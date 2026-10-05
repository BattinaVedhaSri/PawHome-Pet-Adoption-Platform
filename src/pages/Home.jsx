function Home() {
  const currentUser =
    JSON.parse(localStorage.getItem("pawhomeCurrentUser")) || null;

  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <p className="welcome">
            {currentUser
              ? `WELCOME BACK, ${currentUser.name.toUpperCase()} 🐾`
              : "WELCOME TO PAWHOME 🐾"}
          </p>

          <h1>
            Find Your
            <span> Perfect Friend</span>
          </h1>

          <p className="hero-text">
            Give a loving pet a forever home and find
            a loyal companion who will become a part of
            your family.
          </p>

          <div className="hero-buttons">
            <a
              href="/pets"
              className="primary-btn"
            >
              Find a Pet
            </a>

            {!currentUser && (
              <a
                href="/signup"
                className="secondary-btn"
              >
                Join PawHome
              </a>
            )}

            {currentUser && (
              <a
                href="/my-applications"
                className="secondary-btn"
              >
                My Applications
              </a>
            )}
          </div>
        </div>

        <div className="hero-image">
          🐶
        </div>
      </section>

      <section className="features">
        <h2>Why Choose PawHome?</h2>

        <div className="feature-grid">
          <div className="feature-card">
            <div>🐕</div>

            <h3>Find Your Companion</h3>

            <p>
              Browse pets and discover the perfect
              companion for your family.
            </p>
          </div>

          <div className="feature-card">
            <div>❤️</div>

            <h3>Adopt With Love</h3>

            <p>
              Make the adoption process simple,
              meaningful and responsible.
            </p>
          </div>

          <div className="feature-card">
            <div>🏠</div>

            <h3>Forever Homes</h3>

            <p>
              Help pets find safe, caring and
              loving forever homes.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;