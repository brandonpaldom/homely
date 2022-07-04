import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import styles from './gallery.module.css';
import Image from 'next/image';
import { Navigation, Pagination } from 'swiper';

export function Gallery({ images }) {
  return (
    <>
      <Swiper
        slidesPerView={'auto'}
        centeredSlides={false}
        spaceBetween={16}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        navigation={true}
        // loop={true}
        className={styles.swiper}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className={styles['image-container']}>
            <Image src={image} alt="" layout="fill" className={styles.image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
