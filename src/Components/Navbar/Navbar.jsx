import './Navbar.css'

function Navbar() {
  return (
    <div className="n-wrapper">
        <div className="n-left">
            <div className="n-name">Saurab Negi</div>
            <span>Toggle</span>
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul id="Dot">
                    <li>Home</li>
                    <li>Services</li>
                    <li>Project</li>
                    <li>Portfolio</li>
                    <li>Testimonials</li>
                </ul>
            </div>
            <button className="button n-button">
                Contact us
            </button>
        </div>
    </div>
  )
}

export default Navbar
