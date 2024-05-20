import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import axios from '../../axios';
import "../../../src/assets/css/sb-admin-2.min.css";
import { Layout, Menu } from 'antd'
import { AreaChartOutlined } from '@ant-design/icons'
import imglogo from "../../assets/logo-1.png"
const { Sider } = Layout;

function AdminNguoiDung(props) {

    const id = localStorage.getItem("id_user")
    const navigate = useNavigate();

    const [dataUser, setDataUser] = useState([])
    const [openProfile, setOpenProfile] = useState(false)
    const [dataNguoiDung, setDataNguoiDung] = useState([])
    const [cate, setCate] = useState("Nhân viên")

    const handleCate = (cate) => {
        axios.get(`/quanlynguoidung/${cate}`)
            .then((response) => {
                setDataNguoiDung(response.data);
                if (cate === 0) {
                    setCate("Người dùng")
                } else {
                    setCate("Nhân viên")
                }
            })
            .catch((error) => {
                console.error('error fetching data :', error);
            });
    }

    const handleVohieuhoa = (iduser) => {
        axios.post(`/vohieuhoa/${iduser}`)
            .then((response) => {
                console.log("thanh cong")
                window.location.reload()
            })
            .catch((error) => {
                console.error('error fetching data :', error);
            });
    }
    const handleKichhoat = (iduser) => {
        axios.post(`/kichhoat/${iduser}`)
            .then((response) => {
                console.log("thanh cong")
                window.location.reload()
            })
            .catch((error) => {
                console.error('error fetching data :', error);
            });
    }

    useEffect(() => {
        axios.get(`/userdetail/${id}`)
            .then((response) => {
                setDataUser(response.data);
            })
            .catch((error) => {
                console.error('error fetching data :', error);
            });
        axios.get(`/quanlynguoidung/1`)
            .then((response) => {
                setDataNguoiDung(response.data);
                // console.log(dataUser, "data user")
            })
            .catch((error) => {
                console.error('error fetching data :', error);
            });
    }, [id]);

    const LogoutSubmit = () => {
        localStorage.setItem("header", 0)
        localStorage.setItem("id_user", 0)
        localStorage.setItem("vaitro", 0)
        localStorage.setItem("login", "no")
        navigate("/")
    }
    return (
        <div id="wrapper">
            <Layout>
                <Sider className="sidebar" style={{ color: "#fff" }}>
                    <Menu mode="inline" style={{ height: "100%", display: "flex", flexDirection: "column", gap: "15px", fontSize: "1rem", position: "relative" }}>
                        {/* <Menu mode="inline" theme="dark"> */}
                        <div className="logo">
                            <div className="logo-icon" style={{ margin: "15px 20px" }}>
                                <a href="/employee/index"><img src={imglogo} alt="" /></a>
                            </div>
                        </div>
                        <Menu.SubMenu key="dichvu" title="Dịch vụ">
                            <Menu.Item key='dichvu-1'><a href="/employee/adddichvu">Thêm mới</a></Menu.Item>
                            <Menu.Item key='dichvu-2'><a href="/employee/dichvu">Danh sách</a></Menu.Item>
                        </Menu.SubMenu>
                        <Menu.SubMenu key="sanpham" title="Sản phẩm">
                            <Menu.Item key='sanpham-1'><a href="/employee/addsanpham">Thêm mới</a></Menu.Item>
                            <Menu.Item key='sanpham-2'><a href="/employee/sanpham">Danh sách</a></Menu.Item>
                        </Menu.SubMenu>
                        <Menu.SubMenu key="binhluan" title="Bình luận">
                            <Menu.Item key='binhluan-1'><a href="/employee/binhluan">Danh sách</a></Menu.Item>
                        </Menu.SubMenu>
                        {localStorage.getItem("vaitro") === 1 ?
                            <Menu.SubMenu key="nguoidung" title="Người dùng">
                                <Menu.Item key='nguoidung-1'><a href="/employee/addnguoidung">Thêm mới</a></Menu.Item>
                                <Menu.Item key='nguoidung-2'><a href="/employee/nguoidung">Danh sách</a></Menu.Item>
                            </Menu.SubMenu>
                            :
                            ""
                        }
                        <Menu.SubMenu key='donhang' title="Đơn hàng">
                            {localStorage.getItem("vaitro") === 1 ?
                                <Menu.Item key='donhang-2'><a href="/employee/donhang">Danh sách</a></Menu.Item>
                                : localStorage.getItem("vaitro") === 2 ?
                                    <Menu.Item key='donhang-2'><a href="/QuanLyChiNhanh/donhang">Danh sách</a></Menu.Item>
                                    : <Menu.Item key='donhang-2'><a href="/employee/donhang">Danh sách</a></Menu.Item>
                            }
                        </Menu.SubMenu>
                        <Menu.SubMenu key='datlich' title="Đặt lịch">
                            {localStorage.getItem("vaitro") === 1 ?
                                <Menu.Item key='datlich-2'><a href="/employee/datlich">Danh sách</a></Menu.Item>
                                : localStorage.getItem("vaitro") === 2 ?
                                    <Menu.Item key='datlich-2'><a href="/QuanLyChiNhanh/datlich">Danh sách</a></Menu.Item>
                                    : <Menu.Item key='datlich-2'><a href="/employee/datlich">Danh sách</a></Menu.Item>
                            }
                        </Menu.SubMenu>
                        {localStorage.getItem("vaitro") === 1 ?
                            <Menu.Item key="Thống kê" icon={<AreaChartOutlined />}><a href="/employee/thongke">Thống kê</a></Menu.Item>
                            : localStorage.getItem("vaitro") === 2 ?
                                <Menu.Item key="Thống kê" icon={<AreaChartOutlined />}><a href="/QuanLyChiNhanh/thongke">Thống kê</a></Menu.Item>
                                : <Menu.Item key="Thống kê" icon={<AreaChartOutlined />}><a href="/employee/thongke">Thống kê</a></Menu.Item>
                        }
                    </Menu>
                </Sider>
            </Layout>
            <div id="content-wrapper" class="d-flex flex-column">
                <div id="content">
                    <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                        <ul class="navbar-nav ml-auto">
                            <div class="topbar-divider d-none d-sm-block"></div>
                            {/* <li class="nav-item dropdown no-arrow"> */}
                            <span
                                class="nav-link"
                                onClick={() => setOpenProfile((prev) => !prev)}
                            >
                                {dataUser.map((item, i) => (
                                    <>
                                        <span class="mr-2 d-none d-lg-inline text-gray-600 small">
                                            {item.hoTen}
                                        </span>
                                        <img
                                            class="img-profile rounded-circle"
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNTK5QTN7bjRgXhzUHiR8o7fNjypmI5P3Ui5Zgpz1hcQ&s"
                                            alt=""
                                            width="30px"
                                            style={{ marginLeft: "0px" }}
                                        />
                                    </>
                                ))}
                            </span>
                            {openProfile && <div className="flex flex-col" style={{ position: "absolute", top: "70px", right: "50px", width: "150px", padding: "15px", backgroundColor: "white", border: "1px solid #333", zIndex: "100", borderRadius: "8px" }}>
                                <ul className="flex flex-col gap-4">
                                    <li><span>Thông tin cá nhân</span></li>
                                    <li><span onClick={() => navigate("/employee/index")}>Trang chủ Admin</span></li>
                                    <li><span onClick={() => navigate("/")}>Trang chủ User</span></li>
                                    <li><span onClick={() => LogoutSubmit()}>Đăng xuất</span></li>
                                </ul>
                            </div>}
                        </ul>
                    </nav>
                    <div class="container-fluid">
                        <div class="d-sm-flex align-items-center justify-content-between mb-4">
                            <h1 class="h3 mb-0 text-gray-800">Quản lý tài khoản - {cate}</h1>
                        </div>
                        <div class="card shadow mb-4" style={{ fontSize: "13px" }}>
                            <div class="card-body">
                                <div class="d-flex mb-4">
                                    <div class="col-12 d-flex" style={{ marginLeft: "-12px" }}>
                                        <button class="btn btn-primary" onClick={() => { handleCate(1) }}>Nhân viên</button>
                                        <button style={{ margin: "0 15px" }}></button>
                                        <button class="btn btn-primary" onClick={() => { handleCate(0) }}>Người Dùng</button>
                                    </div>
                                </div>
                                <table
                                    class="table table-bordered"
                                    id="dataTable"
                                    width="100%"
                                    cellspacing="0"
                                >
                                    <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th>Họ tên</th>
                                            <th>Số điện thoại</th>
                                            <th>Email</th>
                                            <th>Mô tả</th>
                                            <th>Vô hiệu hóa</th>
                                            <th>Hành dộng</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {dataNguoiDung.map((item, i) => (
                                            <tr>
                                                <td>{item.id_user}</td>
                                                <td>{item.hoTen}</td>
                                                <td>{item.sdt}</td>
                                                <td>{item.email}</td>
                                                <td>{item.mota}</td>
                                                <td>{item.vohieuhoa === 1 ? "Đang bị vô hiệu hóa" : "Không bị vô hiệu hóa"}</td>
                                                <td style={{ textAlign: "center", maxWidth: "154px", }}>
                                                    {item.vohieuhoa === 1 ?
                                                        <button
                                                            class="btn btn-success"
                                                            data-toggle="modal"
                                                            data-target="#exampleModal"
                                                            style={{ minWidth: "140px", fontSize: "13px" }}
                                                            onClick={() => handleKichhoat(item.id_user)}
                                                        >
                                                            Kích hoạt
                                                        </button>
                                                        :
                                                        <button
                                                            class="btn btn-danger"
                                                            data-toggle="modal"
                                                            data-target="#exampleModal"
                                                            style={{ minWidth: "140px", fontSize: "13px" }}
                                                            onClick={() => handleVohieuhoa(item.id_user)}
                                                        >
                                                            Vô hiệu hóa
                                                        </button>
                                                    }
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminNguoiDung;
