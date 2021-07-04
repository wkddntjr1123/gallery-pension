import { useMediaQuery } from "react-responsive";

const isMobile = () => {
  const isMobile = useMediaQuery({
    query: "(max-width:820px)",
  });
  return isMobile;
};

export default isMobile;
