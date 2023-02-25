import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles.css"
import { Pagination, Navigation } from "swiper";
import { AiFillStar } from "react-icons/ai"
import Host1 from "../assests/host1.jpg";
import Host2 from "../assests/host2.jpg";
import Host3 from "../assests/host3.jpg";
import Host4 from "../assests/host4.jpg";
import Host5 from "../assests/host5.jpg";
import Host6 from "../assests/host6.jpg";
import Host7 from "../assests/host7.jpg";
import Host8 from "../assests/host8.jpg";
import Host9 from "../assests/host9.jpg";





export const Slider1 = () => {
  return (
    <>
      <section>
        <div className="container slider1_container">
          <div className="row">
            <div className="col">
              <div className='head'>
                <h1 className='first'>Meet the hosts</h1>
              </div>
              <p className="headin" style={{ marginTop: "40px" }}>Top hosts on Turo</p>

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
                    <div className="host info">
                      <img className="host-img" style={{ width: '25%' }} src={Host1} alt="" />


                      <div className="detail">

                        <p className="fw" style={{ fontWeight: "bold", fontSize: '15px' }}>Kevin M</p>
                        <p className="fw">All-Star Host</p>
                        <p className="fw">528 trips . Joined Aug 2020</p>
                        <div className="star">

                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                        </div>
                      </div>
                      <div className="host-detail">
                        <p>He came thru for us at the last minute I was literally on the plane when I got a call that my car that my car from a rental agency</p>
                        <br></br>
                        <p className="fw">Donna S. -Nov 2022</p>
                      </div>
                    </div>

                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card box_shadow">
                    <div className="host info">
                      <img className="host-img" style={{ width: '25%' }} src={Host2} alt="" />


                      <div className="detail">

                        <p className="fw" style={{ fontWeight: "bold", fontSize: '15px' }}>Derrik H.</p>
                        <p className="fw">All-Star Host</p>
                        <p className="fw">528 trips . Joined Aug 2020</p>
                        <div className="star">

                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                        </div>
                      </div>
                      <div className="host-detail">
                        <p>He came thru for us at the last minute I was literally on the plane when I got a call that my car that my car from a rental agency</p>
                        <br></br>
                        <p className="fw">Donna S. -Nov 2022</p>
                      </div>
                    </div>

                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card box_shadow">
                    <div className="host info">
                      <img className="host-img" style={{ width: '25%' }} src={Host3} alt="" />


                      <div className="detail">

                        <p className="fw" style={{ fontWeight: "bold", fontSize: '15px' }}>Mohammad A.</p>
                        <p className="fw">All-Star Host</p>
                        <p className="fw">528 trips . Joined Aug 2020</p>
                        <div className="star">

                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                        </div>
                      </div>
                      <div className="host-detail">
                        <p>He came thru for us at the last minute I was literally on the plane when I got a call that my car that my car from a rental agency</p>
                        <br></br>
                        <p className="fw">Donna S. -Nov 2022</p>
                      </div>
                    </div>

                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card box_shadow">
                    <div className="host info">
                      <img className="host-img" style={{ width: '25%' }} src={Host4} alt="" />


                      <div className="detail">

                        <p className="fw" style={{ fontWeight: "bold", fontSize: '15px' }}>Artem S.</p>
                        <p className="fw">All-Star Host</p>
                        <p className="fw">528 trips . Joined Aug 2020</p>
                        <div className="star">

                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                        </div>
                      </div>
                      <div className="host-detail">
                        <p>He came thru for us at the last minute I was literally on the plane when I got a call that my car that my car from a rental agency</p>
                        <br></br>
                        <p className="fw">Donna S. -Nov 2022</p>
                      </div>
                    </div>

                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card box_shadow">
                    <div className="host info">
                      <img className="host-img" style={{ width: '25%' }} src={Host5} alt="" />


                      <div className="detail">

                        <p className="fw" style={{ fontWeight: "bold", fontSize: '15px' }}>CARS FROM ARS..</p>
                        <p className="fw">All-Star Host</p>
                        <p className="fw">528 trips . Joined Aug 2020</p>
                        <div className="star">

                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                        </div>
                      </div>
                      <div className="host-detail">
                        <p>He came thru for us at the last minute I was literally on the plane when I got a call that my car that my car from a rental agency</p>
                        <br></br>
                        <p className="fw">Donna S. -Nov 2022</p>
                      </div>
                    </div>

                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card box_shadow">
                    <div className="host info">
                      <img className="host-img" style={{ width: '25%' }} src={Host6} alt="" />


                      <div className="detail">

                        <p className="fw" style={{ fontWeight: "bold", fontSize: '15px' }}>Jack H.</p>
                        <p className="fw">All-Star Host</p>
                        <p className="fw">528 trips . Joined Aug 2020</p>
                        <div className="star">

                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                        </div>
                      </div>
                      <div className="host-detail">
                        <p>He came thru for us at the last minute I was literally on the plane when I got a call that my car that my car from a rental agency</p>
                        <br></br>
                        <p className="fw">Donna S. -Nov 2022</p>
                      </div>
                    </div>

                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card box_shadow">
                    <div className="host info">
                      <img className="host-img" style={{ width: '25%' }} src={Host7} alt="" />


                      <div className="detail">

                        <p className="fw" style={{ fontWeight: "bold", fontSize: '15px' }}>Laura W.</p>
                        <p className="fw">All-Star Host</p>
                        <p className="fw">528 trips . Joined Aug 2020</p>
                        <div className="star">

                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                        </div>
                      </div>
                      <div className="host-detail">
                        <p>He came thru for us at the last minute I was literally on the plane when I got a call that my car that my car from a rental agency</p>
                        <br></br>
                        <p className="fw">Donna S. -Nov 2022</p>
                      </div>
                    </div>

                  </div>
                </SwiperSlide>   <SwiperSlide>
                  <div className="card box_shadow">
                    <div className="host info">
                      <img className="host-img" style={{ width: '25%' }} src={Host8} alt="" />


                      <div className="detail">

                        <p className="fw" style={{ fontWeight: "bold", fontSize: '15px' }}>Igor K.</p>
                        <p className="fw">All-Star Host</p>
                        <p className="fw">528 trips . Joined Aug 2020</p>
                        <div className="star">

                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                        </div>
                      </div>
                      <div className="host-detail">
                        <p>He came thru for us at the last minute I was literally on the plane when I got a call that my car that my car from a rental agency</p>
                        <br></br>
                        <p className="fw">Donna S. -Nov 2022</p>
                      </div>
                    </div>

                  </div>
                </SwiperSlide>   <SwiperSlide>
                  <div className="card box_shadow">
                    <div className="host info">
                      <img className="host-img" style={{ width: '25%' }} src={Host9} alt="" />


                      <div className="detail">

                        <p className="fw" style={{ fontWeight: "bold", fontSize: '15px' }}>Ivan A.</p>
                        <p className="fw">All-Star Host</p>
                        <p className="fw">528 trips . Joined Aug 2020</p>
                        <div className="star">

                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                        </div>
                      </div>
                      <div className="host-detail">
                        <p>He came thru for us at the last minute I was literally on the plane when I got a call that my car that my car from a rental agency</p>
                        <br></br>
                        <p className="fw">Donna S. -Nov 2022</p>
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

export default Slider1;



