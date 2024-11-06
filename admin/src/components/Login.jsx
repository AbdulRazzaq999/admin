import axios from 'axios'
import React, { useState } from 'react'
import { backend_url } from '../App'
import { toast } from 'react-toastify'

const Login = ({setToken}) => {
        const [email,setEmail] = useState('')
        const [password,setPassword] = useState('')
  
        const submitHandler= async(e)=>{
          try {
            e.preventDefault();
            
            const response = await axios.post('http://localhost:4000/api/user/admin',{email,password});
           console.log(response);
           if(response.data.success)
           {
            setToken(response.data.token)
           }
           
            
          
            
          } catch (error) {
            console.log(error);
            
          }
           
            

            

        }

  return (
    
    <div>
      <div className='bg-white shadow-md rounded-lg px-8 py-6 max-w-md'>
        <h1>Admin Panel</h1>
        <form onSubmit={submitHandler}>
            <div className='mb-3 min-w-72'>
                <p className='text-sm font-medium text-gray-700 mb-2'>Email Address</p>
                <input onChange={(e)=>setEmail(e.target.value)} className='rounded-md w-full px-3 py-2 border border-gray-300 outline-none' type="email" placeholder='Enter your Email' />
            </div>
            <div>
                <p>Password</p>
                <input onChange={(e)=>setPassword(e.target.value)} className='rounded-md w-full px-3 py-2 border border-gray-300 outline-none' type="password" placeholder='Enter your password' />
            </div>
            <button className='bg-black text-white w-full mt-2 py-2 px-4' type='submit'>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login
