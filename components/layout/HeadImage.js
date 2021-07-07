import PropTypes from "prop-types";
import { MobileHeadSlider } from "../Slider";
import Image from "next/image";
import Link from "next/link";

MobileHeadImage.propTypes = {
  src: PropTypes.array,
  title: PropTypes.string,
};

PcHeadImage.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
  menus: PropTypes.array,
};
function MobileHeadImage({ src, title }) {
  const mobileHeight = "10rem";
  return (
    <>
      <div className="image-box">
        <MobileHeadSlider src={src} mobileHeight={mobileHeight} />
        <div className="text-box">
          <p>gallery pension</p>
          <p>{title}</p>
        </div>
      </div>

      <style jsx>
        {`
          .image-box {
            position: relative;
            width: 100%;
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

function PcHeadImage({ src, title, menus }) {
  return (
    <>
      <div className="container">
        <div className="image-box">
          <Image src={src} layout="fill"></Image>
        </div>
        <div className="text-box">
          <h1>{title}</h1>
          <ul>
            {menus.map((item, index) => (
              <li key={index} className={`${item.isActive ? "active" : ""}`}>
                <Link href={item.link}>
                  <a>{item.menu}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <style jsx>
        {`
          .container {
            width: 100%;
            vertical-align: middle;
            position: relative;
          }
          .image-box {
            position: relative;
            width: 100%;
            height: 25rem;
          }
          .text-box {
            height: 50%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-align: center;
            position: absolute;
            top: 25%;
            left: 50%;
            transform: translateX(-50%);
          }
          .text-box h1 {
            color: white;
            font-size: 2.7rem;
            opacity: 0.8;
            text-shadow: 0 0 5px #000;
            letter-spacing: -0.1rem;
          }
          .text-box ul {
            display: flex;
            gap: 1rem;
            justify-content: center;
          }
          .text-box ul li {
            opacity: 0.9;
            border: 2px solid white;
            border-radius: 3px;
            color: #ececec;
          }
          .text-box ul li a {
            display: inline-block;
            width: 6.5rem;
            line-height: 2.5rem;
            font-size: 0.9rem;
          }
          .active {
            color: white !important;
            opacity: 1;
            background: linear-gradient(0deg, rgb(228 169 3) 0%, rgb(204 140 3 / 74%) 100%);
          }
          .active a {
            font-size: 1rem !important;
          }
        `}
      </style>
    </>
  );
}

export default function HeadImage({ mobileData, pcData }) {
  return (
    <>
      <div className="mobile">
        <MobileHeadImage src={mobileData.src} title={mobileData.title} />
        <h4>{mobileData.title}</h4>
      </div>
      <div className="pc">
        <PcHeadImage src={pcData.src} title={pcData.title} menus={pcData.menus} />
        {pcData.subtitle && <h2>{pcData.subtitle}</h2>}
      </div>
      <style jsx>{`
        .mobile {
          display: none;
        }
        .pc {
          display: block;
        }
        .pc h2 {
          text-align: center;
          color: #8a4600;
          margin: 3rem 0;
        }
        @media screen and (max-width: 820px) {
          .mobile {
            display: block;
          }
          .pc {
            display: none;
          }
          .mobile h4 {
            text-align: center;
            font-weight: bold;
            padding: 2rem 0;
            color: #904200;
            margin: 0;
          }
        }
      `}</style>
    </>
  );
}
