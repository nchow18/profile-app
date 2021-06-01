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
      key: 'home'
    },
    {
      name: 'About Me',
      href: '/about',
      label: 'about-page',
      class: 'checkbox',
      key: 'about'
    },
    {
      name: 'Portfolio',
      href: '/portfolio',
      label: 'portfolio-page',
      key: 'portfolio'
    },
    {
      name: 'Resume',
      href: '/resume',
      label: 'resume-page',
      key: 'resume'
    },
    {
      name: 'Contact',
      href: '/contact',
      label: 'contact-page',
      key: 'contact'
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


  return (
    <div className="page">
    <Router>
      <nav>
        <div className="header-container">
          <div className="header-content">
            <label htmlFor="home-page">
              Nathan
            </label>
            <label onClick={() => {setMenu()}} htmlFor="header-menu"><i className="fas fa-hamburger menu-icon"></i></label>
          </div>
        </div>
        <input type="checkbox" checked={currentMenu} id="header-menu" />
        <div className="dropdown-container">
          <div className="dropdown">
              {links.map((link) => (
                <label htmlFor={link.label} className='header-link'>{link.name}</label>
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
            <Route exact path="/home" component={Home} />
            </div>
          )}
          {Auth.getPageType() === 'about' && (
            <div className="about-page">
            <Route exact path="/about" component={About} />
            </div>
          )}
          {Auth.getPageType() === 'portfolio' && (
            <div className="portfolio-page">
            <Route exact path="/portfolio" component={Portfolio} />
            </div>          
          )}
          {Auth.getPageType() === 'resume' && (
            <div className="resume-page">
            <Route exact path="/resume" component={Resume} />
            </div>     
          )}
          {Auth.getPageType() === 'contact' && (
            <div className="contact-page">
            <Route exact path="/contact" component={Contact} />
            </div>          
          )}
        </div>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
