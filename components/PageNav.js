import Link from "next/link";

export default function PageNav({ data }) {
  return (
    <>
      <div className="container">
        <div className="classification">{data.classification} Info</div>
        <div className="title">{data.title}</div>
        <div className="link-box">
          <ul className="nav">
            <li className="main-link">
              <Link href={data.mainLink}>
                <a>전체보기</a>
              </Link>
            </li>
            {data.nav.map((item, index) => (
              <li key={index} className={item.isActive ? "active" : ""}>
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
            gap: 0.2rem;
          }
          .classification {
            font-size: 1.2rem;
            font-weight: 400;
            text-transform: capitalize;
            color: #b9b9b9;
            margin-left: 0.5rem;
          }
          .title {
            font-size: 2.2rem;
            text-transform: uppercase;
            margin-left: -3px;
            font-weight: 400;
            margin-left: 0.3rem;
          }
          .nav {
            font-family: "Arita-buri-SemiBold";
            font-size: 0.9rem;
            margin-top: 1.5rem;
            display: flex;
            gap: 1vw;
            line-height: 2rem;
            border-bottom: 1px solid #d6d6d6;
          }
          .nav li {
            padding: 0 1.5vw;
            color: #888888;
          }
          .active {
            border-bottom: 2px solid #ff6d6d;
            color: black !important;
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
