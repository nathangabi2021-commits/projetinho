"use client"
import "../../../app/global.css"
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
import { useState } from "react";
type CarouselProps = {
    carrosel: boolean;
}
 

export default function Carousel(){ 
    const [isReady, setIsReady] = useState(false);    

 
        
    const carouselConfig: CarouselProps = {carrosel: true}; // Defina como true para exibir o carrossel
    const carrosel = carouselConfig.carrosel ? (
        
        <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            onSwiper={() => setIsReady(true)}
            className={isReady ? 'opacity-100' : 'opacity-0'}
            className={{transition: 'opacity 0.3s ease'}}
            observeParents={true}
            observer={true}
            navigation
            pagination={{clickable: true}}

    
        >
            <SwiperSlide><Image className="object-cover fill priority" src={salareuniaohotel} alt="fotoshotel" width={1350} height={1350}></Image></SwiperSlide>
            <SwiperSlide><Image className="object-cover fill priority" src={recepcafe}  alt="fotoshotel" width={1350} height={1350}></Image></SwiperSlide>
            <SwiperSlide><Image className="object-cover fill priority" src={cafemanhaa}  alt="fotoshotel" width={1350} height={1350}></Image></SwiperSlide>
            <SwiperSlide><Image className="object-cover fill priority" src={hotelfrente}  alt="fotoshotel" width={1350} height={1350}></Image></SwiperSlide>

        </Swiper>    ) : console.log("Carrossel não está pronto") 


 

    return(
 
          <section> 
                 {carrosel ? carrosel : <p>Carrossel não está pronto</p>}   
                
  
          </section>

    )
}




//////http://localhost:3000/home