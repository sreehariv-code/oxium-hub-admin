import { createContext, useContext } from "react";

const DataContext = createContext();

const userType = "seller";

export default function DataProvider({ children }) {
  return (
    <DataContext.Provider
      value={{
        userType,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  return useContext(DataContext);
}
