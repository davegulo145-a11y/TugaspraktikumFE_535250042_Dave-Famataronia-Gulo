"use client";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function AboutSection() {
  return (
    <section id="about" className="about-section">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="mb-4 mb-md-0">
            <img
              src="/images/coffee2.jpg"
              alt="Kopi Kenangan"
              className="about-image"
            />
          </Col>

          <Col md={6}>
            <div className="about-content">
              <h2>Tentang Kopi Kenangan</h2>

              <p>
                Kopi Kenangan hadir untuk menemani setiap momen
                berharga dalam kehidupan sehari-hari. Dengan cita
                rasa kopi yang nikmat dan pilihan menu yang beragam,
                setiap tegukan menjadi pengalaman yang berkesan.
              </p>

              <p>
                Nikmati kopi favoritmu dan ciptakan kenangan
                indah bersama orang-orang tersayang.
              </p>

              <a href="#menu" className="about-button">
                Jelajahi Menu
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
