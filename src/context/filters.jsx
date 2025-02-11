import { createContext, useState } from "react";

// 1. Create a context to store the filters
export const FiltersContext = createContext();

//2. Create a provider to store the filters
export function FiltersProvider({ children }) {
  const [filters, setFilters] = useState({
    category: "all",
    minPrice: 0
  })

  return (
    <FiltersContext.Provider
      value={{
        filters, 
        setFilters
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
}
