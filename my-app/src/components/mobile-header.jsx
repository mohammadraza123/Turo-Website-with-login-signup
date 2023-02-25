import Container from "react-bootstrap/Container";
import Dropdown from 'react-bootstrap/Dropdown';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FaCar, FaUserCircle , FaBars,FaRegUserCircle} from "react-icons/fa";
import { GiHouseKeys } from "react-icons/gi";
import { BiSupport } from "react-icons/bi";
import { IoNewspaperOutline } from "react-icons/io5";
import { AiOutlineInsurance } from "react-icons/ai";
import { BsTools } from "react-icons/bs";
import {TbCalculator } from "react-icons/tb";


const Mobilenav = () => {
  return (
    <>
      {[false].map((expand) => (
        <Navbar
          key={expand}
          bg="light"
          expand={expand}
          className="mb-3 d-sm-none"
        >
          <Container fluid>
            <img width="100px" src= "favicon-icon.png" alt="" />
            <div className="d-flex align-items-center">
              <div>
              <Navbar.Toggle
 
   
   aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
            </div>
              </div>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="top"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <img width="100px" src= "favicon-icon.png" alt="" />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Dropdown.Item className="full-dropdown" href="#/action-3">Login</Dropdown.Item>
                  <Dropdown.Item className="full-dropdown" href="#/action-3">Signup</Dropdown.Item>
                  <Nav />

                  <div className='icon-with-name'>
        
        <FaCar className="icons"/>
        <Dropdown.Item href="#/action-3">&nbsp;Become a host</Dropdown.Item>
       </div>
                  <div className='icon-with-name'>
        
        <GiHouseKeys className="icons"/>
        <Dropdown.Item href="#/action-3">&nbsp;How Turo works</Dropdown.Item>
       </div>

                  <hr className="w-100" />

                  <div className='icon-with-name'>
       <BiSupport className="icons"/>
        <Dropdown.Item href="#/action-3"> &nbsp; Contact support</Dropdown.Item>
       </div>
       <div className='icon-with-name'>
       <IoNewspaperOutline className="icons"/>
        <Dropdown.Item href="#/action-3"> &nbsp; Legal</Dropdown.Item>
       </div>
       <div className='icon-with-name'>
       <AiOutlineInsurance className="icons"/>
        <Dropdown.Item href="#/action-3"> &nbsp; Insurance & protection</Dropdown.Item>
       </div>
       <div className='icon-with-name'>
       <BsTools className="icons"/>
        <Dropdown.Item href="#/action-3">&nbsp; Host tools</Dropdown.Item>
       </div>
       <div className='icon-with-name'>
       <TbCalculator className="icons"/>
        <Dropdown.Item href="#/action-3">&nbsp; Calculator</Dropdown.Item>
       </div>
                 
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default Mobilenav;