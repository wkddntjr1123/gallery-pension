import { useEffect, useState } from "react";
import Mobile from "../Mobile";
import Nav from "./Nav";
import Router from "next/router";

const Header = ({ children }) => {
  const [isTop, setIsTop] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  //라우터이동 이벤트 시 nav닫기
  Router.events.on("routeChangeStart", (url) => {
    setIsOpen(false);
    document.getElementById("menus").style.height = "0px";
  });

  useEffect(() => {
    document.addEventListener("scroll", () => {
      let currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollTop === 0) {
        setIsTop(true);
      } else {
        setIsTop(false);
      }
    });
  }, []);
  //**height auto에 transition 주기**//
  useEffect(() => {
    if (!document.getElementById("hamburger")) {
      return false;
    }
    window.toggleExpand = function (element) {
      if (!element.style.height || element.style.height == "0px") {
        setIsOpen(true);
        element.style.height =
          Array.prototype.reduce.call(
            element.childNodes,
            function (p, c) {
              return p + (c.offsetHeight || 0);
            },
            0,
          ) + "px";
      } else {
        setIsOpen(false);
        element.style.height =
          Array.prototype.reduce.call(
            element.childNodes,
            function (p, c) {
              return p + (c.offsetHeight || 0);
            },
            0,
          ) + "px";
        setTimeout(() => {
          element.style.height = "0px";
        }, 50);
      }
    };
    document.getElementById("hamburger").addEventListener("click", () => {
      toggleExpand(document.getElementById("menus"));
    });
    document.getElementById("menus").addEventListener("transitionend", (event) => {
      if (event.target.style.height !== "0px") {
        event.target.style.height = "auto";
      }
    });
  }, []);

  return (
    <>
      <header id="header" className="header">
        <Mobile>
          <div className="mb-header">
            <div className="mb-logo">갤러리펜션</div>
            <div id="hamburger" className="mb-bar">
              ☰
            </div>
          </div>
        </Mobile>
        <Nav isOpen={isOpen} />
      </header>
      <style jsx>
        {`
          .header {
            display: flex;
            position: fixed;
            top: 0;
            justify-content: flex-end;
            align-items: center;
            width: 100%;
            height: ${isTop ? "6rem" : "4rem"};
            background-color: ${isTop ? "transparent" : "white"};
            color: ${isTop ? "#e4f0ff;" : "#292929"};
            transition: color ease-in-out 0.3s, height ease-in-out 0.5s, background-color ease-in-out 0.5s;
            z-index: 100;
          }
          li {
            list-style: none;
            font-size: 1.7rem;
            margin-left: 3rem;
            font-weight: bold;
            letter-spacing: 0.2rem;
          }
          @media screen and (max-width: 820px) {
            .header {
              display: block;
              height: 3.1rem;
              background-color: white;
              color: inherit;
            }
            .mb-header {
              display: flex;
              width: 100%;
              height: 100%;
              position: relative;
              justify-content: center;
            }
            .mb-logo {
              margin: auto;
            }
            .mb-bar {
              position: absolute;
              top: 50%;
              right: 2vh;
              transform: translateY(-50%);
              cursor: pointer;
            }
          }
        `}
      </style>
    </>
  );
};

export default Header;
