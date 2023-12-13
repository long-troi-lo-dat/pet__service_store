import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from "react-router-dom";
import axios from 'axios';
import Navbar from '../components/Navbar';
import { FiMapPin, FiPhone, FiUser } from 'react-icons/fi';
import { toast } from 'react-toastify';

export default function ForgetPassword() {
    const navigate = useNavigate()

    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleForgotPassword = async () => {
        try {
            await axios.post('http://localhost:8000/forgot_password', { email });
            setMessage('OTP sent to your email. Check your inbox.');
            localStorage.setItem("EmailUserForget", email)
            navigate("/OTPinput")
        } catch (error) {
            setMessage('Email không tồn tại, vui lòng thử lại email khác.');
        }
    };


    return (
        <>
            <section className="">
                <main className="w-full">
                    <div className="w-full">
                        <div div
                            style={{
                                backgroundColor: "#222A63",
                                height: "45px",
                                display: "flex",
                                alignItems: "center", // Canh giữa theo chiều dọc
                                justifyContent: "space-between", // Canh giữa theo chiều ngang và cách đều các phần tử
                                color: "#fff", // Màu văn bản
                                padding: "2 20px", // Khoảng cách ngoài cùng
                            }
                            }
                        >
                            <div
                                style={{
                                    width: "100%",
                                    height: "46px",
                                }}
                                className="flex items-center space-x-4 ml-10"
                            >
                                <FiPhone size={24} color="white" />
                                <span style={{ marginLeft: "8px" }}>0123-456-789</span>
                                <FiMapPin size={24} color="white" />
                                <span style={{ marginLeft: "8px" }}>
                                    Công viên phần mềm quang trung
                                </span>
                            </div>
                            <div className="flex space-x-4 mr-8 ">
                                <li class="dropdown">
                                    <NavLink to="/login">
                                        <FiUser size={24} color="white" />
                                    </NavLink>
                                </li>
                            </div>
                        </div >
                    </div >
                </main>
            </section >
            {/* <h2>Forgot Password</h2>
            <input type="text" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <button onClick={handleForgotPassword}>Send OTP</button> */}
            <div class="container" style={{}}>
                <div class="card text-center" style={{ width: "400px", margin: "100px auto" }}>
                    <div class="card-header h5 text-white" style={{ backgroundColor: "rgb(34, 42, 99)" }}>Khôi Phục Mật Khẩu</div>
                    <div class="card-body px-5">
                        <div class="form-outline">
                            <input type="email" id="typeEmail" placeholder="Nhập Email ở đây . . ." class="form-control my-3" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <span style={{ color: "red" }}>{message}</span>
                        </div>
                        <button onClick={handleForgotPassword} class="btn btn-primary w-100 mt-3" style={{ backgroundColor: "rgb(34, 42, 99)" }}>Khôi phục</button>
                        <div class="d-flex justify-content-between mt-4">
                            <button onClick={() => navigate("/login")}>Đăng nhập</button>
                            <button onClick={() => navigate("/register")}>Đăng ký</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}