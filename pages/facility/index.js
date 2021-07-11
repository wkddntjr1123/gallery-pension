import HeadImage from "../../components/layout/HeadImage";
import RoundImage from "../../components/RoundImage";
import Link from "next/link";

export default function Facility() {
  const mobileData = {
    title: "FACILITY & SERVICE", //string
    src: ["/pictures/view1.jpeg"], //array
  };
  const pcData = {
    title: "FACILITY & SERVICE", //string
    src: "/test.png", //string
    menus: [
      //array
    ],
    subtitle: "FACILITY & SERVICE",
  };

  const data = [
    { src: "/test.png", title: "개별바베큐장", color: "white", krTitle: "개별바베큐장", link: "#" },
    { src: "/test.png", title: "test2", color: "white", krTitle: "test", link: "#" },
    { src: "/test.png", title: "test3", color: "white", krTitle: "test", link: "#" },
    { src: "/test.png", title: "test4", color: "white", krTitle: "test", link: "#" },
  ];
  return (
    <>
      <HeadImage mobileData={mobileData} pcData={pcData} />
      <section className="container">
        {data.map((item, index) => (
          <div className="box" key={index}>
            <RoundImage src={item.src} title={item.title} color={item.color} />
            <div className="en-title">{item.krTitle}</div>
            <Link href={item.link}>
              <a className="link">
                <span>→</span> MORE
              </a>
            </Link>
          </div>
        ))}
      </section>

      <style jsx>{`
        .container {
          padding: 0 1rem;
          margin-bottom: 3rem;
          display: flex;
          justify-content: center;
          gap: 2vw;
        }
        .box {
          display: flex;
          flex-direction: column;
          gap: 0.7rem 0;
        }
        .en-title {
          text-align: center;
          font-size: 1.2rem;
          font-weight: bold;
        }
        .link {
          font-family: "Noto Sans CJK KR";
          font-size: 0.8rem;
          text-align: center;
          width: 50%;
          margin: auto;
          padding: 0.6em 0;
          color: white;
          background-color: rgb(46 119 202);
          border-radius: 2px;
          transition: background-color 0.3s ease;
        }
        .link span {
          font-size: 0.7rem;
          font-weight: bold;
          padding: 0.08rem;
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
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>
    </>
  );
}
