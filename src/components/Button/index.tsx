interface ButtonProps {
  children: any;
  [key: string]: any;
}

const Button = ({ children }: ButtonProps): JSX.Element => {
  return <button>{children}</button>;
};

export default Button;
