import './Intro.css'
import Github from '../../Images/github.png'
import LinkedIn from '../../Images/linkedin.png'
import LeetCode from '../../Images/leetcode.png'
import Vector1 from '../../Images/Vector1.png'
import Vector2 from '../../Images/Vector2.png'
//import Boy from '../../Images/boy.png'
import Boy from '../../Images/saurab.jpg'
import Thumbup from '../../Images/thumbup.png'
import Crown from '../../Images/crown.png'
import GlassesImoji from '../../Images/glassesimoji.png'
import Floating from '../Floating/Floating'
import {motion} from "framer-motion"
import { useContext } from "react";
import { themeContext } from "../../Context";

const Intro = () => {
    const transition= {duration: 2,type: 'spring'} //spring is a type of animation
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

  return (
    <div className="intro">
        {/* left side */}
        <div className="i-left">
            <div className="i-name">
                <span style={{ color: darkMode ? "white" : "" }}>Hi! I Am</span>
                <span>Saurab Negi</span>
                <span style={{ color: darkMode ? "white" : "" }}>
                    A student of Master of Computer Applications. My passion lies in web development,<br></br> where I've honed skills in both frontend and backend technologies. Proficient in<br></br> HTML, CSS, JavaScript, Bootstrap, React for frontend. Node.js, Express.js, EJS<br></br> and REST APIs for backend, MySql and MongoDB for the database. I've<br></br> successfully crafted numerous projects showcasing my expertise in these<br></br> areas. Looking forward to contributing my knowledge and creativity to<br></br> meaningful endeavors in the field of web development.
                </span>
            </div>
            <div className="i-icons">
                <a href='https://github.com/Saurab-Negi'><img src={Github} /></a>
                <a href='https://www.linkedin.com/in/saurab-negi-b06442285/'><img src={LinkedIn} /></a>
                <a href='https://leetcode.com/SAURAB_NEGI/'><img src={LeetCode} /></a> 
            </div>
        </div>
        <div className="i-right">
            <img src={Vector1} />
            <img src={Vector2} />
            <img src={Boy} />

            <motion.img 
            initial={{ left: "-36%" }}
            whileInView={{ left: "-24%" }}
            transition={transition}
            src={GlassesImoji} />

            <motion.div
            initial={{ top: "-4%", left: "74%" }}
            whileInView={{ left: "68%" }}
            transition={transition}
            className='floating-div'>
            <Floating image={Crown} txt1='Web' txt2='Developer'/>
            </motion.div>

            <motion.div
            initial={{ left: "9rem", top: "24.5rem" }}
            whileInView={{ left: "1rem" }}
            transition={transition}
            className='floating-div'>
            <Floating image={Thumbup} txt1='UI/UX' txt2='Designer'/>
            </motion.div>

            {/* Blur divs */}
            <div className="blur" style={{background: "rgb(238 210 255)"}}></div>
            <div className="blur" style={{background: "#C1F5FF",top: "17rem", width: "21rem",height: "11rem",left: "-9rem",}}></div>
        </div>
    </div>
  )
}

export default Intro
