import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import './css/Header.css';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import Dropdown from './components/Nav/Dropdown';
import Auth from './utils/Auth';
import './css/Pages.css';

function App() {

  const [links] = useState([
    {
      name: 'Home',
      href: '/home',
      label: 'home-page',
      class: 'checkbox',
      key: 'home',
      emoji: 'fas fa-home',
      emojiClass: 'home-emoji',
      linkClass: 'home-link',
    },
    {
      name: 'About Me',
      href: '/about',
      label: 'about-page',
      class: 'checkbox',
      key: 'about',
      emoji: 'fas fa-smile',
      emojiClass: 'about-emoji',
      linkClass: 'about-link',
    },
    {
      name: 'Portfolio',
      href: '/portfolio',
      label: 'portfolio-page',
      key: 'portfolio',
      emoji: 'fas fa-briefcase',
      emojiClass: 'portfolio-emoji',
      linkClass: 'portfolio-link',
    },
    {
      name: 'Resume',
      href: '/resume',
      label: 'resume-page',
      key: 'resume',
      emoji: 'fas fa-newspaper',
      emojiClass: 'resume-emoji',
      linkClass: 'resume-link',
    },
    {
      name: 'Contact',
      href: '/contact',
      label: 'contact-page',
      key: 'contact',
      emoji: 'fas fa-id-card',
      emojiClass: 'contact-emoji',
      linkClass: 'contact-link',
    }

  ])

  const [currentHomeCheck, setHomeCheck] = useState(false);
  const [currentAboutCheck, setAboutCheck] = useState(false);
  const [currentResumeCheck, setResumeCheck] = useState(false);
  const [currentPortfolioCheck, setPortfolioCheck] = useState(false);
  const [currentContactCheck, setContactCheck] = useState(false);
  const [currentMenu, setMenuState] = useState(false);

  function setPage(page) {
    if(page === 'home') {
      Auth.redirectPage(page);
      // setHomeCheck(currentHomeCheck => currentHomeCheck = true)
      // setAboutCheck(currentAboutCheck => currentAboutCheck = false);
      // setResumeCheck(currentResumeCheck => currentResumeCheck = false);
      // setPortfolioCheck(currentPortfolioCheck => currentPortfolioCheck = false);
      // setContactCheck(currentContactCheck => currentContactCheck = false);
      // setMenuState(currentMenu => currentMenu = false);
      Auth.getCurrentPage();
    }

    if(page === 'about') {
      Auth.redirectPage(page);
      // setHomeCheck(currentHomeCheck => currentHomeCheck = false)
      // setAboutCheck(currentAboutCheck => currentAboutCheck = true);
      // setResumeCheck(currentResumeCheck => currentResumeCheck = false);
      // setPortfolioCheck(currentPortfolioCheck => currentPortfolioCheck = false);
      // setContactCheck(currentContactCheck => currentContactCheck = false);
      // setMenuState(currentMenu => currentMenu = false);
      Auth.getCurrentPage();
    }

    if(page === 'resume') {
      Auth.redirectPage(page);
      // setHomeCheck(currentHomeCheck => currentHomeCheck = false)
      // setAboutCheck(currentAboutCheck => currentAboutCheck = false);
      // setResumeCheck(currentResumeCheck => currentResumeCheck = true);
      // setPortfolioCheck(currentPortfolioCheck => currentPortfolioCheck = false);
      // setContactCheck(currentContactCheck => currentContactCheck = false);
      // setMenuState(currentMenu => currentMenu = false);
      Auth.getCurrentPage();
    }

    if(page === 'portfolio') {
      Auth.redirectPage(page);
      // setHomeCheck(currentHomeCheck => currentHomeCheck = false)
      // setAboutCheck(currentAboutCheck => currentAboutCheck = false);
      // setResumeCheck(currentResumeCheck => currentResumeCheck = false);
      // setPortfolioCheck(currentPortfolioCheck => currentPortfolioCheck = true);
      // setContactCheck(currentContactCheck => currentContactCheck = false);
      // setMenuState(currentMenu => currentMenu = false);
      Auth.getCurrentPage();
    }

    if(page === 'contact') {
      Auth.redirectPage(page);
      // setHomeCheck(currentHomeCheck => currentHomeCheck = false)
      // setAboutCheck(currentAboutCheck => currentAboutCheck = false);
      // setResumeCheck(currentResumeCheck => currentResumeCheck = false);
      // setPortfolioCheck(currentPortfolioCheck => currentPortfolioCheck = false);
      // setContactCheck(currentContactCheck => currentContactCheck = true);
      // setMenuState(currentMenu => currentMenu = false);
      Auth.getCurrentPage();
    }
  }

  function setMenu() {
    setMenuState(currentMenu => currentMenu = true);
  }

  function closeMenu() {
    setMenuState(currentMenu => currentMenu = false);
  }


  return (
    <div className="page">
    <Router>
      <nav>
      <input type="checkbox" checked={currentMenu} id="header-menu" />
        <div className="header-container">
          <div className="header-content">
            <label htmlFor="home-page">
              Nathan
            </label>
            <label onClick={() => {setMenu()}} htmlFor="header-menu"><i className="fas fa-hamburger menu-icon"></i></label>
          </div>
        </div>

        <div className="dropdown-container">
          <div className="dropdown">
            <label onClick={() => {closeMenu()}} htmlFor="header-menu"><i class="fas fa-times menu-icon"></i></label>
              {links.map((link) => (
                <>
                <label htmlFor={link.label} className={`header-link ${link.linkClass}`}>{link.name}</label>
                </>
              ))}
          </div>
        </div>
      </nav>
      <Switch >
        <div className="content">
          <input type="checkbox" key="home" checked={currentHomeCheck} onChange={() => {setPage('home')}} id="home-page" className="checkbox"/>
          <input type="checkbox" key="about" checked={currentAboutCheck} onChange={() => {setPage('about')}} id="about-page" className="checkbox"/>
          <input type="checkbox" key="portfolio" checked={currentPortfolioCheck} onChange={() => {setPage('portfolio')}} id="portfolio-page" className="checkbox"/>
          <input type="checkbox" key="resume" checked={currentResumeCheck} onChange={() => {setPage('resume')}} id="resume-page" className="checkbox"/>
          <input type="checkbox" key="contact" checked={currentContactCheck} onChange={() => {setPage('contact')}} id="contact-page" className="checkbox"/>
          {Auth.getPageType() === 'home' && (
            <div className="home-page">
            <Home />
            </div>
          )}
          {Auth.getPageType() === 'about' && (
            <div className="about-page">
            <About />
            </div>
          )}
          {Auth.getPageType() === 'portfolio' && (
            <div className="portfolio-page">
            <Portfolio />
            </div>          
          )}
          {Auth.getPageType() === 'resume' && (
            <div className="resume-page">
            <Resume />
            </div>     
          )}
          {Auth.getPageType() === 'contact' && (
            <div className="contact-page">
            <Contact />
            </div>          
          )}
        </div>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
