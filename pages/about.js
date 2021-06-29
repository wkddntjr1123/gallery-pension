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
        <section className="about-section">
          <div className="row">
            <div className="left-about">
              <h5 data-aos="zoom-in-up" data-aos-duration="2000">
                어쩌구저쩌구
                <br />
                어쩌구저쩌구어쩌구저쩌구
              </h5>
              <h2 data-aos="zoom-in-up" data-aos-duration="2000">
                ABOUT
              </h2>
              <div data-aos="zoom-in-up" data-aos-duration="2000" className="seperate-line">
                ∎
              </div>
            </div>
            <div className="right-about">
              <p data-aos="zoom-in-up" data-aos-duration="2000">
                어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구
              </p>
              <p data-aos="zoom-in-up" data-aos-duration="2000">
                어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구
              </p>
              <p data-aos="zoom-in-up" data-aos-duration="2000">
                어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구
              </p>
            </div>
          </div>
        </section>
        <section className="way-section">
          <div data-aos="fade-up" data-aos-duration="2000" className="map-title">
            <h2>LOCATE US</h2>
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
