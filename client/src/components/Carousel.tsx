import React from 'react';
import { SwiperSlide, Swiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

interface ICarouselProps {
  img: string;
  slides: number;
}

const Carousel: React.FC<ICarouselProps> = ({ img, slides }) => (
  <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
    spaceBetween={50}
    slidesPerView={slides}
    className='mt-20 rounded-[20px]'
    // autoplay={{ delay: 2500, disableOnInteraction: false }}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    // onSwiper={(swiper) => console.log(swiper)}
    // onSlideChange={() => console.log('slide change')}
  >
    {[...Array(4)].map((_, i) => (
      <SwiperSlide key={i}>
        <img src={img} alt='img' />
      </SwiperSlide>
    ))}
  </Swiper>
);

export default Carousel;
