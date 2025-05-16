import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./Footer/Footer";

import Home from "./Home/Home";

function App() {
  return (
    <Router>
      {/* Now the Router context is available to Link components */}

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
