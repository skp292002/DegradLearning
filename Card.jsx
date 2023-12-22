import React from 'react'
import { NavLink } from 'react-router-dom';



const Card = () => {
  return (
   <>
          <div className='col-md-4 col-10 mx-auto'>
          <div className="card">
       <img src="https://i.pinimg.com/originals/81/17/8b/81178b47a8598f0c81c4799f2cdd4057.gif" className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Web Development</h5>
    <p className="card-text">Uplift Your Career with an Immersive Learning Program. Learn from DeGrad. Learn the Latest Web Technologies & Gain a Competitive Edge in the Job Market.</p>
    <NavLink to="https://www.udemy.com/course/complete-web-development-course/" target='blank' className="btn btn-primary">Go to Course</NavLink>
  </div>
</div>
        </div>
        <div className='col-md-4 col-10 mx-auto'>
          <div className="card">
       <img src="https://i.pinimg.com/originals/87/0a/2f/870a2f0a426751eac1fc9cefcd97be78.gif" className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Android Development</h5>
    <p className="card-text">Android development course typically entail learning Java programming or other object-oriented programming languages in a development environment. </p>
    <NavLink to="https://www.udemy.com/course/the-complete-android-10-developer-course-mastering-android/" target='blank' className="btn btn-primary">Go to Course</NavLink>
  </div>
</div>
        </div>
        <div className='col-md-4 col-10 mx-auto'>
          <div className="card">
       <img src="https://i.pinimg.com/originals/c7/63/6e/c7636e639380045983eda11664284c74.gif" className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">UI/UX Development</h5>
    <p className="card-text">The UI/UX Design Specialization brings a design-centric approach to user interface and user experience design, and offers skill-based visual communications.</p>
    <NavLink to="https://www.udemy.com/course/complete-web-designer-mobile-designer-zero-to-mastery/" target='blank' className="btn btn-primary">Go to Course</NavLink>
  </div>
</div>
        </div>
        <div className='col-md-4 col-10 mx-auto'>
          <div className="card">
       <img src="https://i.pinimg.com/originals/7c/d5/3d/7cd53d36d121d839da9600ca055b01db.gif" className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">AI-ML</h5>
    <p className="card-text">AI and ML course include concepts of deep learning to build artificial neural networks and traverse layers of data abstraction and get a solid understanding of deep learning.</p>
    <NavLink to="https://www.udemy.com/course/ai-machine-learning-complete-course/" target='blank' className="btn btn-primary">Go to Course</NavLink>
  </div>
</div>
        </div>
        <div className='col-md-4 col-10 mx-auto'>
          <div className="card">
       <img src="https://i.pinimg.com/originals/d8/2a/a1/d82aa1a5820eab9a2dd72f95b6f55136.gif" className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Ethical Hacking</h5>
    <p className="card-text">Ethical Hacking is a course in the field of Technology. The course teaches students about the hacking of computer systems with permissions.</p>
    <NavLink to="https://www.udemy.com/course/complete-ethical-hacking-bootcamp-zero-to-mastery/" target='blank' className="btn btn-primary">Go to Course</NavLink>
  </div>
</div>
        </div>
        <div className='col-md-4 col-10 mx-auto'>
          <div className="card">
       <img src="https://i.pinimg.com/originals/bf/a9/28/bfa928ce10cac9daa4e96dad113891e1.gif" className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Data Science</h5>
    <p className="card-text">Data Science combines principles and practices from the fields of Mathematics, statistics, and computer engineering to analyze large amounts of data.</p>
    <NavLink to="https://www.udemy.com/course/the-data-science-course-complete-data-science-bootcamp/" target='blank' className="btn btn-primary">Go to Course</NavLink>
  </div>
</div>
        </div>
      
   
   </>
  );
};

export default Card