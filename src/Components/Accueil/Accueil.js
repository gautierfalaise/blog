import React from 'react'
import "./Accueil.css"
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom";

// Importe les bibliothèques React et React-Router-Dom
// Importe le hook useSelector de react-redux
// Importe le feuille de style pour ce composant

export default function Accueil() {
    // Exporte le composant Accueil comme export par défaut de ce fichier

    const articlesData = useSelector((state) => state.articles.articles);
    // Récupère les données d'articles du magasin Redux en utilisant le hook useSelector
    // L'argument state est l'état global du magasin et nous accédons aux données d'articles à partir de la propriété 'articles' de l'objet d'état

    return (
        <div className='article-container'>
            {/* Le conteneur pour tous les articles */}

            {
                articlesData && articlesData.map(article => {
                    // Vérifie si articlesData existe et le parcours ensuite

                    return (
                        <div key={article.id} className="article-content">
                            {/* Une clé unique est ajoutée à chaque article pour garantir que React puisse rendre la liste d'articles efficacement */}

                            <h2><Link className="article-title" to={`/article/${article.id}`}>
                                {/* Le titre de l'article est enveloppé à l'intérieur d'un composant Link fourni par la bibliothèque React-Router-Dom */}
                                {/* La destination du lien est définie sur "/article/{article.id}" où article.id est l'ID de l'article actuel en train d'être rendu */}

                                {article.title}
                                {/* Le titre de l'article */}

                            </Link></h2>
                            <p className='article-description'>{article.body}</p>
                            {/* Le corps de l'article avec une classe de nom 'article-description' pour le style */}

                        </div>
                    )
                })
            }
        </div>
    )
}