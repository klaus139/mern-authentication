import React from 'react'
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import './dashboard.css';

//import { useNavigate } from 'react-router-dom';


const Dashboard = () => {
    
  return (
    <>
    <Navbar />
    <section className='heading'>
        <h1>welcome  to the dashboard</h1>
        
    </section>
    <Footer />

    </>

  )
}

export default Dashboard