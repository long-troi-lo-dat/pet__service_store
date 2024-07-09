import React, { useEffect, useState } from "react";
import axios from "../axios";

import Item from "../components/Item";
import FastRegister from "../components/FastRegister"
import Services from "../components/Services"
import LoadingScreen from "../components/Loadingscreen"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Icon } from '@iconify/react';

import "../assets/css/bootstrap.css";
import "../assets/css/style.css"
import 'react-toastify/dist/ReactToastify.css';
import "swiper/css";
import 'swiper/css/pagination';

export default function Home() {
  const [loading, setLoading] = useState(true)
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [dataAccessories, setDataAccessories] = useState([]);
  const [dataFood, setDataFood] = useState([]);
  const [category, setCategory] = useState([]);

  const handleBtns = (word) => {

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

  const getData = async () => {
    await axios.get(`/api/product/getPetAccessories`)
      .then((response) => {
        setLoading(false)
        setDataAccessories(response.data);
      })
      .catch((error) => {
        console.error('error fetching data:', error);
      });

    await axios.get(`/api/product/getPetFood`)
      .then((response) => {
        setDataFood(response.data);
        setCategory(response.data);
        setLoading(false)
      })
      .catch((error) => {
        console.error('error fetching data:', error);
      });

  }

  useEffect(() => {
    getData()
  }, []);

  if (loading) {
    return <LoadingScreen />
  }

  return (
    <>
      <section id="banner" style={{ background: "#F9F3EC" }}>
        <div class="container mb-5">
          <Swiper
            loop="true"
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
        <div class="container mb-5">
          <div class="row justify-content-center">
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

      <section id="clothing" class="pb-5 overflow-hidden">
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
            loop="true"
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
            slidesPerView={1}
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
                  <div data-aos="fade-up" data-aos-delay={i * 200}>
                    <Item key={item.id_sp} id_sp={item.id_sp} ten={item.ten} gia={item.gia} ngaythem={item.ngaythem} soluong={item.soluong} id_gl={item.id_gl} dob={item.dob} mota={item.mota} anhien={item.anhien} id_dm={item.id_dm} hinh={item.hinh} />
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </section >

      <section id="foodies" class="pb-5">
        <div class="container pb-5">

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
              <div class="item col-12 col-md-4 col-lg-3 my-4">
                <Item key={item.id_sp} id_sp={item.id_sp} ten={item.ten} gia={item.gia} ngaythem={item.ngaythem} soluong={item.soluong} id_gl={item.id_gl} dob={item.dob} mota={item.mota} anhien={item.anhien} id_dm={item.id_dm} hinh={item.hinh} delay={i * 200} />
              </div>
            ))}
          </div>


        </div>
      </section >

      <section id="banner-2" class="mb-5" style={{ background: "#F9F3EC" }}>
        <div class="container">
          <div class="row flex-row-reverse banner-content align-items-center">
            <div class="img-wrapper col-12 col-md-6">
              <img alt="dghouse.shop" src={process.env.REACT_APP_URL_API + "/images/banner-img2.png"} class="img-fluid" />
            </div>
            <div class="content-wrapper col-12 offset-md-1 col-md-5 p-5">
              <div class="secondary-font text-primary text-uppercase mb-3 fs-4">Lên đến 40%</div>
              <h2 class="banner-title display-1 fw-normal">Giảm đậm giảm sâu !!!
              </h2>
              <a href="/#" class="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1">
                Mua ngay
              </a>
            </div>

          </div>
        </div>
      </section>

      <section id="testimonial">
        <div class="container mb-5">
          <div class="row">
            <div class="offset-md-1 col-md-10">
              <Swiper
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
              >
                <SwiperSlide>
                  <div class="row">
                    <div class="col-12 mt-md-5 p-5 pt-0 pt-md-5">
                      <p class="testimonial-content fs-2">"Mèo vốn là loài vật trung thành tuyệt đối trong tình cảm, vì vậy mèo chính là thú cưng mang lại nguồn năng lực biến ngôi nhà lạnh lẽo thành nơi ấm áp và hạnh phúc.</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div class="row">
                    <div class="col-12 mt-md-5 p-5 pt-0 pt-md-5">
                      <p class="testimonial-content fs-2">"Chó và mèo đều không thể nói, nhưng chúng có thể nghe và hiểu bạn hơn bất kỳ ai khác.</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div class="row">
                    <div class="col-12 mt-md-5 p-5 pt-0 pt-md-5">
                      <p class="testimonial-content fs-2">"Những cuộc tình đầu với thú cưng mang lại những kỷ niệm đáng nhớ và những trải nghiệm không thể nào quên. Thú cưng giúp ta hiểu rõ hơn về tình yêu vô điều kiện và sự chia sẻ.</p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>

      </section>

      <section id="bestselling" class="mb-5 overflow-hidden">
        <div class="container py-5 mb-5">

          <div class="section-header d-md-flex justify-content-between align-items-center mb-3">
            <h2 class="display-3 fw-normal">Best selling products</h2>
            <div>
              <a href="/#" class="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1">
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
            slidesPerView={1}
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
      </section>
      <FastRegister />
      <Services />
      <section id="latest-blog" class="mb-5">
        <div class="container py-5 my-5">
          <div class="row mt-5">
            <div class="section-header d-md-flex justify-content-between align-items-center mb-3">
              <h2 class="display-3 fw-normal">Bài viết mới nhất</h2>
              <div>
                <a href="/#" class="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1">
                  Đọc bài viết khác
                </a>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 col-lg-4 my-4 my-md-0">
              <div class="z-1 position-absolute rounded-3 m-2 px-3 pt-1 bg-light">
                <h3 class="secondary-font text-primary m-0 text-center">20</h3>
                <p class="secondary-font fs-6 m-0">Tháng 2</p>
              </div>
              <div class="card position-relative">
                <a href="single-post.html" class=""><img alt="dghouse.shop" src={process.env.REACT_APP_URL_API + "/images/blog1.jpg"} class="img-fluid rounded-4" /></a>
                <div class="card-body p-0 text-justify">
                  <a href="single-post.html">
                    <h3 class="card-title pt-4 pb-3 m-0">10 lý do để giúp đỡ động vật bị bỏ rơi</h3>
                  </a>
                  <div class="card-text">
                    <p class="blog-paragraph fs-6">Cho dù lý do để giúp đỡ động vật là gì thì nó cũng chẳng quang trọng, mọi sinh vật đều xứng đáng có được sự bình yên.</p>
                    <a href="single-post.html" class="blog-read">Đọc tiếp</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 my-4 my-md-0">
              <div class="z-1 position-absolute rounded-3 m-2 px-3 pt-1 bg-light">
                <h3 class="secondary-font text-primary m-0 text-center">21</h3>
                <p class="secondary-font fs-6 m-0">Tháng 2</p>
              </div>
              <div class="card position-relative">
                <a href="single-post.html"><img alt="dghouse.shop" src={process.env.REACT_APP_URL_API + "/images/blog2.jpg"} class="img-fluid rounded-4" /></a>
                <div class="card-body p-0 text-justify">
                  <a href="single-post.html text-primary">
                    <h3 class="card-title pt-4 pb-3 m-0">Làm sao để biết thú cưng nhà bạn đang đói?</h3>
                  </a>
                  <div class="card-text">
                    <p class="blog-paragraph fs-6">Cách dễ dàng nhất để không phải đọc bài post này chính là hãy cho chúng ăn cùng thời gian với chúng ta.</p>
                    <a href="single-post.html" class="blog-read">Đọc tiếp</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 my-4 my-md-0">
              <div class="z-1 position-absolute rounded-3 m-2 px-3 pt-1 bg-light">
                <h3 class="secondary-font text-primary m-0 text-center">22</h3>
                <p class="secondary-font fs-6 m-0">Tháng 2</p>
              </div>
              <div class="card position-relative">
                <a href="single-post.html"><img alt="dghouse.shop" src={process.env.REACT_APP_URL_API + "/images/blog3.jpg"} class="img-fluid rounded-4" /></a>
                <div class="card-body p-0 text-justify">
                  <a href="single-post.html">
                    <h3 class="card-title pt-4 pb-3 m-0">Ngôi nhà tuyệt nhất dành cho thú cưng</h3>
                  </a>
                  <div class="card-text">
                    <p class="blog-paragraph fs-6">Là trong lòng của chúng ta.</p>
                    <a href="single-post.html" class="blog-read">Đọc tiếp</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
