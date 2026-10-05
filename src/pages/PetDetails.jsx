import { useEffect, useState } from "react";

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
      "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=900&q=80",
    description:
      "Bruno is a friendly and playful Golden Retriever who loves people and enjoys outdoor activities.",
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
      "https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=900&q=80",
    description:
      "Milo is a calm and affectionate cat who enjoys spending time with people.",
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
      "https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=900&q=80",
    description:
      "Rocky is an energetic Labrador who is friendly, loyal and playful.",
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
      "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=900&q=80",
    description:
      "Luna is a gentle British Shorthair who enjoys a peaceful and comfortable environment.",
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
      "https://images.unsplash.com/photo-1505628346881-b72b27e84530?auto=format&fit=crop&w=900&q=80",
    description:
      "Buddy is a cheerful Beagle who loves playing and meeting new people.",
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
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=900&q=80",
    description:
      "Coco is a sweet and curious kitten looking for a caring forever home.",
  },
];

function PetDetails() {
  const [pet, setPet] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const id = Number(params.get("id"));

    const savedPets =
      JSON.parse(localStorage.getItem("pawhomePets")) || defaultPets;

    const selectedPet = savedPets.find(
      (item) => item.id === id
    );

    setPet(selectedPet);
  }, []);

  if (!pet) {
    return (
      <div className="not-found">
        <h1>Pet Not Found 🐾</h1>
        <a href="/pets">Back to Pets</a>
      </div>
    );
  }

  return (
    <main className="details-page">
      <div className="details-card">
        <div className="details-image">
          <img
            src={pet.image}
            alt={pet.name}
          />
        </div>

        <div className="details-content">
          <span className="pet-badge">
            {pet.type}
          </span>

          <h1>{pet.name}</h1>

          <p className="details-description">
            {pet.description ||
              `${pet.name} is looking for a loving forever home.`}
          </p>

          <div className="details-info">
            <div>
              <strong>Breed</strong>
              <span>{pet.breed}</span>
            </div>

            <div>
              <strong>Age</strong>
              <span>{pet.age}</span>
            </div>

            <div>
              <strong>Location</strong>
              <span>{pet.location}</span>
            </div>

            <div>
              <strong>Health</strong>
              <span>{pet.health}</span>
            </div>
          </div>

          <div className="details-actions">
            <a
              href={`/application?id=${pet.id}`}
              className="primary-btn"
            >
              Apply for Adoption ❤️
            </a>

            <a
              href="/pets"
              className="secondary-btn"
            >
              Back to Pets
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

export default PetDetails;