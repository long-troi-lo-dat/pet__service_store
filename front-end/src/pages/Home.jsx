import React, { useContext, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

import { Icon } from '@iconify/react';
import "swiper/css";
import 'swiper/css/pagination';
import "../assets/css/bootstrap.css";
import "../assets/css/style.css"
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import Navbar from '../components/Navbar';

import { GlobalContext } from "../Context";
import axios from "../axios";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  const { shouldScroll, setShouldScroll } = useContext(GlobalContext);
  const [dataAccessories, setDataAccessories] = useState([])
  const { cart, setCart } = useContext(GlobalContext)

  const unLogin = () => toast.error('Vui lòng đăng nhập!!', {
    position: "bottom-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
  const Notify = () => toast.success('Thêm vào giỏ hàng thành công', {
    position: "bottom-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
  const IssetInCartNotify = () => toast.error('Thú cưng chỉ được thêm 1 sản phẩm', {
    position: "bottom-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
  const quantityNotify = () => toast.error('Số lượng còn lại của sản phẩm không đủ', {
    position: "bottom-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

  const onAddToCartHandler = (item) => {

    if (localStorage.getItem('login') === 'no') {
      // Display a modal indicating that the user needs to log in
      // showLoginModal();
      unLogin()
      return;
    }

    // Kiểm tra nếu sản phẩm có id_dm=6 và đã tồn tại trong cart, không thực hiện thêm mới
    if (item.id_dm === 6 && cart.some(cartItem => cartItem.id_sp === item.id_sp)) {
      console.error('Sản phẩm đã tồn tại trong giỏ hàng');
      IssetInCartNotify();
      return;
    }

    const existingCartItem = cart.find(cartItem => cartItem.id_sp === item.id_sp);
    const availableQuantity = item.soluong;

    if (existingCartItem) {
      // Nếu sản phẩm đã tồn tại trong cart, kiểm tra số lượng còn lại
      const newAmount = existingCartItem.amount + 1;
      if (newAmount <= availableQuantity) {
        const updatedCart = cart.map(cartItem =>
          cartItem.id_sp === item.id_sp ? { ...cartItem, amount: newAmount } : cartItem
        );
        Notify();
        setCart(updatedCart);
      } else {
        console.error('Số lượng vượt quá giới hạn');
        quantityNotify();
      }
    } else {
      // Nếu sản phẩm chưa tồn tại trong cart, thêm mới với amount là 1 nếu còn hàng
      if (availableQuantity > 0) {
        const updatedCart = [...cart, { ...item, amount: 1 }];
        Notify();
        setCart(updatedCart);
      } else {
        console.error('Sản phẩm đã hết hàng');
        quantityNotify();
      }
    }
  };

  useEffect(() => {
    axios.get(`/api/product/getPetAccessories`)
      .then((response) => {
        setDataAccessories(response.data);
      })
      .catch((error) => {
        console.error('error fetching data :', error);
      });
    if (shouldScroll) {
      const element = document.getElementById("dichvutialong");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setShouldScroll(false)
      }
    }
  }, [shouldScroll, setShouldScroll]);
  return (
    <>

      <Navbar />
      <section id="banner" style={{ background: "#F9F3EC" }}>
        <div class="container">
          <Swiper
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
          >

            <SwiperSlide>
              <div class="row banner-content align-items-center">
                <div class="img-wrapper col-md-5">
                  <img alt="dghouse.shop" src={process.env.REACT_APP_URL_API + "/images/banner-img.png"} class="img-fluid" />
                </div>
                <div class="content-wrapper col-md-7 p-5 mb-5">
                  <div class="secondary-font text-primary text-uppercase mb-4">Save 10 - 20 % off</div>
                  <h2 class="banner-title display-1 fw-normal">Best destination for <span class="text-primary">your
                    pets</span>
                  </h2>
                  <a href="/#" class="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1">
                    shop now
                  </a>
                </div>

              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="row banner-content align-items-center">
                <div class="img-wrapper col-md-5">
                  <img alt="dghouse.shop" src={process.env.REACT_APP_URL_API + "/images/banner-img3.png"} class="img-fluid" />
                </div>
                <div class="content-wrapper col-md-7 p-5 mb-5">
                  <div class="secondary-font text-primary text-uppercase mb-4">Save 10 - 20 % off</div>
                  <h2 class="banner-title display-1 fw-normal">Best destination for <span class="text-primary">your
                    pets</span>
                  </h2>
                  <a href="/#" class="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1">
                    shop now

                  </a>
                </div>

              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="row banner-content align-items-center">
                <div class="img-wrapper col-md-5">
                  <img alt="dghouse.shop" src={process.env.REACT_APP_URL_API + "/images/banner-img4.png"} class="img-fluid" />
                </div>
                <div class="content-wrapper col-md-7 p-5 mb-5">
                  <div class="secondary-font text-primary text-uppercase mb-4">Save 10 - 20 % off</div>
                  <h2 class="banner-title display-1 fw-normal">Best destination for <span class="text-primary">your
                    pets</span>
                  </h2>
                  <a href="/#" class="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1">
                    shop now

                  </a>
                </div>

              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      <section id="categories">
        <div class="container my-3 py-5">
          <div class="row my-5">
            <div class="col text-center">
              <a href="/#" class="categories-item">
                <Icon class="category-icon" icon="ph:bowl-food" style={{ fontSize: '100px', color: "#DEAD6F99" }}></Icon>
                <h5>Foodies</h5>
              </a>
            </div>
            <div class="col text-center">
              <a href="/#" class="categories-item">
                <Icon class="category-icon" icon="ph:bird" style={{ fontSize: '100px', color: "#DEAD6F99" }}></Icon>
                <h5>Bird Shop</h5>
              </a>
            </div>
            <div class="col text-center">
              <a href="/#" class="categories-item">
                <Icon class="category-icon" icon="ph:dog" style={{ fontSize: '100px', color: "#DEAD6F99" }}></Icon>
                <h5>Dog Shop</h5>
              </a>
            </div>
            <div class="col text-center">
              <a href="/#" class="categories-item">
                <Icon class="category-icon" icon="ph:fish" style={{ fontSize: '100px', color: "#DEAD6F99" }}></Icon>
                <h5>Fish Shop</h5>
              </a>
            </div>
            <div class="col text-center">
              <a href="/#" class="categories-item">
                <Icon class="category-icon" icon="ph:cat" style={{ fontSize: '100px', color: "#DEAD6F99" }}></Icon>
                <h5>Cat Shop</h5>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="clothing" class="my-5 overflow-hidden">
        <div class="container pb-5">

          <div class="section-header d-md-flex justify-content-between align-items-center mb-3">
            <h2 class="display-3 fw-normal">Pet Accessories</h2>
            <div>
              <a href="/#" class="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1">
                shop now
              </a>
            </div>
          </div>

          <Swiper
            breakpoints={{
              576: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 4,
              },
              1400: {
                slidesPerView: 4,
              },
            }}
            spaceBetween={50}
            // autoplay={{
            //   delay: 2500,
            //   disableOnInteraction: false,
            // }}
            navigation={true}
            modules={[Autoplay, Navigation]}
          >
            {dataAccessories.map((item, i) => {
              return (
                <SwiperSlide>
                  <div class="z-1 position-absolute rounded-3 px-3 border border-dark-subtle bg-white">
                    New
                  </div>
                  <div class="z-1 position-absolute end-0 rounded-3 bg-white">
                    <a href="" class="btn border border-dark-subtle btn-outline-heart"><Icon icon="fluent:heart-24-filled" class="fs-5"></Icon></a>
                  </div>
                  <div class="card position-relative text-center text-md-start border p-2">
                    <a href="single-product.html"><img alt="dghouse.shop" src={process.env.REACT_APP_URL_API + "/products/" + item.hinh} class="img-fluid rounded-4 border-bottom mt-4 bg-image" /></a>
                    <div class="card-body p-0">
                      <a href={"/detailproduct/" + item.id_sp}>
                        <h6 class="card-title pt-4 text-truncate">{item.ten}</h6>
                      </a>

                      <div class="card-text">
                        <h5 class="secondary-font text-primary">{item.gia.toLocaleString('vi', { style: 'currency', currency: 'VND' })}</h5>

                        <span class="rating secondary-font">
                          <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                          <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                          <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                          <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                          <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                          {/* 5.0 */}
                        </span>

                        <div class="d-flex flex-wrap justify-content-center mt-3">
                          <button onClick={() => { onAddToCartHandler(item) }} class="btn btn-cart px-4 pt-3 pb-3 border">
                            <h6 class="text-uppercase m-0">Add to Cart</h6>
                          </button>
                          {/* <a href="/#" class="btn-wishlist px-4 pt-3 ">
                            <Icon icon="fluent:heart-24-filled" class="fs-5"></Icon>
                          </a> */}
                        </div>


                      </div>

                    </div>
                  </div>
                </SwiperSlide>
              )
            })}
            {/* <SwiperSlide>
              <div class="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle">
                New
              </div>
              <div class="card position-relative text-center text-md-start">
                <a href="single-product.html"><img alt="dghouse.shop" src={process.env.REACT_APP_URL_API + "/images/item1.jpg"} class="img-fluid rounded-4" /></a>
                <div class="card-body p-0">
                  <a href="single-product.html">
                    <h3 class="card-title pt-4 m-0 ">Grey hoodie</h3>
                  </a>

                  <div class="card-text">
                    <span class="rating secondary-font">
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      5.0
                    </span>

                    <h3 class="secondary-font text-primary">$18.00</h3>

                    <div class="d-flex flex-wrap justify-content-between mt-3">
                      <a href="/#" class="btn-cart px-4 pt-3 pb-3">
                        <h5 class="text-uppercase m-0">Add to Cart</h5>
                      </a>
                      <a href="/#" class="btn-wishlist px-4 pt-3 ">
                        <Icon icon="fluent:heart-28-filled" class="fs-5"></Icon>
                      </a>
                    </div>


                  </div>

                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle"></div>
              <div class="card position-relative">
                <a href="single-product.html"><img alt="dghouse.shop" src={process.env.REACT_APP_URL_API + "/images/item2.jpg"} class="img-fluid rounded-4" /></a>
                <div class="card-body p-0">
                  <a href="single-product.html">
                    <h3 class="card-title pt-4 m-0">Grey hoodie</h3>
                  </a>

                  <div class="card-text">
                    <span class="rating secondary-font">
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      5.0</span>

                    <h3 class="secondary-font text-primary">$18.00</h3>

                    <div class="d-flex flex-wrap mt-3">
                      <a href="/#" class="btn-cart me-3 px-4 pt-3 pb-3">
                        <h5 class="text-uppercase m-0">Add to Cart</h5>
                      </a>
                      <a href="/#" class="btn-wishlist px-4 pt-3 ">
                        <Icon icon="fluent:heart-28-filled" class="fs-5"></Icon>
                      </a>
                    </div>

                  </div>

                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle">
                -10%
              </div>
              <div class="card position-relative">
                <a href="single-product.html"><img alt="dghouse.shop" src={process.env.REACT_APP_URL_API + "/images/item3.jpg"} class="img-fluid rounded-4" /></a>
                <div class="card-body p-0">
                  <a href="single-product.html">
                    <h3 class="card-title pt-4 m-0">Grey hoodie</h3>
                  </a>

                  <div class="card-text">
                    <span class="rating secondary-font">
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      5.0</span>

                    <h3 class="secondary-font text-primary">$18.00</h3>

                    <div class="d-flex flex-wrap mt-3">
                      <a href="/#" class="btn-cart me-3 px-4 pt-3 pb-3">
                        <h5 class="text-uppercase m-0">Add to Cart</h5>
                      </a>
                      <a href="/#" class="btn-wishlist px-4 pt-3 ">
                        <Icon icon="fluent:heart-28-filled" class="fs-5"></Icon>
                      </a>
                    </div>


                  </div>

                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle"></div>
              <div class="card position-relative">
                <a href="single-product.html"><img alt="dghouse.shop" src={process.env.REACT_APP_URL_API + "/images/item4.jpg"} class="img-fluid rounded-4" /></a>
                <div class="card-body p-0">
                  <a href="single-product.html">
                    <h3 class="card-title pt-4 m-0">Grey hoodie</h3>
                  </a>

                  <div class="card-text">
                    <span class="rating secondary-font">
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      5.0</span>

                    <h3 class="secondary-font text-primary">$18.00</h3>

                    <div class="d-flex flex-wrap mt-3">
                      <a href="/#" class="btn-cart me-3 px-4 pt-3 pb-3">
                        <h5 class="text-uppercase m-0">Add to Cart</h5>
                      </a>
                      <a href="/#" class="btn-wishlist px-4 pt-3 ">
                        <Icon icon="fluent:heart-28-filled" class="fs-5"></Icon>
                      </a>
                    </div>


                  </div>

                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle"></div>
              <div class="card position-relative">
                <a href="single-product.html"><img alt="dghouse.shop" src={process.env.REACT_APP_URL_API + "/images/item7.jpg"} class="img-fluid rounded-4" /></a>
                <div class="card-body p-0">
                  <a href="single-product.html">
                    <h3 class="card-title pt-4 m-0">Grey hoodie</h3>
                  </a>

                  <div class="card-text">
                    <span class="rating secondary-font">
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      5.0</span>

                    <h3 class="secondary-font text-primary">$18.00</h3>

                    <div class="d-flex flex-wrap mt-3">
                      <a href="/#" class="btn-cart me-3 px-4 pt-3 pb-3">
                        <h5 class="text-uppercase m-0">Add to Cart</h5>
                      </a>
                      <a href="/#" class="btn-wishlist px-4 pt-3 ">
                        <Icon icon="fluent:heart-28-filled" class="fs-5"></Icon>
                      </a>
                    </div>


                  </div>

                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle"></div>
              <div class="card position-relative">
                <a href="single-product.html"><img alt="dghouse.shop" src={process.env.REACT_APP_URL_API + "/images/item8.jpg"} class="img-fluid rounded-4" /></a>
                <div class="card-body p-0">
                  <a href="single-product.html">
                    <h3 class="card-title pt-4 m-0">Grey hoodie</h3>
                  </a>

                  <div class="card-text">
                    <span class="rating secondary-font">
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      5.0</span>

                    <h3 class="secondary-font text-primary">$18.00</h3>

                    <div class="d-flex flex-wrap mt-3">
                      <a href="/#" class="btn-cart me-3 px-4 pt-3 pb-3">
                        <h5 class="text-uppercase m-0">Add to Cart</h5>
                      </a>
                      <a href="/#" class="btn-wishlist px-4 pt-3 ">
                        <Icon icon="fluent:heart-28-filled" class="fs-5"></Icon>
                      </a>
                    </div>


                  </div>

                </div>
              </div>
            </SwiperSlide> */}
          </Swiper>
        </div>
      </section>

      <section id="foodies" class="my-5">
        <div class="container my-5 py-5">

          <div class="section-header d-md-flex justify-content-between align-items-center">
            <h2 class="display-3 fw-normal">Pet Foodies</h2>
            <div class="mb-4 mb-md-0">
              <p class="m-0">
                <button class="filter-button me-4  active" data-filter="*">ALL</button>
                <button class="filter-button me-4 " data-filter=".cat">CAT</button>
                <button class="filter-button me-4 " data-filter=".dog">DOG</button>
                <button class="filter-button me-4 " data-filter=".bird">BIRD</button>
              </p>
            </div>
            <div>
              <a href="/#" class="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1">
                shop now
              </a>
            </div>
          </div>

          <div class="isotope-container row">

            <div class="item cat col-md-4 col-lg-3 my-4">
              <div class="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle"></div>
              <div class="card position-relative">
                <a href="single-product.html"><img alt="dghouse.shop" src={process.env.REACT_APP_URL_API + "/images/item9.jpg"} class="img-fluid rounded-4" /></a>
                <div class="card-body p-0">
                  <a href="single-product.html">
                    <h3 class="card-title pt-4 m-0">Grey hoodie</h3>
                  </a>

                  <div class="card-text">
                    <span class="rating secondary-font">
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      5.0</span>

                    <h3 class="secondary-font text-primary">$18.00</h3>

                    <div class="d-flex flex-wrap mt-3">
                      <a href="/#" class="btn-cart me-3 px-4 pt-3 pb-3">
                        <h5 class="text-uppercase m-0">Add to Cart</h5>
                      </a>
                      <a href="/#" class="btn-wishlist px-4 pt-3 ">
                        <Icon icon="fluent:heart-28-filled" class="fs-5"></Icon>
                      </a>
                    </div>


                  </div>

                </div>
              </div>
            </div>

            <div class="item dog col-md-4 col-lg-3 my-4">
              <div class="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle">
                New
              </div>
              <div class="card position-relative">
                <a href="single-product.html"><img alt="dghouse.shop" src={process.env.REACT_APP_URL_API + "/images/item10.jpg"} class="img-fluid rounded-4" /></a>
                <div class="card-body p-0">
                  <a href="single-product.html">
                    <h3 class="card-title pt-4 m-0">Grey hoodie</h3>
                  </a>

                  <div class="card-text">
                    <span class="rating secondary-font">
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      5.0</span>

                    <h3 class="secondary-font text-primary">$18.00</h3>

                    <div class="d-flex flex-wrap mt-3">
                      <a href="/#" class="btn-cart me-3 px-4 pt-3 pb-3">
                        <h5 class="text-uppercase m-0">Add to Cart</h5>
                      </a>
                      <a href="/#" class="btn-wishlist px-4 pt-3 ">
                        <Icon icon="fluent:heart-28-filled" class="fs-5"></Icon>
                      </a>
                    </div>


                  </div>

                </div>
              </div>
            </div>

            <div class="item dog col-md-4 col-lg-3 my-4">
              <div class="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle"></div>
              <div class="card position-relative">
                <a href="single-product.html"><img alt="dghouse.shop" src={process.env.REACT_APP_URL_API + "/images/item11.jpg"} class="img-fluid rounded-4" /></a>
                <div class="card-body p-0">
                  <a href="single-product.html">
                    <h3 class="card-title pt-4 m-0">Grey hoodie</h3>
                  </a>

                  <div class="card-text">
                    <span class="rating secondary-font">
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      5.0</span>

                    <h3 class="secondary-font text-primary">$18.00</h3>

                    <div class="d-flex flex-wrap mt-3">
                      <a href="/#" class="btn-cart me-3 px-4 pt-3 pb-3">
                        <h5 class="text-uppercase m-0">Add to Cart</h5>
                      </a>
                      <a href="/#" class="btn-wishlist px-4 pt-3 ">
                        <Icon icon="fluent:heart-28-filled" class="fs-5"></Icon>
                      </a>
                    </div>


                  </div>

                </div>
              </div>
            </div>

            <div class="item cat col-md-4 col-lg-3 my-4">
              <div class="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle">
                Sold
              </div>
              <div class="card position-relative">
                <a href="single-product.html"><img alt="dghouse.shop" src={process.env.REACT_APP_URL_API + "/images/item12.jpg"} class="img-fluid rounded-4" /></a>
                <div class="card-body p-0">
                  <a href="single-product.html">
                    <h3 class="card-title pt-4 m-0">Grey hoodie</h3>
                  </a>

                  <div class="card-text">
                    <span class="rating secondary-font">
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      5.0</span>

                    <h3 class="secondary-font text-primary">$18.00</h3>

                    <div class="d-flex flex-wrap mt-3">
                      <a href="/#" class="btn-cart me-3 px-4 pt-3 pb-3">
                        <h5 class="text-uppercase m-0">Add to Cart</h5>
                      </a>
                      <a href="/#" class="btn-wishlist px-4 pt-3 ">
                        <Icon icon="fluent:heart-28-filled" class="fs-5"></Icon>
                      </a>
                    </div>


                  </div>

                </div>
              </div>
            </div>

            <div class="item bird col-md-4 col-lg-3 my-4">
              <div class="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle"></div>
              <div class="card position-relative">
                <a href="single-product.html"><img alt="dghouse.shop" src={process.env.REACT_APP_URL_API + "/images/item13.jpg"} class="img-fluid rounded-4" /></a>
                <div class="card-body p-0">
                  <a href="single-product.html">
                    <h3 class="card-title pt-4 m-0">Grey hoodie</h3>
                  </a>

                  <div class="card-text">
                    <span class="rating secondary-font">
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      5.0</span>

                    <h3 class="secondary-font text-primary">$18.00</h3>

                    <div class="d-flex flex-wrap mt-3">
                      <a href="/#" class="btn-cart me-3 px-4 pt-3 pb-3">
                        <h5 class="text-uppercase m-0">Add to Cart</h5>
                      </a>
                      <a href="/#" class="btn-wishlist px-4 pt-3 ">
                        <Icon icon="fluent:heart-28-filled" class="fs-5"></Icon>
                      </a>
                    </div>


                  </div>

                </div>
              </div>
            </div>

            <div class="item bird col-md-4 col-lg-3 my-4">
              <div class="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle"></div>
              <div class="card position-relative">
                <a href="single-product.html"><img alt="dghouse.shop" src={process.env.REACT_APP_URL_API + "/images/item14.jpg"} class="img-fluid rounded-4" /></a>
                <div class="card-body p-0">
                  <a href="single-product.html">
                    <h3 class="card-title pt-4 m-0">Grey hoodie</h3>
                  </a>

                  <div class="card-text">
                    <span class="rating secondary-font">
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      5.0</span>

                    <h3 class="secondary-font text-primary">$18.00</h3>

                    <div class="d-flex flex-wrap mt-3">
                      <a href="/#" class="btn-cart me-3 px-4 pt-3 pb-3">
                        <h5 class="text-uppercase m-0">Add to Cart</h5>
                      </a>
                      <a href="/#" class="btn-wishlist px-4 pt-3 ">
                        <Icon icon="fluent:heart-28-filled" class="fs-5"></Icon>
                      </a>
                    </div>


                  </div>

                </div>
              </div>
            </div>

            <div class="item dog col-md-4 col-lg-3 my-4">
              <div class="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle">
                Sale
              </div>
              <div class="card position-relative">
                <a href="single-product.html"><img alt="dghouse.shop" src={process.env.REACT_APP_URL_API + "/images/item15.jpg"} class="img-fluid rounded-4" /></a>
                <div class="card-body p-0">
                  <a href="single-product.html">
                    <h3 class="card-title pt-4 m-0">Grey hoodie</h3>
                  </a>

                  <div class="card-text">
                    <span class="rating secondary-font">
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      5.0</span>

                    <h3 class="secondary-font text-primary">$18.00</h3>

                    <div class="d-flex flex-wrap mt-3">
                      <a href="/#" class="btn-cart me-3 px-4 pt-3 pb-3">
                        <h5 class="text-uppercase m-0">Add to Cart</h5>
                      </a>
                      <a href="/#" class="btn-wishlist px-4 pt-3 ">
                        <Icon icon="fluent:heart-28-filled" class="fs-5"></Icon>
                      </a>
                    </div>


                  </div>

                </div>
              </div>
            </div>

            <div class="item cat col-md-4 col-lg-3 my-4">
              <div class="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle"></div>
              <div class="card position-relative">
                <a href="single-product.html"><img alt="dghouse.shop" src={process.env.REACT_APP_URL_API + "/images/item16.jpg"} class="img-fluid rounded-4" /></a>
                <div class="card-body p-0">
                  <a href="single-product.html">
                    <h3 class="card-title pt-4 m-0">Grey hoodie</h3>
                  </a>

                  <div class="card-text">
                    <span class="rating secondary-font">
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      5.0</span>

                    <h3 class="secondary-font text-primary">$18.00</h3>

                    <div class="d-flex flex-wrap mt-3">
                      <a href="/#" class="btn-cart me-3 px-4 pt-3 pb-3">
                        <h5 class="text-uppercase m-0">Add to Cart</h5>
                      </a>
                      <a href="/#" class="btn-wishlist px-4 pt-3 ">
                        <Icon icon="fluent:heart-28-filled" class="fs-5"></Icon>
                      </a>
                    </div>


                  </div>

                </div>
              </div>
            </div>


          </div>


        </div>
      </section>

      <section id="banner-2" class="my-3" style={{ background: "#F9F3EC" }}>
        <div class="container">
          <div class="row flex-row-reverse banner-content align-items-center">
            <div class="img-wrapper col-12 col-md-6">
              <img alt="dghouse.shop" src={process.env.REACT_APP_URL_API + "/images/banner-img2.png"} class="img-fluid" />
            </div>
            <div class="content-wrapper col-12 offset-md-1 col-md-5 p-5">
              <div class="secondary-font text-primary text-uppercase mb-3 fs-4">Upto 40% off</div>
              <h2 class="banner-title display-1 fw-normal">Clearance sale !!!
              </h2>
              <a href="/#" class="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1">
                shop now
              </a>
            </div>

          </div>
        </div>
      </section>

      <section id="testimonial">
        <div class="container my-5 py-5">
          <div class="row">
            <div class="offset-md-1 col-md-10">
              <Swiper
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
              >
                <SwiperSlide>
                  <div class="row ">
                    <div class="col-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="10em" height="10em" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621c.537-.278 1.24-.375 1.929-.311c1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5a3.871 3.871 0 0 1-2.748-1.179m10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621c.537-.278 1.24-.375 1.929-.311c1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5a3.871 3.871 0 0 1-2.748-1.179"></path>
                      </svg>
                    </div>
                    <div class="col-md-10 mt-md-5 p-5 pt-0 pt-md-5">
                      <p class="testimonial-content fs-2">Mèo vốn là loài vật trung thành tuyệt đối trong tình cảm, vì vậy mèo chính là thú cưng mang lại nguồn năng lực biến ngôi nhà lạnh lẽo thành nơi ấm áp và hạnh phúc.</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div class="row ">
                    <div class="col-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="10em" height="10em" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621c.537-.278 1.24-.375 1.929-.311c1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5a3.871 3.871 0 0 1-2.748-1.179m10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621c.537-.278 1.24-.375 1.929-.311c1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5a3.871 3.871 0 0 1-2.748-1.179"></path>
                      </svg>
                    </div>
                    <div class="col-md-10 mt-md-5 p-5 pt-0 pt-md-5">
                      <p class="testimonial-content fs-2">Chó và mèo đều không thể nói, nhưng chúng có thể nghe và hiểu bạn hơn bất kỳ ai khác.</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div class="row ">
                    <div class="col-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="10em" height="10em" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621c.537-.278 1.24-.375 1.929-.311c1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5a3.871 3.871 0 0 1-2.748-1.179m10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621c.537-.278 1.24-.375 1.929-.311c1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5a3.871 3.871 0 0 1-2.748-1.179"></path>
                      </svg>
                    </div>
                    <div class="col-md-10 mt-md-5 p-5 pt-0 pt-md-5">
                      <p class="testimonial-content fs-2">Những cuộc tình đầu với thú cưng mang lại những kỷ niệm đáng nhớ và những trải nghiệm không thể nào quên. Thú cưng giúp ta hiểu rõ hơn về tình yêu vô điều kiện và sự chia sẻ.</p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>

      </section>

      <section id="bestselling" class="my-5 overflow-hidden">
        <div class="container py-5 mb-5">

          <div class="section-header d-md-flex justify-content-between align-items-center mb-3">
            <h2 class="display-3 fw-normal">Best selling products</h2>
            <div>
              <a href="/#" class="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1">
                shop now
              </a>
            </div>
          </div>
          <Swiper className="mySwiper"
            spaceBetween={50}
            slidesPerView={4}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Autoplay, Navigation]}
          >
            <SwiperSlide>
              <div class="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle"></div>
              <div class="card position-relative">
                <a href="single-product.html"><img alt="dghouse.shop" src={process.env.REACT_APP_URL_API + "/images/item5.jpg"} class="img-fluid rounded-4" /></a>
                <div class="card-body p-0">
                  <a href="single-product.html">
                    <h3 class="card-title pt-4 m-0">Grey hoodie</h3>
                  </a>

                  <div class="card-text">
                    <span class="rating secondary-font">
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      5.0</span>

                    <h3 class="secondary-font text-primary">$18.00</h3>

                    <div class="d-flex flex-wrap mt-3">
                      <a href="/#" class="btn-cart me-3 px-4 pt-3 pb-3">
                        <h5 class="text-uppercase m-0">Add to Cart</h5>
                      </a>
                      <a href="/#" class="btn-wishlist px-4 pt-3 ">
                        <Icon icon="fluent:heart-28-filled" class="fs-5"></Icon>
                      </a>
                    </div>


                  </div>

                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle"></div>
              <div class="card position-relative">
                <a href="single-product.html"><img alt="dghouse.shop" src={process.env.REACT_APP_URL_API + "/images/item6.jpg"} class="img-fluid rounded-4" /></a>
                <div class="card-body p-0">
                  <a href="single-product.html">
                    <h3 class="card-title pt-4 m-0">Grey hoodie</h3>
                  </a>

                  <div class="card-text">
                    <span class="rating secondary-font">
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      5.0</span>

                    <h3 class="secondary-font text-primary">$18.00</h3>

                    <div class="d-flex flex-wrap mt-3">
                      <a href="/#" class="btn-cart me-3 px-4 pt-3 pb-3">
                        <h5 class="text-uppercase m-0">Add to Cart</h5>
                      </a>
                      <a href="/#" class="btn-wishlist px-4 pt-3 ">
                        <Icon icon="fluent:heart-28-filled" class="fs-5"></Icon>
                      </a>
                    </div>

                  </div>

                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle">
                Sale
              </div>
              <div class="card position-relative">
                <a href="single-product.html"><img alt="dghouse.shop" src={process.env.REACT_APP_URL_API + "/images/item7.jpg"} class="img-fluid rounded-4" /></a>
                <div class="card-body p-0">
                  <a href="single-product.html">
                    <h3 class="card-title pt-4 m-0">Grey hoodie</h3>
                  </a>

                  <div class="card-text">
                    <span class="rating secondary-font">
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      5.0</span>

                    <h3 class="secondary-font text-primary">$18.00</h3>

                    <div class="d-flex flex-wrap mt-3">
                      <a href="/#" class="btn-cart me-3 px-4 pt-3 pb-3">
                        <h5 class="text-uppercase m-0">Add to Cart</h5>
                      </a>
                      <a href="/#" class="btn-wishlist px-4 pt-3 ">
                        <Icon icon="fluent:heart-28-filled" class="fs-5"></Icon>
                      </a>
                    </div>


                  </div>

                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle"></div>
              <div class="card position-relative">
                <a href="single-product.html"><img alt="dghouse.shop" src={process.env.REACT_APP_URL_API + "/images/item8.jpg"} class="img-fluid rounded-4" /></a>
                <div class="card-body p-0">
                  <a href="single-product.html">
                    <h3 class="card-title pt-4 m-0">Grey hoodie</h3>
                  </a>

                  <div class="card-text">
                    <span class="rating secondary-font">
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      5.0</span>

                    <h3 class="secondary-font text-primary">$18.00</h3>

                    <div class="d-flex flex-wrap mt-3">
                      <a href="/#" class="btn-cart me-3 px-4 pt-3 pb-3">
                        <h5 class="text-uppercase m-0">Add to Cart</h5>
                      </a>
                      <a href="/#" class="btn-wishlist px-4 pt-3 ">
                        <Icon icon="fluent:heart-28-filled" class="fs-5"></Icon>
                      </a>
                    </div>


                  </div>

                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle">
                -10%
              </div>
              <div class="card position-relative">
                <a href="single-product.html"><img alt="dghouse.shop" src={process.env.REACT_APP_URL_API + "/images/item3.jpg"} class="img-fluid rounded-4" /></a>
                <div class="card-body p-0">
                  <a href="single-product.html">
                    <h3 class="card-title pt-4 m-0">Grey hoodie</h3>
                  </a>

                  <div class="card-text">
                    <span class="rating secondary-font">
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      5.0</span>

                    <h3 class="secondary-font text-primary">$18.00</h3>

                    <div class="d-flex flex-wrap mt-3">
                      <a href="/#" class="btn-cart me-3 px-4 pt-3 pb-3">
                        <h5 class="text-uppercase m-0">Add to Cart</h5>
                      </a>
                      <a href="/#" class="btn-wishlist px-4 pt-3 ">
                        <Icon icon="fluent:heart-28-filled" class="fs-5"></Icon>
                      </a>
                    </div>


                  </div>

                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle"></div>
              <div class="card position-relative">
                <a href="single-product.html"><img alt="dghouse.shop" src={process.env.REACT_APP_URL_API + "/images/item4.jpg"} class="img-fluid rounded-4" /></a>
                <div class="card-body p-0">
                  <a href="single-product.html">
                    <h3 class="card-title pt-4 m-0">Grey hoodie</h3>
                  </a>

                  <div class="card-text">
                    <span class="rating secondary-font">
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      5.0</span>

                    <h3 class="secondary-font text-primary">$18.00</h3>

                    <div class="d-flex flex-wrap mt-3">
                      <a href="/#" class="btn-cart me-3 px-4 pt-3 pb-3">
                        <h5 class="text-uppercase m-0">Add to Cart</h5>
                      </a>
                      <a href="/#" class="btn-wishlist px-4 pt-3 ">
                        <Icon icon="fluent:heart-28-filled" class="fs-5"></Icon>
                      </a>
                    </div>


                  </div>

                </div>
              </div>
            </SwiperSlide>
          </Swiper>


        </div>
      </section>

      <section id="register" style={{ background: "url('images/background-img.png') no-repeat" }}>
        <div class="container ">
          <div class="row my-5 py-5">
            <div class="offset-md-3 col-md-6 my-5 ">
              <h2 class="display-3 fw-normal text-center">Get 20% Off on <span class="text-primary">first Purchase</span>
              </h2>
              <form>
                <div class="mb-3">
                  <input type="email" class="form-control form-control-lg" name="email" id="email"
                    placeholder="Enter Your Email Address" />
                </div>
                <div class="mb-3">
                  <input type="password" class="form-control form-control-lg" name="email" id="password1"
                    placeholder="Create Password" />
                </div>
                <div class="mb-3">
                  <input type="password" class="form-control form-control-lg" name="email" id="password2"
                    placeholder="Repeat Password" />
                </div>

                <div class="d-grid gap-2">
                  <button type="submit" class="btn btn-dark btn-lg rounded-1">Register it now</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section id="latest-blog" class="my-5">
        <div class="container py-5 my-5">
          <div class="row mt-5">
            <div class="section-header d-md-flex justify-content-between align-items-center mb-3">
              <h2 class="display-3 fw-normal">Latest Blog Post</h2>
              <div>
                <a href="/#" class="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1">
                  Read all
                  <svg width="24" height="24" viewBox="0 0 24 24" class="mb-1">
                    <use xlinkHref="#arrow-right"></use>
                  </svg></a>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col col-md-4 my-4 my-md-0">
              <div class="z-1 position-absolute rounded-3 m-2 px-3 pt-1 bg-light">
                <h3 class="secondary-font text-primary m-0">20</h3>
                <p class="secondary-font fs-6 m-0">Feb</p>

              </div>
              <div class="card position-relative">
                <a href="single-post.html" class="m-auto"><img alt="dghouse.shop" src={process.env.REACT_APP_URL_API + "/images/blog1.jpg"} class="img-fluid rounded-4" /></a>
                <div class="card-body p-0 text-justify">
                  <a href="single-post.html">
                    <h3 class="card-title pt-4 pb-3 m-0">10 Reasons to be helpful towards any animals</h3>
                  </a>

                  <div class="card-text">
                    <p class="blog-paragraph fs-6">At the core of our practice is the idea that cities are the incubators of
                      our greatest
                      achievements, and the best hope for a sustainable future.</p>
                    <a href="single-post.html" class="blog-read">read more</a>
                  </div>

                </div>
              </div>
            </div>
            <div class="col-md-4 my-4 my-md-0">
              <div class="z-1 position-absolute rounded-3 m-2 px-3 pt-1 bg-light">
                <h3 class="secondary-font text-primary m-0">21</h3>
                <p class="secondary-font fs-6 m-0">Feb</p>

              </div>
              <div class="card position-relative">
                <a href="single-post.html"><img alt="dghouse.shop" src={process.env.REACT_APP_URL_API + "/images/blog2.jpg"} class="img-fluid rounded-4" /></a>
                <div class="card-body p-0">
                  <a href="single-post.html">
                    <h3 class="card-title pt-4 pb-3 m-0">How to know your pet is hungry</h3>
                  </a>

                  <div class="card-text">
                    <p class="blog-paragraph fs-6">At the core of our practice is the idea that cities are the incubators of
                      our greatest
                      achievements, and the best hope for a sustainable future.</p>
                    <a href="single-post.html" class="blog-read">read more</a>
                  </div>

                </div>
              </div>
            </div>
            <div class="col-md-4 my-4 my-md-0">
              <div class="z-1 position-absolute rounded-3 m-2 px-3 pt-1 bg-light">
                <h3 class="secondary-font text-primary m-0">22</h3>
                <p class="secondary-font fs-6 m-0">Feb</p>

              </div>
              <div class="card position-relative">
                <a href="single-post.html"><img alt="dghouse.shop" src={process.env.REACT_APP_URL_API + "/images/blog3.jpg"} class="img-fluid rounded-4" /></a>
                <div class="card-body p-0">
                  <a href="single-post.html">
                    <h3 class="card-title pt-4 pb-3 m-0">Best home for your pets</h3>
                  </a>

                  <div class="card-text">
                    <p class="blog-paragraph fs-6">At the core of our practice is the idea that cities are the incubators of
                      our greatest
                      achievements, and the best hope for a sustainable future.</p>
                    <a href="single-post.html" class="blog-read">read more</a>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* <section id="service">
        <div class="container py-5 my-5">
          <div class="row g-md-5 pt-4">
            <div class="col-md-3 my-3">
              <div class="card">
                <div>
                  <Icon class="service-icon text-primary" icon="la:shopping-cart"></Icon>
                </div>
                <h3 class="card-title py-2 m-0">Free Delivery</h3>
                <div class="card-text">
                  <p class="blog-paragraph fs-6">Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
                </div>
              </div>
            </div>
            <div class="col-md-3 my-3">
              <div class="card">
                <div>
                  <Icon class="service-icon text-primary" icon="la:user-check"></Icon>
                </div>
                <h3 class="card-title py-2 m-0">100% secure payment</h3>
                <div class="card-text">
                  <p class="blog-paragraph fs-6">Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
                </div>
              </div>
            </div>
            <div class="col-md-3 my-3">
              <div class="card">
                <div>
                  <Icon class="service-icon text-primary" icon="la:tag"></Icon>
                </div>
                <h3 class="card-title py-2 m-0">Daily Offer</h3>
                <div class="card-text">
                  <p class="blog-paragraph fs-6">Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
                </div>
              </div>
            </div>
            <div class="col-md-3 my-3">
              <div class="card">
                <div>
                  <Icon class="service-icon text-primary" icon="la:award"></Icon>
                </div>
                <h3 class="card-title py-2 m-0">Quality guarantee</h3>
                <div class="card-text">
                  <p class="blog-paragraph fs-6">Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section> */}

      {/* <section id="insta" class="my-5">
        <div class="row g-0 py-5">
          <div class="col instagram-item  text-center position-relative">
            <div class="icon-overlay d-flex justify-content-center position-absolute">
              <Icon class="text-white" icon="la:instagram"></Icon>
            </div>
            <a href="/#">
              <img alt="dghouse.shop" src="images/insta1.jpg" class="img-fluid rounded-3" />
            </a>
          </div>
          <div class="col instagram-item  text-center position-relative">
            <div class="icon-overlay d-flex justify-content-center position-absolute">
              <Icon class="text-white" icon="la:instagram"></Icon>
            </div>
            <a href="/#">
              <img alt="dghouse.shop" src="images/insta2.jpg" class="img-fluid rounded-3" />
            </a>
          </div>
          <div class="col instagram-item  text-center position-relative">
            <div class="icon-overlay d-flex justify-content-center position-absolute">
              <Icon class="text-white" icon="la:instagram"></Icon>
            </div>
            <a href="/#">
              <img alt="dghouse.shop" src="images/insta3.jpg" class="img-fluid rounded-3" />
            </a>
          </div>
          <div class="col instagram-item  text-center position-relative">
            <div class="icon-overlay d-flex justify-content-center position-absolute">
              <Icon class="text-white" icon="la:instagram"></Icon>
            </div>
            <a href="/#">
              <img alt="dghouse.shop" src="images/insta4.jpg" class="img-fluid rounded-3" />
            </a>
          </div>
          <div class="col instagram-item  text-center position-relative">
            <div class="icon-overlay d-flex justify-content-center position-absolute">
              <Icon class="text-white" icon="la:instagram"></Icon>
            </div>
            <a href="/#">
              <img alt="dghouse.shop" src="images/insta5.jpg" class="img-fluid rounded-3" />
            </a>
          </div>
          <div class="col instagram-item  text-center position-relative">
            <div class="icon-overlay d-flex justify-content-center position-absolute">
              <Icon class="text-white" icon="la:instagram"></Icon>
            </div>
            <a href="/#">
              <img alt="dghouse.shop" src="images/insta6.jpg" class="img-fluid rounded-3" />
            </a>
          </div>
        </div>
      </section> */}
    </>
  )
}
