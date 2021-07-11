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
            height: 50%;
            display: flex;
            flex-direction: column;
            justify-content: center;
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
          }
          @media screen and (max-width: 820px) {
            .image-box {
              height: 56vw;
              max-height: 340px;
            }
            .text-box p {
              font-size: 1.1rem;
            }
            .text-box h1 {
              font-size: 2.7rem;
            }
          }
        `}
      </style>
    </>
  );
}
