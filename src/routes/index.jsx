import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { RegisterPage } from "../pages/RegisterPage";
import { LoginPage } from "../pages/LoginPage";
import { SecurityRoutes } from "./SecurityRoutes";
import { PublicRoutes } from "./PublicRoutes"

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />

      <Route element={<PublicRoutes />}>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Route>
      
      <Route element={<SecurityRoutes />}>
        <Route path="/home" element={<HomePage />} />
      </Route>
    </Routes>
  );
};
