export interface NavigationObjectType {
  name: string;
  path: string;
  icon: any;
  onClick?: Function | undefined;
  children?: NavigationObjectType[] | undefined;
}
