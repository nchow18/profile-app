import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import './css/Header.css';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Header from './components/Nav/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Auth from './utils/Auth';
import './css/Pages.css';

function App() {

  const [links] = useState([
    {
      name: 'Home',
      href: '/',
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
    // {
    //   name: 'Resume',
    //   href: '/resume',
    //   label: 'resume-page',
    //   key: 'resume',
    //   emoji: 'fas fa-newspaper',
    //   emojiClass: 'resume-emoji',
    //   linkClass: 'resume-link',
    // },
    // {
    //   name: 'Contact',
    //   href: '/contact',
    //   label: 'contact-page',
    //   key: 'contact',
    //   emoji: 'fas fa-id-card',
    //   emojiClass: 'contact-emoji',
    //   linkClass: 'contact-link',
    // }
  ])

  const [link, setLink] = useState(links[0])
  const [isContactModal, setContactModal] = useState(false);
 
  return (
    <Router>
      <div className="page">
      <Header
        link={link}
        setLink={setLink}
        links={links} />
      <div className="contact-link">
        <span onClick={() => {setContactModal(true)}}>Contact</span> 
      </div>
      {isContactModal === true && (
        <Contact setContactModal={setContactModal} />
      )}
      <div className="social-links">
        <i class="fab fa-github" onClick={() => {window.open('https://github.com/nchow18')}}></i>
        <i class="fab fa-instagram" onClick={() => {window.open('https://www.instagram.com/_nathan_chow/')}}></i>
        <i class="fab fa-linkedin-in" onClick={() => {window.open('https://www.linkedin.com/in/nathan-chow-1999701b9/')}}></i>
        <i class="far fa-dot-circle"></i>
      </div>
      <div className="email-links">
        <span>emailme@nathanchow.ca</span>
        <i class="far fa-dot-circle"></i>
      </div>
      <Switch >
        <div className="content">
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/portfolio" component={Portfolio}/>
        </div>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
