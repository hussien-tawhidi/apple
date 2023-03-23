import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

export default function SubHeaderMobile({ subHeaderMobile }) {
  return (
    <div className="mobieMacHeader">
      <Swiper
        centeredSlides={true}
        className="mySwiper"
        slidesPerView={8}
        breakpoints={{
          800: {
            slidesPerView: 8,
          },
          600: {
            slidesPerView: 7,
          },
          400: {
            slidesPerView: 5,
          },
          300: {
            slidesPerView: 4,
          },
        }}
      >
        {subHeaderMobile.map((head) => (
          <SwiperSlide key={head.id}>
            <Link to={`products/${head.LinkTo}`} className="singleHeader">
              <img src={head.image} alt="" className="subHeaderImg" />
              <div className="text">
                <p>{head.title}</p>
                <span>{head.newText}</span>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
