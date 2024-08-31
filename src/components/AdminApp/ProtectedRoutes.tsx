import { ReactElement, Children, Fragment } from "react";
import Layout from "../layout";
import { NavigationObjectType, ResourceProps } from "../../types";
import { Route, Routes } from "react-router";
import ErrorPage from "../common/error-page";

const RESOURCE_COMPONENT_NAME = "Resource";
const ROUTE_COMPONENT_NAME = "Route";

interface ProtectedRouteProps {
  resources: ReactElement<ResourceProps> | Array<ReactElement<ResourceProps>>;
  navigation: Array<NavigationObjectType>;
  logo?: ReactElement | string;
}

const ProtectedRoutes: React.FunctionComponent<ProtectedRouteProps> = ({
  resources,
  navigation,
  logo,
}) => (
  <Layout navigation={navigation} logo={logo}>
    <Routes>
      {Children.toArray(resources).map((resource: any) => {
        const {
          name,
          list: List,
          create: Create,
          edit: Edit,
        } = resource?.props;

        const componentName = resource?.type?.name ?? "";

        if (RESOURCE_COMPONENT_NAME === componentName) {
          return (
            <Fragment key={name}>
              {List && (
                <Route key={`/${name}`} path={`/${name}`} element={List} />
              )}
              {Create && (
                <Route
                  key={`/${name}/create`}
                  path={`/${name}/create`}
                  element={Create}
                />
              )}
              {Edit && (
                <Route
                  key={`/${name}/edit`}
                  path={`/${name}/edit`}
                  element={Edit}
                />
              )}
            </Fragment>
          );
        } else if (ROUTE_COMPONENT_NAME === componentName) {
          return resource;
        }

        return null;
      })}
      <Route path="*" element={<ErrorPage code={404} />} />
    </Routes>
  </Layout>
);

export default ProtectedRoutes;
