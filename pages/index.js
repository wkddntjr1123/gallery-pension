import ReactDOM from "react-dom";
import { useEffect } from "react";
import { NaverMap, RenderAfterNavermapsLoaded } from "../components/components";

export default function Home() {
  useEffect(async () => {
    const NaverMap = (await import("../components/NaverMaps")).NaverMap;
    const RenderAfterNavermapsLoaded = (await import("../components/NaverMaps")).RenderAfterNavermapsLoaded;
    const map = (
      <RenderAfterNavermapsLoaded ncpClientId={"5qykfsbn5o"} error={<p>Maps Load Error</p>} loading={<p>Maps Loading...</p>}>
        <NaverMap
          mapDivId={"map-wrapper"} // default: react-naver-map
          style={{
            width: "50rem",
            height: "25rem",
          }}
          defaultCenter={{ lat: 37.554722, lng: 126.970833 }} // 지도 초기 위치
          defaultZoom={13}
        />
      </RenderAfterNavermapsLoaded>
    );
    ReactDOM.render(map, document.getElementById("map-wrapper"));
  });

  return (
    <>
      <div className="test">
        <div className="imageBox">이미지1</div>
        <div id="map-wrapper"></div>
      </div>
      <style jsx>{`
        .test {
          background-color: #ffd6d6;
        }
        .imageBox {
          height: 20rem;
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
