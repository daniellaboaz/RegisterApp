// frontend/src/adminpage
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import validation2 from './ValidationFolder/SignupValidation';
import { signup } from './api/server';
import { ToastContainer ,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function HomePage() {
    const [values,setValues]= useState({
        name: '',
        email: '',
        password: ''
    });

    const[errors, setErrors]=useState({});

    const handleInput =(event)=>{
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const err = validation2(values);
        setErrors(err);
    
        if (err.name === ''  && err.email=== ''  && err.password=== '' ) {
            signup(values)
            .then(res => {
              toast.success(res.message);
            })
            .catch((err) => {
              console.log(err);
              if (err.response && err.response.data && err.response.data.error) {
                // Check if the error is due to duplicate email entry
                if (err.response.data.error.includes("Email already exists")) {
                  alert("Email already exists. Please choose a different email address.");
                } else {
                    alert(err.response.data.error);
                }
              } else {
                alert("Error during sign-up. Please try again.");
              }
            });
        }
      };

  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
        <div className='bg-white p-3 rounded w-25'>
            <h2>Add new users:</h2>
            <form action="" onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor='name'><strong>Name</strong></label>
                    <input type='text' placeholder='Enter Name' name='name'
                    onChange={handleInput} className='form-control rounded-0'/>
                    {errors.name && <span className='text-danger'> {errors.name} </span>}
                </div>
                <div className='mb-3'>
                    <label htmlFor='email'><strong>Email</strong></label>
                    <input type='email' placeholder='Enter Email' name='email'
                    onChange={handleInput} className='form-control rounded-0'/>
                    {errors.email && <span className='text-danger'> {errors.email} </span>}
                </div>
                <div className='mb-3'>
                    <label htmlFor='password'><strong>Password</strong></label>
                    <input type='password' placeholder='Enter Password' name='password'
                    onChange={handleInput} className='form-control rounded-0'/>
                    {errors.password && <span className='text-danger'> {errors.password} </span>}
                </div>
                <button type='Submit' className='btn btn-success w-100 rounded-0'>Add user</button>
                <Link to='/showusers' className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Show users page</Link>
                <Link to='/changepass' className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Change password</Link>
                <Link to="/" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Log out</Link>
            </form>
            <ToastContainer />
        </div>
  
    </div>
  )
};





export default HomePage;
