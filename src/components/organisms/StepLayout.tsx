import { Theme } from "@/src/types";
import useTheme from "@/src/hooks/useTheme";
import { themeConfig } from "@/src/lib/themeConfig";

const StepLayout = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useTheme();
  const colors = themeConfig[theme];
  const isCorporate = theme === Theme.CORPORATE;

  return (
    <div
      className="space-y-8 md:border-1 md:border-[#EEEFF1] rounded-[16px] px-[0px] md:px-[24px] py-[15px] md:py-[24px] gap-[24px]"
      style={{
        borderRadius: isCorporate ? "0px" : colors.borderRadius,
      }}
    >
      {children}
    </div>
  );
};

export default StepLayout;
