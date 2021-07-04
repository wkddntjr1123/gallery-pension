import Image from "next/image";
import Link from "next/link";

const HeadImage = ({ src, title, menus }) => {
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
            font-family: "Noto Sans CJK KR";
            text-align: center;
            position: absolute;
            top: 25%;
            left: 50%;
            transform: translateX(-50%);
          }
          .text-box h1 {
            color: white;
            text-shadow: 0 0 5px #000;
            letter-spacing: -0.1rem;
          }
          .text-box ul {
            display: flex;
            gap: 1rem;
            justify-content: center;
          }
          .text-box ul li {
            border: 2px solid white;
            border-radius: 3px;
          }
          .text-box ul li a {
            display: inline-block;
            width: 7rem;
            line-height: 3rem;
            color: #ececec;
          }
          .active {
            font-size: 1.1rem;
            background: linear-gradient(0deg, rgb(228 169 3) 0%, rgb(204 140 3 / 74%) 100%);
          }
          @media screen and (max-width: 820px) {
            .text-box h1 {
              font-size: 2.2rem;
              margin-bottom: 2rem;
            }
            .text-box ul li {
              border: 1px solid white;
            }
            .text-box ul li a {
              width: 5rem;
              line-height: 2.2rem;
              font-size: 0.8rem;
            }

            .image-box {
              height: 15rem;
            }
          }
        `}
      </style>
    </>
  );
};

export default HeadImage;
