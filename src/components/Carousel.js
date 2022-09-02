import React from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";




import { Pagination, Navigation, Autoplay, EffectCards } from "swiper";

import img0 from '../assets/Nfts/1.png';
import img1 from '../assets/Nfts/2.png';
import img2 from '../assets/Nfts/3.png';
import img3 from '../assets/Nfts/4.png';
import img4 from '../assets/Nfts/5.png';
import img5 from '../assets/Nfts/6.png';
import img6 from '../assets/Nfts/7.png';
import img7 from '../assets/Nfts/8.png';
import img8 from '../assets/Nfts/9.png';
import img9 from '../assets/Nfts/10.png';
import img10 from '../assets/Nfts/11.png';


const Container = styled.div`
width: 25vw;
height: 70vh;

@media (max-width: 70em) {
  height: 60vh;
}
@media (max-width: 64em) {
  height: 50vh;
  width: 30vh;
}

.swiper{
    width:100%;
    height:100%;
}

.swiper-slide{
    background-color: ${props => props.theme.carouselColor};

    border-radius: 30px;

    display: flex;
    justify-content: center;
    align-items: center;


  img{
    display: block;
    width: 90%;
    height: auto;
    border-radius: 30px;
    object-fit: cover;
  }
}

`

const Carousel = () => {
  return (
    <Container>
        <Swiper
        autoplay={{
            delay:2000,
            disableOnInteraction:false,
        }}
        pagination={{
            type:'fraction',
        }}
        scrollbar={{
            draggable:true
        }}
        modules={[EffectCards, Pagination, Navigation, Autoplay]}
        navigation={true}
        effect={"cards"}
        grabCursor={true}
        className="mySwiper"
      >
        <SwiperSlide> <img src={img1} alt="The Duduze vVoxel" /> </SwiperSlide>
        <SwiperSlide> <img src={img0} alt="The Duduze vVoxel" /> </SwiperSlide>
        <SwiperSlide> <img src={img2} alt="The Duduze vVoxel" /> </SwiperSlide>
        <SwiperSlide> <img src={img3} alt="The Duduze vVoxel" /> </SwiperSlide>
        <SwiperSlide> <img src={img4} alt="The Duduze vVoxel" /> </SwiperSlide>
        <SwiperSlide> <img src={img5} alt="The Duduze vVoxel" /> </SwiperSlide>
        <SwiperSlide> <img src={img6} alt="The Duduze vVoxel" /> </SwiperSlide>
        <SwiperSlide> <img src={img7} alt="The Duduze vVoxel" /> </SwiperSlide>
        <SwiperSlide> <img src={img8} alt="The Duduze vVoxel" /> </SwiperSlide>
        <SwiperSlide> <img src={img9} alt="The Duduze vVoxel" /> </SwiperSlide>
        <SwiperSlide> <img src={img10} alt="The Duduze vVoxel" /> </SwiperSlide>
      </Swiper>
    </Container>
  )
}

export default Carousel