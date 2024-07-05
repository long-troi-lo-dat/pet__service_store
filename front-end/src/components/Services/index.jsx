import React from 'react'
import { Icon } from '@iconify/react';

function Services() {
    return (
        <section id="service">
            <div className="container mb-5">
                <div className="row g-md-5 pt-4">
                    <div className="col-lg-3 my-3">
                        <div className="card">
                            <div>
                                <Icon className="text-primary fs-1" icon="la:shopping-cart"></Icon>
                            </div>
                            <h3 className="card-title py-2 m-0">Vận chuyển</h3>
                            <div className="card-text">
                                <p className="blog-paragraph fs-6">Cam kết hàng đã đặt sẽ nhận luôn trong ngày cho nóng.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 my-3">
                        <div className="card">
                            <div>
                                <Icon className="text-primary fs-1" icon="la:user-check"></Icon>
                            </div>
                            <h3 className="card-title py-2 m-0">Thanh toán trực tuyến</h3>
                            <div className="card-text">
                                <p className="blog-paragraph fs-6">An toàn, bảo mật, tiện lợi.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 my-3">
                        <div className="card">
                            <div>
                                <Icon className="text-primary fs-1" icon="la:tag"></Icon>
                            </div>
                            <h3 className="card-title py-2 m-0">Giảm giá mỗi ngày</h3>
                            <div className="card-text">
                                <p className="blog-paragraph fs-6">Giảm giá sốc 0%.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 my-3">
                        <div className="card">
                            <div>
                                <Icon className="text-primary fs-1" icon="la:award"></Icon>
                            </div>
                            <h3 className="card-title py-2 m-0">Chứng nhận an toàn</h3>
                            <div className="card-text">
                                <p className="blog-paragraph fs-6">Mà an toàn về cái gì thì chưa nghĩ ra.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Services