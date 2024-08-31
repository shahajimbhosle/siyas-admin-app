import { Panel, Stack, Divider } from "rsuite";
import styled from "styled-components";
import LoginForm from "./LoginForm";
import { ReactElement } from "react";

const LoginContainer = styled(Stack)`
  height: 100vh;
`;

const StyledPanel = styled(Panel)`
  background-color: #ffffff;
  width: 400px;
`;

interface LoginProps {
  logo?: ReactElement | string;
}

const Login = ({ logo }: LoginProps) => {
  return (
    <LoginContainer
      justifyContent="center"
      alignItems="center"
      direction="column">
      {logo && typeof logo === "string" ? <img src={logo} /> : logo}
      <StyledPanel bordered>
        <h5 className="text-center">Sign In</h5>
        <Divider />
        <LoginForm />
      </StyledPanel>
    </LoginContainer>
  );
};

export default Login;
