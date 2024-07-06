import { useContext } from "react";
import { NavContext } from "../context/NavContext";

const useNavContext = () => {
  return useContext(NavContext);
};

export default useNavContext;
