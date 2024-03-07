import './Navbar.css'
import Toggle from '../Toggle/Toggle'

function Navbar() {
  return (
    <div className="n-wrapper">
        <div className="n-left">
            <div className="n-name">Saurab Negi</div>
            <Toggle />
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul id="Dot">
                    <li>Home</li>
                    <li>Services</li>
                    <li>Project</li>
                    <li>Portfolio</li>
                    <li>Experience</li>
                </ul>
            </div>
            <button className="button n-btn">Contact</button>
        </div>
    </div>
  )
}

export default Navbar
