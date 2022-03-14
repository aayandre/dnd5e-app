import { createContext, useState } from "react";

export const AppContext = createContext();

export function AppContextProvider({ children }) {
  const [AppState, setAppState] = useState({ characters: [], theme: "book" });
  return (
    <AppContext.Provider value={[AppState, setAppState]}>
      {children}
    </AppContext.Provider>
  );
}
