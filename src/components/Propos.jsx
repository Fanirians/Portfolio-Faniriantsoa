import React from "react";
import photoVotreImage from "../image/Profil.jpg";

function Propos() {
  const handleDownloadCV = () => {
  // Chemin relatif depuis la racine public
  const cvPath = '/CV_Faniriantsoa_Yves.pdf';
  
  const link = document.createElement('a');
  link.href = cvPath;
  link.download = 'CV_Faniriantsoa_Yves.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

  return (
    <section id="propos" className="about-section">
      <div className="container">
        <div className="row align-items-center">
          {/* Image à gauche */}
          <div className="col-md-5 mb-4 mb-md-0">
            <img
              src={photoVotreImage}
              alt="Faniriantsoa"
              className="about-image"
            />
          </div>

          {/* Contenu à droite */}
          <div className="col-md-7">
            <h2 className="about-title">Je m'appelle Faniriantsoa.</h2>
            <p className="about-description">
              Développeur web passionné avec une expertise en création d'applications modernes et réactives.
            </p>

            <div className="about-info">
              <div className="info-item">
                <span className="info-label">Âge:</span>
                <span className="info-value">21</span>
              </div>
              <div className="info-item">
                <span className="info-label">Genre:</span>
                <span className="info-value">Homme</span>
              </div>
              <div className="info-item">
                <span className="info-label">Langues:</span>
                <span className="info-value">Français, Anglais</span>
              </div>
              <div className="info-item">
                <span className="info-label">Poste:</span>
                <span className="info-value">Développeur web</span>
              </div>
              <div className="info-item">
                <span className="info-label">Disponibilités:</span>
                <span className="info-value">CDD, CDI, Freelance</span>
              </div>
            </div>

            <button 
              className="download-btn"
              onClick={handleDownloadCV}
            >
              Télécharger CV
            </button>

            <div className="stats-container">
              <div className="stat-item">
                <div className="stat-number">4+</div>
                <div className="stat-label">Années d'expérience</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">80+</div>
                <div className="stat-label">Clients satisfaits</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">20+</div>
                <div className="stat-label">Projets réalisés</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Propos;