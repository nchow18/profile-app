import React from 'react';

function Nav(props) {

  const {
    links = [],
    setCurrentLink,
    currentLink
  } = props

  return (
      <nav>
        {links.map((link) => (
          <li
            className="list-link">
            <a href={link.href} className={`link ${currentLink.name === link.name && `navActive`}`} key={link.name} onClick={() => {
              setCurrentLink(link);
            }}>{link.name}</a>
          </li>
        ))}
      </nav>
  );
}

export default Nav;