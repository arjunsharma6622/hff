import React from 'react'
import "./serviceCard.scss"

const ServiceCard = () => {
  return (
    <div className='serviceCard'>
      <div className="serviceCardWrapper">

        <div className="service_image">
          <img src="./Images/Animal_Emergency_System.jpeg" alt="" />
        </div>

        <div className="service_title">
          <p>Animal Emergency System</p>
        </div>

      </div>
    </div>  
  )
}

export default ServiceCard