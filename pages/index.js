import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({});
  });
  return (
    <>
      <div className="container"></div>
      <div data-aos="zoom-out-down" data-aos-duration="3000" style={{ width: "300px", height: "300px", background: "blue" }}></div>
      <style jsx>{`
        .container {
          height: 200vh;
        }
      `}</style>
    </>
  );
}
