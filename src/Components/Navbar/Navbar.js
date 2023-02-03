import React from 'react'
import './Navbar.css'
import { Link } from "react-router-dom";


export default function Navbar() {
    return (
        <ul className='navbar-container'>
            <li className='list-navbar'><Link to="/">Accueil</Link></li>
            <li className='list-navbar'><Link to="/ecrire">Écrire</Link></li>
        </ul>
    )
}
