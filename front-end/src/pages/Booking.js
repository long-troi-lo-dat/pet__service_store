import React from 'react';

function Booking(props) {
    return (
        <div className="sv__coverfull w-4/5 m-auto py-8">
            <div class="row g-0">
                <div class="col-sm-6 col-md-8"><div class="d-sm align-items-center justify-content-between mb-4">
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
                    </div>
                </div>
                <div class="col-6 col-md-4">
                    <div class="sv__searches">
                        <div class="sv__icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 15 15" fill="none">
                                <path d="M7.5 14C11.0899 14 14 11.0899 14 7.5C14 3.91015 11.0899 1 7.5 1C3.91015 1 1 3.91015 1 7.5C1 11.0899 3.91015 14 7.5 14Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg><svg xmlns="http://www.w3.org/2000/svg" width="4.735px" height="5.272px" viewBox="0 0 7 8" fill="none">
                                <path d="M1.29987 7L5.06934 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg></div>
                        <input class="sv__holder" placeholder='Tìm kiếm...' />
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