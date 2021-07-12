import HeadImage from "../../components/layout/HeadImage";
import Image from "next/image";
import Link from "next/link";

export default function Facility() {
  const headData = {
    title: "facility service",
    src: "/test.png",
  };

  const data = [
    { src: "/test.png", title: "개별바베큐장", contents: "test", link: "#" },
    { src: "/test.png", title: "test2", contents: "test", link: "#" },
    { src: "/test.png", title: "test3", contents: "test", link: "#" },
    { src: "/test.png", title: "test4", contents: "test", link: "#" },
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
                <div className="title">{item.title}</div>
                <div className="contents">{item.contents}</div>
                <Link href={item.link}>
                  <a className="link">
                    <span>→</span> MORE
                  </a>
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
          justify-content: center;
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
          width: 40%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .link {
          font-family: "Noto Sans CJK KR";
          font-size: 0.8rem;
          text-align: center;
          padding: 0.6em 1rem;
          color: white;
          background-color: rgb(46 119 202);
          border-radius: 2px;
          transition: background-color 0.3s ease;
          display: flex;
          align-items: center;
        }
        .link span {
          padding: 0.05rem;
          margin: 0.03rem 0.4rem 0 0;
          vertical-align: middle;
          display: inline-block;
          color: white;
          border: 1px solid white;
          border-radius: 100%;
        }
        @media (hover: hover) {
          .link:hover {
            background-color: rgb(6 64 130);
          }
        }

        @media screen and (max-width: 820px) {
          .container {
            padding: 0 0.5rem;
          }
        }
      `}</style>
    </>
  );
}
