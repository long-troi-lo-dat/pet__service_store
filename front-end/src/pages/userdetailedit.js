import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function UserDetailEdit(props) {

    const id = localStorage.getItem("id_user")

    const [dataUser, setDataUser] = useState([]);
    const [formData, setFormData] = useState({
        hoTen: "",
        anhdaidien: "",
        sdt: "",
        diachi: "",
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
    const handleEditUser = async (event) => {
        setFormData(formData);
        await axios
            .post("http://localhost:8000/updatethongtin", formData)
            .then((res) => {
                console.log(res.data);
                setTimeout(() => {
                    navigate("/success");
                }, 1000);
            })
            .catch((err) => console.log(err));
    }

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
                                    <h4 class="text-right">Thay đổi thông tin cá nhân</h4>
                                </div>
                                <div class="row mt-3">
                                    <div class="col-md-12">
                                        <label class="labels">Họ và tên</label><div style={{ display: "flex", lineHeight: "38px" }}><input type="text" class="form-control" name="hoTen" onChange={handleChangeInput} /></div>
                                    </div>
                                    <div class="col-md-12 mt-3">
                                        <label class="labels">Ảnh đại diện</label> <div style={{ display: "flex", lineHeight: "38px" }}><input type="text" class="form-control" name="anhdaidien" onChange={handleChangeInput} /></div>
                                    </div>
                                    <div class="col-md-12 mt-3">
                                        <label class="labels">Số điện thoại</label> <div style={{ display: "flex", lineHeight: "38px" }}><input type="text" class="form-control" name="sdt" onChange={handleChangeInput} /></div>
                                    </div>
                                    <div class="col-md-12 mt-3">
                                        <label class="labels">Địa chỉ</label><div style={{ display: "flex", lineHeight: "38px" }}><input type="text" class="form-control" name="diachi" onChange={handleChangeInput} /></div>
                                    </div>
                                </div>
                                <div class="mt-5 text-center"><button class="btn btn-primary profile-button" type="button" onClick={handleEditUser}>Lưu thay đổi</button></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default UserDetailEdit;