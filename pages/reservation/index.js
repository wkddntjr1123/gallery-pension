import HeadImage from "../../components/layout/HeadImage";

export default function Info() {
  const mobileData = {
    title: "이용안내", //string
    src: ["/pictures/view1.jpeg"], //array
  };
  const pcData = {
    title: "RESERVATION", //string
    src: "/pictures/view1.jpeg", //string
    menus: [
      //array
      { menu: "이용안내", link: "/reservation", isActive: true },
      { menu: "실시간예약", link: "/reservation/service" },
    ],
    subtitle: "이용안내", //string
  };

  return (
    <>
      <HeadImage mobileData={mobileData} pcData={pcData} />
      <section className="container">
        <div className="head-text">
          <p>· 보호자 동반없는 미성년자는 이용이 불가 합니다.</p>
          <p>· 객실, 발코니에서는 절대 금연이며, 불꽃놀이를 금지합니다.</p>
          <p>· 펜션 주변 계곡이나 위험장소에서 사진 촬영이나 이용시 특별히 주의 바랍니다.(고객분의 부주의로 인한 안전사고는 펜션에서 책임지지 않습니다)</p>
          <p>· 무분별한 오락 및 음주, 고성방가로 다른 이용객에게 불편함을 주지않도록 주의해주시기 바랍니다.</p>
          <p>· 펜션 이용도중 이용자의 부주의로 인한 기물 및시설물 파손 등이 발생할 시 배상책임이 있습니다.</p>
          <p>· 애완동물의 출입은 장소가 협소한 관계로 통제하고 있습니다.</p>
          <p>· 퇴실 시 쓰레기와 음식물 쓰레기는 지정장소에 분리 배출 바라며 사용하신 식기류는 다음 손님을 위해 깨끗하게 세척해 주시기 바랍니다.</p>
          <p>· 퇴실 시 열쇠는 꼭 출입문 옆 열쇠함에 넣어주시기 바랍니다. (열쇠를 분실시 2만원 배상하셔야 합니다)</p>
        </div>
        <div className="info-box-div">
          <div className="info-box">
            <div>·입금 및 예약확인</div>
            <div>
              <p>예약 후 예약자명으로 입금 시 예약이 완료됩니다.</p>
              <p>입금 시 예약자명과 입금자명이 다를 경우 필히 확인 전화 주십시오.</p>
              <p>실시간예약 달력으로 예약시 발송되는 문자(객실,투숙일,요금)를 확인하세요.</p>
            </div>
          </div>
          <div className="info-box">
            <div>·최대인원 초과시</div>
            <div>
              <p>최대인원 초과시 입실 및 환불이 불가합니다.</p>
              <p>기준인원 초과시 성인~취학 1인당 2만원, 미취학~12개월 전 영·유아 1만원이 발생합니다.</p>
              <p>*추가 금액은 비/성수기 동일합니다.</p>
            </div>
          </div>
          <div className="info-box">
            <div>·입실시간</div>
            <div>
              <p className="color-red">이용당일 15:00 ~ 22:00 까지입니다.</p>
              <p>입실시간의 변동이 있을 경우 펜션으로 연락 바랍니다.</p>
              <p>객실 정리 시간이 11:00부터 15:00까지이므로, 15시 이전 입실은 어렵습니다.</p>
              <p>객실은 예약 확인 후에 안내받을 수 있습니다.</p>
            </div>
          </div>
          <div className="info-box">
            <div>·퇴실시간</div>
            <div>
              <p className="color-red">마지막 이용일 오전 11시까지입니다.</p>
              <p>객실정리 후 퇴실점검시 객실키를 반납해 주세요.</p>
            </div>
          </div>
          <div className="info-box">
            <div>·취사 및 바베큐</div>
            <div>
              <p>객실내에서는 육류(삼겹살/튀김류)를 직화방식으로 조리하실 수 없습니다.</p>
              <p>냄새가 심한 음식(생선류/찌개류)은 야외에서 조리해주시기 바랍니다.(버너 무료 대여 가능)</p>
              <p>개별바베큐 이용시간 : 15:00~22:00</p>
              <p>공동바베큐장 이용시간 : 15:00~22:00 </p>
            </div>
          </div>
          <div className="info-box">
            <div>·성수기 기간</div>
            <div>
              <p>2021년 : 7월17~8월22일 까지</p>
              <p>연중 국, 공휴일 또는 대체 휴무일 하루 전날</p>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        .container {
          max-width: 1240px;
          margin: auto;
          padding: 0 5%;
          font-size: 95%;
          color: #616161;
        }
        .head-text {
          margin: 3rem 0 2rem 0;
        }
        .head-text p {
          line-height: 2rem;
          color: #181818;
        }
        .info-box {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          border-top: 1px solid rgb(212, 212, 212);
          gap: 13%;
        }
        .info-box:last-child {
          border-bottom: 1px solid rgb(212, 212, 212);
        }
        .info-box div {
          padding: 2.5rem 0;
        }
        .info-box div:first-child {
          display: inline-block;
          width: 17%;
          color: #904200;
          font-weight: bold;
        }
        .info-box div:last-child {
          display: inline-block;
        }
        .info-box div:last-child p {
          line-height: 1.8rem;
        }
        .color-red {
          color: #ff500d;
        }
        @media screen and (max-width: 1000px) {
          .info-box {
            gap: 2%;
          }
        }
        @media screen and (max-width: 820px) {
          .container {
            padding: 0 0.5rem;
          }
          .head-text {
            margin-top: 0;
            font-size: 0.9rem;
            padding: 0 0.9rem;
          }
          .head-text p {
            line-height: 1.3rem;
            padding: 0.3rem 0;
          }
          .info-box {
            display: block;
            padding: 0 0.5rem;
          }
          .info-box div {
            padding: 0 0;
          }
          .info-box div:first-child {
            width: 100%;
            font-size: 1rem;
            padding: 1rem 0 0.7rem 0rem;
          }
          .info-box div:last-child {
            font-size: 0.9rem;
            margin-bottom: 1rem;
          }
          .info-box div:last-child p {
            padding: 0.1rem 0.5rem 0.1rem 0.5rem;
            line-height: 1.3rem;
          }
        }
      `}</style>
    </>
  );
}
