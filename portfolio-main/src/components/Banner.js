import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AiOutlineArrowRight } from "react-icons/ai";

const rotatingRoles = [
  "Full Stack Developer",
  "React Frontend Builder",
  "UI-Focused Problem Solver",
];

export default function Banner() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    const tick = () => {
      const i = loopNum % rotatingRoles.length;
      const fullText = rotatingRoles[i];
      const updatedText = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (isDeleting) {
        setDelta((prevDelta) => prevDelta / 2);
      }

      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(period);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setLoopNum((prevLoopNum) => prevLoopNum + 1);
        setDelta(500);
      }
    };

    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [delta, isDeleting, loopNum, text]);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <div className="hero-copy">
              <span className="tagline">Building products with design, code and clarity</span>
              <h1>
                Hi, I'm <span className="hero-name">Ayush</span>
                <br />
                <span className="wrap">{text}</span>
              </h1>
              <p>
                I started with full stack development learning at NxtWave from
                2022 to 2024, built strong project foundations in web
                technologies, and now I am working at ITDesign while growing my
                skills in Java, Clarity PPM, AWS, SQL, and Docker.
              </p>
              <div className="hero-actions">
                <a href="#journey" className="hero-button primary">
                  Explore My Journey <AiOutlineArrowRight />
                </a>
                <a href="#projects" className="hero-button secondary">
                  View Projects
                </a>
              </div>
              <div className="hero-stats">
                <div className="hero-stat glass-card">
                  <strong>2022</strong>
                  <span>Started full stack development journey</span>
                </div>
                <div className="hero-stat glass-card">
                  <strong>2024</strong>
                  <span>Joined ITDesign as a professional developer</span>
                </div>
                <div className="hero-stat glass-card">
                  <strong>10+</strong>
                  <span>Tools and technologies across web, cloud and enterprise</span>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <div className="hero-panel glass-card">
              <img
                className="hero-image"
                src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=80"
                alt="Developer workspace"
              />
              <div className="hero-chip-row">
                <span className="hero-chip">React</span>
                <span className="hero-chip">Node.js</span>
                <span className="hero-chip">Java</span>
                <span className="hero-chip">AWS</span>
                <span className="hero-chip">Clarity PPM</span>
                <span className="hero-chip">Docker</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
