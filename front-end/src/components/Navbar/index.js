import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import LogoHeader from "../../assets/logo-1.png";
import {
  FiPhone,
  FiShoppingCart,
  FiSearch,
  FiMapPin,
  FiSend,
  FiUser
} from "react-icons/fi";
import { GlobalContext } from "../../Context";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Shop from "../../pages/Shop";
import CartButton from "../../pages/CartButton";

function Navbar({ setShowCart }) {
  const onShowCartHandler = () => {
    setShowCart(true)
  }
  const { setShouldScroll } = useContext(GlobalContext);
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

  const scrolltoContent = (id) => {
    const element = document.getElementById(id);

    if (!element) {
      navigate("/");
      setShouldScroll(true);
    } else {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const navigate = useNavigate();
  const [openProfile, setOpenProfile] = useState(false)

  const id = localStorage.getItem("id_user")

  const LogoutSubmit = async () => {
    localStorage.setItem("header", 0)
    localStorage.setItem("id_user", 0)
    localStorage.setItem("vaitro", 0)
    localStorage.setItem("login", "no")
    setOpenProfile((prev) => !prev)
    navigate("/")
  }

  if (localStorage.getItem("header") === 0 || localStorage.getItem("header") !== undefined) {
    return (
      <section className="">
        <main className="w-full">
          <div className="w-full">
            <div div
              style={{
                backgroundColor: "#222A63",
                height: "45px",
                display: "flex",
                alignItems: "center", // Canh giữa theo chiều dọc
                justifyContent: "space-between", // Canh giữa theo chiều ngang và cách đều các phần tử
                color: "#fff", // Màu văn bản
                padding: "2 20px", // Khoảng cách ngoài cùng
              }
              }
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
              <div className="flex space-x-4 mr-8 ">
                <li class="dropdown">
                  {(localStorage.getItem("login") === "yes") ?
                    <NavLink>
                      <FiUser size={24} color="white" onClick={() => setOpenProfile((prev) => !prev)} />
                    </NavLink>
                    :
                    <NavLink to="/login">
                      <FiUser size={24} color="white" />
                    </NavLink>
                  }
                  {openProfile && <div className="flex flex-col" style={{ color: "black", position: "absolute", top: "35px", right: "0px", width: "200px", paddingTop: "15px", paddingLeft: "15px", backgroundColor: "white", border: "1px solid #333", zIndex: "100", borderRadius: "8px" }}>
                    <ul className="flex flex-col gap-4">
                      <li><span onClick={() => { navigate(`/userdetail/${id}}`); setOpenProfile((prev) => !prev) }}>Thông tin tài khoản</span></li>
                      {localStorage.getItem("vaitro") == 1 ? <li><span onClick={() => { navigate(`/employee/index`); setOpenProfile((prev) => !prev) }}>Trang admin</span></li> : ""}
                      <li><span onClick={() => LogoutSubmit()}>Đăng xuất</span></li>
                    </ul>
                  </div>}
                </li>
                {/* <CartButton setShowCart={setShowCart} /> */}
                {/* <button onClick={onShowCartHandler}><FiShoppingCart size={24} color="white" /></button> */}
                <CartButton />
              </div>
            </div >
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
                    <NavLink to="/about" style={navLinkStyle}>
                      GIỚI THIỆU
                    </NavLink>
                  </li>
                  <li style={liStyle} class="dropdown">
                    <NavLink to="/service" style={navLinkStyle}>
                      DỊCH VỤ
                    </NavLink>
                    <ul class="dropdown-content">
                      <li>
                        <span >Thú y tại nhà</span>
                      </li>
                      <li>
                        <span >
                          Tắm vệ sinh tại nhà
                        </span>
                      </li>
                      <li>
                        <span onClick={() => scrolltoContent("dichvutialong")}>
                          Cắt tỉa lông tại nhà
                        </span>
                      </li>
                      <li>
                        <span >
                          Dắt chó đi dạo
                        </span>
                      </li>
                      <li>
                        <span >
                          Khách sạn thú cưng
                        </span>
                      </li>
                    </ul>
                  </li>
                  <li style={liStyle}>
                    <NavLink to="/blog" style={navLinkStyle}>
                      BLOG
                    </NavLink>
                  </li>
                  <li style={liStyle}>
                    <NavLink to="/contact" style={navLinkStyle}>
                      LIÊN HỆ
                    </NavLink>
                  </li>
                  <li style={liStyle} class="dropdown">
                    <NavLink to="/shop" style={navLinkStyle}>
                      CỬA HÀNG
                    </NavLink>
                    {/* <ul class="dropdown-content">
                      <li>
                        <span onClick={() => navigate("/shop")}>
                          Sản phẩm
                        </span>
                      </li>
                      <li>
                        <span onClick={() => navigate("/shoppet")}>
                          Thú cưng
                        </span>
                      </li>
                    </ul> */}
                  </li>
                  <NavLink to="/booking"
                    style={{
                      width: "220px",
                      height: "34px",
                      marginLeft: "30px",
                      marginTop: "7px",
                      borderRadius: "17px",
                    }}
                    className="bg-slate-800 text-white border-r-17 rounded-lg shadow-md flex justify-center items-center hover:bg-slate-700"
                  >
                    Booking Online
                    <FiSend className="font-bold ml-6" size={18} />
                  </NavLink>
                </ul>
              </nav>
            </div>
          </div >
        </main>
      </section >
    );
  } else {
    return (
      <>

      </>
    )
  }
}

export default Navbar;
