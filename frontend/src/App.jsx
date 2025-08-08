import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./Footer/Footer";
import SoftwareDevelopment from "./components/SoftwareDevelopmentService/SoftwareDevelopment";
import Home from "./Home/Home";
import Myservices from "./components/Myservices/Myservices";
import Cloud from "./components/Cloud&DevopsService/Cloud";
import Cybersecurity from "./components/Cybersecurity/Cybersecurity";
import Finance from "./components/Finance&Counting/Finance";
import ITConsulting from "./components/ITconsulting/Itconsulting";
import MissionPage from "./components/OurMission/Ourmission";
import ScrollToTop from "./ScrollToTop";
import ContactPage from "./components/Contactpage/Contact";

function App() {
  return (
    <Router>
      {/* Now the Router context is available to Link components */}

      <Header />
<ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Myservices />} />

        <Route
          path="/services/software-development"
          element={<SoftwareDevelopment />}
        />
        <Route path="/services/cloud-devops" element={<Cloud />} />
        <Route path="/services/cybersecurity" element={<Cybersecurity />} />
<Route path="/services/it-consulting" element={<ITConsulting />} />
        <Route path="/services/finance-accounting-services" element={<Finance />} />
        <Route path="/ourmission" element={<MissionPage />} />
         <Route path="/contactpage" element={<ContactPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
