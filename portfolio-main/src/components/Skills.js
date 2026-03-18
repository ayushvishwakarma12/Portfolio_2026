import { Line } from "rc-progress";

const skillsData = [
  {
    label: "Frontend Development",
    data: [
      { skillName: "HTML", percentage: 95 },
      { skillName: "CSS", percentage: 90 },
      { skillName: "JavaScript", percentage: 80 },
      { skillName: "React JS", percentage: 85 },
      { skillName: "Bootstrap", percentage: 90 },
    ],
  },
  {
    label: "Backend & Logic",
    data: [
      { skillName: "Python", percentage: 65 },
      { skillName: "Node JS", percentage: 65 },
      { skillName: "Express JS", percentage: 65 },
      { skillName: "Java", percentage: 70 },
    ],
  },
  {
    label: "Data & Cloud",
    data: [
      { skillName: "SQL", percentage: 72 },
      { skillName: "MongoDB", percentage: 65 },
      { skillName: "AWS", percentage: 60 },
      { skillName: "Docker", percentage: 58 },
    ],
  },
  {
    label: "Enterprise Growth",
    data: [
      { skillName: "Clarity PPM", percentage: 72 },
      { skillName: "Responsive Design", percentage: 88 },
      { skillName: "UI Thinking", percentage: 84 },
      { skillName: "Problem Solving", percentage: 82 },
    ],
  },
];

const currentFocus = [
  "Java",
  "Clarity PPM",
  "AWS",
  "SQL",
  "Docker",
  "Node.js",
  "React",
];

export default function Skills() {
  return (
    <section id="skills" className="section-shell skills">
      <div className="container">
        <span className="eyebrow">Capabilities</span>
        <h2 className="section-heading">Technical skills shaped by training and real work</h2>
        <p className="section-copy">
          My base was built through hands-on full stack learning, and now my
          professional role is helping me deepen enterprise systems, cloud
          knowledge, and scalable development practices.
        </p>

        <div className="skills-grid">
          {skillsData.map((skill) => (
            <div key={skill.label} className="skill-card glass-card">
              <h3>{skill.label}</h3>
              {skill.data.map((language) => (
                <div className="skill-item" key={language.skillName}>
                  <div className="skill-meta">
                    <span>{language.skillName}</span>
                    <span>{language.percentage}%</span>
                  </div>
                  <Line
                    percent={language.percentage}
                    strokeWidth={2}
                    trailWidth={2}
                    trailColor="rgba(255,255,255,0.08)"
                    strokeColor="#7df9c6"
                    strokeLinecap="round"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="tool-cloud">
          {currentFocus.map((tool) => (
            <span key={tool} className="tool-chip">
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
