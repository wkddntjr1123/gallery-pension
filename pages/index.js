import ReactDOM from "react-dom";
import { useEffect } from "react";

export default function Home() {
  return (
    <>
      <div className="test"></div>
      <style jsx>{`
        .test {
          height: 100vh;
          background-color: #ffd6d6;
        }
      `}</style>
    </>
  );
}
