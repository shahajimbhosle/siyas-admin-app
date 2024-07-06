interface LogoProps {
  logoPath: string | undefined;
}

const Logo = ({ logoPath }: LogoProps): JSX.Element | null =>
  !logoPath ? null : <img src={logoPath} alt="Company Logo" />;

export default Logo;
