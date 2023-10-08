import React, { useState } from "react";
import "../assets/css/register.css";
import "../assets/css/global.css";
import logoRegister from "../assets/img/image-register.png";
import { useNavigate } from "react-router-dom";

const initialFormData = {
  username: "",
  email: "",
  password: "",
};

function Register(props) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialFormData);

  const handleRegisterSubmit = () => {};

  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  console.log(formData);

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
          height: "606px",
        }}
        className="form-register bg-white p-10 rounded-2xl shadow-2xl border-black border-2 flex flex-col items-center"
      >
        <h2
          style={{ color: "#101A5F", fontSize: "42px" }}
          class="font-bold mb-4"
        >
          ĐĂNG KÝ
        </h2>
        <div>
          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2">Tài Khoản</label>
            <input
              name="username"
              placeholder="Tài Khoản"
              style={{
                width: "435px",
                height: "50px",
                backgroundColor: "#D9D9D9",
              }}
              class="border  p-2 w-full rounded-3xl  "
              type="text"
              onChange={handleChangeInput}
            />
          </div>

          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2">Email</label>
            <input
              name="email"
              placeholder="Email"
              style={{
                width: "435px",
                height: "50px",
                backgroundColor: "#D9D9D9",
              }}
              class="border p-2 w-full rounded-3xl"
              type="email"
              onChange={handleChangeInput}
            />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2">Mật khẩu</label>
            <input
              name="password"
              placeholder="Mật khẩu"
              style={{
                width: "435px",
                height: "50px",
                backgroundColor: "#D9D9D9",
              }}
              class="border p-2 w-full rounded-3xl"
              type="password"
              onChange={handleChangeInput}
            />
          </div>

          <button
            style={{
              backgroundColor: "#222A63",
              width: "435px",
              height: "50px",
              fontSize: "16px",
            }}
            class="bg-blue-500 text-white mt-10 mb-6 px-4 rounded-3xl"
            onClick={handleRegisterSubmit}
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
