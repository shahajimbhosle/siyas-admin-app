import { ReactElement } from "react";

export interface ResourceProps {
  name: string;
  list?: ReactElement<any>;
  create?: ReactElement<any>;
  edit?: ReactElement<any>;
}
