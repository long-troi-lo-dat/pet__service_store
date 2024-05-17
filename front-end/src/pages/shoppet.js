import React, { useEffect, useState } from "react";
import "../assets/css/shop2.css"
import axios from '../axios';
import Navbar from "../components/Navbar";

function ShopPet(props) {
  const [dataPet, setDataPet] = useState([]);
  useEffect(() => {
    axios.get(`/petshop`)
      .then((response) => {
        setDataPet(response.data);
      })
      .catch((error) => {
        console.error('error fetching data :', error);
      });

  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        <div class="container-content shop-banner flex">
          <div className="banner-left">
            <div>
              <h1>DG HOUSE STORE</h1>
              <h3>SẢN PHẨM</h3>
            </div>
          </div>
          <div className="banner-right">
            <img
              class=""
              alt=""
              src="https://petservicehcm.com/wp-content/uploads/2021/04/pet-cover-1440x548.jpeg.webp"
            />
          </div>
        </div>
        <div class="container-content flex">
          <div className="product-left mx-3">
            <ul class="list-group mb-3">
              <li class="list-group-item" style={{ backgroundColor: "#273172", color: "white" }} aria-current="true">Thực phẩm chức năng</li>
              <li class="list-group-item">Dưới 100.000đ</li>
              <li class="list-group-item">Dưới 500.000đ</li>
              <li class="list-group-item">Trên 500.000đ</li>
            </ul>
          </div>
          <div className="product-right">
            <div className="row">
              <div className="search-wrapper">
                <label htmlFor="search-form">
                  <input
                    type="search"
                    name="search-form"
                    id="search-form"
                    className="search-input"
                    placeholder="Search for..."
                  />
                  <span className="sr-only">Search countries here</span>
                </label>
              </div>
              {dataPet.map((item, i) => {
                return (
                  <div key={i} className="col-lg-4 col-md-12 mb-4">
                    <div class="card" style={{ width: "18rem" }}>
                      <a href={"/detailpet/" + item.id}><img src={item.hinhanh} class="card-img-top" style={{ height: "300px" }} alt="..." /></a>
                      <div class="card-body">
                        <h5 class="card-title">{item.ten}</h5>
                        <h5 class="card-title">{item.gia.toLocaleString('vi', { style: 'currency', currency: 'VND' })}</h5>
                        <a href={"/detailpet/" + item.id} class="btn btn-info card-link">Chi tiết</a>
                        <a href="/" class="btn btn-success card-link">Thêm vào giỏ</a>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div >
    </>
  );
}

export default ShopPet;
