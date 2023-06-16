import { Routes, Route } from "react-router-dom";
import { Homepage } from "../pages/Homepage";
import { Product } from "../pages/Product";
import { RegisterPage } from "../pages/Register";
import { ProfileViewAdmin } from "../pages/ProfileViewAdmin";


const RoutesPages = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/product" element={<Product />} />
        {/* <Route path="/login" element={} /> */}
        {/* <Route path="/profileView" element={} /> */}
        {/* <Route path="/profileViewAdmin" element={} /> */}
        <Route path="/register" element={ <RegisterPage />} />
        {/* <Route path="*" element={} /> */}
        <Route path="/profileViewAdmin" element={<ProfileViewAdmin />} />
      </Routes>
    </>
  );
};

export default RoutesPages;
