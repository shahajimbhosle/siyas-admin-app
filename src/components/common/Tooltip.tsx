import { Tooltip, Whisper, WhisperProps } from "rsuite";

type ComponentTooltipProps = WhisperProps & {
  text?: string;
  children: any;
};

const ComponentTooltip = ({
  trigger = "hover",
  placement = "auto",
  text = "Tooltip text.",
  children,
  speaker,
  ...rest
}: ComponentTooltipProps) => (
  <Whisper
    trigger={trigger}
    placement={placement}
    speaker={speaker ?? <Tooltip>{text}</Tooltip>}
    {...rest}>
    {children}
  </Whisper>
);

export default ComponentTooltip;
