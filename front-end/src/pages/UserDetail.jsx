import React, { useEffect, useState } from 'react';
import axios from '../axios';
import { Link, useParams } from 'react-router-dom';

function UserDetail() {
    const [user, setUser] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const accessToken = localStorage.getItem('accessToken');
                const response = await axios.get(`/api/auth/${id}`, {
                    headers: { token: `Bearer ${accessToken}` },
                });
                setUser(response.data[0]);
            } catch (error) {
                console.log('Error fetching data:', error);
            }
        };
        fetchUserData()
    }, [id]);

    return (
        <>
            <section id="banner" className="py-3 mb-5" style={{ background: "#F9F3EC" }}>
                <div className="container">
                    <div className="hero-content py-5 my-3">
                        <h2 className="display-1 mt-3 mb-0">Tài khoản</h2>
                        <nav className="breadcrumb">
                            <div className="breadcrumb-item">Trang chủ</div>
                            <span className="breadcrumb-item active">Tài khoản</span>
                        </nav>
                    </div>
                </div>
            </section>
            <section id="userprofile">
                <div className="container py-3 mb-5" style={{ background: "#e2e8f0" }}>
                    <div className="main-body">
                        <div className="row gutters-sm">
                            <div className="col-md-4 mb-3">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="d-flex flex-column align-items-center text-center">
                                            {user.anhdaidien ? <img src={process.env.REACT_APP_URL_API + "/users/" + user.anhdaidien} alt="Admin" className="rounded-circle" width="150" /> : <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width="150" />}
                                            <div className="mt-3">
                                                <h4>{user.hoTen}</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="card mb-3">
                                    <div className="card-body">
                                        <div className="row pb-2">
                                            <div className="col-sm-3">
                                                <p className="">Họ tên</p>
                                            </div>
                                            <div className="col-sm-9 text-dark">
                                                {user.hoTen ? <p style={{ textTransform: "capitalize" }}>{user.hoTen}</p> : <p className="text-dark">Chưa có họ và tên</p>}
                                            </div>
                                        </div>
                                        <div className="row pb-2">
                                            <div className="col-sm-3">
                                                <p className="">Email</p>
                                            </div>
                                            <div className="col-sm-9 text-dark">
                                                {user.email ? <p>{user.email}</p> : <p className="text-dark">Chưa có email</p>}
                                            </div>
                                        </div>
                                        <div className="row pb-2">
                                            <div className="col-sm-3">
                                                <p className="">Số điện thoại</p>
                                            </div>
                                            <div className="col-sm-9 text-dark">
                                                {user.sdt ? <p>{user.sdt}</p> : <p className="text-dark">Chưa có số điện thoại</p>}
                                            </div>
                                        </div>
                                        <div className="row pb-2">
                                            <div className="col-sm-3">
                                                <p className="">Địa chỉ</p>
                                            </div>
                                            <div className="col-sm-9 text-dark">
                                                {user.diachi ? <p style={{ textTransform: "capitalize" }}>{user.diachi}</p> : <p className="text-dark">Chưa có địa chỉ</p>}
                                            </div>
                                        </div>
                                        <div className="row pb-2">
                                            <div className="col-sm-12">
                                                <Link to={"/userdetailedit/" + id} className="btn btn-dark btn-md rounded-1">Sửa thông tin</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row gutters-sm">
                                    {/* <div className="col-sm-6 mb-3">
                                        <div className="card h-100">
                                            <div className="card-body">
                                                <h6 className="d-flex align-items-center mb-3"><i className="material-icons text-info mr-2">assignment</i>Project Status</h6>
                                                <small>Web Design</small>
                                                <div className="progress mb-3" style={{ height: "5px" }}>
                                                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: "80%" }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                                <small>Website Markup</small>
                                                <div className="progress mb-3" style={{ height: "5px" }}>
                                                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: "72%" }} aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                                <small>One Page</small>
                                                <div className="progress mb-3" style={{ height: "5px" }}>
                                                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: "89%" }} aria-valuenow="89" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                                <small>Mobile Template</small>
                                                <div className="progress mb-3" style={{ height: "5px" }}>
                                                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: "55%" }} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                                <small>Backend API</small>
                                                <div className="progress mb-3" style={{ height: "5px" }}>
                                                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: "66%" }} aria-valuenow="66" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 mb-3">
                                        <div className="card h-100">
                                            <div className="card-body">
                                                <h6 className="d-flex align-items-center mb-3"><i className="material-icons text-info mr-2">assignment</i>Project Status</h6>
                                                <small>Web Design</small>
                                                <div className="progress mb-3" style={{ height: "5px" }}>
                                                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: "80%" }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                                <small>Website Markup</small>
                                                <div className="progress mb-3" style={{ height: "5px" }}>
                                                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: "72%" }} aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                                <small>One Page</small>
                                                <div className="progress mb-3" style={{ height: "5px" }}>
                                                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: "89%" }} aria-valuenow="89" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                                <small>Mobile Template</small>
                                                <div className="progress mb-3" style={{ height: "5px" }}>
                                                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: "55%" }} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                                <small>Backend API</small>
                                                <div className="progress mb-3" style={{ height: "5px" }}>
                                                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: "66%" }} aria-valuenow="66" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>



                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}

export default UserDetail;
