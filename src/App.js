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

  const [link, setLink] = useState(links[0])
 
  return (
    <Router>
      <div className="page">
      <Header
        link={link}
        setLink={setLink}
        links={links} />
      <Switch >
        <div className="content">
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/portfolio" component={Portfolio}/>
          <Route exact path="/contact" component={Contact}/>
        </div>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
