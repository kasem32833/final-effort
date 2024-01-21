import swiper1 from '../../assets/home/slide1.jpg'
import swiper2 from '../../assets/home/slide2.jpg'
import swiper3 from '../../assets/home/slide3.jpg'
import swiper4 from '../../assets/home/slide4.jpg'
import swiper5 from '../../assets/home/slide5.jpg'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import SectionHeading from '../../Shared/SectionHeading'

const OrderOnline = () => {

    return (
        <>
        <SectionHeading heading="From 11am to 11pm" subHeading="Order Online"></SectionHeading>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          centeredSlides={false}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={swiper1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={swiper2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={swiper3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={swiper4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={swiper5} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={swiper1} alt="" />
          </SwiperSlide>
        </Swiper>
      </>
    );
};

export default OrderOnline;