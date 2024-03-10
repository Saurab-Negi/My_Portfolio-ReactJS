import './Portfolio.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import Slidebar from '../../Images/sidebar.png'
import Ecommerce from '../../Images/ecommerce.png'
import Hoc from '../../Images/hoc.png'
import MusicApp from '../../Images/musicapp.png'
import React, { useContext } from "react";
import { themeContext } from "../../Context";

function Portfolio() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className='portfolio' id='Portfolio'>
        {/* heading */}
        <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
        <span>Portfolio</span>

        {/* slider */}
        <Swiper spaceBetween={30} slidesPerView={3} grabCursor={true} className='portfolio-slider' >
            <SwiperSlide><img src={Slidebar} alt="" /></SwiperSlide>
            <SwiperSlide><img src={Ecommerce} alt="" /></SwiperSlide>
            <SwiperSlide><img src={Hoc} alt="" /></SwiperSlide>
            <SwiperSlide><img src={MusicApp} alt="" /></SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Portfolio
