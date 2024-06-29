import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FiSearch,
  FiShoppingCart,
  FiUser
} from "react-icons/fi";

function Navbar() {

  const navigate = useNavigate();
  const [openProfile, setOpenProfile] = useState(false)

  const id = localStorage.getItem("id_user")

  const LogoutSubmit = () => {
    localStorage.setItem("header", 0)
    localStorage.setItem("id_user", 0)
    localStorage.setItem("vaitro", 0)
    localStorage.setItem("login", "no")
    setOpenProfile((prev) => !prev)
    navigate("/")
  }

  if (localStorage.getItem("header") === 0 || localStorage.getItem("header") !== undefined) {
    return (
      <section class="container-fluid">
        <div className="container py-2">
          <div className="row align-items-center">
            <div class="col-3">
              <a class="navbar-brand" href="/#"><img src={process.env.REACT_APP_URL_API + "/navbar/logo-1.png"} alt="" /></a>
            </div>
            <div className="col-lg-6 d-none d-lg-block">
              <div class="input-group">
                <input type="text" class="form-control" placeholder="Your Email" />
                <button class="input-group-text bg-none px-4"><FiSearch fontSize={20} /></button>
              </div>
            </div>
            <div class="col-3 d-none d-lg-block">
              <div className="row">
                <div class="col-6 text-end text-muted">
                  Liên hệ
                  <h6 class="text-black">+84 77 766 3476</h6>
                </div>
                <div class="col-6 text-end text-muted">
                  Địa chỉ
                  <h6 class="text-black">Bình Thạnh, HCM</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <hr />
        </div>
        <div className="container">
          <nav class="navbar navbar-expand-lg navbar-light">

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link class="nav-link" to="/about">Giới thiệu</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/blog">Blog</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/contact">Liên hệ</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/shop">Cửa hàng</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/booking">Dịch vụ</Link>
                </li>
              </ul>
            </div>
          </nav>
          <div>
            {(localStorage.getItem("login") === "yes") ?
              <Link>
                <FiUser size={24} color="#41403E" onClick={() => setOpenProfile((prev) => !prev)} />
              </Link>
              :
              <Link to="/login">
                <FiUser size={24} color="#41403E" />
              </Link>
            }
            {openProfile && <div className="flex flex-col" style={{ color: "black", position: "absolute", top: "35px", right: "0px", width: "200px", paddingTop: "15px", paddingLeft: "15px", backgroundColor: "white", border: "1px solid #333", zIndex: "100", borderRadius: "8px" }}>
              <ul className="flex flex-col gap-4">
                <li><span onClick={() => { navigate(`/userdetail/${id}}`); setOpenProfile((prev) => !prev) }}>Thông tin tài khoản</span></li>
                {localStorage.getItem("vaitro") === 1 ? <li><span onClick={() => { navigate(`/employee/index`); setOpenProfile((prev) => !prev) }}>Trang admin</span></li> : ""}
                <li><span onClick={() => LogoutSubmit()}>Đăng xuất</span></li>
              </ul>
            </div>}
            <Link to="/cart"><FiShoppingCart size={24} color="#41403E" /></Link>
          </div>
        </div>
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
