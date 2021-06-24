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
          font-size: initial;
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
    { title: "메뉴1", link: "#" },
    { title: "메뉴2", link: "#" },
    { title: "메뉴3", link: "#" },
    { title: "메뉴4", link: "#" },
    { title: "메뉴5", link: "#" },
    { title: "메뉴6", link: "#" },
  ];
  const subData = {
    menu1: [
      { title: "test1", link: "#" },
      { title: "test2", link: "#" },
      { title: "test3", link: "#" },
    ],
    menu2: [
      { title: "test1", link: "#" },
      { title: "test2", link: "#" },
    ],
    menu3: [
      { title: "test1", link: "#" },
      { title: "test2", link: "#" },
    ],
    menu4: [
      { title: "test1", link: "#" },
      { title: "test2", link: "#" },
    ],
    menu5: [
      { title: "test1", link: "#" },
      { title: "test2", link: "#" },
    ],
    menu6: [
      { title: "test1", link: "#" },
      { title: "test2", link: "#" },
    ],
  };

  const handleDisplay = (event, index) => {
    const selected = document.getElementsByClassName("sub-box")[index];
    if (event.type === "mouseover") {
      selected.style.maxHeight = "10rem";
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
            font-weight: bold;
          }
          .nav-item a {
            display: block;
            color: white;
            padding: 3rem;
            transition: color ease 0.3s;
          }
          .nav-item a:hover {
            color: rgba(255, 88, 37, 0.767);
          }
        `}
      </style>
    </>
  );
};

export default Nav;
