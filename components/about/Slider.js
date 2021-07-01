import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper/core";
import "swiper/swiper-bundle.min.css";

SwiperCore.use([Pagination]);

export default function SimpleSlider() {
  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
      }}
      className="mySwiper">
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
  );
}
