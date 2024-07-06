import React, { useEffect, useState } from "react";
import axios from '../axios';

import FastRegister from "../components/FastRegister"
import Services from "../components/Services"

import 'react-toastify/dist/ReactToastify.css';

import { Icon } from '@iconify/react';

function Shop() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`/api/product`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('error fetching data :', error);
      });
  }, []);

  return (
    <>
      <section id="banner" class="py-3 mb-5" style={{ background: "#F9F3EC" }}>
        <div class="container">
          <div class="hero-content py-5 my-3">
            <h2 class="display-1 mt-3 mb-0">Cửa hàng</h2>
            <nav class="breadcrumb">
              <div class="breadcrumb-item">Trang chủ</div>
              <span class="breadcrumb-item active">Cửa hàng</span>
            </nav>
          </div>
        </div>
      </section>
      <div class="shopify-grid">
        <div class="container mb-5">
          <div class="row flex-md-row-reverse g-md-5 mb-5">

            <main class="col-md-9">
              <div class="filter-shop d-md-flex justify-content-between align-items-center">
                <div class="showing-product">
                  <p class="m-0">Đang hiện 1–9 trong 55 kết quả</p>
                </div>
                <div class="sort-by">
                  <select class="filter-categories border-0 m-0">
                    <option value="">Mặc định</option>
                    <option value="">Tên (A - Z)</option>
                    <option value="">Tên (Z - A)</option>
                    <option value="">Giá (Low-High)</option>
                    <option value="">Giá (High-Low)</option>
                  </select>
                </div>
              </div>

              <div class="product-grid row ">
                {data.map((item, i) => {
                  return (
                    <div class="col-md-4 my-4" key={i}>
                      <div class="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle">
                        New
                      </div>
                      <div class="card position-relative">
                        <a href="single-product.html"><img src={`${process.env.REACT_APP_URL_API}/products/${item.hinh}`} class="img-product rounded-4" alt="dghouse-product" /></a>
                        <div class="card-body p-0">
                          <a href="single-product.html">
                            <h3 class="card-title pt-4 m-0">{item.ten}</h3>
                          </a>

                          <div class="card-text">
                            <span class="rating secondary-font">
                              <Icon icon="clarity:star-solid" className="text-primary" />
                              <Icon icon="clarity:star-solid" className="text-primary" />
                              <Icon icon="clarity:star-solid" className="text-primary" />
                              <Icon icon="clarity:star-solid" className="text-primary" />
                              <Icon icon="clarity:star-solid" className="text-primary" />
                              5.0</span>

                            <h3 class="secondary-font text-primary">{item.gia}</h3>

                            <div class="d-flex flex-wrap mt-3">
                              <a href="/#" class="btn-cart me-3 px-4 pt-3 pb-3">
                                <h5 class="text-uppercase m-0">Add to Cart</h5>
                              </a>
                              <a href="/#" class="btn-wishlist px-4 pt-3 ">
                                <iconify-icon icon="fluent:heart-28-filled" class="fs-5"></iconify-icon>
                              </a>
                            </div>


                          </div>

                        </div>
                      </div>
                    </div>
                  )
                })}

                {/* <div class="col-md-4 my-4">
                  <div class="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle">
                    New
                  </div>
                  <div class="card position-relative">
                    <a href="single-product.html"><img src={`${process.env.REACT_APP_URL_API}/products/1-lak-1616-1247x1496.webp`} class="img-fluid rounded-4" alt="dghouse-product" /></a>
                    <div class="card-body p-0">
                      <a href="single-product.html">
                        <h3 class="card-title pt-4 m-0">Grey hoodie</h3>
                      </a>

                      <div class="card-text">
                        <span class="rating secondary-font">
                          <Icon icon="clarity:star-solid" className="text-primary" />
                          <Icon icon="clarity:star-solid" className="text-primary" />
                          <Icon icon="clarity:star-solid" className="text-primary" />
                          <Icon icon="clarity:star-solid" className="text-primary" />
                          <Icon icon="clarity:star-solid" className="text-primary" />
                          5.0</span>

                        <h3 class="secondary-font text-primary">$18.00</h3>

                        <div class="d-flex flex-wrap mt-3">
                          <a href="/#" class="btn-cart me-3 px-4 pt-3 pb-3">
                            <h5 class="text-uppercase m-0">Add to Cart</h5>
                          </a>
                          <a href="/#" class="btn-wishlist px-4 pt-3 ">
                            <iconify-icon icon="fluent:heart-28-filled" class="fs-5"></iconify-icon>
                          </a>
                        </div>


                      </div>

                    </div>
                  </div>
                </div>

                <div class="col-md-4 my-4">
                  <div class="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle">
                    New
                  </div>
                  <div class="card position-relative">
                    <a href="single-product.html"><img src={`${process.env.REACT_APP_URL_API}/products/1-lak-1616-1247x1496.webp`} class="img-fluid rounded-4" alt="dghouse-product" /></a>
                    <div class="card-body p-0">
                      <a href="single-product.html">
                        <h3 class="card-title pt-4 m-0">Grey hoodie</h3>
                      </a>

                      <div class="card-text">
                        <span class="rating secondary-font">
                          <Icon icon="clarity:star-solid" className="text-primary" />
                          <Icon icon="clarity:star-solid" className="text-primary" />
                          <Icon icon="clarity:star-solid" className="text-primary" />
                          <Icon icon="clarity:star-solid" className="text-primary" />
                          <Icon icon="clarity:star-solid" className="text-primary" />
                          5.0</span>

                        <h3 class="secondary-font text-primary">$18.00</h3>

                        <div class="d-flex flex-wrap mt-3">
                          <a href="/#" class="btn-cart me-3 px-4 pt-3 pb-3">
                            <h5 class="text-uppercase m-0">Add to Cart</h5>
                          </a>
                          <a href="/#" class="btn-wishlist px-4 pt-3 ">
                            <iconify-icon icon="fluent:heart-28-filled" class="fs-5"></iconify-icon>
                          </a>
                        </div>


                      </div>

                    </div>
                  </div>
                </div>

                <div class="col-md-4 my-4">
                  <div class="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle">
                    Sold
                  </div>
                  <div class="card position-relative">
                    <a href="single-product.html"><img src={`${process.env.REACT_APP_URL_API}/products/1-lak-1616-1247x1496.webp`} class="img-fluid rounded-4" alt="dghouse-product" /></a>
                    <div class="card-body p-0">
                      <a href="single-product.html">
                        <h3 class="card-title pt-4 m-0">Grey hoodie</h3>
                      </a>

                      <div class="card-text">
                        <span class="rating secondary-font">
                          <Icon icon="clarity:star-solid" className="text-primary" />
                          <Icon icon="clarity:star-solid" className="text-primary" />
                          <Icon icon="clarity:star-solid" className="text-primary" />
                          <Icon icon="clarity:star-solid" className="text-primary" />
                          <Icon icon="clarity:star-solid" className="text-primary" />
                          5.0</span>

                        <h3 class="secondary-font text-primary">$18.00</h3>

                        <div class="d-flex flex-wrap mt-3">
                          <a href="/#" class="btn-cart me-3 px-4 pt-3 pb-3">
                            <h5 class="text-uppercase m-0">Add to Cart</h5>
                          </a>
                          <a href="/#" class="btn-wishlist px-4 pt-3 ">
                            <iconify-icon icon="fluent:heart-28-filled" class="fs-5"></iconify-icon>
                          </a>
                        </div>


                      </div>

                    </div>
                  </div>
                </div>

                <div class="col-md-4 my-4">
                  <div class="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle">
                    New
                  </div>
                  <div class="card position-relative">
                    <a href="single-product.html"><img src={`${process.env.REACT_APP_URL_API}/products/1-lak-1616-1247x1496.webp`} class="img-fluid rounded-4" alt="dghouse-product" /></a>
                    <div class="card-body p-0">
                      <a href="single-product.html">
                        <h3 class="card-title pt-4 m-0">Grey hoodie</h3>
                      </a>

                      <div class="card-text">
                        <span class="rating secondary-font">
                          <Icon icon="clarity:star-solid" className="text-primary" />
                          <Icon icon="clarity:star-solid" className="text-primary" />
                          <Icon icon="clarity:star-solid" className="text-primary" />
                          <Icon icon="clarity:star-solid" className="text-primary" />
                          <Icon icon="clarity:star-solid" className="text-primary" />
                          5.0</span>

                        <h3 class="secondary-font text-primary">$18.00</h3>

                        <div class="d-flex flex-wrap mt-3">
                          <a href="/#" class="btn-cart me-3 px-4 pt-3 pb-3">
                            <h5 class="text-uppercase m-0">Add to Cart</h5>
                          </a>
                          <a href="/#" class="btn-wishlist px-4 pt-3 ">
                            <iconify-icon icon="fluent:heart-28-filled" class="fs-5"></iconify-icon>
                          </a>
                        </div>


                      </div>

                    </div>
                  </div>
                </div>

                <div class="col-md-4 my-4">
                  <div class="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle">
                    New
                  </div>
                  <div class="card position-relative">
                    <a href="single-product.html"><img src={`${process.env.REACT_APP_URL_API}/products/1-lak-1616-1247x1496.webp`} class="img-fluid rounded-4" alt="dghouse-product" /></a>
                    <div class="card-body p-0">
                      <a href="single-product.html">
                        <h3 class="card-title pt-4 m-0">Grey hoodie</h3>
                      </a>

                      <div class="card-text">
                        <span class="rating secondary-font">
                          <Icon icon="clarity:star-solid" className="text-primary" />
                          <Icon icon="clarity:star-solid" className="text-primary" />
                          <Icon icon="clarity:star-solid" className="text-primary" />
                          <Icon icon="clarity:star-solid" className="text-primary" />
                          <Icon icon="clarity:star-solid" className="text-primary" />
                          5.0</span>

                        <h3 class="secondary-font text-primary">$18.00</h3>

                        <div class="d-flex flex-wrap mt-3">
                          <a href="/#" class="btn-cart me-3 px-4 pt-3 pb-3">
                            <h5 class="text-uppercase m-0">Add to Cart</h5>
                          </a>
                          <a href="/#" class="btn-wishlist px-4 pt-3 ">
                            <iconify-icon icon="fluent:heart-28-filled" class="fs-5"></iconify-icon>
                          </a>
                        </div>


                      </div>

                    </div>
                  </div>
                </div>

                <div class="col-md-4 my-4">
                  <div class="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle">
                    Sale
                  </div>
                  <div class="card position-relative">
                    <a href="single-product.html"><img src={`${process.env.REACT_APP_URL_API}/products/1-lak-1616-1247x1496.webp`} class="img-fluid rounded-4" alt="dghouse-product" /></a>
                    <div class="card-body p-0">
                      <a href="single-product.html">
                        <h3 class="card-title pt-4 m-0">Grey hoodie</h3>
                      </a>

                      <div class="card-text">
                        <span class="rating secondary-font">
                          <Icon icon="clarity:star-solid" className="text-primary" />
                          <Icon icon="clarity:star-solid" className="text-primary" />
                          <Icon icon="clarity:star-solid" className="text-primary" />
                          <Icon icon="clarity:star-solid" className="text-primary" />
                          <Icon icon="clarity:star-solid" className="text-primary" />
                          5.0</span>

                        <h3 class="secondary-font text-primary">$18.00</h3>

                        <div class="d-flex flex-wrap mt-3">
                          <a href="/#" class="btn-cart me-3 px-4 pt-3 pb-3">
                            <h5 class="text-uppercase m-0">Add to Cart</h5>
                          </a>
                          <a href="/#" class="btn-wishlist px-4 pt-3 ">
                            <iconify-icon icon="fluent:heart-28-filled" class="fs-5"></iconify-icon>
                          </a>
                        </div>


                      </div>

                    </div>
                  </div>
                </div>

                <div class="col-md-4 my-4">
                  <div class="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle">
                    New
                  </div>
                  <div class="card position-relative">
                    <a href="single-product.html"><img src={`${process.env.REACT_APP_URL_API}/products/1-lak-1616-1247x1496.webp`} class="img-fluid rounded-4" alt="dghouse-product" /></a>
                    <div class="card-body p-0">
                      <a href="single-product.html">
                        <h3 class="card-title pt-4 m-0">Grey hoodie</h3>
                      </a>

                      <div class="card-text">
                        <span class="rating secondary-font">
                          <Icon icon="clarity:star-solid" className="text-primary" />
                          <Icon icon="clarity:star-solid" className="text-primary" />
                          <Icon icon="clarity:star-solid" className="text-primary" />
                          <Icon icon="clarity:star-solid" className="text-primary" />
                          <Icon icon="clarity:star-solid" className="text-primary" />
                          5.0</span>

                        <h3 class="secondary-font text-primary">$18.00</h3>

                        <div class="d-flex flex-wrap mt-3">
                          <a href="/#" class="btn-cart me-3 px-4 pt-3 pb-3">
                            <h5 class="text-uppercase m-0">Add to Cart</h5>
                          </a>
                          <a href="/#" class="btn-wishlist px-4 pt-3 ">
                            <iconify-icon icon="fluent:heart-28-filled" class="fs-5"></iconify-icon>
                          </a>
                        </div>


                      </div>

                    </div>
                  </div>
                </div>

                <div class="col-md-4 my-4">
                  <div class="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle">
                    New
                  </div>
                  <div class="card position-relative">
                    <a href="single-product.html"><img src={`${process.env.REACT_APP_URL_API}/products/thuoc-bo-sung-canxi-cho-vegebrand-goat-milk-calcium-tablet-400x400.webp`} class="img-fluid rounded-4" alt="dghouse-product" /></a>
                    <div class="card-body p-0">
                      <a href="single-product.html">
                        <h3 class="card-title pt-4 m-0">Grey hoodie</h3>
                      </a>

                      <div class="card-text">
                        <span class="rating secondary-font">
                          <Icon icon="clarity:star-solid" className="text-primary" />
                          <Icon icon="clarity:star-solid" className="text-primary" />
                          <Icon icon="clarity:star-solid" className="text-primary" />
                          <Icon icon="clarity:star-solid" className="text-primary" />
                          <Icon icon="clarity:star-solid" className="text-primary" />
                          5.0</span>

                        <h3 class="secondary-font text-primary">$18.00</h3>

                        <div class="d-flex flex-wrap mt-3">
                          <a href="/#" class="btn-cart me-3 px-4 pt-3 pb-3">
                            <h5 class="text-uppercase m-0">Add to Cart</h5>
                          </a>
                          <a href="/#" class="btn-wishlist px-4 pt-3 ">
                            <iconify-icon icon="fluent:heart-28-filled" class="fs-5"></iconify-icon>
                          </a>
                        </div>


                      </div>

                    </div>
                  </div>
                </div> */}

              </div>

              <nav class="navigation paging-navigation text-center mt-5" role="navigation">
                <div class="pagination loop-pagination d-flex justify-content-center align-items-center">
                  <a href="/#" class="pagination-arrow d-flex align-items-center mx-3">
                    <iconify-icon icon="ic:baseline-keyboard-arrow-left" class="pagination-arrow fs-1"></iconify-icon>
                  </a>
                  <span aria-current="page" class="page-numbers mt-2 fs-3 mx-3 current">1</span>
                  <a class="page-numbers mt-2 fs-3 mx-3" href="/#">2</a>
                  <a class="page-numbers mt-2 fs-3 mx-3" href="/#">3</a>
                  <a href="/#" class="pagination-arrow d-flex align-items-center mx-3">
                    <iconify-icon icon="ic:baseline-keyboard-arrow-right" class="pagination-arrow fs-1"></iconify-icon>
                  </a>
                </div>
              </nav>

            </main>
            <aside class="col-md-3 mt-5">
              <div class="sidebar">
                <div class="widget-menu">
                  <div class="widget-search-bar">
                    <div class="search-bar border rounded-2 border-dark-subtle pe-3">
                      <form id="search-form" class="text-center d-flex align-items-center" action="" method="">
                        <input type="text" class="form-control border-0 bg-transparent" placeholder="Search for products" />
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                          <path fill="currentColor" d="M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.39ZM11 18a7 7 0 1 1 7-7a7 7 0 0 1-7 7Z"></path>
                        </svg>
                      </form>
                    </div>
                  </div>
                </div>
                <div class="widget-product-categories pt-5">
                  <h4 class="widget-title">Danh mục</h4>
                  <ul class="product-categories sidebar-list list-unstyled">
                    <li class="cat-item">
                      <button className="btn nav-item" >Tất cả</button>
                    </li>
                    <li class="cat-item">
                      <button className="btn nav-item">Chó</button>
                    </li>
                    <li class="cat-item">
                      <button className="btn nav-item">Thức ăn</button>
                    </li>
                    <li class="cat-item">
                      <button className="btn nav-item">Dinh dưỡng</button>
                    </li>
                    <li class="cat-item">
                      <button className="btn nav-item">Phụ kiện</button>
                    </li>
                    <li class="cat-item">
                      <button className="btn nav-item">Đồ chơi</button>
                    </li>
                  </ul>
                </div>
                <div class="widget-price-filter pt-3">
                  <h4 class="widget-titlewidget-title">Sắp xếp theo giá</h4>
                  <ul class="product-tags sidebar-list list-unstyled">
                    <li class="tags-item">
                      <button className="btn nav-item">Thấp hơn 100 ngàn</button>
                    </li>
                    <li class="tags-item">
                      <button className="btn nav-item">100 ngàn - 200 ngàn</button>
                    </li>
                    <li class="tags-item">
                      <button className="btn nav-item">200 ngàn - 300 ngàn</button>
                    </li>
                    <li class="tags-item">
                      <button className="btn nav-item">300 ngàn - 400 ngàn</button>
                    </li>
                    <li class="tags-item">
                      <button className="btn nav-item">400 ngàn - 500 ngàn</button>
                    </li>
                  </ul>
                </div>
              </div>
            </aside>
            <FastRegister />
            <Services />
          </div>
        </div>
      </div>
    </>
  );
}

export default Shop;
