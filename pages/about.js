import Slider from "../components/Slider";
import NaverMaps from "../components/about/NaverMaps";
import { useAppContext } from "../libs/Context";

export default function Home() {
  const { isMobile } = useAppContext();
  const src = ["/pictures/view1.jpeg", "/pictures/view2.jpeg", "/pictures/view3.jpeg", "/pictures/view4.jpeg", "/pictures/view5.jpeg", "/pictures/view6.jpeg"];

  return (
    <>
      <div className="container">
        <Slider src={src} />
        <section className="about-section">
          <div className="row" data-aos="zoom-in-up" data-aos-duration="2000">
            <div className="left-about">
              <p>
                강원도 양양 상류계곡에 위치한
                <br />
                자연 공간 <span className="highlight green">갤러리펜션</span>
              </p>
              <h2>ABOUT</h2>
              <div className="seperate-line">∎</div>
            </div>
            <div className="right-about">
              <p>
                <span className="highlight blue">양양의 청정계곡</span> 바로 옆에 위치한 최상의 휴양지
              </p>
              <p>
                맑은 물소리가 들리는 <span className="highlight brown">개별 테라스 바베큐장</span>에서 만찬
              </p>
              <p>계곡 물소리를 들으며 잠드는 밤</p>
              <p>자연과 함께 즐거운 시간 되십시오</p>
            </div>
          </div>
        </section>
        <section className="way-section">
          <div className="map-title">
            <h2 id="location">LOCATE US</h2>
          </div>

          <NaverMaps />
        </section>
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
          color: #636363;
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
        .left-about > p,
        h2 {
          margin: 0 0 1rem 0;
          text-align: center;
          line-height: 1.5rem;
        }
        .left-about h2 {
          color: black;
        }
        .highlight {
          font-size: 1.2rem;
        }
        .green {
          color: #7dd268;
        }
        .blue {
          color: #6494ff;
        }
        .brown {
          color: #9c5959;
        }
        .right-about {
          display: inline-flex;
          flex-direction: column;
          gap: 1rem 0;
          width: 50%;
        }
        .right-about p {
          font-size: 1.1rem;
          line-height: 1.8rem;
        }

        .map-title {
        }
        .map-title h2 {
          text-align: center;
          font-weight: bold;
          margin: 3rem 0;
        }
        .map-title p {
          text-align: center;
          font-weight: bold;
        }
      `}</style>
    </>
  );
}
