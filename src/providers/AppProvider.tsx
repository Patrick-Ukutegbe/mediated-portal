"use client";

import { createAppStore } from "@/src/stores/app-store";
import { AppState } from "@/src/types";
import { createContext, useContext, useRef } from "react";
import { useStore } from "zustand";

export type AppStoreApi = ReturnType<typeof createAppStore>;

export const AppStoreContext = createContext<AppStoreApi | undefined>(
  undefined
);

export interface AppStoreProviderProps {
  children: React.ReactNode;
}

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const storeRef = useRef<AppStoreApi>(createAppStore());

  return (
    <AppStoreContext.Provider value={storeRef.current}>
      {children}
    </AppStoreContext.Provider>
  );
};

export const useAppStore = <T,>(selector: (state: AppState) => T): T => {
  const context = useContext(AppStoreContext);

  if (!context) {
    throw Error("This component needs to be wrapped within the Provider");
  }

  return useStore(context, selector);
};

export default AppProvider;
