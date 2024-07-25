import React, { useEffect, useState } from "react";
import axios from '../axios';
import {
  FiChevronLeft,
  FiChevronRight
} from "react-icons/fi";
import FastRegister from "../components/FastRegister"
import Services from "../components/Services"
import Item from "../components/Item"
import LoadingScreen from "../components/Loadingscreen"

import 'react-toastify/dist/ReactToastify.css';

function Shop() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get(`/api/product`)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.error('error fetching data :', error);
      });
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  if (loading) {
    return <LoadingScreen />
  }

  return (
    <>
      <section id="banner" className="py-3 mb-5" style={{ background: "#F9F3EC" }}>
        <div className="container">
          <div className="hero-content py-5 my-3">
            <h2 className="display-1 mt-3 mb-0">Cửa hàng</h2>
            <nav className="breadcrumb">
              <div className="breadcrumb-item">Trang chủ</div>
              <span className="breadcrumb-item active">Cửa hàng</span>
            </nav>
          </div>
        </div>
      </section>
      <div className="shopify-grid">
        <div className="container mb-5">
          <div className="row flex-md-row-reverse g-md-5 mb-5">

            <main className="col-md-9">
              <div className="filter-shop d-md-flex justify-content-between align-items-center">
                <div className="showing-product">
                  <p className="m-0">Đang hiện {indexOfFirstItem + 1}–{Math.min(indexOfLastItem, data.length)} trong {data.length} kết quả</p>
                </div>
                <div className="sort-by">
                  <select className="filter-categories border-0 m-0">
                    <option value="" key={1}>Mặc định</option>
                    <option value="" key={2}>Tên (A - Z)</option>
                    <option value="" key={3}>Tên (Z - A)</option>
                    <option value="" key={4}>Giá (Thấp - Cao)</option>
                    <option value="" key={5}>Giá (Cao - Thấp)</option>
                  </select>
                </div>
              </div>

              <div className="product-grid row ">
                {currentItems.map((item, i) => (
                  <div className="col-md-4 my-4" key={item.id_sp}>
                    <Item id_sp={item.id_sp} ten={item.ten} gia={item.gia} ngaythem={item.ngaythem} soluong={item.soluong} id_gl={item.id_gl} dob={item.dob} mota={item.mota} anhien={item.anhien} id_dm={item.id_dm} hinh={item.hinh} />
                  </div>
                ))}
              </div>

              <nav className="navigation paging-navigation text-center mt-5" role="navigation">
                <div className="pagination loop-pagination d-flex justify-content-center align-items-center">
                  <button onClick={() => paginate(currentPage - 1)} className={`pagination-arrow d-flex align-items-center mx-3 btn ${currentPage === 1 ? 'disabled' : ''}`}>
                    <FiChevronLeft className="pagination-arrow" fontSize={30} />
                  </button>
                  {Array.from({ length: Math.ceil(data.length / itemsPerPage) }, (_, i) => (
                    <button key={i} onClick={() => paginate(i + 1)} className={`page-numbers fs-3 mx-3 btn ${currentPage === i + 1 ? 'current' : ''}`}>
                      {i + 1}
                    </button>
                  ))}
                  <button onClick={() => paginate(currentPage + 1)} className={`pagination-arrow d-flex align-items-center mx-3 btn ${currentPage === Math.ceil(data.length / itemsPerPage) ? 'disabled' : ''}`}>
                    <FiChevronRight className="pagination-arrow" fontSize={30} />
                  </button>
                </div>
              </nav>
            </main>

            <aside className="col-md-3 mt-5">
              <div className="sidebar">
                <div className="widget-menu">
                  <div className="widget-search-bar">
                    <div className="search-bar border rounded-2 border-dark-subtle pe-3">
                      <form id="search-form" className="text-center d-flex align-items-center" action="" method="">
                        <input type="text" className="form-control border-0 bg-transparent" placeholder="Search for products" />
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                          <path fill="currentColor" d="M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.39ZM11 18a7 7 0 1 1 7-7a7 7 0 0 1-7 7Z"></path>
                        </svg>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="widget-product-categories pt-5">
                  <h4 className="widget-title">Danh mục</h4>
                  <ul className="product-categories sidebar-list list-unstyled">
                    <li className="cat-item">
                      <button className="btn nav-item" onClick={fetchData}>Tất cả</button>
                    </li>
                    <li className="cat-item">
                      <button className="btn nav-item">Chó</button>
                    </li>
                    <li className="cat-item">
                      <button className="btn nav-item">Thức ăn</button>
                    </li>
                    <li className="cat-item">
                      <button className="btn nav-item">Dinh dưỡng</button>
                    </li>
                    <li className="cat-item">
                      <button className="btn nav-item">Phụ kiện</button>
                    </li>
                    <li className="cat-item">
                      <button className="btn nav-item">Đồ chơi</button>
                    </li>
                  </ul>
                </div>
                <div className="widget-price-filter pt-3">
                  <h4 className="widget-titlewidget-title">Sắp xếp theo giá</h4>
                  <ul className="product-tags sidebar-list list-unstyled">
                    <li className="tags-item">
                      <button className="btn nav-item">Thấp hơn 100 ngàn</button>
                    </li>
                    <li className="tags-item">
                      <button className="btn nav-item">100 ngàn - 200 ngàn</button>
                    </li>
                    <li className="tags-item">
                      <button className="btn nav-item">200 ngàn - 300 ngàn</button>
                    </li>
                    <li className="tags-item">
                      <button className="btn nav-item">300 ngàn - 400 ngàn</button>
                    </li>
                    <li className="tags-item">
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
