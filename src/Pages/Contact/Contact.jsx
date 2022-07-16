import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from "../../Components/Footer/Footer"
import Form from "../../Components/Form/Form"
import "./contact.scss"
import SocialMedia from '../../Components/SocialMedia/SocialMedia'



const Contact = () => {
  return (
    <div className='contact'>
      <Navbar />
      <Form />
      <Footer />
    </div>
  )
}

export default Contact