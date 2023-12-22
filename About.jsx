import React from 'react'
import { NavLink } from 'react-router-dom';

const About = () => {
  return (
   <>
   <section id='header' className='d-flex align-items-center'>
    <div className='container-fluid nav_bg'>
      <div className='row'>
        <div className='col-10 mx-auto'>
        <div className='row'>
          <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
       <h1>Welcome to About page <strong className='brand-name'>DeGrad</strong></h1>
       <h3 className='my-3'>
       DeGrad, Inc. is an education technology company that provides an online learning and teaching platform. It is founded in April 2023 by Shivam Patle. DeGrad, Inc. Nagpur, Maharashtra, India.
       </h3>
       <div className='mt-3'>
        <NavLink to='/contact' className='btn-get-started'>
          Contact Now
        </NavLink>
       </div>
          </div>
          <div className='col-lg-6 order-lg-2 header-img'>
            <img className= 'home-img' src='https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg' alt="home-img" />
          </div>
        </div>
        </div>
      </div>
    </div>
   </section>
   </>
  );
};

export default About