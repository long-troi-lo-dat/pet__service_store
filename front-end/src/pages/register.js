import React, { useState } from "react";
import "../assets/css/register.css";
import "../assets/css/global.css";
import logoRegister from "../assets/img/image-register.png";
import { useNavigate } from "react-router-dom";
import validation from "../components/Validate/registervalidate";
import axios from 'axios'

const initialFormData = {
  hoten: "",
  email: "",
  sdt: "",
  password: "",
};

function Register(props) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialFormData);

  const [errors, setErrors] = useState({})

  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    // setFormData(prev => ({ ...prev, [event.target.name]: event.target.value }))
  };

  console.log(errors)

  const handleRegisterSubmit = async (event) => {
    // event.preventDefault();
    setErrors(validation(formData))

    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

    const validateName = formData.hoten
    const validateSdt = formData.sdt
    const validateEmail = formData.email
    const validatePassword = formData.password

    // setErrors(formData)
    // console.log("trước if")
    // if (errors.hoten === "" && errors.sdt === "" && errors.email === "" && errors.password === "") {
    if (validateName !== "" && validateSdt !== "" && validateEmail !== "" && validatePassword !== "" && password_pattern.test(validatePassword)) {
      await axios.post('http://localhost:8000/signup', formData)
        .then(
          res => {
            // console.log("asdoignoasidngoiasdngioasodignioasdigonasoidngoansdiognoaisndigo")
            navigate("/login")
            // alert("thanh cong")
          }
        )
        .catch(
          err => console.log(err)
        )
    }
  };
  // const [formData, setFormData] = useState(initialFormData);

  // const handleRegisterSubmit = (event) => {
  //   event.preventDefault();
  // };

  // const handleChangeInput = (event) => {
  //   // const { name, value } = event.target;
  //   // setFormData({ ...formData, [name]: value });
  //   setFormData(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
  // };

  // console.log(formData);

  return (
    <div
      style={{
        margin: "0 auto",
      }}
      className="container flex py-20 justify-center w-full box-border "
    >
      <div className="image ">
        <img src={logoRegister} alt="image" width="413px" height="606px" />
      </div>
      <div
        style={{
          width: "587px",
          height: "auto",
        }}
        className="form-register bg-white p-10 rounded-2xl shadow-2xl border-black border-2 flex flex-col items-center"
      >
        <h2
          style={{ color: "#101A5F", fontSize: "42px" }}
          class="font-bold mb-4"
        >
          ĐĂNG KÝ
        </h2>
        <div >
          {/* <form action=""> */}
          {/* <form action="" method> */}
          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2">Họ tên</label>
            <input
              name="hoten"
              placeholder="Họ tên"
              style={{
                width: "500px",
                height: "50px",
                backgroundColor: "#D9D9D9",
              }}
              class="border  p-2 w-full rounded-3xl  "
              type="text"
              onChange={handleChangeInput}
            />
            {errors.hoten && <span className="text-danger">{errors.hoten}</span>}
          </div>

          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2">Số điện thoại</label>
            <input
              name="sdt"
              placeholder="Số điện thoại"
              style={{
                width: "500px",
                height: "50px",
                backgroundColor: "#D9D9D9",
              }}
              class="border  p-2 w-full rounded-3xl  "
              type="text"
              onChange={handleChangeInput}
            />
            {errors.sdt && <span className="text-danger">{errors.sdt}</span>}
          </div>

          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2">Email</label>
            <input
              name="email"
              placeholder="Email"
              style={{
                width: "500px",
                height: "50px",
                backgroundColor: "#D9D9D9",
              }}
              class="border p-2 w-full rounded-3xl"
              type="email"
              onChange={handleChangeInput}
            />
            {errors.email && <span className="text-danger">{errors.email}</span>}
          </div>

          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2">Mật khẩu</label>
            <input
              name="password"
              placeholder="Mật khẩu"
              style={{
                width: "500px",
                height: "50px",
                backgroundColor: "#D9D9D9",
              }}
              class="border p-2 w-full rounded-3xl"
              type="password"
              onChange={handleChangeInput}
            />
            {errors.password && <span className="text-danger">{errors.password}</span>}
          </div>

          <button
            onClick={handleRegisterSubmit}
            style={{
              backgroundColor: "#222A63",
              width: "500px",
              height: "50px",
              fontSize: "16px",
            }}
            class="bg-blue-500 text-white mt-10 mb-6 px-4 rounded-3xl"
          // onClick={handleRegisterSubmit}
          >
            ĐĂNG KÝ
          </button>
          <div className="text-center py-5">
            Bạn đã có tài khoản ?{" "}
            <span
              className="text-blue-600 cursor-pointer underline"
              onClick={() => navigate("/login")}
            >
              {" "}
              Đăng nhập{" "}
            </span>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
