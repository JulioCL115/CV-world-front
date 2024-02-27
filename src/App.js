import "./App.css";

import axios from "axios";

import { Routes, Route, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect, useState } from 'react';

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
import TopBar from "./components/main/TopBar";
import Footer from "./components/main/Footer";
import MyProfile from "./scenes/main/MyProfile";
import MyCvs from "./scenes/main/MyCvs";
import UpdateCv from "./scenes/main/UpdateCv";
import UpdateProfile from "./scenes/main/UpdateProfile";
import ResetPassword from "./scenes/main/ResetPassword";
import AdminAnalytics from "./scenes/admin-dashboard/Analytics";
import AdminUsers from "./scenes/admin-dashboard/Users";
import AdminCurriculums from "./scenes/admin-dashboard/Curriculums";
import AdminSubscriptions from "./scenes/admin-dashboard/Subscriptions";
import AdminCategories from "./scenes/admin-dashboard/Categories";
import AdminLanguages from "./scenes/admin-dashboard/Languages";
import AdminComments from "./scenes/admin-dashboard/Comments";
import CreateCategory from "./scenes/admin-dashboard/CreateCategory";
import CreateLanguage from "./scenes/admin-dashboard/CreateLanguage";
import CreateSubscription from "./scenes/admin-dashboard/CreateSubscription";
import UpdateCategory from "./scenes/admin-dashboard/UpdateCategory";
import UpdateLanguage from "./scenes/admin-dashboard/UpdateLanguage";
import UpdateSubscription from "./scenes/admin-dashboard/UpdateSubscription";
import SideBar from "./components/admin-dashboard/SideBar";
import Topbar from "./components/admin-dashboard/Topbar";
import PaymentFeedback from "./scenes/main/PaymentFeedback";
import VerifyEmail from "./scenes/main/VerifyEmail";
import { AuthProvider } from "./AuthProvider/authProvider";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./scenes/admin-dashboard/theme";

axios.defaults.baseURL = "http://localhost:3001/"

function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  useEffect(() => {
    dispatch(getAllCategories());
    dispatch(getAllLanguages());
    dispatch(getAllSubscriptions());
  });


  return (
    <div>
      <AuthProvider>
        <div>
          {!isAdminRoute && <TopBar />}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/curriculums" element={<Curriculums />} />
            <Route path="/subscriptions" element={<Subscriptions />} />
            <Route path="/checkout/:subscriptionId" element={<Checkout />} />
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
            <Route path="/verifyemail" element={<VerifyEmail />}></Route>
            <Route path="/success/*" element={<PaymentFeedback feedbackType="success" />} />
            <Route path="/pending/*" element={<PaymentFeedback feedbackType="pending" />} />
            <Route path="/failure/*" element={<PaymentFeedback feedbackType="failure" />} />
          </Routes>
          {!isAdminRoute && <Footer />}
        </div>
        {isAdminRoute && (
          <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <div className="containerAdmin">
                <SideBar />
                <div className="containerViews">
                  <Topbar />
                  <Routes>
                    <Route path="/admin/analytics" element={<AdminAnalytics />} />
                    <Route path="/admin/users" element={<AdminUsers />} />
                    <Route path="/admin/curriculums" element={<AdminCurriculums />} />
                    <Route path="/admin/subscriptions" element={<AdminSubscriptions />} />
                    <Route path="/admin/createsubscription" element={< CreateSubscription />} />
                    <Route path="/admin/updatesubscription/:subscriptionId" element={< UpdateSubscription />} />
                    <Route path="/admin/categories" element={<AdminCategories />} />
                    <Route path="/admin/createcategory" element={< CreateCategory />} />
                    <Route path="/admin/updatecategory/:categoryId" element={< UpdateCategory />} />
                    <Route path="/admin/languages" element={<AdminLanguages />} />
                    <Route path="/admin/createlanguage" element={< CreateLanguage />} />
                    <Route path="/admin/updatelanguage/:languageId" element={< UpdateLanguage />} />
                    <Route path="/admin/comments" element={<AdminComments />} />
                  </Routes>
                </div>
              </div>
            </ThemeProvider>
          </ColorModeContext.Provider>
        )}
      </AuthProvider>
    </div >
  );
}

export default App;
