import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
// import dayjs from "dayjs"
import { format } from 'date-fns';
import moment from 'moment';

function UserDetail(props) {
    const [show, setShow] = useState(false);
    const [confirm, setConfirm] = useState(false);

    const handleCloseConfirm = () => setConfirm(false);
    const handleShowConfirm = (e) => {
        setConfirm(true)
    };
    const huydonhang = () => {
        axios.get(`http://localhost:8000/huydichvu?id=${localStorage.getItem("idCartDetail")}`)
            .then((response) => {
                return response.data
            })
            .catch((error) => {
                console.error('error fetching data :', error);
            });
        // setConfirm(false)
        window.location.reload()
    }

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
    // const [comment, setComment] = useState(0) 

    // const params = useParams();
    // const id = params.id
    const id = localStorage.getItem("id_user")
    const [dataUser, setDataUser] = useState([]);
    const [dataCart, setDataCart] = useState([]);
    const [dataCartDetail, setDataCartDetail] = useState([]);
    // console.log(id, "id user")

    useEffect(() => {
        axios.get(`http://localhost:8000/userdetail/${id}`)
            .then((response) => {
                setDataUser(response.data);
                // console.log(dataUser, "data user")
            })
            .catch((error) => {
                console.error('error fetching data :', error);
            });
        axios.get(`http://localhost:8000/donhanguser/${id}`)
            .then((response) => {
                setDataCart(response.data);
                // console.log(dataUser, "data user")
            })
            .catch((error) => {
                console.error('error fetching data :', error);
            });
        // axios.get(`http://localhost:8000/detaildonhanguser/${id}`)
        //     .then((response) => {
        //         setDataCartDetail(response.data);
        //         // console.log(dataUser, "data user")
        //     })
        //     .catch((error) => {
        //         console.error('error fetching data :', error);
        //     });
    }, []);


    return (
        <div class="container-fluid">
            <div class="container-content rounded bg-white mt-5 mb-5">
                <div class="row bg-light">
                    {dataUser.map((item, i) => (
                        <div class="col-md-4">
                            <div class="d-flex flex-column px-5">
                                <img class="rounded-circle mt-5 d-flex" alt="" style={{ margin: "auto" }} width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" />
                                <div class="text-black-50">Họ tên: <span class="font-weight-bold text-black">{item.hoTen}</span></div>
                                <div class="text-black-50">Số điện thoại: <span class="font-weight-bold text-black">{item.sdt}</span></div>
                                <div class="text-black-50">Email: <span class="font-weight-bold text-black">{item.email}</span></div>
                                <div class="text-black-50">Mật khẩu: <span class="font-weight-bold text-black">{item.matkhau}</span></div>
                            </div>
                        </div>
                    ))}

                    <div class="col-md-8">
                        <div class="card shadow mb-4">
                            <div class="card-body">
                                <table class="table" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>Mã đơn</th>
                                            <th>Thời gian</th>
                                            <th>Dịch vụ</th>
                                            <th>Địa điểm</th>
                                            <th>Tổng tiền</th>
                                            <th>Trạng thái</th>
                                            <th>Hành dộng</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {dataCart.map((item, i) => (
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
                                                    {item.tongtien}
                                                </td>
                                                <td>
                                                    {item.trangthai === 0
                                                        ? "Chờ xác nhận"
                                                        : item.trangthai === 1
                                                            ? "Đã xác nhận"
                                                            : item.trangthai === 2
                                                                ? "Đang thực hiện"
                                                                : "Đã hoàn thành"}
                                                    {/* {item.nhanvien === 3 ? "Trần Hữu Tài" : "Cao Minh Nhân"} */}
                                                </td>
                                                <td>
                                                    <button class="btn btn-success" data-toggle="modal"
                                                        data-target="#exampleModal" id={item.id} onClick={handleShow}>
                                                        Xem thông tin
                                                    </button>
                                                    {item.trangthai === 0
                                                        ? <button button class="btn btn-danger" id={item.id} onClick={handleShowConfirm}>
                                                            Huỷ đơn hàng
                                                        </button>
                                                        :
                                                        ""
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
                    Bạn có chắc chắn muốn hủy đặt lịch này không?
                    <Modal.Footer>
                        <Button variant="secondary">Đóng</Button>
                        <Button variant="primary" onClick={huydonhang}>Hủy đơn hàng</Button>
                    </Modal.Footer>
                </Modal.Body>
            </Modal>
        </div >
    );
}

export default UserDetail;