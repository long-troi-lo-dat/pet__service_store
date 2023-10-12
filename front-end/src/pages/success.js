import React, { useState } from "react";
function success(props) {
    return (
        <div id="notfound">
            <div class="notfound">
                <h1 className="h1">Đặt hàng thành công</h1>
                <p className="py-4">Xin vui lòng chú ý điện thoại, nhân viên của DG House sẽ liên hệ đến bạn ngay!</p>
                <a href="/">Trở về trang chủ</a>
            </div>
        </div>
    );
}

export default success;