import { createContext, useState } from "react";
import { data } from "../database/Data";

export const DataContext = createContext();

export function DataProvider({ children }) {
  const [tripData, setTripData] = useState(data);

  return (
    <>
      <DataContext.Provider value={{ tripData, setTripData }}>
        {children}
      </DataContext.Provider>
    </>
  );
}
