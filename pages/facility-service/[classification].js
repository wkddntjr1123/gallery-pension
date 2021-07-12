import { useRouter } from "next/router";
import PageNav from "../../components/PageNav";
import HeadImage from "../../components/layout/HeadImage";
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
    terrace: {},
    barbecue: {},
    valley: {},
  };
  let selected = {};

  switch (classification) {
    case "terrace": //개별테라스
      selected = data.terrace;
      break;
    case "barbecue": //개별바베큐
      selected = data.barbecue;
      break;
    case "valley": //펜션앞계곡
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
      </section>

      <style jsx>{`
        .container {
          max-width: 1240px;
          margin: auto;
          padding: 0 5%;
          font-size: 95%;
          color: #616161;
        }
      `}</style>
    </>
  );
}
