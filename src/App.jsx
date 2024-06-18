import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import SignUp from "./Pages/Signup/SignUp";
import Login from "./Pages/Login/Login";
import Listing from "./Pages/Listing/Listing";
import About from "./Pages/About/About";
import Details from "./Pages/Details/Details";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/listing" element={<Listing />} />
        <Route path="/about" element={<About />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </>
  );
}

export default App;

// App.css
