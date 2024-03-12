import './Works.css'
import JS from "../../Images/js.png"
import CSS from "../../Images/css.png"
import HTML from "../../Images/html.png"
import React from "../../Images/react.png"
import Bootstrap from "../../Images/bootstrap.png"
import { useContext } from "react";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";

function Works() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="works" id="Works">
      {/* left side */}
      <div className="w-left">
      <div className="s-details">
        <span style={{ color: darkMode ? "white" : "" }}>Technologies used in</span>
        <span>Projects</span>
        <span style={{ color: darkMode ? "white" : "" }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores aperiam omnis fugiat,<br></br>
            cum nostrum ea, quas saepe eligendi expedita placeat delectus exercitationem rem!
        </span>
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
            </motion.div>
          {/* background circles */}
          <div className="w-backCircle blueCircle"></div>
          <div className="w-backCircle yellowCircle"></div>
        </div>
    </div>
  )
}

export default Works
