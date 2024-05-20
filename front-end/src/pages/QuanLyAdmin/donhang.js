import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import axios from '../../axios';
import "../../../src/assets/css/sb-admin-2.min.css";
import { Layout, Menu } from 'antd'
import { AreaChartOutlined } from '@ant-design/icons'
import imglogo from "../../assets/logo-1.png"
import moment from "moment";
import Modal from 'react-bootstrap/Modal';
const { Sider } = Layout;

function AdminDonHang(props) {

    const id = localStorage.getItem("id_user")
    const navigate = useNavigate();

    const [dataUser, setDataUser] = useState([])
    const [dataDonHang, setdataDonHang] = useState([])
    const [dataDonHangThanhCong, setdataDonHangThanhCong] = useState([])
    const [openProfile, setOpenProfile] = useState(false)
    const [show, setShow] = useState(false);
    const [dataDonHangChiTiet, setDataDonHangChiTiet] = useState([]);

    let tong = 0;
    // const mappedArray = dataDonHangChiTiet.map((item, i) => {
    //     tong += item.thanhtien
    // })

    const NextStatus = async (trangthai, id) => {
        axios.post(`/nextstatusdh`, {
            trangthai: trangthai,
            id: id
        })
            .then((response) => {
                console.log(response.data)
                window.location.reload()
            })
            .catch((error) => {
                console.error('error fetching data :', error);
            })
    };

    // const BackStatus = async (trangthai, id) => {
    //     axios.post(`/backstatusdh`, {
    //         trangthai: trangthai,
    //         id: id
    //     })
    //         .then((response) => {
    //             console.log(response.data)
    //             window.location.reload()
    //         })
    //         .catch((error) => {
    //             console.error('error fetching data :', error);
    //         })
    // };

    const huydonhang = (item) => {
        axios.get(`/xoadonhang?id=${item}}`)
            .then((response) => {
                return response.data
            })
            .catch((error) => {
                console.error('error fetching data :', error);
            });
        window.location.reload()
    }

    const handleShow = async (e) => {
        setShow(true)
        // localStorage.setItem("idCartDetail", e.currentTarget.id)
        axios.get(`/detaildonhang?data=${e.currentTarget.id}`)
            .then((response) => {
                setDataDonHangChiTiet(response.data);
                console.log(dataDonHangChiTiet)
            })
            .catch((error) => {
                console.error('error fetching data :', error);
            });
    };
    useEffect(() => {
        axios.get(`/userdetail/${id}`)
            .then((response) => {
                setDataUser(response.data);
                // console.log(dataUser, "data user")
            })
            .catch((error) => {
                console.error('error fetching data :', error);
            });
        axios.get(`/AdminDonHang`)
            .then((response) => {
                setdataDonHang(response.data);
                // console.log(dataUser, "data user")
            })
            .catch((error) => {
                console.error('error fetching data :', error);
            });
        axios.get(`/AdminDonHangThanhCong`)
            .then((response) => {
                setdataDonHangThanhCong(response.data);
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
                                    <thead style={{ fontSize: "13px" }}>
                                        <tr>
                                            <th>Id</th>
                                            <th>Tên người nhận</th>
                                            <th style={{ minWidth: "120px" }}>Số điện thoại</th>
                                            <th>Địa chỉ</th>
                                            <th>Tổng tiền</th>
                                            <th style={{ minWidth: "110px" }}>PTTT</th>
                                            <th>Ngày đặt</th>
                                            <th>Ghi chú</th>
                                            <th>Trạng thái</th>
                                            <th>Hành động</th>
                                        </tr>
                                    </thead>
                                    <tbody style={{ fontSize: "13px" }}>
                                        {dataDonHang.map((item, i) => (
                                            <tr>
                                                <td>{item.id}</td>
                                                <td>{item.ten_nguoi_nhan}</td>
                                                <td>{item.sdt_nguoi_nhan}</td>
                                                <td>{item.diachi}</td>
                                                <td>{item.tongtien.toLocaleString('vi', { style: 'currency', currency: 'VND' })}</td>
                                                <td>{item.phuongthucthanhtoan === 0 ? "Tiền mặt" : "Chuyển khoản"}</td>
                                                <td>{moment(item.ngaydat).format('DD/MM/YYYY')}</td>
                                                <td>{item.ghichu}</td>
                                                <td>{item.trangthai === 0
                                                    ? "Chờ xác nhận"
                                                    : item.trangthai === 1
                                                        ? "Đã xác nhận"
                                                        : item.trangthai === 2
                                                            ? "Đang chuẩn bị hàng"
                                                            : item.trangthai === 3
                                                                ? "Đang giao hàng"
                                                                : "thành công"}</td>
                                                <td style={{ textAlign: "center", maxWidth: "154px", }}>
                                                    <button
                                                        class="btn btn-info"
                                                        data-toggle="modal"
                                                        data-target="#exampleModal"
                                                        style={{ minWidth: "140px", fontSize: "13px" }}
                                                        id={item.id} onClick={handleShow}
                                                    >
                                                        Xem đơn
                                                    </button>
                                                    <button
                                                        type="button"
                                                        class="btn btn-success"
                                                        style={{ minWidth: "140px", fontSize: "13px" }}
                                                        // onClick={NextStatus}
                                                        onClick={() => NextStatus(item.trangthai, item.id)}
                                                    >
                                                        {item.trangthai === 0
                                                            ? "Xác nhận đơn"
                                                            : item.trangthai === 1
                                                                ? "Đang chuẩn bị"
                                                                : item.trangthai === 2
                                                                    ? "Đang giao"
                                                                    : "Giao thành công"}
                                                    </button>
                                                    {/* <button
                                                        class="btn btn-danger"
                                                        data-toggle="modal"
                                                        data-target="#logoutModal"
                                                        style={{ minWidth: "100px", fontSize: "13px" }}
                                                        onClick={() => BackStatus(item.trangthai, item.id)}
                                                    >
                                                        Hoàn tác
                                                    </button> */}
                                                    <button
                                                        class="btn btn-danger"
                                                        data-toggle="modal"
                                                        data-target="#logoutModal"
                                                        style={{ minWidth: "140px", fontSize: "13px" }}
                                                        onClick={() => huydonhang(item.id)}
                                                    >
                                                        Hủy đơn
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="container-fluid">
                        <div class="d-sm-flex align-items-center justify-content-between mb-4">
                            <h1 class="h3 mb-0 text-gray-800">Đơn đã hoàn thành</h1>
                        </div>
                        <div class="card shadow mb-4">
                            <div class="card-body">
                                <table
                                    class="table table-bordered"
                                    id="dataTable"
                                    width="100%"
                                    cellspacing="0"
                                    style={{ fontSize: "13px" }}
                                >
                                    <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th>Tên người nhận</th>
                                            <th style={{ minWidth: "120px" }}>Số điện thoại</th>
                                            <th>Địa chỉ</th>
                                            <th>Tổng tiền</th>
                                            <th style={{ minWidth: "110px" }}>PTTT</th>
                                            <th>Ngày đặt</th>
                                            <th>Ghi chú</th>
                                            <th>Trạng thái</th>
                                            <th>Hành động</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {dataDonHangThanhCong.map((item, i) => (
                                            <tr>
                                                <td>{item.id}</td>
                                                <td>{item.ten_nguoi_nhan}</td>
                                                <td>{item.sdt_nguoi_nhan}</td>
                                                <td>{item.diachi}</td>
                                                <td>{item.tongtien.toLocaleString('vi', { style: 'currency', currency: 'VND' })}</td>
                                                <td>{item.phuongthucthanhtoan === 0 ? "Tiền mặt" : "Chuyển khoản"}</td>
                                                <td>{moment(item.ngaydat).format('DD/MM/YYYY')}</td>
                                                <td>{item.ghichu}</td>
                                                <td>{item.trangthai === 0
                                                    ? "Chờ xác nhận"
                                                    : item.trangthai === 1
                                                        ? "Đã xác nhận"
                                                        : item.trangthai === 2
                                                            ? "Đang chuẩn bị hàng"
                                                            : item.trangthai === 3
                                                                ? "Đang giao hàng"
                                                                : "thành công"}</td>
                                                <td style={{ textAlign: "center", maxWidth: "154px", }}>
                                                    <button
                                                        class="btn btn-info"
                                                        data-toggle="modal"
                                                        data-target="#exampleModal"
                                                        style={{ minWidth: "140px", fontSize: "13px" }}
                                                        id={item.id} onClick={handleShow}
                                                    >
                                                        Xem đơn
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                    <td>
                                    </td>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-xl"
                aria-labelledby="example-custom-modal-styling-title"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        Chi tiết đơn hàng
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Hình ảnh</th>
                                <th>Tên sản phẩm</th>
                                <th>Mã sản phẩm</th>
                                <th>Giá</th>
                                <th>Số lượng</th>
                                <th>Thành tiền</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dataDonHangChiTiet.map((item, i) => (
                                <tr>
                                    <td>{i + 1}</td>
                                    <td><img src={item.hinhanh} alt="" width="100px" /></td>
                                    <td>{item.ten}</td>
                                    <td>{item.id_sp}</td>
                                    <td>{item.gia.toLocaleString('vi', { style: 'currency', currency: 'VND' })}</td>
                                    <td>{item.soluong}</td>
                                    <td>{item.thanhtien.toLocaleString('vi', { style: 'currency', currency: 'VND' })}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div style={{ display: "flex", justifyContent: "flex-end" }}>Tổng tiền: {tong.toLocaleString('vi', { style: 'currency', currency: 'VND' })}</div>
                </Modal.Body>
            </Modal>
        </div >
    );
}

export default AdminDonHang;
