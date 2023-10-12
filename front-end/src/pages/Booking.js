import React from 'react';

function Booking(props) {
    return (
        <div className="sv__coverfull w-4/5 m-auto py-8">
            <h5 class="h5 mb-0 text-gray-800">Đặt Lịch Nhanh</h5>
            <span>Các trường được đánh dấu <span className="text-danger">*</span> là bắt buộc</span>
            <div class="row mt-3">
                <div class="col-sm-6 col-md-8">
                    <div class="d-sm align-items-center justify-content-between mb-4">
                        <div class="mt-0">
                            <div class="card-body">
                                <div class="row g-3">
                                    <div class="col-12">
                                        <label for="dichvu" class="form-label">YÊU CẦU DỊCH VỤ <span className="text-danger">*</span></label>
                                        <h6 style={{ fontSize: "12px" }}>Vui lòng chọn 1 dịch vụ bạn đang cần để DG House HCM có thể chuẩn bị, và phục vụ các bé một cách chu đáo nhất nhé!</h6>
                                        <select class="form-select" aria-label="Default select example">
                                            <option selected value="1">Dịch vụ tắm thú cưng</option>
                                            <option value="2">khám chữa bệnh tại nhà</option>
                                            <option value="3">khám chữa bệnh tại cơ sở</option>
                                            <option value="4">giữ, chăm sóc hộ chủ</option>
                                        </select>
                                    </div>
                                    <div class="col-12">
                                        <label for="hoten" class="form-label">Họ tên <span className="text-danger">*</span></label>
                                        <input type="text" class="form-control" id="hoten" placeholder="Họ và tên" />
                                    </div>
                                    <div class="col-12">
                                        <label for="sodienthoai" class="form-label">Số điện thoại <span className="text-danger">*</span></label>
                                        <input type="text" class="form-control" id="sodienthoai" placeholder="Số điện thoại" />
                                    </div>
                                    <div class="col-md-6">
                                        <label for="diachi" class="form-label">Địa chỉ <span className="text-danger">*</span></label>
                                        <input type="text" class="form-control" id="diachi" />
                                    </div>
                                    <div class="col-md-6">
                                        <label for="emailcuaban" class="form-label">Email</label>
                                        <input type="text" class="form-control" id="emailcuaban" />
                                    </div>
                                    <div class="col-12">
                                        <label for="thoigianhen" class="form-label">Thời gian <span className="text-danger">*</span></label>
                                        <input type="date" class="form-control" id="thoigianhen" />
                                    </div>
                                    <div class="col-12">
                                        <label for="tenthucung" class="form-label">Tên thú cưng <span className="text-danger">*</span></label>
                                        <input type="text" class="form-control" id="tenthucung" placeholder="Tên thú cưng" />
                                    </div>
                                    <div class="col-12">
                                        <label class="form-label">Loài <span className="text-danger">*</span></label>
                                        <select class="form-select" aria-label="Default select example">
                                            <option selected value="1">Chó</option>
                                            <option value="2">Mèo</option>
                                            <option value="3">Khác</option>
                                        </select>
                                    </div>
                                    <div class="col-12">
                                        <label for="thuocgiongloai" class="form-label">Thuộc giống loài <span className="text-danger">*</span></label>
                                        <input type="text" class="form-control" id="thuocgiongloai" placeholder="Thuộc giống loài" />
                                    </div>
                                    <div class="col-md-6">
                                        <label for="tuoi" class="form-label">Tuổi (năm) <span className="text-danger">*</span></label>
                                        <input type="text" class="form-control" id="tuoi" placeholder="1 tuổi" />
                                    </div>
                                    <div class="col-md-6">
                                        <label for="trongluong" class="form-label">Trọng lượng (Kg) <span className="text-danger">*</span></label>
                                        <input type="text" class="form-control" id="trongluong" placeholder="1" />
                                    </div>
                                    <div class="col-12">
                                        <label for="ghichu" class="form-label">Ghi chú cho nhân viên</label>
                                        <textarea class="form-control" id="ghichu" rows="7" placeholder='Nhập một vài môt tả về tình trạng của các bé để các chuyên viên của chúng tôi có thể hỗ trợ bạn tốt nhất...'></textarea>
                                    </div>
                                </div>
                                <button class="btn btn-success mt-4 bg-success" type="submit">Gửi xác nhận</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-6 col-md-4 px-4">
                    <div class="sv__searches">
                        <div class="sv__icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 15 15" fill="none">
                                <path d="M7.5 14C11.0899 14 14 11.0899 14 7.5C14 3.91015 11.0899 1 7.5 1C3.91015 1 1 3.91015 1 7.5C1 11.0899 3.91015 14 7.5 14Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg><svg xmlns="http://www.w3.org/2000/svg" width="4.735px" height="5.272px" viewBox="0 0 7 8" fill="none">
                                <path d="M1.29987 7L5.06934 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg></div>
                        <input class="sv__holder" style={{ backgroundColor: "#e1e1e1" }} placeholder='Tìm kiếm...' />
                    </div>
                    <div class="sv__cvalltext">
                        <div class="sv__tllist">
                            DANH MỤC
                        </div>
                        <div class="sv__cvlist">
                            <div class="sv__list">
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 12 12" fill="none">
                                    <path d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z" stroke="#666666" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <div class="sv__tlist pl-2">Chia Sẽ Kinh Nghiệm</div>
                            </div>
                            <div class="sv__list">
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 12 12" fill="none">
                                    <path d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z" stroke="#666666" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <div class="sv__tlist pl-2">Góc Giải Trí</div>
                            </div>
                            <div class="sv__list">
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 12 12" fill="none">
                                    <path d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z" stroke="#666666" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <div class="sv__tlist pl-2">Dịch vụ tại nhà</div>
                            </div>


                        </div>
                    </div>
                    <div class="sv__cvallblog">
                        <div class="sv__tlblog"> BÀI VIẾT MỚI</div>
                        <div class="sv__cvtextblog">
                            <div class="sv__textblog">
                                Mách bạn dịch vụ spa thú cưng tại nhà tốt nhất tại quận 7
                                <div class="sv__cvdatepost flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                        <path d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z" stroke="#666666" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <div class="sv__date ml-1">02 Th6 2023</div>
                                </div>
                            </div>
                            <div class="sv__textblog">
                                Mách bạn dịch vụ spa thú cưng tại nhà tốt nhất tại quận 7
                                <div class="sv__cvdatepost flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                        <path d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z" stroke="#666666" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <div class="sv__date ml-1">02 Th6 2023</div>
                                </div>
                            </div>
                            <div class="sv__textblog">
                                Mách bạn dịch vụ spa thú cưng tại nhà tốt nhất tại quận 7
                                <div class="sv__cvdatepost flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                        <path d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z" stroke="#666666" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <div class="sv__date ml-1">02 Th6 2023</div>
                                </div>
                            </div>
                            <div class="sv__textblog">
                                Mách bạn dịch vụ spa thú cưng tại nhà tốt nhất tại quận 7
                                <div class="sv__cvdatepost flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                        <path d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z" stroke="#666666" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <div class="sv__date ml-1">02 Th6 2023</div>
                                </div>
                            </div>
                            <div class="sv__textblog">
                                Mách bạn dịch vụ spa thú cưng tại nhà tốt nhất tại quận 7
                                <div class="sv__cvdatepost flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 12 12" fill="none">
                                        <path d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z" stroke="#666666" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <div class="sv__date ml-1">02 Th6 2023</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div class="d-sm align-items-center justify-content-between mb-4">
                <h5 class="h5 mb-0 text-gray-800">Đặt Lịch Nhanh</h5>
                <span>Các trường được đánh dấu <span className="text-danger">*</span> là bắt buộc</span>
            </div>
            <div class="card">
                <div class="card-body">
                    <form>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="inputEmail4">Tên</label>
                                <input type="text" class="form-control" id="inputEmail4" placeholder="Tên" />
                            </div>
                            <div class="form-group col-md-6">
                                <label for="inputPassword4">Giá</label>
                                <input type="text" class="form-control" id="inputPassword4" placeholder="Giá" />
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="inputAddress">Ngày thêm</label>
                            <input type="date" class="form-control" id="inputAddress"
                                placeholder="1234 Main St" />
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="inputAddress2">Số lượng</label>
                                <input type="text" class="form-control" id="inputAddress2"
                                    placeholder="Số lượng còn trong kho" />
                            </div>
                            <div class="form-group col-md-6">
                                <label for="inputState">Danh mục</label>
                                <select id="inputState" class="form-control">
                                    <option selected>Choose...</option>
                                    <option>...</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="inputCity">Mô tả</label>
                            <input type="text" class="form-control" id="inputCity" placeholder="Mô tả sản phẩm" />
                        </div>
                        <button type="submit" class="btn btn-primary">Thêm mới</button>
                    </form>
                </div>
            </div> */}
        </div>
    );
}

export default Booking;