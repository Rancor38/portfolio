import React from 'react';
import { Link } from 'react-router-dom';
import DownloadPDF from './DownloadPDF';

const Nav = (props) => {
    return (
        <ul className="navBar">
            <Link to='/'>
            <li onClick={props.handler}>About Me</li>
            </Link>
            <Link to='/skills'>
            <li onClick={props.handler}>Skills</li>
            </Link>
            <Link to='/projects'>
            <li onClick={props.handler}>Projects</li>
            </Link>
            <DownloadPDF />
            <Link to='/contact'>
            <li onClick={props.handler}>Contact Me</li>
            </Link>
        </ul>
    );
};

export default Nav;