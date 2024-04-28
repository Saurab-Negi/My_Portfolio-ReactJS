import './Project.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import Slidebar from '../../Images/sidebar.png'
import Ecommerce from '../../Images/ecommerce.png'
import Hoc from '../../Images/hoc.png'
import MusicApp from '../../Images/musicapp.png'
import { useContext } from "react";
import { themeContext } from "../../Context";

function Project() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className='portfolio' id='Project'>
        {/* heading */}
        <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
        <span>Portfolio</span>

        {/* slider */}
        <Swiper spaceBetween={30} slidesPerView={3} grabCursor={true} className='portfolio-slider' >
            <SwiperSlide><a href="https://saurab-negi.github.io/VerveGen-Assignment/"><img src={Slidebar} alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://saurab-negi.github.io/BeatBox/"><img src={Hoc} alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://saurab-negi.github.io/OCTANET-MARCH/"><img src={Ecommerce} alt="" /></a></SwiperSlide>
            <SwiperSlide><img src={MusicApp} alt="" /></SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Project