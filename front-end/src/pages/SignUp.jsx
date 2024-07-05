import React, { useEffect, useState } from "react";
import axios from '../axios'
import { Link } from "react-router-dom";

const initialFormData = {
  email: "",
  password: "",
};

function Register(props) {
  const [formData, setFormData] = useState(initialFormData);

  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegisterSubmit = (event) => {
    axios.post("/api/auth/register", formData)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        return error;
      });
  };
  useEffect(() => {
    console.log(formData)
  }, [formData])

  return (
    <>
      <section id="banner" class="py-3 mb-5" style={{ background: "#F9F3EC" }}>
        <div class="container">
          <div class="hero-content py-5 my-3">
            <h2 class="display-1 mt-3 mb-0">Đăng ký</h2>
            <nav class="breadcrumb">
              <div class="breadcrumb-item">Trang chủ</div>
              <span class="breadcrumb-item active">Đăng ký</span>
            </nav>
          </div>
        </div>
      </section>
      <section id="register">
        <div className="container">
          <nav>
            <div class="nav nav-tabs d-flex justify-content-center border-dark-subtle mb-3">
              <Link class="nav-link mx-3 fs-3 border-bottom border-dark-subtle border-0 text-uppercase" to="/login">Đăng nhập</Link>
              <Link class="nav-link mx-3 fs-3 border-bottom border-dark-subtle border-0 text-uppercase active" to="/register">Đăng ký</Link>
            </div>
          </nav>
          <div class="tab-pane">
            <div class="col-lg-8 offset-lg-2 mt-5">

              <p class="mb-0">Đăng ký bằng</p>
              <hr class="my-1" />
              <div class="row mt-4 mb-5">
                <div class="d-grid col-md-6 my-2">
                  <a href="#" class="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1 ">
                    <div class="d-flex flex-wrap justify-content-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 128 128"><path fill="#fff" d="M44.59 4.21a63.28 63.28 0 0 0 4.33 120.9a67.6 67.6 0 0 0 32.36.35a57.13 57.13 0 0 0 25.9-13.46a57.44 57.44 0 0 0 16-26.26a74.3 74.3 0 0 0 1.61-33.58H65.27v24.69h34.47a29.72 29.72 0 0 1-12.66 19.52a36.2 36.2 0 0 1-13.93 5.5a41.3 41.3 0 0 1-15.1 0A37.2 37.2 0 0 1 44 95.74a39.3 39.3 0 0 1-14.5-19.42a38.3 38.3 0 0 1 0-24.63a39.25 39.25 0 0 1 9.18-14.91A37.17 37.17 0 0 1 76.13 27a34.3 34.3 0 0 1 13.64 8q5.83-5.8 11.64-11.63c2-2.09 4.18-4.08 6.15-6.22A61.2 61.2 0 0 0 87.2 4.59a64 64 0 0 0-42.61-.38" /><path fill="#e33629" d="M44.59 4.21a64 64 0 0 1 42.61.37a61.2 61.2 0 0 1 20.35 12.62c-2 2.14-4.11 4.14-6.15 6.22Q95.58 29.23 89.77 35a34.3 34.3 0 0 0-13.64-8a37.17 37.17 0 0 0-37.46 9.74a39.25 39.25 0 0 0-9.18 14.91L8.76 35.6A63.53 63.53 0 0 1 44.59 4.21" /><path fill="#f8bd00" d="M3.26 51.5a63 63 0 0 1 5.5-15.9l20.73 16.09a38.3 38.3 0 0 0 0 24.63q-10.36 8-20.73 16.08a63.33 63.33 0 0 1-5.5-40.9" /><path fill="#587dbd" d="M65.27 52.15h59.52a74.3 74.3 0 0 1-1.61 33.58a57.44 57.44 0 0 1-16 26.26c-6.69-5.22-13.41-10.4-20.1-15.62a29.72 29.72 0 0 0 12.66-19.54H65.27c-.01-8.22 0-16.45 0-24.68" /><path fill="#319f43" d="M8.75 92.4q10.37-8 20.73-16.08A39.3 39.3 0 0 0 44 95.74a37.2 37.2 0 0 0 14.08 6.08a41.3 41.3 0 0 0 15.1 0a36.2 36.2 0 0 0 13.93-5.5c6.69 5.22 13.41 10.4 20.1 15.62a57.13 57.13 0 0 1-25.9 13.47a67.6 67.6 0 0 1-32.36-.35a63 63 0 0 1-23-11.59A63.7 63.7 0 0 1 8.75 92.4" /></svg>
                      <p class="mb-0 ps-2">Google</p>
                    </div>
                  </a>
                </div>
                <div class="d-grid col-md-6 my-2">
                  <a href="#" class="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1 ">
                    <div class="d-flex flex-wrap justify-content-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 256 256"><path fill="#1877f2" d="M256 128C256 57.308 198.692 0 128 0S0 57.308 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.348-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.959 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445" /><path fill="#fff" d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A129 129 0 0 0 128 256a129 129 0 0 0 20-1.555V165z" /></svg>
                      <p class="mb-0 ps-2">Facebook</p>
                    </div>
                  </a>
                </div>
              </div>


              <p class="mb-0">Hoặc đăng ký bằng email</p>
              <hr class="my-1" />

              <form id="form1" class="form-group flex-wrap ">
                <div class="form-input col-lg-12 my-4">

                  <input type="text" name="email" placeholder="Địa chỉ email" class="form-control mb-3 p-4" />
                  <input type="password" placeholder="Mật khẩu" class="form-control mb-3 p-4" />

                  <label class="py-3 d-flex flex-wrap justify-content-between">
                    <div>
                      <input type="checkbox" required="" class="d-inline" />
                      <span class="label-body ps-2">Ghi nhớ mật khẩu</span>
                    </div>

                    <div id="passwordHelpBlock" class="form-text ">
                      <a href="#" class="text-primary  fw-bold">Quên mật khẩu?</a>
                    </div>
                  </label>
                  <div class="d-grid my-3">
                    <a href="#" class="btn btn-dark btn-lg rounded-1">Đăng ký</a>
                  </div>

                </div>
              </form>

            </div>

          </div>
        </div>
      </section>
      {/* <div class="container h-custom my-5">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-md-9 col-lg-6 col-xl-5">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              class="img-fluid" alt="dghouse.shop" />
          </div>
          <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form>
              <div class="">
                <a data-mdb-ripple-init class="btn btn-primary btn-lg btn-block" style={{ backgroundColor: "#3b5998" }} href="#!"
                  role="button">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 256 256"><path fill="#1877f2" d="M256 128C256 57.308 198.692 0 128 0S0 57.308 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.348-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.959 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445" /><path fill="#fff" d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A129 129 0 0 0 128 256a129 129 0 0 0 20-1.555V165z" /></svg>
                  <span style={{ paddingLeft: "4px" }}>Đăng nhập bằng Facebook</span>
                </a>
                <a data-mdb-ripple-init class="btn btn-primary btn-lg btn-block" style={{ backgroundColor: "#55acee" }} href="#!"
                  role="button">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 128 128"><path fill="#fff" d="M44.59 4.21a63.28 63.28 0 0 0 4.33 120.9a67.6 67.6 0 0 0 32.36.35a57.13 57.13 0 0 0 25.9-13.46a57.44 57.44 0 0 0 16-26.26a74.3 74.3 0 0 0 1.61-33.58H65.27v24.69h34.47a29.72 29.72 0 0 1-12.66 19.52a36.2 36.2 0 0 1-13.93 5.5a41.3 41.3 0 0 1-15.1 0A37.2 37.2 0 0 1 44 95.74a39.3 39.3 0 0 1-14.5-19.42a38.3 38.3 0 0 1 0-24.63a39.25 39.25 0 0 1 9.18-14.91A37.17 37.17 0 0 1 76.13 27a34.3 34.3 0 0 1 13.64 8q5.83-5.8 11.64-11.63c2-2.09 4.18-4.08 6.15-6.22A61.2 61.2 0 0 0 87.2 4.59a64 64 0 0 0-42.61-.38" /><path fill="#e33629" d="M44.59 4.21a64 64 0 0 1 42.61.37a61.2 61.2 0 0 1 20.35 12.62c-2 2.14-4.11 4.14-6.15 6.22Q95.58 29.23 89.77 35a34.3 34.3 0 0 0-13.64-8a37.17 37.17 0 0 0-37.46 9.74a39.25 39.25 0 0 0-9.18 14.91L8.76 35.6A63.53 63.53 0 0 1 44.59 4.21" /><path fill="#f8bd00" d="M3.26 51.5a63 63 0 0 1 5.5-15.9l20.73 16.09a38.3 38.3 0 0 0 0 24.63q-10.36 8-20.73 16.08a63.33 63.33 0 0 1-5.5-40.9" /><path fill="#587dbd" d="M65.27 52.15h59.52a74.3 74.3 0 0 1-1.61 33.58a57.44 57.44 0 0 1-16 26.26c-6.69-5.22-13.41-10.4-20.1-15.62a29.72 29.72 0 0 0 12.66-19.54H65.27c-.01-8.22 0-16.45 0-24.68" /><path fill="#319f43" d="M8.75 92.4q10.37-8 20.73-16.08A39.3 39.3 0 0 0 44 95.74a37.2 37.2 0 0 0 14.08 6.08a41.3 41.3 0 0 0 15.1 0a36.2 36.2 0 0 0 13.93-5.5c6.69 5.22 13.41 10.4 20.1 15.62a57.13 57.13 0 0 1-25.9 13.47a67.6 67.6 0 0 1-32.36-.35a63 63 0 0 1-23-11.59A63.7 63.7 0 0 1 8.75 92.4" /></svg>
                  <span style={{ paddingLeft: "4px" }}>Đăng nhập bằng Google</span>
                </a>
              </div>

              <div class="divider d-flex align-items-center my-4">
                <p class="text-center fw-bold mx-3 mb-0">Hoặc</p>
              </div>

              <div class="form-outline mb-4">
                <input type="email" name="email" id="form3Example3" class="form-control form-control-lg"
                  placeholder="abc123@gmail.com" onChange={handleChangeInput} />
                <label class="form-label" for="form3Example3">Địa chỉ email</label>
              </div>

              <div class="form-outline mb-3">
                <input type="password" name="password" id="form3Example4" class="form-control form-control-lg"
                  placeholder="Mật khẩu" onChange={handleChangeInput} />
                <label class="form-label" for="form3Example4">Mật khẩu</label>
              </div>

              <div class="d-flex justify-content-between align-items-center">
                <div class="form-check mb-0">
                  <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                  <label class="form-check-label" for="form2Example3">
                    Ghi nhớ mật khẩu
                  </label>
                </div>
              </div>

              <div class="text-center text-lg-start mt-4 pt-2">
                <button type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-lg"
                  style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }} onClick={handleRegisterSubmit}>Đăng ký</button>
              </div>

            </form>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default Register;
