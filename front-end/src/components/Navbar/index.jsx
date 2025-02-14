import React, { useContext, useState } from "react";
import {
  FiSearch,
  FiShoppingCart,
  FiUser,
  FiHeart,
} from "react-icons/fi";
import { GlobalContext } from "../../Context";
import { LogoutSuccess } from "../Validate/Notify";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import "swiper/css";
import 'swiper/css/pagination';
import { Link, useNavigate } from "react-router-dom";

function NavbarLayout() {
  const { cart } = useContext(GlobalContext);
  const navigate = useNavigate();

  const isLogedIn = localStorage.getItem("isLogedIn")
  const id_user = localStorage.getItem("id_user")

  const [showCate, setShowCate] = useState(false);
  const showCateDropdown = (e) => {
    setShowCate(!showCate);
  }
  const hideCateDropdown = e => {
    setShowCate(false);
  }
  const [showUser, setShowUser] = useState(false);
  const showUserDropdown = (e) => {
    setShowUser(!showUser);
  }
  const hideUserDropdown = e => {
    setShowUser(false);
  }

  const handleLogoutSubmit = () => {
    localStorage.clear();
    LogoutSuccess()
    navigate("/login")
  }

  return (
    <header>
      <div className="container pt-3">
        <div className="row align-items-center">
          <div className="col-12 col-md-6 col-lg-3 text-center text-md-start">
            <a className="navbar-brand" href="/#"><img src={process.env.REACT_APP_URL_API + "/navbar/logo-1.png"} alt="" /></a>
          </div>
          <div className="col-lg-6 d-none d-lg-block">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Tìm kiếm sản phẩm. . ." />
              <button className="input-group-text bg-none px-4"><FiSearch fontSize={20} /></button>
            </div>
          </div>
          <div className="col-6 col-lg-3 d-none d-md-block">
            <div className="row">
              <div className="col-6 text-end text-muted">
                Liên hệ
                <h6 className="text-black">+84 77 766 3476</h6>
              </div>
              <div className="col-6 text-end text-muted">
                Địa chỉ
                <h6 className="text-black">Bình Thạnh, HCM</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <Navbar expand="lg" className="pt-0">
        <Container>
          <Navbar.Brand className="col-md-2 d-none d-md-block">
            <Swiper
              className=""
              slidesPerView={1}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              navigation={true}
              modules={[Autoplay, Navigation]}
            >
              <SwiperSlide>
                DG House
              </SwiperSlide>
              <SwiperSlide className="d-none d-xl-block">
                Nhận nuôi thú cưng
              </SwiperSlide>
              <SwiperSlide className="d-none d-xl-block">
                Mua sắm trực tuyến
              </SwiperSlide>
              <SwiperSlide className="d-none d-xl-block">
                Dịch vụ thú cưng
              </SwiperSlide>
            </Swiper>
          </Navbar.Brand>
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="end"
            className="col-8"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                <img src={process.env.REACT_APP_URL_API + "/navbar/logo-1.png"} alt="" />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-center flex-grow-1 pe-3">
                <Link to="/" className="mx-2 nav-link">Trang chủ</Link>
                <Link to="/about" className="mx-2 nav-link">Giới thiệu</Link>
                <Link to="/blog" className="mx-2 nav-link">Blog</Link>
                <Link to="/contact" className="mx-2 nav-link">Liên hệ</Link>
                <Link to="/bookingservice" className="mx-2 nav-link">Dịch vụ</Link>
                <NavDropdown
                  title="Cửa hàng"
                  id={`offcanvasNavbarDropdown-expand-lg`}
                  show={showCate}
                  onMouseEnter={showCateDropdown}
                  onMouseLeave={hideCateDropdown}
                >
                  <NavDropdown.Item to="/shop/2" style={{ color: "#41403E" }}>Thú cưng</NavDropdown.Item>
                  <NavDropdown.Item to="/shop" style={{ color: "#41403E" }}>Thức ăn</NavDropdown.Item>
                  <NavDropdown.Item to="/shop" style={{ color: "#41403E" }}>Dinh dưỡng</NavDropdown.Item>
                  <NavDropdown.Item to="/shop" style={{ color: "#41403E" }}>Phụ kiện</NavDropdown.Item>
                  <NavDropdown.Item to="/shop" style={{ color: "#41403E" }}>Đồ chơi</NavDropdown.Item>
                  <NavDropdown.Item to="/shop" style={{ color: "#41403E" }}>Dịch vụ</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
          <Navbar.Toggle className="justify-content-start" aria-controls={`offcanvasNavbar-expand-lg`} />
          <Navbar className="col-2 justify-content-end">
            {!isLogedIn ?
              <Link className="nav-link" to="/login"><FiUser size={24} color="#41403E" /></Link>
              :
              <NavDropdown
                title={<FiUser size={24} color="#41403E" />}
                show={showUser}
                onMouseEnter={showUserDropdown}
                onMouseLeave={hideUserDropdown}
              >
                <NavDropdown.Item><Link to={`/userdetail/${id_user}`} style={{ color: "#41403E" }}>Tài khoản</Link></NavDropdown.Item>
                <NavDropdown.Item onClick={handleLogoutSubmit}><Link style={{ color: "#41403E" }}>Đăng xuất</Link></NavDropdown.Item>
              </NavDropdown>
            }
            <Link className="nav-link" to="/wishlist"><FiHeart size={24} color="#41403E" /></Link>
            <Link className="nav-link" to="/cart">
              <FiShoppingCart size={24} color="#41403E" />
              <span className="position-absolute translate-middle badge rounded-circle bg-primary pt-2">
                {cart.length}
              </span>
            </Link>
          </Navbar>
        </Container>
      </Navbar >
    </header >
  );
}

export default NavbarLayout;
