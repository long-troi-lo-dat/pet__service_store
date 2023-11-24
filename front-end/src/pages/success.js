import React from "react";
import Navbar from "../components/Navbar";

function Success(props) {
    return (
        <>
            <Navbar />
            <div id="notfound">
                <div class="notfound">
                    <h1 className="h1">Đặt hàng thành công</h1>
                    <p className="py-4">Xin vui lòng chú ý điện thoại, nhân viên của DG House sẽ liên hệ đến bạn ngay đó nha!</p>
                    <a href="/">Trở về trang chủ</a>
                </div>
            </div>
        </>
    );
}

export default Success;