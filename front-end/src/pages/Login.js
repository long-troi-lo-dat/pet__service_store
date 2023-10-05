import React from "react";
import { useNavigate } from "react-router-dom";
import logoLogin from "../assets/img/image-login.png";
function Login(props) {
  const navigate = useNavigate()
  return (
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
          height: "606px",
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
          <div class="mb-4">
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
          </div>

          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2">Email</label>
            <input
              placeholder="Email"
              style={{
                width: "435px",
                height: "50px",
                backgroundColor: "#D9D9D9",
              }}
              class="border p-2 w-full rounded-3xl"
              type="email"
            />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2">Mật khẩu</label>
            <input
              placeholder="Mật khẩu"
              style={{
                width: "435px",
                height: "50px",
                backgroundColor: "#D9D9D9",
              }}
              class="border p-2 w-full rounded-3xl"
              type="password"
            />
          </div>
          <div className="text-right ">
            <span className="text-blue-600 cursor-pointer underline">Quên mật khẩu</span>
          </div>

          <button
          // onClick={()=> handle}
            style={{
              backgroundColor: "#222A63",
              width: "435px",
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
  );
}

export default Login;
