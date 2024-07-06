import { Panel, Stack, Divider } from "rsuite";
import styled from "styled-components";
import LoginForm from "./LoginForm";
import Logo from "../Logo";

const LoginContainer = styled(Stack)`
  height: 100vh;
`;

const StyledPanel = styled(Panel)`
  background-color: #ffffff;
  width: 400px;
`;

interface LoginProps {
  logoPath?: string | undefined;
}

const Login = ({ logoPath }: LoginProps) => {
  return (
    <LoginContainer
      justifyContent="center"
      alignItems="center"
      direction="column">
      <Logo logoPath={logoPath} />
      <StyledPanel bordered>
        <h3 className="text-center">Sign In</h3>
        <Divider />
        <LoginForm />
      </StyledPanel>
    </LoginContainer>
  );
};

export default Login;
