// /* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import logo from "../../assets/img/logo_white.png";
import './NavBar.css'

export default function NavBar() {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
    }
    // 
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener;
  }, [])

  const onUpdateActiveLink = (value) =>{
    setActiveLink(value);
  }

  const handleConnectClick = () => {
    const connectSection = document.getElementById('connect');
    if (connectSection) {
      connectSection.scrollIntoView({ behavior: 'smooth' });
      setActiveLink('connect');
    }
  };

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
            <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggle-icon white"><FontAwesomeIcon icon={faBars} style={{color: "#ffffff",}} /></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link 
              href="#home" 
              className={activeLink === "home" ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('home')}
            >Home</Nav.Link>
            <Nav.Link 
              href="#skills" 
              className={activeLink === "skills" ? 'active navbar-link' : 'navbar-link'} 
              onClick={() => onUpdateActiveLink('skills')}
            >Skills</Nav.Link> 
            <Nav.Link 
              href="#projects" 
              className={activeLink === "projects" ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('projects')}
            >Projects</Nav.Link> 
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
                <a href='https://t.me/gulzhankarakul'><FontAwesomeIcon icon={faTelegram} /></a>
                <a href='https://github.com/GulzhanKarakul'><FontAwesomeIcon icon={faGithub} /></a>
                <a href='https://www.linkedin.com/in/gulzhan-karakul-5aabb72aa/'><FontAwesomeIcon icon={faLinkedin} /></a>
            </div>
            <button 
              onClick={handleConnectClick}
              className={activeLink === "connect" ? 'active navbar-link vvd' : 'navbar-link vvd'}
            ><span>Let&apos;s Connect</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
