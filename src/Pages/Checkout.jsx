import React from 'react'
import img from '../img/Img1.png'
import img1 from '../img/Img4.jpg'
import img2 from '../img/Img17.png'
import img3 from '../img/Img18.png'
import img4 from '../img/Img19.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, useParams } from 'react-router-dom'
import { faCircleExclamation,faFrancSign, faHome,faPhone,  faUtensils } from '@fortawesome/free-solid-svg-icons';
import { Formik, Form, Field, ErrorMessage } from 'formik';  
import * as Yup from 'yup';
const Checkout = () => {
    const { newIndex }=useParams();
    const cid = newIndex;
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
        }]
       const total=Math.floor(54.76 + newproducts[cid].price)
       const initialValue={
        firstname:'Hamza',
        lastname:'Maqbool',
        email:'hamza.suri100@gmail.com',
        phone:'+92 317-6933287',
        area:'Khanewal',
        address:'House 17 street 4 z-block khanewal',
       }
       const validationSchema = Yup.object({
        firstname: Yup.string().required("Name is Empty"),
        lastname: Yup.string().required("Empty field"),
        email: Yup.string().email("Invalid email format").required("Enter email"),
        phone: Yup.string().required("Enter phone number"),
        address: Yup.string().required("Address field is empty"),
        area: Yup.string().max(10, "Area should be at most 10 characters").required("Area field is empty")
      });
      
  return (
    <section id='checkout'>
         <div className="container-fluid vh-100" style={{backgroundImage:`url(${img})`, backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
        <div className="row d-flex justify-content-center">
        <div className="col-md-4 text-center text-white">
          <h2 id='heading' className='display-3'>Check Out</h2>
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
        <div className="row my-md-5 my-3">
            <div className="col-md-8">
            <Formik initialValues={initialValue}
            validationSchema={validationSchema}
            onSubmit={(values,{setSubmitting})=>{
              console.log(values)
              setTimeout(()=>{setSubmitting(false)},2000);
            }}>
               {({isSubmitting})=>(
                  <Form>
          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="firstname" className="form-label">First Name</label>
              <Field type="text" className="form-control" id="firstname" name="firstname" placeholder="Enter your first name" />
              <ErrorMessage name="firstname" component="div" className="text-danger" />
            </div>
            <div className="col-md-6">
              <label htmlFor="lastName" className="form-label">Last Name</label>
              <Field type="text" className="form-control" id="lastName" name="lastname" placeholder="Enter your last name"  />
              <ErrorMessage name="lastname" component="div" className="text-danger" />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="email" className="form-label">Email</label>
              <Field type="email" className="form-control" id="email" name="email" placeholder="Enter your email"  />
              <ErrorMessage name="email" component="div" className="text-danger" />
            </div>
            <div className="col-md-6">
              <label htmlFor="phone" className="form-label">Phone Number</label>
              <Field type="text" className="form-control" id="phone" name="phone" placeholder="Enter your phone number"  />
              <ErrorMessage name="phone" component="div" className="text-danger" />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="area" className="form-label">Area</label>
              <Field type="text" className="form-control" id="area" name="area" placeholder="Enter your area" />
              <ErrorMessage name="area" component="div" className="text-danger" />
            </div>
            <div className="col-md-6">
              <label htmlFor="address" className="form-label">Address</label>
              <Field type="text" className="form-control" id="address" name="address" placeholder="Enter your address" />
              <ErrorMessage name="address" component="div" className="text-danger" />
            </div>
          </div>

          <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </Form>
               )}
            </Formik>
            </div>
            <div className="col-md-4 border">
                <div className='d-flex my-md-3 my-2'>
                    <img src={newproducts[cid].image} alt="" style={{width:'100px', height:'100px'}} />
                    <div>
                    <h6 id='heading'>{newproducts[cid].name}</h6>
                    <h6 id='heading'>${newproducts[cid].price}</h6>
                    </div>
                </div>
                <hr />
                <div className='d-flex'>
                        <h6 id='heading'>Sub Total</h6>
                        <h6 id='heading' className='ms-auto'>${newproducts[cid].price}</h6>
                </div>
                <div className='d-flex'>
                        <h6 id='heading'>Shipping</h6>
                        <h6 id='heading' className='ms-auto'>Free</h6>
                </div>
                <div className='d-flex'>
                        <h6 id='heading'>Discount</h6>
                        <h6 id='heading' className='ms-auto'>25%</h6>
                </div>
                <div className='d-flex'>
                        <h6 id='heading'>Tax</h6>
                        <h6 id='heading' className='ms-auto'>54.76$</h6>
                </div>
                <hr />
                <div className='d-flex'>
                        <h6 id='heading'>Total</h6>
                        <h6 id='heading' className='ms-auto'>{total}</h6>
                </div>
              <Link to={`/checkout/${cid}`} className='text-decoration-none'>
              <div className='d-flex justify-content-center'> <div className='btn ' style={{backgroundColor:'#00BCA8', color:'white'}}>Checkout</div></div>
              </Link>
            </div>
        </div>
    </div>
    </section>
  )
}

export default Checkout
