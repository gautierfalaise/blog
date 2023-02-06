// Importation du composant Navbar
import Navbar from "./Components/Navbar/Navbar"
// Importation du composant Accueil
import Accueil from "./Components/Accueil/Accueil"
// Importation du composant Ecrire
import Ecrire from "./Components/Ecrire/Ecrire";
// Importation du composant Article
import Article from "./Components/Article/Article"
// Importation de la fonction useEffect de la bibliothèque React
import { useEffect } from 'react'
// Importation du fichier CSS
import './App.css';
// Importation des composants Route et Routes de la bibliothèque react-router-dom
import { Routes, Route } from 'react-router-dom'
// Importation de la fonction useDispatch de la bibliothèque react-redux
import { useDispatch } from 'react-redux'
// Importation de la fonction getArticlesData pour récupérer les articles depuis l'API
import { getArticlesData } from "./feature/articlesSlice";

// Définition du composant App
function App() {
  // Récupération du dispatch pour dispatcher des actions pour la gestion de l'état global
  const dispatch = useDispatch();

  // Effet de montage pour récupérer les articles depuis l'API
  useEffect(() => {
    // Requête à l'API pour récupérer les articles
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        // Transformation de la réponse en JSON
        return response.json()
      })
      .then(data => {
        // Dispatch de l'action pour stocker les articles récupérés
        dispatch(getArticlesData(data));
      })
  }, [dispatch]);

  // Rendu du composant
  return (
    <div className="App">
      {/* Rendu du composant Navbar */}
      <Navbar />
      {/* Rendu du composant Routes pour gérer les différentes routes */}
      <Routes>
        {/* Route par défaut vers le composant Accueil */}
        <Route path="/" element={<Accueil />} />
        {/* Route vers le composant Article avec un paramètre d'identifiant d'article */}
        <Route path="/article/:id" element={<Article />} />
        {/* Route vers le composant Ecrire */}
        <Route path="/ecrire" element={<Ecrire />} />
        {/* Route par défaut vers le composant Accueil en cas de route non trouvée */}
        <Route path="*" element={<Accueil />} />
      </Routes>
    </div>
  );
}

// Export du composant pour être utilisé ailleurs dans l'application
export default App;

