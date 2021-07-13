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
          <div className="reserve-box">
            <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 0 24 24" width="16px" fill="#565656">
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M7 11h2v2H7v-2zm14-5v14c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2l.01-14c0-1.1.88-2 1.99-2h1V2h2v2h8V2h2v2h1c1.1 0 2 .9 2 2zM5 8h14V6H5v2zm14 12V10H5v10h14zm-4-7h2v-2h-2v2zm-4 0h2v-2h-2v2z" />
            </svg>
            RESERVATION
          </div>
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
            color: rgb(36, 36, 36);
            text-transform: uppercase;
            margin-left: -3px;
            font-weight: 400;
            margin-left: 0.3rem;
          }
          .link-box {
            width: 100%;
            position: relative;
          }
          .nav {
            font-family: "Arita-buri-SemiBold";
            font-size: 0.9rem;
            margin-top: 1.5rem;
            display: flex;
            gap: 2vw;
            line-height: 2rem;
            border-bottom: 1px solid #d6d6d6;
          }
          .nav li {
            padding: 0 0.2vw;
            color: #888888;
          }
          .active {
            border-bottom: 2px solid #ff6d6d;
            color: black !important;
          }
          .reserve-box {
            position: absolute;
            bottom: 0;
            right: 0;
            padding: 0.6rem 1.2rem;
            font-size: 1rem;
            letter-spacing: -0.02rem;
            border: 1px solid #c2c2c2;
            color: #565656;
            display: flex;
            align-items: center;
          }
          @media screen and (max-width: 820px) {
            .main-link {
              margin-left: 1rem;
            }
            .nav {
              justify-content: flex-start;
              flex-wrap: nowrap;
              overflow-x: auto;
              font-size: 0.8rem;
              gap: 1.5rem;
            }
            .nav::-webkit-scrollbar {
              display: none;
            }
            .nav li {
              flex: 0 0 auto;
            }
            .reserve-box {
              display: none;
            }
          }
        `}
      </style>
    </>
  );
}
