import React from 'react'
import {useState, useEffect} from 'react';
import { Logo_16,FormRow_16 } from '../components';
import Wrapper from '../assets/wrapper/Register_16';

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
  showAlter: false,
}

const Register_16 = () => {
  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    console.log('e.target',e.target)
    setValues({...values,[e.target.name]: e.target.value})
  }

  const onSubmit = (e) =>{
    e.preventDefault();
    console.log('e.target',e.target)
  }

  return (
    <Wrapper>
      <form className="form" onSubmit={onSubmit}>
        <Logo_16 />
        <h3>Register</h3>
        {/*name input*/}
        <FormRow_16
          type='text'
          name='name'
          value={values.name}
          handleChange={handleChange}
          className='form-input'
          />
        {/* email input */}
        <FormRow_16
          type='email'
          name='email'
          value={values.email}
          handleChange={handleChange}
          className='form-input'
          />  
       {/* password input */}
        <FormRow_16
          type='password'
          name='password'
          value={values.password}
          handleChange={handleChange}
          className='form-input'
          />

          <button className="btn btn-block" type="submit">
            Submit
          </button>
      </form>
    </Wrapper>    
  )
}

export default Register_16
