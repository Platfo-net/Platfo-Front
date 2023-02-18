import { AvailableIcons, Icon } from "@/components/general/Icon";
import { getBoxShadow, Color, getColors, getSize, Size, Variant } from "@/styles/globals";
import styled from "@emotion/styled";
import React, { ForwardedRef, forwardRef } from "react";
import { settings } from "@/styles/Settings";
import { Typography } from "@/components/general/Typography";

const IconSize = {
  sm: 1,
  md: 1.5,
  lg: 2,
};

export interface ITextArea {
  label?: string;
  value?: string;
  placeholder?: string;
  width?: string;
  status?: "danger" | "warning" | "success" | "default";
  color?: Color;
  col?: number;
  size?: Size;
  variant?: Variant;
  icon?: AvailableIcons;
  feedback?: string;
  className?: string;
  rows?: number;
}

type StyledTextAreaType = {
  value?: string;
  placeholder?: string;
  width?: string;
  color?: Color;
  status?: "danger" | "warning" | "success" | "default";
  textAreaSize?: Size;
  variant?: Variant;
  rows?: number;
  icon?: AvailableIcons;
};

const StyledTextArea = styled.textarea<StyledTextAreaType>`
  all: unset;
  transition: ${settings.transition};
  padding-left: ${({ icon, textAreaSize }) => (icon && textAreaSize ? IconSize[textAreaSize] + 0.2 : 1)}rem;
  ${({ textAreaSize, width }) => getSize(textAreaSize, width)}
  ${({ variant, theme, status }) => getColors(status, variant, theme)}
  ${({ theme }) => getBoxShadow(theme.components.shadow1, theme.components.shadow2)};
  color: ${({ theme }) => theme.font.regular};
  &::placeholder {
    color: ${({ theme }) => theme.font.placeholder};
  }
  ~ svg {
    padding-left: ${({ icon, textAreaSize }) => (icon && textAreaSize ? 0.4 : 1)}rem;
    color: ${({ theme }) => theme.font.placeholder};
  }
  &:focus,
  &:hover {
    ${({ variant, theme, color }) => getColors(color, variant, theme)}
    ~ svg {
      color: ${({ theme }) => theme.components.primary};
    }
  }
  height: ${({ rows = 1 }) => rows * 20}px;
  padding: 0.8rem;
`;

type WrapperType = Pick<ITextArea, "width">;
const Wrapper = styled.div<WrapperType>`
  position: relative;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  transition: ${settings.transition};
  width: ${({ width }) => (width ? width : "100%")};
  height: ${({ rows = 1 }) => rows * 20}px;
  span {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
`;

type StyledIconType = Pick<ITextArea, "icon">;
const StyledIcon = styled(Icon)<StyledIconType>`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
`;

const Feedback = styled(Typography.Text)`
  position: absolute;
  bottom: -20px;
`;

export const TextArea: React.FC<ITextArea> = forwardRef(
  (
    {
      label,
      value,
      width = "100%",
      placeholder,
      rows = 1,
      feedback,
      icon,
      variant = "outlined",
      status = "default",
      color = "primary",
      col = 1,
      size = "md",
      className = "",
      ...rest
    },
    ref
  ) => {
    return (
      <Wrapper className={className}>
        <Typography.Text size={size}>{label}</Typography.Text>
        <div className="flex relative">
          <StyledTextArea
            ref={ref as ForwardedRef<HTMLTextAreaElement>}
            value={value}
            placeholder={placeholder}
            rows={rows}
            width={width}
            variant={variant}
            color={color}
            status={status}
            icon={icon}
            textAreaSize={size}
            {...rest}
          />
          {icon && <StyledIcon name={icon} size={size === "sm" ? "lg" : "2xl"} />}
        </div>

        <Feedback size={"sm"} color={status === "default" ? "regular" : status}>
          {feedback}
        </Feedback>
      </Wrapper>
    );
  }
);

TextArea.displayName = "TextArea";
