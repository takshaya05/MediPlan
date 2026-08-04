import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Dashboard from "./pages/Dashboard";
import ContactUs from "./pages/ContactUs";
import GetStarted from "./pages/GetStarted";

function App() {
  return (
    <BrowserRouter>
      <div className="h-screen flex flex-col text-white overflow-hidden relative">
        <div className="absolute inset-0 -z-10 bg-[#10284E]">
          <div className="w-full h-full bg-linear-to-br from-[#004955]/30 via-[#14365C]/40 to-[#10284E] blur-[120px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,94,96,0.2),transparent_60%)]" />
        </div>

        <header className="fixed top-0 left-0 w-full z-50">
          <Header />
        </header>

        <main className="flex-1 mt-20 mb-16 overflow-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/get-started" element={<GetStarted />} />
          </Routes>
        </main>

        <footer className="fixed bottom-0 left-0 w-full z-50">
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;