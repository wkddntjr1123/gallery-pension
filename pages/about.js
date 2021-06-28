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
        <section data-aos="zoom-in-up" data-aos-duration="2000" className="about-section">
          <div className="row">
            <div className="left-about">
              <h5>
                어쩌구저쩌구
                <br />
                어쩌구저쩌구어쩌구저쩌구
              </h5>
              <h2>ABOUT</h2>
              <div className="seperate-line">∎</div>
            </div>
            <div className="right-about">
              <p>어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구</p>
              <p>어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구</p>
              <p>어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구</p>
            </div>
          </div>
        </section>
        <div className="map-wrapper section2">
          <div data-aos="fade-up" data-aos-duration="2000" className="map-title">
            <h2>오시는길</h2>
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
        .seperate-line {
          color: #ffc300;
          margin: 0 auto;
          width: 8rem;
          text-align: center;
          line-height: 0rem;
          margin-top: 1.5rem;
        }
        .seperate-line::before {
          float: left;
          display: block;
          width: 40%;
          content: " ";
          border: 1px solid #ffc300;
        }
        .seperate-line::after {
          float: right;
          display: block;
          width: 40%;
          content: " ";
          border: 1px solid #ffc300;
        }
        .about-section {
          width: 80%;
          margin: auto;
          padding: 5rem 0;
        }
        .row {
          display: flex;
          justify-content: space-around;
          align-items: center;
        }
        .left-about {
          display: inline-block;
          width: 50%;
        }
        .left-about > h5,
        h2 {
          margin: 0 0 1rem 0;
          text-align: center;
          line-height: 1.5rem;
        }
        .right-about {
          display: inline-block;
          width: 50%;
        }
        .right-about p {
          font-size: 1.1rem;
          line-height: 1.8rem;
        }

        .map-wrapper {
          max-width: calc(100% - 60px);
          margin: auto;
        }
        .map-title {
        }
        .map-title h2 {
          text-align: center;
          font-weight: bold;
        }
        .map-title p {
          text-align: center;
          font-weight: bold;
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
