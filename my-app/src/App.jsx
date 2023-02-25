import './App.css';
import React from 'react';
import Navbar from './components/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import IMAGE from "./assests/header-image.jpg";
import Main from './components/search';
import IMAGE1 from "./assests/responsive-header.jpg";
import MOBILE_HEADER from "./components/mobile-header"
import Card from "./components/find-cards"
import Slider2 from "./components/slider2";
import Slider3 from "./components/slider3";
import Explore from "./components/explore";
import Experience from "./components/experiance";
import Hosts from "./components/hosts";
import Questions from "./components/questions"
import Footer from "./components/footer";
import LoginApp from "./components/login";


function App() {
    return (
        <>
            <div className='more-cars'>
                <span><a href=''> Turo has launched in New York! Tap to explore cars.</a></span>
</div>
            <div>
                <Navbar/>
            <MOBILE_HEADER/>
                <Main />
                <br className='space'/>

                <br />
                <img src={IMAGE} alt="" id='image' />
                <img src={IMAGE1} alt="" id='res-image' />


                <div />
            </div>
            <div className='heading'>

            <h1>Find your drive</h1>
<h3>Explore the world's largest car sharing marketplace</h3>
<h4>Browse by make</h4>
            </div>
          <div>

        <Card/>
          </div>
        <Slider2/>

          <div>
          <h4 className='heading'>Browse by destination</h4>
         <Slider3/>
          
          <Explore/>
          </div>
         <br></br>
          <div>


          <Experience/>
          </div>
          <Hosts/>
          <Questions/>
          <Footer/>
          <LoginApp/>
        </>
    )
}

export default App;
