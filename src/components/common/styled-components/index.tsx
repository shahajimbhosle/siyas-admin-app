import { Divider } from "rsuite";
import styled from "styled-components";

export const FormFieldError = styled.div`
  display: block;
  color: red;
  margin-top: 5px;
`;

const StyledDivider = styled(Divider)`
  height: auto;
  margin-top: -5px;
  ${({ $nomargin }) =>
    $nomargin
      ? `
    margin-left: 0;
    margin-right: 0;
  `
      : ""}
`;

export const VerticalDivider = ({ nomargin = false }) => (
  <StyledDivider vertical $nomargin={nomargin} />
);
