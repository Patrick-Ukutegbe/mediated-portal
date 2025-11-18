"use client";

import useTheme from "../hooks/useTheme";
import { themeConfig } from "../lib/themeConfig";
import { Theme } from "../types";
import SearchableSelector, {
  SearchableSelectorProps,
} from "../molecules/Selector";

const ThemedSelector = (props: SearchableSelectorProps) => {
  const { theme } = useTheme();
  const colors = themeConfig[theme];

  const computedBorderRadius =
    theme === Theme.CORPORATE ? "0px" : colors.borderRadius ?? "10px";
  const optionHoverTextColor = colors.primary;

  return (
    <div className="themed-selector">
      <SearchableSelector
        {...props}
        borderRadius={props.borderRadius ?? computedBorderRadius}
      />

      <style jsx global>{`
        /* Ensure dropdown follows the same radius as the control */
        .themed-selector .selector-wrapper + div,
        .themed-selector .selector-wrapper ~ div {
          border-radius: ${props.borderRadius ??
          computedBorderRadius} !important;
        }

        /* Theme dropdown option text color on hover only */
        .themed-selector .selector-item:hover,
        .themed-selector .selector-item:hover * {
          color: ${optionHoverTextColor} !important;
        }
      `}</style>
    </div>
  );
};

export default ThemedSelector;
