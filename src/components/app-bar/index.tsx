import styled from "styled-components";
import { IoMenu } from "react-icons/io5";
import Logo from "../common/Logo";
import { useNavContext } from "../../hooks";
import ThemeSwitch from "./ThemeSwitch";

const HeaderContainer = styled.div`
  height: 50px;
  width: 100%;
  border-bottom: 1px solid #e5e5ea;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 10px;
  padding: 10px;
`;

const LogoContainer = styled.div`
  flex-grow: 1;
`;

const AppBar = () => {
  const { setExpanded } = useNavContext();

  const handleClickToggle = (e) => {
    e.stopPropagation();
    setExpanded((pre) => !pre);
  };

  return (
    <HeaderContainer>
      <IoMenu
        size={30}
        onClick={handleClickToggle}
        onMouseDown={(e) => e.stopPropagation()}
        className="mobile-nav-toggle"
      />
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <ThemeSwitch />
    </HeaderContainer>
  );
};

export default AppBar;
