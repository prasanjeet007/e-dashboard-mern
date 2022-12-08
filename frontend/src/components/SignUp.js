import React, { useState } from 'react';
import './SignUp.css';

export default function SignUp() {
    const [firstName,setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassWord] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
  return (
    <div className='signUpForm'><form>
        <h1 className='formHeading'>SignUp Form</h1>
        <input type="text" placeholder='Enter Your First Name' onChange={(e)=>setFirstName(e.target.value)}/>
        <input type="text" placeholder='Enter Your Last Name' onChange={(e)=>setLastName(e.target.value)} autoComplete='off'/>
        <input type="email" placeholder='Enter Your Email' onChange={(e)=>setEmail(e.target.value)} autoComplete='off'/>
        <input type="password" placeholder='Enter Your Password' onChange={(e)=>setPassWord(e.target.value)} autoComplete='off'/>
        <input type="password" placeholder='Confirm Password' onChange={(e)=>setConfirmPassword(e.target.value)}/>
        <div className='buttons'>
        <button type='submit'>Submit</button>|
        <button type='button'>Cancel</button>
        </div>
        </form></div>
  )
}
