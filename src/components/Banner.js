import { useState } from 'react';
import PhoneModal from './PhoneModal';
import MailModal from './MailModal';
import logo from "../assets/logoJC.jpg";
import mail from "../assets/mailLogo.png";
import phone from "../assets/phoneLogo.png"
import github from "../assets/githubLogo.png";
import linkedin from "../assets/linkedinLogo.png";
import codewars from "../assets/codewarsLogo.png";
import menuLogo from "../assets/menuLogo.png";
import closeLogo from "../assets/closeLogo.png"
import "../styles/Banner.css";
import jsonData from '../data/data.json';

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

function Banner() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPhoneModalOpen, setIsPhoneModalOpen] = useState(false);
  const [isMailModalOpen, setIsMailModalOpen] = useState(false);

  function toggleMobileMenu() {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  function togglePhoneModal() {
    setIsPhoneModalOpen(!isPhoneModalOpen);
  }
  function toggleMailModal() {
    setIsMailModalOpen(!isMailModalOpen);
  }
  return (
    <div className="banner">
      <button onClick={scrollToTop} className="scroll-to-top-button">
        <img src={logo} alt="Logo principal" className="logoBanner"/>
      </button>
      <button onClick={toggleMobileMenu} className="mobile-menu-toggle">
      <img src={!isMobileMenuOpen ? menuLogo :closeLogo} alt="Logo menu" className="logoMenu"/>
        <div className={`hamburger-icon ${isMobileMenuOpen ? 'open' : ''}`}></div>
      </button>
      <nav className={`nav-links${isMobileMenuOpen ? 'open' : ''}`}>
        <ul>
          <li className='mobileHome'>
            <a href="#title">Accueil</a>
          </li>
          <li>
            <a href="#aboutMe">About me</a>
          </li>
          <li>
            <a href="#languages">{jsonData.francais.titreLanguage}</a>
          </li>
          <li>
            <a href="#frameworks">Frameworks</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#diplomas">{jsonData.francais.titreFormation}</a>
          </li>
          <li>
            <a href="#jobs">{jsonData.francais.titreExperience}</a>
          </li>
        </ul>
      </nav>
      <div className={`social-banner${isMobileMenuOpen ? 'open' : ''}`}>
        <div onClick={togglePhoneModal}>
          <img src={phone} alt="phone" className="logo" />
        </div>
        <div onClick={toggleMailModal}>
          <img src={mail} alt="mail" className="logo" />
        </div>
        <div>
          <a href={jsonData.informations.github} rel="noreferrer" target="_blank"><img src={github} alt="github" className="logoSocial" /></a>
        </div>
        <div>
          <a href={jsonData.informations.linkedin} rel="noreferrer" target="_blank"><img src={linkedin} alt="linkedin" className="logoSocial" /></a>
        </div>
        <div>
          <a href={jsonData.informations.codewars} rel="noreferrer" target="_blank"><img src={codewars} alt="codewars" className="logoSocial" /></a>
        </div>
      </div>

      {isPhoneModalOpen && (
        <PhoneModal
          telephone={jsonData.informations.telephone}
          togglePhoneModal={togglePhoneModal}
        />
      )}
      {isMailModalOpen && (
        <MailModal
          mail={jsonData.informations.mail}
          toggleMailModal={toggleMailModal}
        />
      )}
    </div>
  );
}

export default Banner;
