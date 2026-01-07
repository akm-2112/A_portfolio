import SpaceBackground from "./components/SpaceBackground";
import Hero from "./components/Hero.jsx";
import Navigation from "./components/Navigation.jsx";
import Skills from "./components/Skills/Skills.jsx";
import Projects from "./components/Projects/Projects.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import {useEffect} from "react";
import {initLenis} from "./utils/lenis.js";
import Footer from "./components/Footer.jsx";

function App() {
    useEffect(() => {
        const lenis = initLenis();
        return () => {
            lenis.destroy();
        };
    }, []);
    return (
        <div className="relative min-h-screen text-white overflow-hidden">
            <SpaceBackground/>
            <main className="relative z-10">
                <Hero/>
                <About/>
                <Skills/>
                <Projects/>
                <Contact/>
                <Navigation/>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
