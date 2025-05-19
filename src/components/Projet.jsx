import React from "react";

function Projet() {
  const projects = [
    "Site de vente responsive avec catalogue dynamique",
    "Fractales en JavaScript (Système de Lindenmayer)",
    "Mini chat en Python avec authentification et interface",
    "Application de gestion de transport en Java avec NetBeans",
    "Base de données dynamique avec PHP"
  ];

  return (
    <section id="projets" className="py-5 text-white">
      <div className="container">
        <h2 className="section-title">Projets Réalisés</h2>
        <div className="row">
          {projects.map((proj, i) => (
            <div key={i} className="col-md-6 col-lg-4 mb-4">
              <div className="card h-100 text-dark shadow-sm border-0">
                <div className="card-body d-flex flex-column justify-content-between">
                  <h5 className="card-title fw-semibold">{proj}</h5>
                  <p className="card-text small mt-3 text-muted">
                    {/* Tu peux personnaliser cette description si tu veux */}
                    Projet académique ou personnel visant à renforcer mes compétences en développement.
                  </p>
                  <button className="btn btn-outline-primary mt-auto" disabled>
                    Voir détail
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projet;
