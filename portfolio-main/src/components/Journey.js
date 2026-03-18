const timelineItems = [
  {
    period: "2022 - 2024",
    title: "Full Stack Development Program",
    company: "NxtWave",
    description:
      "Built a strong foundation in frontend and backend development through hands-on learning, projects, and practical problem solving. This phase gave me the confidence to create modern web applications and shaped the portfolio projects I built.",
    skills: ["HTML", "CSS", "Python", "JavaScript", "React", "Node.js", "Databases"],
  },
  {
    period: "2024",
    title: "Career Launch",
    company: "ITDesign",
    description:
      "I got placed at ITDesign and started my professional journey. This transition helped me move from training projects into real work environments, team collaboration, and more structured delivery practices.",
    skills: ["Professional Experience", "Teamwork", "Delivery Mindset"],
  },
  {
    period: "2024 - Present",
    title: "Current Growth Path",
    company: "ITDesign",
    description:
      "I am currently expanding my skill set with Java, Clarity PPM, AWS, SQL, and Docker while continuing to improve my frontend thinking and full stack development approach.",
    skills: ["Java", "Clarity PPM", "AWS", "SQL", "Docker"],
  },
];

const certificates = [
  "HTML & CSS Fundamentals",
  "Python Programming",
  "JavaScript Development",
  "React Development",
  "Node.js",
  "Database Foundations",
];

const experienceHighlights = [
  {
    title: "Current role focus",
    description:
      "Working at ITDesign and growing through enterprise workflows, structured delivery, and practical product collaboration.",
  },
  {
    title: "Tools in progress",
    description:
      "Actively learning and applying Java, Clarity PPM, AWS, SQL, and Docker as part of my professional growth path.",
  },
  {
    title: "What I am improving",
    description:
      "Stronger system thinking, cleaner implementation habits, and the ability to connect frontend quality with backend and platform reliability.",
  },
];

export default function Journey() {
  return (
    <section id="journey" className="section-shell journey">
      <div className="container">
        <span className="eyebrow">Journey</span>
        <h2 className="section-heading">From NxtWave learner to ITDesign professional</h2>
        <p className="section-copy">
          This section highlights the path behind the projects, showing how my
          learning journey became a professional one and how I am continuing to
          grow in enterprise and cloud-oriented technologies.
        </p>

        <div className="timeline">
          {timelineItems.map((item) => (
            <div key={item.title} className="timeline-item">
              <span className="timeline-dot"></span>
              <div className="timeline-card glass-card">
                <span className="timeline-period">{item.period}</span>
                <div className="timeline-title-row">
                  <div>
                    <h3>{item.title}</h3>
                    <span className="timeline-company">{item.company}</span>
                  </div>
                </div>
                <p className="timeline-copy">{item.description}</p>
                <div className="timeline-badges">
                  {item.skills.map((skill) => (
                    <span key={skill} className="timeline-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="experience-panel glass-card">
          <div className="experience-panel-copy">
            <span className="eyebrow">ITDesign Experience</span>
            <h3 className="section-heading" style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)" }}>
              Turning learning into professional execution
            </h3>
            <p className="section-copy">
              My current phase is about moving beyond training projects into
              real delivery practices. I am using this time to strengthen
              enterprise tools, improve engineering discipline, and keep my
              frontend and full stack base sharp.
            </p>
          </div>
          <div className="experience-grid">
            {experienceHighlights.map((item) => (
              <div key={item.title} className="experience-card">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="certificates-panel glass-card">
          <span className="eyebrow">Certificates</span>
          <h3 className="section-heading" style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)" }}>
            Achievement cards ready for your certificate images
          </h3>
          <p className="section-copy">
            I created a dedicated certification area for the technologies you
            mentioned. Once you provide the certificate images, we can replace
            each placeholder with the real image and make this section even more
            personal.
          </p>
          <div className="certificate-grid">
            {certificates.map((certificate) => (
              <div key={certificate} className="certificate-card">
                <span className="certificate-label">Certificate</span>
                <h4>{certificate}</h4>
                <p>
                  Showcase your verified learning and use this card for the real
                  certificate image whenever you are ready to add it.
                </p>
                <div className="certificate-placeholder">Add certificate image here</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
