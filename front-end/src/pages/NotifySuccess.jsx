import React from "react";

function Success(props) {
    return (
        <>
            <section id="banner" className="py-3 mb-5" style={{ background: "#F9F3EC" }}>
                <div className="container">
                    <div className="hero-content py-5 my-3">
                        <h2 className="display-1 mt-3 mb-0">Đặt hàng thành công</h2>
                        <nav className="breadcrumb">
                            <div className="breadcrumb-item">Trang chủ</div>
                            <span className="breadcrumb-item active">Đặt hàng thành công</span>
                        </nav>
                    </div>
                </div>
            </section>
            <div id="success">
                <div className="success">
                    <h1 className="h1">Đặt hàng thành công</h1>
                    <p className="py-4">Xin vui lòng chú ý điện thoại, nhân viên của DG House sẽ liên hệ đến bạn ngay đó nha!</p>
                    <a href="/">Trở về trang chủ</a>
                </div>
            </div>
        </>
    );
}

export default Success;