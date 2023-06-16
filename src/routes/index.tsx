import { Routes, Route } from "react-router-dom";
import { Homepage } from "../pages/Homepage";
import { Product } from "../pages/Product";
import { RegisterPage } from "../pages/Register";
import { ProfileViewAdmin } from "../pages/ProfileViewAdmin";
import { Login } from "../pages/Login";
import { ProtectedRoutes } from "./ProtectedRoutes";


const RoutesPages = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/register" element={ <RegisterPage />} />
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/product" element={<Product />} />
          <Route path="/profileViewAdmin" element={<ProfileViewAdmin />} />
        </Route>
        {/* <Route path="/login" element={} />
        <Route path="/profileView" element={} />
        <Route path="/register" element={} />
        <Route path="*" element={} /> */}
      </Routes>
    </>
  )
}

export default RoutesPages;
