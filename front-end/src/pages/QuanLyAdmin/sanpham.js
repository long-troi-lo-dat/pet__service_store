import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import axios from '../../axios';
import "../../../src/assets/css/sb-admin-2.min.css";
import { Layout, Menu } from 'antd'
import { AreaChartOutlined } from '@ant-design/icons'
import imglogo from "../../assets/logo-1.png"
import { MDBIcon } from 'mdb-react-ui-kit';
import moment from "moment";
const { Sider } = Layout;

function AdminSanPham(props) {

    const id = localStorage.getItem("id_user")
    const navigate = useNavigate();

    const [dataUser, setDataUser] = useState([])
    const [dataSanPham, setDataSanPham] = useState([])
    const [openProfile, setOpenProfile] = useState(false)
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [searchInput, setSearchInput] = useState('');


    const phanloaidanhmuc = (category) => {
        axios.get(`/employee/shop/${category}`)
            .then((response) => {
                setDataSanPham(response.data)
                console.log(dataSanPham)
            })
            .catch((error) => {
                console.error('error fetching data :', error);
            });
    }

    const filterProducts = (value) => {
        const filtered = dataSanPham.filter((product) => {
            return value && product.ten && product.ten.toLowerCase().includes(value);
        });
        setFilteredProducts(filtered);
    };

    const handleChange = (event) => {
        const value = event.target.value.toLowerCase();
        setSearchInput(value);
        filterProducts(value);
    };


    const handleAnSp = (id) => {
        axios.post(`/ansanpham/${id}`)
            .then((response) => {
                console.log("ẩn thành công")
                window.location.reload();
            })
            .catch((error) => {
                console.error('error fetching data :', error);
            });
    }
    const handleHienSp = (id) => {
        axios.post(`/hiensanpham/${id}`)
            .then((response) => {
                console.log("hiện thành công")
                window.location.reload();
            })
            .catch((error) => {
                console.error('error fetching data :', error);
            });
    }

    useEffect(() => {
        axios.get(`/userdetail/${id}`)
            .then((response) => {
                setDataUser(response.data);
                // console.log(dataUser, "data user")
            })
            .catch((error) => {
                console.error('error fetching data :', error);
            });
        axios.get(`/AdminSanPham`)
            .then((response) => {
                setDataSanPham(response.data);
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
                            <h1 class="h3 mb-0 text-gray-800">Quản lý sản phẩm</h1>
                        </div>

                        <div class="card shadow mb-4">
                            <div class="card-body">
                                <div class="d-sm-flex align-items-center justify-content-between mb-4">
                                    {/* <h1 class="h3 mb-0 text-gray-800">Danh sách đơn hàng</h1> */}
                                    <button class="btn btn-primary" onClick={() => { phanloaidanhmuc(0) }}>Tất cả</button>
                                    <button class="btn btn-primary" onClick={() => { phanloaidanhmuc(1) }}>Đồ chơi</button>
                                    <button class="btn btn-primary" onClick={() => { phanloaidanhmuc(2) }}>Thức ăn</button>
                                    <button class="btn btn-primary" onClick={() => { phanloaidanhmuc(3) }}>Phụ kiện thú cưng</button>
                                    <button class="btn btn-primary" onClick={() => { phanloaidanhmuc(4) }}>Thực phẩm chức năng</button>
                                    <button class="btn btn-primary" onClick={() => { phanloaidanhmuc(5) }}>Sản phẩm điều trị</button>
                                    <button class="btn btn-primary" onClick={() => { phanloaidanhmuc(6) }}>Chó</button>
                                </div>
                                <div class="d-flex align-items-center justify-content-end mb-4 border" style={{ marginLeft: "44%", padding: "5px" }}>
                                    <span style={{ marginRight: "5px" }}>Tìm kiếm sản phẩm ở đây nè</span>
                                    <MDBIcon fas icon="hand-point-right" style={{ fontSize: "30px", marginRight: "5px" }} />
                                    <form class="form-inline mr-auto navbar-search">
                                        <div class="input-group">
                                            <input
                                                type="text"
                                                class="form-control bg-light border-0 small"
                                                placeholder="Tìm kiếm sản phẩm . . ."
                                                aria-label="Search"
                                                aria-describedby="basic-addon2"
                                                value={searchInput}
                                                onChange={handleChange}
                                                id="searchInput"
                                                style={{
                                                    width: "400px"
                                                }}
                                            />
                                        </div>
                                    </form>
                                </div>
                                {filteredProducts.length > 0 ? (
                                    // Render filtered products
                                    <table
                                        class="table table-bordered"
                                        id="dataTable"
                                        width="100%"
                                        cellspacing="0"
                                        style={{ fontSize: "15px" }}
                                    >
                                        <thead>
                                            <tr>
                                                <th>Id</th>
                                                <th>Img</th>
                                                <th>Tên</th>
                                                <th>Giá</th>
                                                <th>Ngày thêm sp</th>
                                                <th>SL còn</th>
                                                <th>Mô tả</th>
                                                <th>Ẩn / Hiện</th>
                                                <th>Hành động</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {filteredProducts.map((item, i) => (
                                                <tr key={i}>
                                                    <td>{item.id_sp}</td>
                                                    <td><img src={item.hinhanh} alt="" width="70px" /></td>
                                                    <td>{item.ten}</td>
                                                    <td>{item.gia.toLocaleString('vi', { style: 'currency', currency: 'VND' })}</td>
                                                    <td>{moment(item.ngaythem).format('DD/MM/YYYY')}</td>
                                                    <td>{item.soluong}</td>
                                                    <td>{item.mota}</td>
                                                    <td style={{ textAlign: "center", maxWidth: "154px", }}>
                                                        {item.anhien === 0 ?
                                                            <button
                                                                class="btn btn-danger"
                                                                data-toggle="modal"
                                                                data-target="#exampleModal"
                                                                style={{ minWidth: "140px", fontSize: "13px" }}
                                                                onClick={() => handleAnSp(item.id_sp)}
                                                            >
                                                                Ẩn sản phẩm
                                                            </button>
                                                            :
                                                            <button
                                                                class="btn btn-success"
                                                                data-toggle="modal"
                                                                data-target="#exampleModal"
                                                                style={{ minWidth: "140px", fontSize: "13px" }}
                                                                onClick={() => handleHienSp(item.id_sp)}
                                                            >
                                                                Hiện sản phẩm
                                                            </button>
                                                        }
                                                        <button
                                                            class="btn btn-info"
                                                            data-toggle="modal"
                                                            data-target="#exampleModal"
                                                            style={{ minWidth: "140px", fontSize: "13px" }}
                                                        >
                                                            Sửa sản phẩm
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                ) : (
                                    <table
                                        class="table table-bordered"
                                        id="dataTable"
                                        width="100%"
                                        cellspacing="0"
                                        style={{ fontSize: "15px" }}
                                    >
                                        <thead>
                                            <tr>
                                                <th>Id</th>
                                                <th>Img</th>
                                                <th>Tên</th>
                                                <th>Giá</th>
                                                <th>Ngày thêm sp</th>
                                                <th>SL còn</th>
                                                <th>Mô tả</th>
                                                <th>Ẩn / Hiện</th>
                                                <th>Hành động</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {dataSanPham.map((item, i) => (
                                                <tr>
                                                    <td>{item.id_sp}</td>
                                                    <td><img src={item.hinhanh} alt="" width="70px" /></td>
                                                    <td>{item.ten}</td>
                                                    <td>{item.gia.toLocaleString('vi', { style: 'currency', currency: 'VND' })}</td>
                                                    <td>{moment(item.ngaythem).format('DD/MM/YYYY')}</td>
                                                    <td>{item.soluong}</td>
                                                    <td>{item.mota}</td>
                                                    <td>{item.anhien === 0 ? "Đang hiện" : "Đang ẩn"}</td>
                                                    <td style={{ textAlign: "center", maxWidth: "154px", }}>
                                                        {item.anhien === 0 ?
                                                            <button
                                                                class="btn btn-danger"
                                                                data-toggle="modal"
                                                                data-target="#exampleModal"
                                                                style={{ minWidth: "140px", fontSize: "13px" }}
                                                                onClick={() => handleAnSp(item.id_sp)}
                                                            >
                                                                Ẩn sản phẩm
                                                            </button>
                                                            :
                                                            <button
                                                                class="btn btn-success"
                                                                data-toggle="modal"
                                                                data-target="#exampleModal"
                                                                style={{ minWidth: "140px", fontSize: "13px" }}
                                                                onClick={() => handleHienSp(item.id_sp)}
                                                            >
                                                                Hiện sản phẩm
                                                            </button>
                                                        }
                                                        <button
                                                            class="btn btn-info"
                                                            data-toggle="modal"
                                                            data-target="#exampleModal"
                                                            style={{ minWidth: "140px", fontSize: "13px" }}
                                                        >
                                                            Sửa sản phẩm
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminSanPham;
