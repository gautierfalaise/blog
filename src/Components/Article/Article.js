import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';

// Importe les bibliothèques React et React-Router-Dom
// Importe le hook useParams et useSelector de react-redux

export default function Article() {
    // Exporte le composant Article comme export par défaut de ce fichier

    const params = useParams()
    // Récupère les paramètres de l'URL en utilisant le hook useParams de React-Router-Dom

    const articlesData = useSelector((state) => state.articles.articles);
    // Récupère les données d'articles du magasin Redux en utilisant le hook useSelector
    // L'argument state est l'état global du magasin et nous accédons aux données d'articles à partir de la propriété 'articles' de l'objet d'état

    return (
        <>
            {
                articlesData && articlesData.map(article => {
                    // Vérifie si articlesData existe et le parcours ensuite

                    if (params.id == article.id) {
                        // Vérifie si l'ID de l'article actuel est égal au paramètre d'ID dans l'URL

                        return (
                            <div key={article.id} className="OneArticle-Container">
                                {/* Une clé unique est ajoutée à chaque article pour garantir que React puisse rendre la liste d'articles efficacement */}

                                <h2>
                                    {article.title}
                                    {/* Le titre de l'article */}

                                </h2>
                                <p className='OneArticle-description'>{article.body}</p>
                                {/* Le corps de l'article avec une classe de nom 'OneArticle-description' pour le style */}

                            </div>
                        )
                    }
                })
            }
        </>
    )
}
