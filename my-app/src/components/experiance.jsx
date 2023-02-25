import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles.css"
import { Pagination, Navigation } from "swiper";
import Experience1 from "../assests/experiance1.jpg";
import Experience2 from "../assests/experience2.jpg";
import Experience3 from "../assests/experience3.jpg";
import Experience4 from "../assests/experience4.jpg";
import Experience5 from "../assests/experience5.jpg";
import Experience6 from "../assests/experience6.jpg";




export const Slider1 = () => {
  return (
    <>
      <section>
        <div className="container slider1_container">
          <div className="row">
            <div className="col">
              <p className="headin">Browse by experience</p>


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
                    slidesPerView: 3,
                  },
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="card box_shadow">
                    <img className="card-img" src={Experience1} alt="" />
                    <h6 className="fw-bold mt-2">Explore</h6>

                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card box_shadow">
                    <img className="card-img" src={Experience2} alt="" />
                    <h6 className="fw-bold mt-2">Deluxe & Super Deluxe</h6>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card box_shadow">
                    <img className="card-img" src={Experience3} alt="" />
                    <h6 className="fw-bold mt-2">Pet-friendly</h6>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card box_shadow">
                    <img className="card-img" src={Experience4} alt="" />
                    <h6 className="fw-bold mt-2">Convertibles</h6>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card box_shadow">
                    <img className="card-img" src={Experience5} alt="" />
                    <h6 className="fw-bold mt-2">All-wheel drive</h6>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card box_shadow">
                    <img className="card-img" src={Experience6} alt="" />
                    <h6 className="fw-bold mt-2">Classic cars</h6>
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



