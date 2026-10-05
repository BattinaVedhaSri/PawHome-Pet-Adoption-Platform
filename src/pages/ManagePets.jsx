import { useState } from "react";

const defaultPets = [
  {
    id: 1,
    name: "Bruno",
    type: "Dog",
    breed: "Golden Retriever",
    age: "2 Years",
    location: "Vijayawada",
    health: "Healthy",
  },
  {
    id: 2,
    name: "Milo",
    type: "Cat",
    breed: "Persian Cat",
    age: "1 Year",
    location: "Hyderabad",
    health: "Healthy",
  },
  {
    id: 3,
    name: "Rocky",
    type: "Dog",
    breed: "Labrador",
    age: "3 Years",
    location: "Guntur",
    health: "Vaccinated",
  },
];

function ManagePets() {
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

  // keep the rest of your existing code here
  const [pets, setPets] = useState(
    JSON.parse(localStorage.getItem("pawhomePets")) || defaultPets
  );

  const [name, setName] = useState("");
  const [type, setType] = useState("Dog");
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState("");
  const [location, setLocation] = useState("");
  const [health, setHealth] = useState("Healthy");

  const addPet = (e) => {
    e.preventDefault();

    if (!name || !breed || !age || !location) {
      alert("Please fill in all fields.");
      return;
    }

    const newPet = {
      id: Date.now(),
      name,
      type,
      breed,
      age,
      location,
      health,
    };

    const updatedPets = [...pets, newPet];

    setPets(updatedPets);
    localStorage.setItem(
      "pawhomePets",
      JSON.stringify(updatedPets)
    );

    setName("");
    setBreed("");
    setAge("");
    setLocation("");
    setHealth("Healthy");
  };

  const deletePet = (id) => {
    const updatedPets = pets.filter((pet) => pet.id !== id);

    setPets(updatedPets);

    localStorage.setItem(
      "pawhomePets",
      JSON.stringify(updatedPets)
    );
  };

  return (
    <main className="manage-pets-page">
      <div className="manage-pets-header">
        <div>
          <p className="welcome">PAWHOME ADMIN 🐾</p>
          <h1>Manage Pets</h1>
          <p>Add and manage pets available for adoption.</p>
        </div>

        <a href="/admin-dashboard" className="secondary-btn">
          ← Dashboard
        </a>
      </div>

      <section className="add-pet-card">
        <h2>Add New Pet</h2>

        <form onSubmit={addPet}>
          <div className="form-row">
            <div className="form-group">
              <label>Pet Name</label>
              <input
                type="text"
                placeholder="Enter pet name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Type</label>
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value="Dog">Dog</option>
                <option value="Cat">Cat</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Breed</label>
              <input
                type="text"
                placeholder="Enter breed"
                value={breed}
                onChange={(e) => setBreed(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Age</label>
              <input
                type="text"
                placeholder="Example: 2 Years"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Location</label>
              <input
                type="text"
                placeholder="Enter location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Health Status</label>
              <select
                value={health}
                onChange={(e) => setHealth(e.target.value)}
              >
                <option value="Healthy">Healthy</option>
                <option value="Vaccinated">Vaccinated</option>
                <option value="Under Treatment">
                  Under Treatment
                </option>
              </select>
            </div>
          </div>

          <button type="submit" className="submit-application">
            + Add Pet
          </button>
        </form>
      </section>

      <section className="managed-pets">
        <h2>Available Pets ({pets.length})</h2>

        <div className="managed-pet-grid">
          {pets.map((pet) => (
            <div className="managed-pet-card" key={pet.id}>
              <div className="managed-pet-icon">
                {pet.type === "Dog" ? "🐶" : "🐱"}
              </div>

              <h3>{pet.name}</h3>

              <p>
                <strong>Breed:</strong> {pet.breed}
              </p>

              <p>
                <strong>Age:</strong> {pet.age}
              </p>

              <p>
                <strong>Location:</strong> {pet.location}
              </p>

              <p>
                <strong>Health:</strong> {pet.health}
              </p>

              <button
                className="delete-pet-btn"
                onClick={() => deletePet(pet.id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default ManagePets;