import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

function Header() {
  const [setIsDarkMode] = useState(true);

  useEffect(() => {
    const chk = document.getElementById('chk');
    const handleChange = () => {
      document.body.classList.toggle('dark');
      setIsDarkMode(prevIsDarkMode => !prevIsDarkMode);
    };

    chk.addEventListener('change', handleChange);

    return () => {
      chk.removeEventListener('change', handleChange);
    };
  }, [setIsDarkMode]);

  return (
    
    <header className={styles.header}>
      <Link to="/">
        <span>lucasWagner.dev</span>
      </Link>

      

      <nav>
        <Link to="/">Home</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/projetos">Projetos</Link>
        <Link to="/contatos">Contatos</Link>
      </nav>
      <div>
        <input type="checkbox" className="checkbox" id="chk" />
        <label className="label" htmlFor="chk">
          <i className="fas fa-moon"></i>
          <i className="fas fa-sun"></i>
          <div className="ball"></div>
        </label>
      </div>
    </header>
  );
}

export default Header;