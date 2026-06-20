import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/public/Navbar";
import Footer from "./components/public/Footer";
import WhatsAppButton from "./components/public/WhatsAppButton";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRoutes />
      <Footer />
      <WhatsAppButton />
    </BrowserRouter>
  );
}

export default App;