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
        <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores aperiam omnis fugiat,<br></br>
            cum nostrum ea, quas saepe eligendi expedita placeat delectus exercitationem rem!
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
