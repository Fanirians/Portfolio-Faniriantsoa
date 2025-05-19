import React, { useEffect, useRef } from "react";

function Navbar() {
  const navbarRef = useRef(null);
  const togglerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Si le menu est ouvert (vérifié par la présence de la classe 'show')
      const isMenuOpen = document.querySelector('.navbar-collapse.show');
      
      if (isMenuOpen && 
          !navbarRef.current.contains(event.target) && 
          !togglerRef.current.contains(event.target)) {
        // Ferme le menu
        const collapse = document.getElementById('navbarExample01');
        const bsCollapse = new window.bootstrap.Collapse(collapse, { toggle: false });
        bsCollapse.hide();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header ref={navbarRef}>
      <nav className="navbar navbar-expand-lg bg-white shadow-sm fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold text-primary" href="#accueil">
            Faniry Portfolio
          </a>
          <button
            ref={togglerRef}
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarExample01"
            aria-controls="navbarExample01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarExample01">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {[
                "Accueil",
                "À propos",
                "Expérience",
                "Formation",
                "Compétences",
                "Projets",
                "Contact",
              ].map((item, idx) => (
                <li className="nav-item" key={idx}>
                  <a
                    className="nav-link"
                    href={`#${item.toLowerCase().replace(/ /g, "")}`}
                    onClick={() => {
                      // Ferme le menu lorsqu'un lien est cliqué (sur mobile)
                      const collapse = document.getElementById('navbarExample01');
                      const bsCollapse = new window.bootstrap.Collapse(collapse, { toggle: false });
                      bsCollapse.hide();
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;