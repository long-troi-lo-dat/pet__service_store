import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";

function UserDetailEdit(props) {

    const id = localStorage.getItem("id_user")

    const [dataUser, setDataUser] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/userdetail/${id}`)
            .then((response) => {
                setDataUser(response.data);
            })
            .catch((error) => {
                console.error('error fetching data :', error);
            });
        // axios.get(`http://localhost:8000/donhanguser/${id}`)
        //     .then((response) => {
        //         setDataCart(response.data);
        //     })
        //     .catch((error) => {
        //         console.error('error fetching data :', error);
        //     });
    }, [id]);
    return (
        <>
            <Navbar />
            <div class="container rounded bg-white mt-5 mb-5">
                {dataUser.map((item, i) => (
                    <div class="row">
                        <div class="col-md-3 border-right">
                            <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" />
                                <span class="font-weight-bold">{item.hoTen}</span>
                                <span class="text-black-50">{item.email}</span>
                            </div>
                        </div>
                        <div class="col-md-9 border">
                            <div class="p-3 py-5">
                                <div class="d-flex justify-content-between align-items-center mb-3">
                                    <h4 class="text-right">Thông tin cá nhân</h4>
                                </div>
                                <div class="row mt-3">
                                    <div class="col-md-12">
                                        <label class="labels">Họ và tên</label>
                                        <input type="text" class="form-control" placeholder="first name" value={item.hoTen} />
                                    </div>
                                    <div class="col-md-12 mt-3">
                                        <label class="labels">Ảnh đại diện</label>
                                        <input type="text" class="form-control" value={item.anhdaidien} />
                                    </div>
                                    <div class="col-md-12 mt-3">
                                        <label class="labels">Số điện thoại</label>
                                        <input type="text" class="form-control" value={item.sdt} />
                                    </div>
                                    <div class="col-md-12 mt-3">
                                        <label class="labels">Mật khẩu</label>
                                        <input type="text" class="form-control" value={item.matkhau} />
                                    </div>
                                    <div class="col-md-12 mt-3">
                                        <label class="labels">Địa chỉ</label>
                                        <input type="text" class="form-control" value={item.diachi} />
                                    </div>
                                </div>
                                <div class="row mt-3">
                                    <div class="col-md-6">
                                        <label class="labels">Country</label>
                                        <input type="text" class="form-control" placeholder="country" value="" />
                                    </div>
                                    <div class="col-md-6">
                                        <label class="labels">State/Region</label>
                                        <input type="text" class="form-control" value="" placeholder="state" />
                                    </div>
                                </div>
                                <div class="mt-5 text-center"><button class="btn btn-primary profile-button" type="button">Save Profile</button></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default UserDetailEdit;