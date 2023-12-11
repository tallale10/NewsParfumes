import React from 'react';
import styles from './Find.module.css';
import Card from './Card';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';


const Find = () => {
  return (
    <div className={styles.find}>
      <div className={styles.heading}>
        <h1>Find your perfume</h1>
        <div className={styles.text_bg}>
          <p>
            <span>Discover the world's largest Perfume sharing marketplace</span>
          </p>
        </div>
      </div>
      <div className={styles.slider_container}>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={5}
          navigation
          breakpoints={{
            // when window width is >= 340px
            340: {
              width: 200,
              slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
              width: 768,
              slidesPerView: 4,
            },
            // when window width is >= 1040px
            1040: {
              width: 1040,
              slidesPerView: 5,
            },
          }}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide>
            <Card
              image='https://i.pinimg.com/236x/91/5f/b0/915fb0ef60c1e8243bebb3c59b9da36a.jpg'
              make='SAUVAGE'
              />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image='https://i.pinimg.com/236x/dd/8a/28/dd8a2881a53ba080d984f0a86de6f038.jpg'
              make='VALENTINO'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image='https://i.pinimg.com/236x/85/7a/35/857a3585e57bd06a1842b19696d4121d.jpg'
              make='BOSS'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image='https://i.pinimg.com/236x/b8/49/7e/b8497ee49a390e522d2ac0fbd5ace226.jpg'
              make='Moni-Blanc'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image='https://i.pinimg.com/236x/2c/5d/c3/2c5dc3f73ebab3eae45d641e8292f306.jpg'
              make='DOLCE & GABBANA'
            />
          </SwiperSlide>

          <SwiperSlide>
            <Card
              image='https://i.pinimg.com/236x/f4/20/c5/f420c54435bec433f24e14e78a976ea6.jpg'
              make='Bleu du CHANEL'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image='https://i.pinimg.com/236x/54/3f/17/543f17c3f99731de0b5714db924f8793.jpg'
              make='PRADA'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image='https://i.pinimg.com/236x/ad/ef/d7/adefd7cf3fbb6f5122e67301a4affd6d.jpg'
              make='CREED'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image='https://i.pinimg.com/236x/b6/0b/17/b60b17ee4a4c357133e77b1d1daafd03.jpg'
              make='OMBER NOMADE'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image='https://i.pinimg.com/236x/19/5c/23/195c2376fa6a308e4e1ae8ece2d90b6b.jpg'
              make='Dior'
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Find;
