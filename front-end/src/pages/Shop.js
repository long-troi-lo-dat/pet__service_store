import React, { useEffect, useState } from "react";
// import "../assets/css/shop.css";
// import "../assets/css/global.css";
import "../assets/css/shop2.css"
// import img1 from "../assets/img_pet/4.jpg";
import { getProductList } from "../api/product";

function Shop(props) {
  const [data, setData] = useState([]);
  useEffect(() => {
    // Gọi hàm getProductList từ API để lấy danh sách sản phẩm
    async function fetchData() {
      try {
        const productList = await getProductList();
        setData(productList); // Cập nhật state với danh sách sản phẩm
      } catch (error) {
        console.error("Fail to fetch ", error);
      }
    }

    fetchData(); // Gọi hàm fetchData()
  }, []);

  return (
    <>
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
              <li class="list-group-item" style={{ backgroundColor: "#273172", color: "white" }} aria-current="true">Thú cưng</li>
              <li class="list-group-item">Alaska</li>
              <li class="list-group-item">Bloodhound</li>
              <li class="list-group-item">Golden</li>
              <li class="list-group-item">Border Collies</li>
              <li class="list-group-item">Chó cỏ</li>
            </ul>
            <ul class="list-group mb-3">
              <li class="list-group-item" style={{ backgroundColor: "#273172", color: "white" }} aria-current="true">Thực phẩm chức năng</li>
              <li class="list-group-item">Dưới 100.000đ</li>
              <li class="list-group-item">Dưới 500.000đ</li>
              <li class="list-group-item">Trên 500.000đ</li>
            </ul>
          </div>
          <div className="product-right">
            <div className="row">
              {data.map((item, i) => {
                return (
                  <div className="col-lg-4 col-md-12 mb-4">
                    <div class="card" style={{ width: "18rem" }}>
                      {/* <img src={"../../assets/img-pet/" + item.hinhanh + ".jpg"} class="card-img-top" alt="..." /> */}
                      <img src={item.hinhanh} class="card-img-top" alt="..." />
                      {/* <img src={img1} class="card-img-top" alt="..." /> */}
                      <div class="card-body">
                        <h5 class="card-title">{item.ten}</h5>
                        <p class="card-text mb-3">{item.mota}.</p>
                        <a href="#" class="btn btn-info card-link">Chi tiết</a>
                        <a href="#" class="btn btn-success card-link">Mua ngay</a>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div >
      {/* <div class="body">
          <div class="price">
            <div class="lc-theo-gi">Lọc theo giá</div>
            <div class="price-child"></div>
            <div class="price-item"></div>
            <div class="price-inner"></div>
            <div class="rectangle-div"></div>
            <div class="lc">LỌC</div>
            <div class="gi-0-container">
              <span class="gi">Giá </span>
              <span class="span1">0 đ - 950.000 đ</span>
            </div>
          </div>
          <div class="danhmuc">
            <div class="danh-mc-sn">DANH MỤC SẢN PHẨM</div>
            <div class="danhmuc-child"></div>
            <img class="danhmuc-item" alt="" src="./public/polygon-7.svg" />

            <div class="chn-danh-mc">Chọn danh mục</div>
          </div>
          <div class="sanpham">
            <div class="pate-mo">
              <img
                class="pate-mo-child"
                alt=""
                src="https://petservicehcm.com/wp-content/uploads/2021/04/pet-cover-1440x548.jpeg.webp"
              />

              <div class="sn-phm-tr">SẢN PHẨM TRỊ LIỆU</div>
              <b class="pate-lon-cho">Pate lon cho mèo</b>
              <div class="div">
                150.000
                <span class="span">đ</span>
              </div>
            </div>

            <div class="head-sanpham">
              <div class="hin-th-112">Hiển thị 1–12 của 221 kết quả</div>
              <div class="head-sanpham-child"></div>
              <img
                class="head-sanpham-item"
                alt=""
                src="./public/polygon-7.svg"
              />

              <div class="th-t-mc">Thứ tự mặc định</div>
            </div>

            <div class="chuyentrang">
              <div class="chuyentrang-child"></div>
              <div class="chuyentrang-item"></div>
              <div class="chuyentrang-inner"></div>
              <div class="chuyentrang-child1"></div>
              <div class="chuyentrang-child2"></div>
              <div class="chuyentrang-child3"></div>
              <div class="chuyentrang-child4"></div>
              <div class="chuyentrang-child5"></div>
              <div class="chuyentrang-child6"></div>
              <b class="b">1</b>
              <b class="b1">2</b>
              <b class="b2">3</b>
              <b class="b3">4</b>
              <b class="b4">...</b>
              <b class="b5">17</b>
              <b class="b6">18</b>
              <b class="b7">19</b>
              <b class="b8">-&gt;</b>
            </div>
          </div>
        </div> */}

      {/* <div class="shop-banner">
          <div className="banner-left">
            <h1>DG HOUSE STORE</h1>
            <h3>SẢN PHẨM</h3>
          </div>
          <div className="banner-right">
            <img
              class="image-2-icon"
              alt=""
              src="https://petservicehcm.com/wp-content/uploads/2021/04/pet-cover-1440x548.jpeg.webp"
            />
          </div>
        </div> */}



    </>
  );
}

export default Shop;
