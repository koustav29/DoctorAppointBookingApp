import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import SignUp from "./Pages/Signup/SignUp";
import Login from "./Pages/Login/Login";
import Listing from "./Pages/Listing/Listing";
// import About from "./Pages/About/About";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/listing" element={<Listing />} />
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
    </>
  );
}

export default App;

// App.css
