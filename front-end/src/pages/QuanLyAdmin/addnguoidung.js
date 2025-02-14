import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Layout, Menu } from 'antd'
import { AreaChartOutlined } from '@ant-design/icons'
import imglogo from "../../assets/logo-1.png"
import axios from '../../axios';
const { Sider } = Layout;

function AdminAddNguoiDung(props) {
    const [openProfile, setOpenProfile] = useState(false)
    const [dataUser, setDataUser] = useState([])
    const [formData, setFormData] = useState({
        hoTen: "",
        anhdaidien: "",
        sdt: "",
        email: "",
        matkhau: "",
        diachi: "",
        mota: "",
        chinhanh: "",
        vaitro: ""
    });

    const id = localStorage.getItem("id_user")
    const navigate = useNavigate();


    const handleChangeInput = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setFormData({
            ...formData,
            [name]: value
        })
        console.log(formData)
    };

    const handleSubmit = (event) => {
        axios.post("/addnguoidung", formData)
            .then((res) => {
                console.log(res.data);
                navigate("/employee/nguoidung")
            })
            .catch((err) => console.log(err));
    };

    const LogoutSubmit = () => {
        localStorage.setItem("header", 0)
        localStorage.setItem("id_user", 0)
        localStorage.setItem("vaitro", 0)
        localStorage.setItem("login", "no")
        navigate("/")
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
    }, [id]);
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
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                        <ul className="navbar-nav ml-auto">
                            <div className="topbar-divider d-none d-sm-block"></div>
                            {/* <li className="nav-item dropdown no-arrow"> */}
                            <span
                                className="nav-link"
                                onClick={() => setOpenProfile((prev) => !prev)}
                            >
                                {dataUser.map((item, i) => (
                                    <>
                                        <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                                            {item.hoTen}
                                        </span>
                                        <img
                                            className="img-profile rounded-circle"
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
                    <div className="container-fluid">
                        <div className="d-sm-flex align-items-center justify-content-between mb-4">
                            <h1 className="h3 mb-0 text-gray-800">Thêm mới nhân viên</h1>
                        </div>
                        <div className="card shadow mb-4">
                            {/* <div className="card-body">
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputEmail4">Tên sản phẩm</label>
                                        <input type="text" className="form-control" id="inputEmail4"
                                            placeholder="Tên sản phẩm" name="ten" onChange={handleChangeInput} />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="gia">Giá</label>
                                        <input type="text" className="form-control" id="gia" placeholder="Giá" name="gia" onChange={handleChangeInput} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="img">Url hình ảnh</label>
                                    <input type="text" className="form-control" id="img" name="hinhanh" placeholder="Copy link url hình ảnh..." onChange={handleChangeInput} />
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-12">
                                        <label htmlFor="inputAddress2">Số lượng</label>
                                        <input type="text" className="form-control" id="inputAddress2"
                                            placeholder="Số lượng còn trong kho" name="soluong" onChange={handleChangeInput} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="inputCity">Mô tả</label>
                                    <input type="text" className="form-control" id="inputCity" placeholder="Mô tả sản phẩm" name="mota" onChange={handleChangeInput} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="inputIdDM">Danh mục</label>
                                    <select
                                        className="form-select"
                                        aria-label="Default select example"
                                        name="iddm"
                                        onChange={handleChangeInput}
                                        style={{ fontSize: "13px" }}
                                    >
                                        <option value="0" selected>
                                            Chọn danh mục
                                        </option>
                                        <option value="1">
                                            Đồ chơi
                                        </option>
                                        <option value="2">
                                            Thức ăn
                                        </option>
                                        <option value="3">
                                            Phụ kiện thú cưng
                                        </option>
                                        <option value="4">
                                            Thực phẩm chức năng
                                        </option>
                                        <option value="5">
                                            Sản phẩm điều trị
                                        </option>
                                        <option value="6">
                                            Chó
                                        </option>
                                    </select>
                                </div>
                                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Thêm mới</button>
                            </div> */}
                            <div className="card-body">
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label className="labels">Họ và tên</label><div style={{ display: "flex", lineHeight: "38px" }}><input type="text" className="form-control" name="hoTen" onChange={handleChangeInput} /></div>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label className="labels">Số điện thoại</label><div style={{ display: "flex", lineHeight: "38px" }}><input type="text" className="form-control" name="sdt" onChange={handleChangeInput} /></div>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-12">
                                        <label className="labels">Ảnh đại diện</label><div style={{ display: "flex", lineHeight: "38px" }}><input type="text" className="form-control" name="anhdaidien" onChange={handleChangeInput} placeholder="Copy paste link hình vào đây" /></div>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label className="labels">Email</label><div style={{ display: "flex", lineHeight: "38px" }}><input type="text" className="form-control" name="email" onChange={handleChangeInput} /></div>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label className="labels">Mật khẩu</label><div style={{ display: "flex", lineHeight: "38px" }}><input type="password" className="form-control" name="matkhau" onChange={handleChangeInput} /></div>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label className="labels">Địa chỉ</label><div style={{ display: "flex", lineHeight: "38px" }}><input type="text" className="form-control" name="diachi" onChange={handleChangeInput} /></div>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label className="labels">Mô tả</label><div style={{ display: "flex", lineHeight: "38px" }}><input type="text" className="form-control" name="mota" onChange={handleChangeInput} /></div>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label className="labels">Chi nhánh</label><div style={{ display: "flex", lineHeight: "38px" }}>
                                            <select
                                                className="form-select form-control"
                                                aria-label="Default select example"
                                                name="chinhanh"
                                                id="chinhanh"
                                                onChange={handleChangeInput}
                                            >
                                                <option disabled selected>Vui lòng chi nhánh làm việc</option>
                                                <option value="2">Tòa nhà QTSC9 (toà T), đường Tô Ký, phường Tân Chánh Hiệp, quận 12, TP HCM.</option>
                                                <option value="3">778/B1 Nguyễn Kiệm, phường 04, quận Phú Nhuận, TP HCM</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label className="labels">Vai trò</label><div style={{ display: "flex", lineHeight: "38px" }}>
                                            <select
                                                className="form-select form-control"
                                                aria-label="Default select example"
                                                name="vaitro"
                                                id="vaitro"
                                                onChange={handleChangeInput}
                                            >
                                                <option disabled selected>Vui lòng vai trò</option>
                                                <option value="2">Quản lý chi nhánh</option>
                                                <option value="5">Nhân viên dịch vụ</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 d-flex justify-content-center"><button type="submit" className="btn btn-primary" onClick={handleSubmit}>Thêm mới</button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default AdminAddNguoiDung;