import React from 'react'
import "./Accueil.css"
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getArticlesData } from "../../feature/articlesSlice";
import { Link } from "react-router-dom";

export default function Accueil() {
    const dispatch = useDispatch();
    const articlesData = useSelector((state) => state.articles.articles);
    console.log(articlesData)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                return response.json()
            })
            .then(data => {
                dispatch(getArticlesData(data));
            })
    }, [dispatch]);

    return (
        <div className='article-container'>
            {
                articlesData && articlesData.map(article => {
                    return (
                        <div key={article.id} className="article-content">
                            <h2><Link className="article-title" to={`/article/${article.id}`}>
                                {article.title}
                            </Link></h2>
                            <p className='article-description'>{article.body}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

/* 
{
    // Pour chaque tâche, on vérifie si elle n'est pas déjà réalisée.
    // Si elle n'est pas réalisée, on la rend visible dans notre composant.
    tasksData.map((task, index) => {
        return (
            <li key={task.id} className="list">
                <button onClick={(e) => isCheckedFunc(task.id)} className="delete-button">Suppr.</button>
                {task.text}
            </li>
        )
    })
} */