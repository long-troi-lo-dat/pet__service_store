import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import '../assets/css/global3.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../components/Navbar';
import { useContext } from 'react';
import { GlobalContext } from '../Context';

// const Notify = () => toast.success('Đặt hàng thành công', {
//   position: "bottom-left",
//   autoClose: 5000,
//   hideProgressBar: false,
//   closeOnClick: true,
//   pauseOnHover: true,
//   draggable: true,
//   progress: undefined,
//   theme: "light",
// });

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

function Cart() {
  const { cart, setCart } = useContext(GlobalContext)

  const [tongtien, setTongTien] = useState(0)
  const [formData, setFormData] = useState({
    hoten: "",
    sodienthoai: "",
    diachi: "",
    ghichu: "",
    id_user: localStorage.getItem("id_user"),
    cart: cart
  })

  const navigate = useNavigate();

  const tinhtongtien = () => {
    const tt = cart.reduce((total, item) => total + item.gia * item.amount, 0);
    setTongTien(tt);
  };

  useEffect(() => {
    tinhtongtien()
  }, [])

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
        console.error('Số lượng vượt quá giới hạn');
        quantityNotify();
        return;
      }
    } else {
      console.error('Sản phẩm đã hết hàng');
      quantityNotify();
      return;
    }

    setCart([...arr]);
  };
  const removeProduct = (sanpham) => {
    const arr = cart.filter(sp => sp.id_sp !== sanpham.id_sp);
    setCart([...arr])
  }

  const handleChangeInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData({
      ...formData,
      [name]: value
    })
    console.log(formData)
  };
  const handleSubmit = (event) => {
    axios.post("http://localhost:8000/dathang", formData)
      .then((res) => {
        console.log(res.data);
        setTimeout(() => {
          navigate('/success')
        }, 400);
      })
      .catch((err) => console.log(err));
  };



  return (
    <>
      <div className="">
        <Navbar />
        <div className="container sv__coverfull m-auto py-8">
          <div className="row">
            <div className='col-xl-5 col-lg-7'>
              <h5 class="h2 mb-0 text-gray-800">Thông tin giao hàng</h5>
              <span>Các trường được đánh dấu <span className="text-danger">*</span> là bắt buộc</span>
              <div className="row g-3 mt-2">
                <div class="col-12">
                  <label for="hoten" class="form-label">Họ tên <span className="text-danger">*</span></label>
                  <input type="text" class="form-control" id="hoten" name="hoten" onChange={handleChangeInput} placeholder="Họ và tên" />
                </div>
                <div class="col-12">
                  <label for="sodienthoai" class="form-label">Số điện thoại <span className="text-danger">*</span></label>
                  <input type="text" class="form-control" id="sodienthoai" name="sodienthoai" onChange={handleChangeInput} placeholder="Số điện thoại" />
                </div>
                <div class="col-md-12">
                  <label for="diachi" class="form-label">Địa chỉ <span className="text-danger">*</span></label>
                  <input type="text" class="form-control" id="diachi" name="diachi" onChange={handleChangeInput} placeholder="Địa chỉ nhận hàng" />
                </div>
                <div class="col-12">
                  <label for="ghichu" class="form-label">Ghi chú</label>
                  <textarea class="form-control" id="ghichu" name="ghichu" onChange={handleChangeInput} rows="7" placeholder='Ghi chú cho cửa hàng để có thể hỗ trợ bạn hết sức có thể...'></textarea>
                </div>
              </div>
              <button class="btn btn-success mt-4 bg-success" onClick={handleSubmit}>Gửi xác nhận</button>
              <button class="btn btn-info mt-4 bg-info" style={{ marginLeft: "20px" }} onClick={() => { navigate("/shop") }}>Tiếp tục mua sắm</button>
            </div>
            <div className="col-xl-7 col-lg-7">
              <div class="card shadow mb-4">
                <div class="card-header py-3">
                  <h6 class="m-0 font-weight-bold text-primary">Danh sách sản phẩm trong giỏ hàng</h6>
                </div>
                <div class="card-body">
                  <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                    <thead>
                      <tr>
                        <th style={{}}>Hình ảnh</th>
                        <th style={{ width: "100px" }}>Tên sản phẩm</th>
                        <th style={{ width: "100px" }}>Giá</th>
                        <th style={{ width: "100px" }}>Số lượng</th>
                        <th style={{ width: "140px" }}>Thành tiền</th>
                        <th>Xóa</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cart ? (cart.map((item, i) => (
                        <tr>
                          <td style={{}}><img src={process.env.REACT_APP_URL_API_LOCAL + "/" + item.hinhanh + ".webp"} alt='img' /></td>
                          <td style={{}}>{item.ten}</td>
                          <td style={{}}>{item.gia.toLocaleString('vi', { style: 'currency', currency: 'VND' })}</td>
                          <td style={{ textAlign: "center" }}><div><button onClick={() => thaydoisoluong(item, -1)}>-</button><input type="text" style={{ width: "100%" }} value={item.amount} readOnly={true} className='text-center' /><button onClick={() => thaydoisoluong(item, 1)}>+</button></div></td>
                          <td style={{}}>{(item.gia * item.amount).toLocaleString('vi', { style: 'currency', currency: 'VND' })}</td>
                          <td><button onClick={() => removeProduct(item)}>Xóa</button></td>
                        </tr>
                      ))) : ""}
                    </tbody>
                  </table>
                  <div>Tổng số tiền: {tongtien.toLocaleString('vi', { style: 'currency', currency: 'VND' })}</div>
                </div>
              </div>
            </div>
          </div>
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
        </div >
      </div>
    </>
  );
}

export default Cart;