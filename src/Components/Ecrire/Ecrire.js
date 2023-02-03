import React from 'react'
import "./Ecrire.css"
import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { addArticle } from "../../feature/articlesSlice";

export default function Ecrire() {
    const inputText = useRef();
    const inputTitle = useRef();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault()

        const data = {
            id: Date.now(),
            title: inputTitle.current.value,
            body: inputText.current.value
        };

        dispatch(addArticle(data));

        inputText.current.value = '';
        inputTitle.current.value = '';

    }


    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor="title">Titre de l'article :</label>
            <input type="text" id="title" name="title" ref={inputTitle} />

            <label htmlFor="content">Contenu de l'article :</label>
            <textarea id="content" name="content" ref={inputText} ></textarea>

            <button type="submit">Créer</button>
        </form>
    )
}

