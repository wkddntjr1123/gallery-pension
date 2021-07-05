import Link from "next/link";
import { useAppContext } from "../../libs/Context";

const Footer = () => {
  const menu = [
    { title: "오시는길", link: "#" },
    { title: "개인정보처리방침", link: "#" },
    { title: "관리자로그인", link: "#" },
    { title: "기타등등", link: "#" },
  ];
  const svgColor = "#d6d1cb";

  const { isMobile } = useAppContext();

  return (
    <>
      <footer className="footer">
        <ul className="footer-menu">
          {menu.map((item, index) => (
            <li key={index}>
              <Link href={item.link}>
                <a>{item.title}</a>
              </Link>
            </li>
          ))}
        </ul>
        <ul className="footer-info">
          <li className="mb-home">
            <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 0 24 24" width="40px" fill={svgColor}>
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" />
            </svg>
            <div>갤러리펜션</div>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 0 24 24" width="40px" fill={svgColor}>
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M6.54 5c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79h1.51m9.86 12.02c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75l1.2-1.19M7.5 3H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1-1.24 0-2.45-.2-3.57-.57-.1-.04-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2c-2.83-1.45-5.15-3.76-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1z" />
            </svg>
            <div>010-3078-6656</div>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 0 24 24" width="40px" fill={svgColor}>
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM10 5.47l4 1.4v11.66l-4-1.4V5.47zm-5 .99l3-1.01v11.7l-3 1.16V6.46zm14 11.08l-3 1.01V6.86l3-1.16v11.84z" />
            </svg>
            <div>양양군 현북면 면옥치길 285</div>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="40px" viewBox="0 0 24 24" width="40px" fill={svgColor}>
              <g>
                <rect fill="none" height="24" width="24" />
              </g>
              <g>
                <path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,20c-4.41,0-8-3.59-8-8c0-4.41,3.59-8,8-8 s8,3.59,8,8C20,16.41,16.41,20,12,20z M12.89,11.1c-1.78-0.59-2.64-0.96-2.64-1.9c0-1.02,1.11-1.39,1.81-1.39 c1.31,0,1.79,0.99,1.9,1.34l1.58-0.67c-0.15-0.44-0.82-1.91-2.66-2.23V5h-1.75v1.26c-2.6,0.56-2.62,2.85-2.62,2.96 c0,2.27,2.25,2.91,3.35,3.31c1.58,0.56,2.28,1.07,2.28,2.03c0,1.13-1.05,1.61-1.98,1.61c-1.82,0-2.34-1.87-2.4-2.09L8.1,14.75 c0.63,2.19,2.28,2.78,3.02,2.96V19h1.75v-1.24c0.52-0.09,3.02-0.59,3.02-3.22C15.9,13.15,15.29,11.93,12.89,11.1z" />
              </g>
            </svg>

            <div>농협 699-02-02XX6X (송영선)</div>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 0 24 24" width="40px" fill={svgColor}>
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M8 16h8v2H8zm0-4h8v2H8zm6-10H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z" />
            </svg>
            <div>사업자번호 XXX-XX-XXXXX</div>
          </li>
          <div className="mb-menu">
            {menu.map((item, index) => (
              <Link key={index} href={item.link}>
                <a>{item.title}</a>
              </Link>
            ))}
          </div>
        </ul>
      </footer>
      <style jsx>
        {`
          .footer {
            background-color: rgb(54 55 59);
          }
          .footer-menu {
            font-size: 1.1rem;
            font-weight: bold;
            text-align: left;
            display: flex;
            justify-content: space-around;
            background-color: #757575;
          }
          .footer-menu li {
            display: inline-block;
            font-weight: bold;
            padding: 0.3rem 0;
            width: 100%;
            text-align: center;
            border-right: 1px solid #a3a3a3;
            transition: background-color 0.5s ease;
          }
          .footer-menu li:hover {
            background-color: rgb(241 241 241);
          }
          .footer-menu li a:hover {
            color: rgb(78, 81, 88);
          }
          .footer-menu li a {
            display: block;
            padding: 0.7rem 0;
            color: white;
            transition: color 0.5s ease;
          }
          .footer-info {
            display: flex;
            justify-content: space-around;
            padding: 1.5rem 0 1.5rem 0.3rem;
            line-height: 2.5rem;
            font-size: 0.9rem;
            background: rgb(64 64 64);
          }
          .footer-info li {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          .footer-info li div {
            color: ${svgColor};
          }
          .footer-info li div img {
            display: block;
            margin: auto;
          }
          .mb-home {
            display: none !important;
          }
          .mb-menu {
            display: none;
          }
          @media screen and (max-width: 820px) {
            .footer-menu {
              display: none;
            }

            .footer-info {
              display: block;
              font-size: 1rem;
              position: relative;
              padding: 1rem;
            }
            .mb-home {
              display: flex !important;
            }
            .footer-info li {
              display: flex;
              flex-direction: row;
              justify-content: center;
              gap: 10%;
            }
            .footer-info li div {
              display: inline-block;
              font-size: 0.8rem;
              color: rgb(226, 226, 226);
              font-weight: 100;
              width: 12rem;
              //text-align: center;
            }
            svg {
              display: inline-block;
              height: 25px;
            }
            .mb-menu {
              display: flex;
              font-size: 0.7rem;
              color: #b6b59e;
              flex-direction: row;
              justify-content: center;
              margin-top: 0.2rem;
            }
            .mb-menu a::after {
              content: "|";
              color: #848484;
              margin: 0 0.3rem;
            }
            .mb-menu a:last-child::after {
              content: "";
            }
          }
        `}
      </style>
    </>
  );
};

export default Footer;
