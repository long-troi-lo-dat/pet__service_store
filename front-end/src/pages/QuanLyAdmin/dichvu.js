import React, { useEffect, useState } from "react";
// import Dropdown from 'react-bootstrap/Dropdown';
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "../../../src/assets/css/sb-admin-2.min.css";
import { Layout, Menu } from 'antd'
import { AreaChartOutlined, BarsOutlined } from '@ant-design/icons'
import imglogo from "../../assets/logo-1.png"
import Dropdown from 'react-bootstrap/Dropdown';
const { Sider } = Layout;

function AdminDichVu(props) {

    const id = localStorage.getItem("id_user")
    const navigate = useNavigate();

    const [dataUser, setDataUser] = useState([])
    const [dataDichVu, setDataDichVu] = useState([])
    const [openProfile, setOpenProfile] = useState(false)

    const handleNavigate = async () => {
        navigate("/")
        localStorage.setItem("header", 0)
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
        axios.get(`http://localhost:8000/AdminDichVu`)
            .then((response) => {
                setDataDichVu(response.data);
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
                    <div class="container-fluid" style={{ fontSize: "15px" }}>
                        <div class="d-sm-flex align-items-center justify-content-between mb-4">
                            <h1 class="h3 mb-0 text-gray-800">Quản lý dịch vụ</h1>
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
                                            <th>Tên dịch vụ</th>
                                            <th>Giá tiền</th>
                                            <th>Mô tả</th>
                                            <th>Hành dộng</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {dataDichVu.map((item, i) => (
                                            <tr>
                                                <td>{item.id_dv}</td>
                                                <td>{item.ten}</td>
                                                <td>{item.gia.toLocaleString('vi', { style: 'currency', currency: 'VND' })}</td>
                                                <td>{item.mota}</td>
                                                <td style={{ textAlign: "center", maxWidth: "154px", }}>
                                                    <button
                                                        class="btn btn-danger"
                                                        data-toggle="modal"
                                                        data-target="#exampleModal"
                                                        style={{ minWidth: "140px", fontSize: "13px" }}
                                                    >
                                                        Ẩn dịch vụ
                                                    </button>
                                                    <button
                                                        class="btn btn-info"
                                                        data-toggle="modal"
                                                        data-target="#exampleModal"
                                                        style={{ minWidth: "140px", fontSize: "13px" }}
                                                    >
                                                        Sửa dịch vụ
                                                    </button>
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

export default AdminDichVu;
