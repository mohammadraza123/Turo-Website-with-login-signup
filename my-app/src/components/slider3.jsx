import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles.css"
import { Pagination, Navigation } from "swiper";
import Card1 from "../assests/card1.png";
import Card2 from "../assests/card2.png";
import Card3 from "../assests/card3.png";
import Card4 from "../assests/card4.png";
import Card5 from "../assests/card5.png";
import Card6 from "../assests/card6.png";
import Card7 from "../assests/card7.png";
import Card8 from "../assests/card8.png";
import Card9 from "../assests/card9.png";
import Card10 from "../assests/card10.png";
import Card11 from "../assests/card11.png";
import Card12 from "../assests/card12.png";
import Card13 from "../assests/card13.png";
import Card14 from "../assests/card14.png";
import Card15 from "../assests/card15.png";
import Card16 from "../assests/card16.png";
import Card17 from "../assests/card17.png";
import Card18 from "../assests/card18.png";
import Card19 from "../assests/card19.png";



export const Slider1 = () => {
    return (
        <>
            <section>
                <div className="container slider1_container">
                    <div className="row">
                        <div className="col">

                            {/* swiper start*/}

                            <Swiper
                                slidesPerView={6}
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
                                        slidesPerView: 6,
                                    },
                                }}
                                navigation={true}
                                modules={[Pagination, Navigation]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <div className="card box_shadow">
                                        <img className="card-img" style={{ padding: "20px" }} src={Card1} alt="" />
                                        <h6 className="fw-bold mt-2">Los Angeles</h6>

                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="card box_shadow">
                                        <img className="card-img" style={{ padding: "20px" }} src={Card2} alt="" />
                                        <h6 className="fw-bold mt-2">Miami</h6>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="card box_shadow">
                                        <img className="card-img" style={{ padding: "20px" }} src={Card3} alt="" />
                                        <h6 className="fw-bold mt-2">Honolulu</h6>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="card box_shadow">
                                        <img className="card-img" style={{ padding: "20px" }} src={Card4} alt="" />
                                        <h6 className="fw-bold mt-2">Sydney</h6>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="card box_shadow">
                                        <img className="card-img" style={{ padding: "20px" }} src={Card5} alt="" />
                                        <h6 className="fw-bold mt-2">London</h6>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="card box_shadow">
                                        <img className="card-img" style={{ padding: "20px" }} src={Card6} alt="" />
                                        <h6 className="fw-bold mt-2">Toronto</h6>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="card box_shadow">
                                        <img className="card-img" style={{ padding: "20px" }} src={Card7} alt="" />
                                        <h6 className="fw-bold mt-2">Jersy City</h6>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="card box_shadow">
                                        <img className="card-img" style={{ padding: "20px" }} src={Card8} alt="" />
                                        <h6 className="fw-bold mt-2">San Fransciscio</h6>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="card box_shadow">
                                        <img className="card-img" style={{ padding: "20px" }} src={Card9} alt="" />
                                        <h6 className="fw-bold mt-2">Atlanta</h6>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="card box_shadow">
                                        <img className="card-img" style={{ padding: "20px" }} src={Card10} alt="" />
                                        <h6 className="fw-bold mt-2">Phoenix</h6>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="card box_shadow">
                                        <img className="card-img" style={{ padding: "20px" }} src={Card11} alt="" />
                                        <h6 className="fw-bold mt-2">Orlando</h6>
                                    </div>
                                </SwiperSlide>  <SwiperSlide>
                                    <div className="card box_shadow">
                                        <img className="card-img" style={{ padding: "20px" }} src={Card12} alt="" />
                                        <h6 className="fw-bold mt-2">Las Vegas</h6>
                                    </div>
                                </SwiperSlide>  <SwiperSlide>
                                    <div className="card box_shadow">
                                        <img className="card-img" style={{ padding: "20px" }} src={Card13} alt="" />
                                        <h6 className="fw-bold mt-2">Dallas</h6>
                                    </div>
                                </SwiperSlide>  <SwiperSlide>
                                    <div className="card box_shadow">
                                        <img className="card-img" style={{ padding: "20px" }} src={Card14} alt="" />
                                        <h6 className="fw-bold mt-2">Washington DC</h6>
                                    </div>
                                </SwiperSlide>  <SwiperSlide>
                                    <div className="card box_shadow">
                                        <img className="card-img" style={{ padding: "20px" }} src={Card15} alt="" />
                                        <h6 className="fw-bold mt-2">Chicago</h6>
                                    </div>
                                </SwiperSlide>  <SwiperSlide>
                                    <div className="card box_shadow">
                                        <img className="card-img" style={{ padding: "20px" }} src={Card16} alt="" />
                                        <h6 className="fw-bold mt-2">Houstan</h6>
                                    </div>
                                </SwiperSlide>  <SwiperSlide>
                                    <div className="card box_shadow">
                                        <img className="card-img" style={{ padding: "20px" }} src={Card17} alt="" />
                                        <h6 className="fw-bold mt-2">San diego</h6>
                                    </div>
                                </SwiperSlide>  <SwiperSlide>
                                    <div className="card box_shadow">
                                        <img className="card-img" style={{ padding: "20px" }} src={Card18} alt="" />
                                        <h6 className="fw-bold mt-2">Boston</h6>
                                    </div>
                                </SwiperSlide>  <SwiperSlide>
                                    <div className="card box_shadow">
                                        <img className="card-img" style={{ padding: "20px" }} src={Card19} alt="" />
                                        <h6 className="fw-bold mt-2">Denver</h6>
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
