import Image from "next/image";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper/core";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import { useAppContext } from "../libs/Context";
SwiperCore.use([Pagination, Navigation, Autoplay]);

Slider.propTypes = {
  src: PropTypes.array.isRequired,
};

export default function Slider({ src }) {
  const { isMobile } = useAppContext();
  const height = isMobile ? 1000 : 1200;
  return (
    <>
      {/* 사진 개수가 1개면 <Image>, 아니면 Slider */}
      {src.length > 1 ? (
        <Swiper
          pagination={{
            bullets: true,
          }}
          navigation={true}
          loop={true}
          loopFillGroupWithBlank={true}
          autoplay={true}
          className="swiper">
          {src.map((item, index) => (
            <SwiperSlide key={index}>
              <Image src={item} width={2000} height={height} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <Image src={src[0]} width={2000} height={height} alt="" />
      )}

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
