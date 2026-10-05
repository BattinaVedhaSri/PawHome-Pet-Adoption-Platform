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
    image:
      "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Milo",
    type: "Cat",
    breed: "Persian Cat",
    age: "1 Year",
    location: "Hyderabad",
    health: "Healthy",
    image:
      "https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Rocky",
    type: "Dog",
    breed: "Labrador",
    age: "3 Years",
    location: "Guntur",
    health: "Vaccinated",
    image:
      "https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "Luna",
    type: "Cat",
    breed: "British Shorthair",
    age: "2 Years",
    location: "Vijayawada",
    health: "Healthy",
    image:
      "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    name: "Buddy",
    type: "Dog",
    breed: "Beagle",
    age: "1 Year",
    location: "Hyderabad",
    health: "Vaccinated",
    image:
      "https://images.unsplash.com/photo-1505628346881-b72b27e84530?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    name: "Coco",
    type: "Cat",
    breed: "Indian Shorthair",
    age: "8 Months",
    location: "Guntur",
    health: "Healthy",
    image:
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80",
  },
];

function Pets() {
  const [pets] = useState(() => {
    const savedPets = localStorage.getItem("pawhomePets");

    if (savedPets) {
      return JSON.parse(savedPets);
    }

    localStorage.setItem(
      "pawhomePets",
      JSON.stringify(defaultPets)
    );

    return defaultPets;
  });

  const [search, setSearch] = useState("");
  const [type, setType] = useState("All");

  const filteredPets = pets.filter((pet) => {
    const matchesSearch =
      pet.name.toLowerCase().includes(search.toLowerCase()) ||
      pet.breed.toLowerCase().includes(search.toLowerCase()) ||
      pet.location.toLowerCase().includes(search.toLowerCase());

    const matchesType =
      type === "All" || pet.type === type;

    return matchesSearch && matchesType;
  });

  return (
    <main className="pets-page">
      <section className="pets-header">
        <p className="welcome">
          FIND YOUR COMPANION 🐾
        </p>

        <h1>Pets Looking for a Home</h1>

        <p>
          Browse our available pets and find a loving companion
          who needs a forever home.
        </p>
      </section>

      <section className="pet-controls">
        <input
          type="text"
          placeholder="Search by name, breed or location..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="All">All Pets</option>
          <option value="Dog">Dogs</option>
          <option value="Cat">Cats</option>
        </select>
      </section>

      <section className="pet-grid">
        {filteredPets.length > 0 ? (
          filteredPets.map((pet) => (
            <div className="pet-card" key={pet.id}>
              <img
                src={
                  pet.image ||
                  (pet.type === "Dog"
                    ? "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=800&q=80"
                    : "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=800&q=80")
                }
                alt={pet.name}
              />

              <div className="pet-card-content">
                <div className="pet-title">
                  <h2>{pet.name}</h2>
                  <span>{pet.type}</span>
                </div>

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

                <a
                  href={`/pet-details?id=${pet.id}`}
                  className="view-btn"
                >
                  View Details
                </a>
              </div>
            </div>
          ))
        ) : (
          <div className="no-pets">
            <h2>No pets found 🐾</h2>
            <p>
              Try changing your search or filter.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}

export default Pets;