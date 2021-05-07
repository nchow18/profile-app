import React, { useState } from 'react';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';
import Resume from './components/Resume';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {

  const [links] = useState([
    {
      name: 'About Me',
      href: '#about-me'
    },
    {
      name: 'Portfolio',
      href: '#portfolio'
    },
    {
      name: 'Resume',
      href: '#resume'
    },
    {
      name: 'Contact',
      href: '#contact-form'
    }

  ])

  const [currentLink, setCurrentLink] = useState(links[0]);

  console.log(links[0].name)
  console.log(currentLink.name);

  return (
    <div className="content">
      <header>
        <Nav 
          links={links}
          currentLink={currentLink}
          setCurrentLink={setCurrentLink}
          >
        </Nav>
      </header>
      <main className="page">
        <div className="page-width">
          {currentLink.name === links[0].name && (
            <About />
          )}
          {currentLink.name === links[1].name && (
            <Portfolio />
          )}
          {currentLink.name === links[2].name && (
            <Resume />
          )}
          {currentLink.name === links[3].name && (
            <ContactForm />
          )}
        </div>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
