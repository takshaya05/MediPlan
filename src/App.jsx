import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <div
        className="min-h-screen bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            "linear-gradient(rgba(10, 25, 40, 0.76), rgba(15, 42, 48, 0.82)), url('/Bgd.png')",
        }}
      >
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;