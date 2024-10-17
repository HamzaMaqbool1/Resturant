import React,{ useState } from 'react'
import logo from './img/images.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faLocation, faMessage, faPaperPlane, faPhone } from '@fortawesome/free-solid-svg-icons';
import img13 from './img/Img13.png';
import img12 from './img/Img12.png';
import img15 from './img/Img15.png';
import img17 from './img/Img17.png';
import img18 from './img/Img18.png';
import img19 from './img/Img19.png';
import Home from './Pages/Home';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { faInstagram, faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Menu from './Pages/Menu';
import Franchise from './Pages/Franchise';
import ProductDetail from './Pages/ProductDetail';
import Cart from './Pages/Cart';
import Checkout from './Pages/Checkout';
import About from './Pages/About';

function Header(){
  return(
    <section id='home'>
      <div className="container-fluid bg-dark">
    <div className="container">
    <div className="row">
  <div className="col-md-2 my-3">
  <select className="form-select bg-dark text-white border-0" aria-label="Disabled select example" disabled>
  <option value="1">English</option>
  </select>
  </div>
  <div className="col-md-6 d-flex justify-content-center p-0">
    <img src={logo} className='img-fluid1' alt="Logo_Image" />
  </div>
  <div className="col-md-4">
  <div className="d-flex">
  <div className="line-vertical d-flex my-3"></div>
  <div className='align-items-center mx-3 my-4'>
      <FontAwesomeIcon icon={faInstagram} size='2x' style={{color:'white'}} className='mx-3'/>  
      <FontAwesomeIcon icon={faFacebookF} size='2x' style={{color:'white'}} className='mx-3'/>
      <FontAwesomeIcon icon={faTwitter} size='2x' style={{color:'white'}}/>    
  </div>
  </div>
</div>
</div>
    </div>
</div>
    </section>
  )
}
function Footer(){

  return(
    <section id='footer'>
    <div className="container-fluid" style={{backgroundColor:'#D3D3D3'}}>
      <div className="container">
        <div className="row">
          <div className="col-md-3 my-2">
            <img src={logo} alt="" width="50px" height="50px" />
            <p className='text-muted'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            <div className="input-group mb-3">
             <input type="text" className="form-control" placeholder="Enter your email" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
             <span className="input-group-text" id="basic-addon2" style={{backgroundColor:'#00BCA8'}}><FontAwesomeIcon icon={faPaperPlane} size='1x' style={{color:'white'}}/></span></div>
          </div>
          <div className="col-md-4 my-2">
            <h3 id='heading'>Contact us</h3>
            <div className='d-flex'>
              <div className='pe-2'><FontAwesomeIcon icon={faLocation} size='1x' /></div>
              <div><p  className='text-muted'>25950 Long Lane, North Ismael 14280</p></div>
            </div>
            <div className='d-flex'>
              <div className='pe-2'><FontAwesomeIcon icon={faPhone} size='1x'/></div>
              <div><p><a href="tel:+923176933287" className='text-decoration-none text-muted'>+92-3176933287</a></p></div>
            </div>
            <div className='d-flex'>
              <div className='pe-2'><FontAwesomeIcon icon={faMessage} size='1x' /></div>
              <div><p><a href="mailto:Jermaine.Connelly@yahoo.com" className='text-decoration-none text-muted'>Jermaine.Connelly@yahoo.com</a></p>
              </div>
            </div>
            <div className='d-flex'>
              <div className='pe-2'><FontAwesomeIcon icon={faClock} size='1x'/></div>
              <div><p  className='text-muted'>Sat-Sun/10AM-8PM</p></div>
            </div>
          </div>
          <div className="col-md-2 my-2">
            <h3 id='heading'>Links</h3>
            <ul className='p-0 my-2 text-muted'>
              <li style={{fontFamily:'Montserrat !important'}}>About us</li>
              <li style={{fontFamily:'Montserrat !important'}}  className='my-2'>Contact us</li>
              <li style={{fontFamily:'Montserrat !important'}}  className='my-2'>Our Menu</li>
              <li style={{fontFamily:'Montserrat !important'}}  className='my-2'>Team</li>
              <li style={{fontFamily:'Montserrat !important'}}  className='my-2'>FAQ</li>
            </ul>
          </div>
          <div className="col-md-3 my-2">
            <h3 id="heading">Gallery</h3>
            <div className='d-flex'>
              <img src={img13} alt="" width="70px" height="70px"/>
              <img src={img12} alt="" width="70px" height="70px"/>
              <img src={img15} alt="" width="70px" height="70px"/>
            </div>
            <div className="d-flex">
              <img src={img17} alt="" width="70px" height="70px"/>
              <img src={img18} alt="" width="70px" height="70px"/>
              <img src={img19} alt="" width="70px" height="70px"/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container-fluid" style={{backgroundColor:'#00BCA8'}}>
      <div className="container">
      <div className="row">
        <div className="col-md-8 pt-2">
          <p className='text-white'>Copyright © 2000-2020.logo.com. All rights reserved</p>
        </div>
        <div className="col-md-4 pt-2">
          <div className='d-flex justify-content-around text-white'>
            <h6 id='heading'>Privacy Policy</h6>
            <h6 id='heading'>Term Use</h6>
            <h6 id='heading'>Partner</h6>
           </div>
        </div>
      </div>
      </div>
    </div>
  </section>
  )
}

function App() {
 
  return (
    <>
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/menu' element={<Menu/>}></Route>
        <Route path='/menu/:index' element={<ProductDetail/>}></Route>
        <Route path='/franchise' element={<Franchise/>}></Route>
        <Route path='/cart/:index' element={<Cart/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/checkout/:newIndex' element={<Checkout/>}></Route>
      </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App
