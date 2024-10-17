import React, { useState } from 'react'
import img from '../img/Img1.png'
import img1 from '../img/Img4.jpg'
import img2 from '../img/Img17.png'
import img3 from '../img/Img18.png'
import img4 from '../img/Img19.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { faCircleExclamation,faFrancSign, faHome, faPhone, faUtensils } from '@fortawesome/free-solid-svg-icons';
const Menu = () => {
    const [activeMenu,setMenu]=useState(null)
    const handleMenu=(option)=>{
        setMenu(option)
    }
    const [lrangeValue,setLRange]=useState('0')
    const [rrangeValue,setRRange]=useState('0')
    const handleLRange=(e)=>{
        setLRange(e.target.value)
    }
    const handleRRange=(e)=>{
        setRRange(e.target.value)
    }
    const products = [
      {
        image: img1,
        name: "Chicken Saslay",
        ingredients: "ingredient 1,ingredient 2,ingredient 3",
        price: 200
      },
      {
          image: img2,
          name: "Burger",
          ingredients: "ingredient 1,ingredient 2,ingredient 3",
          price: 100
      },
      {
          image: img3,
          name: "Dessert ",
          ingredients: "ingredient 1,ingredient 2,ingredient 3",
          price: 450
      },
      {
          image: img4,
          name: "Mallai Boti",
          ingredients: "ingredient 1,ingredient 2,ingredient 3",
          price: 50
      }
  ]
  return (
    <section id='menu'>
        <div className="container-fluid vh-100" style={{backgroundImage:`url(${img})`, backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
        <div className="row d-flex justify-content-center">
        <div className="col-md-3 text-center text-white">
          <h2 id='heading' className='display-3'>Menu</h2>
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
    <div className="container">
    <div className="row">
        <div className="col-md-12 text-center d-flex justify-content-around ">
          <Link to='/menu' className={`text-decoration-none ${activeMenu === 'starter' ? 'active' : ''}`}  onClick={()=>handleMenu('starter')}><h2 style={activeMenu === 'starter'?{color:'black',textDecorationLine:'underline', textDecorationColor:'grey'}:{color:'grey'}} id='heading'  >STARTER</h2></Link>
          <Link to='/menu' className={`text-decoration-none ${activeMenu === 'course' ? 'active' : ''}`}  onClick={()=>handleMenu('course')}><h2 style={activeMenu === 'course'?{color:'black',textDecorationLine:'underline', textDecorationColor:'grey'}:{color:'grey'}} id='heading'  >MAIN COURSE</h2></Link>
          <Link to='/menu' className={`text-decoration-none ${activeMenu === 'dessert' ? 'active' : ''}`}  onClick={()=>handleMenu('dessert')}><h2 style={activeMenu === 'dessert'?{color:'black',textDecorationLine:'underline', textDecorationColor:'grey'}:{color:'grey'}} id='heading' >DESSERTS</h2></Link>
          <Link to='/menu' className={`text-decoration-none ${activeMenu === 'drink' ? 'active' : ''}`}  onClick={()=>handleMenu('drink')}><h2 style={activeMenu === 'drink'?{color:'black',textDecorationLine:'underline', textDecorationColor:'grey'}:{color:'grey'}} id='heading' >DRINKS</h2></Link>
        </div>
      </div>
    </div>
    <div className="container" id='range'>
        <div className="row">
            <div className="col-md-3 mt-md-3 mt-2">
                        <h6 className='fw-bold' id='heading'>Filter By Price</h6>
                       <div className="range-container">
                       <input type="range" className="form-range left-range" min="0" max="500" value={lrangeValue} onChange={handleLRange}/>
                       <input type="range" className="form-range right-range" min="0" max="500" value={rrangeValue} onChange={handleRRange}/></div>
                       <div className='d-flex'> <h6 id='heading'>Range</h6>
                       <span>${lrangeValue}-${rrangeValue}</span>
                       <h6 id='heading' className='ms-auto'>Filter</h6>
                       </div>
            </div>
        </div>
    </div>
    {activeMenu && (
      <>
      {products.map((product,index) => (
      <div className="container" key={index}>
       <Link to={`/menu/${index}`} className='text-decoration-none text-dark'>
       <div className="row">
          <div className="col-md-2">
            <img src={product.image} alt={`${product.name}_image`} id="menuimage" style={{width: '150px', height: '150px'}} />
          </div>
          <div className="col-md-5 pt-3 text-md-start text-center">
            <h2 id="heading">{product.name}</h2>
            <p>{product.ingredients}</p>
          </div>
          <div className="col-md-5 text-lg-end text-center">
            <p className="pt-3 fs-3">${product.price}</p>
          </div>
        </div>
       </Link>
        {index < products.length - 1 && <div className="container"><hr/></div>}
        </div>
    ))}
      </>
)}

    </section>
  )
}

export default Menu
