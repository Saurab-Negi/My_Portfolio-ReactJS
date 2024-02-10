import React from 'react'
import './Intro.css'
import Github from '../../Images/github.png'
import LinkedIn from '../../Images/linkedin.png'
import LeetCode from '../../Images/leetcode.png'
import Vector1 from '../../Images/Vector1.png'
import Vector2 from '../../Images/Vector2.png'
import boy from '../../Images/boy.png'
import thumbup from '../../Images/thumbup.png'
import Crown from '../../Images/crown.png'
import GlassesImoji from '../../Images/glassesimoji.png'
import Floating from '../Floating/Floating'

const Intro = () => {
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span>Hi! I Am</span>
                <span>Saurab Negi</span>
                <span>Frontend Developer with high level
                    of experience in web designing and 
                    development, producing the Quality work
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
            <img src={boy} />
            <div className='floating'>
            <Floating image={Crown} txt1='Web' txt2='Developer'/>
            </div>
        </div>
    </div>
  )
}

export default Intro
