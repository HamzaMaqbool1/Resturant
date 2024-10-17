import React, { useState } from 'react';
import img from '../img/Img1.png';
import img1 from '../img/Img4.jpg';
import img2 from '../img/Img17.png';
import img3 from '../img/Img18.png';
import img4 from '../img/Img19.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useParams } from 'react-router-dom';
import { faCircleExclamation, faFrancSign, faHome, faMinus, faMultiply, faPhone, faPlus, faUtensils } from '@fortawesome/free-solid-svg-icons';

const productsList = [
    {   
        image: img1,
        name: "Chicken Saslay",
        ingredients: "ingredient 1,ingredient 2,ingredient 3",
        price: 200,
        category: "Sasly dish"
    },
    {
        image: img2,
        name: "Burger",
        ingredients: "ingredient 1,ingredient 2,ingredient 3",
        price: 100,
        category: "Burger"
    },
    {
        image: img3,
        name: "Dessert ",
        ingredients: "ingredient 1,ingredient 2,ingredient 3",
        price: 450,
        category: "Dessert"
    },
    {
        image: img4,
        name: "Mallai Boti",
        ingredients: "ingredient 1,ingredient 2,ingredient 3",
        price: 50,
        category: "Chicken Piece"
    },
    {   
        image: img1,
        name: "Chicken Saslay",
        ingredients: "ingredient 1,ingredient 2,ingredient 3",
        price: 200,
        category: "Sasly dish"
    },
    {
        image: img2,
        name: "Burger",
        ingredients: "ingredient 1,ingredient 2,ingredient 3",
        price: 100,
        category: "Burger"
    },
    {
        image: img3,
        name: "Dessert ",
        ingredients: "ingredient 1,ingredient 2,ingredient 3",
        price: 450,
        category: "Dessert"
    },
    {
        image: img4,
        name: "Mallai Boti",
        ingredients: "ingredient 1,ingredient 2,ingredient 3",
        price: 50,
        category: "Chicken Piece"
    },
    {   
        image: img1,
        name: "Chicken Saslay",
        ingredients: "ingredient 1,ingredient 2,ingredient 3",
        price: 200,
        category: "Sasly dish"
    },
    {
        image: img2,
        name: "Burger",
        ingredients: "ingredient 1,ingredient 2,ingredient 3",
        price: 100,
        category: "Burger"
    },
    {
        image: img3,
        name: "Dessert ",
        ingredients: "ingredient 1,ingredient 2,ingredient 3",
        price: 450,
        category: "Dessert"
    },
    {
        image: img4,
        name: "Mallai Boti",
        ingredients: "ingredient 1,ingredient 2,ingredient 3",
        price: 50,
        category: "Chicken Piece"
    },
    {   
        image: img1,
        name: "Chicken Saslay",
        ingredients: "ingredient 1,ingredient 2,ingredient 3",
        price: 200,
        category: "Sasly dish"
    },
    {
        image: img2,
        name: "Burger",
        ingredients: "ingredient 1,ingredient 2,ingredient 3",
        price: 100,
        category: "Burger"
    },
    {
        image: img3,
        name: "Dessert ",
        ingredients: "ingredient 1,ingredient 2,ingredient 3",
        price: 450,
        category: "Dessert"
    },
    {
        image: img4,
        name: "Mallai Boti",
        ingredients: "ingredient 1,ingredient 2,ingredient 3",
        price: 50,
        category: "Chicken Piece"
    },
    {   
        image: img1,
        name: "Chicken Saslay",
        ingredients: "ingredient 1,ingredient 2,ingredient 3",
        price: 200,
        category: "Sasly dish"
    },
    {
        image: img2,
        name: "Burger",
        ingredients: "ingredient 1,ingredient 2,ingredient 3",
        price: 100,
        category: "Burger"
    },
    {
        image: img3,
        name: "Dessert ",
        ingredients: "ingredient 1,ingredient 2,ingredient 3",
        price: 450,
        category: "Dessert"
    },
    {
        image: img4,
        name: "Mallai Boti",
        ingredients: "ingredient 1,ingredient 2,ingredient 3",
        price: 50,
        category: "Chicken Piece"
    }
];
const Cart = () => {
    const { index } = useParams();
    const newIndex = parseInt(index);
    const [newCart ,setCart] = useState([productsList[newIndex ]]);
    const [newTotal,setTotal] = useState(newCart[0].price);
    console.log(newCart[0].price)
    const [isNum,setNum]=useState(1);
    const handleInc = () => {
        setNum((prevNum) => {
            const newNum = prevNum + 1;
            const totalNo = newNum *( newCart[0].price);
            setTotal(totalNo);
            return newNum;
        });
    };
    
    const handleDec = () => {
        if (isNum > 1) {
            setNum((prevNum) => {
                const newNum = prevNum - 1;
                const totalNo = newNum * (newCart[0].price);
                setTotal(totalNo);
                return newNum;
            });
        } else {
            setNum(isNum);
        }
    };


    return (
        <section id='cart'>
            <div className="container-fluid vh-100" style={{ backgroundImage: `url(${img})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                <div className="row d-flex justify-content-center">
                    <div className="col-md-4 text-center text-white">
                        <h2 id='heading' className='display-3'>Cart Items</h2>
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
                    <div className="col-md-4">
                        <h3 id='heading'>Product</h3>
                    </div>
                    <div className="col-md-2">
                        <h3 id='heading'>Price</h3>
                    </div>
                    <div className="col-md-2">
                        <h3 id='heading'>Quantity</h3>
                    </div>
                    <div className="col-md-2">
                        <h3 id='heading'>Total</h3>
                    </div>
                    <div className="col-md-2">
                        <h3 id='heading'>Remove</h3>
                    </div>
                </div>
                {newCart.map((item, index) => (
                    <div className="row my-2" key={index}>
                        <div className="col-md-4">
                            <img src={item.image} alt={`${item.name}_image`} id="menuimage" style={{ width: '150px', height: '150px' }} />
                        </div>
                        <div className="col-md-2">
                            <h3 id='heading'>${item.price}</h3>
                        </div>
                        <div className="col-md-2">
                            <div className='d-flex'>
                                <div className='border pt-2' id='border1' onClick={() => handleDec(index)}>
                                    <FontAwesomeIcon className='mx-3' icon={faMinus} size='1x' />
                                </div>
                                <div className='border px-3 pt-2'>{isNum}</div>
                                <div className='border pt-2' id='border2' onClick={() => handleInc(index)}>
                                    <FontAwesomeIcon className='mx-3' icon={faPlus} size='1x' />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2">
                            {newTotal}
                        </div>
                        <div className="col-md-2">
                            <FontAwesomeIcon icon={faMultiply} size='2x' />
                        </div>
                        <hr className='my-2' />
                    </div>
                ))}
            </div>
            <div className="container">
        <div className="row">
            <div className="col-md-6 my-md-5 my-3">
                <h3 id='heading'>Coupon Code</h3>
                <div className="input-group">
             <input type="text" className="form-control" placeholder="Enter coupon Code" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
             <span className="input-group-text" id="basic-addon2" style={{backgroundColor:'#00BCA8'}}>Apply</span></div>
            </div>
            <div className="col-md-6 my-md-5 my-3">
                <h3 id='heading'>Total Bill</h3>
                <div className='border'>
                    <div className='d-flex'>
                        <h2 id='heading'>Cart Total</h2>
                        <h2 id='heading' className='ms-auto'>${newTotal}</h2>
                    </div>
                    <div className='d-flex'>
                        <h2 id='heading'>Shipping Charge</h2>
                        <h2 id='heading' className='ms-auto'>${0.00}</h2>
                    </div>
                    <hr />
                    <div className='d-flex'>
                        <h2 id='heading'>Total Amount</h2>
                        <h2 id='heading' className='ms-auto'>${newTotal}</h2>
                    </div>
                </div>
                <Link to={`/checkout/${newIndex}`}>
                <div className='btn float-md-end float-start my-3' style={{backgroundColor:'#00BCA8',color:'white'}}>Order Now</div>
                </Link>
            </div>
        </div>
    </div>
        </section>
    );
}

export default Cart;
