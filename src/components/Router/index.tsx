import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "../Login";
import ProtectedRoutes from "./ProtectedRoutes";

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<ProtectedRoutes />} />
    </Routes>
  </Router>
);

export default AppRouter;
