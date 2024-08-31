import React, { ReactElement } from "react";
import ContextProvider from "../ContextProvider";
import { NavigationObjectType, ResourceProps } from "../../types";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";

import "rsuite/dist/rsuite.min.css";
import "./themes.css";
import "./index.css";
import Login from "../Login";
import ProtectedRoutes from "./ProtectedRoutes";

interface AdminAppProps {
  children: ReactElement<ResourceProps> | Array<ReactElement<ResourceProps>>;
  navigation: Array<NavigationObjectType>;
  logo?: ReactElement | string;
}

/**
 * This is root element
 *
 * @param children ReactElement | ReactElement[]
 * @returns ReactElement
 */
const AdminApp: React.FunctionComponent<AdminAppProps> = ({
  children,
  navigation = [],
  logo,
}) => {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login logo={logo} />} />
          <Route
            path="*"
            element={
              <ProtectedRoutes
                resources={children}
                navigation={navigation}
                logo={logo}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
};

export default AdminApp;
