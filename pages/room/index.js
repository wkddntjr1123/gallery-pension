import HeadImage from "../../components/layout/HeadImage";
import HoverImage from "../../components/HoverImage";

export default function Room() {
  const headData = {
    title: "rooms",
    src: "/test.png",
  };
  const roomData = [
    { room: "a101", title: "room a101", src: "/test.png", detail: "개별테라스,개별바비큐", people: "기준 : 2명, 최대 : 4명", link: "#" },
    { room: "a101", title: "room a101", src: "/test.png", detail: "개별테라스,개별바비큐", people: "기준 : 2명, 최대 : 4명", link: "#" },
    { room: "a101", title: "room a101", src: "/test.png", detail: "개별테라스,개별바비큐", people: "기준 : 2명, 최대 : 4명", link: "#" },
    { room: "a101", title: "room a101", src: "/test.png", detail: "개별테라스,개별바비큐", people: "기준 : 2명, 최대 : 4명", link: "#" },
    { room: "a101", title: "room a101", src: "/test.png", detail: "개별테라스,개별바비큐", people: "기준 : 2명, 최대 : 4명", link: "#" },
    { room: "a101", title: "room a101", src: "/test.png", detail: "개별테라스,개별바비큐", people: "기준 : 2명, 최대 : 4명", link: "#" },
  ];

  return (
    <>
      <HeadImage data={headData} />
      <section className="container">
        {roomData.map((item, index) => (
          <div key={index}>
            <HoverImage src={item.src} title={item.title} link={item.link} />
            <div className="info-box">
              <div>{item.room}호</div>
              <div className="info-center">
                <div>{item.detail}</div>
                <div>{item.people}</div>
              </div>
            </div>
          </div>
        ))}
      </section>
      <style jsx>{`
        .container {
          max-width: 1400px;
          margin: 3rem auto 7rem auto;
          padding: 0 3%;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          grid-template-rows: 1fr 1fr;
          gap: 10vh;
          column-gap: 3vh;
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
          text-transform: capitalize;
          position: relative;
        }
        .info-box > div:last-child {
          color: #797979;
        }
      `}</style>
    </>
  );
}
