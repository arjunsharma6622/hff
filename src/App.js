import Home from "./Pages/Home/Home"
import Donate from "./Pages/Donate/Donate"
import OurService from "./Pages/OurService/Ourservice"
import Contact from "./Pages/Contact/Contact"

import {BrowserRouter, Routes, Route} from "react-router-dom"
import Ourservice from "./Pages/OurService/Ourservice"
import Team from "./Pages/Team/Team"
import Partners from "./Pages/Partners/Partners"

function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/contact" element={<Contact />}/>
        <Route exact path="/services" element={<OurService />}/>
        <Route exact path="/partners" element={<Partners />}/>
        <Route exact path="/team" element={<Team />}/>
        <Route exact path="/donate" element={<Donate />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
