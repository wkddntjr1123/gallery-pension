import Image from "next/image";
import PropTypes from "prop-types";

RoundImage.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
};

export default function RoundImage({ src, title, color }) {
  return (
    <>
      <div className="image-box">
        <Image src={src} layout="fill" />
        <div className="text-box">{title}</div>
      </div>
      <style jsx>
        {`
          .image-box {
            width: 250px;
            height: 250px;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            border-radius: 100%;
            overflow: hidden;
            position: relative;
            cursor: pointer;
            transition: all 0.3s ease;
          }
          .image-box img {
            width: 100%;
            height: 100%;
          }

          .text-box {
            position: absolute;
            color: ${color};
            font-size: 1.7rem;
            font-weight: bold;
            text-shadow: 1px 1px 1px black;
            letter-spacing: 0.1rem;
          }
          @media screen and (max-width: 1100px) {
            .image-box {
              width: 220px;
              height: 220px;
            }
          }
          @media screen and (max-width: 980px) {
            .image-box {
              width: 185px;
              height: 185px;
            }
          }
          @media (hover: hover) {
            .image-box:hover {
              transform: scale(1.07);
              filter: grayscale(100%);
            }
          }
          @media screen and (max-width: 820px) {
            .image-box {
              width: 150px;
              height: 150px;
            }
            .image-box:hover {
            }
            .text-box {
              font-size: 1.1rem;
            }
          }
        `}
      </style>
    </>
  );
}
