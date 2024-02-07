import { Routes, Route } from "react-router-dom";
import Home from "./scenes/Home";
import Curriculums from "./scenes/Curriculums";
import Subscriptions from "./scenes/Subscriptions";
import SignIn from "./scenes/SignIn";
import SignUp from "./scenes/SignUp";
import Cart from "./scenes/Cart";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";
import './App.css';


function App() {
  return (
    <div>
      <TopBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/curriculums" element={<Curriculums />} />
        <Route path="/subscriptions" element={<Subscriptions />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
