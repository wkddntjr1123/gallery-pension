import { useEffect, useState } from "react";

const Header = ({ children }) => {
  const [isTop, setIsTop] = useState(true);

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

  return (
    <>
      <header id="header" className="header">
        {children}
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
        `}
      </style>
    </>
  );
};

export default Header;
