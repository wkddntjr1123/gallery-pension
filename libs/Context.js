import { createContext, useContext, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

const AppContext = createContext();

export function AppWrapper({ children }) {
  //모바일기기인지 나타내는 state
  const isMobile = useMediaQuery({
    query: "(max-width:820px)",
  });
  const [isTop, setIsTop] = useState(true); //스크롤이 Top인지 나타내는 state

  //스크롤 Top계산 이벤트
  useEffect(() => {
    const scrollEvent = () => {
      let currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollTop === 0) {
        setIsTop(true);
      } else {
        setIsTop(false);
      }
    };

    document.addEventListener("scroll", scrollEvent);
    return () => document.removeEventListener("scroll", scrollEvent);
  }, []);

  return (
    <AppContext.Provider value={{ isMobile: isMobile, isTop }}>
      {children}
      {isMobile && (
        <style jsx global>{`
          .main {
            margin-top: 3.5rem;
          }
        `}</style>
      )}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
