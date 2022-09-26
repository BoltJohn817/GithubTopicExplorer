import { createContext, useState } from "react";

// Context containg search query
const SearchContext = createContext();

const defaultValue = "react";

const SearchContextProvider = ({ children }) => {
  const [query, setQuery] = useState(defaultValue);

  return (
    <SearchContext.Provider
      value={{
        query,
        setQuery,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export { SearchContext, SearchContextProvider };
