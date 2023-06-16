import { Routes, Route } from "react-router-dom";
import { Homepage } from "../pages/Homepage";
import { Product } from "../pages/Product";
import { ProfileViewAdmin } from "../pages/ProfileViewAdmin";
import { Login } from "../pages/Login";


export const RoutesPages = () => {
  return (
    <>
 
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/product" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profileViewAdmin" element={<ProfileViewAdmin />} />
        {/* 
        <Route path="/profileView" element={} />
        <Route path="/register" element={} />
        <Route path="*" element={} /> */}
      </Routes>

   
    </>
  )
}

export default RoutesPages;
