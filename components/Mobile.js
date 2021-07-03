import React from "react";
import { useMediaQuery } from "react-responsive";

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({
    query: "(max-width:820px)",
  });
  return <React.Fragment>{isMobile && children}</React.Fragment>;
};

export default Mobile;
