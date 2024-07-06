import styled from "styled-components";

const ErrorPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 100%;
  max-width: 600px;
`;

const ErrorPage = ({ code = 404 }) => {
  const getDescription = (code) => {
    switch (code) {
      case 403:
        return "The current page is unavailable or you do not have permission to access.";

      case 404:
        return "We are sorry but the page you are looking for was not found.";

      case 503:
        return "This page is being updated and maintained.";

      case 500:
      default:
        return "We are sorry but our server encountered an internal error.";
    }
  };

  return (
    <ErrorPageContainer>
      <Image src={`/images/error/${code}.svg`} />
      <h1 className="error-page-code">{code}</h1>
      {getDescription(code)}
    </ErrorPageContainer>
  );
};

export default ErrorPage;
