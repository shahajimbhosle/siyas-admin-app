import styled from "styled-components";
import { IoMenu } from "react-icons/io5";
import { useNavContext } from "../../hooks";
import ThemeSwitch from "./ThemeSwitch";
import { ReactElement, SyntheticEvent } from "react";

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

type AppBarProps = {
  logo?: ReactElement | string;
};

const AppBar = ({ logo }: AppBarProps) => {
  const { setExpanded } = useNavContext();

  const handleClickToggle = (e: SyntheticEvent) => {
    e.stopPropagation();
    setExpanded((pre: boolean | undefined) => !pre);
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
        {logo && typeof logo === "string" ? <img src={logo} /> : logo}
      </LogoContainer>
      <ThemeSwitch />
    </HeaderContainer>
  );
};

export default AppBar;
