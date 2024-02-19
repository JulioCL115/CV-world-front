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
import Checkout from "./scenes/Checkout";
import CreateCv from "./scenes/CreateCv";
import UpgradeSubscription from "./scenes/UpgradeSubscription";
import Detail from "./scenes/Detail";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";
import MyProfile from "./scenes/MyProfile";
import MyCvs from "./scenes/MyCvs";
import UpdateCv from "./scenes/UpdateCv";
import UpdateProfile from "./scenes/UpdateProfile";
import ResetPassword from "./scenes/ResetPassword";


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
        <Route path="/home" element={<Home />} />
        <Route path="/curriculums" element={<Curriculums />} />
        <Route path="/subscriptions" element={<Subscriptions />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/createcv" element={<CreateCv />} />
        <Route path="/detail/:cvId" element={<Detail/>}></Route>
        <Route path="/mycvs" element={<MyCvs/>}></Route>
        <Route path="/myprofile" element={<MyProfile/>}></Route>
        <Route path="/upgradesubscription" element={<UpgradeSubscription/>}></Route>
        <Route path="/updatecv/:cvId" element={<UpdateCv/>}></Route>
        <Route path="/updateprofile" element={<UpdateProfile/>}></Route>
        <Route path="/resetpassword" element={<ResetPassword/>}></Route>
      </Routes>
      <Footer/>
      </AuthProvider>
    </div>
  );
}

export default App;
