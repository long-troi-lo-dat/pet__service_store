import React, { useEffect, useState } from "react";
import axios from '../axios';
import { useNavigate, useParams } from "react-router-dom";

function UserDetailEdit() {
    const navigate = useNavigate();
    const { id } = useParams();

    const [editUser, setEditUser] = useState({
        hoTen: "",
        sdt: "",
        diachi: "",
        matkhau: "",
    });
    const [image, setImage] = useState(null);

    const handleChangeInput = (event) => {
        const { name, value } = event.target;
        setEditUser({ ...editUser, [name]: value });
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleUpdate = async () => {
        try {
            const formData = new FormData();
            formData.append('hoTen', editUser.hoTen);
            formData.append('sdt', editUser.sdt);
            formData.append('diachi', editUser.diachi);
            formData.append('matkhau', editUser.matkhau);
            if (image) {
                formData.append('anhdaidien', image);
            }
            formData.append('id_user', id);

            await axios.put(`/api/auth/${id}`, formData);
            navigate(`/userdetail/${id}`);
        } catch (err) {
            console.error('Error updating user details:', err);
        }
    };

    useEffect(() => {
        axios.get(`/api/auth/${id}`)
            .then(response => {
                setEditUser(prevState => ({
                    ...prevState,
                    ...response.data[0]
                }));
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [id]);

    return (
        <div className="container rounded bg-white mt-5 mb-5">
            <div className="row">
                <div className="col-md-12 border">
                    <div className="p-3 py-5">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h4 className="text-right">Thay đổi thông tin cá nhân</h4>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <label className="labels">Họ và tên</label>
                                <input type="text" className="form-control" name="hoTen" style={{ textTransform: "capitalize" }} value={editUser.hoTen} onChange={handleChangeInput} />
                            </div>
                            <div className="col-md-12 mt-3">
                                <label className="labels">Ảnh đại diện</label>
                                <input type="file" className="form-control" name="anhdaidien" onChange={handleImageChange} />
                            </div>
                            <div className="col-md-12 mt-3">
                                <label className="labels">Số điện thoại</label>
                                <input type="text" className="form-control" name="sdt" value={editUser.sdt} onChange={handleChangeInput} />
                            </div>
                            <div className="col-md-12 mt-3">
                                <label className="labels">Mật khẩu</label>
                                <input type="password" className="form-control" name="matkhau" value={editUser.matkhau} onChange={handleChangeInput} />
                            </div>
                            <div className="col-md-12 mt-3">
                                <label className="labels">Địa chỉ</label>
                                <input type="text" className="form-control" name="diachi" value={editUser.diachi} onChange={handleChangeInput} />
                            </div>
                            <div className="col-md-12 mt-3 d-flex justify-content-center">
                                <button onClick={() => navigate(`/userdetail/${localStorage.getItem("id_user")}`)} className="btn btn-danger" style={{ minWidth: "200px" }}>Hủy cập nhật</button>
                                <div style={{ margin: "0 15px" }}></div>
                                <button onClick={handleUpdate} className="btn btn-success" style={{ minWidth: "200px" }}>Cập nhật thông tin</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserDetailEdit;
