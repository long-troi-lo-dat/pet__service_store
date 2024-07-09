import React, { useEffect, useState } from "react";
import axios from '../axios';

import FastRegister from "../components/FastRegister"
import Services from "../components/Services"
import Item from "../components/Item"
import LoadingScreen from "../components/Loadingscreen"


import 'react-toastify/dist/ReactToastify.css';

function Shop() {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`/api/product`)
      .then((response) => {
        setData(response.data);
        setLoading(false)
      })
      .catch((error) => {
        setLoading(false)
        console.error('error fetching data :', error);
      });
  }, []);

  if (loading) {
    return <LoadingScreen />
  }
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
                  <p class="m-0">Đang hiện 1–9 trong {data.length} kết quả</p>
                </div>
                <div class="sort-by">
                  <select class="filter-categories border-0 m-0">
                    <option value="" key={1}>Mặc định</option>
                    <option value="" key={1}>Tên (A - Z)</option>
                    <option value="" key={1}>Tên (Z - A)</option>
                    <option value="" key={1}>Giá (Low-High)</option>
                    <option value="" key={1}>Giá (High-Low)</option>
                  </select>
                </div>
              </div>

              <div class="product-grid row ">
                {data.map((item, i) => {
                  return (
                    <div class="col-md-4 my-4">
                      <Item key={item.id_sp} id_sp={item.id_sp} ten={item.ten} gia={item.gia} ngaythem={item.ngaythem} soluong={item.soluong} id_gl={item.id_gl} dob={item.dob} mota={item.mota} anhien={item.anhien} id_dm={item.id_dm} hinh={item.hinh} />
                    </div>
                  )
                })}
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
