import Home from "./Pages/Home/Home"
import Donate from "./Pages/Donate/Donate"
import OurService from "./Pages/OurService/Ourservice"
import Contact from "./Pages/Contact/Contact"
import Team from "./Pages/Team/Team"
import Supporters from "./Pages/Supporters/Supporters"

import {BrowserRouter, Routes, Route} from "react-router-dom"
import AnimalEmergencySystem from "./Pages/AnimalEmergencySystem/AnimalEmergencySystem"
import Login from "./Pages/Login/Login"
import Profile from "./Pages/Profile/Profile"
import Register from "./Pages/Register/Register"
import UserProfile from "./Pages/UserProfile/UserProfile"
import {useSelector} from "react-redux"

function App() {

  const isLoggedIn = useSelector(state => state.isLoggedIn)
  console.log(isLoggedIn)
  return (
    <div className="app">
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/contact" element={<Contact />}/>
        <Route exact path="/services" element={<OurService />}/>
        <Route exact path="/supporters" element={<Supporters />}/>
        <Route exact path="/team" element={<Team />}/>
        <Route exact path="/donate" element={<Donate />}/>
        <Route exact path="/animal_emergency_system" element={<AnimalEmergencySystem />}/>
        <Route exact path="/login" element={<Login />}/>
        <Route exact path="/register" element={<Register />}/>
        <Route exact path="/profile" element={<Profile />}/>
        <Route exact path="/user" element={<UserProfile />}/>




        {/* <PrivateRoute path="/user" exact element={<UserProfile />}/> */}

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
