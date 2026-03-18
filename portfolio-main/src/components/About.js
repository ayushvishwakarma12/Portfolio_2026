const strengths = [
  {
    title: "Design-aware development",
    description:
      "I care about how a product looks, feels, and performs, not just whether the code works.",
  },
  {
    title: "Learning with momentum",
    description:
      "From NxtWave to ITDesign, I have kept building steadily and expanding into enterprise technologies.",
  },
  {
    title: "Full stack foundation",
    description:
      "I am comfortable across frontend, backend, databases, and now cloud-oriented workflows as well.",
  },
];

const milestones = [
  "Full stack development training at NxtWave from 2022 to 2024",
  "Placed at ITDesign in 2024 and currently working there",
  "Learning Java, Clarity PPM, AWS, SQL, and Docker in professional workflows",
];

export default function About() {
  return (
    <section id="about" className="section-shell about-section">
      <div className="container">
        <div className="about-grid">
          <div>
            <span className="eyebrow">About Me</span>
            <h2 className="section-heading">A developer focused on growth, clarity, and real-world impact</h2>
            <p className="section-copy">
              I enjoy building web experiences that feel clean, responsive, and
              useful. My journey started with strong hands-on learning in full
              stack development, and now I am growing through professional work
              at ITDesign where I am expanding into enterprise platforms,
              backend thinking, and cloud-related tools.
            </p>
            <div className="about-list">
              {milestones.map((item) => (
                <div key={item} className="about-list-item">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="about-panel glass-card">
            <div className="about-panel-header">
              <h3>What I bring</h3>
              <p>
                I want to keep growing into a developer who can contribute
                across polished frontend work, practical backend systems, and
                long-term product quality.
              </p>
            </div>
            <div className="about-strengths">
              {strengths.map((strength) => (
                <div key={strength.title} className="about-strength-card">
                  <h4>{strength.title}</h4>
                  <p>{strength.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
