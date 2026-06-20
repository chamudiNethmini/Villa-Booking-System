import { Routes, Route } from "react-router-dom";
import Home from "../pages/public/Home";
import About from "../pages/public/About";
import Facilities from "../pages/public/Facilities";
import Gallery from "../pages/public/Gallery";
import Contact from "../pages/public/Contact";
import BookNow from "../pages/public/BookNow";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/facilities" element={<Facilities />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/book-now" element={<BookNow />} />
    </Routes>
  );
}

export default AppRoutes;