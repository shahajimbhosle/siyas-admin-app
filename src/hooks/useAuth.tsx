import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const useAuth = () => {
  const { auth, setAuth: setAuthToContext } = useContext(AuthContext);

  const isAuthenticated = () => auth?.isAuth;

  // TODO: set actual object after BE implementation
  const setAuth = () => {
    setAuthToContext({
      isAuth: true,
    });
  };

  return { isAuthenticated, setAuth };
};

export default useAuth;
