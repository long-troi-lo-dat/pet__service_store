import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function UserDetailEdit(props) {

    const navigate = useNavigate();
    // const id = localStorage.getItem("id_user")
    const { id } = useParams();

    const [editUser, setEditUser] = useState({ hoTen: "", anhdaidien: "", sdt: "", diachi: "" });
    const handleInput = (e) => {
        setEditUser({ ...editUser, [e.target.name]: e.target.value });
    }
    const handleUpdate = async (e) => {
        const editInputvalue = { hoTen: editUser.hoTen, anhdaidien: editUser.anhdaidien, sdt: editUser.sdt, diachi: editUser.diachi, id_user: localStorage.getItem("id_user") };
        console.log(editInputvalue);
        await axios
            .post("http://localhost:8000/updatethongtin", editInputvalue)
            .then((res) => {
                console.log(res.data);
                setTimeout(() => {
                    navigate(`/userdetail/${localStorage.getItem("id_user")}`);
                }, 1000);
            })
            .catch((err) => console.log(err));
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/userdetail/${id}`)
            .then((response) => {
                setEditUser(response.data);
            })
            .catch((error) => {
                console.error('error fetching data :', error);
            });
    }, [id]);
    console.log(editUser, "oadsigoaidsngoasdngoiasdgnoia")
    return (
        <>
            <Navbar />
            <div class="container rounded bg-white mt-5 mb-5">
                {/* {dataUser.map((item, i) => ( */}
                <div class="row">
                    <div class="col-md-12 border">
                        <div class="p-3 py-5">
                            <div class="d-flex justify-content-between align-items-center mb-3">
                                <h4 class="text-right">Thay đổi thông tin cá nhân</h4>
                            </div>
                            <div className="row">
                                <div class="col-md-12">
                                    <label class="labels">Họ và tên</label><div style={{ display: "flex", lineHeight: "38px" }}><input type="text" class="form-control" name="hoTen" value={editUser[0]?.hoTen || ''} readOnly /></div>
                                </div>
                                <div class="col-md-12 mt-1">
                                    <div style={{ display: "flex", lineHeight: "38px" }}><input type="text" class="form-control" name="hoTen" onChange={handleInput} placeholder="Nhập họ tên mới ở đây" /></div>
                                </div>
                                <div class="col-md-12 mt-3">
                                    <label class="labels">Ảnh đại diện</label> <div style={{ display: "flex", lineHeight: "38px" }}><input type="text" class="form-control" name="anhdaidien" value={editUser[0]?.anhdaidien || ''} readOnly /></div>
                                </div>
                                <div class="col-md-12 mt-1">
                                    <div style={{ display: "flex", lineHeight: "38px" }}><input type="text" class="form-control" name="anhdaidien" onChange={handleInput} placeholder="Copy paste link hình ở đây" /></div>
                                </div>
                                <div class="col-md-12 mt-3">
                                    <label class="labels">Số điện thoại</label> <div style={{ display: "flex", lineHeight: "38px" }}><input type="text" class="form-control" name="sdt" value={editUser[0]?.sdt || ''} readOnly /></div>
                                </div>
                                <div class="col-md-12 mt-1">
                                    <div style={{ display: "flex", lineHeight: "38px" }}><input type="text" class="form-control" name="sdt" onChange={handleInput} placeholder="Nhập sdt mới ở đây" /></div>
                                </div>
                                <div class="col-md-12 mt-3">
                                    <label class="labels">Địa chỉ</label><div style={{ display: "flex", lineHeight: "38px" }}><input type="text" class="form-control" name="diachi" value={editUser[0]?.diachi || ''} readOnly /></div>
                                </div>
                                <div class="col-md-12 mt-1">
                                    <div style={{ display: "flex", lineHeight: "38px" }}><input type="text" class="form-control" name="diachi" onChange={handleInput} placeholder="Nhập địa chỉ ở đây" /></div>
                                </div>
                                <div className="col-md-12 mt-3 d-flex justify-content-center">
                                    <button onClick={() => navigate(`/userdetail/${localStorage.getItem("id_user")}`)} className="btn btn-danger" style={{ minWidth: "200px" }}>Hủy cập nhật</button>
                                    <button style={{ margin: "0 15px" }}></button>
                                    <button onClick={() => handleUpdate()} name="submit" className="btn btn-success" style={{ minWidth: "200px" }}>Cập nhật thông tin</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ))} */}
            </div>
        </>
    );
}

export default UserDetailEdit;