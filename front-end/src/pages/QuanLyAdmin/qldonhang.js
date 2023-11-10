import React, { useEffect, useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import { Navigate, useParams } from "react-router-dom";
import axios from "axios";

import "../../../src/assets/css/sb-admin-2.min.css";

function AdminDonHang(props) {

    const id = localStorage.getItem("id_user")

    const [dataUser, setDataUser] = useState([])

    const handleNavigate = async () => {
        Navigate("/")
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
    }, []);
    return (
        <body id="page-top">
            <div id="wrapper">
                <ul
                    class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
                    id="accordionSidebar"
                >
                    <a
                        class="sidebar-brand d-flex align-items-center justify-content-center"
                        href="index.html"
                    >
                        <div class="sidebar-brand-icon rotate-n-15">
                            <i class="fas fa-laugh-wink"></i>
                        </div>
                        <div class="sidebar-brand-text mx-3">DG House</div>
                    </a>
                    <hr class="sidebar-divider my-0" />
                    <li class="nav-item active">
                        <a class="nav-link" href="index.html">
                            <i class="fas fa-fw fa-tachometer-alt"></i>
                            <span>Trang chủ</span>
                        </a>
                    </li>
                    <div class="sidebar-heading">Interface</div>
                    <li class="nav-item">
                        <a
                            class="nav-link collapsed"
                            href="#"
                            data-toggle="collapse"
                            data-target="#danhmuc"
                            aria-expanded="true"
                            aria-controls="danhmuc"
                        >
                            <span>Danh mục</span>
                        </a>
                        <div
                            id="danhmuc"
                            class="collapse"
                            aria-labelledby="headingTwo"
                            data-parent="#accordionSidebar"
                        >
                            <div class="bg-white py-2 collapse-inner rounded">
                                <a class="collapse-item" href="admin-qldm.html">
                                    Danh sách
                                </a>
                                <a class="collapse-item" href="#">
                                    Thêm mới
                                </a>
                            </div>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a
                            class="nav-link collapsed"
                            href="#"
                            data-toggle="collapse"
                            data-target="#thucung"
                            aria-expanded="true"
                            aria-controls="thucung"
                        >
                            <span>Thú cưng</span>
                        </a>
                        <div
                            id="thucung"
                            class="collapse"
                            aria-labelledby="headingTwo"
                            data-parent="#accordionSidebar"
                        >
                            <div class="bg-white py-2 collapse-inner rounded">
                                <a class="collapse-item" href="admin-qltc.html">
                                    Danh sách
                                </a>
                                <a class="collapse-item" href="#">
                                    Thêm mới
                                </a>
                            </div>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a
                            class="nav-link collapsed"
                            href="#"
                            data-toggle="collapse"
                            data-target="#sanpham"
                            aria-expanded="true"
                            aria-controls="sanpham"
                        >
                            <span>Sản phẩm</span>
                        </a>
                        <div
                            id="sanpham"
                            class="collapse"
                            aria-labelledby="headingTwo"
                            data-parent="#accordionSidebar"
                        >
                            <div class="bg-white py-2 collapse-inner rounded">
                                <a class="collapse-item" href="admin-qlsp.html">
                                    Danh sách
                                </a>
                                <a class="collapse-item" href="themmoi.html">
                                    Thêm mới
                                </a>
                            </div>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a
                            class="nav-link collapsed"
                            href="#"
                            data-toggle="collapse"
                            data-target="#binhluan"
                            aria-expanded="true"
                            aria-controls="binhluan"
                        >
                            <span>Bình luận</span>
                        </a>
                        <div
                            id="binhluan"
                            class="collapse"
                            aria-labelledby="headingTwo"
                            data-parent="#accordionSidebar"
                        >
                            <div class="bg-white py-2 collapse-inner rounded">
                                <a class="collapse-item" href="#">
                                    Danh sách
                                </a>
                                <a class="collapse-item" href="#">
                                    Thêm mới
                                </a>
                            </div>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a
                            class="nav-link collapsed"
                            href="#"
                            data-toggle="collapse"
                            data-target="#donhang"
                            aria-expanded="true"
                            aria-controls="donhang"
                        >
                            <span>Đơn hàng</span>
                        </a>
                        <div
                            id="donhang"
                            class="collapse"
                            aria-labelledby="headingTwo"
                            data-parent="#accordionSidebar"
                        >
                            <div class="bg-white py-2 collapse-inner rounded">
                                <a class="collapse-item" href="admin-qldh.html">
                                    Danh sách
                                </a>
                                <a class="collapse-item" href="#">
                                    Thêm mới
                                </a>
                            </div>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a
                            class="nav-link collapsed"
                            href="#"
                            data-toggle="collapse"
                            data-target="#nguoidung"
                            aria-expanded="true"
                            aria-controls="nguoidung"
                        >
                            <span>Người dùng</span>
                        </a>
                        <div
                            id="nguoidung"
                            class="collapse"
                            aria-labelledby="headingTwo"
                            data-parent="#accordionSidebar"
                        >
                            <div class="bg-white py-2 collapse-inner rounded">
                                <a class="collapse-item" href="admin-qlnv.html">
                                    Danh sách
                                </a>
                                <a class="collapse-item" href="#">
                                    Thêm mới
                                </a>
                            </div>
                        </div>
                    </li>

                    <div class="text-center d-none d-md-inline">
                        <button class="rounded-circle border-0" id="sidebarToggle"></button>
                    </div>
                </ul>
                <div id="content-wrapper" class="d-flex flex-column">
                    <div id="content">
                        <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                            <form class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                                <div class="input-group">
                                    <input
                                        type="text"
                                        class="form-control bg-light border-0 small"
                                        placeholder="Search for..."
                                        aria-label="Search"
                                        aria-describedby="basic-addon2"
                                    />
                                    <div class="input-group-append">
                                        <button class="btn btn-primary" type="button">
                                            <i class="fas fa-search fa-sm"></i>
                                        </button>
                                    </div>
                                </div>
                            </form>
                            <ul class="navbar-nav ml-auto">
                                <li class="nav-item dropdown no-arrow d-sm-none">
                                    <a
                                        class="nav-link dropdown-toggle"
                                        href="#"
                                        id="searchDropdown"
                                        role="button"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        <i class="fas fa-search fa-fw"></i>
                                    </a>
                                    <div
                                        class="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                                        aria-labelledby="searchDropdown"
                                    >
                                        <form class="form-inline mr-auto w-100 navbar-search">
                                            <div class="input-group">
                                                <input
                                                    type="text"
                                                    class="form-control bg-light border-0 small"
                                                    placeholder="Search for..."
                                                    aria-label="Search"
                                                    aria-describedby="basic-addon2"
                                                />
                                                <div class="input-group-append">
                                                    <button class="btn btn-primary" type="button">
                                                        <i class="fas fa-search fa-sm"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </li>
                                <li class="nav-item dropdown no-arrow mx-1">
                                    <a
                                        class="nav-link dropdown-toggle"
                                        href="#"
                                        id="alertsDropdown"
                                        role="button"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        <i class="fas fa-bell fa-fw"></i>
                                        <span class="badge badge-danger badge-counter">3+</span>
                                    </a>
                                    <div
                                        class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                        aria-labelledby="alertsDropdown"
                                    >
                                        <h6 class="dropdown-header">Alerts Center</h6>
                                        <a class="dropdown-item d-flex align-items-center" href="#">
                                            <div class="mr-3">
                                                <div class="icon-circle bg-primary">
                                                    <i class="fas fa-file-alt text-white"></i>
                                                </div>
                                            </div>
                                            <div>
                                                <div class="small text-gray-500">December 12, 2019</div>
                                                <span class="font-weight-bold">
                                                    A new monthly report is ready to download!
                                                </span>
                                            </div>
                                        </a>
                                        <a class="dropdown-item d-flex align-items-center" href="#">
                                            <div class="mr-3">
                                                <div class="icon-circle bg-success">
                                                    <i class="fas fa-donate text-white"></i>
                                                </div>
                                            </div>
                                            <div>
                                                <div class="small text-gray-500">December 7, 2019</div>
                                                $290.29 has been deposited into your account!
                                            </div>
                                        </a>
                                        <a class="dropdown-item d-flex align-items-center" href="#">
                                            <div class="mr-3">
                                                <div class="icon-circle bg-warning">
                                                    <i class="fas fa-exclamation-triangle text-white"></i>
                                                </div>
                                            </div>
                                            <div>
                                                <div class="small text-gray-500">December 2, 2019</div>
                                                Spending Alert: We've noticed unusually high spending
                                                for your account.
                                            </div>
                                        </a>
                                        <a
                                            class="dropdown-item text-center small text-gray-500"
                                            href="#"
                                        >
                                            Show All Alerts
                                        </a>
                                    </div>
                                </li>
                                <li class="nav-item dropdown no-arrow mx-1">
                                    <a
                                        class="nav-link dropdown-toggle"
                                        href="#"
                                        id="messagesDropdown"
                                        role="button"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        <i class="fas fa-envelope fa-fw"></i>
                                        <span class="badge badge-danger badge-counter">7</span>
                                    </a>
                                    <div
                                        class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                        aria-labelledby="messagesDropdown"
                                    >
                                        <h6 class="dropdown-header">Message Center</h6>
                                        <a class="dropdown-item d-flex align-items-center" href="#">
                                            <div class="dropdown-list-image mr-3">
                                                <img
                                                    class="rounded-circle"
                                                    src="img/undraw_profile_1.svg"
                                                    alt="..."
                                                />
                                                <div class="status-indicator bg-success"></div>
                                            </div>
                                            <div class="font-weight-bold">
                                                <div class="text-truncate">
                                                    Hi there! I am wondering if you can help me with a
                                                    problem I've been having.
                                                </div>
                                                <div class="small text-gray-500">
                                                    Emily Fowler · 58m
                                                </div>
                                            </div>
                                        </a>
                                        <a class="dropdown-item d-flex align-items-center" href="#">
                                            <div class="dropdown-list-image mr-3">
                                                <img
                                                    class="rounded-circle"
                                                    src="img/undraw_profile_2.svg"
                                                    alt="..."
                                                />
                                                <div class="status-indicator"></div>
                                            </div>
                                            <div>
                                                <div class="text-truncate">
                                                    I have the photos that you ordered last month, how
                                                    would you like them sent to you?
                                                </div>
                                                <div class="small text-gray-500">Jae Chun · 1d</div>
                                            </div>
                                        </a>
                                        <a class="dropdown-item d-flex align-items-center" href="#">
                                            <div class="dropdown-list-image mr-3">
                                                <img
                                                    class="rounded-circle"
                                                    src="img/undraw_profile_3.svg"
                                                    alt="..."
                                                />
                                                <div class="status-indicator bg-warning"></div>
                                            </div>
                                            <div>
                                                <div class="text-truncate">
                                                    Last month's report looks great, I am very happy with
                                                    the progress so far, keep up the good work!
                                                </div>
                                                <div class="small text-gray-500">
                                                    Morgan Alvarez · 2d
                                                </div>
                                            </div>
                                        </a>
                                        <a class="dropdown-item d-flex align-items-center" href="#">
                                            <div class="dropdown-list-image mr-3">
                                                <img
                                                    class="rounded-circle"
                                                    src="https://source.unsplash.com/Mv9hjnEUHR4/60x60"
                                                    alt="..."
                                                />
                                                <div class="status-indicator bg-success"></div>
                                            </div>
                                            <div>
                                                <div class="text-truncate">
                                                    Am I a good boy? The reason I ask is because someone
                                                    told me that people say this to all dogs, even if they
                                                    aren't good...
                                                </div>
                                                <div class="small text-gray-500">
                                                    Chicken the Dog · 2w
                                                </div>
                                            </div>
                                        </a>
                                        <a
                                            class="dropdown-item text-center small text-gray-500"
                                            href="#"
                                        >
                                            Read More Messages
                                        </a>
                                    </div>
                                </li>

                                <div class="topbar-divider d-none d-sm-block"></div>
                                {/* <li class="nav-item dropdown no-arrow"> */}
                                {/* <a
                                        class="nav-link dropdown-toggle"
                                        href="#"
                                        id="userDropdown"
                                        role="button"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        <span class="mr-2 d-none d-lg-inline text-gray-600 small">
                                            Bảo Long
                                        </span>
                                        <img
                                            class="img-profile rounded-circle"
                                            src="img/undraw_profile.svg"
                                        />
                                    </a>
                                    <div
                                        class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                        aria-labelledby="userDropdown"
                                    >
                                        <a class="dropdown-item" href="#">
                                            <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                                            Profile
                                        </a>
                                        <a class="dropdown-item" href="#">
                                            <i class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                                            Settings
                                        </a>
                                        <a class="dropdown-item" href="#">
                                            <i class="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                                            Activity Log
                                        </a>
                                        <div class="dropdown-divider"></div>
                                        <a
                                            class="dropdown-item"
                                            href="#"
                                            data-toggle="modal"
                                            data-target="#logoutModal"
                                        >
                                            <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                            Logout
                                        </a>
                                    </div> */}
                                {dataUser.map((item, i) => (
                                    <li class="nav-item dropdown no-arrow" style={{}}>
                                        <Dropdown>
                                            <span class="d-none d-lg-inline text-gray-1000 small">
                                                <Dropdown.Toggle id="dropdown-basic">
                                                    {item.hoTen}
                                                </Dropdown.Toggle>
                                            </span>
                                            <Dropdown.Menu>
                                                <Dropdown.Item onClick={() => handleNavigate}>Trang chủ</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </li>
                                ))}

                            </ul>
                        </nav>
                        <div class="container-fluid">
                            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                                <h1 class="h3 mb-0 text-gray-800">Danh sách đơn hàng</h1>
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
                                                <th>Tên người nhận</th>
                                                <th>Nơi nhận</th>
                                                <th>tổng tiền</th>
                                                <th>Nhân viên</th>
                                                <th>Hành dộng</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>Huy Hồ Hồ Hồ</td>
                                                <td>100 Điện Biên Phủ</td>
                                                <td>600.000đ</td>
                                                <td>Vũ Luân</td>
                                                <td>
                                                    <button
                                                        type="button"
                                                        class="btn btn-success btn-circle"
                                                    >
                                                        <i class="fas fa-check"></i>
                                                    </button>
                                                    <button
                                                        class="btn btn-danger btn-circle"
                                                        data-toggle="modal"
                                                        data-target="#logoutModal"
                                                    >
                                                        <i class="fas fa-trash"></i>
                                                    </button>
                                                    <button
                                                        class="btn btn-info btn-circle"
                                                        data-toggle="modal"
                                                        data-target="#exampleModal"
                                                    >
                                                        <i class="fas fa-info-circle"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a class="scroll-to-top rounded" href="#page-top">
                    <i class="fas fa-angle-up"></i>
                </a>

                <div
                    class="modal fade"
                    id="exampleModal"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                >
                    <div class="modal-dialog modal-xl">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">
                                    Chi tiết hóa đơn mã số 1
                                </h5>
                                <button
                                    class="close"
                                    type="button"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                >
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <div class="card shadow mb-4">
                                    <div class="card-body">
                                        <div class="card-header py-3">
                                            <h6 class="m-0 font-weight-bold text-primary">
                                                Thú cưng
                                            </h6>
                                        </div>
                                        <table
                                            class="table table-bordered"
                                            id="dataTable"
                                            width="100%"
                                            cellspacing="0"
                                        >
                                            <thead>
                                                <tr>
                                                    <th style={{ width: "10%" }}>Id</th>
                                                    <th style={{ width: "45%" }}>Thú cưng</th>
                                                    <th style={{ width: "15%" }}>Giá</th>
                                                    <th style={{ width: "15%" }}>Số lượng</th>
                                                    <th style={{ width: "15%" }}>Thành tiền</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>Chó Alaska - Sen</td>
                                                    <td>75.000.000đ</td>
                                                    <td>1</td>
                                                    <td>75.000.000đ</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <div class="card-header py-3">
                                            <h6 class="m-0 font-weight-bold text-primary">
                                                Sản phẩm
                                            </h6>
                                        </div>
                                        <table
                                            class="table table-bordered"
                                            id="dataTable"
                                            width="100%"
                                            cellspacing="0"
                                        >
                                            <thead>
                                                <tr>
                                                    <th style={{ width: "10%" }}>Id</th>
                                                    <th style={{ width: "45%" }}>Sản phẩm</th>
                                                    <th style={{ width: "15%" }}>Giá</th>
                                                    <th style={{ width: "15%" }}>Số lượng</th>
                                                    <th style={{ width: "15%" }}>Thành tiền</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>Hạt chó Royal Canin Poodle Puppy - 1.5Kg</td>
                                                    <td>466.000</td>
                                                    <td>2</td>
                                                    <td>932.000đ</td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>Bánh bích quy hỗn hợp cho chó | túi 220g</td>
                                                    <td>75.000</td>
                                                    <td>1</td>
                                                    <td>75.000đ</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button
                                    type="button"
                                    class="btn btn-secondary"
                                    data-dismiss="modal"
                                >
                                    Close
                                </button>
                                <button type="button" class="btn btn-primary">
                                    Save changes
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    class="modal fade"
                    id="logoutModal"
                    tabindex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                >
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">
                                    Ready to Leave?
                                </h5>
                                <button
                                    class="close"
                                    type="button"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                >
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                Select "Logout" below if you are ready to end your current
                                session.
                            </div>
                            <div class="modal-footer">
                                <button
                                    class="btn btn-secondary"
                                    type="button"
                                    data-dismiss="modal"
                                >
                                    Cancel
                                </button>
                                <a class="btn btn-primary" href="login.html">
                                    Logout
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    );
}

export default AdminDonHang;
