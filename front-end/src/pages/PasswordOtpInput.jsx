import React, { useEffect, useState } from 'react'
import axios from '../axios';
import { NavLink, useNavigate } from 'react-router-dom';
import { FiMapPin, FiPhone, FiUser } from 'react-icons/fi';
import { ToastContainer, toast } from 'react-toastify';

function OTPInput() {
    const [otp, setOtp] = useState(["", "", "", "", "", ""]);
    const [message, setMessage] = useState('');
    const navigate = useNavigate()

    var emailFromLocal = localStorage.getItem("EmailUserForget");

    const SendOTPNotify = () => toast.success('Đã gửi OTP về email, vui lòng kiểm tra', {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

    const handleVerifyOTP = async () => {
        try {
            await axios.post(`/verify-otp`, { emailFromLocal, otp });
            setMessage('OTP verified successfully. Proceed to reset your password.');
            // Redirect or show reset password form
            console.log(message)
            navigate("/Resetpassword")
        } catch (error) {
            setMessage('Invalid OTP. Please try again.');
            return error
        }
    };

    useEffect(() => {
        return () => {
            SendOTPNotify()
        }
    }, []);

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
                                <li className="dropdown">
                                    <NavLink to="/login">
                                        <FiUser size={24} color="white" />
                                    </NavLink>
                                </li>
                            </div>
                        </div >
                    </div >
                </main>
            </section >
            <div>
                {/* <input type="text" placeholder="Enter OTP" onChange={(e) => setOtp(e.target.value)} />
                <button onClick={handleVerifyOTP}>Verify OTP</button> */}
                <div className="container" style={{}}>
                    <div className="card text-center" style={{ width: "600px", margin: "100px auto" }}>
                        <div className="card-header h5 text-white" style={{ backgroundColor: "rgb(34, 42, 99)" }}>Nhập mã OTP</div>
                        <div className="pt-3">
                            <p>Vui lòng kiểm tra email {emailFromLocal}</p>
                        </div>
                        <div className="card-body px-5 ">
                            {/* <div className="form-outline">
                                <input
                                    style={{ width: "60px", textAlign: "center", borderRadius: "7px", padding: "15px", fontSize: "20px" }}
                                    maxLength="1"
                                    className="mx-1"
                                    type="text"
                                    name=""
                                    id=""
                                    onChange={(e) =>
                                        setOtp([
                                            e.target.value,
                                            otp[1],
                                            otp[2],
                                            otp[3],
                                            otp[4],
                                            otp[5],
                                        ])
                                    }
                                />
                                <input
                                    style={{ width: "60px", textAlign: "center", borderRadius: "7px", padding: "15px", fontSize: "20px" }}
                                    maxLength="1"
                                    className="mx-1"
                                    type="text"
                                    name=""
                                    id=""
                                    onChange={(e) =>
                                        setOtp([
                                            otp[0],
                                            e.target.value,
                                            otp[2],
                                            otp[3],
                                            otp[4],
                                            otp[5],
                                        ])
                                    }
                                />
                                <input
                                    style={{ width: "60px", textAlign: "center", borderRadius: "7px", padding: "15px", fontSize: "20px" }}
                                    maxLength="1"
                                    className="mx-1"
                                    type="text"
                                    name=""
                                    id=""
                                    onChange={(e) =>
                                        setOtp([
                                            otp[0],
                                            otp[1],
                                            e.target.value,
                                            otp[3],
                                            otp[4],
                                            otp[5],
                                        ])
                                    }
                                />
                                <input
                                    style={{ width: "60px", textAlign: "center", borderRadius: "7px", padding: "15px", fontSize: "20px" }}
                                    maxLength="1"
                                    className="mx-1"
                                    type="text"
                                    name=""
                                    id=""
                                    onChange={(e) =>
                                        setOtp([
                                            otp[0],
                                            otp[1],
                                            otp[2],
                                            e.target.value,
                                            otp[4],
                                            otp[5],
                                        ])
                                    }
                                />
                                <input
                                    style={{ width: "60px", textAlign: "center", borderRadius: "7px", padding: "15px", fontSize: "20px" }}
                                    maxLength="1"
                                    className="mx-1"
                                    type="text"
                                    name=""
                                    id=""
                                    onChange={(e) =>
                                        setOtp([
                                            otp[0],
                                            otp[1],
                                            otp[2],
                                            otp[3],
                                            e.target.value,
                                            otp[5],
                                        ])
                                    }
                                />
                                <input
                                    style={{ width: "60px", textAlign: "center", borderRadius: "7px", padding: "15px", fontSize: "20px" }}
                                    maxLength="1"
                                    className="mx-1"
                                    type="text"
                                    name=""
                                    id=""
                                    onChange={(e) =>
                                        setOtp([
                                            otp[0],
                                            otp[1],
                                            otp[2],
                                            otp[3],
                                            otp[4],
                                            e.target.value,
                                        ])
                                    }
                                />
                                <label className="form-label mt-3" htmlFor="typeEmail">Vui lòng kiểm tra mã OTP trong email</label>
                            </div> */}
                            {/* {otp.map((s, key) =>
                                <input onChange={(e) => setOtp(e.target.value)} style={{ width: "60px", textAlign: "center", borderRadius: "7px", padding: "15px", fontSize: "20px" }} key={key} value={s} onPaste={onPaste} onInput={update(key)} />
                            )} */}
                            <input type="text" placeholder="Nhập mã OTP ở đây" onChange={(e) => setOtp(e.target.value)} style={{ padding: "10px 5px" }} />
                            <div className="d-flex justify-content-between mt-6 pt-3">
                                <button onClick={handleVerifyOTP} className="btn btn-primary w-100" style={{ backgroundColor: "rgb(34, 42, 99)" }}>Xác nhận</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer
                position="bottom-left"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </>
    )
}

export default OTPInput