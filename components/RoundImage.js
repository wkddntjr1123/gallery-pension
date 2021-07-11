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
        <div className="overlay">
          <div className="text-box">{title}</div>
        </div>
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
            font-size: 1.5rem;
            font-weight: 400;
            text-shadow: 1px 1px 1px black;
            letter-spacing: 0.1rem;
          }
          .overlay {
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.705);
            z-index: 1;
            opacity: 0;
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: opacity 0.3s ease;
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
              transform: scale(1.05);
            }
            .overlay:hover {
              opacity: 1;
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
