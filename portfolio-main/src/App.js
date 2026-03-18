import NavBar from "./components/Navbar";
import "./App.css";
import Banner from "./components/Banner";
import About from "./components/About";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import { Contact } from "./components/Contact";
import Skills from "./components/Skills";
import Journey from "./components/Journey";

function App() {
  return (
    <div>
      <NavBar />
      <Banner />
      <About />
      <Skills />
      <Journey />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
