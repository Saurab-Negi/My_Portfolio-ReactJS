import './Works.css'
import Upwork from "../../Images/js.png"
import Fiverr from "../../Images/react.png"
import Facebook from "../../Images/html.png"
import Amazon from "../../Images/amazon.png"
// import Upwork from "../../Images/Upwork.png"
// import Fiverr from "../../Images/fiverr.png"
// import Facebook from "../../Images/Facebook.png"
import Shopify from "../../Images/Shopify.png"
// import Amazon from "../../Images/amazon.png"
import React, { useContext } from "react";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";

function Works() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-right">
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
              <img src={Upwork} alt="" />
            </div>
            <div className="w-secCircle">
              <img src={Fiverr} alt="" />
            </div>
            <div className="w-secCircle">
              <img src={Amazon} alt="" />
            </div>
            <div className="w-secCircle">
              <img src={Shopify} alt="" />
            </div>
            <div className="w-secCircle">
              <img src={Facebook} alt="" />
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
