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

        <ul className="footer-info">
          <li>
            <div>
              <img src="http://d2ejry5vjt6jp9.cloudfront.net/common/icon/footerTypeA/tel.png" />
              010-XXXX-XXXX
            </div>
          </li>
          <li>
            <div>
              <img src="http://d2ejry5vjt6jp9.cloudfront.net/common/icon/footerTypeA/point.png" />
              양양군 현북면 면옥치길 285
            </div>
          </li>
          <li>
            <div>
              <img src="http://d2ejry5vjt6jp9.cloudfront.net/common/icon/footerTypeA/cash.png" />
              입금계좌 농협 699-02-0200XX (예금주 : 송영선)
            </div>
          </li>
          <li>
            <div>
              <img src="http://d2ejry5vjt6jp9.cloudfront.net/common/icon/footerTypeA/cor.png" />
              업체명 : 갤러리펜션
            </div>
          </li>
          <li>
            <div>
              <img src="http://d2ejry5vjt6jp9.cloudfront.net/common/icon/footerTypeA/text.png" />
              사업자등록번호 XXX-XX-XXXXX
            </div>
          </li>
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
            background-color: #4e5158;
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
            background-color: rgba(255, 255, 255, 1);
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
            font-size: 1rem;
            background-color: #36373b;
          }
          .footer-info li {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .footer-info li div {
            color: #c3c3b4;
          }
          .footer-info li div img {
            display: block;
            margin: auto;
          }
        `}
      </style>
    </>
  );
};

export default Footer;
