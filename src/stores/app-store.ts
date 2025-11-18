import { AppState } from "@/src/types";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
// import { accountsDefaultState, useAccountsConsolidation } from "./accounts-consolidation";
// import { signatureUpdateDefaultState, useSignatureUpdate } from "./signature-update"
// import { nameUpdateDefaultState, useNameUpdate } from "./name-update"
// import { kycUpdateDefaultState, useKYCUpdate } from "./kyc-update"
// import { probateProcessingDefaultState, useProbateProcessing } from "./probate-processing";
// import { addressUpdateDefaultState, useAddressUpdate } from "./address-update";
// import {
//   airtelMultiCurrencyDefaultState,
//   useAirtelMultiCurrency,
// } from "./airtel-multi-currency";
// import { eContactDefaultState, useEContact } from "./e-contact";
// import {
//   eDividendProcessingDefaultState,
//   useEDividendProcessing,
// } from "./e-dividend-processing";

const appDefaultState: AppState = {
  user: null,
  accountsConsolidation: null,
  signatureUpdate: null,
  nameUpdate: null,
  kycUpdate: null,
  probateProcessing: null,
  addressUpdate: null,
  airtelMultiCurrency: null,
  eContact: null,
  eDividendProcessing: null,
};

export const createAppStore = (initState: Partial<AppState> = {}) => {
  return create<AppState>()(
    persist(
      (set, get) => ({
        ...appDefaultState,
        ...initState,
        // ...useAccountsConsolidation(accountsDefaultState, set),
        // ...useSignatureUpdate(signatureUpdateDefaultState, set),
        // ...useNameUpdate(nameUpdateDefaultState, set),
        // ...useKYCUpdate(kycUpdateDefaultState, set),
        // ...useProbateProcessing(probateProcessingDefaultState, set),
        // ...useAddressUpdate(addressUpdateDefaultState, set),
        // ...useSignatureUpdate(signatureUpdateDefaultState, set),
        // ...useAirtelMultiCurrency(airtelMultiCurrencyDefaultState, set),
        // ...useEContact(eContactDefaultState, set),
        // ...useEDividendProcessing(eDividendProcessingDefaultState, set),
      }),
      {
        name: "app-storage",
        storage: createJSONStorage(() => localStorage),
      }
    )
  );
};
