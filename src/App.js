import "./App.css";

import { Routes, Route, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from 'react';

import getAllCategories from "./redux/actions/categories/getAllCategories";
import getAllLanguages from "./redux/actions/languages/getAllLanguages";
import getAllSubscriptions from "./redux/actions/subscriptions/getAllSubscriptions";

import Home from "./scenes/main/Home";
import Curriculums from "./scenes/main/Curriculums";
import Subscriptions from "./scenes/main/Subscriptions";
import SignIn from "./scenes/main/SignIn";
import SignUp from "./scenes/main/SignUp";
import Checkout from "./scenes/main/Checkout";
import CreateCv from "./scenes/main/CreateCv";
import UpgradeSubscription from "./scenes/main/UpgradeSubscription";
import Detail from "./scenes/main/Detail";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";
import MyProfile from "./scenes/main/MyProfile";
import MyCvs from "./scenes/main/MyCvs";
import UpdateCv from "./scenes/main/UpdateCv";
import UpdateProfile from "./scenes/main/UpdateProfile";
import ResetPassword from "./scenes/main/ResetPassword";
import Analytics from "./scenes/admin-dashboard/Analytics";
import Users from "./scenes/admin-dashboard/Users";
import Cvs from "./scenes/admin-dashboard/Cvs";
// import Subscriptions from "./scenes/admin-dashboard/Subscriptions";
import Categories from "./scenes/admin-dashboard/Categories";
import Languages from "./scenes/admin-dashboard/Languages";
import Comments from "./scenes/admin-dashboard/Comments";

import { AuthProvider } from "./AuthProvider/authProvider";

function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  useEffect(() => {
    dispatch(getAllCategories());
    dispatch(getAllLanguages());
    dispatch(getAllSubscriptions());
  });


  return (
    <div>
      <AuthProvider>
      {!isAdminRoute && <TopBar />}
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/curriculums" element={<Curriculums />} />
          <Route path="/subscriptions" element={<Subscriptions />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/createcv" element={<CreateCv />} />
          <Route path="/detail/:cvId" element={<Detail />}></Route>
          <Route path="/mycvs" element={<MyCvs />}></Route>
          <Route path="/myprofile" element={<MyProfile />}></Route>
          <Route path="/upgradesubscription" element={<UpgradeSubscription />}></Route>
          <Route path="/updatecv/:cvId" element={<UpdateCv />}></Route>
          <Route path="/updateprofile" element={<UpdateProfile />}></Route>
          <Route path="/resetpassword" element={<ResetPassword />}></Route>
          <Route path="/admin/analytics" element={<Analytics />}></Route>
          <Route path="/admin/users" element={<Users />}></Route>
          <Route path="/admin/cvs" element={<Cvs />}></Route>
          <Route path="/admin/subscriptions" element={<Subscriptions />}></Route>
          <Route path="/admin/categories" element={<Categories />}></Route>
          <Route path="/admin/languages" element={<Languages />}></Route>
          <Route path="/admin/comments" element={<Comments />}></Route>
        </Routes>
        {!isAdminRoute && <Footer />}
      </AuthProvider>
    </div>
  );
}

export default App;
