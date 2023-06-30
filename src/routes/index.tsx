import { Routes, Route } from "react-router-dom";
import { Homepage } from "../pages/Homepage";
import { Product } from "../pages/Product";
import { RegisterPage } from "../pages/Register";
import { ProfileViewAdmin } from "../pages/ProfileViewAdmin";
// import { TestPage } from "../pages/testPage";
import { Login } from "../pages/Login";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { ViewAdminAnnouncementsPublic } from "../pages/ViewAdminAnnouncements";
import { SendEmailResetPassword } from "../pages/ResetPasword";
import { ResetPassword } from "../pages/ResetPasword/token";
import { TestPage } from "../pages/testPage";


const RoutesPages = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/resetPassword" element={<SendEmailResetPassword />} />
        <Route path="/resetPassword/:token" element={<ResetPassword />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/product" element={<Product />} />
          <Route path="/profileViewAdmin" element={<ProfileViewAdmin />} />
        </Route>
          <Route path="/profileAdminAnnoucementsPublic" element={<ViewAdminAnnouncementsPublic />} />
          <Route path="/testPage" element={<TestPage />} />
        {/* <Route path="/login" element={} />
        <Route path="/profileView" element={} />
        <Route path="/register" element={} />
        <Route path="*" element={} /> */}
      </Routes>
    </>
  );
};

export default RoutesPages;
