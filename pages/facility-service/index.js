import HeadImage from "../../components/layout/HeadImage";
import Image from "next/image";
import Link from "next/link";

export default function Facility() {
  const headData = {
    title: "facility service",
    src: "/test.png",
  };

  const data = [
    { src: "/test.png", title: "개별바베큐장", contents: ["저희 펜션에서는 바비큐숯과 그릴을 대여해 드리고 있습니다.", "연인, 가족, 친구들과 함께 자연경관 안에서 맛있는 바비큐파티를 즐겨보세요", "(바비큐 숯, 그릴 이용요금 2인기준 2만원 입니다.)"], link: "/facility-service/barbecue" },
    { src: "/test.png", title: "test2", contents: ["test1", "test2", "test3"], link: "#" },
    { src: "/test.png", title: "test3", contents: ["test1", "test2", "test3"], link: "#" },
    { src: "/test.png", title: "test4", contents: ["test1", "test2", "test3"], link: "#" },
  ];
  return (
    <>
      <HeadImage data={headData} />
      <section className="container">
        <div className="wrapper">
          {data.map((item, index) => (
            <div className="menu" key={index}>
              <div className="img-box">
                <Image src={item.src} layout="fill" />
              </div>
              <div className="text-box">
                <div className="title">
                  <span>0{index + 1} </span>
                  {item.title}
                </div>
                <div className="contents">
                  {item.contents.map((text, index) => (
                    <p key={index}>{text}</p>
                  ))}
                </div>
                <Link href={item.link}>
                  <a className="link">VIEW MORE</a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <style jsx>{`
        .container {
          padding: 0 2rem;
          margin: 3rem auto;
          max-width: 1400px;
        }
        .wrapper {
          display: flex;
          flex-direction: column;
          gap: 5vw;
        }
        .menu {
          width: 100%;
          margin: auto;
          display: flex;
          justify-content: space-around;
        }
        .menu:nth-child(even) > .text-box {
          order: -1;
        }
        .img-box {
          width: 50%;
          position: relative;
          padding-bottom: 30%;
        }
        .text-box {
          width: 45%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 2vw;
        }
        .title {
          width: 80%;
          font-size: max(1.9vw, 1.8rem);
          font-weight: bold;
          letter-spacing: 0.1rem;
          color: #4e4e4e;
          padding-bottom: 0.5rem;
          border-bottom: 2px solid #c2c2c2;
        }
        .title span {
          font-size: max(2.9vw, 2.6rem);
          letter-spacing: -0.1rem;
          margin-right: 0.3rem;
          color: #516c91;
        }
        .contents {
          width: 80%;
          padding-right: 1rem;
          font-size: max(1.1vw, 1rem);
          font-family: "Noto Sans CJK KR";
        }
        .contents p {
          padding: 0.5rem 0;
        }
        .link {
          font-family: "Noto Sans CJK KR";
          font-size: 0.8rem;
          text-align: center;
          background: transparent;
          color: #5f5f5f;
          border: 2px solid #565656;
          padding: 0.5rem 5vw;
          border-radius: 2px;
          letter-spacing: 0.1rem;
          transition: all 0.3s ease;
        }

        @media (hover: hover) {
          .link:hover {
            background-color: #7d9bd3;
            color: white;
          }
        }

        @media screen and (max-width: 820px) {
          .container {
            padding: 0;
          }
          .wrapper {
            gap: 10vw;
          }
          .menu {
            flex-direction: column;
          }
          .menu:nth-child(even) > .text-box {
            order: unset;
          }
          .img-box {
            width: 100%;
            position: relative;
            padding-bottom: 58%;
          }
          .text-box {
            width: 100%;
            margin-top: 3vw;
          }
          .title {
            width: 90%;
            font-size: max(4vw, 1.4rem);
          }
          .title span {
            font-size: max(5vw, 2rem);
          }
          .contents {
            width: 90%;
            font-size: max(2vw, 0.9rem);
          }
          .link {
            font-size: max(2vw, 0.65rem);
          }
        }
      `}</style>
    </>
  );
}
