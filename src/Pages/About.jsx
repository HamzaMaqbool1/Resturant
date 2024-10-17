import React from 'react'
import { faCalendar, faCircleExclamation, faConciergeBell, faFrancSign, faHome, faPhone, faUtensils } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import img from '../img/Img1.png';
import img1 from '../img/images.png'
import img2 from '../img/Img5.png'
import img3 from '../img/Img7.png'
import img4 from '../img/Img15.png'
import img5 from '../img/Img16.png'
import img6 from '../img/Img17.png'
import img7 from '../img/Img2.jpg'
import img8 from '../img/Img4.jpg'
import img9 from '../img/Img9.jpg'
import { Link } from 'react-router-dom';
const About = () => {
  return (
    <section id='about'>
       <div className="container-fluid vh-100" style={{ backgroundImage: `url(${img})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                <div className="row d-flex justify-content-center">
                    <div className="col-md-4 text-center text-white">
                        <h2 id='heading' className='display-3'>About Us</h2>
                    </div>
                </div>
            </div>
            <div className="container-fluid p-0" id='home'>
                <div className="row">
                    <nav className="col-lg-1 bg-dark rounded p-3 d-flex flex-lg-column flex-row justify-content-sm-around justify-content-between" id="navbar">
                        <Link to="/" className="text-center text-decoration-none">
                            <FontAwesomeIcon icon={faHome} size="1x" style={{ color: "white" }} />
                            <h6 id="heading1" className="text-white">Home</h6>
                        </Link>
                        <Link to="/menu" className="text-center text-decoration-none">
                            <FontAwesomeIcon icon={faUtensils} size="1x" style={{ color: "white" }} />
                            <h6 id="heading1" className="text-white">Menu</h6>
                        </Link>
                        <Link to="/franchise" className="text-center text-decoration-none">
                            <FontAwesomeIcon icon={faFrancSign} size="1x" style={{ color: "white" }} />
                            <h6 id="heading1" className="text-white">Franchise</h6>
                        </Link>
                        <Link to="/about" className="text-center text-decoration-none">
                            <FontAwesomeIcon icon={faCircleExclamation} size="1x" style={{ color: "white" }} />
                            <h6 id="heading1" className="text-white">About us</h6>
                        </Link>
                        <Link to="/contact" className="text-center text-decoration-none">
                            <FontAwesomeIcon icon={faPhone} size="1x" style={{ color: "white" }} />
                            <h6 id="heading1" className="text-white">Contact us</h6>
                        </Link>
                        <Link to="/buy" className="btn ps-1 pe-1 pt-lg-0 pt-2 pb-0" style={{ backgroundColor: '#00BCA8', color: 'white' }}>Buy Now</Link>
                    </nav>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-md-5 mt-3 mb-md-5 mb-3 order-lg-1 order-2">
                        <img src={img1} alt="Chef-image" className='img-fluid rounded' style={{width:'100%', height:'100%'}}/>
                    </div>
                    <div className="col-md-6 mt-md-5 mt-3 mb-md-5 mb-3 order-lg-2 order-1">
                        <h3 id='heading'className='mt-md-5 mt-3' >About Us</h3>
                        <p className='fs-4 text-muted'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio porro inventore unde vitae natus deserunt quidem veritatis nulla ipsum placeat aut pariatur, vel dolorum, odit quisquam ab neque. Praesentium expedita ipsa aliquid tempore consectetur similique quaerat impedit modi atque fugiat commodi eius, eos debitis! Nisi vero cumque perspiciatis nobis ipsum?</p>
                        <br/>
                        <p className='fs-4 text-muted'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, quo quidem? Perspiciatis, rem! Asperiores laboriosam ipsa iure quae quibusdam ea!</p>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 mb-md-5 mb-3 order-md-2 order-1">
                        <div className='col-12'>
                            <img src={img3} alt="Chef_image" style={{width:'100%', height:"100%"}} className='img-fluid rounded' />
                        </div>
                        <div className='d-flex'>
                            <div className='col-4'>
                                <img src={img6} alt="Productimage" style={{width:'100%', height:'100%'}} className='img-fluid rounded' />
                            </div>
                            <div className='col-4'>
                                <img src={img4} alt="Productimage" style={{width:'100%', height:'100%'}} className='img-fluid rounded' />
                            </div>
                            <div className='col-4'>
                                <img src={img5} alt="Productimage" style={{width:'100%', height:'100%'}} className='img-fluid rounded' />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mt-lg-5 mt-0 mb-md-5 mb-3 order-md-1 order-2 d-flex flex-column justify-content-lg-center justify-content-start">
                        <h3 id='heading '>Our Values</h3>
                        <p className='text-muted fs-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam corporis nisi est mollitia reiciendis ut impedit! Ratione perspiciatis similique nulla quibusdam, iusto numquam quae quam commodi, esse illum dicta officia ab quis? Quae cum laudantium distinctio aut, veritatis quia? Eum aliquid cumque tempore illum saepe quas aliquam sed facilis nam?</p>
                        <br/>
                        <p className='text-muted fs-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate debitis cum doloribus, sequi, architecto vitae dignissimos amet illum, dicta quas magni. Ut cumque rerum distinctio quidem nisi dolorem rem quia!</p>
                    </div>
                </div>
            </div>
            <div className="container mb-md-5 mb-3 ">
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-around">
                    <div className="col-3">
                        <img src={img7} alt="" className='img-fluid rounded' style={{width:'100%', height:'100%'}}/>
                    </div>
                    <div className="col-3">
                    <img src={img8} alt="" className='img-fluid rounded' style={{width:'100%', height:'100%'}}/>
                    </div>
                    <div className="col-3">
                    <img src={img9} alt="" className='img-fluid rounded' style={{width:'100%', height:'100%'}}/>
                    </div>
                    </div>
                </div>
                <div className="row d-flex justify-content-center mt-lg-5 mt-3"  style={{ backgroundColor: 'rgba(0, 188, 168, 0.5)' }}>
                    <div className="col-lg-6 rounded ">
                        <h3 id='heading' className='text-center mt-md-3 mt-2'>Our Goals</h3>
                        <p className='fs-3 text-muted text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, veniam debitis totam, dicta recusandae quasi quod quibusdam minima voluptas officia, blanditiis sapiente architecto facilis. Rerum debitis odit animi ratione natus!</p>
                    </div>
                </div>
            </div>
            <div className="container-fluid vh-100 rounded p-5 d-flex justify-content-center align-items-center" style={{backgroundImage:`url(${img2})`, backgroundRepeat:'no-repeat', backgroundSize:'cover'}}>
                <div className="row d-flex justify-content-center flex-column align-items-center">
                    <div className="col-12">
                        <h3 id='heading' className='display-md-2 display-4 text-white'>Our Sitting Area</h3>
                    </div>
                </div>
            </div>
            <div className="container-fluid my-5" style={{ backgroundColor: 'rgba(0, 188, 168, 0.5)' }}>
    <div className="row d-flex justify-content-center pt-5">
      <div className="col-md-3 text-center">
          <h2 id='heading'>Our Services</h2>
        </div>
      </div>
      <div className="row d-flex justify-content-around pt-5">
        <div className="col-md-3 text-center">
          <FontAwesomeIcon icon={faConciergeBell} size='4x'/>
          <p className='text-muted'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga alias provident perferendis modi ipsa atque harum incidunt cupiditate tempora corrupti delectus, impedit repellat! Ea vitae consequuntur sequi perspiciatis. Laborum, temporibus.</p>
        </div>
        <div className="col-md-3 text-center">
          <FontAwesomeIcon icon={faUtensils} size='4x'/>
          <p className='text-muted'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga alias provident perferendis modi ipsa atque harum incidunt cupiditate tempora corrupti delectus, impedit repellat! Ea vitae consequuntur sequi perspiciatis. Laborum, temporibus.</p>
        </div>
        <div className="col-md-3 text-center">
          <FontAwesomeIcon icon={faCalendar} size='4x'/>
          <p className='text-muted'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga alias provident perferendis modi ipsa atque harum incidunt cupiditate tempora corrupti delectus, impedit repellat! Ea vitae consequuntur sequi perspiciatis. Laborum, temporibus.</p>
        </div>
      </div>
    </div>
    </section>
  )
}

export default About