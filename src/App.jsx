import "./assets/css/App.css";
import "./assets/css/Globals.css";
import Home from "./components/Home";
import About from "./components/About";
import Portifolio from "./components/Portifolio";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="app">
      <main>
        <Home></Home>
        <About></About>
        <Portifolio></Portifolio>
        <Skills></Skills>
        <Contact></Contact>
      </main>
    </div>
  );
}

export default App;
