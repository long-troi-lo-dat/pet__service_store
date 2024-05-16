import React, { useState } from "react";
import "../assets/css/register.css";
import "../assets/css/global.css";
import logoRegisterfun from "../assets/img/dangky.png";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import Navbar from "../components/Navbar";

const initialFormData = {
  hoten: "",
  email: "",
  sdt: "",
  password: "",
};

function Register(props) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialFormData);
  const [listError, setListError] = useState("")
  const [listError1, setListError1] = useState("")
  const [listError2, setListError2] = useState("")
  const [listError3, setListError3] = useState("")

  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegisterSubmit = async (event) => {

    const validateName = formData.hoten
    const validateSdt = formData.sdt
    const validateEmail = formData.email
    const validatePassword = formData.password

    if (validateName === "") {
      setListError("Không được để trống họ tên")
    } else {
      setListError("")
    }
    if (validateSdt === "") {
      setListError1("Không được để trống số điện thoại")
    } else {
      setListError1("")
    }
    if (validateEmail === "") {
      setListError2("Không được để trống email")
    } else {
      setListError2("")
    }
    if (validatePassword === "") {
      setListError3("Không được để trống mật khẩu")
    } else {
      setListError3("")
    }

    if (validateName !== "" && validateSdt !== "" && validateEmail !== "" && validatePassword !== "" && validatePassword !== "") {
      await axios.post('http://localhost:8000/signup', formData)
        .then(
          res => {
            console.log(res)
            navigate("/login")
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
          <img src={logoRegisterfun} alt="" width="413px" height="606px" style={{ paddingRight: "30px" }} />
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
              {/* {errors.hoten && <span className="text-danger">{errors.hoten}</span>} */}
              {listError && <span className="text-danger">{listError}</span>}
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
                type="telephone"
                onChange={handleChangeInput}
              />
              {/* {errors.sdt && <span className="text-danger">{errors.sdt}</span>} */}
              {listError1 && <span className="text-danger">{listError1}</span>}
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
              {/* {errors.email && <span className="text-danger">{errors.email}</span>} */}
              {listError2 && <span className="text-danger">{listError2}</span>}
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
              {/* {errors.password && <span className="text-danger">{errors.password}</span>} */}
              {listError3 && <span className="text-danger">{listError3}</span>}
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
    </>
  );
}

export default Register;
