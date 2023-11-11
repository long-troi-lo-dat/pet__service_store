import React, { useEffect, useState } from "react";
// import "../assets/css/shop.css";
// import "../assets/css/global.css";
import "../assets/css/shop2.css"
// import img1 from "../assets/img_pet/4.jpg";
import axios from "axios";
import CartButton from "./CartButton"
import Cart from "./cart";

function Shop() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("")
  const [results, setResults] = useState([])
  const [cart, setCart] = useState([])

  const [isShowCart, setShowCart] = useState(false)

  const onAddToCartHandler = (item) => {
    if (cart.indexOf(item) !== -1) return null;
    const arr = [...cart];
    item.amount = 1;
    arr.push(item);
    setCart([...arr]);
  }

  const fetchData = (value) => {
    fetch("http://localhost:8000/shop")
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((sp) => {
          return value && sp && sp.ten && sp.ten.toLowerCase().includes(value)
        })
        setResults(results)
      })
  }
  const handleChange = (value) => {
    setInput(value)
    fetchData(value)
  }

  const phanloai = (event) => {
    axios.get(`http://localhost:8000/${event}`)
      .then((response) => {
        setData(response.data)
      })
      .catch((error) => {
        console.error('error fetching data :', error);
      });
  }
  useEffect(() => {
    console.log(cart);

    axios.get(`http://localhost:8000/shop`)
      .then((response) => {
        setData(response.data);
        // console.log(dataUser, "data user")
      })
      .catch((error) => {
        console.error('error fetching data :', error);
      });
  }, [cart]);

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
        {/* <div className="container-content ml-3 mb-3">
          <div className="flex justify-content-end">
            <label htmlFor="search-form">
              <input
                type="search"
                name="search-form"
                id="search-form"
                className="search-input p-3"
                placeholder="Tìm kiếm sản phẩm . . . "
              />
            </label>
          </div>
        </div> */}
        {isShowCart &&
          <div className="container-content ml-3 mb-3">
            <div className="flex justify-content-end">
              <label htmlFor="search-form">
                <div class="d-flex form-inputs">
                  <i class="fas fa-search" style={{ lineHeight: "35px", marginRight: "5px" }}></i>
                  <input class="form-control" style={{ marginRight: "19.9px", width: "290px" }} type="text" placeholder="Search any product..." value={input} onChange={(e) => handleChange(e.target.value)} />
                </div>
                <div class="d-flex flex-column bg-light" style={{ marginTop: "10px", marginLeft: "21px", position: "absolute", zIndex: "10", width: "290px", maxHeight: "300px", overflowY: "scroll", border: "1px solid #333" }}>
                  {results.map((item, id) => (
                    <div class="d-flex" style={{ marginBottom: "6px" }}>
                      <img src={item.hinhanh} width="100px" height="60px" alt="" />
                      <a href={"/detail/" + item.id_sp} class="btn btn-info" style={{ border: "none", backgroundColor: "white", color: "black", fontSize: "12px", textAlign: "left", fontWeight: "600" }}>{item.ten}</a>
                    </div>
                  ))}
                </div>
              </label>
            </div>
          </div >
        }
        <div class="container-content">
          <div className="row g-2">
            {!isShowCart &&
              (
                <>
                  <div className="product-left">
                    {/* <ul class="list-group mb-3">
              <li class="list-group-item" style={{ backgroundColor: "#273172", color: "white" }} aria-current="true">Thú cưng</li>
              <li class="list-group-item">Alaska</li>
              <li class="list-group-item">Bloodhound</li>
              <li class="list-group-item">Golden</li>
              <li class="list-group-item">Border Collies</li>
              <li class="list-group-item">Chó cỏ</li>
            </ul> */}
                    <ul class="list-group mb-3">
                      <li class="list-group-item" style={{ backgroundColor: "#273172", color: "white" }} aria-current="true">Thực phẩm chức năng</li>
                      <li class="list-group-item" onClick={() => phanloai("shop100")}>Dưới 100.000đ</li>
                      <li class="list-group-item" onClick={() => phanloai("shopduoi500")}>Dưới 500.000đ</li>
                      <li class="list-group-item" onClick={() => phanloai("shoptren500")}>Trên 500.000đ</li>
                    </ul>
                    {/* <ul class="list-group mb-3">
              <li class="list-group-item" style={{ backgroundColor: "#273172", color: "white" }} aria-current="true">Dịch vụ</li>
              <li class="list-group-item">Dịch vụ tắm cho thú cưng</li>
              <li class="list-group-item">Dịch vụ khám chữa bệnh</li>
              <li class="list-group-item">Dịch vụ hotel thú cưng</li>
            </ul> */}
                  </div>
                  <div className="product-right pr-0">
                    <div className="row">
                      {data.map((item, i) => {
                        return (
                          <div key={i} className="col-lg-4 col-md-12 mb-4">
                            <div class="card" style={{ width: "18rem" }}>
                              {/* <img src={img1} class="card-img-top" alt="..." /> */}
                              <a href={"/detail/" + item.id_sp}><img src={item.hinhanh} class="card-img-top" alt="..." /></a>
                              {/* <img src={img1} class="card-img-top" alt="..." /> */}
                              <div class="card-body">
                                <h5 class="card-title">{item.ten}</h5>
                                <h5 class="card-title">{item.gia.toLocaleString('vi', { style: 'currency', currency: 'VND' })}</h5>
                                <button href={"/detail/" + item.id_sp} class="btn btn-info card-link">Chi tiết</button>
                                <button onClick={() => onAddToCartHandler(item)} class="btn btn-success card-link" >Thêm vào giỏ</button>
                              </div>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </>
              )
            }
            {isShowCart &&
              <Cart setShowCart={setShowCart} cart={cart} setCart={setCart} />
            }
          </div>
        </div>
      </div >
      <CartButton setShowCart={setShowCart} />
    </>
  );
}

export default Shop;
