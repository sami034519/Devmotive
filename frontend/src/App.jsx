import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./Footer/Footer";
import SoftwareDevelopment from "./SoftwareDevelopmentService/SoftwareDevelopment";
import Home from "./Home/Home";
import Myservices from "./Myservices/Myservices";
import Cloud from "./Cloud&DevopsService/Cloud";
import Cybersecurity from "./Cybersecurity/Cybersecurity";
function App() {
  return (
    <Router>
      {/* Now the Router context is available to Link components */}

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Myservices/>} />

        <Route path="/services/software-development" element={<SoftwareDevelopment />} />
         <Route path="/services/cloud-devops" element={<Cloud />} />
         <Route path="/services/cybersecurity" element={<Cybersecurity />} />


      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
