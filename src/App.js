import React, { useState } from 'react';

import About from './components/About';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';
import Resume from './components/Resume';
import Nav from './components/Nav';

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
      href: '#contact'
    }

  ])

  const [currentLink, setCurrentLink] = useState(links[0]);

  return (
    <div>
      <Nav 
        links={links}
        currentLink={currentLink}
        setCurrentLink={setCurrentLink}
        >
      </Nav>
      <main className="page">
        <div className="page-width">
          <About></About>
          <Portfolio></Portfolio>
          <Resume></Resume>
          <ContactForm></ContactForm>
        </div>
      </main>
    </div>
  );
}

export default App;
