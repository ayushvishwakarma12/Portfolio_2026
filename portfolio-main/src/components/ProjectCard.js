import { Col } from "react-bootstrap";
import { AiOutlineArrowRight } from "react-icons/ai";

export const ProjectCard = ({
  title,
  description,
  imgUrl,
  projectLink,
  category,
}) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img className="project-image" src={imgUrl} alt={title} />

        <div className="proj-txtx">
          <span className="proj-kicker">{category}</span>
          <a
            href={projectLink || "#projects"}
            target={projectLink ? "_blank" : undefined}
            rel={projectLink ? "noreferrer" : undefined}
            style={{ textDecoration: "none", color: "#ffffff" }}
          >
            <h4>{title}</h4>
            <p>{description}</p>
            <span className="project-link">
              {projectLink ? "Visit Project" : "Currently Building"} <AiOutlineArrowRight />
            </span>
          </a>
        </div>
      </div>
    </Col>
  );
};
