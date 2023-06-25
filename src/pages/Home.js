import React from 'react'
import image from './img1/job.jpg'
import './Home.css'
import Cards from '../components/Cards'

const Home = () => {
  return (
    <>
    
      <img className='jobimg' src={image} alt='photo'/>
        <p className='get'>Get Updates </p>
    <div className='info'>
        
        <br/>for Jobs and Internships openings from different companies
        
    <Cards/>
    </div>
    </>
  
  );
  
}

export default Home
