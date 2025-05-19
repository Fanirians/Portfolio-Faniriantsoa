import React from "react";
import { FaGraduationCap } from "react-icons/fa";

function Etudes() {
  const formations = [
    {
      diplome: "Licence en Informatique",
      description: "Formation approfondie en développement logiciel et gestion de projets informatiques à ISM Advances.",
      icon: <FaGraduationCap className="timeline-icon-svg" />
    },
    {
      diplome: "DTS - Institut Universitaire Polytechnique",
      description: "Diplôme de technicien supérieur spécialisé en génie logiciel et développement d'applications.",
      icon: <FaGraduationCap className="timeline-icon-svg" />
    },
    {
      diplome: "Baccalauréat Technique",
      description: "Obtention du baccalauréat technique option informatique au Lycée Technique Ampefiloha (ITA).",
      icon: <FaGraduationCap className="timeline-icon-svg" />
    }
  ];

  return (
    <section id="formation" className="qualification-section">
      <div className="container">
        <h2 className="section-title">Mes Formations</h2>
        
        <div className="qualification-timeline">
          {formations.map((formation, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-icon-container">
                <div className="timeline-icon-border">
                  {formation.icon}
                </div>
              </div>
              <div className="timeline-content">
                <h3 className="timeline-title">{formation.diplome}</h3>
                <p className="timeline-description">{formation.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Etudes;