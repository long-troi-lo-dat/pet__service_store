import React, { useEffect, useState } from "react";
// import Dropdown from 'react-bootstrap/Dropdown';
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "../../../src/assets/css/sb-admin-2.min.css";
import { Layout, Menu } from 'antd'
import { AreaChartOutlined, BarsOutlined } from '@ant-design/icons'
import imglogo from "../../assets/logo-1.png"
import Dropdown from 'react-bootstrap/Dropdown';
import { Modal } from "react-bootstrap";
import moment from "moment";
const { Header, Sider } = Layout;

function QuanLyChiNhanhDatLich(props) {

    const id = localStorage.getItem("id_user")
    const navigate = useNavigate();

    const [dataUser, setDataUser] = useState([])
    const [dataDatLich, setdataDatLich] = useState([])
    const [dataNhanVien, setdataNhanVien] = useState([])
    const [show, setShow] = useState(false);
    const [selectNhanVien, setSelectNhanVien] = useState([])
    const [openProfile, setOpenProfile] = useState(false)
    const [dataCartDetail, setDataCartDetail] = useState([]);
    const [donDaHoanThanh, setDonDaHoanThanh] = useState([]);


    var chinhanh = localStorage.getItem("chinhanh")


    const SelectNV = async (nhanvien, id) => {
        axios.post(`http://localhost:8000/selectnhanvien`, {
            nhanvien: nhanvien,
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

    const handleClose = () => setShow(false);
    const handleShow = async (e) => {
        setShow(true)
        localStorage.setItem("idCartDetail", e.currentTarget.id)
        axios.get(`http://localhost:8000/detaildonhanguser?data=${e.currentTarget.id}`)
            .then((response) => {
                setDataCartDetail(response.data);
                // console.log(dataUser, "data user")
            })
            .catch((error) => {
                console.error('error fetching data :', error);
            });
    };

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
        axios.get(`http://localhost:8000/ChiNhanh/DatLich?chinhanh=${chinhanh}`)
            .then((response) => {
                setdataDatLich(response.data);
            })
            .catch((error) => {
                console.error('error fetching data :', error);
            });
        axios.get(`http://localhost:8000//NhanVien/DichVu?chinhanh=${chinhanh}`)
            .then((response) => {
                setdataNhanVien(response.data);
            })
            .catch((error) => {
                console.error('error fetching data :', error);
            });
        axios.get(`http://localhost:8000/dondahoanthanhchinhanh?chinhanh=${chinhanh}`)
            .then((response) => {
                setDonDaHoanThanh(response.data);
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
                                <a href="/admin/index"><img src={imglogo} alt="" /></a>
                            </div>
                        </div>
                        <Menu.SubMenu key="dichvu" title="Dịch vụ">
                            <Menu.Item key='dichvu-1'>Thêm mới</Menu.Item>
                            <Menu.Item key='dichvu-2'><a href="/admin/dichvu">Danh sách</a></Menu.Item>
                        </Menu.SubMenu>
                        <Menu.SubMenu key="thucung" title="Thú cưng">
                            <Menu.Item key='thucung-1'>Thêm mới</Menu.Item>
                            <Menu.Item key='thucung-2'><a href="/admin/thucung">Danh sách</a></Menu.Item>
                        </Menu.SubMenu>
                        <Menu.SubMenu key="sanpham" title="Sản phẩm">
                            <Menu.Item key='sanpham-1'>Thêm mới</Menu.Item>
                            <Menu.Item key='sanpham-2'><a href="/admin/sanpham">Danh sách</a></Menu.Item>
                        </Menu.SubMenu>
                        <Menu.SubMenu key="binhluan" title="Bình luận">
                            <Menu.Item key='binhluan-1'>Thêm mới</Menu.Item>
                            <Menu.Item key='binhluan-2'><a href="/admin/binhluan">Danh sách</a></Menu.Item>
                        </Menu.SubMenu>
                        <Menu.SubMenu key='donhang' title="Đơn hàng">
                            {/* <Menu.Item key='donhang-1'>Thêm mới</Menu.Item> */}
                            <Menu.Item key='donhang-2'>Task 2</Menu.Item>
                        </Menu.SubMenu>
                        <Menu.SubMenu key='datlich' title="Đặt lịch">
                            {/* <Menu.Item key='datlich-1'>Thêm mới</Menu.Item> */}
                            <Menu.Item key='datlich-2'><a href="/admin/datlich">Danh sách</a></Menu.Item>
                        </Menu.SubMenu>
                        <Menu.Item key="Thống kê" icon={<AreaChartOutlined />}>Thống kê</Menu.Item>
                    </Menu>
                </Sider>
            </Layout>
            <div id="content-wrapper" class="d-flex flex-column">
                <div id="content">
                    <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                        <ul class="navbar-nav ml-auto">
                            <div class="topbar-divider d-none d-sm-block"></div>
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
                            <h1 class="h3 mb-0 text-gray-800">Quản lý đặt lịch</h1>
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
                                            <th>Thời gian</th>
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
                                                <td>Ngày:{moment(item.ngay).format('DD/MM/YYYY')} lúc {moment(item.thoigian, 'HH:mm:ss').format('HH:mm')}</td>
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
                                                    <select
                                                        class="form-select"
                                                        aria-label="Default select example"
                                                        name="dichvu" onChange={(event) =>
                                                            setSelectNhanVien(event.target.value)
                                                        }
                                                    >
                                                        <option value="0" selected>
                                                            {item.nhanvien === 10
                                                                ? "Nguyễn Thị Quế Anh"
                                                                : item.nhanvien === 11
                                                                    ? "Quàng Thị Trà My"
                                                                    : item.nhanvien === 12
                                                                        ? "Ngô Tấn Biên"
                                                                        : item.nhanvien === 13
                                                                            ? "Hồ Nhất Huy"
                                                                            : item.nhanvien === 14
                                                                                ? "Trần Anh Vũ"
                                                                                : "Chưa chọn"}
                                                        </option>
                                                        {item.id_chinhanh === 3 ?
                                                            <>

                                                                <option value="13">Hồ Nhất Huy</option>
                                                                <option value="14">Trần Anh Vũ</option>
                                                            </>
                                                            : item.id_chinhanh === 2 ?
                                                                <>
                                                                    <option value="10">Nguyễn Thị Quế Anh</option>
                                                                    <option value="11">Quàng Thị Trà My</option>
                                                                    <option value="12">Ngô Tấn Biên</option>
                                                                </>
                                                                :
                                                                <>
                                                                </>
                                                        }
                                                    </select>
                                                    <br />
                                                    <button
                                                        type="button"
                                                        class="btn btn-success" style={{ width: "100%" }}
                                                        // onClick={NextStatus}
                                                        onClick={() => SelectNV(selectNhanVien, item.id)}
                                                    >Chọn nhân viên</button>
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
                                                    <button class="btn btn-info" data-toggle="modal"
                                                        data-target="#exampleModal" id={item.id} onClick={handleShow}>
                                                        Xem đơn
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
                                >
                                    <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th>Người đặt</th>
                                            <th>Thời gian</th>
                                            <th>Cơ sở</th>
                                            <th>Dịch vụ</th>
                                            <th width="18%">Nhân viên</th>
                                            <th>tổng tiền</th>
                                            <th>Trạng thái</th>
                                            <th>Hành dộng</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {donDaHoanThanh.map((item, i) => (
                                            <tr>
                                                <td>{item.id}</td>
                                                <td>{item.hoten}</td>
                                                <td>Ngày:{moment(item.ngay).format('DD/MM/YYYY')} lúc {moment(item.thoigian, 'HH:mm:ss').format('HH:mm')}</td>
                                                <td>Tòa nhà QTSC9 (toà T), đường Tô Ký, phường Tân Chánh Hiệp, quận 12, TP HCM.
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
                                                                    : item.nhanvien === 14
                                                                        ? "Trần Anh Vũ"
                                                                        : "Chưa chọn"}
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
                                                    <button class="btn btn-info" data-toggle="modal"
                                                        data-target="#exampleModal" id={item.id} onClick={handleShow}>
                                                        Xem đơn
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
            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-xl"
                aria-labelledby="example-custom-modal-styling-title"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        Chi tiết đơn hàng {localStorage.getItem("idCartDetail")}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                        <thead>
                            <tr>
                                <th style={{ width: "5%" }}>Id</th>
                                <th style={{ width: "15%" }}>Dịch vụ</th>
                                <th style={{ width: "" }}>Khách hàng</th>
                                <th style={{ width: "15%" }}>Ngày thực hiện</th>
                                <th style={{ width: "20%" }}>Địa chỉ thực hiện</th>
                                <th style={{ width: "13%" }}>Tên thú cưng</th>
                                <th style={{ width: "5%" }}>Loài</th>
                                <th style={{ width: "11%" }}>Giống loài</th>
                                <th style={{ width: "5%" }}>Trọng lượng</th>
                                <th style={{ width: "15%" }}>Thành tiền</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dataCartDetail.map((item, i) => (
                                <tr>
                                    <td style={{ width: "5%" }}>{item.id}</td>
                                    <td style={{ width: "15%" }}>
                                        {item.id_dichvu === 1
                                            ? "Dịch vụ tắm thú cưng"
                                            : item.id_dichvu === 2
                                                ? "Cắt tỉa lông"
                                                : item.id_dichvu === 3
                                                    ? "khám chữa bệnh tại cơ sở"
                                                    : "giữ, chăm sóc hộ chủ"}
                                    </td>
                                    <td>{item.hoten}</td>
                                    <td style={{ width: "15%" }}>Ngày {moment(item.ngay).format('DD/MM/YYYY')} <br />lúc {moment(item.thoigian, 'HH:mm:ss').format('HH:mm')}</td>
                                    <td style={{ width: "20%" }}>
                                        {item.id_chinhanh === 2
                                            ? "Tòa nhà QTSC9 (toà T), đường Tô Ký, phường Tân Chánh Hiệp, quận 12, TP HCM."
                                            : item.id_chinhanh === 3
                                                ? "778/B1 Nguyễn Kiệm, phường 04, quận Phú Nhuận, TP HCM"
                                                : ""}
                                    </td>
                                    <td style={{ width: "13%" }}>{item.tenthucung}</td>
                                    <td style={{ width: "5%" }}>{item.loai}</td>
                                    <td style={{ width: "11%" }}>{item.thuocgiong}</td>
                                    <td style={{ width: "5%" }}>{item.trongluong} kg</td>
                                    <td style={{ width: "15%" }}>{item.tongtien.toLocaleString('vi', { style: 'currency', currency: 'VND' })}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </Modal.Body>
            </Modal>
        </div >
    );
}

export default QuanLyChiNhanhDatLich;
