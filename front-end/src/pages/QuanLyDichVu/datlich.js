import React, { useEffect, useState } from "react";
// import Dropdown from 'react-bootstrap/Dropdown';
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "../../../src/assets/css/sb-admin-2.min.css";
import { Layout, Menu } from 'antd'
import { AreaChartOutlined, BarsOutlined } from '@ant-design/icons'
import imglogo from "../../assets/logo-1.png"
import Dropdown from 'react-bootstrap/Dropdown';
const { Header, Sider } = Layout;

function NhanVienDichVuDatLich(props) {

    const id = localStorage.getItem("id_user")
    const navigate = useNavigate();

    const [dataUser, setDataUser] = useState([])
    const [dataDatLich, setdataDatLich] = useState([])
    const [dataNhanVien, setdataNhanVien] = useState([])
    const [selectNhanVien, setSelectNhanVien] = useState([])
    const [openProfile, setOpenProfile] = useState(false)

    var chinhanh = localStorage.getItem("chinhanh")
    var idNhanVien = localStorage.getItem("id_user")


    const NextStatus = async (trangthai, id) => {
        axios.post(`http://localhost:8000/nextstatus`, {
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

    const BackStatus = async (trangthai, id) => {
        axios.post(`http://localhost:8000/backstatus`, {
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

    useEffect(() => {
        axios.get(`http://localhost:8000/userdetail/${id}`)
            .then((response) => {
                setDataUser(response.data);
            })
            .catch((error) => {
                console.error('error fetching data :', error);
            });
        axios.get(`http://localhost:8000/NhanVien/DatLich?chinhanh=${chinhanh}&&nhanvien=${idNhanVien}`)
            .then((response) => {
                setdataDatLich(response.data);
            })
            .catch((error) => {
                console.error('error fetching data :', error);
            });
        // axios.get(`http://localhost:8000//NhanVien/DichVu?chinhanh=${chinhanh}`)
        //     .then((response) => {
        //         setdataNhanVien(response.data);
        //     })
        //     .catch((error) => {
        //         console.error('error fetching data :', error);
        //     });
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
                    <Menu mode="inline" style={{ height: "100vh", display: "flex", flexDirection: "column", gap: "15px", fontSize: "1rem", position: "relative" }}>
                        {/* <Menu mode="inline" theme="dark"> */}
                        <div className="logo">
                            <div className="logo-icon" style={{ margin: "15px 20px" }}>
                                <a href="/NhanVienDichVu/index"><img src={imglogo} alt="" /></a>
                            </div>
                        </div>
                        <Menu.SubMenu key='datlich' title="Đặt lịch">
                            <Menu.Item key='datlich-2'><a href="/NhanVienDichVu/datlich">Danh sách</a></Menu.Item>
                        </Menu.SubMenu>
                        <Menu.Item key="Thống kê" icon={<AreaChartOutlined />}>Thống kê</Menu.Item>
                    </Menu>
                </Sider>
            </Layout>
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
                                    <li>Profile</li>
                                    <li>Setting</li>
                                    <li><span onClick={() => LogoutSubmit()}>Logout</span></li>
                                </ul>
                            </div>}
                        </ul>
                    </nav>
                    <div class="container-fluid">
                        <div class="d-sm-flex align-items-center justify-content-between mb-4">
                            <h1 class="h3 mb-0 text-gray-800">Lịch hẹn của bạn</h1>
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
                                            <th>Người đặt</th>
                                            <th>Cơ sở</th>
                                            <th>Dịch vụ</th>
                                            <th width="18%">Nhân viên</th>
                                            <th>tổng tiền</th>
                                            <th>Trạng thái</th>
                                            <th>Hành dộng</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {dataDatLich.map((item, i) => (
                                            <tr>
                                                <td>{item.id}</td>
                                                <td>{item.hoten}</td>
                                                <td>{item.id_chinhanh === 2
                                                    ? "Tòa nhà QTSC9 (toà T), đường Tô Ký, phường Tân Chánh Hiệp, quận 12, TP HCM."
                                                    : item.id_chinhanh === 3
                                                        ? "778/B1 Nguyễn Kiệm, phường 04, quận Phú Nhuận, TP HCM"
                                                        : ""}
                                                </td>
                                                <td>{item.id_dichvu === 1
                                                    ? "Dịch vụ tắm thú cưng"
                                                    : item.id_dichvu === 2
                                                        ? "Cắt tỉa lông"
                                                        : item.id_dichvu === 3
                                                            ? "khám chữa bệnh tại cơ sở"
                                                            : "giữ, chăm sóc hộ chủ"}
                                                </td>
                                                <td>
                                                    {item.nhanvien === 10
                                                        ? "Nguyễn Thị Quế Anh"
                                                        : item.nhanvien === 11
                                                            ? "Quàng Thị Trà My"
                                                            : item.nhanvien === 12
                                                                ? "Ngô Tấn Biên"
                                                                : item.nhanvien === 13
                                                                    ? "Hồ Nhất Huy"
                                                                    : "Trần Anh Vũ"}
                                                </td>
                                                <td>{item.tongtien.toLocaleString('vi', { style: 'currency', currency: 'VND' })}</td>
                                                <td>{item.trangthai === 0
                                                    ? "Chờ xác nhận"
                                                    : item.trangthai === 1
                                                        ? "Đã xác nhận"
                                                        : item.trangthai === 2
                                                            ? "Đang thực hiện"
                                                            : "Đã hoàn thành"}
                                                </td>
                                                <td>
                                                    <button
                                                        type="button"
                                                        class="btn btn-success"
                                                        // onClick={NextStatus}
                                                        onClick={() => NextStatus(item.trangthai, item.id)}
                                                    >
                                                        Xác nhận
                                                    </button>
                                                    <button
                                                        class="btn btn-info"
                                                        data-toggle="modal"
                                                        data-target="#exampleModal"
                                                    >
                                                        Xem
                                                    </button>
                                                    <button
                                                        class="btn btn-danger"
                                                        data-toggle="modal"
                                                        data-target="#logoutModal"
                                                        onClick={() => BackStatus(item.trangthai, item.id)}
                                                    >
                                                        Hoàn tác
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
        </div >
    );
}

export default NhanVienDichVuDatLich;
