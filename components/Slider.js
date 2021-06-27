import Image from "next/image";
import Slider from "react-slick";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <Image src={"/pictures/view1.jpeg"} width={2000} height={1000} alt="" />
      </div>
      <div>
        <Image src={"/pictures/view2.jpeg"} width={2000} height={1000} alt="" />
      </div>
      <div>
        <Image src={"/pictures/view3.jpeg"} width={2000} height={1000} alt="" />
      </div>
      <div>
        <Image src={"/pictures/view4.jpeg"} width={2000} height={1000} alt="" />
      </div>
      <div>
        <Image src={"/pictures/view5.jpeg"} width={2000} height={1000} alt="" />
      </div>
      <div>
        <Image src={"/pictures/view6.jpeg"} width={2000} height={1000} alt="" />
      </div>
    </Slider>
  );
}
