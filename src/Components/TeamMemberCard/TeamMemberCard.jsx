import React from 'react'
import "./teamMemberCard.scss"
import {LinkedIn, Instagram, Twitter} from "@mui/icons-material"

const TeamMemberCard = ({name, role, img}) => {
  return (
    <div className='teamMemberCard'>
        <div className="card_wrapper">
            <div className="photo">
                <img src={`./Images/Team/${img}`} alt="" />
            </div>
            
            <div className="name">
                {name}
            </div>

            {/* <div className="desc">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis consectetur, necessitatibus exercitationem
            </div> */}

            <div className="role">
                <span>{role}</span>
            </div>

            <div className="team_member_socialMedia">
                <span><LinkedIn /></span>
                <span><Instagram /></span>
                <span><Twitter /></span>
            </div>
        </div>
    </div>
  )
}

export default TeamMemberCard