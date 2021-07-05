import { useAppContext } from "../../libs/Context";
import Link from "next/link";
import { useEffect } from "react";
const MobileBar = () => {
  const { isMobile, isTop } = useAppContext();

  useEffect(() => {
    if (!isMobile) {
      return false;
    }
  }, []);
  const goTop = () => {
    window.scroll({
      behavior: "smooth",
      left: 0,
      top: 0,
    });
  };
  return (
    <>
      {isMobile && (
        <>
          <Link href="tel:010-3078-6656">
            <a>
              <svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 0 24 24" width="22px" fill="#000000">
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M6.54 5c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79h1.51m9.86 12.02c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75l1.2-1.19M7.5 3H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1-1.24 0-2.45-.2-3.57-.57-.1-.04-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2c-2.83-1.45-5.15-3.76-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1z" />
              </svg>
            </a>
          </Link>
          <Link href="#">
            <a onClick={goTop}>
              <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="22px" viewBox="0 0 24 24" width="22px" fill="white">
                <rect fill="none" height="24" width="24" />
                <path d="M5,9l1.41,1.41L11,5.83V22H13V5.83l4.59,4.59L19,9l-7-7L5,9z" />
              </svg>
            </a>
          </Link>
        </>
      )}
      <style jsx>{`
        a {
          position: fixed;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.8);
          width: 40px;
          height: 40px;
          border-radius: 100%;
          right: 6px;
          bottom: 0;
          box-shadow: 0.5px 0.9px 5px 0 rgb(36 36 36 / 20%);
          border: solid 1px #c6c6c6;
          transition: bottom 0.5s;
        }
        a:nth-child(2) {
          bottom: ${isTop ? "0.6rem" : "3.6rem;"};
        }
        a:nth-child(3) {
          visibility: ${isTop ? "hidden" : "visible"};
          bottom: ${isTop ? "0" : "0.6rem"};
          background-color: #4c4b4a;
          border: solid 1px #808080;
        }
      `}</style>
    </>
  );
};

export default MobileBar;
