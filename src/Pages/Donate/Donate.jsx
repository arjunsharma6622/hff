import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import "./donate.scss"


const Donate = () => {
  return (
    <div className='donate'>
      <Navbar />
      <div className="donate_container">
        <div className="donate_content">
        <h1>Would like to get involved?</h1>
        <p>Support us in our cause by making a donation and becoming a hero for fun as well!</p>

        <button className='donate'>Donate</button>
        </div>
      </div>


      <Footer />
    </div>
  )
}

export default Donate