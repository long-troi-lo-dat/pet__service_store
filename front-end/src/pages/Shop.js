import React, { useEffect, useState } from "react";
// import "../assets/css/shop.css";
// import "../assets/css/global.css";
import "../assets/css/shop2.css"
// import img1 from "../assets/img_pet/4.jpg";
import axios from "axios";
import Cart from "./cart";
import Navbar from "../components/Navbar";
import { Menu, Pagination, Table } from 'antd';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from "react";
import { GlobalContext } from "../Context";

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

function Shop() {
  const { cart, setCart } = useContext(GlobalContext)
  const [data, setData] = useState([]);
  const [input, setInput] = useState("")
  const [results, setResults] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  const [isShowCart, setShowCart] = useState(false)


  const filterProducts = (value) => {
    const filtered = data.filter((product) => {
      return value && product.ten && product.ten.toLowerCase().includes(value);
    });
    setFilteredProducts(filtered);
  };

  const handleChange = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchInput(value);
    filterProducts(value);
  };

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

  const phanloaidanhmuc = (category, detail, price) => {
    axios.get(`http://localhost:8000/shop/${category}/${detail}/${price}`)
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
      <Navbar setShowCart={setShowCart} />
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
        {!isShowCart &&
          <div className="container-content ml-3 mb-3">
            <div className="flex justify-content-end">
              <label htmlFor="search-form">
                <div class="d-flex form-inputs">
                  {/* <i class="fas fa-search" style={{ lineHeight: "35px", marginRight: "5px" }}></i> */}
                  {/* <input class="form-control" style={{ marginRight: "19.9px", width: "290px" }} type="text" placeholder="Search any product..." value={input} onChange={(e) => handleChange(e.target.value)} /> */}
                  <form class="form-inline">
                    <input class="form-control mr-sm-2"
                      type="search"
                      placeholder="Tìm kiếm sản phẩm"
                      aria-label="Search"
                      value={searchInput}
                      onChange={handleChange}
                      id="searchInput" />
                    {/* <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
                  </form>
                </div>
                {/* {results.length > 0 && <div class="d-flex flex-column bg-light" style={{ marginTop: "10px", position: "absolute", zIndex: "10", width: "310px", maxHeight: "300px", overflowY: "scroll", padding: "8px" }}>
                  {results.map((item, id) => (
                    <div class="d-flex" style={{ marginBottom: "6px", width: "100%" }}>
                      <img src={item.hinhanh} width="100px" height="60px" alt="" />
                      <a href={"/detail/" + item.id_sp} class="btn btn-info" style={{ border: "none", backgroundColor: "white", color: "black", fontSize: "12px", textAlign: "left", fontWeight: "600" }}>{item.ten}</a>
                    </div>
                  ))}
                </div>} */}
              </label>
            </div>
          </div >
        }
        <div class="container-content">
          <div className="row" style={{ justifyContent: "space-around" }}>
            {!isShowCart &&
              (
                <>
                  <div className="product-left">
                    {/* <ul class="list-group mb-3">
                      <li class="list-group-item" style={{ backgroundColor: "#273172", color: "white" }} aria-current="true">Thực phẩm chức năng</li>
                      <li class="list-group-item" onClick={() => phanloai("shop100")}>Dưới 100.000đ</li>
                      <li class="list-group-item" onClick={() => phanloai("shopduoi500")}>Dưới 500.000đ</li>
                      <li class="list-group-item" onClick={() => phanloai("shoptren500")}>Trên 500.000đ</li>
                    </ul> */}
                    <Menu mode="inline" style={{ display: "flex", flexDirection: "column", gap: "15px", fontSize: "1rem", position: "relative", border: "1px solid #e5e7eb", color: "black" }}>
                      <div className="logo" style={{ borderBottom: "1px solid #e5e7eb" }}>
                        <h3 style={{ margin: "0 20px", paddingBottom: "15px" }}>Danh mục</h3>
                      </div>
                      <Menu.SubMenu key="thucung" title="Thú cưng">
                        <Menu.Item key='thucung-0'><button onClick={() => phanloaidanhmuc(1, 0, 0)}>Tất cả giống loài</button></Menu.Item>
                        <Menu.Item key='thucung-1'><button onClick={() => phanloaidanhmuc(1, 1, 0)}>Phốc sóc</button></Menu.Item>
                        <Menu.Item key='thucung-2'><button onClick={() => phanloaidanhmuc(1, 2, 0)}>Corgi chân lùn</button></Menu.Item>
                        <Menu.Item key='thucung-3'><button onClick={() => phanloaidanhmuc(1, 3, 0)}>Alasa</button></Menu.Item>
                        <Menu.Item key='thucung-4'><button onClick={() => phanloaidanhmuc(1, 4, 0)}>Shiba</button></Menu.Item>
                        <Menu.Item key='thucung-5'><button onClick={() => phanloaidanhmuc(1, 5, 0)}>Husky</button></Menu.Item>
                      </Menu.SubMenu>
                      <Menu.SubMenu key="thucan" title="Thức ăn">
                        <Menu.Item key='thucan-0'><button onClick={() => phanloaidanhmuc(2, 0, 0)}>Tất cả thức ăn</button></Menu.Item>
                        <Menu.Item key='thucan-1'><button onClick={() => phanloaidanhmuc(2, 0, 100000)}>Dưới 100.000đ</button></Menu.Item>
                        <Menu.Item key='thucan-2'><button onClick={() => phanloaidanhmuc(2, 0, 200000)}>Dưới 200.000đ</button></Menu.Item>
                        <Menu.Item key='thucan-3'><button onClick={() => phanloaidanhmuc(2, 0, 300000)}>Trên 200.000đ</button></Menu.Item>
                      </Menu.SubMenu>
                      <Menu.SubMenu key="chamsocsuckhoe" title="Chăm sóc sức khỏe">
                        <Menu.Item key='chamsocsuckhoe-1'><button onClick={() => phanloaidanhmuc(3, 0, 0)}>Dinh dưỡng</button></Menu.Item>
                      </Menu.SubMenu>
                      <Menu.SubMenu key="phukien" title="Phụ kiện">
                        <Menu.Item key='phukien-0'><button onClick={() => phanloaidanhmuc(4, 0, 0)}>Tất cả phụ kiện</button></Menu.Item>
                        <Menu.Item key='phukien-1'><button onClick={() => phanloaidanhmuc(4, 0, 0)}>Dưới 100.000đ</button></Menu.Item>
                        <Menu.Item key='phukien-2'><button onClick={() => phanloaidanhmuc(4, 0, 0)}>Dưới 200.000đ</button></Menu.Item>
                      </Menu.SubMenu>
                      <Menu.SubMenu key="dochoi" title="Đồ chơi">
                        <Menu.Item key='dochoi-0'><button onClick={() => phanloaidanhmuc(5, 0, 0)}>Tất cả đồ chơi</button></Menu.Item>
                        <Menu.Item key='dochoi-5'><button onClick={() => phanloaidanhmuc(5, 0, 50000)}>Dưới 50.000đ</button></Menu.Item>
                        <Menu.Item key='dochoi-2'><button onClick={() => phanloaidanhmuc(5, 0, 100000)}>Dưới 100.000đ</button></Menu.Item>
                      </Menu.SubMenu>
                    </Menu>
                  </div>
                  <div className="product-right pr-0">
                    <div className="row">
                      {filteredProducts.length > 0 ? (
                        filteredProducts.map((item, i) => {
                          return (
                            <div key={i} className="col-lg-3 col-md-12 mb-4" >
                              <div className="card" style={{ position: "relative", overflow: "hidden" }}>
                                {item.soluong === 0 ? <div class="sold_out" >Hết hàng</div> : ""}
                                <a href={`/detail/${item.id_sp}`}>
                                  <img
                                    src={`${process.env.REACT_APP_URL_API_LOCAL}/${item.hinhanh}.webp`}
                                    style={{ maxWidth: '80%', maxHeight: '163.512px', minWidth: '163.512px', minHeight: '163.512px', margin: '20px auto' }}
                                    className="card-img-top"
                                    alt="..."
                                  />
                                </a>
                                <div className="card-body" style={{ borderTop: "1px solid #e5e7eb" }}>
                                  <div className="card-title" style={{ minHeight: '96px', fontSize: '16px' }}>
                                    {item.ten}
                                  </div>
                                  <div className="card-title" style={{ fontSize: '16px' }}>
                                    {item.gia.toLocaleString('vi', { style: 'currency', currency: 'VND' })}
                                  </div>
                                  <a href={`/detail/${item.id_sp}`} className="btn btn-info" style={{ minWidth: '164px' }}>
                                    Chi tiết
                                  </a>
                                  <button onClick={() => { onAddToCartHandler(item) }} className="btn btn-success" style={{ minWidth: '164px' }}>
                                    Thêm vào giỏ
                                  </button>
                                  {/* {isSoldOut && <div className="sold-out-label">Sold Out</div>} */}
                                </div>
                              </div>
                            </div>
                          )
                          // }
                        })
                      ) : (
                        data.map((item, i) => {
                          // const isSoldOut = item.soluong === 0;
                          // var soldOut = ""
                          // if (item.soluong === 0) {
                          //   soldOut = '<div class="sold_out" >Hết hàng</div>'
                          // }
                          // if (item.soluong !== 0) {
                          return (
                            item.anhien === 0 ?
                              <div key={i} className={item.soluong === 0 ? 'col-lg-3 col-md-12 mb-4 sold_out_product' : 'col-lg-3 col-md-12 mb-4'}>
                                <div className="card" style={{ position: "relative", overflow: "hidden" }}>
                                  {/* <img src="http://www.savoy-sharm.com/media-room/images/hi-res/king-bed-room-accommodation-savoy-luxury-5-stars-accommodation-sharm-el-sheikh.jpg" alt="" /> */}
                                  {item.soluong === 0 ? <div class="sold_out" >Tạm hết hàng</div> : ""}
                                  <a href={`/detail/${item.id_sp}`}>
                                    <img
                                      src={`${process.env.REACT_APP_URL_API_LOCAL}/${item.hinhanh}.webp`}
                                      style={{ maxWidth: '80%', maxHeight: '163.512px', minWidth: '163.512px', minHeight: '163.512px', margin: '20px auto' }}
                                      className="card-img-top"
                                      alt="..."
                                    />
                                  </a>
                                  <div className="card-body" style={{ borderTop: "1px solid #e5e7eb" }}>
                                    <div className="card-title" style={{ minHeight: '96px', fontSize: '16px' }}>
                                      {item.ten}
                                    </div>
                                    <div className="card-title" style={{ fontSize: '16px' }}>
                                      {item.gia.toLocaleString('vi', { style: 'currency', currency: 'VND' })}
                                    </div>
                                    <a href={`/detail/${item.id_sp}`} className="btn btn-info" style={{ minWidth: '164px' }}>
                                      Chi tiết
                                    </a>
                                    <button onClick={() => { onAddToCartHandler(item) }} className={item.soluong === 0 ? "btn btn-success disabled" : "btn btn-success"} style={{ minWidth: '164px' }}>
                                      Thêm vào giỏ
                                    </button>
                                  </div>
                                </div>
                              </div>
                              :
                              ""
                          )
                          // }
                        })
                      )}
                      {/* <Pagination defaultCurrent={1} total={50} /> */}
                    </div>
                  </div>
                </>
              )
            }
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
          </div>
        </div>
      </div >
    </>
  );
}

export default Shop;
