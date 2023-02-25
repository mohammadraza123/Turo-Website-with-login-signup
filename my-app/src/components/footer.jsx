import { BsFacebook, BsTwitter } from "react-icons/bs"
import { AiFillInstagram } from "react-icons/ai";
import Appstore from "../assests/app store.png"
import Playstore from "../assests/google play.png"

function footer() {
  return (
    <>
      <section className="footer_section mt-5">
        <div className="container footer_container py-4">
          <div className="row">
            <div className="col">

              <p className="fs-12" style={{ fontWeight: "400" }}>
                * Any personal insurance you may have that covers damage to the
                host’s vehicle would kick in before your protection plan, except
                in limited situations for trips booked in Maryland, but this
                protects your own wallet. Liability insurance is provided under
                a policy issued to Turo by Travelers Excess and Surplus Lines
                Company. Terms, conditions, and exclusions apply. The policy
                does not provide coverage for damage to a host’s vehicle.
              </p>
              <p className="fs-12" style={{ fontWeight: "400" }}>
                For questions or information about the third party liability insurance that is included in protection plans in the US, consumers in Maryland and the licensed states listed here may contact Turo Insurance Agency at (415) 508-0283 or claims@turo.agency. For questions about how damage to a host’s vehicle is handled, visit the Turo Support site.</p>

              <p className="fs-12" style={{ fontWeight: "400" }}>
                When a trip is booked in the state of Washington, physical damage to the host’s vehicle is covered by insurance purchased by Turo, but the Turo insurance does not change the contractual responsibilities of hosts or guests with respect to physical damage to a host’s vehicle.


              </p>
              <p className="fs-12" style={{ fontWeight: "400" }}>
                ** Terms, conditions, and exclusions apply.
              </p>


              <hr></hr>

              <div className="footer">
                <div className="inner_footer">

                 
                 
                  <div className="one">
                    <ul>
                      <li>
                        <a href="#">
                          <h6 className="fw-bold">Turo</h6>
                        </a>
                      </li>
                      <li>
                        <a className="fs-12 " href="#">Cars</a>
                      </li>
                      <li>
                        <a className="fs-12" href="#">Flats for rent</a>
                      </li>
                      <li>
                        <a className="fs-12" href="#">Mobile Phones</a>
                      </li>
                      <li>
                        <a className="fs-12" href="#">Jobs</a>
                      </li>
                    </ul>
                  </div>




                  <div className="one">
                    <ul>
                      <li>
                        <a href="#">
                          <h6 className="fw-bold">Locations</h6>
                        </a>
                      </li>
                      <li>
                        <a className="fs-12" href="#">Bikes</a>
                      </li>
                      <li>
                        <a className="fs-12" href="#">Watches</a>
                      </li>
                      <li>
                        <a className="fs-12" href="#">Books</a>
                      </li>
                      <li>
                        <a className="fs-12" href="#">Dogs</a>
                      </li>
                    </ul>
                  </div>


                  <div className="one">
                    <ul>
                      <li>
                        <a href="#">
                          <h6 className="fw-bold">Explore</h6>
                        </a>
                      </li>
                      <li>
                        <a className="fs-12" href="#">About EMPG</a>
                      </li>
                      <li>
                        <a className="fs-12" href="#">OLX Blog</a>
                      </li>
                      <li>
                        <a className="fs-12" href="#">Contact Us</a>
                      </li>
                      <li>
                        <a className="fs-12" href="#">OLX for Businesses</a>
                      </li>
                    </ul>
                  </div>


                  <div className="one">
                    <ul>
                      <li>
                        <a href="#">
                          <h6 className="fw-bold">Hosting</h6>
                        </a>
                      </li>
                      <li>
                        <a className="fs-12" href="#"> Help</a>
                      </li>
                      <li>
                        <a className="fs-12" href="#">Sitemap</a>
                      </li>
                      <li>
                        <a className="fs-12" href="#">Terms of use</a>
                      </li>
                      <li>
                        <a className="fs-12" href="#"> Privacy Policy</a>
                      </li>
                    </ul>
                  </div>




                  <div className="play-store">
                    <ul style={{ display: "flex" }}>
                      <li className="h4" style={{ padding: "5px", color: "black",marginLeft:'30px' }}><BsFacebook /></li>
                      <li className="h4" style={{ padding: "5px", color: "black" }}><BsTwitter  /></li>
                      <li className="h4" style={{ padding: "5px", color: "black" }}><AiFillInstagram  /></li>
</ul>
</div>

                    <div className="play-store">
                      <ul className="google-icon" style={{ display: "flex" }}>
                        <li className="g-icon"><img className="store-img" style={{ width: '65px'}}src={Playstore} alt="" /></li>
                        <li className="g-icon"><img className="store-img" style={{ width: '65px'}} src={Appstore} alt="" /></li>
 </ul>
</div>
              </div>
            </div>
                    <hr></hr>

                    <div className="footer">
                      <div className="inner_footer">


                        <div className="one">
                          <ul>
                            <li>
                              <a href="#">
                                <h6 className="fw-bold">Vehicle types</h6>
                              </a>
                            </li>
                            <li>
                              <a className="fs-12" href="#">Truck</a>
                            </li>
                            <li>
                              <a className="fs-12" href="#">Vans</a>
                            </li>
                            <li>
                              <a className="fs-12" href="#">Exotic & Luxury</a>
                            </li>
                            <li>
                              <a className="fs-12" href="#">Convertibles</a>
                            </li>
                            <li>
                              <a className="fs-12" href="#">Sport</a>
                            </li>
                            <li>
                              <a className="fs-12" href="#">Classics</a>
                            </li>
                            <li>
                              <a className="fs-12" href="#">Minivans</a>
                            </li>
                            <li>
                              <a className="fs-12" href="#">SUVs</a>
                            </li>
                            <li>
                              <a className="fs-12" href="#">Electric vehicles</a>
                            </li>
                            <li>
                              <a className="fs-12" href="#">Cars</a>
                            </li>
                          </ul>
                        </div>


                        <div className="one">
                          <ul>

                            <li>
                              <a href="#">
                                <h6 className="fw-bold">Makes</h6>
                              </a>
                            </li>
                            <li>
                              <a className="fs-12" href="#">Tesla</a>
                            </li>
                            <li>
                              <a className="fs-12" href="#"> Lamborghini</a>
                            </li>
                            <li>
                              <a className="fs-12" href="#">Jeep</a>
                            </li>
                            <li>
                              <a className="fs-12" href="#">Rolls-Royce</a>
                            </li>
                            <li>
                              <a className="fs-12" href="#">Mercedes-Benz</a>
                            </li>
                            <li>
                              <a className="fs-12" href="#">Ferrari</a>
                            </li>
                            <li>
                              <a className="fs-12" href="#">Porsche</a>
                            </li>
                            <li>
                              <a className="fs-12" href="#">BMW</a>
                            </li>
                            <li>
                              <a className="fs-12" href="#">Subaru</a>
                            </li>
                            <li>
                              <a className="fs-12" href="#">Maserati</a>
                            </li>
                          </ul>
                        </div>


                        <div className="one">
                          <ul>
                            <li>
                              <a href="#">
                                <h6 className="fw-bold">Top cities</h6>
                              </a>
                            </li>
                            <li>
                              <a className="fs-12" href="#">Portland</a>
                            </li>
                            <li>
                              <a className="fs-12" href="#">Sacramento</a>
                            </li>
                            <li>
                              <a className="fs-12" href="#">San Diego</a>
                            </li>
                            <li>
                              <a className="fs-12" href="#">San Francisco</a>
                            </li>
                            <li>
                              <a className="fs-12" href="#">Seattle</a>
                            </li>
                            <li>
                              <a className="fs-12" href="#">Tampa</a>
                            </li>
                            <li>
                              <a className="fs-12" href="#">Toronto</a>
                            </li>
                            <li>
                              <a className="fs-12" href="#">Vancouver</a>
                            </li>
                            <li>
                              <a className="fs-12" href="#">Washington DC</a>
                            </li>  <li>
                              <a className="fs-12" href="#">Sydney</a>
                            </li>
                          </ul>
                        </div>


                        <div className="one">
                          <ul>
                            <li>
                              <a href="#">
                                <h6 className="fw-bold invisible">Hosting</h6>
                              </a>
                            </li>
                            <li>
                              <a className="fs-12" href="#">Atlanta</a>
                            </li>
                            <li>
                              <a className="fs-12" href="#">Austin</a>
                            </li>
                            <li>
                              <a className="fs-12" href="#">Boston</a>
                            </li>
                            <li>
                              <a className="fs-12" href="#">Charlotte</a>
                            </li>
                            <li>
                              <a className="fs-12" href="#">Chicago</a>
                            </li>
                            <li>
                              <a className="fs-12" href="#">Dallas</a>
                            </li>
                            <li>
                              <a className="fs-12" href="#">Denver</a>
                            </li>
                            <li>
                              <a className="fs-12" href="#">Fort Lauderdale</a>
                            </li>
                            <li>
                              <a className="fs-12" href="#">Honolulu</a>
                            </li>
                            <li>
                              <a className="fs-12" href="#">Houston</a>
                            </li>
                          </ul>
                        </div>


                        <div className="one">
                          <ul>
                            <li>
                              <a href="#">
                                <h6 className="fw-bold invisible">Top cities</h6>
                              </a>
                            </li>
                            <li>
                              <a className="fs-12" href="#">Atlanta</a>
                            </li>
                            <li>
                              <a className="fs-12" href="#">Austin</a>
                            </li>
                            <li>
                              <a className="fs-12" href="#">Boston</a>
                            </li>
                            <li>
                              <a className="fs-12" href="#">Charlotte</a>
                            </li>
                            <li>
                              <a className="fs-12" href="#">Chicago</a>
                            </li>
                            <li>
                              <a className="fs-12" href="#">Dallas</a>
                            </li>
                            <li>
                              <a className="fs-12" href="#">Denver</a>
                            </li>
                            <li>
                              <a className="fs-12" href="#">Fort Lauderdale</a>
                            </li>
                            <li>
                              <a className="fs-12" href="#">Honolulu</a>
                            </li>
                            <li>
                              <a className="fs-12" href="#">Houston</a>
                            </li>
                          </ul>
                        </div>


                    </div>
                  </div>



                  <div className="two">
                    <ul style={{ display: 'flex' }}>
                      <li className="last">©2022 Turo</li>
                      <li className="last">Terms</li>
                      <li className="last">Privacy</li>
                      <li className="last">Sitemap</li>
                      <li className="last">Cookie preferences</li>
                      <li className="last" id="lastt">Do not sell or share my personal information</li>
 </ul>
</div>


          </div>
        </div>
        </div>
      </section>
    </>
  )
}


export default footer;