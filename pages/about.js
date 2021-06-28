import { Slider, NaverMaps } from "../components/components";

export default function Home() {
  const iconStyleProps = {
    primaryFill: "purple",
    className: "iconClass",
  };
  return (
    <>
      <div className="test">
        <Slider />
        <div className="map-wrapper">
          <div className="map-title">
            <h2>MAP & LOCATION</h2>
            <p>sdfjskdfjsdkjfksd</p>
          </div>
          <NaverMaps />
          <div className="map-info">
            <ul>
              <li>주소</li>
              <li>강원도 양양군 현북면 면옥치길 285</li>
            </ul>
            <ul>
              <li>전화</li>
              <li>010-XXXX-XXXX</li>
            </ul>
            <ul>
              <li>오시는길</li>
              <li>양양IC에서 20분</li>
              <li>계곡물줄기를 따라 신호등도 없는 깨끗한 도로이므로 경치구경하는 드라이브코스로도 매우 좋습니다.</li>
              <li>도로명 주소 : 강원 양양군 현북면 면옥치길 285</li>
            </ul>
          </div>
        </div>
      </div>
      <style jsx>{`
        .map-wrapper {
          max-width: calc(100% - 60px);
          margin: auto;
        }
        .map-title {
        }
        .map-title h2 {
          text-align: center;
          font-weight: bold;
          //opacity: 0;
          padding-top: 20px;
          transition: 0.5s padding ease, 0.5s opacity ease;
        }
        .map-info {
        }
        .map-info ul {
          font-size: 1.7rem;
          width: 50%;
          display: inline-block;
        }
      `}</style>
    </>
  );
}
