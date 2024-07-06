import { Navigate, Route, Routes } from "react-router-dom";
import { useAuth } from "../../hooks";
import Layout from "../layout";
import ErrorPage from "../common/error-page";

const ProtectedRoutes = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated()) {
    return (
      <Routes>
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    );
  }

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<p>Dashboard</p>} />
        <Route path="*" element={<ErrorPage code={404} />} />
      </Routes>
    </Layout>
  );
};

export default ProtectedRoutes;
