import Image from "next/image";

export default function HeadImage({ data }) {
  return (
    <>
      <div className="container">
        <div className="image-box">
          <Image src={data.src} layout="fill"></Image>
        </div>
        <div className="text-box">
          <p>gallery pension</p>
          <h1>{data.title}</h1>
          {data.subTitle && (
            <>
              <div className="line"></div>
              <div className="text">{data.subTitle}</div>
            </>
          )}
        </div>

        <div className="scroll-box">
          <span className="mouse">
            <span></span>
          </span>
          Scroll
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
            height: 40rem;
            filter: brightness(0.7);
          }
          .text-box {
            width: 100%;
            height: 50%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            position: absolute;
            opacity: 0.9;
            top: 25%;
            left: 50%;
            transform: translateX(-50%);
            text-transform: capitalize;
          }
          .text-box p {
            color: white;
            font-size: 1.2rem;
            font-weight: 100;
            text-shadow: 0 0 5px #000;
            letter-spacing: 0.05rem;
          }
          .text-box h1 {
            font-weight: 400;
            color: white;
            font-size: 3.5rem;
            letter-spacing: 0.1rem;
            margin: 0.6rem 0 0 0;
          }
          .text-box .line {
            width: clamp(4rem, 7vw, 7rem);
            height: 1px;
            margin: 1.2rem 0 1.7rem 0;
            background-color: #fff;
          }
          .text-box .text {
            color: white;
            font-size: 1.3rem;
          }
          .scroll-box {
            color: white;
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            margin-bottom: 9rem;
            font-size: 0.8rem;
            opacity: 0.6;
          }
          .mouse {
            position: relative;
            display: block;
            width: 1.8rem;
            height: 3rem;
            margin: 0 auto 0.5rem auto;
            box-sizing: border-box;
            border: 2px solid white;
            border-radius: 100px;
          }
          .mouse span {
            position: absolute;
            display: block;
            left: 50%;
            transform: translateX(-50%);
            width: 0.45rem;
            height: 0.45rem;
            background-color: white;
            border-radius: 100%;
            animation: scroll-animation 2s linear infinite;
          }
          @keyframes scroll-animation {
            0% {
              top: 15%;
            }
            20% {
              top: 35%;
            }
            60% {
              opacity: 0;
              top: 35%;
            }
            100% {
              opacity: 0;
              top: 15%;
            }
          }

          @media screen and (max-width: 1100px) {
            .image-box {
              height: 30rem;
            }
            .text-box p {
              font-size: 1.1rem;
            }
            .text-box h1 {
              font-size: 3.2rem;
            }
            .scroll-box {
              margin-bottom: 4.5rem;
            }
          }
          @media screen and (max-width: 820px) {
            .image-box {
              height: 56vw;
              max-height: 340px;
            }
            .text-box p {
              font-size: clamp(0.8rem, 3.5vw, 1rem);
            }
            .text-box h1 {
              font-size: clamp(1.5rem, 7vw, 3rem);
            }
            .text-box .line {
              width: clamp(3rem, 8vw, 4rem);
              margin: 3.3vw 0 4.1vw 0;
            }
            .text-box .text {
              font-size: clamp(0.9rem, 2.5vw, 1.2rem);
            }
            .scroll-box {
              display: none;
            }
          }
        `}
      </style>
    </>
  );
}
