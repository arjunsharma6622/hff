import React from 'react'
import "./ourservice.scss"
import Navbar from "../../Components/Navbar/Navbar"
import Footer from "../../Components/Footer/Footer"
import ServiceCard from '../../Components/ServicesCard/ServiceCard'
import { Link } from 'react-router-dom'

const Ourservice = () => {
  return (
    <div className='ourservice'> 
      <Navbar />
      <div className="serviceCards">
        <Link to="/animal_emergency_system" className='link'>
      <ServiceCard />
      </Link>
      </div>
      <Footer />
    </div>
  )
}
 
export default Ourservice