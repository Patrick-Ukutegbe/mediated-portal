"use client";

import { Colors } from "@Coronation-ArchTouch/cor-ui";
import useTheme from "../hooks/useTheme";
import { themeConfig } from "../lib/themeConfig";
import { Theme } from "../types";
import TextField from "../molecules/TextField";

interface ThemedTextFieldProps {
  error?: boolean;
  style?: React.CSSProperties;
  inputStyle?: React.CSSProperties;
  color?: string;
  inputMode?: "numeric" | "text" | "tel" | "email" | "url";
  className?: string;
  isDisabled?: boolean;
  backgroundColor?: string;
  outlineColor?: string;
  required?: boolean;
  [key: string]: any;
}

const ThemedTextField = ({
  type = "text",
  error = false,
  label,
  required = false,
  width = "100%",
  className,
  style,
  inputStyle,
  color,
  backgroundColor,
  outlineColor,
  ...props
}: ThemedTextFieldProps) => {
  const { theme } = useTheme();
  const colors = themeConfig[theme];

  const appliedOutlineColor = error
    ? Colors.primary.error.red300
    : outlineColor ?? Colors.primary.gray.neutral300;

  const appliedBackground = backgroundColor ?? Colors.primary.base.white;

  const appliedLabelColor = color ?? colors.text;

  const borderRadius = theme === Theme.CORPORATE ? "0px" : "10px";

  return (
    <div className={`themed-textfield-wrapper ${className ?? ""}`}>
      <TextField
        {...props}
        type={type}
        required={required}
        outlineColor={appliedOutlineColor}
        backgroundColor={appliedBackground}
        style={{
          width,
          borderRadius,
          overflow: "hidden",
          ...style,
        }}
        label={{
          ...(typeof label === "string" ? { text: label } : label || {}),
          color: appliedLabelColor,
          required,
        }}
        inputStyle={{
          color: Colors.primary.gray.neutral1100,
          ...inputStyle,
        }}
        className="themed-textfield"
      />
    </div>
  );
};

export default ThemedTextField;
