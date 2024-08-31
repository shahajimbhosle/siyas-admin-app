import { Nav, Sidebar, Sidenav } from "rsuite";
import { forwardRef, useRef } from "react";
import { NavLink } from "react-router-dom";
import { useClickAway, useNavContext, useScreenSize } from "../../hooks";
import { NavigationObjectType } from "../../types";
import isEmpty from "lodash/isEmpty";

import "./styles.css";

const AppNavLink = forwardRef(({ to, children, ...rest }: any, ref) => {
  return (
    <NavLink ref={ref} to={to} {...rest}>
      {children}
    </NavLink>
  );
});

const NavItem = ({ children, onClick = () => {}, ...rest }: any) => {
  const { setExpanded } = useNavContext();
  const { isMobile } = useScreenSize();

  return (
    <Nav.Item
      as={AppNavLink}
      {...rest}
      onClick={() => {
        onClick();
        isMobile && setExpanded(false);
      }}>
      {children}
    </Nav.Item>
  );
};

type AppNavProps = {
  navigation: Array<NavigationObjectType>;
};

const renderNav = (navigation: Array<NavigationObjectType>) =>
  navigation.map(({ name, path, icon, onClick, children }) => {
    if (!isEmpty(children)) {
      return (
        <Nav.Menu
          icon={icon}
          trigger="hover"
          placement="rightStart"
          title={
            <span className="link-title multilevel-link-title">{name}</span>
          }
          key={`${name}-${path}`}>
          {renderNav(children)}
        </Nav.Menu>
      );
    }

    return (
      <NavItem icon={icon} to={path} onClick={onClick} key={`${name}-${path}`}>
        <span className="link-title">{name}</span>
      </NavItem>
    );
  });

const AppNav: React.FunctionComponent<AppNavProps> = ({ navigation }) => {
  const { expanded, setExpanded } = useNavContext();
  const { isMobile } = useScreenSize();
  const navRef = useRef();
  useClickAway(navRef, () => isMobile && setExpanded(false));

  const toggleNav = () => {
    setExpanded((pre: boolean | undefined) => !pre);
  };

  return (
    <Sidebar
      style={{ display: "flex", flexDirection: "column" }}
      width={expanded ? 260 : 56}
      collapsible
      className={`nav-container ${expanded ? "expanded" : ""}`}
      ref={navRef}>
      <Sidenav className="nav" expanded={expanded} appearance="subtle">
        <Sidenav.Body>
          <Nav>{renderNav(navigation)}</Nav>
        </Sidenav.Body>
        <Sidenav.Toggle onToggle={toggleNav} />
      </Sidenav>
    </Sidebar>
  );
};

export default AppNav;
