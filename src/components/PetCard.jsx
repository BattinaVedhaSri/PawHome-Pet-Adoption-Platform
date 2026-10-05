function PetCard({ pet }) {
  return (
    <div className="pet-card">
      <img
        src={
          pet.image ||
          "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=800&q=80"
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
  );
}

export default PetCard;