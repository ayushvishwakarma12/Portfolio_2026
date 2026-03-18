import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { TiSocialLinkedin, TiSocialGithub } from "react-icons/ti";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { profile } from "../data/profile";

export default function NavBar() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Navbar expand="md" className={`${scrolled ? "scrolled navbar-dark" : ""}`}>
      <Container>
        <Navbar.Brand className="logo" href="#home">
          Ayush
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="#home"
              className={activeLink === "home" ? "active navbar-link" : "navbar-link"}
              onClick={() => setActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#about"
              className={activeLink === "about" ? "active navbar-link" : "navbar-link"}
              onClick={() => setActiveLink("about")}
            >
              About
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={activeLink === "skills" ? "active navbar-link" : "navbar-link"}
              onClick={() => setActiveLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#journey"
              className={activeLink === "journey" ? "active navbar-link" : "navbar-link"}
              onClick={() => setActiveLink("journey")}
            >
              Journey
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={activeLink === "projects" ? "active navbar-link" : "navbar-link"}
              onClick={() => setActiveLink("projects")}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              href="#connect"
              className={activeLink === "connect" ? "active navbar-link" : "navbar-link"}
              onClick={() => setActiveLink("connect")}
            >
              Contact
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a
                href={profile.linkedIn}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <span>
                  <TiSocialLinkedin className="icon" />
                </span>
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <span>
                  <TiSocialGithub className="icon" />
                </span>
              </a>
            </div>
            <button className="vvd">
              <span>
                <a href="#connect" className="lets-connect-button">
                  Let's Connect
                </a>
              </span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
