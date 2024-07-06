import { createContext, useState } from "react";
import { AuthContextProviderType, AuthObjectType } from "../types";

interface AuthContextType {
  auth: AuthObjectType;
  setAuth: ({}: AuthObjectType) => any;
}

export const AuthContext = createContext<AuthContextType>({
  auth: { isAuth: false },
  setAuth: () => {},
});

export const AuthContextProvider = ({ children }: AuthContextProviderType) => {
  const [auth, setAuth] = useState<AuthObjectType>({
    isAuth: true,
  });

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
