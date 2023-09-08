import React, { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/Navbar.css";

function Navbar() {
  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <header>
      <div className="container-logo">
        <a href="#">
          {" "}
          <img
            className="logo"
            src="https://blogger.googleusercontent.com/img/a/AVvXsEjlVtSPLY3jntFOI78qawzWrkCx6awrK0lRvG5aHTKxBSWVofcgK0H9Ux0rhDUdG8i4e7GsJMKiMP8jfC8rJm4Rg6oEe8SyGbZQ0dT4OxLVC1K8uEYfDynZh81gn8n9pAFJ6F109DAWjve3Z_itG26Ch0AIOVedaDIum6xKLxzLUG3LzhXIBhZQbEmZYw=s100"
            alt=""
          />
        </a>
      </div>
      <nav ref={navRef}>
        <a href="#">
          <div className="container-link">Inicio</div>
        </a>
        <a href="#"><div className="container-link">Novelas Ligeras</div></a>
        <a href="#"><div className="container-link">Novelas Web</div></a>
        <a href="#"><div className="container-link">Mangas</div></a>
        <a href="#"><div className="container-link">Sobre Mi</div></a>
        <a href="#"><div className="container-link">Contactame</div></a>
        <button className="nav-btn nav-close-btn" onClick={showNavBar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavBar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
