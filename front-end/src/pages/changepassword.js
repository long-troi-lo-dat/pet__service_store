import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ChangePassword(props) {

    const id = localStorage.getItem("id_user")

    const [dataUser, setDataUser] = useState([]);
    const [messageError, setMessageError] = useState("")
    const [formData, setFormData] = useState({
        oldpassword: "",
        newpassword: "",
        id_user: id
    });
    const navigate = useNavigate();

    const handleChangeInput = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setFormData({
            ...formData,
            [name]: value
        })
        console.log(formData)
    };
    const handleChangePassword = async (event) => {
        event.preventDefault();
        try {
            if (formData.oldpassword === "") {
                setMessageError("Vui lòng điền mật khẩu hiện tại");
                return;
            }
            if (formData.newpassword === "") {
                setMessageError("Vui lòng điền mật khẩu mới");
                return;
            }

            const response = await axios.post("http://localhost:8000/changepassword", formData);

            console.log(response.data);

            // Assuming your backend returns an 'error' property in the response for error cases
            if (response.data.error) {
                setMessageError(response.data.error);
            } else if (formData.oldpassword === formData.newpassword) {
                setMessageError("Mật khẩu mới không thể giống mật khẩu cũ");
            } else {
                // Reset error message if the request is successful
                setMessageError("");
                setTimeout(() => {
                    navigate(`/userdetail/${localStorage.getItem("id_user")}`);
                }, 1000);
            }

        } catch (error) {
            console.error("Thay đổi thất bại:", error.message);
            setMessageError("Có lỗi xảy ra khi thay đổi mật khẩu");
        }
    };

    useEffect(() => {
        axios.get(`http://localhost:8000/userdetail/${id}`)
            .then((response) => {
                setDataUser(response.data);
            })
            .catch((error) => {
                console.error('error fetching data :', error);
            });
    }, [id]);
    return (
        <>
            <Navbar />
            <div class="container rounded bg-white mt-5 mb-5">
                {dataUser.map((item, i) => (
                    <div class="row">
                        <div class="col-md-3 border-right">
                            <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-5" width="150px" src={item.anhdaidien ? item.anhdaidien : "https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"} />
                                <span class="font-weight-bold">{item.hoTen}</span>
                                <span class="text-black-50">{item.email}</span>
                            </div>
                        </div>
                        <div class="col-md-9 border">
                            <div class="p-3 py-5">
                                <div class="d-flex justify-content-between align-items-center mb-3">
                                    <h4 class="text-right">Thay đổi mật khẩu</h4>
                                </div>
                                <div class="row mt-3">
                                    <div class="col-md-12">
                                        <label class="labels">Mật khẩu hiện tại</label><div style={{ display: "flex", lineHeight: "38px" }}><input type="password" class="form-control" name="oldpassword" value={formData.oldpassword} onChange={handleChangeInput} /></div>
                                    </div>
                                    {/* {messageError && <span style={{ color: "red" }}>{messageError}</span>} */}
                                    <div class="col-md-12 mt-3">
                                        <label class="labels">Mật khẩu mới</label> <div style={{ display: "flex", lineHeight: "38px" }}><input type="password" class="form-control" name="newpassword" value={formData.newpassword} onChange={handleChangeInput} /></div>
                                    </div>
                                    {messageError && <span style={{ color: "red" }}>{messageError}</span>}
                                </div>
                                <div class="mt-5 text-center">
                                    <button class="btn btn-danger profile-button" type="button" onClick={() => { navigate(`/userdetail/${localStorage.getItem("id_user")}`) }}>Hủy thay đổi</button>
                                    <button style={{ margin: "0 15px" }}></button>
                                    <button class="btn btn-success profile-button" type="button" onClick={handleChangePassword}>Đổi mật khẩu</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div >
        </>
    );
}

export default ChangePassword;