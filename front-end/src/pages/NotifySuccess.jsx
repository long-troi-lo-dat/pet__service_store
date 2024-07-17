import React from "react";

function Success(props) {
    return (
        <>
            <section id="banner" class="py-3 mb-5" style={{ background: "#F9F3EC" }}>
                <div class="container">
                    <div class="hero-content py-5 my-3">
                        <h2 class="display-1 mt-3 mb-0">Đặt hàng thành công</h2>
                        <nav class="breadcrumb">
                            <div class="breadcrumb-item">Trang chủ</div>
                            <span class="breadcrumb-item active">Đặt hàng thành công</span>
                        </nav>
                    </div>
                </div>
            </section>
            <div id="success">
                <div class="success">
                    <h1 className="h1">Đặt hàng thành công</h1>
                    <p className="py-4">Xin vui lòng chú ý điện thoại, nhân viên của DG House sẽ liên hệ đến bạn ngay đó nha!</p>
                    <a href="/">Trở về trang chủ</a>
                </div>
            </div>
        </>
    );
}

export default Success;