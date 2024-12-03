import Footer from "./components/Footer"; // Import the Footer component
import Navbar from "./components/Navbar"; // Import the Navbar component
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import "./styles.css";
import '@fontsource/poppins'; // Defaults to 400 weight
import '@fontsource/poppins/600.css'; // Semi-bold
import '@fontsource/roboto'; // Defaults to 400 weight


const App = () => {
  return (
    <Router>
      <div className="gradient-background">
        <Navbar />
        <div className="container" role="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Home />} /> {/* si auncune page trouvé*/}
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
