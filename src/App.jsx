import './App.css'
import Navbar from "./Components/Navbar/Navbar"
import Intro from "./Components/Intro/Intro";
import Services from "./Components/Services/Services";
import Experience from "./Components/Experience/Experience";
import Tech from './Components/Tech/Tech';
import Project from './Components/Project/Project';
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import { themeContext } from './Context';
import { useContext } from 'react';

function App(){
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "#212121" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar />
      <Intro />
      <Services />
      <Experience />
      <Project />
      <Tech />
      <Contact />
      <Footer />
    </div>
  );
}

export default App