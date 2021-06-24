import Link from "next/link";

const Footer = () => {
  const menu = [
    { title: "오시는길", link: "#" },
    { title: "개인정보처리방침", link: "#" },
    { title: "관리자로그인", link: "#" },
    { title: "기타등등", link: "#" },
  ];

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
        <div className="footer-info">
          <div className="info-left">
            <ul>
              <li>
                <span>상호</span>
                갤러리펜션
              </li>
              <li>
                <span>예약전화</span>
                010-xxxx-xxxx
              </li>
              <li>
                <span>주소</span>
                강원도 양양군 XXXX XXX
              </li>
              <li>
                <span>어쩌구</span>
                저쩌구
              </li>
            </ul>
          </div>
          <div className="info-right">
            <ul>
              <li>
                <span>사업자등록번호</span>
                XXX-XX-XXXXX
              </li>
              <li>
                <span>대표자</span>
                장우석
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <style jsx>
        {`
          .footer {
            padding: 3rem 12%;
          }
          .footer-menu {
            font-size: 1.3rem;
            font-weight: bold;
            text-align: left;
            border-bottom: 2px solid #bdbdbd;
            padding: 0 0 0.3rem 0.3rem;
          }
          .footer-menu li {
            display: inline-block;
            padding: 1rem 0;
            font-weight: bold;
            color: inherit;
          }
          .footer-menu li::after {
            content: "|";
            margin: 0 0.6rem;
            color: #b7b7b7;
          }
          .footer-menu li:last-child:after {
            content: "";
            margin: 0;
          }
          .footer-info {
            display: flex;
            padding: 1.5rem 0 1.5rem 0.3rem;
            line-height: 2.5rem;
            font-size: 1rem;
            font-weight: bold;
          }
          .info-left {
            width: 52%;
          }
          .footer-info li span {
            display: inline-block;
            width: 11rem;
            font-size: 1.2rem;
            position: relative;
            top: 0.2rem;
          }
        `}
      </style>
    </>
  );
};

export default Footer;
