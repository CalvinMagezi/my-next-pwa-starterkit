import { ReactNode, createContext, useContext } from "react";

type dbContextType = {};

const dbContextDefaultValues: dbContextType = {};

const DBContext = createContext<dbContextType>(dbContextDefaultValues);

type Props = {
  children: ReactNode;
};

export function DBProvider({ children }: Props) {
  const value = {};
  return <DBContext.Provider value={value}>{children}</DBContext.Provider>;
}

export function useDB() {
  return useContext(DBContext);
}
