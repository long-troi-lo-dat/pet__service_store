import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../../../src/assets/css/sb-admin-2.min.css";
import { BsBank, BsCart, BsCartFill, BsEmojiLaughing, BsListCheck, BsListTask, BsUniversalAccess } from "react-icons/bs";
import { Layout, Menu } from 'antd'
import { AreaChartOutlined } from '@ant-design/icons'
import imglogo from "../../assets/logo-1.png"
import Chart from "react-apexcharts";
const { Sider } = Layout;

function Thongke(props) {
    const [dataUser, setDataUser] = useState([])
    const [openProfile, setOpenProfile] = useState(false)

    //thống kê
    // const [state, setState] = useState({
    //     options: {
    //         chart: {
    //             id: "basic-bar"
    //         },
    //         xaxis: {
    //             categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    //             // categories: []
    //         }
    //     },
    //     series: [
    //         {
    //             name: "series-1",
    //             data: [1]
    //         },
    //         {
    //             name: "series-2",
    //             data: [3]
    //         },
    //         {
    //             name: "series-3",
    //             data: [2]
    //         }
    //     ]
    // })
    const [stateDonHang, setStateDonHang] = useState({
        options: {
            chart: {
                id: "basic-bar",
            },
            xaxis: {
                categories: [],
            },
        },
        series: [],
    });
    const [stateTongTien, setStateTongTien] = useState({
        options: {
            chart: {
                id: "basic-bar",
            },
            xaxis: {
                categories: [],
            },
        },
        series: [],
    });
    const [dataTKTN, setDataTKTN] = useState([])
    const [dataTKTT, setDataTKTT] = useState([])
    const [dataChuaXacNhan, setDataChuaXacNhan] = useState([])
    const [dataDaHoanThanh, setDataDaHoanThanh] = useState([])
    const [dataNewRegister, setDataNewRegister] = useState([])
    const [dataDHDVChuaHoanThanh, setDataDHDVChuaHoanThanh] = useState([])
    //

    const id = localStorage.getItem("id_user")
    const navigate = useNavigate();

    const currentMonth = (new Date()).getMonth() + 1;

    const LogoutSubmit = () => {
        localStorage.setItem("header", 0)
        localStorage.setItem("id_user", 0)
        localStorage.setItem("vaitro", 0)
        localStorage.setItem("login", "no")
        navigate("/")
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/userdetail/${id}`)
            .then((response) => {
                setDataUser(response.data);
            })
            .catch((error) => {
                console.error('error fetching data :', error);
            });
        axios.get(`http://localhost:8000/thongke/donhang/theongay`)
            .then((response) => {
                setDataTKTN(response.data);
            })
            .catch((error) => {
                console.error('error fetching data :', error);
            });
        axios.get(`http://localhost:8000/thongke/donhang/theothang`)
            .then((response) => {
                setDataTKTT(response.data);
            })
            .catch((error) => {
                console.error('error fetching data :', error);
            });
        axios.get(`http://localhost:8000/thongke/donhang/chuaxacnhan`)
            .then((response) => {
                setDataChuaXacNhan(response.data);
            })
            .catch((error) => {
                console.error('error fetching data :', error);
            });
        axios.get(`http://localhost:8000/thongke/donhang/dahoanthanh`)
            .then((response) => {
                setDataDaHoanThanh(response.data);
            })
            .catch((error) => {
                console.error('error fetching data :', error);
            });
        axios.get(`http://localhost:8000/thongke/newregister`)
            .then((response) => {
                setDataNewRegister(response.data);
            })
            .catch((error) => {
                console.error('error fetching data :', error);
            });
        axios.get(`http://localhost:8000/thongke/datlich/chuahoanthanh`)
            .then((response) => {
                setDataDHDVChuaHoanThanh(response.data);
            })
            .catch((error) => {
                console.error('error fetching data :', error);
            });
        axios.get("http://localhost:8000/thongke/dichvu/nhanvien/roi")
            .then(response => {
                const data = response.data;

                console.log(data, "data trả về của thống kê dịch vụ nhân viên")

                const currentMonth = new Date().getMonth() + 1; // Lưu ý: Tháng trong JavaScript là 0-indexed

                const categories = Array.from({ length: 5 }, (_, index) => {
                    const month = currentMonth - 2 + index;
                    const adjustedMonth = (month + 12) % 12 || 12;
                    return `Tháng ${adjustedMonth}`;
                });

                const seriesData = Array.from({ length: 5 }, (_, index) => {
                    const nhanvienData = data.filter(item => item.nhanvien === index + 10);

                    return {
                        name: (() => {
                            let ten;
                            switch (index + 10) {
                                case 10:
                                    ten = "Đậu Quang Thái";
                                    break;
                                case 11:
                                    ten = "Tinh Hữu Từ";
                                    break;
                                case 12:
                                    ten = "Ngô Tấn Biên";
                                    break;
                                case 13:
                                    ten = "Hồ Nhất Huy";
                                    break;
                                case 14:
                                    ten = "Trần Anh Vũ";
                                    break;
                                default:
                                    ten = "Không xác định";
                            }
                            return ten;
                        })(),
                        data: categories.map(category => {
                            const monthIndex = parseInt(category.split(" ")[1]) - 1;
                            const monthData = nhanvienData.find(item => item.thang === monthIndex + 1);
                            return monthData ? monthData.so_don_hang : 0;
                        }),
                    };
                });
                const updatedState = {
                    options: {
                        chart: {
                            id: "basic-bar",
                        },
                        xaxis: {
                            categories: categories,
                        },
                    },
                    series: seriesData
                };

                setStateDonHang(updatedState);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
        axios.get("http://localhost:8000/thongke/dichvu/tongtien")
            .then(response => {
                const data = response.data;

                console.log(data, "data trả về của thống kê tổng tiền dịch vụ");

                const currentMonth = new Date().getMonth() + 1; // Lưu ý: Tháng trong JavaScript là 0-indexed

                const categories = Array.from({ length: 5 }, (_, index) => {
                    const month = currentMonth - 2 + index;
                    const adjustedMonth = (month + 12) % 12 || 12;
                    return `Tháng ${adjustedMonth}`;
                });

                // In ra mảng categories để kiểm tra
                console.log(categories);

                const seriesData = [
                    {
                        name: "Tổng tiền", // Tên của series
                        data: categories.map(category => {
                            const monthIndex = parseInt(category.split(" ")[1]) - 1;
                            const tongTienData = data.find(item => item.thang === monthIndex + 1);

                            return {
                                x: category,
                                y: tongTienData ? parseFloat(tongTienData.tong_tien_thang) : 0,
                            };
                        }),
                    },
                ];

                const updatedState = {
                    options: {
                        chart: {
                            id: "basic-line", // Thay đổi id của chart thành "basic-line" để chuyển sang kiểu biểu đồ line
                        },
                        xaxis: {
                            categories: categories,
                        },
                    },
                    series: seriesData
                };

                setStateTongTien(updatedState);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });

    }, []);

    // const generateRandomColors = count => {
    //     const colors = [];
    //     for (let i = 0; i < count; i++) {
    //         const color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    //         colors.push(color);
    //     }
    //     return colors;
    // };

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
                    <div class="container-fluid row">
                        <div class="col-xl-3">
                            <div class="card shadow mb-4">
                                <div class="card-header py-3">
                                    <h6 class="m-0 font-weight-bold text-primary">Đơn hàng chưa xác nhận</h6>
                                </div>
                                <div class="card-body">
                                    <div style={{ display: "flex", justifyContent: "space-around" }}>
                                        <span style={{ padding: "5px" }}><BsCart fontSize={52} /></span>
                                        {dataChuaXacNhan.map((item, i) => (
                                            <span style={{ lineHeight: "64px", fontSize: "13px", minWidth: "220px" }}>Còn {item.donhangchuaxacnhan} đơn hàng cần xác nhận</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3">
                            <div class="card shadow mb-4">
                                <div class="card-header py-3">
                                    <h6 class="m-0 font-weight-bold text-primary">Doanh thu tháng {currentMonth}</h6>
                                </div>
                                <div class="card-body">
                                    <div style={{ display: "flex", justifyContent: "space-around" }}>
                                        <span style={{ padding: "5px" }}><BsBank fontSize={52} /></span>
                                        {dataTKTT.map((item, i) => (
                                            <span style={{ lineHeight: "64px", fontSize: "13px", minWidth: "220px" }}>
                                                {item.sumtongtien ? item.sumtongtien.toLocaleString('vi', { style: 'currency', currency: 'VND' }) : 'N/A'}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3">
                            <div class="card shadow mb-4">
                                <div class="card-header py-3">
                                    <h6 class="m-0 font-weight-bold text-primary">Số người đăng ký mới</h6>
                                </div>
                                <div class="card-body">
                                    <div style={{ display: "flex", justifyContent: "space-around" }}>
                                        <span style={{ padding: "5px" }}><BsUniversalAccess fontSize={52} /></span>
                                        {dataNewRegister.map((item, i) => (
                                            <span style={{ lineHeight: "64px", fontSize: "13px", minWidth: "220px" }}>Có <span style={{ color: "green" }}>{item.so_nguoi_dang_ky_moi}</span> người mới trong tháng này</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3">
                            <div class="card shadow mb-4">
                                <div class="card-header py-3">
                                    <h6 class="m-0 font-weight-bold text-primary">Số lịch đặt mới</h6>
                                </div>
                                <div class="card-body">
                                    <div style={{ display: "flex", justifyContent: "space-around" }}>
                                        <span style={{ padding: "5px" }}><BsListTask fontSize={52} /></span>
                                        {dataDHDVChuaHoanThanh.map((item, i) => (
                                            <span style={{ lineHeight: "64px", fontSize: "13px", minWidth: "220px" }}>Còn <span style={{ color: "green" }}>{item.datlichchuahoanthanh}</span> đơn dịch vụ chưa xong</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-6">
                            <div class="card shadow mb-4">
                                <div class="card-header py-3">
                                    <h6 class="m-0 font-weight-bold text-primary">Thống kê đơn hàng đã hoàn thành của từng nhân viên</h6>
                                </div>
                                <div class="card-body">
                                    <Chart
                                        options={stateDonHang.options}
                                        series={stateDonHang.series}
                                        type="bar"
                                        width="500"
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-6">
                            <div class="card shadow mb-4">
                                <div class="card-header py-3">
                                    <h6 class="m-0 font-weight-bold text-primary">Thống kê tổng doanh thu đặt lịch của 2 chi nhánh</h6>
                                </div>
                                <div class="card-body">
                                    <Chart
                                        options={stateTongTien.options}
                                        series={stateTongTien.series}
                                        type="line"
                                        width="500"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Thongke