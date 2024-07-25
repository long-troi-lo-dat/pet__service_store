import React from 'react'

function FastRegister() {
    return (
        <section id="register" style={{ background: `url(${process.env.REACT_APP_URL_API}/home/background-img.png) no-repeat` }}>
            <div className="container mb-5">
                <div className="row">
                    <div className="offset-md-3 col-md-6 my-5 ">
                        <h2 className="display-3 fw-normal text-center">Giảm giá 20% cho <span className="text-primary">Lần mua đầu tiên</span>
                        </h2>
                        <form>
                            <div className="mb-3">
                                <input type="email" className="form-control form-control-lg" name="email" id="email"
                                    placeholder="Địa chỉ email" />
                            </div>
                            <div className="mb-3">
                                <input type="password" className="form-control form-control-lg" name="email" id="password1"
                                    placeholder="Mật khẩu" />
                            </div>
                            <div className="mb-3">
                                <input type="password" className="form-control form-control-lg" name="email" id="password2"
                                    placeholder="Nhập lại mật khẩu" />
                            </div>

                            <div className="d-grid gap-2">
                                <button type="submit" className="btn btn-dark btn-lg rounded-1">Đăng ký ngay</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FastRegister