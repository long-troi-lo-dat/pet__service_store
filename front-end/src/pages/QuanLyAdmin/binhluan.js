import React, { useEffect, useState } from "react";
// import Dropdown from 'react-bootstrap/Dropdown';
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "../../../src/assets/css/sb-admin-2.min.css";
import { Layout, Menu } from 'antd'
import { AreaChartOutlined, BarsOutlined } from '@ant-design/icons'
import imglogo from "../../assets/logo-1.png"
import Dropdown from 'react-bootstrap/Dropdown';
import moment from "moment";
const { Header, Sider } = Layout;

function AdminBinhLuan(props) {

    const id = localStorage.getItem("id_user")
    const navigate = useNavigate();

    const [dataUser, setDataUser] = useState([])
    const [dataBinhLuan, setDataBinhLuan] = useState([])
    const [openProfile, setOpenProfile] = useState(false)
    const handleNavigate = async () => {
        navigate("/")
        localStorage.setItem("header", 0)
    }
    const handleAnBL = (id) => {
        axios.post(`http://localhost:8000/anbinhluan/${id}`)
            .then((response) => {
                console.log("ẩn thành công")
                window.location.reload();
            })
            .catch((error) => {
                console.error('error fetching data :', error);
            });
    }
    const handleHienBL = (id) => {
        axios.post(`http://localhost:8000/hienbinhluan/${id}`)
            .then((response) => {
                console.log("hiện thành công")
                window.location.reload();
            })
            .catch((error) => {
                console.error('error fetching data :', error);
            });
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/userdetail/${id}`)
            .then((response) => {
                setDataUser(response.data);
                // console.log(dataUser, "data user")
            })
            .catch((error) => {
                console.error('error fetching data :', error);
            });
        axios.get(`http://localhost:8000/AdminBinhLuan`)
            .then((response) => {
                setDataBinhLuan(response.data);
                // console.log(dataUser, "data user")
            })
            .catch((error) => {
                console.error('error fetching data :', error);
            });
    }, []);

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
                        <Menu.SubMenu key="thucung" title="Thú cưng">
                            <Menu.Item key='thucung-1'><a href="/employee/addthucung">Thêm mới</a></Menu.Item>
                            <Menu.Item key='thucung-2'><a href="/employee/thucung">Danh sách</a></Menu.Item>
                        </Menu.SubMenu>
                        <Menu.SubMenu key="sanpham" title="Sản phẩm">
                            <Menu.Item key='sanpham-1'><a href="/employee/addsanpham">Thêm mới</a></Menu.Item>
                            <Menu.Item key='sanpham-2'><a href="/employee/sanpham">Danh sách</a></Menu.Item>
                        </Menu.SubMenu>
                        <Menu.SubMenu key="binhluan" title="Bình luận">
                            <Menu.Item key='binhluan-1'><a href="/employee/binhluan">Danh sách</a></Menu.Item>
                        </Menu.SubMenu>
                        <Menu.SubMenu key="nguoidung" title="Người dùng">
                            <Menu.Item key='nguoidung-1'><a href="/employee/addnguoidung">Thêm mới</a></Menu.Item>
                            <Menu.Item key='nguoidung-2'><a href="/employee/nguoidung">Danh sách</a></Menu.Item>
                        </Menu.SubMenu>
                        <Menu.SubMenu key='donhang' title="Đơn hàng">
                            <Menu.Item key='donhang-2'><a href="/employee/donhang">Danh sách</a></Menu.Item>
                        </Menu.SubMenu>
                        <Menu.SubMenu key='datlich' title="Đặt lịch">
                            <Menu.Item key='datlich-2'><a href="/employee/datlich">Danh sách</a></Menu.Item>
                        </Menu.SubMenu>
                        <Menu.Item key="Thống kê" icon={<AreaChartOutlined />}><a href="/employee/thongke">Thống kê</a></Menu.Item>
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
                            <h1 class="h3 mb-0 text-gray-800">Quản lý bình luận</h1>
                        </div>
                        <div class="card shadow mb-4">
                            <div class="card-body">
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
                                            <th>Nội dung</th>
                                            <th>Ngày bình luận</th>
                                            <th>Mã sản phẩm</th>
                                            <th>Ẩn / Hiện</th>
                                            <th>Hành động</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {dataBinhLuan.map((item, i) => (
                                            <tr>
                                                <td>{item.id}</td>
                                                <td>{item.hoten}</td>
                                                <td>{item.noidung}</td>
                                                <td>{moment(item.ngaybinhlua).format('DD/MM/YYYY | HH:mm:ss')}</td>
                                                <td>{item.id_sp}</td>
                                                <td>{item.anHien === 0 ? "Đang hiện" : "Đang ẩn"}</td>
                                                <td style={{ textAlign: "center", maxWidth: "154px", }}>
                                                    {item.anHien === 0 ?
                                                        <button
                                                            class="btn btn-danger"
                                                            data-toggle="modal"
                                                            data-target="#exampleModal"
                                                            style={{ minWidth: "140px", fontSize: "13px" }}
                                                            onClick={() => handleAnBL(item.id)}
                                                        >
                                                            Ẩn bình luận
                                                        </button>
                                                        :
                                                        <button
                                                            class="btn btn-success"
                                                            data-toggle="modal"
                                                            data-target="#exampleModal"
                                                            style={{ minWidth: "140px", fontSize: "13px" }}
                                                            onClick={() => handleHienBL(item.id)}
                                                        >
                                                            Hiện bình luận
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

export default AdminBinhLuan;
