import Link from 'next/link';
import React, { useState } from 'react'

export const Header = () => {
  globalThis?.window?.addEventListener('scroll', function() {
    const header = document.querySelector(".header");
    if (this.scrollY >= 80) {
      header.classList.add("scroll-header");
      header.style.backgroundColor = "rgba(250, 250, 250, 0.9)";
    }
    else {
      header.classList.remove("scroll-header");
      header.style.backgroundColor = "rgb(250, 250, 250)";
    }
  });

  const [toggle, setToggle] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  return (
    <header className="header">
        <nav className="nav container">
          <Link href="/" className='nav__logo'>Jose Tobing</Link>

          <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
            <ul className="nav__list grid">
              <li className="nav__item">
                <a href="#home" onClick={() => setActiveNav("#home")} className={activeNav === "#home" ? "nav__link active-link" : "nav__link"}>
                  <i className="uil uil-estate nav__icon"></i>Home
                </a>
              </li>

              <li className="nav__item">
                <a href="#about" onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? "nav__link active-link" : "nav__link"}>
                  <i className="uil uil-user nav__icon"></i>About
                </a>
              </li>

              <li className="nav__item">
                <a href="#skills" onClick={() => setActiveNav("#skills")} className={activeNav === "#skills" ? "nav__link active-link" : "nav__link"}>
                  <i className="uil uil-file-alt nav__icon"></i>Skills
                </a>
              </li>

              <li className="nav__item">
                <a href="#portfolio" onClick={() => setActiveNav("#portfolio")} className={activeNav === "#portfolio" ? "nav__link active-link" : "nav__link"}>
                  <i className="uil uil-scenery nav__icon"></i>Portfolio
                </a>
              </li>

              <li className="nav__item">
                <a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? "nav__link active-link" : "nav__link"}>
                  <i className="uil uil-message nav__icon"></i>Contact
                </a>
              </li>
            </ul>
            <i className="uil uil-times nav__close" onClick={() => setToggle(!toggle)}></i>
          </div>
          <div className="nav__toggle" onClick={() => setToggle(!toggle)}>
            <i className="uil uil-apps"></i>
          </div>
        </nav>
    </header>
  )
}