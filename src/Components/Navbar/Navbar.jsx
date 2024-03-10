import './Navbar.css'
import Toggle from '../Toggle/Toggle'
import {Link} from 'react-scroll' //To link the sections of the page with the navbar

function Navbar() {
  return (
    <div className="n-wrapper">
        {/* left */}
        <div className="n-left">
            <div className="n-name">Saurab Negi</div>
            <Toggle />
        </div>

        {/* right */}
        <div className="n-right">
            <div className="n-list">
                <ul id="Dot">
                    <Link spy={true} to='Navbar' smooth={true} activeClass='activeClass'>
                    <li>Home</li></Link>
                    <Link spy={true} to='Services' smooth={true}>
                    <li>Services</li></Link>
                    <Link spy={true} to='Experience' smooth={true}>
                    <li>Experience</li></Link>
                    <Link spy={true} to='Works' smooth={true}>
                    <li>Project</li></Link>
                    <Link spy={true} to='Portfolio' smooth={true}>
                    <li>Portfolio</li></Link>
                </ul>
            </div>
            <Link spy={true} to='Contact' smooth={true}>
            <button className="button n-btn">Contact</button></Link>
        </div>
    </div>
  )
}

export default Navbar
