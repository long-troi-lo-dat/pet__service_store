import React, { useEffect, useState } from 'react'
import axios from '../axios';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

function Resetpassword() {
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

    var emailFromLocal = localStorage.getItem("EmailUserForget");

    const SendOTPNotify = () => toast.success('Xác nhận thành công', {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

    const doimatkhau = () => {
        axios.post(`/doimatkhau`, { emailFromLocal, password })
            .then((response) => {
                console.log(response.data)
                axios.post(`/login`, { email: emailFromLocal, password: password })
                    .then(
                        res => {
                            const vaitro = res.data.vaitro;
                            const id_user = res.data.id_user;

                            localStorage.setItem("vaitro", vaitro);
                            localStorage.setItem("id_user", id_user);
                            localStorage.setItem("login", "yes");
                            navigate("/")
                        }
                    )
                    .catch(
                        err => console.log(err)
                    )
                // navigate("/")
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        return () => {
            SendOTPNotify()
        }
    }, []);

    return (
        <>
            <Navbar />
            {/* <h2>Nhập mật khẩu mới</h2>
            <input type="password" placeholder="Nhập mật khẩu mới" name="matkhaumoi" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={doimatkhau}>Thay đổi mật khẩu</button> */}
            <div>
                <div class="container" style={{}}>
                    <div class="card text-center" style={{ width: "600px", margin: "100px auto" }}>
                        <div class="card-header h5 text-white" style={{ backgroundColor: "rgb(34, 42, 99)" }}>Tạo mật khẩu mới</div>
                        <div class="pt-3">
                            <p>Vui lòng nhập mật khẩu mới</p>
                        </div>
                        <div class="card-body px-5 ">
                            <input type="password" placeholder="Nhập mật khẩu mới" name="matkhaumoi" onChange={(e) => setPassword(e.target.value)} style={{ padding: "10px 5px" }} />
                            <div class="d-flex justify-content-between mt-6 pt-3">
                                <button onClick={doimatkhau} class="btn btn-primary w-100" style={{ backgroundColor: "rgb(34, 42, 99)" }}>Xác nhận</button>
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
export default Resetpassword