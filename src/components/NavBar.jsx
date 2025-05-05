import React, { useContext } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ModeContext } from "./ModeContext"; // Change this line to use named import

const NavBar = () => {
  const { toggleMode, darkMode } = useContext(ModeContext)
  return (
    <Navbar
      expand="lg"
      bg={darkMode ? "dark" : "light"}
      variant={darkMode ? "dark" : "light"}
      className="navbar navbar-expand-lg navbar-light bg-light position-fixed w-100 z-2"
    >
      <Container>
        <Navbar.Brand as={Link} to="/">MyPortfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav" className="justify-content-between">
          {/* Left Side Links */}
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
            <Nav.Link as={Link} to="/skills">Skills</Nav.Link>
            <Nav.Link as={Link} to="/">Resume</Nav.Link>
          </Nav>

          {/* Right Side Icons */}
          <Nav className="d-flex align-items-center gap-3">
            <Nav.Link as={Link} to="/contact" title="Contact">
              <i className="bi bi-envelope-fill fs-5"></i>
            </Nav.Link>

            <Nav.Link onClick={toggleMode} style={{ cursor: "pointer" }} title="Toggle Theme">
              <i className={`bi ${darkMode ? "bi-sun-fill" : "bi-moon-fill"} fs-5`}></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;