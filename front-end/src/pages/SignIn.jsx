import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoginSuccess } from "../components/Validate/Notify";
import axios from '../axios';

const initialFormData = {
  email: "",
  matkhau: "",
}

function Login() {
  const [formData, setFormData] = useState(initialFormData);

  const navigate = useNavigate();

  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleLoginSubmit = (event) => {
    event.preventDefault()
    console.log("submit dang nhap thanh cong")
    axios.post("/api/auth/login", formData)
      .then(response => {
        LoginSuccess()
        const { id_user, accessToken, refreshToken } = response.data;
        localStorage.setItem('id_user', id_user);
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
        localStorage.setItem('isLogedIn', true);
        navigate("/")
      })
      .catch(error => {
        if (error.response) {
          console.log(error.response.data);
        }
      });
  };

  return (
    <>
      <section id="banner" className="py-3 mb-5" style={{ background: "#F9F3EC" }}>
        <div className="container">
          <div className="hero-content py-5 my-3">
            <h2 className="display-1 mt-3 mb-0">Đăng nhập</h2>
            <nav className="breadcrumb">
              <div className="breadcrumb-item">Trang chủ</div>
              <span className="breadcrumb-item active">Đăng nhập</span>
            </nav>
          </div>
        </div>
      </section>
      <section id="login">
        <div className="container">
          <nav>
            <div className="nav nav-tabs d-flex justify-content-center border-dark-subtle mb-3">
              <Link className="nav-link mx-3 fs-3 border-bottom border-dark-subtle border-0 text-uppercase active" to="/login">Đăng nhập</Link>
              <Link className="nav-link mx-3 fs-3 border-bottom border-dark-subtle border-0 text-uppercase" to="/register">Đăng ký</Link>
            </div>
          </nav>
          <div className="tab-pane">
            <div className="col-lg-8 offset-lg-2 mt-5">

              <p className="mb-0">Đăng nhập bằng</p>
              <hr className="my-1" />
              <div className="row mt-4 mb-5">
                <div className="d-grid col-md-6 my-2">
                  <a href="/#" className="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1 ">
                    <div className="d-flex flex-wrap justify-content-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 128 128"><path fill="#fff" d="M44.59 4.21a63.28 63.28 0 0 0 4.33 120.9a67.6 67.6 0 0 0 32.36.35a57.13 57.13 0 0 0 25.9-13.46a57.44 57.44 0 0 0 16-26.26a74.3 74.3 0 0 0 1.61-33.58H65.27v24.69h34.47a29.72 29.72 0 0 1-12.66 19.52a36.2 36.2 0 0 1-13.93 5.5a41.3 41.3 0 0 1-15.1 0A37.2 37.2 0 0 1 44 95.74a39.3 39.3 0 0 1-14.5-19.42a38.3 38.3 0 0 1 0-24.63a39.25 39.25 0 0 1 9.18-14.91A37.17 37.17 0 0 1 76.13 27a34.3 34.3 0 0 1 13.64 8q5.83-5.8 11.64-11.63c2-2.09 4.18-4.08 6.15-6.22A61.2 61.2 0 0 0 87.2 4.59a64 64 0 0 0-42.61-.38" /><path fill="#e33629" d="M44.59 4.21a64 64 0 0 1 42.61.37a61.2 61.2 0 0 1 20.35 12.62c-2 2.14-4.11 4.14-6.15 6.22Q95.58 29.23 89.77 35a34.3 34.3 0 0 0-13.64-8a37.17 37.17 0 0 0-37.46 9.74a39.25 39.25 0 0 0-9.18 14.91L8.76 35.6A63.53 63.53 0 0 1 44.59 4.21" /><path fill="#f8bd00" d="M3.26 51.5a63 63 0 0 1 5.5-15.9l20.73 16.09a38.3 38.3 0 0 0 0 24.63q-10.36 8-20.73 16.08a63.33 63.33 0 0 1-5.5-40.9" /><path fill="#587dbd" d="M65.27 52.15h59.52a74.3 74.3 0 0 1-1.61 33.58a57.44 57.44 0 0 1-16 26.26c-6.69-5.22-13.41-10.4-20.1-15.62a29.72 29.72 0 0 0 12.66-19.54H65.27c-.01-8.22 0-16.45 0-24.68" /><path fill="#319f43" d="M8.75 92.4q10.37-8 20.73-16.08A39.3 39.3 0 0 0 44 95.74a37.2 37.2 0 0 0 14.08 6.08a41.3 41.3 0 0 0 15.1 0a36.2 36.2 0 0 0 13.93-5.5c6.69 5.22 13.41 10.4 20.1 15.62a57.13 57.13 0 0 1-25.9 13.47a67.6 67.6 0 0 1-32.36-.35a63 63 0 0 1-23-11.59A63.7 63.7 0 0 1 8.75 92.4" /></svg>
                      <p className="mb-0 ps-2">Google</p>
                    </div>
                  </a>
                </div>
                <div className="d-grid col-md-6 my-2">
                  <a href="/#" className="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1 ">
                    <div className="d-flex flex-wrap justify-content-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 256 256"><path fill="#1877f2" d="M256 128C256 57.308 198.692 0 128 0S0 57.308 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.348-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.959 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445" /><path fill="#fff" d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A129 129 0 0 0 128 256a129 129 0 0 0 20-1.555V165z" /></svg>
                      <p className="mb-0 ps-2">Facebook</p>
                    </div>
                  </a>
                </div>
              </div>


              <p className="mb-0">Hoặc đăng nhập bằng email</p>
              <hr className="my-1" />

              <form id="form1" className="form-group flex-wrap">
                <div className="form-input col-lg-12 my-4">

                  <input type="text" name="email" placeholder="Địa chỉ email" className="form-control mb-3 p-4" onChange={handleChangeInput} />
                  <input type="password" name="matkhau" placeholder="Mật khẩu" className="form-control mb-3 p-4" onChange={handleChangeInput} />

                  <label className="py-3 d-flex flex-wrap justify-content-between">
                    <div>
                      <input type="checkbox" required="" className="d-inline" />
                      <span className="label-body ps-2">Ghi nhớ mật khẩu</span>
                    </div>

                    <div id="passwordHelpBlock" className="form-text ">
                      <a href="/#" className="text-primary fw-bold">Quên mật khẩu?</a>
                    </div>
                  </label>
                  <div className="d-grid my-3">
                    <button onClick={handleLoginSubmit} className="btn btn-dark btn-lg rounded-1">Đăng nhập</button>
                  </div>

                </div>
              </form>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
