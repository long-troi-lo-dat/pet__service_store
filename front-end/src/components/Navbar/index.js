import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import LogoHeader from "../../assets/logo-header.png";
import {
  FiPhone,
  FiShoppingCart,
  FiSearch,
  FiShoppingBag,
  FiSend,
} from "react-icons/fi";

function Navbar(props) {
  const navLinkStyle = {
    fontFamily: "Montserrat, sans-serif",
    fontSize: "18px",
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: "0.2px",
    color: "#273171",
  };
  const navigate = useNavigate();

  return (
    <div className="w-full ">
      <div
        style={{
          backgroundColor: "#222A63",
          height: "45px",
          display: "flex",
          alignItems: "center", // Canh giữa theo chiều dọc
          justifyContent: "space-between", // Canh giữa theo chiều ngang và cách đều các phần tử
          color: "#fff", // Màu văn bản
          padding: "2 20px", // Khoảng cách ngoài cùng
        }}
      >
        <div className="flex items-center space-x-4 px-56">
          <FiPhone size={24} color="white" />
          <span style={{ marginLeft: "8px" }}>Liên hệ: 0123-456-789</span>
          <FiShoppingBag size={24} color="white" />
          <span style={{ marginLeft: "8px" }}>
            Công viên phần mềm quang trung
          </span>
        </div>

        <div className="flex items-center space-x-4 px-72">
          <FiShoppingCart size={24} color="white" />
          <FiSearch size={24} color="white" />
        </div>
      </div>

      <div>
        <nav className="flex items-center ">
          <span onClick={() => navigate("/")} className="px-20">
            <img
              className="ml-36"
              src={LogoHeader}
              style={{ width: "156px", height: "auto", cursor: "pointer" }}
              alt="Logo"
            />
          </span>
          <ul className="list-none flex justify-center items-center gap-x-12 ">
            <li>
              <NavLink to="/" style={navLinkStyle}>
                TRANG CHỦ
              </NavLink>
            </li>
            <li>
              <NavLink to="/About" style={navLinkStyle}>
                GIỚI THIỆU
              </NavLink>
            </li>
            <li>
              <NavLink to="/Service" style={navLinkStyle}>
                DỊCH VỤ
              </NavLink>
            </li>
            <li>
              <NavLink to="/Shop" style={navLinkStyle}>
                CỬA HÀNG
              </NavLink>
            </li>
            <li>
              <NavLink to="/Blog" style={navLinkStyle}>
                BLOG
              </NavLink>
            </li>
            <li>
              <NavLink to="/Contact" style={navLinkStyle}>
                LIÊN HỆ
              </NavLink>
            </li>
            <li>
              <NavLink className="ml-24" to="/Booking" style={navLinkStyle}>
                <button className="bg-slate-800 text-white border-r-4 rounded-lg shadow-md p-4 ">
                  <span className="flex justify-between">
                    Booking Online
                    <FiSend className="items-center justify-center mt-1 ml-2" />
                  </span>
                </button>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
