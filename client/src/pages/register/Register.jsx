import React , {useState} from "react";
import "./register.css";
import { useAuth } from "../../context/authContext";




const Register = () => {
    const [formDate, setFormData] = useState({});

    const handleChange = (e) => {
        const { name, value} = e.target;
        setFormData({...formDate, [name]: value})
    }

    const {registerConfig} = useAuth();

    const handleSubmit = (e) => {   
        e.preventDefault();
        registerConfig(formDate);
    }


    return (
        <div className='register-container'>
            <div className="intro-container">
                <p>Lets get started</p>
            </div>
            
            <div className='user-detail'>
                {/* <Card > */}
                  <form onSubmit={handleSubmit} className="form">
                  <div>
                      <label htmlFor="name">Name</label>
                      <input type="name" name="name" id="name" placeholder='enter your name' onChange={handleChange}/>
                    </div>
                    <div>
                      <label htmlFor="email">Email</label>
                      <input type="email" name="email" id="email" placeholder='enter your email address' onChange={handleChange}/>
                    </div>
                    <div>
                      <label htmlFor="phone">Phone</label>
                      <input type="phone" name="phone" id="phone" placeholder='enter your phone number' onChange={handleChange}/>
                    </div>
                    <div>
                      <label htmlFor="password">Password</label>
                      <input type="password" name="password" id="password" placeholder='enter your password' onChange={handleChange} />
                    </div>
                    <div>
                      <label htmlFor="confirmPassword">Confirm <br /> Password</label>
                      <input type="password" name="confirm_password" id="confirmPassword" placeholder='confirm password' onChange={handleChange}/>
                    </div>
    
                    <div>
                      <div></div>
                      <div className='btn-container'>
                        <button type="submit">Register</button>
                      </div>
                    </div>
                    <div className='btn-container'>
                    <p>Already have an account? <button onClick={() => { window.location.href = '/login'}}>Login</button></p>
                    </div>
                    
                  </form>
                  
    
                {/* </Card> */}
            </div>
        </div>
      )
    
}

export default Register