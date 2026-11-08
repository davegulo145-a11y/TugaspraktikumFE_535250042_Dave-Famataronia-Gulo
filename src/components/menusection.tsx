"use client";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

interface Coffee {
  name: string;
  description: string;
  price: string;
  image: string;
}
export default function MenuSection() {
  const coffees: Coffee[] = [
    {
      name: "Kenangan Mantan",
      description: "Kopi susu dengan rasa manis dan creamy.",
      price: "Rp 18.000",
      image: "/images/kenangan mantan.jpg",
    },
    {
      name: "Americano",
      description: "Kopi hitam dengan rasa khas dan menyegarkan.",
      price: "Rp 15.000",
      image: "/images/americano.jpg",
    },
    {
      name: "Creamy Latte",
      description: "Perpaduan kopi susu dan gula aren dengan tekstur lebih creamy",
      price: "Rp 24.000",
      image: "/images/creamylatte.jpg",
    },
  ];

  return (
    <section id="menu" className="menu-section">
      <Container>
        <div className="section-title">
          <h2>Menu Favorit</h2>
          <p>Nikmati pilihan kopi favorit untuk menemani harimu.</p>
        </div>

        <Row>
          {coffees.map((coffee, index) => (
            <Col md={4} sm={6} xs={12} key={index} className="mb-4">
              <Card className="coffee-card h-100">
                <Card.Img
                  variant="top"
                  src={coffee.image}
                  alt={coffee.name}
                />

                <Card.Body>
                  <Card.Title>{coffee.name}</Card.Title>
                  <Card.Text>{coffee.description}</Card.Text>
                  <h5 className="coffee-price">{coffee.price}</h5>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}