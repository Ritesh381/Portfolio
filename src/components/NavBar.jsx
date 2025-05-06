import React, { useContext } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ModeContext } from "./ModeContext";

const NavBar = () => {
  const { toggleMode, darkMode } = useContext(ModeContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <Navbar
      expand="lg"
      bg={darkMode ? "dark" : "light"}
      variant={darkMode ? "dark" : "light"}
      className="navbar navbar-expand-lg navbar-light bg-light position-fixed w-100 z-2"
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          Ritesh😎
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav" className="justify-content-between">
          {/* Left Side Links */}
          <Nav className="me-auto">
            <nav className="nav">
              {["home", "about", "projects", "skills", "education"].map(
                (section) => (
                  <span
                    key={section}
                    onClick={() => handleNavClick(section)}
                    className={`nav-link ${
                      darkMode ? "text-white" : "text-dark"
                    }`}
                    style={{ cursor: "pointer" }}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </span>
                )
              )}
            </nav>
          </Nav>

          {/* Right Side Icons */}
          <Nav className="d-flex flex-row align-items-center gap-3">
            <Nav.Link as={Link} to="/resume" title="Resume">
              <i className="bi bi-file-earmark-person"></i>
            </Nav.Link>

            <Nav.Link as={Link} to="/contact" title="Contact">
              <i className="bi bi-envelope-fill fs-5"></i>
            </Nav.Link>

            <Nav.Link
              onClick={toggleMode}
              style={{ cursor: "pointer" }}
              title="Toggle Theme"
            >
              <i
                className={`bi ${
                  darkMode ? "bi-sun-fill" : "bi-moon-fill"
                } fs-5`}
              ></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>

      {/* Custom Styles */}
      <style>
  {`
    .nav .nav-link {
      transition: color 0.3s ease;
      cursor: pointer;
    }

    .nav .nav-link:hover {
      color: #007bff !important;
    }

    .text-white {
      color: white !important;
    }

    .text-dark {
      color: black !important;
    }

    .nav .nav-link:focus,
    .navbar-brand:focus,
    .navbar-toggler:focus {
      outline: none !important;
      box-shadow: none !important;
    }

    /* Remove focus outline for right-side nav links */
    .navbar-nav .nav-link:focus {
      outline: none !important;
      box-shadow: none !important;
    }

    .nav .nav-link:focus-visible {
      outline: 2px solid #007bff;
      outline-offset: 2px;
    }
  `}
</style>

    </Navbar>
  );
};

export default NavBar;
