import React from 'react'
import './Navbar.css'
import { Link } from "react-router-dom";

// La composante Navbar retourne un composant de type ul avec deux liens
// Les liens utilisent Link de react-router-dom pour naviguer entre les pages "Accueil" et "Écrire"

export default function Navbar() {
    return (
        <ul className='navbar-container'>
            <li className='list-navbar'><Link to="/">Accueil</Link></li>
            <li className='list-navbar'><Link to="/ecrire">Écrire</Link></li>
        </ul>
    )
}