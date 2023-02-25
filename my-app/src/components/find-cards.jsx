import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles.css"
import { Pagination, Navigation } from "swiper";
import Car1 from "../assests/car1.jpg";
import Car2 from "../assests/car2.jpg";
import Car3 from "../assests/car3.jpg";
import Car4 from "../assests/car4.jpg";
import Car5 from "../assests/car5.jpg";
import Car6 from "../assests/car6.jpg";
import Car7 from "../assests/car7.jpg";
import Car8 from "../assests/car8.jpg";
import Car9 from "../assests/car9.jpg";
import Car10 from "../assests/car10.jpg";


export const Slider1 = () => {
  return (
    <>
      <section>
        <div className="container slider1_container">
          <div className="row">
            <div className="col">

              {/* swiper start*/}

              <Swiper
                slidesPerView={5}
                spaceBetween={20}
                slidesPerGroup={1}
                // loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  280: {
                    slidesPerView: 1,
                  },
                  567: {
                    slidesPerView: 0,
                  },
                  768: {
                    slidesPerView: 5,
                  },
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="card box_shadow">
                    <img className="img-fluid" src={Car1} alt="" />
                    <h6 className="fw-bold mt-2">Jeep</h6>

                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card box_shadow">
                    <img className="img-fluid" src={Car2} alt="" />
                    <h6 className="fw-bold mt-2">Tesla</h6>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card box_shadow">
                    <img className="img-fluid" src={Car3} alt="" />
                    <h6 className="fw-bold mt-2">Subaro</h6>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card box_shadow">
                    <img className="img-fluid" src={Car4} alt="" />
                    <h6 className="fw-bold mt-2">Porsche</h6>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card box_shadow">
                    <img className="img-fluid" src={Car5} alt="" />
                    <h6 className="fw-bold mt-2">BMW</h6>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card box_shadow">
                    <img className="img-fluid" src={Car6} alt="" />
                    <h6 className="fw-bold mt-2">Mercedes-Benz</h6>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card box_shadow">
                    <img className="img-fluid" src={Car7} alt="" />
                    <h6 className="fw-bold mt-2">Nissan</h6>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card box_shadow">
                    <img className="img-fluid" src={Car8} alt="" />
                    <h6 className="fw-bold mt-2">Toyota</h6>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card box_shadow">
                    <img className="img-fluid" src={Car9} alt="" />
                    <h6 className="fw-bold mt-2">Lamborghini</h6>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card box_shadow">
                    <img className="img-fluid" src={Car10} alt="" />
                    <h6 className="fw-bold mt-2">Ford</h6>
                  </div>
                </SwiperSlide>
              </Swiper>

              {/* swiper end*/}

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Slider1;
