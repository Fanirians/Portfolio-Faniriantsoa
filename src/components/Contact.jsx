import React from "react";
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub, FaFacebookF, FaTwitter } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Mes Contacts</h2>
        <p className="section-subtitle">
          N'hesiter pas à me contacter pour toute eventialité de contribution.
        </p>

        <div className="contact-container">
          {/* Colonne de gauche - Informations de contact */}
          <div className="contact-info">
            <div className="info-group">
              <div className="info-icon phone-icon">
                <FaPhone className="icon" />
              </div>
              <div className="info-content">
                <h4>Phone:</h4>
                <p>+261-34-46-193-35</p>
              </div>
            </div>

            <div className="info-group">
              <div className="info-icon email-icon">
                <FaEnvelope className="icon" />
              </div>
              <div className="info-content">
                <h4>Email:</h4>
                <p>RATSIMBAHARIZAFY@gmail.com</p>
              </div>
            </div>

            <div className="info-group">
              <div className="info-icon linkedin-icon">
                <FaLinkedin className="icon" />
              </div>
              <div className="info-content">
                <h4>LinkedIn:</h4>
                <a href="https://www.linkedin.com/">linkedin.com/in/yourprofile</a>
              </div>
            </div>

            <div className="info-group">
              <div className="info-icon github-icon">
                <FaGithub className="icon" />
              </div>
              <div className="info-content">
                <h4>Github:</h4>
                <a href="https://github.com/">github.com/yourusername</a>
              </div>
            </div>
          </div>

          {/* Colonne de droite - Formulaire */}
          <div className="contact-form">
            <form>
              <div className="form-group">
                <input 
                  type="text" 
                  placeholder="Name" 
                  className="form-input"
                  required
                />
              </div>
              <div className="form-group">
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="form-input"
                  required
                />
              </div>
              <div className="form-group">
                <input 
                  type="text" 
                  placeholder="Subject" 
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <textarea 
                  placeholder="Message" 
                  className="form-textarea"
                  rows="5"
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="contact-footer">
        <div className="footer-social">
          <a href="#" className="social-icon"><FaFacebookF /></a>
          <a href="#" className="social-icon"><FaTwitter /></a>
          <a href="#" className="social-icon"><FaLinkedin /></a>
          <a href="#" className="social-icon"><FaGithub /></a>
        </div>
        <div className="footer-copyright">
          &copy; {new Date().getFullYear()} Faniriantsoa Yves. Tous droits réservés.
        </div>
      </footer>
    </section>
  );
}

export default Contact;