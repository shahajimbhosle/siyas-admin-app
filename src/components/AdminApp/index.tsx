import React, { ReactElement } from "react";
import { ResourceProps } from "../Resource";

interface AdminAppProps {
  children: ReactElement<ResourceProps> | Array<ReactElement<ResourceProps>>;
}

const AdminApp: React.FunctionComponent<AdminAppProps> = ({ children }) => {
  return <>{children}</>;
};

export default AdminApp;
