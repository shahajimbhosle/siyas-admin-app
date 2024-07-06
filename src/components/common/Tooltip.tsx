import { Tooltip, Whisper } from "rsuite";

const ComponentTooltip = ({
  trigger = "hover",
  placement = "auto",
  text = "Tooltip text.",
  children,
}) => (
  <Whisper
    trigger={trigger}
    placement={placement}
    speaker={<Tooltip>{text}</Tooltip>}
  >
    {children}
  </Whisper>
);

export default ComponentTooltip;
