export interface ResourceProps {
  path: string;
}

const Resource: React.FunctionComponent<ResourceProps> = ({ path }) => {
  return <p>RESOURCE - {path}</p>;
};

export default Resource;
