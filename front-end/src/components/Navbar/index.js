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

function Navbar(props) {
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
  var header = localStorage.getItem("vaitro");
  var headerOnOff = parseInt(header, 10)
  // console.log(typeof vaitro)
  // console.log(intVaitro)
  // console.log(typeof intVaitro)
  const id = localStorage.getItem("id_user")

  const LogoutSubmit = async () => {
    localStorage.setItem("header", 0)
    localStorage.setItem("id_user", 0)
    localStorage.setItem("vaitro", 0)
    localStorage.setItem("login", "no")
    // window.location.reload(false);
    setOpenProfile((prev) => !prev)
    navigate("/")
  }

  if (headerOnOff === 0 || headerOnOff === null) {
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
                  {openProfile && <div className="flex flex-col" style={{ color: "black", position: "absolute", top: "35px", right: "0px", width: "150px", padding: "15px", backgroundColor: "white", border: "1px solid #333", zIndex: "100", borderRadius: "8px" }}>
                    <ul className="flex flex-col gap-4">
                      <li><span onClick={() => { navigate(`/userdetail/${parseInt(id)}}`); setOpenProfile((prev) => !prev) }}>Profile</span></li>
                      <li>Setting</li>
                      <li><span onClick={() => LogoutSubmit()}>Logout</span></li>
                    </ul>
                  </div>}
                </li>
                <FiShoppingCart size={24} color="white" /><sub>{ }</sub>

                {/* <FiSearch size={24} color="white" /> */}
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
                    <NavLink to="/shop" style={navLinkStyle}>
                      LIÊN HỆ
                    </NavLink>
                  </li>
                  <li style={liStyle} class="dropdown">
                    <NavLink to="/shop" style={navLinkStyle}>
                      CỬA HÀNG
                    </NavLink>
                    <ul class="dropdown-content">
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
                    </ul>
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
        {/* <body id="page-top">
          <div id="wrapper">
            <ul
              class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
              id="accordionSidebar"
            >
              <a
                class="sidebar-brand d-flex align-items-center justify-content-center"
                href="index.html"
              >
                <div class="sidebar-brand-icon rotate-n-15">
                  <i class="fas fa-laugh-wink"></i>
                </div>
                <div class="sidebar-brand-text mx-3">DG House</div>
              </a>
              <hr class="sidebar-divider my-0" />
              <li class="nav-item active">
                <a class="nav-link" href="index.html">
                  <i class="fas fa-fw fa-tachometer-alt"></i>
                  <span>Trang chủ</span>
                </a>
              </li>
              <div class="sidebar-heading">Interface</div>
              <li class="nav-item">
                <a
                  class="nav-link collapsed"
                  href="#"
                  data-toggle="collapse"
                  data-target="#danhmuc"
                  aria-expanded="true"
                  aria-controls="danhmuc"
                >
                  <span>Danh mục</span>
                </a>
                <div
                  id="danhmuc"
                  class="collapse"
                  aria-labelledby="headingTwo"
                  data-parent="#accordionSidebar"
                >
                  <div class="bg-white py-2 collapse-inner rounded">
                    <a class="collapse-item" href="admin-qldm.html">
                      Danh sách
                    </a>
                    <a class="collapse-item" href="#">
                      Thêm mới
                    </a>
                  </div>
                </div>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link collapsed"
                  href="#"
                  data-toggle="collapse"
                  data-target="#thucung"
                  aria-expanded="true"
                  aria-controls="thucung"
                >
                  <span>Thú cưng</span>
                </a>
                <div
                  id="thucung"
                  class="collapse"
                  aria-labelledby="headingTwo"
                  data-parent="#accordionSidebar"
                >
                  <div class="bg-white py-2 collapse-inner rounded">
                    <a class="collapse-item" href="admin-qltc.html">
                      Danh sách
                    </a>
                    <a class="collapse-item" href="#">
                      Thêm mới
                    </a>
                  </div>
                </div>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link collapsed"
                  href="#"
                  data-toggle="collapse"
                  data-target="#sanpham"
                  aria-expanded="true"
                  aria-controls="sanpham"
                >
                  <span>Sản phẩm</span>
                </a>
                <div
                  id="sanpham"
                  class="collapse"
                  aria-labelledby="headingTwo"
                  data-parent="#accordionSidebar"
                >
                  <div class="bg-white py-2 collapse-inner rounded">
                    <a class="collapse-item" href="admin-qlsp.html">
                      Danh sách
                    </a>
                    <a class="collapse-item" href="themmoi.html">
                      Thêm mới
                    </a>
                  </div>
                </div>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link collapsed"
                  href="#"
                  data-toggle="collapse"
                  data-target="#binhluan"
                  aria-expanded="true"
                  aria-controls="binhluan"
                >
                  <span>Bình luận</span>
                </a>
                <div
                  id="binhluan"
                  class="collapse"
                  aria-labelledby="headingTwo"
                  data-parent="#accordionSidebar"
                >
                  <div class="bg-white py-2 collapse-inner rounded">
                    <a class="collapse-item" href="#">
                      Danh sách
                    </a>
                    <a class="collapse-item" href="#">
                      Thêm mới
                    </a>
                  </div>
                </div>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link collapsed"
                  href="#"
                  data-toggle="collapse"
                  data-target="#donhang"
                  aria-expanded="true"
                  aria-controls="donhang"
                >
                  <span>Đơn hàng</span>
                </a>
                <div
                  id="donhang"
                  class="collapse"
                  aria-labelledby="headingTwo"
                  data-parent="#accordionSidebar"
                >
                  <div class="bg-white py-2 collapse-inner rounded">
                    <a class="collapse-item" href="admin-qldh.html">
                      Danh sách
                    </a>
                    <a class="collapse-item" href="#">
                      Thêm mới
                    </a>
                  </div>
                </div>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link collapsed"
                  href="#"
                  data-toggle="collapse"
                  data-target="#nguoidung"
                  aria-expanded="true"
                  aria-controls="nguoidung"
                >
                  <span>Người dùng</span>
                </a>
                <div
                  id="nguoidung"
                  class="collapse"
                  aria-labelledby="headingTwo"
                  data-parent="#accordionSidebar"
                >
                  <div class="bg-white py-2 collapse-inner rounded">
                    <a class="collapse-item" href="admin-qlnv.html">
                      Danh sách
                    </a>
                    <a class="collapse-item" href="#">
                      Thêm mới
                    </a>
                  </div>
                </div>
              </li>

              <div class="text-center d-none d-md-inline">
                <button class="rounded-circle border-0" id="sidebarToggle"></button>
              </div>
            </ul>
            <div id="content-wrapper" class="d-flex flex-column">
              <div id="content">
                <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                  <form class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                    <div class="input-group">
                      <input
                        type="text"
                        class="form-control bg-light border-0 small"
                        placeholder="Search for..."
                        aria-label="Search"
                        aria-describedby="basic-addon2"
                      />
                      <div class="input-group-append">
                        <button class="btn btn-primary" type="button">
                          <i class="fas fa-search fa-sm"></i>
                        </button>
                      </div>
                    </div>
                  </form>
                  <ul class="navbar-nav ml-auto">
                    <li class="nav-item dropdown no-arrow d-sm-none">
                      <a
                        class="nav-link dropdown-toggle"
                        href="#"
                        id="searchDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i class="fas fa-search fa-fw"></i>
                      </a>
                      <div
                        class="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                        aria-labelledby="searchDropdown"
                      >
                        <form class="form-inline mr-auto w-100 navbar-search">
                          <div class="input-group">
                            <input
                              type="text"
                              class="form-control bg-light border-0 small"
                              placeholder="Search for..."
                              aria-label="Search"
                              aria-describedby="basic-addon2"
                            />
                            <div class="input-group-append">
                              <button class="btn btn-primary" type="button">
                                <i class="fas fa-search fa-sm"></i>
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </li>
                    <li class="nav-item dropdown no-arrow mx-1">
                      <a
                        class="nav-link dropdown-toggle"
                        href="#"
                        id="alertsDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i class="fas fa-bell fa-fw"></i>
                        <span class="badge badge-danger badge-counter">3+</span>
                      </a>
                      <div
                        class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                        aria-labelledby="alertsDropdown"
                      >
                        <h6 class="dropdown-header">Alerts Center</h6>
                        <a class="dropdown-item d-flex align-items-center" href="#">
                          <div class="mr-3">
                            <div class="icon-circle bg-primary">
                              <i class="fas fa-file-alt text-white"></i>
                            </div>
                          </div>
                          <div>
                            <div class="small text-gray-500">December 12, 2019</div>
                            <span class="font-weight-bold">
                              A new monthly report is ready to download!
                            </span>
                          </div>
                        </a>
                        <a class="dropdown-item d-flex align-items-center" href="#">
                          <div class="mr-3">
                            <div class="icon-circle bg-success">
                              <i class="fas fa-donate text-white"></i>
                            </div>
                          </div>
                          <div>
                            <div class="small text-gray-500">December 7, 2019</div>
                            $290.29 has been deposited into your account!
                          </div>
                        </a>
                        <a class="dropdown-item d-flex align-items-center" href="#">
                          <div class="mr-3">
                            <div class="icon-circle bg-warning">
                              <i class="fas fa-exclamation-triangle text-white"></i>
                            </div>
                          </div>
                          <div>
                            <div class="small text-gray-500">December 2, 2019</div>
                            Spending Alert: We've noticed unusually high spending
                            for your account.
                          </div>
                        </a>
                        <a
                          class="dropdown-item text-center small text-gray-500"
                          href="#"
                        >
                          Show All Alerts
                        </a>
                      </div>
                    </li>
                    <li class="nav-item dropdown no-arrow mx-1">
                      <a
                        class="nav-link dropdown-toggle"
                        href="#"
                        id="messagesDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i class="fas fa-envelope fa-fw"></i>
                        <span class="badge badge-danger badge-counter">7</span>
                      </a>
                      <div
                        class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                        aria-labelledby="messagesDropdown"
                      >
                        <h6 class="dropdown-header">Message Center</h6>
                        <a class="dropdown-item d-flex align-items-center" href="#">
                          <div class="dropdown-list-image mr-3">
                            <img
                              class="rounded-circle"
                              src="img/undraw_profile_1.svg"
                              alt="..."
                            />
                            <div class="status-indicator bg-success"></div>
                          </div>
                          <div class="font-weight-bold">
                            <div class="text-truncate">
                              Hi there! I am wondering if you can help me with a
                              problem I've been having.
                            </div>
                            <div class="small text-gray-500">
                              Emily Fowler · 58m
                            </div>
                          </div>
                        </a>
                        <a class="dropdown-item d-flex align-items-center" href="#">
                          <div class="dropdown-list-image mr-3">
                            <img
                              class="rounded-circle"
                              src="img/undraw_profile_2.svg"
                              alt="..."
                            />
                            <div class="status-indicator"></div>
                          </div>
                          <div>
                            <div class="text-truncate">
                              I have the photos that you ordered last month, how
                              would you like them sent to you?
                            </div>
                            <div class="small text-gray-500">Jae Chun · 1d</div>
                          </div>
                        </a>
                        <a class="dropdown-item d-flex align-items-center" href="#">
                          <div class="dropdown-list-image mr-3">
                            <img
                              class="rounded-circle"
                              src="img/undraw_profile_3.svg"
                              alt="..."
                            />
                            <div class="status-indicator bg-warning"></div>
                          </div>
                          <div>
                            <div class="text-truncate">
                              Last month's report looks great, I am very happy with
                              the progress so far, keep up the good work!
                            </div>
                            <div class="small text-gray-500">
                              Morgan Alvarez · 2d
                            </div>
                          </div>
                        </a>
                        <a class="dropdown-item d-flex align-items-center" href="#">
                          <div class="dropdown-list-image mr-3">
                            <img
                              class="rounded-circle"
                              src="https://source.unsplash.com/Mv9hjnEUHR4/60x60"
                              alt="..."
                            />
                            <div class="status-indicator bg-success"></div>
                          </div>
                          <div>
                            <div class="text-truncate">
                              Am I a good boy? The reason I ask is because someone
                              told me that people say this to all dogs, even if they
                              aren't good...
                            </div>
                            <div class="small text-gray-500">
                              Chicken the Dog · 2w
                            </div>
                          </div>
                        </a>
                        <a
                          class="dropdown-item text-center small text-gray-500"
                          href="#"
                        >
                          Read More Messages
                        </a>
                      </div>
                    </li>

                    <div class="topbar-divider d-none d-sm-block"></div>
                    <li class="nav-item dropdown no-arrow">
                      <a
                        class="nav-link dropdown-toggle"
                        href="#"
                        id="userDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <span class="mr-2 d-none d-lg-inline text-gray-600 small">
                          Bảo Long
                        </span>
                        <img
                          class="img-profile rounded-circle"
                          src="img/undraw_profile.svg"
                        />
                      </a>
                      <div
                        class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                        aria-labelledby="userDropdown"
                      >
                        <a class="dropdown-item" href="#">
                          <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                          Profile
                        </a>
                        <a class="dropdown-item" href="#">
                          <i class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                          Settings
                        </a>
                        <a class="dropdown-item" href="#">
                          <i class="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                          Activity Log
                        </a>
                        <div class="dropdown-divider"></div>
                        <a
                          class="dropdown-item"
                          href="#"
                          data-toggle="modal"
                          data-target="#logoutModal"
                        >
                          <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                          Logout
                        </a>
                      </div>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </body> */}
      </>
    )
  }
}

export default Navbar;
