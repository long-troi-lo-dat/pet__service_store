import axios from '../axios';
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../Context";

import FastRegister from "../components/FastRegister";
import Services from "../components/Services";

function Booking(props) {
  const navigate = useNavigate();
  const { formData, setFormData } = useContext(GlobalContext);

  const handleChangeInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData({
      ...formData,
      [name]: value
    })
  };

  var iduser = localStorage.getItem("id_user")

  const handleBookingSubmit = async (event) => {
    if (formData.hoten !== "") {
      await axios
        .post("/bookingservice", formData)
        .then((res) => {
          console.log(res.data);
          window.location.reload()
          setTimeout(() => {
            navigate("/success");
          }, 1000);
        })
        .catch((err) => console.log(err));
    } else {

    }
  };
  console.log(formData)
  return (
    <>
      <section id="banner" className="py-3 mb-5" style={{ background: "#F9F3EC" }}>
        <div className="container">
          <div className="hero-content py-5 my-3">
            <h2 className="display-1 mt-3 mb-0">Đặt lịch dịch vụ</h2>
            <nav className="breadcrumb">
              <div className="breadcrumb-item">Trang chủ</div>
              <span className="breadcrumb-item active">Đặt lịch dịch vụ</span>
            </nav>
          </div>
        </div>
      </section>
      <section id="booking">
        <div className="container mb-5">
          <h3 className="">Đặt Lịch hẹn</h3>
          <p>
            Các trường được đánh dấu <span className="text-danger">*</span> là bắt buộc
          </p>
          <div className="row mt-3">
            <div className="d-sm align-items-center justify-content-between mb-4">
              <div className="mt-0">
                <div className="row g-3">
                  <div className="col-12">
                    <label className="form-label" htmlFor="dichvu">
                      Dịch vụ <span className="text-danger">*</span>
                    </label>
                    <select
                      className="form-select form-control"
                      name="dichvu"
                      id="dichvu"
                      onChange={handleChangeInput}
                    >
                      <option>Vui lòng chọn dịch vụ</option>
                      <option value="1">Dịch vụ spa cho thú cưng <span>( 500.000đ )</span></option>
                      <option value="2">Dịch vụ cắt tỉa lông cho thú cưng<span>( 300.000đ )</span></option>
                      <option value="3">Khám chữa bệnh tại cơ sở <span>( 120.000đ )</span></option>
                      <option value="5">Combo 1 Tắm rửa và cắt tỉa lông <span>( 800.000đ )</span></option>
                      <option value="6">Combo 2 Tắm rửa, cắt tỉa lông, khám chữa bệnh tại cơ sở <span>( 962.000đ )</span></option>
                      <option value="4" disabled>Hotel thú cưng <span>( Sắp ra mắt )</span></option>
                      <option value="7" disabled>
                        Dịch vụ tắm thú cưng - Mèo (Sắp ra mắt)
                      </option>
                    </select>
                  </div>
                  <div className="col-12">
                    <label htmlFor="chinhanh" className="form-label">
                      Chi nhánh <span className="text-danger">*</span>
                    </label>
                    <select
                      className="form-select form-control"
                      aria-label="Default select example"
                      name="chinhanh"
                      id="chinhanh"
                      onChange={handleChangeInput}
                    >
                      <option>Vui lòng chi nhánh gần nhất</option>
                      <option value="2">Tòa nhà QTSC9 (toà T), đường Tô Ký, phường Tân Chánh Hiệp, quận 12, TP HCM.</option>
                      <option value="3">778/B1 Nguyễn Kiệm, phường 04, quận Phú Nhuận, TP HCM</option>
                    </select>
                  </div>
                  <div className="col-12">
                    <label htmlFor="hoten" className="form-label">
                      Họ tên <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="hoten"
                      placeholder="Họ và tên"
                      name="hoten"
                      onChange={handleChangeInput}
                    />
                    <input
                      type="hidden"
                      className="form-control"
                      id="iduser"
                      name="iduser"
                      value={iduser}
                      onChange={handleChangeInput}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="sodienthoai" className="form-label">
                      Số điện thoại <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="sodienthoai"
                      placeholder="Số điện thoại"
                      name="sdt"
                      onChange={handleChangeInput}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="email" className="form-label">
                      Email <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="Email của bạn"
                      onChange={handleChangeInput}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="ngay" className="form-label">
                      Ngày <span className="text-danger">*</span>
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="ngay"
                      name="ngay"
                      onChange={handleChangeInput}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="thoigian" className="form-label">
                      Thời gian <span className="text-danger">*</span>
                    </label>
                    <input type="time"
                      className="form-control"
                      id="thoigian"
                      name="thoigian"
                      onChange={handleChangeInput} />
                  </div>
                  <div className="col-12">
                    <label htmlFor="tenthucung" className="form-label">
                      Tên thú cưng <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="tenthucung"
                      placeholder="Tên của thú cưng"
                      name="tenthucung"
                      onChange={handleChangeInput}
                    />
                  </div>
                  <div className="col-12">
                    <label className="form-label">
                      Loài <span className="text-danger">*</span>
                    </label>
                    <select
                      className="form-select form-control"
                      name="loai"
                      onChange={handleChangeInput}
                    >
                      <option selected>Vui lòng chọn loài vật</option>
                      <option value="Chó">Chó</option>
                      <option value="Mèo">Mèo</option>
                      <option value="Others">Khác</option>
                    </select>
                  </div>
                  <div className="col-12">
                    <label htmlFor="thuocgiong" className="form-label">
                      Thuộc giống loài
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="thuocgiong"
                      placeholder="Thuộc giống loài"
                      name="thuocgiong"
                      onChange={handleChangeInput}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="tuoi" className="form-label">
                      Tuổi (năm) <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="tuoi"
                      placeholder="1"
                      name="tuoi"
                      onChange={handleChangeInput}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="trongluong" className="form-label">
                      Trọng lượng (Kg) <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="trongluong"
                      placeholder="1"
                      name="trongluong"
                      onChange={handleChangeInput}
                    />
                  </div>
                  <div className="col-12">
                    <label htmlFor="ghichu" className="form-label">
                      Ghi chú cho nhân viên
                    </label>
                    <textarea
                      className="form-control"
                      name="ghichu"
                      onChange={handleChangeInput}
                      id="ghichu"
                      rows="7"
                      placeholder="Để lại một vài mô tả về tình trạng sức khỏe của các bé để các chuyên viên của chúng tôi có thể hỗ trợ bạn tốt nhất..."
                    ></textarea>
                  </div>
                </div>
                <div className="d-grid mt-3">
                  <button onClick={handleBookingSubmit} className="btn btn-dark btn-lg rounded-1">Đặt lịch</button>
                </div>
              </div>
            </div>
          </div>
        </div >
      </section>
      <FastRegister />
      <Services />
    </>
  );
}

export default Booking;
