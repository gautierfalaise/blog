// Importation de la fonction `configureStore` depuis la bibliothèque "@reduxjs/toolkit"
import { configureStore } from "@reduxjs/toolkit";

// Importation du réducteur `articlesReducer` depuis le fichier "../feature/articlesSlice"
import articlesReducer from "../feature/articlesSlice";

// Exportation du magasin configuré, créé à l'aide de la fonction `configureStore`
// Le magasin a un seul réducteur nommé "articles" qui est défini comme `articlesReducer`
export default configureStore({
    reducer: {
        articles: articlesReducer,
    },
});