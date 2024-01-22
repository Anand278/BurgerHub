import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Slider = ({ sliderData: [] }) => {
    //   const pagination = {
    //     clickable: true,
    //     renderBullet: function (index: number, className: string) {
    //       return '<span class="' + className + '">' + (index + 1) + '</span>';
    //     },
    //   };
    return (
        <>
            <Swiper
                // direction='vertical'
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                }}
                // pagination={pagination}
                pagination={{
                    dynamicBullets: true,
                    clickable: true
                }}
                loop={true}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {/* {sliderData.map((item, index) => {
                    <SwiperSlide>

                    </SwiperSlide>
                })} */}
            </Swiper>
        </>
    );
}
export default Slider
