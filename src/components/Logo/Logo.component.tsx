import React, { FunctionComponent } from "react";
import { ImgLogo } from './Logo.style';

type LogoProps = {
  isDark: boolean,
};

export const Logo: FunctionComponent<LogoProps> = ({
  isDark,
  ...props
}) => {
  const logoLink = isDark ? "/logowebsite.svg" : "/logowebsitelight.svg";
  return (
    <ImgLogo src={logoLink} />
  );
};
