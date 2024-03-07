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

const Intro = () => {
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span>Hi! I Am</span>
                <span>Saurab Negi</span>
                <span>
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
            <img src={GlassesImoji} />
            <div className='floating-crown'>
            <Floating image={Crown} txt1='Web' txt2='Developer'/>
            </div>
            <div className='floating-thumb'>
            <Floating image={Thumbup} txt1='Best Design' txt2='Awesome'/>
            </div>
            {/* Blur divs */}
            <div className="blur" style={{background: "rgb(238 210 255)"}}></div>
            <div className="blur" style={{background: "#C1F5FF",top: "17rem", width: "21rem",height: "11rem",left: "-9rem",}}></div>
        </div>
    </div>
  )
}

export default Intro
