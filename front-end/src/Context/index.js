import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

const GlobalState = ({ children }) => {
  const [shouldScroll, setShouldScroll] = useState(false);

  const [addressFormData, setAddressFormData] = useState({
    fullName: "",
    city: "",
    country: "",
    postalCode: "",
    address: "",
  });
  return (
    <GlobalContext.Provider
      value={{
        addressFormData,
        setAddressFormData,
        shouldScroll,
        setShouldScroll,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
