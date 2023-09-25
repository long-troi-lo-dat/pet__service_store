import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import LogoHeader from "../../assets/logo-1.png";
import {
  FiPhone,
  FiShoppingCart,
  FiSearch,
  FiMapPin,
  FiSend,
} from "react-icons/fi";

function Navbar(props) {
  const navLinkStyle = {
    fontFamily: "Montserrat, sans-serif",
    fontSize: "12px",
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: "0.2px",
    color: "##101A5F",
    width: "70px",
    height: "15px",
  };
  const liStyle = {
    width: "102px",
    height: "47px",
    marginTop: "32px",
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
        <div
          style={{
            width: "100%",
            height: "46px",
          }}
          className="flex items-center space-x-4 ml-10"
        >
          <FiPhone size={24} color="white" />
          <span style={{ marginLeft: "8px" }}>0123-456-789</span>
          <FiMapPin size={24} color="white" />
          <span style={{ marginLeft: "8px" }}>
            Công viên phần mềm quang trung
          </span>
        </div>

        <div
          
          className="flex space-x-4 mr-8 "
        >
          <p className="w-4">0đ</p>
          <FiShoppingCart size={24} color="white" />
          <FiSearch size={24} color="white" />
        </div>
      </div>

      <div
        style={{
          height: "110px",
          width: "100%",
        }}
      >
        <nav className="flex items-center justify-center  ">
          <img
            onClick={() => navigate("/")}
            className=""
            src={LogoHeader}
            style={{
              width: "200px",
              height: "70px",
              cursor: "pointer",
              marginTop: "18px",
              marginLeft: "60px",
            }}
            alt="Logo"
          />
          <ul
            style={{
              marginTop: "18px",
              marginLeft: "30px",
            }}
            className="list-none flex items-center gap-x-4 pl-4"
          >
            <li style={liStyle}>
              <NavLink to="/" style={navLinkStyle}>
                TRANG CHỦ
              </NavLink>
            </li>
            <li style={liStyle}>
              <NavLink to="/About" style={navLinkStyle}>
                GIỚI THIỆU
              </NavLink>
            </li>
            <li style={liStyle}>
              <NavLink to="/Service" style={navLinkStyle}>
                DỊCH VỤ
              </NavLink>
            </li>
            <li style={liStyle}>
              <NavLink to="/Blog" style={navLinkStyle}>
                BLOG
              </NavLink>
            </li>
            <li style={liStyle}>
              <NavLink to="/Contact" style={navLinkStyle}>
                LIÊN HỆ
              </NavLink>
            </li>
            <li style={liStyle}>
              <NavLink to="/Shop" style={navLinkStyle}>
                CỬA HÀNG
              </NavLink>
            </li>
            <button
              style={{
                width: "220px",
                height: "34px",
                marginLeft: "30px",
                marginTop: "7px",
                borderRadius: "17px",
              }}
              className="bg-slate-800 text-white border-r-17 rounded-lg shadow-md flex justify-center items-center"
            >
              Booking Online
              <FiSend className="font-bold ml-6" size={18} />
            </button>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
