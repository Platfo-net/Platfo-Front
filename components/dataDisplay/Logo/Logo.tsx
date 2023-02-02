import React from "react";
import BrandLogo from "../../../assets/svg/platfo-logo.svg";
import styled from "@emotion/styled";
import { css, SerializedStyles } from "@emotion/react";
import { Image } from "../Image";
export interface ILogo {
  size?: number;
}

const getSize = (size?: number): SerializedStyles => css`
  width: ${size}rem;
  height: ${size}rem;
`;

const Wrapper = styled.div<ILogo>`
  ${({ size }) => getSize(size)};
  ${({ theme }) =>
    theme.name === "dark" &&
    css`
      .cls-3 {
        fill: #70d3ba;
      }
      .cls-2 {
        fill: #fff;
      }
    `}
`;

export const Logo: React.FC<ILogo> = ({ size = 5 }) => {
  return (
    <Wrapper className="relative" size={size}>
      <Image src={BrandLogo} alt="logo" width={200} height={200} />
    </Wrapper>
  );
};
