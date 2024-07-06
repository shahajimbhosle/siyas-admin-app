import Dropdown from "rsuite/Dropdown";
import IconButton from "rsuite/IconButton";
import { ImBrightnessContrast } from "react-icons/im";
import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { useToggleTheme } from "../../hooks";
import styled from "styled-components";
import ComponentTooltip from "../common/Tooltip";

const DropdownItem = styled(Dropdown.Item)`
  display: flex;
  align-items: center;
  gap: 5px;
  line-height: 1;
`;

const ThemeSwitch = () => {
  const { theme, setLightTheme, setDarkTheme, setHighContrastTheme } =
    useToggleTheme();

  const renderIconButton = (props, ref) => {
    return (
      <ComponentTooltip text="Change theme" placement="left">
        <IconButton
          {...props}
          ref={ref}
          icon={
            theme === "light" ? (
              <MdOutlineLightMode />
            ) : theme === "dark" ? (
              <MdDarkMode />
            ) : (
              <ImBrightnessContrast />
            )
          }
          circle
        />
      </ComponentTooltip>
    );
  };

  return (
    <Dropdown renderToggle={renderIconButton} placement="bottomEnd">
      <DropdownItem
        icon={<MdOutlineLightMode />}
        onClick={setLightTheme}
        active={theme === "light"}
      >
        Light
      </DropdownItem>
      <DropdownItem
        icon={<MdDarkMode />}
        onClick={setDarkTheme}
        active={theme === "dark"}
      >
        Dark
      </DropdownItem>
      <DropdownItem
        icon={<ImBrightnessContrast />}
        onClick={setHighContrastTheme}
        active={theme === "high-contrast"}
      >
        High Contrast
      </DropdownItem>
    </Dropdown>
  );
};

export default ThemeSwitch;
