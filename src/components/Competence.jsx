import React, { useState, useEffect } from "react";

function Competence() {
  const skills = [
    { name: "HTML5", level: 95 },
    { name: "CSS3", level: 90 },
    { name: "Javascript", level: 85 },
    { name: "JQuery", level: 75 },
    { name: "Bootstrap", level: 65 },
    { name: "PHP", level: 60 },
  ];

  const [animatedLevels, setAnimatedLevels] = useState(skills.map(() => 0));

  useEffect(() => {
    const animationDuration = 2000; // 2 secondes
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / animationDuration, 1);

      const newLevels = skills.map((skill, index) => {
        return Math.floor(progress * skill.level);
      });

      setAnimatedLevels(newLevels);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    const timer = setTimeout(() => {
      requestAnimationFrame(animate);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="compétences" className="skills-section py-5">
      <div className="container">
        <h2 className="section-title mb-5">Mes Compétences</h2>
        
        <div className="skills-container">
          {skills.map((skill, index) => (
            <div className="skill-item" key={index}>
              <div className="skill-info">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percent">{animatedLevels[index]}%</span>
              </div>
              <div className="progress-bar">
                <div 
                  className="progress-fill" 
                  style={{ 
                    width: `${animatedLevels[index]}%`,
                    transition: 'width 1.5s ease-out'
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Competence;