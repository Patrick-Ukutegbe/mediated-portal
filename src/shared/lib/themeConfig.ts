import { Colors } from "@Coronation-ArchTouch/cor-ui";
import { Theme } from "../types";

export const themeConfig = {
  [Theme.INDIVIDUAL]: {
    primary: Colors.primary.brand.purple500,
    text: Colors.primary.gray.neutral1100,
    inputBorder: Colors.primary.gray.neutral50,
    iconColor: Colors.primary.brand.purple500,
    borderRadius: "12px",
  },
  [Theme.CORPORATE]: {
    primary: Colors.primary.error.red300,
    text: Colors.primary.gray.neutral900,
    inputBorder: Colors.primary.gray.neutral50,
    iconColor: Colors.primary.error.red300,
    borderRadius: "0px",
  },
};
