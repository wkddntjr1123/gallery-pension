import ReactDOM from "react-dom";
import { useEffect } from "react";
import { Slider } from "../components/components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  useEffect(async () => {
    const NaverMap = (await import("../components/NaverMaps")).NaverMap;
    const RenderAfterNavermapsLoaded = (await import("../components/NaverMaps")).RenderAfterNavermapsLoaded;
    const Marker = (await import("../components/NaverMaps")).Marker;
    const navermaps = window.naver;
    const map = (
      <RenderAfterNavermapsLoaded ncpClientId={"5qykfsbn5o"} error={<p>Maps Load Error</p>} loading={<p>Maps Loading...</p>}>
        <NaverMap
          mapDivId={"map-wrapper"} // default: react-naver-map
          style={{
            width: "50rem",
            height: "25rem",
          }}
          defaultCenter={{ lat: 37.948642161999715, lng: 128.6220314407252 }} // 지도 초기 위치
          defaultZoom={19}>
          <Marker
            position={{ lat: 37.948682162999715, lng: 128.62203144072524 }}
            title="갤러리펜션"
            onClick={() => {
              alert("여기는 네이버 입니다.");
            }}
          />
        </NaverMap>
      </RenderAfterNavermapsLoaded>
    );
    ReactDOM.render(map, document.getElementById("map-wrapper"));
  });

  return (
    <>
      <div className="test">
        <Slider />
        <div id="map-wrapper"></div>
      </div>
      <style jsx>{`
        .test {
          background-color: #ffd6d6;
        }
        #map-wrapper {
          width: 100%;
          display: flex;
          justify-content: center;
        }
      `}</style>
    </>
  );
}
