import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

const formBooking = {
  hoten: "",
  sdt: "",
  diachi: "",
  email: "",
  thoigianhen: "",
  tenthucung: "",
  loai: "",
  thuocgiong: "",
  tuoi: "",
  trongluong: "",
  ghichu: "",
  dichvu: ""
};

const GlobalState = ({ children }) => {
  const [shouldScroll, setShouldScroll] = useState(false);

  const [formData, setFormData] = useState(formBooking);

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
        formData,
        setFormData
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
