import React from "react";
import { BrowserRouter , Routes , Route } from "react-router-dom";
import Home from "./pages/Home"
import Navbar from "./components/Navbar";
import Profile from "./pages/Profile";
import Market from "./pages/Market";

const App = () => {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/market" element={<Market />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
