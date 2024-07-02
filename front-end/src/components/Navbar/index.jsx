import React, { useContext, useState } from "react";
import {
  FiSearch,
  FiShoppingCart,
  FiUser,
  FiHeart
} from "react-icons/fi";
import { GlobalContext } from "../../Context";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import "swiper/css";
import 'swiper/css/pagination';

function NavbarLayout() {
  const { cart } = useContext(GlobalContext);

  const [show, setShow] = useState(false);
  const showDropdown = (e) => {
    setShow(!show);
  }
  const hideDropdown = e => {
    setShow(false);
  }
  return (
    <section class="container-fluid">
      <div className="container pt-3">
        <div className="row align-items-center">
          <div class="col-6 col-lg-3">
            <a class="navbar-brand" href="/#"><img src={process.env.REACT_APP_URL_API + "/navbar/logo-1.png"} alt="" /></a>
          </div>
          <div className="col-lg-6 d-none d-lg-block">
            <div class="input-group">
              <input type="text" class="form-control" placeholder="Tìm kiếm sản phẩm. . ." />
              <button class="input-group-text bg-none px-4"><FiSearch fontSize={20} /></button>
            </div>
          </div>
          <div class="col-6 col-lg-3 d-none d-md-block">
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
      <hr />
      <div className="container">
        <Navbar expand="lg" className="pt-0">
          <Container fluid>
            <Navbar.Brand className="col-2">
              <Swiper
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
                  <Nav.Link href="/" className="mx-2">Trang chủ</Nav.Link>
                  <Nav.Link href="/about" className="mx-2">Giới thiệu</Nav.Link>
                  <Nav.Link href="/blog" className="mx-2">Blog</Nav.Link>
                  <Nav.Link href="/contact" className="mx-2">Liên hệ</Nav.Link>
                  <Nav.Link href="/booking" className="mx-2">Dịch vụ</Nav.Link>
                  <NavDropdown
                    title="Cửa hàng"
                    id={`offcanvasNavbarDropdown-expand-lg`}
                    show={show}
                    onMouseEnter={showDropdown}
                    onMouseLeave={hideDropdown}
                  >
                    <NavDropdown.Item href="/shop/2/0/0">Thú cưng</NavDropdown.Item>
                    <NavDropdown.Item href="#action2">Thức ăn</NavDropdown.Item>
                    <NavDropdown.Item href="#action3">Dinh dưỡng</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Phụ kiện</NavDropdown.Item>
                    <NavDropdown.Item href="#action5">Đồ chơi</NavDropdown.Item>
                    <NavDropdown.Item href="#action6">Dịch vụ</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
            <Navbar className="col-2 justify-content-end">
              <Nav.Link href="/login"><FiUser size={24} color="#41403E" /></Nav.Link>
              <Nav.Link href="/wishlist"><FiHeart size={24} color="#41403E" /></Nav.Link>
              <Nav.Link href="/cart">
                <FiShoppingCart size={24} color="#41403E" />
                <span class="position-absolute translate-middle badge rounded-circle bg-primary pt-2">
                  {cart.length}
                </span>
              </Nav.Link>
            </Navbar>
          </Container>
        </Navbar>
      </div>
    </section >
  );
}

export default NavbarLayout;
