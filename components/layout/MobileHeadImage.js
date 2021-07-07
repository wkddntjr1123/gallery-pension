import PropTypes from "prop-types";
import { useAppContext } from "../../libs/Context";
import Slider from "../Slider";

MobileHeadImage.propTypes = {
  src: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};

export default function MobileHeadImage({ src, title }) {
  return (
    <>
      <div className="wrapper">
        <Slider src={src} />
        <div className="text-box">
          <p>gallery pension</p>
          <p>{title}</p>
        </div>
      </div>

      <style jsx>
        {`
          .wrapper {
            position: relative;
          }
          .text-box {
            font-family: "Noto Sans CJK KR";
            text-align: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 1rem;
            position: absolute;
            height: 50%;
            top: 25%;
            left: 50%;
            transform: translateX(-50%);
            opacity: 0.8;
            color: white;
            z-index: 1;
          }
          .text-box p {
            font-family: "Arita-buri-SemiBold";
            letter-spacing: 2px;
          }
          .text-box p:first-child {
            font-size: 1rem;
          }
          .text-box p:last-child {
            font-size: 1.4rem;
          }
        `}
      </style>
    </>
  );
}
