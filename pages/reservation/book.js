import HeadImage from "../../components/layout/HeadImage";
import SlideTabs from "../../components/SlideTabs";

export default function Reservation() {
  const mobileData = {
    title: "실시간예약", //string
    src: ["/pictures/view1.jpeg", "/pictures/view1.jpeg"], //array
  };
  const pcData = {
    title: "RESERVATION", //string
    src: "/test.png", //string
    menus: [
      //array
      { menu: "이용안내", link: "/reservation" },
      { menu: "실시간예약", link: "/reservation/book", isActive: true },
    ],
    subtitle: "실시간예약", //string
  };

  const tabData = { title: ["예약안내", "실시간예약", "예약확인/취소"], contents: [<Tab1 />, "내용2", <Tab3 />] };

  return (
    <>
      <HeadImage mobileData={mobileData} pcData={pcData} />
      <section>
        <SlideTabs {...tabData} />
      </section>
      <style jsx>{`
        section {
          max-width: 1240px;
          margin: auto;
          padding: 0 4rem;
        }
        @media screen and (max-width: 820px) {
          section {
            padding: 0 1rem;
          }
        }
      `}</style>
    </>
  );
}

const Tab1 = () => {
  return (
    <>
      <div>
        <h4>
          <span>01.</span> 객실안내
        </h4>
        <table className="room">
          <thead>
            <tr>
              <th rowSpan="2">객실명</th>
              <th rowSpan="2">사이즈</th>
              <th colSpan="2">인원</th>
              <th rowSpan="2">비수기</th>
              <th colSpan="2">성수기</th>
            </tr>
            <tr>
              <th>기준</th>
              <th>최대</th>
              <th>주중</th>
              <th>주말</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>A101</td>
              <td>x평</td>
              <td>4</td>
              <td>6</td>
              <td>200,000</td>
              <td>200,000</td>
              <td>200,000</td>
            </tr>
            <tr>
              <td>A102</td>
              <td>x평</td>
              <td>4</td>
              <td>6</td>
              <td>200,000</td>
              <td>200,000</td>
              <td>200,000</td>
            </tr>
            <tr>
              <td>A103</td>
              <td>x평</td>
              <td>4</td>
              <td>6</td>
              <td>200,000</td>
              <td>200,000</td>
              <td>200,000</td>
            </tr>
            <tr>
              <td>B201</td>
              <td>x평</td>
              <td>4</td>
              <td>6</td>
              <td>200,000</td>
              <td>200,000</td>
              <td>200,000</td>
            </tr>
            <tr>
              <td>B202</td>
              <td>x평</td>
              <td>4</td>
              <td>6</td>
              <td>200,000</td>
              <td>200,000</td>
              <td>200,000</td>
            </tr>
            <tr>
              <td>B203</td>
              <td>x평</td>
              <td>4</td>
              <td>6</td>
              <td>200,000</td>
              <td>200,000</td>
              <td>200,000</td>
            </tr>
          </tbody>
        </table>

        <h4>
          <span>02.</span> 기본예약안내
        </h4>
        <div className="content-box">
          <p>객실 예약은 전화 및 인터넷 예약으로 가능합니다.</p>
          <p>이용은 예약 및 비예약으로 가능하나 예약손님을 우선으로 적용하오니 예약을 하시는 것이 더욱 편리합니다.</p>
          <p>전화 예약후 객실 예약 금액을 입금계좌로 입금하시면 예약 완료됩니다.</p>
          <p>예약후 6시간 안에 객실 요금을 완불해주셔야합니다.(※미입금시 자동 예약됩니다.)</p>
          <p>당일 또는 하루전 그리고 마지막 남은 객실예약은 예약신청 후 2시간 안에 입금하셔야 합니다.</p>
          <p>예약금 입금시 예약자 이름으로 하셔야 합니다.(다른 이름으로 입금하신 경우 꼭 전화로 알려주세요.)</p>
          <p>성수기 기간은 실시간 예약 페이지를 참고해주세요. </p>
          <p>※ 예약시 환불 기준을 숙지하시고 예약하시기 바랍니다.</p>
          <p>※ 성수기기간 실시간예약달력 또는 공지사항</p>
          <p>※ 기준인원 초과시 1인당 20,000원의 요금이 추가됩니다. (영유아, 아동 포함 / 예약시에 꼭 말씀해주세요)</p>
          <p>※ 바베큐 이용시 숯불은 오후3시~오후8시까지 불피워드립니다. (11시까지 운영)</p>
          <p>※ 월요일~목요일 - 주중요금 / 금요일~일요일 및 공휴일 전날 - 주말요금이 적용됩니다</p>
          <p>※ 입금은 꼭 예약자명으로 해주시고 입금자명이 상이할 경우 꼭 전화주세요.</p>
          <p>※ 예약후 6시간안에 전액 입금하시고 입금확인이 안되면 별도의 통보없이 예약취소 처리 됩니다.</p>
          <p>※ 펜션이나 캠핑 예약에 궁금하신 점은 전화나 게시판으로 문의해주시면 친철하게 안내해 드립니다.​ ​</p>
          <p>※​ 객실내에는 화재 위험 있는 양초,풍선 부착등을 삼가해주세요.</p>
          <p>※​ 객실내에서는 금연이며 생선,해물등 냄새 심한 음식은 객실내에서는 조리할수 없습니다.​</p>
        </div>

        <h4>
          <span>03.</span> 환불규정
        </h4>
        <div className="content-box">
          <p>올바른 예약문화의 정착을 위하여 불가피한 조치이오니 양해 부탁드립니다.</p>
          <p>환불 적용은 이용요금 100% 입금시에만 적용합니다.</p>
          <p>객실과 날짜는 신중히 생각하시고 결정해주시기 바랍니다.</p>
          <p>No-Show 예약건에 대해서는 환불이 불가합니다</p>
          <p>예약일 변경시 발생한 수수료도 수수료와 동일합니다.</p>
          <p>예약시 환불기준을 숙지하시고 예약하시기 바랍니다.</p>
          <table className="fee">
            <thead>
              <tr>
                <th>기준</th>
                <th>취소수수료(%)</th>
                <th>환불액(%)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>이용일 당일</td>
                <td>100%</td>
                <td>0%(환불없음)</td>
              </tr>
              <tr>
                <td>이용일 1일전</td>
                <td>90%</td>
                <td>10%</td>
              </tr>
              <tr>
                <td>이용일 2일전</td>
                <td>80%</td>
                <td>20%</td>
              </tr>
              <tr>
                <td>이용일 3일전</td>
                <td>70%</td>
                <td>30%</td>
              </tr>
              <tr>
                <td>이용일 4일전</td>
                <td>60%</td>
                <td>40%</td>
              </tr>
              <tr>
                <td>이용일 5일전</td>
                <td>50%</td>
                <td>50%</td>
              </tr>
              <tr>
                <td>이용일 6일전</td>
                <td>40%</td>
                <td>60%</td>
              </tr>
              <tr>
                <td>이용일 7일전</td>
                <td>10%</td>
                <td>90%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <style jsx>
        {`
          h4 {
            padding-bottom: 0.2rem;
            margin-bottom: 1rem;
            border-bottom: 1px solid #c9c9c9;
            color: #904200;
          }
          h4 span {
            color: #d86e00;
          }
          .highlight {
            color: rgba(219, 205, 0, 0.932);
            font-size: 1.8rem;
          }
          .content-box {
            box-shadow: 0px 0px 3px 2px #e8e8e8;
            padding: 1rem;
            border-radius: 3px;
            margin-bottom: 3rem;
          }
          .content-box p {
            line-height: 2rem;
          }
          table.room {
            width: 100%;
            margin-top: 1rem;
            border-radius: 0.3rem;
            box-shadow: 0px 0px 5px 1px #dadada;
            overflow: hidden;
            text-align: center;
          }

          table.fee {
            width: 100%;
            margin-top: 1rem;
            border-radius: 0.3rem;
            box-shadow: 0px 0px 5px 1px #dadada;
            overflow: hidden;
            text-align: center;
          }
          table.fee td,
          table.room td {
            padding: 0.6rem;
            border: 1px solid #e6e6e6;
          }
          table.fee thead tr,
          table.room thead tr {
            background-color: #7b7b7b;
          }
          table.fee thead th,
          table.room thead th {
            vertical-align: middle;
            padding: 0.6rem;
            color: white;
            font-weight: bold;
            border: 1px solid #9c9c9c;
          }
          table.fee tbody tr:nth-child(2n),
          table.room tbody tr:nth-child(2n) {
            background-color: #f3f3f3;
          }
          @media screen and (max-width: 820px) {
            table.room,
            table.fee {
              font-size: 0.8rem;
            }
            table.room thead tr th,
            table.fee thead tr th {
              padding: 0.6rem 0.1rem;
            }
            table.room tbody tr td,
            table.fee tbody tr td {
              padding: 0.7rem 0.1rem;
              vertical-align: middle;
            }

            .content-box {
              padding: 1rem 0.4rem;
              font-size: 0.9rem;
            }
            .content-box p {
              padding: 0.4rem 0;
              line-height: 1.4rem;
            }
            .content-box p::before {
              content: "· ";
            }
          }
        `}
      </style>
    </>
  );
};

