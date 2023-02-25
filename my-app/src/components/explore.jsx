import Image from '../assests/explore.jpg';


function Explore() {
  return (
    <>
      <div className='head'>
        <h1 className='first'>Fuel your daydreams</h1>
        <p className='para'>Stoke your wanderlust with some dreamy photo chronicles of road trip adventures.</p>
        <button className='slide2_btn ' style={{ width: "200px" }}>Explore Travelogues</button>
        <br></br>
        <img src={Image} alt="" className='explore-img' />
        </div>

        <div className=' explore-about'>
          <p style={{ fontSize: "12px", fontWeight: "bold" }}>FEATURED TRAVELOGUE</p>
          <h3 style={{ fontWeight: "bold" }}>An Olympic experience in Washington</h3>
          <p>Discover the epic waterfalls, moody weather, and lush forests of coastal Washington.</p>
          <a href='' className='read'>Read More</a>

      </div>
    </>
  )


}

export default Explore;