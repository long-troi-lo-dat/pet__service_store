import axios from '../axios';
import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import moment from 'moment';
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

function UserDetail(props) {
    const id = localStorage.getItem("id_user")
    const [showCart, setShowCart] = useState(false);
    const [showBooking, setShowBooking] = useState(false);
    const [confirm, setConfirm] = useState(false);
    const [dataUser, setDataUser] = useState([]);
    const [dataCart, setDataCart] = useState([]);
    const [dataCartDetail, setDataCartDetail] = useState([]);
    const [dataBookingDetail, setDataBookingDetail] = useState([]);

    const navigate = useNavigate();


    let tong = 0;

    const handleShowCartConfirm = (e) => {
        setConfirm(true)
        localStorage.setItem("idCartDetail", e.currentTarget.id)
    };
    const handleShowBookingConfirm = (e) => {
        setConfirm(true)
        localStorage.setItem("idBookingDetail", e.currentTarget.id)
    };

    const huydonhang = () => {
        axios.get(`/huydonhang?id=${localStorage.getItem("idCartDetail")}`)
            .then((response) => {
                return response.data
            })
            .catch((error) => {
                console.error('error fetching data :', error);
            });
        window.location.reload()
    }
    const huydatlich = () => {
        axios.get(`/huydichvu?id=${localStorage.getItem("idBookingDetail")}`)
            .then((response) => {
                return response.data
            })
            .catch((error) => {
                console.error('error fetching data :', error);
            });
        window.location.reload()
    }

    const handleShowCart = async (e) => {
        setShowCart(true)
        localStorage.setItem("idCartDetail", e.currentTarget.id)
        axios.get(`/detaildonhanguser?data=${e.currentTarget.id}`)
            .then((response) => {
                setDataCartDetail(response.data);
            })
            .catch((error) => {
                console.error('error fetching data :', error);
            });
    };

    const handleShowBooking = async (e) => {
        setShowBooking(true)
        localStorage.setItem("idBookingDetail", e.currentTarget.id)
        axios.get(`/detaildatlichuser?data=${e.currentTarget.id}&&iduser=${localStorage.getItem("id_user")}`)
            .then((response) => {
                setDataBookingDetail(response.data);
            })
            .catch((error) => {
                console.error('error fetching data :', error);
            });
    };

    const xemdonhang = () => {
        localStorage.setItem("choose", "Cart")
        axios.get(`/xemdathang?id=${id}`)
            .then((response) => {
                setDataCart(response.data)
            })
            .catch((error) => {
                console.error('error fetching data :', error);
            });
    }

    const xemdatlich = () => {
        localStorage.setItem("choose", "Booking")
        axios.get(`/xemdatlich?id=${id}`)
            .then((response) => {
                setDataCart(response.data)
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

        axios.get(`/xemdathang?id=${id}`)
            .then((response) => {
                setDataCart(response.data)
            })
            .catch((error) => {
                console.error('error fetching data :', error);
            });
    }, [id]);


    return (
        <>
            <Navbar />
            <div class="container-fluid">
                <div class="container-content rounded bg-white mt-5 mb-5">
                    <div class="row bg-light py-3">
                        {dataUser.map((item, i) => (
                            <div class="col-md-4">
                                <div class="d-flex flex-column px-5">
                                    <img class="rounded-circle mt-5 d-flex" alt="" style={{ margin: "auto" }} width="150px" src={!item.anhdaidien ? "https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" : item.anhdaidien} />
                                    <div class="text-black-50" ><span class="font-weight-bold text-black">{item.hoTen}</span></div>
                                    <div class="text-black-50" ><span class="font-weight-bold text-black">{item.sdt}</span></div>
                                    <div class="text-black-50" ><span class="font-weight-bold text-black">{item.email}</span></div>
                                    <div class="text-black-50 mt-3" style={{ margin: "auto" }}><button class="btn btn-success" onClick={() => navigate(`/userdetailedit/${item.id_user}`)} style={{ minWidth: "190px" }}>Chỉnh sửa thông tin</button></div>
                                    <div class="text-black-50 mt-3" style={{ margin: "auto" }}><button class="btn btn-success" onClick={() => navigate(`/changepassword/${item.id_user}`)} style={{ minWidth: "190px" }}>Thay đổi mật khẩu</button></div>
                                </div>
                            </div>
                        ))}

                        <div class="col-md-8">
                            <div class="card shadow ">
                                <div style={{ display: "flex", justifyContent: "space-around", paddingTop: "15px" }}>
                                    <button onClick={xemdonhang} style={{ minWidth: "180px", backgroundColor: "rgb(34, 42, 99)", color: "white", borderRadius: "3px", padding: "5px 0" }}>Đơn hàng</button>
                                    <button onClick={xemdatlich} style={{ minWidth: "180px", backgroundColor: "rgb(34, 42, 99)", color: "white", borderRadius: "3px" }}>Đặt lịch</button>
                                    {/* <button style={{ minWidth: "180px", backgroundColor: "rgb(34, 42, 99)", color: "white", borderRadius: "3px" }}>Đơn đã hoàn thành</button> */}
                                </div>
                                <div class="card-body">
                                    <table class="table" id="dataTable" width="100%" cellspacing="0">
                                        <thead>
                                            {localStorage.getItem("choose") === "Cart" ?
                                                (<tr>
                                                    <th>Mã đơn</th>
                                                    <th>Ngày đặt</th>
                                                    <th>Địa chỉ nhận</th>
                                                    <th>Tổng tiền</th>
                                                    <th>Trạng thái</th>
                                                    <th>Hành dộng</th>
                                                </tr>)
                                                : localStorage.getItem("choose") === "Booking" ?
                                                    (<tr>
                                                        <th>Mã đơn</th>
                                                        <th>Thời gian</th>
                                                        <th>Dịch vụ</th>
                                                        <th>Địa điểm</th>
                                                        <th>Tổng tiền</th>
                                                        <th>Trạng thái</th>
                                                        <th>Hành dộng</th>
                                                    </tr>)
                                                    :
                                                    (
                                                        // <tr></tr>
                                                        <></>
                                                    )
                                            }
                                        </thead>
                                        <tbody>
                                            {localStorage.getItem("choose") === "Cart" ?
                                                dataCart.map((item, i) => (
                                                    <tr>
                                                        <td>{item.id}</td>
                                                        <td>Ngày {moment(item.ngay).format('DD/MM/YYYY')}</td>
                                                        <td>
                                                            {item.diachi}
                                                        </td>
                                                        <td>
                                                            {item.tongtien.toLocaleString('vi', { style: 'currency', currency: 'VND' })}
                                                        </td>
                                                        <td>
                                                            {item.trangthai === 0
                                                                ? "Chờ xác nhận"
                                                                : item.trangthai === 1
                                                                    ? "Đã xác nhận"
                                                                    : item.trangthai === 2
                                                                        ? "Đang thực hiện"
                                                                        : "Đã hoàn thành"}
                                                        </td>
                                                        <td style={{ maxWidth: "154px" }}>
                                                            <button class="btn btn-success" data-toggle="modal"
                                                                data-target="#exampleModal" id={item.id} onClick={handleShowCart} style={{ minWidth: "150px" }}>
                                                                Xem thông tin
                                                            </button>
                                                            {item.trangthai === 0
                                                                ? <button button class="btn btn-danger" id={item.id} onClick={handleShowCartConfirm} style={{ minWidth: "150px" }}>
                                                                    Huỷ đơn hàng
                                                                </button>
                                                                :
                                                                ""
                                                            }
                                                        </td>
                                                    </tr>
                                                ))
                                                :
                                                dataCart.map((item, i) => (
                                                    <tr>
                                                        <td>{item.id}</td>
                                                        <td>Ngày {moment(item.ngay).format('DD/MM/YYYY')} lúc {moment(item.thoigian, 'HH:mm:ss').format('HH:mm')}</td>
                                                        <td>
                                                            {item.id_dichvu === 1
                                                                ? "Dịch vụ tắm thú cưng"
                                                                : item.id_dichvu === 2
                                                                    ? "Cắt tỉa lông"
                                                                    : item.id_dichvu === 3
                                                                        ? "khám chữa bệnh tại cơ sở"
                                                                        : "giữ, chăm sóc hộ chủ"}
                                                        </td>
                                                        <td>
                                                            {item.id_chinhanh === 2
                                                                ? "Tòa nhà QTSC9 (toà T), đường Tô Ký, phường Tân Chánh Hiệp, quận 12, TP HCM."
                                                                : item.id_chinhanh === 3
                                                                    ? "778/B1 Nguyễn Kiệm, phường 04, quận Phú Nhuận, TP HCM"
                                                                    : ""}
                                                        </td>
                                                        <td>
                                                            {item.tongtien.toLocaleString('vi', { style: 'currency', currency: 'VND' })}
                                                        </td>
                                                        <td>
                                                            {item.trangthai === 0
                                                                ? "Chờ xác nhận"
                                                                : item.trangthai === 1
                                                                    ? "Đã xác nhận"
                                                                    : item.trangthai === 2
                                                                        ? "Đang thực hiện"
                                                                        : "Đã hoàn thành"}
                                                        </td>
                                                        <td style={{ maxWidth: "154px" }}>
                                                            <button class="btn btn-success" data-toggle="modal"
                                                                data-target="#exampleModal" id={item.id} onClick={handleShowBooking} style={{ minWidth: "150px" }}>
                                                                Xem thông tin
                                                            </button>
                                                            {item.trangthai === 0
                                                                ? <button button class="btn btn-danger" id={item.id} onClick={handleShowBookingConfirm} style={{ minWidth: "150px" }}>
                                                                    Huỷ đơn hàng
                                                                </button>
                                                                :
                                                                ""
                                                            }
                                                        </td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                <Modal
                    show={showCart}
                    onHide={() => setShowCart(false)}
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
                                    <th>Id</th>
                                    <th>Tên sản phẩm</th>
                                    <th>Giá</th>
                                    <th>Số lượng</th>
                                    <th>Thành tiền</th>
                                </tr>
                            </thead>
                            <tbody>
                                {dataCartDetail.map((item, i) => (
                                    <tr>
                                        <td>{i + 1}</td>
                                        <td>{item.ten}</td>
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
                <Modal
                    show={showBooking}
                    onHide={() => setShowBooking(false)}
                    dialogClassName="modal-xl"
                    aria-labelledby="example-custom-modal-styling-title"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-custom-modal-styling-title">
                            Chi tiết đặt lịch {localStorage.getItem("idBookingDetail")}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                                <tr>
                                    <th style={{ width: "5%" }}>Id</th>
                                    <th style={{ width: "15%" }}>Dịch vụ</th>
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
                                {dataBookingDetail.map((item, i) => (
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
                <Modal
                    show={confirm}
                    onHide={() => setConfirm(false)}
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-custom-modal-styling-title">
                            Hủy đơn hàng {localStorage.getItem("idCartDetail")}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        {localStorage.getItem("choose") === "Cart" ?
                            "Bạn có chắc chắn muốn hủy đơn hàng này không?"
                            :
                            "Bạn có chắc chắn muốn hủy đặt lịch này không?"
                        }
                        <Modal.Footer>
                            <Button variant="secondary">Đóng</Button>
                            {localStorage.getItem("choose") === "Cart" ?
                                <Button variant="primary" onClick={huydonhang}>Hủy đơn hàng</Button>
                                :
                                <Button variant="primary" onClick={huydatlich}>Hủy đặt lịch</Button>
                            }
                        </Modal.Footer>
                    </Modal.Body>
                </Modal>
            </div >
        </>
    );
}

export default UserDetail;