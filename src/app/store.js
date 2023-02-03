import { configureStore } from "@reduxjs/toolkit";
import articlesReducer from "../feature/articlesSlice";
// Ce fichier contient la configuration du store Redux.
// Il importe le reducer de tâches (tasksReducer) qui gérera l'état partagé des tâches.
export default configureStore({
    // Le store Redux est initialisé avec le reducer des tâches.
    reducer: {
        articles: articlesReducer,
    },
});
