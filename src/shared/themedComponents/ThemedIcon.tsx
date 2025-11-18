"use client";

import { Icon } from "@Coronation-ArchTouch/cor-ui-icons";
import { Colors } from "@Coronation-ArchTouch/cor-ui"
import useTheme from "../hooks/useTheme";
import { Theme } from "../types";

interface ThemedIconProps {
  icon: string;
  variant?: "fill" | "outline";
  color?: string;
  size?: string;
}

const ThemedIcon = ({ icon, variant = "outline", color, size }: ThemedIconProps) => {
  const { theme } = useTheme();

  return (
    <Icon
      icon={icon}
      variant={variant}
      color={color ?? (theme === Theme.CORPORATE ? Colors.primary.error.red300 : Colors.primary.brand.purple500)}
      size={size}
    />
  );
};

export default ThemedIcon;
