import React from "react";
import profileImage from '../image/Profil.jpg'; // Adjust the path to your image

function Header() {
  return (
    <section
      id="accueil"
      className="d-flex flex-column justify-content-center align-items-center text-center hero-section"
    >
      <img 
        src={profileImage} 
        alt="Portrait of Faniriantsoa Yves" 
        className="profile-image rounded-circle" // Add this class for custom styles
        style={{ width: "150px", height: "150px" }} // Adjust size as needed
      />
      <h1 className="display-5 fw-bold mb-3 header-title">
        Je suis Faniriantsoa Yves
      </h1>
      <p
        className="lead mx-auto hero-description px-3"
        style={{ maxWidth: "720px" }}
      >
        Un jeune développeur web passionné, curieux, motivé constamment à la recherche de nouvelles compétences, 
        je m'investis pleinement dans la création de solutions web modernes, réactives et élégantes.
        Mon objectif est de concevoir des interfaces intuitives qui allient esthétique et performance, 
        tout en continuant à évoluer au contact de chaque projet que je réalise.
      </p>
      <a className="btn btn-primary mt-3" href="#contact" role="button">
        Me contacter
      </a>
    </section>
  );
}

export default Header;