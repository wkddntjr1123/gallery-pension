import { useEffect } from "react";

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
    const contentString = ['<div class="infowindow">', "   <h3>갤러리펜션</h3>", "   <p>강원도 양양군 현북면 면옥치길 285</p>", "</div>"].join("");

    const infowindow = new naver.maps.InfoWindow({
      content: contentString,
    });
    infowindow.open(map, marker);
  }, []);

  return (
    <>
      <div id="map"></div>

      <style jsx>
        {`
          #map {
            margin: auto;
            height: 540px;
            box-shadow: 0px 0px 3px 1px #d0d0d0;
          }
        `}
      </style>
    </>
  );
};

export default NaverMaps;
