// Importation de la bibliothèque React
import React from 'react';
// Importation de la bibliothèque ReactDOM
import ReactDOM from 'react-dom/client';
// Importation du fichier CSS global
import './index.css';
// Importation du composant principal App
import App from './App';
// Importation du composant BrowserRouter de la bibliothèque react-router-dom
import { BrowserRouter } from 'react-router-dom';
// Importation de la store pour la gestion de l'état global
import store from "./app/store"
// Importation de la bibliothèque react-redux pour connecter la store à l'application React
import { Provider } from "react-redux";

// Création d'un noeud React racine dans le DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
// Rendu de l'application React dans le noeud racine
root.render(
  // Enveloppement de l'application dans un Provider pour connecter la store à l'application
  <Provider store={store}>
    {/* Enveloppement de l'application dans un BrowserRouter pour activer le routing */}
    <BrowserRouter>
      {/* Rendu du composant principal */}
      <App />
    </BrowserRouter>
  </Provider>
);


