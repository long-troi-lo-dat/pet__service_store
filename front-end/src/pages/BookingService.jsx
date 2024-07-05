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
      <section id="banner" class="py-3 mb-5" style={{ background: "#F9F3EC" }}>
        <div class="container">
          <div class="hero-content py-5 my-3">
            <h2 class="display-1 mt-3 mb-0">Đặt lịch dịch vụ</h2>
            <nav class="breadcrumb">
              <div class="breadcrumb-item">Trang chủ</div>
              <span class="breadcrumb-item active">Đặt lịch dịch vụ</span>
            </nav>
          </div>
        </div>
      </section>
      <section id="booking">
        <div className="container mb-5">
          <h3 class="">Đặt Lịch hẹn</h3>
          <p>
            Các trường được đánh dấu <span className="text-danger">*</span> là bắt buộc
          </p>
          <div class="row mt-3">
            <div class="d-sm align-items-center justify-content-between mb-4">
              <div class="mt-0">
                <div class="row g-3">
                  <div class="col-12">
                    <label className="form-label" for="dichvu">
                      Dịch vụ <span className="text-danger">*</span>
                    </label>
                    <select
                      class="form-select form-control"
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
                  <div class="col-12">
                    <label for="chinhanh" class="form-label">
                      Chi nhánh <span className="text-danger">*</span>
                    </label>
                    <select
                      class="form-select form-control"
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
                  <div class="col-12">
                    <label for="hoten" class="form-label">
                      Họ tên <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="hoten"
                      placeholder="Họ và tên"
                      name="hoten"
                      onChange={handleChangeInput}
                    />
                    <input
                      type="hidden"
                      class="form-control"
                      id="iduser"
                      name="iduser"
                      value={iduser}
                      onChange={handleChangeInput}
                    />
                  </div>
                  <div class="col-md-6">
                    <label for="sodienthoai" class="form-label">
                      Số điện thoại <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="sodienthoai"
                      placeholder="Số điện thoại"
                      name="sdt"
                      onChange={handleChangeInput}
                    />
                  </div>
                  <div class="col-md-6">
                    <label for="email" class="form-label">
                      Email <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="email"
                      name="email"
                      placeholder="Email của bạn"
                      onChange={handleChangeInput}
                    />
                  </div>
                  <div class="col-md-6">
                    <label for="ngay" class="form-label">
                      Ngày <span className="text-danger">*</span>
                    </label>
                    <input
                      type="date"
                      class="form-control"
                      id="ngay"
                      name="ngay"
                      onChange={handleChangeInput}
                    />
                  </div>
                  <div class="col-md-6">
                    <label for="thoigian" class="form-label">
                      Thời gian <span className="text-danger">*</span>
                    </label>
                    <input type="time"
                      class="form-control"
                      id="thoigian"
                      name="thoigian"
                      onChange={handleChangeInput} />
                  </div>
                  <div class="col-12">
                    <label for="tenthucung" class="form-label">
                      Tên thú cưng <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="tenthucung"
                      placeholder="Tên của thú cưng"
                      name="tenthucung"
                      onChange={handleChangeInput}
                    />
                  </div>
                  <div class="col-12">
                    <label class="form-label">
                      Loài <span className="text-danger">*</span>
                    </label>
                    <select
                      class="form-select form-control"
                      name="loai"
                      onChange={handleChangeInput}
                    >
                      <option selected>Vui lòng chọn loài vật</option>
                      <option value="Chó">Chó</option>
                      <option value="Mèo">Mèo</option>
                      <option value="Others">Khác</option>
                    </select>
                  </div>
                  <div class="col-12">
                    <label for="thuocgiong" class="form-label">
                      Thuộc giống loài
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="thuocgiong"
                      placeholder="Thuộc giống loài"
                      name="thuocgiong"
                      onChange={handleChangeInput}
                    />
                  </div>
                  <div class="col-md-6">
                    <label for="tuoi" class="form-label">
                      Tuổi (năm) <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="tuoi"
                      placeholder="1"
                      name="tuoi"
                      onChange={handleChangeInput}
                    />
                  </div>
                  <div class="col-md-6">
                    <label for="trongluong" class="form-label">
                      Trọng lượng (Kg) <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="trongluong"
                      placeholder="1"
                      name="trongluong"
                      onChange={handleChangeInput}
                    />
                  </div>
                  <div class="col-12">
                    <label for="ghichu" class="form-label">
                      Ghi chú cho nhân viên
                    </label>
                    <textarea
                      class="form-control"
                      name="ghichu"
                      onChange={handleChangeInput}
                      id="ghichu"
                      rows="7"
                      placeholder="Để lại một vài mô tả về tình trạng sức khỏe của các bé để các chuyên viên của chúng tôi có thể hỗ trợ bạn tốt nhất..."
                    ></textarea>
                  </div>
                </div>
                <div class="d-grid mt-3">
                  <button onClick={handleBookingSubmit} class="btn btn-dark btn-lg rounded-1">Đặt lịch</button>
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
