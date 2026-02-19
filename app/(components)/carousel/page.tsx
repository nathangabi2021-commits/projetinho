"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import salareuniaohotel from "./salareuniao.png"
import recepcafe from "./recepcaocafe.png"
import cafemanhaa from "./cafemanha.png"
import hotelfrente from "./frente.png"
import Image from 'next/image';
export default function Carousel(){
    return(

        <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{clickable: true}}
    
        >
            <SwiperSlide><Image src={salareuniaohotel} alt="fotoshotel" width={1350} height={1350}></Image></SwiperSlide>
            <SwiperSlide><Image src={recepcafe}  alt="fotoshotel" width={1350} height={1350}></Image></SwiperSlide>
            <SwiperSlide><Image src={cafemanhaa}  alt="fotoshotel" width={1350} height={1350}></Image></SwiperSlide>
            <SwiperSlide><Image src={hotelfrente}  alt="fotoshotel" width={1350} height={1350}></Image></SwiperSlide>

        </Swiper>
        
    )
}