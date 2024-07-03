import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

var iduser = localStorage.getItem("id_user")

const formBooking = {
  dichvu: "",
  chinhanh: "",
  hoten: "",
  sdt: "",
  email: "",
  ngay: "",
  thoigian: "",
  tenthucung: "",
  loai: "",
  thuocgiong: "",
  tuoi: "",
  trongluong: "",
  ghichu: "",
};

const GlobalState = ({ children }) => {
  const [cart, setCart] = useState([])
  const [formData, setFormData] = useState({ formBooking, iduser: iduser });

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
        formData,
        setFormData,
        cart,
        setCart
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
