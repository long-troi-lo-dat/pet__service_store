import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logoLogin from "../assets/img/image-login.png";
import validation from "../components/Validate/loginvalidate";
import axios from 'axios';
import Navbar from "../components/Navbar";

const initialFormData = {
  email: "",
  password: "",
}

function Login(props) {
  const navigate = useNavigate()
  const [formData, setFormData] = useState(initialFormData);
  // const [userData, setUserData] = useState()
  const [errors, setErrors] = useState({})

  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLoginSubmit = (event) => {
    // event.preventDefault();
    const validateEmail = formData.email
    const validatePassword = formData.password
    setErrors(validation(formData))
    if (validateEmail !== "" && validatePassword !== "") {
      axios.post('http://localhost:8000/login', formData)
        .then(
          res => {
            if (res.data === "fail") {
              alert("Tài khoản không tồn tại!")
            } else {
              console.log(res.data)
              console.log(res.data[0].vaitro);
              // console.log(res.data)
              // console.log(typeof res.data.vaitro);
              // console.log(res.data.vaitro)
              // console.log(res.data.id_user)
              if (res.data[0].vaitro === 0) {
                localStorage.setItem("vaitro", res.data[0].vaitro)
                localStorage.setItem("id_user", res.data[0].id_user)
                localStorage.setItem("header", 0)
                localStorage.setItem("login", "yes")
                navigate("/")
              } else if (res.data[0].vaitro === 1) {
                localStorage.setItem("vaitro", res.data[0].vaitro)
                localStorage.setItem("id_user", res.data[0].id_user)
                localStorage.setItem("header", 1)
                localStorage.setItem("login", "yes")
                navigate("/admin/index")
              } else if (res.data[0].vaitro === 2) {
                localStorage.setItem("vaitro", res.data[0].vaitro)
                localStorage.setItem("id_user", res.data[0].id_user)
                localStorage.setItem("header", 1)
                localStorage.setItem("login", "yes")
                localStorage.setItem("chinhanh", res.data[0].chinhanh)
                navigate("/QuanLyChiNhanh/index")
              } else if (res.data[0].vaitro === 5) {
                localStorage.setItem("vaitro", res.data[0].vaitro)
                localStorage.setItem("id_user", res.data[0].id_user)
                localStorage.setItem("header", 1)
                localStorage.setItem("login", "yes")
                localStorage.setItem("chinhanh", res.data[0].chinhanh)
                navigate("/NhanVienDichVu/index")
              }
            }
          }
        )
        .catch(
          err => console.log(err)
        )
    }
  };
  return (
    <>
      <Navbar />
      <div
        style={{
          margin: "0 auto",
        }}
        className="container flex py-20 justify-center w-full box-border "
      >
        <div className="image ">
          <img src={logoLogin} alt="image" width="413px" height="606px" />
        </div>
        <div
          style={{
            width: "587px",
            height: "546px",
          }}
          className="form-register bg-white p-10 rounded-2xl shadow-2xl border-black border-2 flex flex-col items-center"
        >
          <h2
            style={{ color: "#101A5F", fontSize: "42px" }}
            class="font-bold mb-4"
          >
            ĐĂNG NHẬP
          </h2>
          <div className="form-login">
            {/* <form action="" className="form-login"> */}
            {/* <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2">Tài Khoản</label>
            <input
              placeholder="Tài Khoản"
              style={{
                width: "435px",
                height: "50px",
                backgroundColor: "#D9D9D9",
              }}
              class="border  p-2 w-full rounded-3xl  "
              type="text"
            />
          </div> */}

            <div class="mb-4">
              <label class="block text-gray-700 font-bold mb-2">Email</label>
              <input
                placeholder="Email"
                style={{
                  width: "500px",
                  height: "50px",
                  backgroundColor: "#D9D9D9",
                }}
                class="border p-2 w-full rounded-3xl"
                type="text"
                name="email"
                onChange={handleChangeInput}
              />
              {errors.email && <span className="text-danger">{errors.email}</span>}
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 font-bold mb-2">Mật khẩu</label>
              <input
                placeholder="Mật khẩu"
                style={{
                  width: "500px",
                  height: "50px",
                  backgroundColor: "#D9D9D9",
                }}
                class="border p-2 w-full rounded-3xl"
                type="password"
                name="password"
                onChange={handleChangeInput}
              />
              {errors.password && <span className="text-danger">{errors.password}</span>}
            </div>
            <div className="text-right ">
              <span className="text-blue-600 cursor-pointer underline">Quên mật khẩu</span>
            </div>

            <button
              type="submit"
              onClick={handleLoginSubmit}
              style={{
                backgroundColor: "#222A63",
                width: "500px",
                height: "50px",
                fontSize: "16px",
              }}
              class="bg-blue-500 text-white my-6 px-4 rounded-3xl py-0"
            >
              ĐĂNG NHẬP
            </button>

            <div className="text-center ">
              Bạn chưa có tài khoản ?{" "}
              <span onClick={() => navigate("/register")} className="text-blue-600 cursor-pointer underline">
                {" "}
                Tạo tài khoản{" "}
              </span>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
