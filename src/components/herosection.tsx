
"use client";

import Carousel from "react-bootstrap/Carousel";

interface Slide {
  title: string;
  subtitle: string;
  imageUrl: string;
}

export default function HeroSection() {
  const slides: Slide[] = [
    {
      title: "Kopi Kenangan",
      subtitle: "Kopi enak, kenangan indah di setiap tegukan.",
      imageUrl: "/images/coffee1.jpg",
    },
    {
      title: "Temukan Kopi Favoritmu",
      subtitle: "Nikmati berbagai pilihan kopi dengan cita rasa istimewa.",
      imageUrl: "/images/coffee2.jpg",
    },
    {
      title: "Temani Harimu",
      subtitle: "Awali hari dengan secangkir kopi penuh semangat.",
      imageUrl: "/images/coffee3.jpg",
    },
  ];

  return (
    <section id="home" className="hero-section">
      <Carousel fade interval={4000} indicators controls>
        {slides.map((slide, index) => (
          <Carousel.Item key={index}>
            <div
              className="hero-slide"
              style={{
                backgroundImage: `url(${slide.imageUrl})`,
              }}
            >
              <div className="hero-overlay">
                <div className="hero-content">
                  <h1>{slide.title}</h1>
                  <p>{slide.subtitle}</p>

                  <a href="#menu" className="hero-button">
                    Lihat Menu
                  </a>
                </div>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
}
