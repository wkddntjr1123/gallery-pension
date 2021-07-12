import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";

HoverImage.propTypes = {
  src: PropTypes.string,
  link: PropTypes.string,
  title: PropTypes.string,
};

export default function HoverImage({ src, link, title }) {
  return (
    <>
      <Link href={link}>
        <a className="item">
          <div className="img-box">
            <Image src={src} layout="fill" />
            <div className="overlay">
              <p>Gallery Pension</p>
              <p>{title}</p>
            </div>
          </div>
        </a>
      </Link>
      <style jsx>{`
        .item {
          overflow: hidden;
        }
        .img-box {
          width: 100%;
          height: 100%;
          position: relative;
          overflow: hidden;
          transition: transform 0.3s ease;
        }
        .img-box::before {
          content: "";
          display: block;
          padding-top: 50%;
        }
        .overlay {
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          color: white;
          opacity: 0;
          font-size: 1.2rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 0.4rem;
          transition: opacity 0.3s ease, background-color 0.3s ease;
        }
        .overlay > p:first-child {
          font-size: 1.3rem;
          font-weight: 100;
        }
        .overlay > p:last-child {
          font-size: 1rem;
          color: #c2c2c2;
          text-transform: capitalize;
        }
        @media (hover: hover) {
          .img-box:hover {
            transform: scale(1.05);
          }
          .overlay:hover {
            opacity: 1;
            background-color: rgba(0, 0, 0, 0.705);
          }
        }
      `}</style>
    </>
  );
}
