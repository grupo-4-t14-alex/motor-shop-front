import { Routes, Route } from "react-router-dom";
import { Homepage } from "../pages/Homepage";
import { Product } from "../pages/Product";
import { ProfileViewAdmin } from "../pages/ProfileViewAdmin";
import { Login } from "../pages/Login";
import { ProtectedRoutes } from "./ProtectedRoutes";


export const RoutesPages = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
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
  )
}

export default RoutesPages;
