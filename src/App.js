import "./App.css";

import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from 'react';

import getAllCategories from "./redux/actions/categories/getAllCategories";
import getAllLanguages from "./redux/actions/languages/getAllLanguages";
import getAllSubscriptions from "./redux/actions/subscriptions/getAllSubscriptions";

import Home from "./scenes/Home";
import Curriculums from "./scenes/Curriculums";
import Subscriptions from "./scenes/Subscriptions";
import SignIn from "./scenes/SignIn";
import SignUp from "./scenes/SignUp";
import Cart from "./scenes/Cart";
import FormCreateCv from "./scenes/FormCreateCv";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";

import { AuthProvider } from "./AuthProvider/authProvider";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategories());
    dispatch(getAllLanguages());
    dispatch(getAllSubscriptions());
  });

  return (

    <div>
      <AuthProvider>
      <TopBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/curriculums" element={<Curriculums />} />
        <Route path="/subscriptions" element={<Subscriptions />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/createcv" element={<FormCreateCv />} />
      </Routes>
      <Footer/>
      </AuthProvider>
    </div>
  );
}

export default App;
