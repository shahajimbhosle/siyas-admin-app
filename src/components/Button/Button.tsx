interface ButtonProps {
  children: any;
  [key: string]: any;
}

const Button = ({ children }: ButtonProps) => {
  return <button>{children}</button>;
};

export default Button;
