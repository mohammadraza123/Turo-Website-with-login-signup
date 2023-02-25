import Dropdown from 'react-bootstrap/Dropdown';
import Stack from 'react-bootstrap/Stack';
import { FaBars, FaRegUserCircle, FaCar } from 'react-icons/fa'
import { GiHouseKeys } from "react-icons/gi";
import { BiSupport } from "react-icons/bi";
import { BsTools } from "react-icons/bs";
import { IoNewspaperOutline } from "react-icons/io5";
import { AiOutlineInsurance } from "react-icons/ai";
import { TbCalculator } from "react-icons/tb";
import LoginApp from "./login"
function HorizontalMarginStartExample() {
  return (
    <Stack direction="horizontal" gap={3}>
      <div className="bg"><img src='favicon-icon.png' style={{ width: "100px" }} alt=""></img></div>
      <div className="bg-l ms-auto" >Become a host</div>

      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          <FaBars className='header-icon' />
          <FaRegUserCircle className='header-icon' />
        </Dropdown.Toggle>


        <Dropdown.Menu>


          <div className='full-dropdown'>
            
            <Dropdown.Item  className = "btnn"><LoginApp/></Dropdown.Item>
            <Dropdown.Item  className = "btnn" >Sign up</Dropdown.Item>
            <div className='icon-with-name'>

              <FaCar className="icons" />
              <Dropdown.Item href="#/action-3">Become a host</Dropdown.Item>
            </div>

            <hr></hr>
            <div className='icon-with-name'>

              <GiHouseKeys className="icons" />
              <Dropdown.Item href="#/action-3">How Turo works</Dropdown.Item>
            </div>
            <div className='icon-with-name'>
              <BiSupport className="icons" />
              <Dropdown.Item href="#/action-3">Contact support</Dropdown.Item>
            </div>
            <div className='icon-with-name'>
              <IoNewspaperOutline className="icons" />
              <Dropdown.Item href="#/action-3">Legal</Dropdown.Item>
            </div>
            <div className='icon-with-name'>
              <AiOutlineInsurance className="icons" />
              <Dropdown.Item href="#/action-3">Insurance & protection</Dropdown.Item>
            </div>
            <div className='icon-with-name'>
              <BsTools className="icons" />
              <Dropdown.Item href="#/action-3">Host tools</Dropdown.Item>
            </div>
            <div className='icon-with-name'>
              <TbCalculator className="icons" />
              <Dropdown.Item href="#/action-3">Calculator</Dropdown.Item>
            </div>


          </div>



        </Dropdown.Menu>
      </Dropdown>
    </Stack>
  );
}
// }

export default HorizontalMarginStartExample;


