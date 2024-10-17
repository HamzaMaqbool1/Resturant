import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import img1 from '../img/Img2.jpg'
import img2 from '../img/Img13.png'
import img3 from '../img/Img14.png'
import img4 from '../img/Img15.png'
import img5 from '../img/Img11.png'
import img6 from '../img/Img18.png'
import img7 from '../img/Img3.png'
import img8 from '../img/Img7.png'
import img9 from '../img/Img5.png'
import img10 from '../img/Img6.png'
import { faCalendar, faCheck, faCircleExclamation, faConciergeBell, faFrancSign, faHome, faPhone, faUtensils } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'


const Home = () => {
  const [isActive,setActive]=useState('')
  const handleActive=(option)=>{
    setActive(option)
  }
  useEffect(() => {
    const carousel = document.querySelector('#carouselExampleControls');
    if (carousel) {
        const items = carousel.querySelectorAll('.carousel-item');
        const next = carousel.querySelector('.carousel-control-next');
        const prev = carousel.querySelector('.carousel-control-prev');

        if (next && prev && items.length > 0) {
            next.addEventListener('click', () => {
                let activeItems = [];
                items.forEach((item, index) => {
                    if (item.classList.contains('active')) {
                      activeItems.push(index);
                    }
                });

                if (activeItems.length) {
                    const nextIndex = (activeItems[1] + 1) % items.length;
                    items[activeItems[1]].classList.remove('active');
                    items[nextIndex].classList.add('active');
                }
            });

            prev.addEventListener('click', () => {
                let activeItems = [];
                items.forEach((item, index) => {
                    if (item.classList.contains('active')) {
                        activeItems.push(index);
                    }
                });

                if (activeItems.length) {
                    const prevIndex = (activeItems[0] - 1 + items.length) % items.length;
                    items[activeItems[1]].classList.remove('active');
                    items[prevIndex].classList.add('active');
                }
            });
        }
    }
}, []);



  return (
    <section id='home'>
    <div className="container-fluid">
      <div className="row">
      <div className="col-md-12">
      <div id="carouselExampleControls" className="carousel slide">
    <div className="carousel-inner">
      <div className="carousel-item active" style={{marginRight:'0%'}}>
       <img src={img1} className="w-100" alt="..."/>
        <div className="carousel-caption">
          <h4>𝓘𝓽𝓼 𝓠𝓾𝓲𝓬𝓴 & 𝓐𝓶𝓾𝓼𝓲𝓷𝓰!</h4>
          <h3 id='heading' className='text-white'>Lorem ipsum dolor sit amet consectetur.</h3>
          <p className='text-white lead' id='lead1'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Varius sed pharetra dictum neque massa congue</p>
            <div className='btn ps-3 pe-3 pt-2 pb-2' style={{color:'white', backgroundColor:'#00BCA8'}}>See Menu</div>
        </div>
      </div>
      <div className="carousel-item" id='carousel2'>
        <img src={img1} className="w-100" alt="..."/>
      </div>
      <div className="carousel-item">
       <img src={img1} className="w-100" alt="..."/>
        <div className="carousel-caption">
          <h4>𝓘𝓽𝓼 𝓠𝓾𝓲𝓬𝓴 & 𝓐𝓶𝓾𝓼𝓲𝓷𝓰!</h4>
          <h3 id='heading' className='text-white'>Lorem ipsum dolor sit amet consectetur.</h3>
          <p className='text-white lead' id='lead1'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Varius sed pharetra dictum neque massa congue</p>
            <div className='btn ps-3 pe-3 pt-2 pb-2' style={{color:'white', backgroundColor:'#00BCA8'}}>See Menu</div>
        </div>
      </div>
      <div className="carousel-item" id='carousel2'>
        <img src={img1} className="w-100" alt="..."/>
      </div>
      <div className="carousel-item">
       <img src={img1} className="w-100" alt="..."/>
        <div className="carousel-caption">
          <h4>𝓘𝓽𝓼 𝓠𝓾𝓲𝓬𝓴 & 𝓐𝓶𝓾𝓼𝓲𝓷𝓰!</h4>
          <h3 id='heading' className='text-white'>Lorem ipsum dolor sit amet consectetur.</h3>
          <p className='text-white lead' id='lead1'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Varius sed pharetra dictum neque massa congue</p>
            <div className='btn ps-3 pe-3 pt-2 pb-2' style={{color:'white', backgroundColor:'#00BCA8'}}>See Menu</div>
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev" onClick={()=>handleActive('prev')} style={isActive === 'prev'?{backgroundColor:'#00BCA8'}:{backgroundColor: '#00BCA8'}} id='prev'>
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next" onClick={()=>handleActive('next')} style={isActive === 'next'?{backgroundColor:'#00BCA8'}:{backgroundColor: '#00BCA8'}} id='next'>
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
    </button>
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="2" aria-label="Slide 3"></button>
      <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="3" aria-label="Slide 4"></button>
      <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="4" aria-label="Slide 5"></button>
    </div>
  </div>
      </div>
      </div>
    </div>
    <div className="container-fluid p-0">
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
      <div className="container bg-white">
      <div className="row">
        <div className="col-lg-6 ps-4 pt-4">
          <h3 id='heading' >About us</h3>
          <h2 id='heading'>We Create the best foody product</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
          <div className='d-flex pt-5'>
            <FontAwesomeIcon icon={faCheck} size='1x'/>
            <p className='ps-3'>Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
          </div>
          <div className='d-flex'>
            <FontAwesomeIcon icon={faCheck} size='1x'/>
            <p className='ps-3'>Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
          </div>
          <div className='d-flex'>
            <FontAwesomeIcon icon={faCheck} size='1x'/>
            <p className='ps-3'>Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
          </div>
          <div className='btn text-white ps-3 pe-3 pt-2 pb-2' style={{backgroundColor:'#00BCA8'}}>Read More</div>
        </div>
        <div className="col-lg-6 pt-4">
       <div className="col-lg-12 rounded"> <img src={img2} alt="" width='700' height='250'/></div>
          <div className='d-flex gap-1 my-2'>
            <img src={img3} alt="" className='img-fluid' style={{ height:'100%', width:'100%'}}/>
           <img src={img4} alt="" className='img-fluid' style={{ height:'100%', width:'100%'}}/>
          </div>
        </div>
      </div>
      </div>
    <div className="container-fluid my-5">
      <div className="row d-flex justify-content-center">
        <div className="col-md-3 text-center">
          <h2 id='heading'>Food Category</h2>
        </div>
      </div>
      <div className="row d-flex flex-nowrap">
        <div className="col-md-12 mx-lg-0 mx-md-5 mx-sm-0">
          <img src={img2} alt="" className='img-fluid'/>
          <span className='bg-dark p-3 rounded img1' style={{position:'absolute', left:'10%',marginTop:'115px'}}> <button className='btn text-white p-2' style={{backgroundColor:'#00BCA8'}}>FastFood</button></span>
          <img src={img5} alt="" className='img-fluid'/>
          <span className='bg-dark p-3 rounded img2' style={{position:'absolute', left:'32%',marginTop:'115px'}}> <button className='btn text-white p-2' style={{backgroundColor:'#00BCA8'}}>Dessert</button></span>
          <img src={img6} alt="" className='img-fluid'/>
          <span className='bg-dark p-3 rounded img3' style={{position:'absolute', left:'55%',marginTop:'115px'}}> <button className='btn text-white p-2' style={{backgroundColor:'#00BCA8'}}>Dessert</button></span>
          <img src={img6} alt="" className='img-fluid'/>
          <span className='bg-dark p-3 rounded img4' style={{position:'absolute', left:'80%',marginTop:'115px'}}> <button className='btn text-white p-2' style={{backgroundColor:'#00BCA8'}}>Dessert</button></span>
        </div>
      </div>
    </div>
    <div className="container-fluid" style={{backgroundImage:`url(${img7})`}}>
      <div className="row d-flex justify-content-center">
        <div className="col-md-6 my-5 text-center">
          <h1 id='heading' className='text-white display-3'>Book Early & Save</h1>
          <p className='fs-3 text-white'>Lorem ipsum dolor sit amet.</p>
          <div className='btn text-white' style={{backgroundColor:'#00BCA8'}}>Book Now</div>
        </div>
      </div>
    </div>
    <div className="container-fluid my-5">
      <div className="row d-flex justify-content-center">
      <div className="col-md-3 text-center">
          <h2 id='heading'>Meet Our Chef</h2>
        </div>
      </div>
      <div className="row my-3">
        <div className="col-lg-3 col-md-6 my-2">
        <div className="card cardchef" style={{width: "18rem"}}>
         <img src={img8} className="card-img" alt="..."/>
        <div className="card-img-overlay" style={{overflowY:'hidden'}}>
        <div className='bg-white rounded text-end ps-3 pe-3 pb-1' style={{position:'absolute', top:'82%',left:'-1%'}}><h4 id='heading' className="card-title">D.EstWood</h4>
        <p className="card-text">Chief Chef</p></div></div></div>
        </div>
        <div className="col-lg-3 col-md-6 my-2">
        <div className="card cardchef" style={{width: "18rem"}}>
         <img src={img8} className="card-img" alt="..."/>
        <div className="card-img-overlay" style={{overflowY:'hidden'}}>
        <div className='bg-white rounded text-end ps-3 pe-3 pb-1' style={{position:'absolute', top:'82%',left:'-1%'}}><h4 id='heading' className="card-title">D.EstWood</h4>
        <p className="card-text">Chief Chef</p></div></div></div>
        </div>
        <div className="col-lg-3 col-md-6 my-2">
        <div className="card cardchef" style={{width: "18rem"}}>
         <img src={img8} className="card-img" alt="..."/>
        <div className="card-img-overlay" style={{overflowY:'hidden'}}>
        <div className='bg-white rounded text-end ps-3 pe-3 pb-1' style={{position:'absolute', top:'82%',left:'-1%'}}><h4 id='heading' className="card-title">D.EstWood</h4>
        <p className="card-text">Chief Chef</p></div></div></div>
        </div>
        <div className="col-lg-3 col-md-6 my-2">
        <div className="card cardchef" style={{width: "18rem"}}>
         <img src={img8} className="card-img" alt="..."/>
        <div className="card-img-overlay" style={{overflowY:'hidden'}}>
        <div className='bg-white rounded text-end ps-3 pe-3 pb-1' style={{position:'absolute', top:'82%',left:'-1%'}}><h4 id='heading' className="card-title">D.EstWood</h4>
        <p className="card-text">Chief Chef</p></div></div></div>
        </div>
      </div>
      <div className="row d-flex justify-content-center">
        <div className="col-lg-1 col-sm-2 col-4  btn text-white rounded pt-2 pb-2" style={{backgroundColor:'#00BCA8'}}>Read More</div>
      </div>
    </div>
    <div className="container-fluid p-5">
      <div className="row">
        <div className="col-md-6 p-0" >
          <img src={img9} alt="" className='img-fluid p-0' style={{width:'100%', height:'100%'}}/>
        </div>
        <div className="col-md-6 flextext" style={{borderTop:'3px solid #00BCA8',borderRight:'3px solid #00BCA8'}}>
          <h2 id='heading' className='text-md-end text-start ps-sm-5 ps-2 pe-5 pt-5'>Our Resturant</h2>
          <p className='lh-3 ps-sm-5 ps-2'>Eleifend facilisis sed facilisis varius hendrerit accumsan tortor. Donec nisi est mattis mauris morbi orci maecenas duis. Eleifend facilisis sed facilisis varius hendrerit accumsan tortor. Donec nisi est mattis mauris morbi orci maecenas duis. Eleifend facilisis sed facilisis varius hendrerit accumsan tortor. Donec nisi est mattis mauris morbi orci maecenas duis. Eleifend facilisis sed facilisis varius hendrerit accumsan tortor. Donec nisi est mattis mauris morbi orci maecenas duis.</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 flextext order-md-1 order-2" style={{borderBottom:'3px solid #00BCA8',borderLeft:'3px solid #00BCA8'}}>
          <h2 id='heading' className='ps-sm-5 ps-2 pt-5'>Meet & Greet</h2>
          <p className='lh-3 ps-sm-5 ps-2'>Eleifend facilisis sed facilisis varius hendrerit accumsan tortor. Donec nisi est mattis mauris morbi orci maecenas duis. Eleifend facilisis sed facilisis varius hendrerit accumsan tortor. Donec nisi est mattis mauris morbi orci maecenas duis. Eleifend facilisis sed facilisis varius hendrerit accumsan tortor. Donec nisi est mattis mauris morbi orci maecenas duis. Eleifend facilisis sed facilisis varius hendrerit accumsan tortor. Donec nisi est mattis mauris morbi orci maecenas duis.</p>
        </div>
        <div className="col-md-6 p-0 order-md-2 order-1">
          <img src={img10} alt="" className='img-fluid' style={{width:'100%', height:'100%'}}/>
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

export default Home
