import { Nav, Sidebar, Sidenav } from "rsuite";
import { MdDashboard } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
import { TbBuildingCommunity, TbReport, TbReportSearch } from "react-icons/tb";
import { forwardRef, useRef } from "react";
import { NavLink } from "react-router-dom";
import { useClickAway, useNavContext, useScreenSize } from "../../hooks";
import "./styles.css";
import { NavigationObjectType } from "../../types";

const AppNavLink = forwardRef(({ to, children, ...rest }, ref) => {
  return (
    <NavLink ref={ref} to={to} {...rest}>
      {children}
    </NavLink>
  );
});

const NavItem = ({ children, ...rest }) => {
  const { setExpanded } = useNavContext();
  const { isMobile } = useScreenSize();

  return (
    <Nav.Item
      as={AppNavLink}
      {...rest}
      onClick={() => isMobile && setExpanded(false)}>
      {children}
    </Nav.Item>
  );
};

type AppNavProps = {
  navigation: NavigationObjectType;
};

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
          <Nav>
            <NavItem icon={<MdDashboard />} to="/">
              <span className="link-title">Dashboard</span>
            </NavItem>
            <NavItem icon={<FaPeopleGroup />} to="/clients">
              <span className="link-title">Clients</span>
            </NavItem>
            <NavItem icon={<TbBuildingCommunity />} to="/properties">
              <span className="link-title">Properties</span>
            </NavItem>
            <Nav.Menu
              icon={<TbReport />}
              trigger="hover"
              placement="rightStart"
              title={<span className="link-title">Reports</span>}>
              <NavItem to="/all-reports">
                <span className="link-title">All Reports</span>
              </NavItem>
              <NavItem icon={<TbReportSearch />} to="/report1">
                <span className="link-title">Report 1</span>
              </NavItem>
            </Nav.Menu>
          </Nav>
        </Sidenav.Body>
        <Sidenav.Toggle onToggle={toggleNav} />
      </Sidenav>
    </Sidebar>
  );
};

export default AppNav;
