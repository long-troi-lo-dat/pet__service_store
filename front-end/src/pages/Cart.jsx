import axios from "../axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { GlobalContext } from "../Context";
import { FiTrash } from "react-icons/fi";


const quantityNotify = () =>
  toast.error("Số lượng còn lại của sản phẩm không đủ", {
    position: "bottom-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

function Cart() {
  const { cart, setCart } = useContext(GlobalContext);

  const [tongtien, setTongTien] = useState(0);
  const [formData, setFormData] = useState({
    hoten: "",
    sodienthoai: "",
    diachi: "",
    ghichu: "",
    id_user: localStorage.getItem("id_user"),
    cart: cart,
  });

  const navigate = useNavigate();

  const tinhtongtien = () => {
    const tt = cart.reduce((total, item) => total + item.gia * item.amount, 0);
    setTongTien(tt);
  };

  useEffect(() => {
    tinhtongtien();
  });

  const thaydoisoluong = (sanpham, sl) => {
    const idx = cart.indexOf(sanpham);
    const arr = [...cart];

    if (sanpham.soluong > 0) {
      const updatedAmount = arr[idx].amount + sl;

      if (updatedAmount < 1) {
        arr[idx].amount = 1;
      } else if (updatedAmount <= sanpham.soluong) {
        arr[idx].amount = updatedAmount;
      } else {
        console.error("Số lượng vượt quá giới hạn");
        quantityNotify();
        return;
      }
    } else {
      console.error("Sản phẩm đã hết hàng");
      quantityNotify();
      return;
    }

    setCart([...arr]);
  };
  const removeProduct = (sanpham) => {
    const arr = cart.filter((sp) => sp.id_sp !== sanpham.id_sp);
    setCart([...arr]);
  };

  const handleChangeInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (event) => {
    axios
      .post("/dathang", formData)
      .then((res) => {
        console.log(res.data);
        setTimeout(() => {
          setCart([]);
          navigate("/success");
        }, 400);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <section id="banner" class="py-3 mb-5" style={{ background: "#F9F3EC" }}>
        <div class="container">
          <div class="hero-content py-5 my-3">
            <h2 class="display-1 mt-3 mb-0">Đặt hàng và thanh toán</h2>
            <nav class="breadcrumb">
              <div class="breadcrumb-item">Trang chủ</div>
              <span class="breadcrumb-item active">Đặt hàng và thanh toán</span>
            </nav>
          </div>
        </div>
      </section>
      <section id="cart">
        <div className="container mb-5">
          <div className="row">
            <div className="col-xl-7 col-lg-7">
              <div class="card shadow mb-4">
                <div class="card-header py-3">
                  <h6 class="m-0 font-weight-bold text-primary">
                    Danh sách sản phẩm trong giỏ hàng
                  </h6>
                </div>
                {cart.length > 0 ? (
                  <div class="card-body">
                    <table
                      class="table"
                    >
                      <thead>
                        <tr>
                          <th scope="col" className="card-title text-uppercase">Sản phẩm</th>
                          <th scope="col" className="card-title text-uppercase">Giá</th>
                          <th scope="col" className="card-title text-uppercase">SL</th>
                          <th scope="col" className="card-title text-uppercase"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          cart.map((item, i) => (
                            <tr key={i}>
                              <td className="py-4">
                                <div className="cart-info d-flex flex-wrap align-items-center ">
                                  <div className="col-lg-3">
                                    <div className="card-image">
                                      <img src={`${process.env.REACT_APP_URL_API}/products/${item.hinh}`} alt="cloth" className="img-fluid" />
                                    </div>
                                  </div>
                                  <div className="col-lg-9">
                                    <div className="card-detail ps-3">
                                      <h6 className="card-title">
                                        <Link to={`/detailproduct/${item.id_sp}`} className="text-decoration-none text-primary">{item.ten}</Link>
                                      </h6>
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="py-4 align-middle">
                                <div className="total-price">
                                  <span className="secondary-font fw-medium">{item.gia}</span>
                                </div>
                              </td>
                              <td className="py-4 align-middle">
                                <div className="total-price">
                                  <span className="secondary-font fw-medium">{item.soluong}</span>
                                </div>
                              </td>
                              <td className="py-4 align-middle">
                                <div className="d-flex align-items-center">
                                  <div className="me-4"><button className="btn btn-dark p-3 text-uppercase fs-6 btn-rounded-none w-100">Add to cart</button></div>
                                  <div className="cart-remove">
                                    <button className="">
                                      <FiTrash fontSize={20} />
                                    </button>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          ))
                        }
                      </tbody>
                    </table>
                    <div>
                      Tổng số tiền:
                      {tongtien.toLocaleString("vi", {
                        style: "currency",
                        currency: "VND",
                      })}
                    </div>
                  </div>
                ) : (
                  <div class="card-body">Chưa có sản phẩm trong giỏ hàng</div>
                )}
              </div>
            </div>
            <div className="col-xl-5 col-lg-7">
              <h5 class="h2 mb-0 text-gray-800">Thông tin giao hàng</h5>
              <span>
                Các trường được đánh dấu <span className="text-danger">*</span>{" "}
                là bắt buộc
              </span>
              <div className="row g-3 mt-2">
                <div class="col-12">
                  <label for="hoten" class="form-label">
                    Họ tên <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="hoten"
                    name="hoten"
                    onChange={handleChangeInput}
                    placeholder="Họ và tên"
                  />
                </div>
                <div class="col-12">
                  <label for="sodienthoai" class="form-label">
                    Số điện thoại <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="sodienthoai"
                    name="sodienthoai"
                    onChange={handleChangeInput}
                    placeholder="Số điện thoại"
                  />
                </div>
                <div class="col-md-12">
                  <label for="diachi" class="form-label">
                    Địa chỉ <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="diachi"
                    name="diachi"
                    onChange={handleChangeInput}
                    placeholder="Địa chỉ nhận hàng"
                  />
                </div>
                <div class="col-12">
                  <label for="ghichu" class="form-label">
                    Ghi chú
                  </label>
                  <textarea
                    class="form-control"
                    id="ghichu"
                    name="ghichu"
                    onChange={handleChangeInput}
                    rows="7"
                    placeholder="Ghi chú cho cửa hàng để có thể hỗ trợ bạn hết sức có thể..."
                  ></textarea>
                </div>
              </div>
              <button
                class="btn btn-success mt-4 bg-success"
                onClick={handleSubmit}
              >
                Gửi xác nhận
              </button>
              <button
                class="btn btn-info mt-4 bg-info"
                style={{ marginLeft: "20px" }}
                onClick={() => {
                  navigate("/shop");
                }}
              >
                Tiếp tục mua sắm
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Cart;
