import Image from "next/image";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper/core";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

SwiperCore.use([Pagination, Navigation, Autoplay]);

SimpleSlider.propTypes = {
  src: PropTypes.array,
};

export function SimpleSlider({ src, height }) {
  return (
    <>
      {/* 사진 개수가 1개면 <Image>, 아니면 Slider */}
      {src.length > 1 ? (
        <div className="wrapper">
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
                <Image src={item} layout="fill" alt="" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        <div className="wrapper">
          <Image src={src[0]} layout="fill" alt="" />
        </div>
      )}
      <style jsx>
        {`
          .wrapper {
            width: 100%;
            height: 100%;
          }
        `}
      </style>
      <style jsx global>{`
        @media screen and (max-width: 820px) {
          :root {
            --swiper-navigation-size: 1.2rem;
          }
          .swiper {
            height: 100%;
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
        }
      `}</style>
    </>
  );
}
