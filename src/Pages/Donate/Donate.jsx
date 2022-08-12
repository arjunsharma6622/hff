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
        <h1 className="donateTitle">Would like to get involved?</h1>
        <p className="donateText">Support us in our cause by making a donation and becoming a hero for fun as well!</p>

        <div className="form_link">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSfP1byu4nsAtqNY6ScSIXKeQuXkGc5T9rGmDRylD94jhitFNg/viewform" target="_blank">
            <span>Donate</span>
          </a>
        </div>
        {/* <p className="enterAmount">Amount</p> */}
        {/* <input type="text" placeholder="Indian Rupees Only" className="inputBox" />
        <button className='donate_button'>Donate</button> */}
        </div>
      </div>





      <Footer />
    </div>
  )
}

export default Donate