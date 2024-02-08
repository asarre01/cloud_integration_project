// Import des composants depuis les fichiers correspondants
import Contact from "./components/Contact";
import Content from "./components/Content";
import Hero from "./components/Hero";

// Composant principal App qui rend les autres composants
function App() {
    return (
        // Conteneur principal englobant les composants Hero, Content, et Contact
        <div>
            {/* Composant Hero pour la section d'en-tête */}
            <Hero/>
            {/* Composant Content pour la section de contenu */}
            <Content/>
            {/* Composant Contact pour la section de contact */}
            <Contact/>
        </div>
    );
}

// Export du composant App
export default App;