const Tab3 = () => {
  return (
    <>
      <div className="container">
        <label>예약자명</label>
        <div className="name">
          <input type="text" />
        </div>
        <label>휴대폰번호</label>
        <div className="phone">
          <div>
            <select defaultValue="010">
              <option value="010">010</option>
              <option value="011">011</option>
              <option value="016">016</option>
              <option value="017">017</option>
            </select>
          </div>
          <span>-</span>
          <div>
            <input type="text" />
          </div>
          <span>-</span>
          <div>
            <input type="text" />
          </div>
        </div>
        <button type="button">예약조회</button>
      </div>
      <style jsx>{`
        .container {
          max-width: 500px;
          margin: 4rem auto 6rem auto;
          padding: 5rem;
          box-shadow: 0px 0px 6px 1px #c7c7c7;
          font-family: "Noto Sans CJK KR";
          font-size: 1rem;
        }
        label {
          display: block;
          margin: 0 0 0.5rem 0.3rem;
          color: #525252;
        }
        .name {
          margin-bottom: 2rem;
        }
        .phone {
          margin-bottom: 3rem;
        }
        select,
        input,
        button {
          height: 3rem;
        }
        .name input {
          width: 100%;
          display: block;
          border: 1px solid #c3c3c3;
          border-radius: 5px;
          text-align: center;
          color: #8b8b8b;
          font-family: inherit;
        }
        .phone {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .phone div {
          width: 30.333%;
        }
        .phone select,
        .phone input {
          display: block;
          width: 100%;
          border: 1px solid #c3c3c3;
          border-radius: 5px;
          text-align: center;
          color: #8b8b8b;
          font-family: inherit;
        }
        .phone select {
          text-align-last: center;
          -ms-text-align-last: center;
          -moz-text-align-last: center;
        }
        select option {
          background: rgba(255, 255, 255, 0.3);
          color: #8b8b8b;
          text-shadow: 0 1px 0 rgba(0, 0, 0, 0.4);
        }

        button {
          display: block;
          width: 100%;
          color: white;
          background-color: #e2573c;
          box-shadow: 0px 0px 8px 0px #dcdcdc;
          border: none;
          cursor: pointer;
          border-radius: 5px;
          font-family: inherit;
          transition: background-color 0.5s ease;
        }
        button:hover {
          background-color: #d82a08;
        }
        @media screen and (max-width: 820px) {
          .container {
            max-width: 400px;
            width: 100%;
            padding: 10% 1.5rem;
            margin: 2rem auto 3rem auto;
            border-radius: 3px;
            font-size: 0.9rem;
          }
          .container label,
          div,
          button {
            max-width: 300px;
          }
          label {
            max-width: 300px;
            display: block;
            margin: 0 auto 0.5rem auto !important;
          }

          select,
          input,
          button {
            height: 2.2rem;
            margin: auto !important;
          }
          .name {
            margin: 0 auto 5% auto;
          }
          .phone {
            margin: 0 auto 10% auto;
          }
        }
      `}</style>
    </>
  );
};
