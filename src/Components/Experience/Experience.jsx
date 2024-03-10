import './Experience.css'
import React, { useContext } from "react";
import { themeContext } from "../../Context";

const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className='experience' id='Experience'>
        <div className="achievement">
            <div className="circle" style={{color: darkMode?'var(--orange)':''}}>1+</div>
        <span>year</span>
        <span style={{color: darkMode?'white':''}}>Experience</span>
        </div>
        <div className="achievement">
            <div className="circle" style={{color: darkMode?'var(--orange)':''}}>7+</div>
        <span>Completed</span>
        <span style={{color: darkMode?'white':''}}>Projects</span>
        </div>
        <div className="achievement">
            <div className="circle" style={{color: darkMode?'var(--orange)':''}}>1</div>
        <span>Internship</span>
        <span style={{color: darkMode?'white':''}}>Experience</span>
        </div>
    </div>
  )
}

export default Experience
