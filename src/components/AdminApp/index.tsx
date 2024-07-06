import React, { ReactElement } from "react";
// import ContextProvider from "../ContextProvider";
// import Layout from "../layout";
import {
  // NavigationObjectType,
  ResourceProps,
} from "../../types";
import { BrowserRouter, Route, Routes } from "react-router-dom";

interface AdminAppProps {
  children: ReactElement<ResourceProps> | Array<ReactElement<ResourceProps>>;
  // navigation: NavigationObjectType;
}

const AdminApp: React.FunctionComponent<AdminAppProps> = ({
  children,
  // navigation,
}) => {
  console.log(children, React.Children.toArray(children));
  return (
    // <ContextProvider>
    <BrowserRouter>
      {/* <Layout navigation={navigation}> */}
      <Routes>
        {React.Children.toArray(children).map((resource) => {
          const { name, list: List, create: Create, edit: Edit } = resource;
          return (
            <React.Fragment key={name}>
              {List && (
                <Route key={`/${name}`} path={`/${name}`} element={<List />} />
              )}
              {Create && (
                <Route
                  key={`/${name}/create`}
                  path={`/${name}/create`}
                  element={<Create />}
                />
              )}
              {Edit && (
                <Route
                  key={`/${name}/edit`}
                  path={`/${name}/edit`}
                  element={<Edit />}
                />
              )}
            </React.Fragment>
          );
        })}
      </Routes>
      {/* </Layout> */}
    </BrowserRouter>
    // </ContextProvider>
  );
};

export default AdminApp;
