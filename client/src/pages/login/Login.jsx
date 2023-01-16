import React,{useState} from 'react'
import './login.css'

import { useAuth } from '../../context/authContext'


const Login = () => {
  const {LoginConfig} = useAuth();
  const [formData, setFormData] = useState({})

  const handleChange = (e) => {
      const{name, value} = e.target
      setFormData({...formData, [name]: value})
  }



  const handleSubmit = (e) => {
      e.preventDefault()
      LoginConfig(formData)

      // setFormData({})

  }
  return (
    <div className='login-container'>
            <div className="login-intro">
                <p>Lets get started</p>
            </div>
            
            <div className='login-detail'>
        
           
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="email">Email</label>
                  <input type="email" name="email" id="email" placeholder="Enter your email" onChange={handleChange}/>
                </div>
                <div>
                  <label htmlFor="password">Password</label>
                  <input type="password" name="password" id="password"  placeholder="Enter your password" onChange={handleChange}/>
                </div>
               

                <div>
                  <div></div>
                  <div className='login-container'>
                    <button type="submit">Login</button>
                  </div>
                </div>
                <p className='login-p'>Don't have an account? <button onClick={() => { window.location.href = '/'}}>Register</button></p>
                
              </form>
              </div>
 

           
        </div>
    
  )
}

export default Login