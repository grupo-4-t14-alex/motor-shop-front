import { Routes, Route} from "react-router-dom";
import { Homepage } from "../pages/Homepage";


const RoutesPages = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        {/* <Route path="/login" element={} />
        <Route path="/product" element={} />
        <Route path="/profileView" element={} />
        <Route path="/profileViewAdmin" element={} />
        <Route path="/register" element={} />
        <Route path="*" element={} /> */}
      </Routes>
    </>
  );
};

export default RoutesPages