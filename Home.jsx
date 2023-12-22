import React from 'react'
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
   <>
   <section id='header' className='d-flex align-items-center'>
    <div className='container-fluid nav_bg'>
      <div className='row'>
        <div className='col-10 mx-auto'>
        <div className='row'>
          <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
       <h1>Take up the Skill Development Courses for Your Field with <strong className='brand-name'>DeGrad</strong></h1>
       <h3 className='my-1'>
        "We have a Team of 1 Member...."  
       <h2 className='my-1'> <strong className='selection'>A broad selection of courses</strong></h2> 
       Choose from given online courses with new additions published every month
       </h3>
       <div className='mt-2'>
        <NavLink className='btn-get-started' to='/service'>
          Get Started
        </NavLink>
       </div>
          </div>
          <div className='col-lg-6 order-lg-2 header-img'>
            <img className= 'home-img' src='https://i.pinimg.com/originals/02/74/20/0274207612d515f49012c87803a9e631.gif' alt="home-img" />
          </div>
        </div>
        </div>
      </div>
    </div>
   </section>
   </>
  );
};

export default Home