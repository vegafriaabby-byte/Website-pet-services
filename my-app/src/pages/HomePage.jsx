import dog from "../assets/dog.jpg"  


const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Your Pet's Best Friend</h1>
              <p>
                Professional and loving care for your furry companions. We offer a range of services designed to keep
                your pets happy and healthy.
              </p>
              <a href="/services" className="hero-btn">
                Explore Our Services
              </a>
            </div>
            <div className="hero-image">
              <img src={dog} alt="Happy golden retriever puppy" />
            </div>
          </div>
        </div>
      </section>

      {/* Dedicated Care Section */}
      <section className="py-20" style={{ backgroundColor: "#ffffff" }}>
        <div className="container text-center">
          <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#1e293b", marginBottom: "1.5rem" }}>
            Dedicated Care, Exceptional Service
          </h2>
          <p style={{ fontSize: "1.125rem", color: "#64748b", maxWidth: "800px", margin: "0 auto", lineHeight: "1.6" }}>
            At PetService Pro, we believe every pet deserves the best. Our team of passionate and experienced animal
            lovers is dedicated to providing personalized care, ensuring your beloved companions receive the attention,
            exercise, and comfort they need. We treat your pets like our own, offering peace of mind and wagging tails.
          </p>
        </div>
      </section>

      {/* Why PetService Pro Section */}
      <section className="py-20" style={{ backgroundColor: "#f8fafc" }}>
        <div className="container">
          <h2 className="text-center mb-8" style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#1e293b" }}>
            Why Choose PawPal?
          </h2>
          <div className="grid grid-cols-3">
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3>Experienced Carers</h3>
              <p>
                Our team consists of highly trained and certified pet care professionals who understand animal behavior
                and needs.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </div>
              <h3>Personalized Attention</h3>
              <p>
                We tailor our services to meet the unique needs and preferences of each pet, ensuring a truly custom
                experience.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 12l2 2 4-4" />
                  <path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3" />
                  <path d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3" />
                  <path d="M13 12h3l4-4-4-4h-3" />
                  <path d="M11 12H8l-4-4 4-4h3" />
                </svg>
              </div>
              <h3>Safety First</h3>
              <p>
                Your pet's safety and well-being are our top priority. We follow strict safety protocols and are fully
                insured.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
