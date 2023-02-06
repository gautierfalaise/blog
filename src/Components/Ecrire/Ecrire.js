import React from 'react'
import "./Ecrire.css"
import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { addArticle } from "../../feature/articlesSlice";

// Importation du composant React et du CSS associé.
// Import du hook `useRef` et du hook `useDispatch` de React Redux.
// Import de l'action `addArticle` du slice articles.

export default function Ecrire() {
    // Déclaration de 3 variables de référence : `inputText`, `inputTitle` et `dispatch`.
    const inputText = useRef();
    const inputTitle = useRef();
    const dispatch = useDispatch();

    // Déclaration de la fonction `handleSubmit` qui sera appelée lors de la soumission du formulaire.
    const handleSubmit = (e) => {
        // Empêche la soumission du formulaire par défaut.
        e.preventDefault()

        // Déclaration d'un objet `data` avec 3 propriétés : `id`, `title` et `body`.
        // `id` est égal à la valeur actuelle de `Date.now()` qui représente le nombre de millisecondes écoulées depuis le 1er janvier 1970.
        // `title` est égal à la valeur entrée dans le champ de saisie ayant pour référence `inputTitle`.
        // `body` est égal à la valeur entrée dans le champ de saisie ayant pour référence `inputText`.
        const data = {
            id: Date.now(),
            title: inputTitle.current.value,
            body: inputText.current.value
        };

        // Appelle l'action `addArticle` en passant l'objet `data` en paramètre.
        dispatch(addArticle(data));

        // Vide les valeurs des champs de saisie.
        inputText.current.value = '';
        inputTitle.current.value = '';
    }

    // Retourne le rendu visuel du formulaire.
    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            {/* Label associé au champ de saisie pour entrer le titre de l'article. */}
            <label htmlFor="title">Titre de l'article :</label>
            {/*  Champ de saisie pour entrer le titre de l'article. */}
            <input type="text" id="title" name="title" ref={inputTitle} />

            {/*  Label associé au champ de saisie pour entrer le contenu de l'article. */}
            <label htmlFor="content">Contenu de l'article :</label>
            {/* Champ de saisie pour entrer le contenu de l'article. */}
            <textarea id="content" name="content" ref={inputText} ></textarea>

            {/*  // Bouton de soumission du formulaire. */}
            <button type="submit">Créer</button>
        </form>
    )
}





