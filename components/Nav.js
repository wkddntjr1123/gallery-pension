import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Subnav = ({ data }) => {
  return (
    <>
      <ul className="sub-box">
        {data.map((item, index) => (
          <li key={index}>
            <Link href="#">
              <a>{item.title}</a>
            </Link>
          </li>
        ))}
      </ul>
      <style jsx>{`
        .sub-box {
          position: absolute;
          max-height: 0;
          overflow: hidden;
          width: 11rem;
          transform: translateX(-50%);
          left: 50%;
          transition: max-height ease 0.5s;
          background-color: rgba(34, 34, 34, 0.7);
          top: 5.5rem;
        }
        .sub-box a {
          display: block;
          border-bottom: 1px solid #c2c2c2;
          transition: color ease 0.3s;
          font-size: 0.8rem;
          text-align: center;
          line-height: 2.5rem;
          color: #c2c2c2;
        }
        .sub-box a:hover {
          color: white;
        }
      `}</style>
    </>
  );
};

const Nav = () => {
  const menu = [
    { title: "펜션소개", link: "/about" },
    { title: "객실소개", link: "#" },
    { title: "부대시설", link: "#" },
    { title: "서비스", link: "#" },
    { title: "예약", link: "#" },
    { title: "커뮤니티", link: "#" },
  ];
  const subData = {
    menu1: [
      { title: "펜션소개", link: "#" },
      { title: "전경소개", link: "#" },
      { title: "오시는길", link: "#" },
    ],
    menu2: [
      { title: "A101호(침대)", link: "#" },
      { title: "A102호(침대)", link: "#" },
      { title: "A103호(온돌)", link: "#" },
      { title: "B201호(침대)", link: "#" },
      { title: "B202호(침대)", link: "#" },
      { title: "B203호(온돌)", link: "#" },
    ],
    menu3: [
      { title: "개별바비큐장", link: "#" },
      { title: "노래방", link: "#" },
    ],
    menu4: [
      { title: "바비큐&숯&그릴", link: "#" },
      { title: "식사", link: "#" },
    ],
    menu5: [
      { title: "실시간예약", link: "#" },
      { title: "요금가이드", link: "#" },
    ],
    menu6: [
      { title: "공지사항", link: "#" },
      { title: "갤러리", link: "#" },
    ],
  };

  const handleDisplay = (event, index) => {
    const selected = document.getElementsByClassName("sub-box")[index];
    if (event.type === "mouseover") {
      selected.style.maxHeight = "15rem";
    } else {
      selected.style.maxHeight = "0";
    }
  };

  return (
    <>
      <ul>
        {menu.map((item, index) => (
          <li key={index} className="nav-item" onMouseOver={(event) => handleDisplay(event, index)} onMouseOut={(event) => handleDisplay(event, index)}>
            <Link href={item.link}>
              <a>{item.title}</a>
            </Link>
            <Subnav data={subData[`menu${index + 1}`]} />
          </li>
        ))}
      </ul>
      <style jsx>
        {`
          .nav-item {
            display: inline-block;
            position: relative;
            font-size: 1.1rem;
          }
          .nav-item a {
            display: block;
            color: white;
            padding: 3rem;
            transition: color ease 0.3s;
          }
          .nav-item a:hover {
            color: #ffaaaa;
          }
        `}
      </style>
    </>
  );
};

export default Nav;
