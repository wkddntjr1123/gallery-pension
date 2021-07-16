import { useRouter } from "next/router";
import PageNav from "../../components/PageNav";
import HeadImage from "../../components/layout/HeadImage";
import Image from "next/image";
import { SimpleSlider } from "../../components/Slider";

export default function FacilityService() {
  const router = useRouter();
  const { classification } = router.query;

  const headData = {
    title: "facility service",
    src: "/test.png",
  };

  const navData = {
    mainLink: "/facility-service",
    classification: "facility service",
    title: classification,
    nav: [
      { title: "개별테라스", link: "/facility-service/terrace" },
      { title: "개별바베큐장", link: "/facility-service/barbecue" },
      { title: "펜션앞계곡", link: "/facility-service/valley" },
      { title: "테스트1", link: "#" },
      { title: "테스트2", link: "#" },
      { title: "테스트2", link: "#" },
      { title: "테스트2", link: "#" },
    ],
  };
  navData.nav.map((item) => {
    if (item.link.includes(classification)) {
      item.isActive = true;
      return item;
    } else {
      return item;
    }
  });

  const data = {
    terrace: {
      title: "개별바베큐",
      contents: [
        "프라이빗한 둘만의 낭만바비큐, 전객실에서 즐기실 수 있습니다.",
        "숯+그릴 금액 : 10,000원 (1~2인 기준) / 20,000원 (3~4인 기준)",
        "이용 시간 (바비큐 이용시간 : 입실 후 ~ 오후 11시까지 / 숯+그릴 제공시간 : 입실 후 ~ 오후 10시까지 )",
        "※개인 화기는 사용 금지입니다.",
      ],
      src: ["/test.png", "/test.png", "/test.png", "/test.png"],
    },
    barbecue: {
      title: "개별바베큐",
      contents: [
        "프라이빗한 둘만의 낭만바비큐, 전객실에서 즐기실 수 있습니다.",
        "숯+그릴 금액 : 10,000원 (1~2인 기준) / 20,000원 (3~4인 기준)",
        "이용 시간 (바비큐 이용시간 : 입실 후 ~ 오후 11시까지 / 숯+그릴 제공시간 : 입실 후 ~ 오후 10시까지 )",
        "※개인 화기는 사용 금지입니다.",
      ],
      src: ["/test.png", "/test.png", "/test.png", "/test.png"],
    },
    valley: {
      title: "개별바베큐",
      contents: [
        "프라이빗한 둘만의 낭만바비큐, 전객실에서 즐기실 수 있습니다.",
        "숯+그릴 금액 : 10,000원 (1~2인 기준) / 20,000원 (3~4인 기준)",
        "이용 시간 (바비큐 이용시간 : 입실 후 ~ 오후 11시까지 / 숯+그릴 제공시간 : 입실 후 ~ 오후 10시까지 )",
        "※개인 화기는 사용 금지입니다.",
      ],
      src: ["/test.png", "/test.png", "/test.png", "/test.png"],
    },
  };

  let selected = {};
  switch (classification) {
    case "terrace": //개별테라스
      headData.subTitle = "개별테라스";
      selected = data.terrace;
      break;
    case "barbecue": //개별바베큐
      headData.subTitle = "개별바베큐장";
      selected = data.barbecue;
      break;
    case "valley": //펜션앞계곡
      headData.subTitle = "펜션앞계곡";
      selected = data.valley;
      break;
    default:
      return <>error</>;
  }

  return (
    <>
      <HeadImage data={headData} />
      <section className="container">
        <PageNav data={navData} />
        <div className="data-box">
          <div className="text-box">
            <div className="title">{selected.title}</div>
            <div className="contents">
              {selected.contents.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          </div>
          <div className="img-box pc">
            {selected.src.map((item, index) => (
              <div key={index} className="image">
                <Image src={item} layout="fill" />
              </div>
            ))}
          </div>
          <div className="slider mobile">
            <SimpleSlider src={selected.src} />
          </div>
        </div>
      </section>

      <style jsx>{`
        .container {
          max-width: 1280px;
          margin: 0 auto 4rem auto;
          padding: 0 1%;
          font-size: 95%;
          color: #4b4b4b;
        }
        .text-box {
          margin-bottom: 2rem;
        }
        .text-box .title {
          font-size: 1.2rem;
          font-weight: bold;
          margin-bottom: 1rem;
        }
        .text-box .contents > p {
          font-size: 1rem;
          padding: 0.3rem 0;
        }
        .img-box {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2.5vw 0.6vw;
        }
        .image {
          position: relative;
          width: 100%;
          padding-top: 65%;
        }
        .mobile {
          display: none;
        }
        @media screen and (max-width: 820px) {
          .pc {
            display: none;
          }
          .mobile {
            display: block;
          }
          .container {
            margin: 0 auto 2rem auto;
          }
          .slider {
            height: 60vw;
          }
        }
      `}</style>
    </>
  );
}
