const ServicesPage = () => {
  const services = [
    {
      title: "Dog Grooming",
      description:
        "From baths to stylish cuts, our expert groomers ensure your dog looks and feels their best with gentle, loving care.",
      image: "/professional-dog-groomer-washing-small-dog-in-salo.jpg",
    },
    {
      title: "Cat Sitting",
      description:
        "Reliable and compassionate care for your feline friends in the comfort of their home, including feeding, playtime, and litter care.",
      image: "/placeholder.svg?height=200&width=400&text=Cat+Sitting",
    },
    {
      title: "Pet Walking",
      description:
        "Energetic and supervised walks tailored to your pet's needs, ensuring they get the exercise and stimulation they require.",
      image: "/person-walking-happy-dog-in-city-park.jpg",
    },
    {
      title: "Veterinary Support",
      description:
        "Assistance with vet visits, medication administration, and post-operative care, ensuring your pet's health and well-being.",
      image: "/veterinarian-examining-cat-in-clinic.jpg",
    },
    {
      title: "Puppy & Kitten Care",
      description:
        "Specialized care programs for young pets, focusing on socialization, basic training, and a healthy start to life.",
      image: "/happy-golden-retriever-puppy-playing-with-ball-in-.jpg",
    },
    {
      title: "Pet Taxi Service",
      description:
        "Safe and convenient transportation for your pets to appointments, grooming sessions, or any other destination they need.",
      image: "/professional-pet-grooming-tools-scissors-brushes.jpg",
    },
  ]

  return (
    <div>
      {/* Header Section */}
      <section className="py-16" style={{ backgroundColor: "#f8fafc" }}>
        <div className="container text-center">
          <h1 style={{ fontSize: "3rem", fontWeight: "bold", color: "#1e293b", marginBottom: "1.5rem" }}>
            Our Dedicated Pet Services
          </h1>
          <p style={{ fontSize: "1.125rem", color: "#64748b", maxWidth: "800px", margin: "0 auto", lineHeight: "1.6" }}>
            At PetService Pro, we offer a comprehensive range of personalized pet care solutions designed to keep your
            beloved companions happy, healthy, and thriving. Discover how we can cater to all their needs.
          </p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-center mb-8" style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#1e293b" }}>
            Comprehensive Care for Your Beloved Pets
          </h2>
          <div className="grid grid-cols-3">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <img src={service.image || "/placeholder.svg"} alt={service.title} />
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <button className="btn btn-outline">Learn More</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage
