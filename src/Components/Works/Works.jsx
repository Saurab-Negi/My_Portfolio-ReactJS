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

function Works() {
  return (
    <div className="works">
      {/* left side */}
      <div className="s-details">
        <span>Technologies used in</span>
        <span>Projects</span>
        <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores aperiam omnis fugiat,<br></br>
            cum nostrum ea, quas saepe eligendi expedita placeat delectus exercitationem rem!
        </span>
        <div className="blur s-blur1" style={{background: "#ABF1FF94"}}></div>
        </div>

        {/* Right side */}
        <div className="w-right">
          <div className="w-mainCircle">
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
          </div>
          {/* background circles */}
          <div className="w-backCircle blueCircle"></div>
          <div className="w-backCircle yellowCircle"></div>
        </div>
    </div>
  )
}

export default Works
