import './Services.css'
import HeartEmoji from "../../Images/heartemoji.png"
import Glasses from "../../Images/glasses.png"
import Humble  from "../../Images/humble.png"
import Card from '../Card/Card'
import Resume from './Resume.pdf'

const Services = () => {
  return (
    <div className="services">
        {/* left side */}
        <div className="s-details">
        <span>My</span>
        <span>Services</span>
        <span>I am Saurab Negi, currently pursuing a Master of Computer Applications. My passion lies<br></br> in web development, where I've honed skills in both frontend and backend technologies.<br></br> Proficient in HTML, CSS, JavaScript, Bootstrap, React for frontend, and Node.js,<br></br> Express.js, EJS, REST APIs, and MongoDB for backend. I've successfully<br></br> crafted numerous projects showcasing my expertise in these areas.<br></br> Looking forward to contributing my knowledge and creativity to<br></br> meaningful endeavors in the field of web development.
        </span>
        <a href={Resume} download><button className="button s-button">Resume</button></a>
        <div className="blur s-blur1" style={{background: "#ABF1FF94"}}></div>
        </div>
        
        {/* right side */}
        <div className="cards">
            <div className='card-1'>
              <Card
              emoji={HeartEmoji}
              heading={'Design'}
              detail={"Figma, sketch, photoshop, Adobe"}
              />
            </div>
            <div className='card-2'>
              <Card
              emoji={Glasses}
              heading={'Developer'}
              detail={"Html, Css, JavaScript, React"}
              />
            </div>
            <div className='card-3'>
              <Card
              emoji={Humble}
              heading={'UI/UX'}
              detail={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
              />
            </div>
            <div className="blur s-blur2" style={{background: "var(--purple)"}}></div>
        </div>
    </div>
  )
}

export default Services
