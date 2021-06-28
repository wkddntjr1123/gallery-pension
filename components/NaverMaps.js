import { useEffect, useState } from "react";

const NaverMaps = () => {
  useEffect(() => {
    const container = document.getElementById("map");

    const options = {
      center: new naver.maps.LatLng(37.948642161999715, 128.6220314407252),
      zoom: 18,
    };
    const map = new naver.maps.Map("map", options);

    const marker = new naver.maps.Marker({
      position: new naver.maps.LatLng(37.948672161999715, 128.6220314407252),
      animation: naver.maps.Animation.DROP,
      map: map,
    });
  }, []);

  return (
    <>
      <div id="map"></div>

      <style jsx>
        {`
          #map {
            margin: auto;
            height: 540px;
          }
        `}
      </style>
    </>
  );
};

export default NaverMaps;
