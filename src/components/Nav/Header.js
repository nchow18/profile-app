import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import '../../css/Header.css';
import Dropdown from './Dropdown';

function Header(props) {

  const {
    link,
    setLink,
    links=[]
  } = props

  const [modal, setModal] = useState(false)

  return (
    <div className="header-container">
      <div>
        <span onClick={() => {window.location.assign('/')}}>Nathan</span>
        <span>{link.name}</span>
        {modal ? (
          <i className="fas fa-times" onClick={() => {setModal(false)}}></i>
        ) : (
          <i className="fas fa-bars" onClick={() => {setModal(true)}}></i>
        )}
      </div>
      {modal === true && (
        <div className="header-link">
          {links.map((link) => (
              <Link to={link.href} className="link-style" onClick={() => {setLink(link); setModal(false)}}>{link.name}</Link>
          ))}
          <a className="link-style" onClick={() => {setModal(false)}} href={process.env.PUBLIC_URL + `/resume/Resume-2021.pdf`}>Resume</a>
        </div>
      )}

    </div>
  );
}

export default Header;