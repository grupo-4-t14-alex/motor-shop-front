import { Routes, Route } from "react-router-dom";
import { Homepage } from "../pages/homepage";
import { Product } from "../pages/Product";
import { ProfileViewAdmin } from "../pages/ProfileViewAdmin";
import { TestPage } from "../pages/testPage";
import { Login } from "../pages/Login";
import { ProtectedRoutes } from "./ProtectedRoutes";

export const RoutesPages = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/product" element={<Product />} />
        <Route path="/profileViewAdmin" element={<ProfileViewAdmin />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/login" element={} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/product" element={<Product />} />
          <Route path="/profileViewAdmin" element={<ProfileViewAdmin />} />
        </Route>
        {/* 
        <Route path="/profileView" element={} />
        <Route path="/register" element={} />
        <Route path="*" element={} /> */}
      </Routes>
    </>
  );
};

export default RoutesPages;
