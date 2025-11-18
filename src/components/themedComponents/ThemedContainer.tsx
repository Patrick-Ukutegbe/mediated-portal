"use client";

import React from "react";
import useTheme from "@/src/hooks/useTheme";
import { themeConfig } from "@/src/lib/themeConfig";
import { Theme } from "@/src/types";

interface ThemedContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  backgroundColor?: string;
  borderColor?: string;
}

const ThemedContainer: React.FC<ThemedContainerProps> = ({
  children,
  style,
  className = "",
  ...rest
}) => {
  const { theme } = useTheme();
  const config = themeConfig[theme];

  return (
    <div
      className={`p-y[14.33px] p-x[24px] ${className}`}
      style={{
        // backgroundColor: backgroundColor ?? colors.primary,
        // border: borderColor ? `1px solid ${borderColor ?? colors.inputBorder}` : "none",
        borderRadius: theme === Theme.CORPORATE ? "0px" : config.borderRadius,
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
};

export default ThemedContainer;
