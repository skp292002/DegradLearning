import React, { useState } from 'react'

const Contact = () => {
  const [data, setdata]=useState(
    {
      fullname:"",
      phone:"",
      email:"",
      msg:"",
    }
  );
  const InputEvent=(event)=>{
    const{name,value}=event.target;
    setdata((preval)=>{
      return{
        ...preval,
        [name]:value,
      }
    })
  }
  const formSubmit=async(event)=>{
       event.preventDefault();
       const{ fullname, phone, email, msg }=data;
       if(fullname&& phone&& email&& msg ){
        const res = fetch('https://degradrecords-492af-default-rtdb.firebaseio.com/UserDataRecord.json',{
         method:"POST",
         headers:{
          "Content-Type":"applictaion/json",
         },
         body:JSON.stringify({
          fullname,
          phone, 
          email, 
          msg
         })
        }
         ) 
         if(res){
          setdata({
            fullname:"",
      phone:"",
      email:"",
      msg:"",
          })
          alert("Data Stored");
         }else{
          alert("plz fill the data");
         }
       } else{
        alert("plz fill the data");
       }
  };
  return (
   <>
   <div className='my-5'>
   <h1 className='text-center'>Contact Us</h1>
   </div>
   <div div className='containe contact_div'>
    <div className='row'>
      <div className='col-md-6 col-10 mx-auto'>
        <form onSubmit={formSubmit} method="POST">
      <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">FullName</label>
  <input type="text"
         class="form-control" 
         id="exampleFormControlInput1" 
         name="fullname"
         value={data.fullname}
         onChange={InputEvent}
         placeholder="Enter your Name" />
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Phone</label>
  <input type="number"
         class="form-control" 
         id="exampleFormControlInput1" 
         name="phone"
         value={data.phone}
         onChange={InputEvent}
         placeholder="mobile number" />
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email Adress</label>
  <input type="email"
         class="form-control" 
         id="exampleFormControlInput1" 
         name="email"
         value={data.email}
         onChange={InputEvent}
         placeholder="name@example.com" />
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Message</label>
  <textarea class="form-control" 
            id="exampleFormControlTextarea1" 
            name="msg"
            value={data.msg}
            onChange={InputEvent}
            rows="3"></textarea>
</div>
<div class="col-12">
    <button class="btn btn-outline-primary"
           type="submit"
           >Submit form</button>
  </div>
</form>
      </div>
    </div>
   </div>
   </>
  );
};

export default Contact