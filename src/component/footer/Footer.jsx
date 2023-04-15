import React from 'react'

export const Footer = () => {
  return (
    <footer className='footer'>
        <div className="footer__container container">
            <h1 className="footer__title">Jose Tobing</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className='footer__link'>About</a>
                </li>
                <li>
                    <a href="#skills" className='footer__link'>Skills</a>
                </li>
                <li>
                    <a href="#portfolio" className='footer__link'>Portfolio</a>
                </li>
                <li>
                    <a href="#contact" className='footer__link'>Contact</a>
                </li>
            </ul>

            <div className="footer__social">
                <a href="https://www.instagram.com/jose__tobing/" className='footer__social-icon' target="_blank">
                <i class="bx bxl-instagram"></i>
                </a>
                <a href="https://www.linkedin.com/in/jose-lumbantobing/" className='footer__social-icon' target="_blank">
                <i class='bx bxl-linkedin-square' ></i>
                </a>
                <a href="https://github.com/JoseLumbantobing" className='footer__social-icon' target="_blank">
                <i class='bx bxl-github' ></i>
                </a>
                <a href="https://twitter.com/Jose__Tobing" className='footer__social-icon' target="_blank">
                <i class='bx bxl-twitter'></i>
                </a>
            </div>

            <span className="footer__copy">
                &#169; Jose M. Lumbantobing. All rights reserved
            </span>
        </div>
    </footer>
  )
}