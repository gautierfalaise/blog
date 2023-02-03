import Navbar from "./Components/Navbar/Navbar"
import Accueil from "./Components/Accueil/Accueil"
import Ecrire from "./Components/Ecrire/Ecrire";
import Article from "./Components/Article/Article"
import './App.css';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/article/:id" element={<Article />} />
        <Route path="/ecrire" element={<Ecrire />} />
        <Route path="*" element={<Accueil />} />
      </Routes>
    </div>
  );
}

export default App;

