import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles.css";
import { Pagination, Navigation } from "swiper";
import card1 from "../assests/slide1.jpg";
import card2 from "../assests/slide2.jpg";
import card3 from "../assests/slide3.jpg";
import card4 from "../assests/slide4.jpg";
import card5 from "../assests/slide5.jpg";
import card6 from "../assests/slide6.jpg";

export const Slider2 = () => {
  return (
    <>
      <section>
        <div className="container slider2_container">
          <div className="row">
            <div className="col mt-5 py-5">
              {/* swiper start*/}

              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                slidesPerGroup={1}
                speed={900}
                // loop = {true}
                loopFillGroupWithBlank={false}
                pagination={{
                  clickable: true,
                }}
                // breakpoints={{
                //   280: {
                //     slidesPerView: 1,
                //   },
                //   567: {
                //     slidesPerView: 3,
                //   },
                //   768: {
                //     slidesPerView: 5,
                //   },
                // }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6">
                        <img className="text-center mx-auto" width="80%" src={card1} alt="" />
                      </div>
                      <div className="col-md-6 text-start pt-5">
                        <div className="mt-3 mt-lg-0">
                          <h3 className="f-bold">
                            Find the perfect car <span style={{ color: "#593CFB" }}>to conquer the great outdoors</span>
                          </h3>
                          <p>
                            Go prepared in a rugged 4x4 to take on winter roads <br /> with ease, or a camper van to take you to the trees.
                          </p>
                          <div className="mx-auto mx-md-0">
                            <button className="slide2_btn ">Browse Cars</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6">
                        <img className="text-center mx-auto" width="80%" src={card2} alt="" />
                      </div>
                      <div className="col-md-6 text-start pt-5">
                        <div className="mt-3 mt-lg-0">
                          <h3 className="f-bold">
                            Find the perfect car <span style={{ color: "#593CFB" }}>to unwind for the weekend</span>
                          </h3>
                          <p>
                            Go prepared in a rugged 4x4 to take on winter roads <br /> with ease, or a camper van to take you to the trees.
                          </p>
                          <div className="mx-auto mx-md-0">
                            <button className="slide2_btn ">Browse Cars</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6">
                        <img className="text-center mx-auto" width="80%" src={card3} alt="" />
                      </div>
                      <div className="col-md-6 text-start pt-5">
                        <div className="mt-3 mt-lg-0">
                          <h3 className="f-bold">
                            Find the perfect car <span style={{ color: "#593CFB" }}>to upgrade your vacation plans
                            </span>
                          </h3>
                          <p>
                            Go prepared in a rugged 4x4 to take on winter roads <br /> with ease, or a camper van to take you to the trees.
                          </p>
                          <div className="mx-auto mx-md-0">
                            <button className="slide2_btn ">Browse Cars</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6">
                        <img className="text-center mx-auto" width="80%" src={card4} alt="" />
                      </div>
                      <div className="col-md-6 text-start pt-5">
                        <div className="mt-3 mt-lg-0">
                          <h3 className="f-bold">
                            Find the perfect car <span style={{ color: "#593CFB" }}>for scenic corners & curves</span>
                          </h3>
                          <p>
                            Go prepared in a rugged 4x4 to take on winter roads <br /> with ease, or a camper van to take you to the trees.
                          </p>
                          <div className="mx-auto mx-md-0">
                            <button className="slide2_btn ">Browse Cars</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6">
                        <img className="text-center mx-auto" width="80%" src={card5} alt="" />
                      </div>
                      <div className="col-md-6 text-start pt-5">
                        <div className="mt-3 mt-lg-0">
                          <h3 className="f-bold">
                            Find the perfect car <span style={{ color: "#593CFB" }}>to try before you buy</span>
                          </h3>
                          <p>
                            Go prepared in a rugged 4x4 to take on winter roads <br /> with ease, or a camper van to take you to the trees.
                          </p>
                          <div className="mx-auto mx-md-0">
                            <button className="slide2_btn ">Browse Cars</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6">
                        <img className="text-center mx-auto" width="80%" src={card6} alt="" />
                      </div>
                      <div className="col-md-6 text-start pt-5">
                        <div className="mt-3 mt-lg-0">
                          <h3 className="f-bold">
                            Find the perfect car <span style={{ color: "#593CFB" }}>to make errand day easier</span>
                          </h3>
                          <p>
                            Go prepared in a rugged 4x4 to take on winter roads <br /> with ease, or a camper van to take you to the trees.
                          </p>
                          <div className="mx-auto mx-md-0">
                            <button className="slide2_btn ">Browse Cars</button>
                          </div>
                        </div>
                      </div>
                    </div>
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

export default Slider2;