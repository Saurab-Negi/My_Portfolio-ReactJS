import './Footer.css'
import wave from '../../Images/wave.png'
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin'
import Github from '@iconscout/react-unicons/icons/uil-github'
import Insta from '@iconscout/react-unicons/icons/uil-instagram'

function Footer() {
  return (
    <div className='footer'>
      <img src={wave} alt="" style={{width: '100%'}} />
      <div className="f-content">
        <span>saurabnegi17@gmail.com</span>
            <div className="f-icons">
                <a href="https://www.linkedin.com/in/saurab-negi-b06442285/"><Linkedin className='f-icon' color='white' size='3rem' /></a>
                <a href="https://github.com/Saurab-Negi"><Github className='f-icon' color='white' size='3rem' /></a>
                <a href="https://www.instagram.com/saurab_negi17/"><Insta className='f-icon' color='white' size='3rem' /></a>
            </div>
      </div>
    </div>
  )
}

export default Footer
