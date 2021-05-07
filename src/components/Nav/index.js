import React from 'react';

function Nav(props) {

  const {
    links = [],
    setCurrentLink,
    currentLink
  } = props

  return (
    <header>
      <nav>
        {links.map((link) => (
          <li
            className={`list-link ${currentLink.name === link.name && `navActive`}`} key={link.name}>
            <a href={link.href} className="link" onClick={() => {
              setCurrentLink(link);
            }}>{link.name}</a>
          </li>
        ))}
      </nav>
    </header>
  );
}

export default Nav;