import Link from "next/link";

export default function PageNav({ data }) {
  const testData = {
    mainLink: "#",
    classification: "facility",
    title: "barbecue",
    nav: [
      { title: "개별테라스", link: "#" },
      { title: "개별바베큐장", link: "#" },
      { title: "펜션앞계곡", link: "#" },
      { title: "테스트1", link: "#" },
      { title: "테스트2", link: "#" },
    ],
  };

  return (
    <>
      <div className="container">
        <div className="classification">{testData.classification} Info</div>
        <div className="title">{testData.title}</div>
        <div className="link-box">
          <ul className="nav">
            <li className="main-link">
              <Link href={testData.mainLink}>
                <a>전체보기</a>
              </Link>
            </li>
            {testData.nav.map((item, index) => (
              <li key={index}>
                <Link href={item.link}>
                  <a>{item.title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <style jsx>
        {`
          .container {
            margin: 3rem 0;
            font-family: "Noto Sans CJK KR";
            letter-spacing: 0.05rem;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 0.1rem;
          }
          .classification {
            font-size: 1.2rem;
            font-weight: 400;
            text-transform: capitalize;
            color: #b9b9b9;
          }
          .title {
            font-size: 2.2rem;
            text-transform: uppercase;
            margin-left: -3px;
            font-weight: 400;
          }
          .nav {
            font-family: "Arita-buri-SemiBold";
            font-size: 0.9rem;
            margin-top: 1.5rem;
            display: flex;
            gap: 3rem;
          }
          @media screen and (max-width: 820px) {
            .main-link {
              display: none;
            }
          }
        `}
      </style>
    </>
  );
}
