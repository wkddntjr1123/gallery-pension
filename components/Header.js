import { useEffect, useState } from "react";

const Header = ({ children }) => {
  useEffect(() => {
    let beforeScrollTop = 0;
    document.addEventListener("scroll", () => {
      let currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollTop > beforeScrollTop) {
        document.getElementById("header").classList.add("scroll-down");
      } else {
        document.getElementById("header").classList.remove("scroll-down");
      }
      beforeScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
    });
  }, []);

  return (
    <>
      <div id="header" className="header">
        {children}
      </div>
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
            transition: top ease 0.4s;
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
