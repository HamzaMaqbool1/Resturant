import React, { useState } from 'react'
import img from '../img/Img1.png'
import img1 from '../img/Img4.jpg'
import img2 from '../img/Img17.png'
import img3 from '../img/Img18.png'
import img4 from '../img/Img19.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, useParams } from 'react-router-dom'
import { faCircleExclamation,faFrancSign, faHome, faMinus, faPhone, faPlus, faStar, faUtensils,faConciergeBell,faCalendar, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const ProductDetail = () => {
    const { index }=useParams();
    // const Index=parseInt(index);
    const newproducts = [
        {   
          image: img1,
          name: "Chicken Saslay",
          ingredients: "ingredient 1,ingredient 2,ingredient 3",
          price: 200,
          category:"Sasly dish"
        },
        {
            image: img2,
            name: "Burger",
            ingredients: "ingredient 1,ingredient 2,ingredient 3",
            price: 100,
            category:"Burger"
        },
        {
            image: img3,
            name: "Dessert ",
            ingredients: "ingredient 1,ingredient 2,ingredient 3",
            price: 450,
            category:"Dessert"
        },
        {
            image: img4,
            name: "Mallai Boti",
            ingredients: "ingredient 1,ingredient 2,ingredient 3",
            price: 50,
            category:"Chicken Piece"
        },
        {   
            image: img1,
            name: "Chicken Saslay",
            ingredients: "ingredient 1,ingredient 2,ingredient 3",
            price: 200,
            category:"Sasly dish"
          },
          {
              image: img2,
              name: "Burger",
              ingredients: "ingredient 1,ingredient 2,ingredient 3",
              price: 100,
              category:"Burger"
          },
          {
              image: img3,
              name: "Dessert ",
              ingredients: "ingredient 1,ingredient 2,ingredient 3",
              price: 450,
              category:"Dessert"
          },
          {
              image: img4,
              name: "Mallai Boti",
              ingredients: "ingredient 1,ingredient 2,ingredient 3",
              price: 50,
              category:"Chicken Piece"
          },
          {   
            image: img1,
            name: "Chicken Saslay",
            ingredients: "ingredient 1,ingredient 2,ingredient 3",
            price: 200,
            category:"Sasly dish"
          },
          {
              image: img2,
              name: "Burger",
              ingredients: "ingredient 1,ingredient 2,ingredient 3",
              price: 100,
              category:"Burger"
          },
          {
              image: img3,
              name: "Dessert ",
              ingredients: "ingredient 1,ingredient 2,ingredient 3",
              price: 450,
              category:"Dessert"
          },
          {
              image: img4,
              name: "Mallai Boti",
              ingredients: "ingredient 1,ingredient 2,ingredient 3",
              price: 50,
              category:"Chicken Piece"
          },
          {   
            image: img1,
            name: "Chicken Saslay",
            ingredients: "ingredient 1,ingredient 2,ingredient 3",
            price: 200,
            category:"Sasly dish"
          },
          {
              image: img2,
              name: "Burger",
              ingredients: "ingredient 1,ingredient 2,ingredient 3",
              price: 100,
              category:"Burger"
          },
          {
              image: img3,
              name: "Dessert ",
              ingredients: "ingredient 1,ingredient 2,ingredient 3",
              price: 450,
              category:"Dessert"
          },
          {
              image: img4,
              name: "Mallai Boti",
              ingredients: "ingredient 1,ingredient 2,ingredient 3",
              price: 50,
              category:"Chicken Piece"
          },
          {   
            image: img1,
            name: "Chicken Saslay",
            ingredients: "ingredient 1,ingredient 2,ingredient 3",
            price: 200,
            category:"Sasly dish"
          },
          {
              image: img2,
              name: "Burger",
              ingredients: "ingredient 1,ingredient 2,ingredient 3",
              price: 100,
              category:"Burger"
          },
          {
              image: img3,
              name: "Dessert ",
              ingredients: "ingredient 1,ingredient 2,ingredient 3",
              price: 450,
              category:"Dessert"
          },
          {
              image: img4,
              name: "Mallai Boti",
              ingredients: "ingredient 1,ingredient 2,ingredient 3",
              price: 50,
              category:"Chicken Piece"
          }
    ]
    const product = newproducts[index];
    // const cartIndex=Index
    const [isNum,setNum]=useState(1)
    const handleInc=()=>{
        setNum(isNum+1)
    }
    const handleDec=()=>{
        if(isNum >1)
        {
            setNum(isNum-1)
        }
        else
       { setNum(isNum)}
    }
    const [activeDesp,setDesp]=useState(null)
    const handleDesp=(option)=>{
        setDesp(option)
    }
    const productGroup=[]
    for(let i=0;i<newproducts.length;i+=4)
    {
        productGroup.push(newproducts.slice(i,i+4))
    }
  return (
    <section id='productdetail'>
         <div className="container-fluid vh-100" style={{backgroundImage:`url(${img})`, backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
        <div className="row d-flex justify-content-center">
        <div className="col-md-4 text-center text-white">
          <h2 id='heading' className='display-3'>Product Detail</h2>
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
    <div className="container-fluid my-md-5 my-3">
        <div className="row">
                     <div className="col-md-2 p-0">
                    <div className='d-flex flex-lg-column flex-row flex-md-wrap'>
                        <img src={product.image} alt="" className='img-fluid rounded mb-md-3 ms-md-0 ms-2 mb-1' style={{height:'140px', width:'100%'}}/>
                        <img src={product.image} alt="" className='img-fluid rounded mb-md-3 mb-1 ms-md-0 ms-2 'style={{height:'140px',width:'100%'}} />
                        <img src={product.image} alt="" className='img-fluid rounded mb-md-3 mb-1 ms-md-0 ms-2 ' style={{height:'140px',width:'100%'}}/>
                        <img src={product.image} alt="" className='img-fluid rounded mb-1 ms-md-0 ms-2 'style={{height:'140px',width:'100%'}}/>
                    </div>
                </div>  
                <div className="col-md-5">
                    <img src={product.image} alt="" className='img-fluid rounded' style={{width:'500px', height:'610px'}} />
                </div>
                <div className="col-md-5 px-3" id='productdetailtext'>
                    <h2 id='heading'>{product.name}</h2>
                    <p className='fs-3'>category:{product.category}</p>
                    <p className='fs-4 text-muted'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
                    <hr />
                    <p className='fs-3'>{product.price}.00$</p>
                    <div className='d-flex flex-row align-items-center'>
                        <FontAwesomeIcon className='mx-1' icon={faStar} size='1x' style={{color:'red'}}/>
                        <FontAwesomeIcon className='mx-1' icon={faStar} size='1x' style={{color:'red'}}/>
                        <FontAwesomeIcon className='mx-1' icon={faStar} size='1x' style={{color:'red'}}/>
                        <FontAwesomeIcon className='mx-1' icon={faStar} size='1x' style={{color:'red'}}/>
                        <FontAwesomeIcon className='mx-1' icon={faStar} size='1x' style={{color:'red'}}/>
                        <div className="vr" style={{height:'70px'}}></div>
                        <p className='fs-3 text-muted px-2 mt-3'>5.0 Rating</p>
                        <div className="vr" style={{height:'70px'}}></div>
                        <p className='fs-3 px-2 text-muted mt-3'>22 Review</p>
                    </div>
                    <p className='fs-3 text-muted mt-3'>Quantity</p>
                    <div className='d-flex'>
                       <div className='border pt-2' id='border1' onClick={handleDec}><FontAwesomeIcon className='mx-3'  icon={faMinus} size='1x'/></div>
                        <div className='border px-3 pt-2'>{isNum}</div>
                       <div className='border pt-2' id='border2'  onClick={handleInc}><FontAwesomeIcon  className='mx-3' icon={faPlus} size='1x'/></div>
                      <Link to={`/cart/${index}`}> <div className='btn mx-3'style={{backgroundColor:'#00BCA8', color:'white'}}>Add to Cart</div></Link>
                    </div>
                    <hr/>
                </div>
        </div>
    </div>
    <div className="container">
        <div className="row">
            <div className="col-md-6 text-center d-flex justify-content-around">
            <Link to={`/menu/${index}`} className={`text-decoration-none ${activeDesp === 'description' ? 'active' : ''}`}  onClick={()=>handleDesp('description')}><h2 style={activeDesp === 'description'?{color:'black',textDecorationLine:'underline', textDecorationColor:'grey'}:{color:'grey'}} id='heading' >Description</h2></Link>
            <Link to={`/menu/${index}`} className={`text-decoration-none ${activeDesp === 'review' ? 'active' : ''}`}  onClick={()=>handleDesp('review')}><h2 style={activeDesp === 'review'?{color:'black',textDecorationLine:'underline', textDecorationColor:'grey'}:{color:'grey'}} id='heading' >Review</h2></Link>
            </div>
        </div>
    </div>
   {activeDesp === 'description' && (
    <>
     <div className="container">
        <div className="row">
            <div className="col-md-12">
                <p className='fs-6'><div className='my-md-3 my-2'>Nam tristique porta ligula, vel viverra sem eleifend nec. Nulla sed purus augue, eu euismod tellus. Nam mattis eros nec mi sagittis sagittis. Vestibulum suscipit cursus bibendum. Integer at justo eget sem auctor auctor eget vitae arcu. Nam tempor malesuada porttitor. Nulla quis dignissim ipsum. Aliquam pulvinar iaculis justo, sit amet interdum sem hendrerit vitae. Vivamus vel erat tortor. Nulla facilisi. In nulla quam, lacinia eu aliquam ac, aliquam in nisl.</div>
                <div className='my-md-3 my-2'>Suspendisse cursus sodales placerat. Morbi eu lacinia ex. Curabitur blandit justo urna, id porttitor est dignissim nec. Pellentesque scelerisque hendrerit posuere. Sed at dolor quis nisi rutrum accumsan et sagittis massa. Aliquam aliquam accumsan lectus quis auctor. Curabitur rutrum massa at volutpat placerat. Duis sagittis vehicula fermentum. Integer eu vulputate justo. Aenean pretium odio vel tempor sodales. Suspendisse eu fringilla leo, non aliquet sem.</div></p>
                <h3 id='heading'>key Benefits</h3>
               <p> <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
               </li></p>
                <p><li> Maecenas ullamcorper est et massa mattis condimentum.
                </li></p>
                <p><li>Vestibulum sed massa vel ipsum imperdiet malesuada id tempus nisl.</li></p>
                <p><li>Etiam nec massa et lectus faucibus ornare congue in nunc.</li></p>
               <p><li>Maurisegetdiammagna,inblanditturpis.</li></p>
            </div>
        </div>
    </div>
    </>
   )}
   {activeDesp === 'review' && (
    <>
    <div className="container my-md-5 my-3">
        <div className="row d-flex justify-content-center">
            <div className="col-md-3 text-center">
                <FontAwesomeIcon icon={faStar} size='2x' style={{color:'red'}}/>
                <FontAwesomeIcon icon={faStar} size='2x' style={{color:'red'}}/>
                <FontAwesomeIcon icon={faStar} size='2x' style={{color:'red'}}/>
                <FontAwesomeIcon icon={faStar} size='2x' style={{color:'red'}}/>
                <FontAwesomeIcon icon={faStar} size='2x' style={{color:'red'}}/>
                <hr />
                <p className='fs-3 text-muted px-2 mt-3'>5.0 Rating</p>
            </div>
        </div>
    </div>
    </>
   )}
    <div className="container mt-2">
        <h3 id='heading'>Smilar Products</h3>
        <div className="row">
    <div className="col-md-12">
        <div id="carouselExampleIndicators" className="carousel slide" style={{overflowY:'hidden', paddingBottom:'60px',paddingTop:'70px'}}>
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
            </div>
            <div className="carousel-inner">
                {productGroup.map((group, groupIndex) => (
                    <div className={`carousel-item ${groupIndex === 0 ? 'active' : ''}`} key={groupIndex}>
                        <div className="row">
                            {group.map((card, index) => (
                                <div className="col-lg-3 col-md-6" key={index}>
                                    <Link to={`/menu/${index}`} className='text-decoration-none text-black'>
                                    <div className="card border-0" style={{width: "320px"}}>
                                        <img src={card.image} className="card-img-top rounded-0 img-fluid" style={{width:'320px', height:'320px'}} alt={card.name}/>
                                        <div className="card-body">
                                            <h3 className="card-title" id='heading'>{card.name}</h3>
                                            <h5 className="card-text" id='heading'>${card.price}</h5>
                                        </div>
                                    </div>
                                    </Link>
                                </div>
                            ))}
                            
                        </div>
                    </div>
                ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev" style={{left:'89%', bottom:'450px',width:'30px'}}>
                <span className="carousel-control-prev-icon " aria-hidden="true" style={{borderRadius:'50%', backgroundColor:'#00BCA8'}}></span>
            </button>
            <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next" style={{ bottom:'450px',width:'30px',right:'5%'}}>
                <span className="carousel-control-next-icon" aria-hidden="true" style={{borderRadius:'50%' , backgroundColor:'#00BCA8'}}></span>
            </button>
        </div>
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

export default ProductDetail
