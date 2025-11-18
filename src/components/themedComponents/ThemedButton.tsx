"use client";

import { Button, Colors } from "@Coronation-ArchTouch/cor-ui";
import useTheme from "@/src/hooks/useTheme";
import { themeConfig } from "@/src/lib/themeConfig";
import { Theme, ThemedButtonProps } from "@/src/types";

const ThemedButton = ({
  label,
  labelColor,
  background,
  onClick,
  style,
  className,
  suffixIcon,
  prefixIcon,
}: ThemedButtonProps) => {
  const { theme } = useTheme();
  const config = themeConfig[theme];

  return (
    <Button
      label={label}
      labelColor={labelColor}
      onClick={onClick}
      background={
        background ??
        (theme === Theme.CORPORATE
          ? Colors.primary.error.red300
          : Colors.primary.brand.purple500)
      }
      style={{
        borderRadius: theme === Theme.CORPORATE ? "0px" : config.borderRadius,
        ...style,
      }}
      // variant={theme}
      className={className}
      prefixIcon={prefixIcon}
      suffixIcon={suffixIcon}
    />
  );
};

export const ThemedButtonLight = ({
  label,
  labelColor,
  background,
  onClick,
  style,
  className,
  suffixIcon,
  prefixIcon,
}: ThemedButtonProps) => {
  const { theme } = useTheme();

  return (
    <ThemedButton
      label={label}
      labelColor={
        labelColor ??
        (theme === Theme.CORPORATE
          ? Colors.primary.error.red300
          : Colors.primary.brand.purple500)
      }
      onClick={onClick}
      background={
        background ??
        (theme === Theme.CORPORATE ? "#FFEEF0" : Colors.primary.brand.purple50)
      }
      style={{
        ...style,
      }}
      // variant={theme}
      className={className}
      prefixIcon={prefixIcon}
      suffixIcon={suffixIcon}
    />
  );
};

export default ThemedButton;
