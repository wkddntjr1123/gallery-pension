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
    const contentString = `
      <div class="tttt" style="border-radius: 10px; font-size: 1rem; text-align: center; padding: 0.7rem 2rem; background-color: white; box-shadow: 0px 0px 8px 1px #a5a5a5; position:relative; top:-5px;">
        <p style="color:#737373;">강원도 양양군 현북면 면옥치길 285</p>
      </div>
    `;

    const infowindow = new naver.maps.InfoWindow({
      content: contentString,
      disableAnchor: true,
      borderWidth: 0,
      backgroundColor: "transparent",
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
          @media screen and (max-width: 820px) {
            #map {
              height: 250px;
            }
          }
        `}
      </style>
    </>
  );
};

export default NaverMaps;
