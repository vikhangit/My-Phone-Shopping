import React from 'react';
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";
import Images from '../../constants/image';
import './Banner.scss';

const items = [
    {
        src: Images.BANNER_0,
    },
    {
        src: Images.BANNER_1,
    },
    {
        src: Images.BANNER_2,
    },
    {
        src: Images.BANNER_3,
    },
];
SwiperCore.use([Autoplay, Pagination, Navigation]);
function Banner(props) {


    return (
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    "delay": 2500,
                    "disableOnInteraction": false
                }}
                pagination={{
                    "clickable": true
                }}
                navigation={true}
                className="mySwiper"
            >
                {items.map(item => (
                    <SwiperSlide key={item.src}>
                        <img src={item.src} alt={item.src} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Banner;