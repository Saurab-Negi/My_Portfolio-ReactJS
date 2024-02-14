import './Services.css'
import HeartEmoji from "../../Images/heartemoji.png"
import Glasses from "../../Images/glasses.png"
import Humble  from "../../Images/humble.png"

const Services = () => {
  return (
    <div className="services">
        {/* left side */}
        <div className="s-details"></div>
        <span>My</span>
        <span>Services</span>
        <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores aperiam omnis fugiat,<br></br>
            cum nostrum ea, quas saepe eligendi expedita placeat delectus exercitationem rem!
        </span>
        <button className="button s-button">Resume</button>
        <div className="blur s-blur"></div>
        {/* right side */}
        <div className="cards">
            Right side
        </div>
    </div>
  )
}

export default Services
