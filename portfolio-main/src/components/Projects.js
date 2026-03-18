import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import TrackVisibility from "react-on-screen";

const projects = {
  projectTab1: [
    {
      title: "Movies App",
      description:
        "An immersive platform for exploring and discovering movies of various genres.",
      imgUrl:
        "https://res.cloudinary.com/ddkfpnw7u/image/upload/v1683723894/movie%20app/netfilx_1_rjr9ca.png",
      projectLink: "https://ayumovieapp.ccbp.tech/",
      category: "React Project",
    },
    {
      title: "Nxt Watch",
      description:
        "A replication of a modern video-sharing experience with a smooth browsing flow.",
      imgUrl:
        "https://images.unsplash.com/photo-1603566234384-f5f5b59168cc?auto=format&fit=crop&w=1170&q=80",
      projectLink: "https://ayunxtwatch.ccbp.tech/",
      category: "React Project",
    },
    {
      title: "Nxt Trendz",
      description:
        "A comprehensive shopping experience focused on product browsing and interaction.",
      imgUrl:
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1170&q=80",
      projectLink: "https://ayunxtwatch.ccbp.tech/",
      category: "E-Commerce",
    },
    {
      title: "Jobby App",
      description:
        "A streamlined platform connecting job seekers with matching opportunities.",
      imgUrl:
        "https://assets.ccbp.in/frontend/react-js/projects-showcase/appointment-app-img.png",
      projectLink: "https://ayujobby.ccbp.tech/login",
      category: "Portal UI",
    },
    {
      title: "React Weather App",
      description:
        "A real-time weather application delivering forecasts and live conditions.",
      imgUrl:
        "https://images.unsplash.com/photo-1561484930-998b6a7b22e8?auto=format&fit=crop&w=1170&q=80",
      projectLink: "https://ayureactweatherapp.netlify.app/",
      category: "API App",
    },
    {
      title: "Nxt Slides",
      description: "A presentation-focused interface built with design and usability in mind.",
      imgUrl:
        "https://images.unsplash.com/photo-1512314889357-e157c22f938d?auto=format&fit=crop&w=1171&q=80",
      projectLink: "https://ayunxtslides.ccbp.tech/",
      category: "Presentation UI",
    },
  ],
  projectTab2: [
    {
      title: "Rock Paper Scissors",
      description:
        "A classic game experience recreated with an interactive frontend flow.",
      imgUrl:
        "https://img.freepik.com/free-vector/rock-paper-scissors-banner_107791-8387.jpg?w=996",
      projectLink: "https://ayurockpapersci.ccbp.tech",
      category: "Game",
    },
    {
      title: "Stop Watch",
      description:
        "A simple and reliable time-tracking utility with clean interactions.",
      imgUrl:
        "https://img.freepik.com/free-vector/time-management-concept-landing-page_52683-18611.jpg?w=1060",
      projectLink: "https://stoppwwatch.ccbp.tech",
      category: "Utility",
    },
    {
      title: "Match Game",
      description:
        "A memory game that focuses on speed, accuracy, and user engagement.",
      imgUrl:
        "https://img.freepik.com/free-vector/match-game-kids_23-2148774051.jpg?w=740",
      projectLink: "https://matchgameayu.ccbp.tech",
      category: "Game",
    },
    {
      title: "Emoji Game",
      description:
        "A playful challenge that turns emoji-based interaction into game logic.",
      imgUrl:
        "https://img.freepik.com/free-vector/colorful-emoji-set-theme_79603-1264.jpg?w=1060",
      projectLink: "https://emojigameayu.ccbp.tech",
      category: "Game",
    },
    {
      title: "To-do App",
      description:
        "A productivity app for organizing tasks with a lightweight and usable interface.",
      imgUrl:
        "https://img.freepik.com/free-vector/illustrated-appointment-booking-with-smartphone_52683-38829.jpg?w=740",
      projectLink: "https://ayutodo.ccbp.tech",
      category: "Productivity",
    },
    {
      title: "Gradient Color Generator",
      description:
        "A small but useful CSS tool to create attractive color gradients quickly.",
      imgUrl:
        "https://img.freepik.com/free-photo/vivid-blurred-colorful-wallpaper-background_58702-2430.jpg?w=1060",
      projectLink: "https://ayucssgenerator.ccbp.tech",
      category: "CSS Tool",
    },
  ],
  projectTab3: [
    {
      title: "Food Munch",
      description:
        "A responsive food platform that reflects my transition into practical full stack development work.",
      imgUrl:
        "https://img.freepik.com/free-vector/people-ordering-food-cafe-online_74855-5913.jpg?w=1060",
      projectLink: "",
      category: "Current Work",
    },
  ],
};

export const Projects = () => {
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <div className="project-intro">
                    <div>
                      <span className="eyebrow">Projects</span>
                      <h2 className="section-heading">Selected work that shaped my development style</h2>
                    </div>
                    <p className="section-copy">
                      These projects show how I moved from core learning to
                      building responsive, interactive, and user-focused
                      applications with React and full stack concepts.
                    </p>
                  </div>

                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">React Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">React Basic Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Current Working Projects</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={isVisible ? "animate__animated animate__slideInUp" : ""}
                    >
                      <Tab.Pane eventKey="first">
                        <Row className="project-grid">
                          {projects.projectTab1.map((project) => (
                            <ProjectCard key={project.title} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row className="project-grid">
                          {projects.projectTab2.map((project) => (
                            <ProjectCard key={project.title} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row className="project-grid">
                          {projects.projectTab3.map((project) => (
                            <ProjectCard key={project.title} {...project} />
                          ))}
                          <p className="project-note glass-card">
                            I am currently working on a dynamic Food Munch
                            project and using this kind of work to sharpen both
                            frontend experience and full stack thinking. It is
                            helping me connect responsive UI work with practical
                            database and application flow understanding.
                          </p>
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
