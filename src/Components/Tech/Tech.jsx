import './Tech.css'
import JS from "../../Images/js.png"
import CSS from "../../Images/css.png"
import HTML from "../../Images/html.png"
import React from "../../Images/react.png"
import Bootstrap from "../../Images/bootstrap.png"
import Node from "../../Images/node.png"
import Express from "../../Images/express.png"
import REST from "../../Images/rest.png"
import Mongo from "../../Images/mongo.png"
import { useContext } from "react";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";

function Tech() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="works" id="Tech">
      {/* left side */}
      <div className="w-left">
      <div className="s-details">
        <span style={{ color: darkMode ? "white" : "" }}>Technologies used in</span>
        <span>Projects</span>
        <div className="blur s-blur1" style={{background: "#ABF1FF94"}}></div>
        </div>
      </div>

        {/* Right side */}
        <div className="w-right">
          <motion.div className="w-mainCircle"
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}>
            <div className="w-secCircle">
              <img className='js' src={JS} alt="" />
            </div>
            <div className="w-secCircle">
              <img className='css' src={CSS} alt="" />
            </div>
            <div className="w-secCircle">
              <img className='react' src={React} alt="" />
            </div>
            <div className="w-secCircle">
              <img className='bootstrap' src={Bootstrap} alt="" />
            </div>
            <div className="w-secCircle">
              <img className='html' src={HTML} alt="" />
            </div>
            <span className='w-tech' style={{left: 60}}>Frontend</span>
            </motion.div>
          {/* background circles */}
          <div className="w-backCircle blueCircle1"></div>
          <div className="w-backCircle yellowCircle1"></div>

          <motion.div className="w-mainCircle"
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}>
            <div className="w-secCircle">
              <img className='express' src={Express} alt="" />
            </div>
            <div className="w-secCircle">
              <img className='rest' src={REST} alt="" />
            </div>
            <div className="w-secCircle">
              <img className='node' src={Node} alt="" />
            </div>
            <div className="w-secCircle">
              <img className='bootstrap' src={Bootstrap} alt="" />
            </div>
            <div className="w-secCircle">
              <img className='mongo' src={Mongo} alt="" />
            </div>
            <span className='w-tech' style={{left: 75}}>Backend</span>
            </motion.div>
          <div className="w-backCircle blueCircle2"></div>
          <div className="w-backCircle yellowCircle2"></div>
        </div>
    </div>
  )
}

export default Tech
