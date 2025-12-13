import React from "react";

const skills = [
  "React",
  "Angular",
  "TypeScript",
  "JavaScript (ES6+)",
  "HTML5",
  "CSS3 / SASS",
  "Bootstrap",
  "Vite",
  "Node.js",
  "Git & GitHub",
  "Testing (Jest)"
];

const Skills: React.FC = () => {
  return (
    <section id="habilidades" className="section">
      <h2 className="section-title">Habilidades</h2>

      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill-pill" key={skill}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
