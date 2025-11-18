import useTheme from "../hooks/useTheme";
import { Colors, Typography } from "@Coronation-ArchTouch/cor-ui";
import { Icon } from "@Coronation-ArchTouch/cor-ui-icons";
import { ComponentProps } from "react";
import { Theme } from "../types";

interface TabTitlePillProps extends ComponentProps<"div"> {
  title: string;
  icon: string;
  status: "completed" | "active" | "inactive";
}

const TabTitlePill = ({ title, icon, status, ...props }: TabTitlePillProps) => {
  const { theme } = useTheme();

  const isCorporate = theme === Theme.CORPORATE;

  const getStatusColor = () => {
    switch (status) {
      case "completed":
        return {
          iconBgColor: Colors.primary.success.green500,
          iconColor: Colors.primary.base.white,
          textColor: Colors.primary.gray.neutral1100,
        };
      case "active":
        return {
          iconBgColor: isCorporate
            ? Colors.primary.error.red300
            : Colors.primary.brand.purple500,
          iconColor: Colors.primary.base.white,
          textColor: Colors.primary.gray.neutral1100,
        };
      case "inactive":
        return {
          iconBgColor: "#F7F7F7",
          iconColor: Colors.primary.gray.neutral1100,
          textColor: "#888991",
        };
    }
  };

  return (
    <div className="flex items-center gap-2 whitespace-nowrap" {...props}>
      <div
        className="flex items-center justify-center rounded-full w-[35.83px] h-[35.83px]"
        style={{ backgroundColor: getStatusColor().iconBgColor }}
      >
        <Icon
          variant="outline"
          icon={status == "completed" ? "check" : icon}
          color={getStatusColor().iconColor}
          size="17.91px"
        />
      </div>
      <Typography
        component="p"
        className="!font-[500] !text-[14px]"
        style={{ color: getStatusColor().textColor }}
      >
        {title}
      </Typography>
    </div>
  );
};

export default TabTitlePill;
