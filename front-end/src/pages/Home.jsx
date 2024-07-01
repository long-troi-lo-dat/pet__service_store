import React, { useContext, useEffect, useState } from "react";
import axios from "../axios";
import { GlobalContext } from "../Context";
import Navbar from '../components/Navbar';
import Item from "../components/Item";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Icon } from '@iconify/react';

import "../assets/css/bootstrap.css";
import "../assets/css/style.css"
import 'react-toastify/dist/ReactToastify.css';
import "swiper/css";
import 'swiper/css/pagination';

export default function Home() {

  const { shouldScroll, setShouldScroll } = useContext(GlobalContext);
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [dataAccessories, setDataAccessories] = useState([]);
  const [dataFood, setDataFood] = useState([]);
  const [category, setCategory] = useState([]);

  const handleBtns = (word) => {
    console.log(word);
    console.log(dataFood);
    console.log(category);

    if (word === "all") {
      setCategory(dataFood);
    } else if (word === "cat") {
      const filtered = dataFood.filter(item => item.ten.toLowerCase().includes("mèo"));
      setCategory(filtered);
    } else if (word === "dog") {
      const filtered = dataFood.filter(item => item.ten.toLowerCase().includes("chó"));
      setCategory(filtered);
    }
  };

  useEffect(() => {
    axios.get(`/api/product/getPetAccessories`)
      .then((response) => {
        setDataAccessories(response.data);
      })
      .catch((error) => {
        console.error('error fetching data:', error);
      });

    axios.get(`/api/product/getPetFood`)
      .then((response) => {
        setDataFood(response.data);
        setCategory(response.data);
      })
      .catch((error) => {
        console.error('error fetching data:', error);
      });

    if (shouldScroll) {
      const element = document.getElementById("dichvutialong");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setShouldScroll(false);
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
                  <div class="secondary-font text-primary text-uppercase mb-4">Khuyến mãi 10 - 20 %</div>
                  <h2 class="banner-title display-1 fw-normal">Lựa chọn tốt nhất cho <span class="text-primary">Cún cưng</span>
                  </h2>
                  <a href="/shop" class="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1">
                    Mua ngay
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
                  <div class="secondary-font text-primary text-uppercase mb-4">Khuyến mãi 10 - 20 %</div>
                  <h2 class="banner-title display-1 fw-normal">Lựa chọn tốt nhất cho <span class="text-primary">Hoàng thượng</span>
                  </h2>
                  <a href="/shop" class="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1">
                    Mua ngay
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
                  <div class="secondary-font text-primary text-uppercase mb-4">Khuyến mãi 10 - 20 %</div>
                  <h2 class="banner-title display-1 fw-normal">Lựa chọn tốt nhất cho <span class="text-primary">Cún cưng</span>
                  </h2>
                  <a href="/shop" class="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1">
                    Mua ngay
                  </a>
                </div>

              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      <section id="categories">
        <div class="container my-3 py-5">
          <div class="row my-5 justify-content-center">
            <div class="col-6 col-md-4 col-lg-2 text-center">
              <a href="/#" class="categories-item">
                <Icon class="category-icon" icon="ph:bowl-food" style={{ fontSize: '100px', color: "#DEAD6F99" }}></Icon>
                <h6>Thức ăn</h6>
              </a>
            </div>
            <div class="col-6 col-md-4 col-lg-2 text-center">
              <a href="/#" class="categories-item">
                <Icon class="category-icon" icon="ph:dog" style={{ fontSize: '100px', color: "#DEAD6F99" }}></Icon>
                <h6>Dành cho chó</h6>
              </a>
            </div>
            <div class="col-6 col-md-4 col-lg-2 text-center">
              <a href="/#" class="categories-item">
                <Icon class="category-icon" icon="ph:cat" style={{ fontSize: '100px', color: "#DEAD6F99" }}></Icon>
                <h6>Dành cho mèo</h6>
              </a>
            </div>
            <div class="col-6 col-md-4 col-lg-2 text-center">
              <a href="/#" class="categories-item">
                <Icon class="category-icon" icon="ph:fish" style={{ fontSize: '100px', color: "#DEAD6F99" }}></Icon>
                <h6>Dành cho cá</h6>
                <p className="small text-muted">sắp ra mắt!</p>
              </a>
            </div>
            <div class="col-6 col-md-4 col-lg-2 text-center">
              <a href="/#" class="categories-item">
                <Icon class="category-icon" icon="ph:bird" style={{ fontSize: '100px', color: "#DEAD6F99" }}></Icon>
                <h6>Dành cho chim</h6>
                <p className="small text-muted">sắp ra mắt!</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="clothing" class="my-5 overflow-hidden">
        <div class="container pb-5">

          <div class="section-header d-md-flex justify-content-between align-items-center mb-3">
            <h2 class="display-3 fw-normal">Phụ kiện</h2>
            <div>
              <a href="/shop" class="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1">
                Mua ngay
              </a>
            </div>
          </div>

          <Swiper
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 4,
              },
            }}
            slidesPerView={2}
            spaceBetween={24}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Autoplay, Navigation]}
          >
            {dataAccessories.map((item, i) => {
              return (
                <SwiperSlide>
                  <Item key={item.id_sp} id_sp={item.id_sp} ten={item.ten} gia={item.gia} ngaythem={item.ngaythem} soluong={item.soluong} id_gl={item.id_gl} dob={item.dob} mota={item.mota} anhien={item.anhien} id_dm={item.id_dm} hinh={item.hinh} delay={i * 200} />
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </section >

      <section id="foodies" class="my-5">
        <div class="container my-5 py-5">

          <div class="section-header d-md-flex justify-content-between align-items-center">
            <h2 class="display-3 fw-normal">Thức ăn</h2>
            <div class="mb-4 mb-md-0">
              <p class="m-0">
                <button
                  onClick={() => {
                    setActiveItemIndex(0);
                    handleBtns("all");
                  }}
                  className={`filter-button me-4 ${activeItemIndex === 0 ? "active" : ""}`}>Tất cả</button>
                <button
                  onClick={() => {
                    setActiveItemIndex(1);
                    handleBtns("cat");
                  }}
                  className={`filter-button me-4 ${activeItemIndex === 1 ? "active" : ""}`}>Mèo</button>
                <button
                  onClick={() => {
                    setActiveItemIndex(2);
                    handleBtns("dog");
                  }}
                  className={`filter-button me-4 ${activeItemIndex === 2 ? "active" : ""}`}>Chó</button>
              </p>
            </div>
            <div>
              <a href="/shop" class="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1">
                Mua ngay
              </a>
            </div>
          </div>

          <div class="isotope-container row">
            {category.map((item, i) => (
              <div class="item col-6 col-md-4 col-lg-3 my-4">
                <Item key={item.id_sp} id_sp={item.id_sp} ten={item.ten} gia={item.gia} ngaythem={item.ngaythem} soluong={item.soluong} id_gl={item.id_gl} dob={item.dob} mota={item.mota} anhien={item.anhien} id_dm={item.id_dm} hinh={item.hinh} delay={i * 200} />
              </div>
            ))}
          </div>


        </div>
      </section >

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
                Mua ngay
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
                Mua ngay
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
                    <span class="rating secondary-font d-flex align-items-center">
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      5.0</span>

                    <h3 class="secondary-font text-primary">$18.00</h3>

                    <div class="d-flex flex-wrap mt-3">
                      <a href="/#" class="btn-cart me-3 px-3 pt-3 pb-3">
                        <h6 class="text-uppercase m-0">Add to Cart</h6>
                      </a>
                      <a href="/#" class="btn-wishlist px-3 pt-2 ">
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
                      <a href="/#" class="btn-cart me-2 px-3 pt-2 pb-2">
                        <h6 class="text-uppercase m-0">Add to Cart</h6>
                      </a>
                      <a href="/#" class="btn-wishlist px-3 pt-2 ">
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
                    <span class="rating secondary-font d-flex align-items-center">
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      5.0</span>

                    <h3 class="secondary-font text-primary">$18.00</h3>

                    <div class="d-flex flex-wrap mt-3">
                      <a href="/#" class="btn-cart me-3 px-3 pt-3 pb-3">
                        <h6 class="text-uppercase m-0">Add to Cart</h6>
                      </a>
                      <a href="/#" class="btn-wishlist px-3 pt-2 ">
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
                    <span class="rating secondary-font d-flex align-items-center">
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      5.0</span>

                    <h3 class="secondary-font text-primary">$18.00</h3>

                    <div class="d-flex flex-wrap mt-3">
                      <a href="/#" class="btn-cart me-3 px-3 pt-3 pb-3">
                        <h6 class="text-uppercase m-0">Add to Cart</h6>
                      </a>
                      <a href="/#" class="btn-wishlist px-3 pt-2 ">
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
                    <span class="rating secondary-font d-flex align-items-center">
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      5.0</span>

                    <h3 class="secondary-font text-primary">$18.00</h3>

                    <div class="d-flex flex-wrap mt-3">
                      <a href="/#" class="btn-cart me-3 px-3 pt-3 pb-3">
                        <h6 class="text-uppercase m-0">Add to Cart</h6>
                      </a>
                      <a href="/#" class="btn-wishlist px-3 pt-2 ">
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
                    <span class="rating secondary-font d-flex align-items-center">
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      5.0</span>

                    <h3 class="secondary-font text-primary">$18.00</h3>

                    <div class="d-flex flex-wrap mt-3">
                      <a href="/#" class="btn-cart me-3 px-3 pt-3 pb-3">
                        <h6 class="text-uppercase m-0">Add to Cart</h6>
                      </a>
                      <a href="/#" class="btn-wishlist px-3 pt-2 ">
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
                <a href="single-post.html" class=""><img alt="dghouse.shop" src={process.env.REACT_APP_URL_API + "/images/blog1.jpg"} class="img-fluid rounded-4" /></a>
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
                <div class="card-body p-0 text-justify">
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
                <div class="card-body p-0 text-justify">
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
