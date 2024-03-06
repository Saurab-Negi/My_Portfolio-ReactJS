import Navbar from "./Components/Navbar/Navbar"
import Intro from "./Components/Intro/Intro";
import Services from "./Components/Services/Services";
import Experience from "./Components/Experience/Experience";
import Works from "./Components/Works/Works";
import './App.css'
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";

function App(){
  return(
    <div className="App">
      <Navbar />
      <Intro />
      <Services />
      <Experience />
      <Works />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App
