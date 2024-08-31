import styled from "styled-components";
import img403 from "/public/images/403.svg";
import img404 from "/public/images/404.svg";
import img500 from "/public/images/500.svg";
import img503 from "/public/images/503.svg";

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

const getDescription = (code: number) => {
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

const getImgSrc = (code: number) => {
  switch (code) {
    case 403:
      return img403;

    case 404:
      return img404;

    case 503:
      return img503;

    case 500:
    default:
      return img500;
  }
};

const ErrorPage = ({ code = 404 }) => (
  <ErrorPageContainer>
    <Image src={getImgSrc(code)} />
    <h1 className="error-page-code">{code}</h1>
    {getDescription(code)}
  </ErrorPageContainer>
);

export default ErrorPage;
