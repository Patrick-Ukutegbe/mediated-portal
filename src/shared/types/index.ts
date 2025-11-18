export interface FooterLinks {
  id: string;
  slug: string;
  title: string;
}
export enum Theme {
  INDIVIDUAL = "individual",
  CORPORATE = "corporate",
}

export interface ThemeProviderProps {
  children: React.ReactNode;
}

export interface ThemedButtonProps {
  label: string;
  labelColor?: string;
  background?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
  className?: string;
  prefixIcon?: React.JSX.Element;
  suffixIcon?: React.JSX.Element;
}