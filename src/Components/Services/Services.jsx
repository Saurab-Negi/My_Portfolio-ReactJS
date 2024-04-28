import './Services.css'
import HeartEmoji from "../../Images/heartemoji.png"
import Glasses from "../../Images/glasses.png"
import Humble  from "../../Images/humble.png"
import Card from '../Card/Card'
import Resume from './Resume.pdf'
import {motion} from "framer-motion"
import { useContext } from "react";
import { themeContext } from "../../Context";

const Services = () => {
  const transition= {duration: 1,type: 'spring'}
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="services" id='Services'>  {/* id: Used for smooth scrolling */}
        {/* left side */}
        <div className="s-details">
        <span style={{ color: darkMode ? "white" : "" }}>My</span>
        <span>Services</span>
        <span style={{ color: darkMode ? "white" : "" }}>
        I've developed numerous web projects and gained experience in UI/UX design<br></br> with Figma. My portfolio includes a range of web development endeavors<br></br> alongside proficiency in crafting user-centric interfaces, showcasing<br></br> my skills in both domains.
        <h4>Frontend:</h4> 
        <ul>
          <li>Html</li>
          <li>Css</li>
          <li>JavaScript</li>
          <li>EJS</li>
          <li>React</li>
        </ul>
        <h4>Backend:</h4>
        <ul>
          <li>Express</li>
          <li>RestApi's</li>
          <li>Node</li>
        </ul>
        <h4>Database:</h4>
        <ul>
          <li>MySQL</li>
          <li>MongoDB</li>
        </ul>
        </span>
        <a href={Resume} download><button className="button s-button">Resume</button></a>
        <div className="blur s-blur1" style={{background: "#ABF1FF94"}}></div>
        </div>
        
        {/* right side */}
        <div className="cards">
            <motion.div
            initial={{ left: "25rem" }}
            whileInView={{ left: "14rem" }}
            transition={transition}>
              <Card
              emoji={HeartEmoji}
              heading={'Backend'}
              detail={" RestAPIs, Express, Node.js "}
              />
            </motion.div>
            <motion.div
            initial={{ left: "-11rem", top: "12rem" }}
            whileInView={{ left: "-4rem" }}
            transition={transition}>
              <Card
              emoji={Glasses}
              heading={'Frontend'}
              detail={" Html, CSS, JavaScript, Bootstrap, React "}
              />
            </motion.div>
            <motion.div
            initial={{ top: "19rem", left: "25rem" }}
            whileInView={{ left: "12rem" }}
            transition={transition}>
              <Card
              emoji={Humble}
              heading={'Database'}
              detail={" MySQL, MongoDB, Mongoose "}
              color="rgba(252, 166, 31, 0.45)"
              />
            </motion.div>
            <div className="blur s-blur2" style={{background: "var(--purple)"}}></div>
        </div>
    </div>
  )
}

export default Services
