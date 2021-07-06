import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper/core";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

SwiperCore.use([Pagination, Navigation, Autoplay]);

export default function SimpleSlider() {
  return (
    <>
      <Swiper
        pagination={{
          bullets: true,
        }}
        navigation={true}
        loop={true}
        loopFillGroupWithBlank={true}
        className="swiper">
        <SwiperSlide>
          <Image src={"/pictures/view1.jpeg"} width={2000} height={1200} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={"/pictures/view2.jpeg"} width={2000} height={1200} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={"/pictures/view3.jpeg"} width={2000} height={1200} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={"/pictures/view4.jpeg"} width={2000} height={1200} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={"/pictures/view5.jpeg"} width={2000} height={1200} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={"/pictures/view6.jpeg"} width={2000} height={1200} alt="" />
        </SwiperSlide>
      </Swiper>
      <style jsx global>{`
        :root {
          --swiper-navigation-size: 1.2rem;
        }
        .swiper-button-prev,
        .swiper-button-next {
          width: 15px;
          height: 15px;
        }
        .swiper-button-prev {
          left: 18px;
        }
        .swiper-button-next {
          right: 18px;
        }
        .swiper-button-prev:after,
        .swiper-button-next:after {
          color: #ddd0c0;
        }
        .swiper-pagination-bullet {
          width: 7px;
          height: 7px;
          display: inline-block;
          background: transparent;
          opacity: 0.8;
          margin: 0 3px !important;
          border: 1px solid #ffffff !important;
        }
        .swiper-pagination-bullet-active {
          background-color: rgb(247, 247, 247);
          opacity: 1;
        }
      `}</style>
    </>
  );
}
