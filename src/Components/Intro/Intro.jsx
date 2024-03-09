import './Intro.css'
import Github from '../../Images/github.png'
import LinkedIn from '../../Images/linkedin.png'
import LeetCode from '../../Images/leetcode.png'
import Vector1 from '../../Images/Vector1.png'
import Vector2 from '../../Images/Vector2.png'
import Boy from '../../Images/boy.png'
import Thumbup from '../../Images/thumbup.png'
import Crown from '../../Images/crown.png'
import GlassesImoji from '../../Images/glassesimoji.png'
import Floating from '../Floating/Floating'
import {motion} from "framer-motion"
import React, { useContext } from "react";
import { themeContext } from "../../Context";

const Intro = () => {
    const transition= {duration: 2,type: 'spring'} //spring is a type of animation
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span style={{ color: darkMode ? "white" : "" }}>Hi! I Am</span>
                <span>Saurab Negi</span>
                <span style={{ color: darkMode ? "white" : "" }}>
                    A student of Master of Computer Applications. My passion lies in web development,<br></br> where I've honed skills in both frontend and backend technologies. Proficient in<br></br> HTML, CSS, JavaScript, Bootstrap, React for frontend, and Node.js, Express.js,<br></br> EJS, REST APIs, and MongoDB for backend. I've successfully crafted numerous<br></br> projects showcasing my expertise in these areas. Looking forward to<br></br> contributing my knowledge and creativity to meaningful endeavors<br></br> in the field of web development.
                </span>
            </div>
            <button className="button i-btn">Hire me</button>
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
            initial={{left: '-25%'}}
            animate={{left: '-17%'}}
            transition={transition}
            src={GlassesImoji} />

            <motion.div
            initial={{top: '1%', left: '66%'}}
            whileInView={{left: '60%'}}
            transition={transition}
            style={{top: '1%', left: '60%'}}>
            <Floating image={Crown} txt1='Web' txt2='Developer'/>
            </motion.div>

            <motion.div
            initial={{top: '24.5rem', left: '5rem'}}
            whileInView={{left: '1rem'}}
            transition={transition}
            style={{top: '24.5rem', left: '1rem'}}>
            <Floating image={Thumbup} txt1='Best Design' txt2='Awesome'/>
            </motion.div>

            {/* Blur divs */}
            <div className="blur" style={{background: "rgb(238 210 255)"}}></div>
            <div className="blur" style={{background: "#C1F5FF",top: "17rem", width: "21rem",height: "11rem",left: "-9rem",}}></div>
        </div>
    </div>
  )
}

export default Intro
