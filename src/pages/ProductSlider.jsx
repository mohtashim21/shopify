// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import slider_img_1 from "../assets/slider img/slider_img_1.webp";
import slider_img_2 from "../assets/slider img/slider_img_2.webp";
import slider_img_3 from "../assets/slider img/slider_img_4.webp";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './styles.css';
import { Navigation, Pagination,Mousewheel,Keyboard, Autoplay } from 'swiper/modules';

const ProductSlider = () => {

  return (
    <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        autoplay={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><img src={slider_img_1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slider_img_2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slider_img_3} alt="" /></SwiperSlide>
        
      </Swiper>
  )
}

export default ProductSlider


