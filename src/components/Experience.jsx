import React from "react";

function Experience() {
  const experiences = [
    {
      poste: "Agent BPO d'annotation d'image",
      entreprise: "TDI Tana",
      dates: "2023 - Aujourd’hui",
      missions: "Analyse et évaluation d'images selon des critères de qualité en environnement BPO.",
      image: "https://mdbcdn.b-cdn.net/img/new/standard/nature/111.webp",
    },
    {
      poste: "Superviseur de sous-traitance d’image",
      entreprise: "Manjary Actus",
      dates: "2021 - 2022",
      missions: "Coordination des équipes et garantie de qualité des traitements.",
      image: "https://mdbcdn.b-cdn.net/img/new/standard/nature/112.webp",
    },
    {
      poste: "Formateur en traitement d'image & dactylographie",
      entreprise: "Divers",
      dates: "2021 - 2022",
      missions: "Formation technique à la saisie et traitement d’images pour les opérateurs.",
      image: "https://mdbcdn.b-cdn.net/img/new/standard/nature/113.webp",
    },
    {
      poste: "Agent opérateur de saisie",
      entreprise: "Eline Soft",
      dates: "2022 - 2023",
      missions: "Saisie rapide et précise des données avec vérification qualité.",
      image: "https://mdbcdn.b-cdn.net/img/new/standard/nature/114.webp",
    },
  ];

  return (
    <section id="experience" className="py-5">
      <div className="container">
        <h2 className="section-title mb-5">Mes Expérience</h2>
        <div className="row">
          {experiences.map((exp, idx) => (
            <div key={idx} className="col-md-6 col-lg-4 mb-4">
              <div className="card-custom">
                <img src={exp.image} alt={exp.poste} className="img-fluid" />
                <div className="card-overlay">
                  <h5 className="card-title">{exp.poste}</h5>
                  <h6 className="text-warning">{exp.entreprise}</h6>
                  <p className="fst-italic">{exp.dates}</p>
                  <p>{exp.missions}</p>
                  <a href="#!" className="btn btn-outline-light btn-sm mt-2">
                    Voir détails
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
