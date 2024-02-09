import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./Components/Homepage";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Header from "./Components/Header";
// import User from "./Components/User";
import User from "./Components/User";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/user/:userId" element={<User />} />
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
