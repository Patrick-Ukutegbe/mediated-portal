"use client";

import useTheme from "@/src/hooks/useTheme";
import { themeConfig } from "@/src/lib/themeConfig";
import { Theme } from "@/src/types";
import MultipleSelector, {
  MultipleSelectorProps,
} from "../molecules/MultipleSelector";

const ThemedMultipleSelector = (props: MultipleSelectorProps) => {
  const { theme } = useTheme();
  const colors = themeConfig[theme];

  const computedBorderRadius =
    theme === Theme.CORPORATE ? "0px" : colors.borderRadius ?? "10px";
  const optionHoverTextColor = colors.primary;

  return (
    <div className="themed-multiple-selector">
      <MultipleSelector
        {...props}
        borderRadius={props.borderRadius ?? computedBorderRadius}
      />

      <style jsx global>{`
        /* Ensure dropdown follows the same radius as the control */
        .themed-multiple-selector .selector-wrapper + div,
        .themed-multiple-selector .selector-wrapper ~ div {
          border-radius: ${props.borderRadius ??
          computedBorderRadius} !important;
        }

        /* Theme dropdown option text color on hover only */
        .themed-multiple-selector .selector-item:hover,
        .themed-multiple-selector .selector-item:hover * {
          color: ${optionHoverTextColor} !important;
        }
      `}</style>
    </div>
  );
};

export default ThemedMultipleSelector;
