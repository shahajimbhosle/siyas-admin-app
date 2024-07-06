import { ResourceProps } from "../../types";

const Resource: React.FunctionComponent<ResourceProps> = ({ name }) => {
  return <p>RESOURCE - {name}</p>;
};

export default Resource;
