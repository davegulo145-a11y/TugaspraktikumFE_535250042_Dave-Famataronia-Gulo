
"use client";

import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function NavbarComponent() {
  const [active, setActive] = useState("Home");

  const menus = ["Home", "Menu", "About", "Contact"];

  useEffect(() => {
    const sections = menus.map((menu) =>
      document.getElementById(menu.toLowerCase())
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;

            const activeMenu =
              sectionId.charAt(0).toUpperCase() +
              sectionId.slice(1);

            setActive(activeMenu);
          }
        });
      },
      {
        rootMargin: "-30% 0px -60% 0px",
      }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <Navbar expand="lg" className="coffee-navbar" sticky="top">
      <Container>
        <Navbar.Brand href="#home" className="brand">
          <span>Kopi</span> Kenangan ☕
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-coffee" />

        <Navbar.Collapse id="navbar-coffee">
          <Nav className="ms-auto">
            {menus.map((menu) => (
              <Nav.Link
                key={menu}
                href={`#${menu.toLowerCase()}`}
                className={
                  active === menu ? "active-menu" : ""
                }
                onClick={() => setActive(menu)}
              >
                {menu}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
