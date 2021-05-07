import React from 'react';
import { Icon } from '@iconify/react';
import githubIcon from '@iconify-icons/logos/github-icon';
import linkedinIcon from '@iconify-icons/logos/linkedin-icon';

function Footer() {

    return (
        <div className="footer-container">
            <a className="footer-icon" href="https://github.com/nchow18"><Icon icon={githubIcon} width="50" height="50"/></a>
            <a className="footer-icon" href="https://www.linkedin.com/in/nathan-chow-1999701b9/"><Icon icon={linkedinIcon} width="50" height="50"/></a>
        </div>
    )
}

export default Footer;