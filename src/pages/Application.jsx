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
  {
    id: 4,
    name: "Luna",
    type: "Cat",
    breed: "British Shorthair",
    age: "2 Years",
    location: "Vijayawada",
    health: "Healthy",
  },
  {
    id: 5,
    name: "Buddy",
    type: "Dog",
    breed: "Beagle",
    age: "1 Year",
    location: "Hyderabad",
    health: "Vaccinated",
  },
  {
    id: 6,
    name: "Coco",
    type: "Cat",
    breed: "Indian Shorthair",
    age: "8 Months",
    location: "Guntur",
    health: "Healthy",
  },
];

function Application() {
  const currentUser =
    JSON.parse(localStorage.getItem("pawhomeCurrentUser")) || null;

  const params = new URLSearchParams(window.location.search);
  const petId = Number(params.get("id"));

  const savedPets =
    JSON.parse(localStorage.getItem("pawhomePets")) || defaultPets;

  const selectedPet = savedPets.find(
    (pet) => pet.id === petId
  );

  const [name, setName] = useState(
    currentUser?.name || ""
  );

  const [email, setEmail] = useState(
    currentUser?.email || ""
  );

  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [reason, setReason] = useState("");
  const [experience, setExperience] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !name ||
      !email ||
      !phone ||
      !address ||
      !reason ||
      !experience
    ) {
      setMessage("Please fill in all fields.");
      return;
    }

    const applications =
      JSON.parse(
        localStorage.getItem("pawhomeApplications")
      ) || [];

    const newApplication = {
      id: Date.now(),
      name,
      email,
      phone,
      address,
      reason,
      experience,

      petId: selectedPet?.id || null,
      petName: selectedPet?.name || "General Application",
      petBreed: selectedPet?.breed || "",

      status: "Pending",
      date: new Date().toLocaleDateString(),
    };

    localStorage.setItem(
      "pawhomeApplications",
      JSON.stringify([
        ...applications,
        newApplication,
      ])
    );

    setMessage(
      "Application submitted successfully! 🐾"
    );

    setPhone("");
    setAddress("");
    setReason("");
    setExperience("");
  };

  return (
    <main className="application-page">
      <div className="application-card">
        <div className="application-header">
          <span>🐾</span>

          <h1>Adoption Application</h1>

          {selectedPet ? (
            <p>
              You are applying to adopt{" "}
              <strong>{selectedPet.name}</strong>{" "}
              ({selectedPet.breed}).
            </p>
          ) : (
            <p>
              Tell us a little about yourself so we can
              help you begin your adoption journey.
            </p>
          )}
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>Full Name</label>

              <input
                type="text"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) =>
                  setName(e.target.value)
                }
              />
            </div>

            <div className="form-group">
              <label>Email</label>

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
              />
            </div>
          </div>

          <div className="form-group">
            <label>Phone Number</label>

            <input
              type="tel"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) =>
                setPhone(e.target.value)
              }
            />
          </div>

          <div className="form-group">
            <label>Address</label>

            <textarea
              placeholder="Enter your address"
              value={address}
              onChange={(e) =>
                setAddress(e.target.value)
              }
            />
          </div>

          <div className="form-group">
            <label>
              Why do you want to adopt a pet?
            </label>

            <textarea
              placeholder="Tell us why you want to adopt..."
              value={reason}
              onChange={(e) =>
                setReason(e.target.value)
              }
            />
          </div>

          <div className="form-group">
            <label>Previous Pet Experience</label>

            <textarea
              placeholder="Tell us about your experience with pets..."
              value={experience}
              onChange={(e) =>
                setExperience(e.target.value)
              }
            />
          </div>

          <button
            type="submit"
            className="submit-application"
          >
            Submit Application ❤️
          </button>
        </form>

        {message && (
          <div className="application-message">
            {message}
          </div>
        )}
      </div>
    </main>
  );
}

export default Application;