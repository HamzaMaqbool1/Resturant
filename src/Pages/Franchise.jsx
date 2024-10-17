import React from 'react'
import img from '../img/Img3.png'
import img1 from '../img/Img5.png'
import img2 from '../img/Img8.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { faCircleExclamation,faFrancSign, faHome, faPhone, faStar, faUtensils } from '@fortawesome/free-solid-svg-icons';
const Franchise = () => {
      
  return (
    <section id='franchise'>
        <div className="container-fluid vh-100" style={{backgroundImage:`url(${img})`, backgroundRepeat:'no-repeat', backgroundSize:'cover', backgroundPosition:'center'}}>
        <div className="row d-flex justify-content-center">
        <div className="col-md-4 text-center text-white">
          <h2 id='heading' className='display-3'>OUR BRANCHES</h2>
        </div>
      </div>
        </div>
        <div className="container-fluid p-0" id='home'>
      <div className="row ">
      <nav className="col-lg-1 bg-dark rounded p-3 d-flex flex-lg-column flex-row justify-content-sm-around justify-content-between" id="navbar">
  <Link to="/" className="text-center text-decoration-none">
    <FontAwesomeIcon icon={faHome} size="1x" style={{color: "white"}}/>
    <h6 id="heading1" className="text-white">Home</h6>
  </Link>
  <Link to="/menu" className="text-center text-decoration-none">
    <FontAwesomeIcon icon={faUtensils} size="1x" style={{color: "white"}}/>
    <h6 id="heading1" className="text-white">Menu</h6>
  </Link>
  <Link to="/franchise" className="text-center text-decoration-none">
    <FontAwesomeIcon icon={faFrancSign} size="1x" style={{color: "white"}}/>
    <h6 id="heading1" className="text-white">Franchise</h6>
  </Link>
  <Link to="/about" className="text-center text-decoration-none">
    <FontAwesomeIcon icon={faCircleExclamation} size="1x" style={{color: "white"}}/>
    <h6 id="heading1" className="text-white">About us</h6>
  </Link>
  <Link to="/contact" className="text-center text-decoration-none">
    <FontAwesomeIcon icon={faPhone} size="1x" style={{color: "white"}}/>
    <h6 id="heading1" className="text-white">Contact us</h6>
  </Link>
  <Link to="/buy" className="btn ps-1 pe-1 pt-lg-0 pt-2 pb-0" style={{backgroundColor: '#00BCA8', color: 'white'}}>Buy Now</Link>
</nav>
      </div>
    </div>
    <div className="container pt-md-5 pt-3">
    <div className="row d-flex justify-content-center">
        <div className="col-md-6 text-center">
          <h2 id='heading' className='display-6'>INTRODUCING NEW LOOK</h2>
        </div>
      </div>
    </div>
    <div className="container">
        <div className="row">
            <div className="col-md-12">
            <img src={img1} alt="NewLook" className='img-fluid' style={{width:'100%'}} />
            </div>
        </div>
    </div>
    <div className="container">
        <div className="row">
            <div className="col-md-6 my-md-5 my-3">
                <h2 id='heading'>Pourous & Sons</h2>
                <p className='fs-3'>646 First Street, Quigleyville 36427 country</p>
                <div className='d-flex'>
                    <FontAwesomeIcon icon={faStar} size='2x' style={{color:'red'}}/>
                    <FontAwesomeIcon icon={faStar} size='2x' style={{color:'red'}}/>
                    <FontAwesomeIcon icon={faStar} size='2x' style={{color:'red'}}/>
                    <FontAwesomeIcon icon={faStar} size='2x' style={{color:'red'}}/>
                    <p className='fs-3 ms-1'>768-123 Reviews</p>
                </div>
            </div>
            <div className="col-md-6 my-md-5 my-3">
                <img src={img2} alt="" className='img-fluid' style={{width:'100%'}}/>
            </div>
        </div>
    </div>
    <div className="container pt-md-5 pt-3">
    <div className="row d-flex justify-content-center">
        <div className="col-md-6 text-center">
          <h2 id='heading' className='display-6'>We Are Now In Bristol</h2>
        </div>
      </div>
    </div>
    <div className="container">
        <div className="row">
            <div className="col-md-12">
            <img src={img1} alt="NewLook" className='img-fluid' style={{width:'100%'}} />
            </div>
        </div>
    </div>
    <div className="container">
        <div className="row">
            <div className="col-md-6 my-md-5 my-3">
                <h2 id='heading'>Pourous & Sons</h2>
                <p className='fs-3'>646 First Street, Quigleyville 36427 country</p>
                <div className='d-flex'>
                    <FontAwesomeIcon icon={faStar} size='2x' style={{color:'red'}}/>
                    <FontAwesomeIcon icon={faStar} size='2x' style={{color:'red'}}/>
                    <FontAwesomeIcon icon={faStar} size='2x' style={{color:'red'}}/>
                    <FontAwesomeIcon icon={faStar} size='2x' style={{color:'red'}}/>
                    <p className='fs-3 ms-1'>768-123 Reviews</p>
                </div>
            </div>
            <div className="col-md-6 my-md-5 my-3">
                <img src={img2} alt="" className='img-fluid' style={{width:'100%'}}/>
            </div>
        </div>
    </div>
    </section>
  )
}

export default Franchise
