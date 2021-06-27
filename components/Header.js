import { useEffect, useState } from "react";

const Header = ({ children }) => {
  useEffect(() => {
    let beforeScrollTop = 0;
    document.addEventListener("scroll", () => {
      let headerElement = document.getElementById("header");
      let currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (currentScrollTop > beforeScrollTop) {
        headerElement.classList.add("scroll-down");
      } else {
        headerElement.classList.remove("scroll-down");
      }
      beforeScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
    });
  }, []);

  return (
    <>
      <header id="header" className="header scroll-top">
        {children}
      </header>
      <style jsx>
        {`
          .header {
            display: flex;
            position: fixed;
            top: 0;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 6rem;
            background-color: rgba(34, 34, 34, 0.7);
            transition: top ease 1s, background-color ease 1s;
            z-index: 100;
          }
          .scroll-down {
            top: -6.5rem;
          }
        `}
      </style>
    </>
  );
};

export default Header;
