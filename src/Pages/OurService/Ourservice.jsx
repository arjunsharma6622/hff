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

      <div className="heading">
        <h1>Our Services</h1>
      </div>

      <div className="serviceCards">

      <ServiceCard 
      service_name="Animal Emergency System"
      img="Animal_Emergency_System.jpeg"
      to_link="/animal_emergency_system"
      />
      <ServiceCard 
      service_name="Throw a Party"
      img="throw_a_party.png"
      to_link="/throw_a_party"
      coming_soon={true}
      />
      <ServiceCard 
      service_name="Emergency Funds"
      img="emergency_fund.png"
      to_link="/emergency_fund"
      coming_soon={true}
      />
      <ServiceCard 
      service_name="Self Defence Camps"
      img="mma_service.png"
      to_link="/self_defence"
      coming_soon={true}
      />

      </div>
      <Footer />
    </div>
  )
}
 
export default Ourservice