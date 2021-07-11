import Link from "next/link";
import Image from "next/image";
import HeadImage from "../../components/layout/HeadImage";
function RoomInfo({ roomData }) {
  return (
    <>
      {roomData.map((item, index) => (
        <div key={index}>
          <Link href={item.link}>
            <a className="item">
              <div className="img-box">
                <Image src={item.src} layout="fill" />
                <div className="overlay">
                  <p>Gallery Pension</p>
                  <p>Room {item.room}</p>
                </div>
              </div>
              <div className="info-box">
                <div>{item.room}호</div>
                <div className="info-center">
                  <div>{item.detail}</div>
                  <div>{item.people}</div>
                </div>
              </div>
            </a>
          </Link>
        </div>
      ))}
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
        }
        .info-box {
          padding-top: 1rem;
          font-size: 0.9rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 2vh;
        }
        .info-box > div:first-child {
          font-size: 1.3rem;
          position: relative;
        }
        .info-box > div:last-child {
          color: #797979;
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
export default function Room() {
  const headData = {
    title: "rooms",
    src: "/test.png",
  };

  const roomData = [
    { room: "A101", src: "/test.png", detail: "개별테라스,개별바비큐", people: "기준 : 2명, 최대 : 4명", link: "#" },
    { room: "A101", src: "/test.png", detail: "개별테라스,개별바비큐", people: "기준 : 2명, 최대 : 4명", link: "#" },
    { room: "A101", src: "/test.png", detail: "개별테라스,개별바비큐", people: "기준 : 2명, 최대 : 4명", link: "#" },
    { room: "A101", src: "/test.png", detail: "개별테라스,개별바비큐", people: "기준 : 2명, 최대 : 4명", link: "#" },
    { room: "A101", src: "/test.png", detail: "개별테라스,개별바비큐", people: "기준 : 2명, 최대 : 4명", link: "#" },
    { room: "A101", src: "/test.png", detail: "개별테라스,개별바비큐", people: "기준 : 2명, 최대 : 4명", link: "#" },
  ];
  return (
    <>
      <HeadImage data={headData} />
      <section className="container">
        <RoomInfo roomData={roomData} />
      </section>
      <style jsx>{`
        .container {
          max-width: 1400px;
          margin: auto;
          padding: 0 3%;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          grid-template-rows: 1fr 1fr;
          row-gap: 10vh;
          column-gap: 3vh;
          margin-bottom: 5rem;
        }
      `}</style>
    </>
  );
}
