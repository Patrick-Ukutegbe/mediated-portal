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

export interface AppStore {
  appStore: AppState;
  setAppStore: (appStore: AppState) => void;
}

export interface User {
  email: string;

  // TODO: Add more user properties here
}

export interface AccountsConsolidation {
  // TODO: Add more accounts consolidation properties here
}

export interface KYCUpdate {
  // TODO: Add more KYC Update properties here
}

export interface NameUpdate {
  // TODO: Add more Name Update properties here
}

export interface ProbateProcessing {
  // TODO: Add more Probate Processing properties here
}

export interface SignatureUpdate {
  // TODO: Add more Signature Update properties here
}

export interface AddressUpdate {
  // TODO: Add more Address Update properties here
}

export interface AirtelMultiCurrency {
  // TODO: Add more AirtelMultiCurrency properties here
}

export interface EContact {
  // TODO: Add more EContact properties here
}

export interface EDividendProcessing {
  // TODO: Add more E-dividend Processing properties here
}
export interface AppState {
  user: User | null;
  accountsConsolidation: AccountsConsolidation | null;
  signatureUpdate: SignatureUpdate | null;
  nameUpdate: NameUpdate | null;
  kycUpdate: KYCUpdate | null;
  probateProcessing: ProbateProcessing | null;

  addressUpdate: AddressUpdate | null;
  airtelMultiCurrency: AirtelMultiCurrency | null;
  eContact: EContact | null;
  eDividendProcessing: EDividendProcessing | null;
  // Add more app state here
}
