
"use client";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function ContactSection() {
  return (
    <section id="contact" className="contact-section">
      <Container>
        <div className="section-title">
          <h2>Hubungi Kami</h2>
          <p>Temukan informasi dan kontak kami di sini.</p>
        </div>

        <Row className="text-center">
          <Col md={4} className="mb-4">
            <div className="contact-card">
              <h4>📍 Lokasi</h4>
              <p>Jakarta, Indonesia</p>
            </div>
          </Col>

          <Col md={4} className="mb-4">
            <div className="contact-card">
              <h4>🕒 Jam Operasional</h4>
              <p>Setiap Hari: 08.00 - 22.00</p>
            </div>
          </Col>

          <Col md={4} className="mb-4">
            <div className="contact-card">
              <h4>📞 Kontak</h4>
              <p>Email: info@kopikenangan.example</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
