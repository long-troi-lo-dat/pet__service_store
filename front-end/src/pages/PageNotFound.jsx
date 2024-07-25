import React from "react";

function Notfound() {
    return (
        <>
            <div id="notfound">
                <div className="notfound">
                    <div className="notfound-404">
                        <h1>404</h1>
                    </div>
                    <h2>Oops! Trang này không tồn tại</h2>
                    <p>Xin lỗi vì trang bạn tìm kiếm hiện không tồn tại hoặc đã bị xóa. Xin lỗi vì sự bất tiện này!</p>
                    <a href="/">Trở về trang chủ</a>
                </div>
            </div>
        </>
    );
}

export default Notfound;