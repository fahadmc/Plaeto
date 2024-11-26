// import react from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import Help from "./components/header/Help";
import Company from "./components/header/Company";
import Home from "./components/header/help/Home";
import Men from "./components/header/Men";
import Women from "./components/header/Women";
import Kids from "./components/header/Kids";
import School from "./components/header/School";
import Logotp from "./components/header/Logotp";
import Special from "./components/header/Special";
import Productview from "./pages/Productview";
import Produwomen from "./pages/Produwomen";

function App() {
  return (
    <div className="parent">
       
      {/* <UserContext.Provider value={user}> */}
      
      <Routes>
        <Route path="/home" element={<Home />} />


        <Route path="/Help/" element={<Help />} />
        <Route path="/Company/" element={<Company/>} />
        <Route path="/Men/" element={<Men/>} />
        <Route path="/Women/" element={<Women/>} />
        <Route path="/Kids/" element={<Kids/>} />
        <Route path="/School/" element={<School/>} />
        <Route path="/Logotp/" element={<Logotp/>} />
        <Route path="/special offer/" element={<Special/>} />
        <Route path="/mens/:id" element={<Productview/>} />
        <Route path="/womens/:id" element={<Produwomen/>} />
        
       
       
      
    

       
      </Routes>
      {/* </UserContext.Provider> */}
    </div>
  );
}

export default App;

