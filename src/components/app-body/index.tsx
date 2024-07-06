import styled from "styled-components";

const StyledBody = styled.div`
  padding: 10px;
  height: calc(100vh - 50px - 50px);
  overflow: auto;
`;

type AppBodyProps = {
  children: any;
};

const AppBody = ({ children }: AppBodyProps) => (
  <StyledBody>{children}</StyledBody>
);

export default AppBody;
