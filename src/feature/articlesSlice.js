import { createSlice } from "@reduxjs/toolkit";

// Ce code crée un "tranche" pour gérer les tâches dans le magasin Redux.
export const articlesSlice = createSlice({

    name: "articles", // Nommez la tranche "tâches".

    // Initialisez l'état de la tranche avec un tableau vide de tâches.
    initialState: {
        articles: [],
    },

    // Définissez les réducteurs qui définissent comment l'état de la tranche est mis à jour en réponse aux actions déclenchées.
    reducers: {
        getArticlesData: (state, { payload }) => {
            // Ici on met a jour state.pictures avec les données contenus dans le payload
            // lors de l'appel de la fonction setPicturesData
            state.articles = payload;
        },

        // addTask ajoutera une nouvelle tâche au tableau de tâches dans l'état de la tranche.
        addArticle: (state, { payload }) => {
            state.articles.push(payload);
        },
    },
});

// Exportez les actions déclenchées par les réducteurs.
export const { getArticlesData, addArticle } = articlesSlice.actions;

// Exportez le réducteur créé par la tranche.
export default articlesSlice.reducer;



