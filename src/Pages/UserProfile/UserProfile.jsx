import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'




axios.defaults.withCredentials = true

const UserProfile = () => {

    const [userDetails, setUserDetails] = useState("")


    const getUserDetails = async() => {

      const res = await axios.get("http://localhost:8000/api/user", {
        withCredentials : true
      }).catch(err => console.log(err))
      const data = res.data
      console.log(res)

      setUserDetails(data[0])
  }

    
    useEffect(() => {
        getUserDetails()
    }, [])


  return (
    <div>

        <Navbar />

        <h1>{userDetails.username}</h1>
        <h1>{userDetails.email}</h1>

        <Footer />

    </div>
  )
}

export default UserProfile