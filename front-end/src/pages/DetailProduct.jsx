import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../axios';
import { Icon } from '@iconify/react';
import { UnLoginError, IssetInCartNotify, AddToCartSuccess, OutOfStuckError } from "../components/Validate/Notify";
import { GlobalContext } from "../Context";
import FastRegister from '../components/FastRegister';
import Services from '../components/Services';

function Detail() {

    const params = useParams();
    const id = params.id

    const [dataProduct, setDataProduct] = useState([]);
    const { cart, setCart } = useContext(GlobalContext)
    const [activeTab, setActiveTab] = useState('description');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const onAddToCartHandler = (item) => {
        console.log(cart);

        if (localStorage.getItem('login') === 'no') {
            UnLoginError();
            return;
        }

        if (item.id_dm === 6 && cart.some(cartItem => cartItem.id_sp === item.id_sp)) {
            console.error('Sản phẩm đã tồn tại trong giỏ hàng');
            IssetInCartNotify();
            return;
        }

        const existingCartItem = cart.find(cartItem => cartItem.id_sp === item.id_sp);
        const availableQuantity = item.soluong;

        if (existingCartItem) {
            const newAmount = existingCartItem.amount + 1;
            if (newAmount <= availableQuantity) {
                const updatedCart = cart.map(cartItem =>
                    cartItem.id_sp === item.id_sp ? { ...cartItem, amount: newAmount } : cartItem
                );
                AddToCartSuccess();
                setCart(updatedCart);
            } else {
                console.error('Số lượng vượt quá giới hạn');
                OutOfStuckError();
            }
        } else {
            if (availableQuantity > 0) {
                const updatedCart = [...cart, { ...item, amount: 1 }];
                AddToCartSuccess();
                setCart(updatedCart);
            } else {
                console.error('Sản phẩm đã hết hàng');
                OutOfStuckError();
            }
        }
    };

    useEffect(() => {
        axios.get(`/api/product/${id}`)
            .then((response) => {
                setDataProduct(response.data[0]);
            })
            .catch((error) => {
                console.error('error fetching data :', error);
            });
    }, [id, dataProduct]);

    return (
        <>
            <section id="banner" class="py-3 mb-5" style={{ background: "#F9F3EC" }}>
                <div class="container">
                    <div class="hero-content py-5 my-3">
                        <h2 class="display-1 mt-3 mb-0">Cửa hàng</h2>
                        <nav class="breadcrumb">
                            <div class="breadcrumb-item">Trang chủ</div>
                            <span class="breadcrumb-item active">Cửa hàng</span>
                        </nav>
                    </div>
                </div>
            </section>
            <div id="detailproduct">
                <div className="container">
                    <section class="my-4 mb-5" >
                        <div class="row" key={dataProduct.id_sp}>
                            <div class="col-12 col-xl-6">
                                <div class="d-flex justify-content-center align-items-center">
                                    <img class="img-fluid rounded-4" src={process.env.REACT_APP_URL_API + "/products/" + dataProduct.hinh} alt="" />
                                </div>
                            </div>
                            <div class="col-12 col-xl-6">
                                <div class="p-4">
                                    <h5 class="">
                                        {dataProduct.ten}
                                    </h5>
                                    <h3>
                                        {Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(dataProduct.gia)}
                                    </h3>
                                    <div class="row mb-4">
                                    </div>
                                    {dataProduct.soluong === 0 ?
                                        <button class="btn btn-primary shadow-0 disabled"> <i class="me-1 fa fa-shopping-basket"></i> Sản phẩm tạm hết hàng </button>
                                        :
                                        <button class="btn btn-primary shadow-0" onClick={() => { onAddToCartHandler(dataProduct) }}> <i class="me-1 fa fa-shopping-basket"></i> Thêm vào giỏ hàng </button>
                                    }
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="d-flex flex-column flex-md-row align-items-start gap-5 mb-5">
                        <div className="nav flex-row flex-wrap flex-md-column nav-pills me-3 col-lg-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            <button
                                className={`nav-link fs-5 mb-2 text-start ${activeTab === 'description' ? 'active' : ''}`}
                                id="v-pills-description-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#v-pills-description"
                                type="button"
                                role="tab"
                                aria-controls="v-pills-description"
                                aria-selected={activeTab === 'description'}
                                onClick={() => handleTabClick('description')}
                            >
                                Mô tả
                            </button>
                            <button
                                className={`nav-link fs-5 mb-2 text-start ${activeTab === 'additional' ? 'active' : ''}`}
                                id="v-pills-additional-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#v-pills-additional"
                                type="button"
                                role="tab"
                                aria-controls="v-pills-additional"
                                aria-selected={activeTab === 'additional'}
                                onClick={() => handleTabClick('additional')}
                            >
                                Thông tin khác
                            </button>
                            <button
                                className={`nav-link fs-5 mb-2 text-start ${activeTab === 'reviews' ? 'active' : ''}`}
                                id="v-pills-reviews-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#v-pills-reviews"
                                type="button"
                                role="tab"
                                aria-controls="v-pills-reviews"
                                aria-selected={activeTab === 'reviews'}
                                onClick={() => handleTabClick('reviews')}
                            >
                                Đánh giá
                            </button>
                        </div>
                        <div className="tab-content" id="v-pills-tabContent">
                            <div className={`tab-pane fade ${activeTab === 'description' ? 'active show' : ''}`} id="v-pills-description" role="tabpanel" aria-labelledby="v-pills-description-tab">
                                <h2>Mô tả sản phẩm</h2>
                                <p>Xương cho chó gặm thơm miệng VEGEBRAND 360 Fresh Breath Bone thích hợp với: chó kích thước nhỏ, kích thước trung bình và kích thước lớn. Sử dụng: cho ăn trực tiếp, hoặc có thể dùng làm đồ ăn khi huấn luyện hoặc khen thưởng.</p>
                                <ul style={{ listStyleType: "disc" }} className="list-unstyled ps-4">
                                    <li>Thiết kế hình lập thể: hình lập thể có lợi cho việc làm sạch răng, còn có hiệu quả loại bỏ mảng bám cứng đầu, làm sạch bộ phận nướu.</li>
                                    <li>Xương cho chó thơm miệng BONE Fresh Breath với nguyên liệu tự nhiên: đặc biệt có thêm bột sữa, gluten, cám lúc mạch, với nguồn dinh dưỡng phong phú. Tăng tính hợp khẩu vị thú cưng.</li>
                                    <li>Xương gặm có thể sử dụng lâu dài và khuyến khích nên cho cún ăn thường xuyên</li>
                                    <li>Dinh dưỡng từ thịt bò: thịt bò chứa nhiều Protein, Axit Amin hơn thịt lơn vì thế phù hợp với yêu cầu của cơ thể, có thể nâng cao khả năng kháng khuẩn, có thể cung cấp lượng Protein cao cho cơ thể.</li>
                                    <li>Dinh dưỡng từ lúa mạch: lúa mạch giàu dinh dưỡng, Vitamin, Protein, Vitamin E, mỡ và Axit Linoleic.</li>
                                    <li>Dinh dưỡng từ chất xơ: chất xơ trong răng chủ yếu gồm những chất có trong ngũ cốc, có hiệu quả thúc hoạt động đường ruột, có lợi trong việc thải phân và nước tiểu.</li>
                                    <li>Tinh bột gạo: trong tinh bột gọi chứa ít hàm lượng Protein và chất béo, tăng cường hấp thụ dinh dưỡng</li>
                                </ul>
                                <p>Xương cho chó gặm thơm miệng VEGEBRAND 360 Fresh Breath Bone gồm các thành phần như tinh bột gạo, rau, Gluten, bột mỳ, Glycerin, cám lúa mạch, đường mạch nha, Kali Sorbate… Protein 15%, Chất béo 5%, Chất xơ 4%, Tro 4%, Hàm lượng nước 16%, Canxi 0.03%, Phốt pho 0.02%.</p>
                            </div>
                            <div className={`tab-pane fade ${activeTab === 'additional' ? 'active show' : ''}`} id="v-pills-additional" role="tabpanel" aria-labelledby="v-pills-additional-tab">
                                <h2>Hướng dẫn sử dụng</h2>
                                <p>Sản phẩm này không phải là thuốc và không có tác dụng thay thế thuốc chữa bệnh.</p>
                            </div>
                            <div className={`tab-pane fade ${activeTab === 'reviews' ? 'active show' : ''}`} id="v-pills-reviews" role="tabpanel" aria-labelledby="v-pills-reviews-tab">
                                <div className="review-box d-flex flex-wrap">
                                    <div className="col-lg-6 d-flex flex-wrap gap-3">
                                        <div className="col-md-2">
                                            <div className="image-holder">
                                                <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="review" className="img-fluid rounded-circle" />
                                            </div>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="review-content">
                                                <div className="rating-container d-flex align-items-center">
                                                    <div className="rating" data-rating="1">
                                                        <svg width="24" height="24" className="text-primary">
                                                            <Icon icon="clarity:star-solid" className="text-primary" />
                                                        </svg>
                                                    </div>
                                                    <div className="rating" data-rating="2">
                                                        <svg width="24" height="24" className="text-primary">
                                                            <Icon icon="clarity:star-solid" className="text-primary" />
                                                        </svg>
                                                    </div>
                                                    <div className="rating" data-rating="3">
                                                        <svg width="24" height="24" className="text-primary">
                                                            <Icon icon="clarity:star-solid" className="text-primary" />
                                                        </svg>
                                                    </div>
                                                    <div className="rating" data-rating="4">
                                                        <svg width="24" height="24" className="text-secondary">
                                                            <Icon icon="clarity:star-solid" className="text-primary" />
                                                        </svg>
                                                    </div>
                                                    <div className="rating" data-rating="5">
                                                        <svg width="24" height="24" className="text-secondary">
                                                            <Icon icon="clarity:star-solid" className="text-primary" />
                                                        </svg>
                                                    </div>
                                                    <span className="rating-count">(3.5)</span>
                                                </div>
                                                <div className="review-header">
                                                    <span className="author-name">Thiều Bảo Trâm</span>
                                                    <span className="review-date"> – 14/07/2024</span>
                                                </div>
                                                <p>Sản phẩm này cho thú cưng ăn thì thấy chúng ăn ngon lành, mình nếm thử thì vị khá tệ!.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 d-flex flex-wrap gap-3">
                                        <div className="col-md-2">
                                            <div className="image-holder">
                                                <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="review" className="img-fluid rounded-circle" />
                                            </div>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="review-content">
                                                <div className="rating-container d-flex align-items-center">
                                                    <div className="rating" data-rating="1">
                                                        <svg width="24" height="24" className="text-primary">
                                                            <Icon icon="clarity:star-solid" className="text-primary" />
                                                        </svg>
                                                    </div>
                                                    <div className="rating" data-rating="2">
                                                        <svg width="24" height="24" className="text-primary">
                                                            <Icon icon="clarity:star-solid" className="text-primary" />
                                                        </svg>
                                                    </div>
                                                    <div className="rating" data-rating="3">
                                                        <svg width="24" height="24" className="text-primary">
                                                            <Icon icon="clarity:star-solid" className="text-primary" />
                                                        </svg>
                                                    </div>
                                                    <div className="rating" data-rating="4">
                                                        <svg width="24" height="24" className="text-secondary">
                                                            <Icon icon="clarity:star-solid" className="text-primary" />
                                                        </svg>
                                                    </div>
                                                    <div className="rating" data-rating="5">
                                                        <svg width="24" height="24" className="text-secondary">
                                                            <Icon icon="clarity:star-solid" className="text-primary" />
                                                        </svg>
                                                    </div>
                                                    <span className="rating-count">(3.5)</span>
                                                </div>
                                                <div className="review-header">
                                                    <span className="author-name">Ninh Dương Lan Ngọc</span>
                                                    <span className="review-date"> – 12/07/2024</span>
                                                </div>
                                                <p>Nêm nếm thêm chút hạt nêm nữa thì mình thấy nó khá ngon.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="add-review mt-5">
                                    <h3>Gửi đánh giá</h3>
                                    <p>Danh tính của bạn sẽ được bảo mật. Điền những mục có đánh dấu *</p>
                                    <form id="form" className="form-group">
                                        <div className="pb-3">
                                            <div className="review-rating">
                                                <span>Đánh giá *</span>
                                                <div className="rating-container d-flex align-items-center">
                                                    <span className="rating secondary-font">
                                                        <iconify-icon icon="clarity:star-solid" className="text-primary me-2" />
                                                        <iconify-icon icon="clarity:star-solid" className="text-primary me-2" />
                                                        <iconify-icon icon="clarity:star-solid" className="text-primary me-2" />
                                                        <iconify-icon icon="clarity:star-solid" className="text-primary me-2" />
                                                        <iconify-icon icon="clarity:star-solid" className="text-primary me-2" />
                                                        (5.0)
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pb-3">
                                            <input type="file" className="form-control" data-text="Tải lên hình ảnh" />
                                        </div>
                                        <div className="pb-3">
                                            <label>Tên của bạn</label>
                                            <input type="text" name="name" placeholder="Điền tên của bạn*" className="form-control" />
                                        </div>
                                        <div className="pb-3">
                                            <label>Email</label>
                                            <input type="text" name="email" placeholder="Điền email của bạn*" className="form-control" />
                                        </div>
                                        <div className="pb-3">
                                            <label>Trải nghiệm của bạn</label>
                                            <textarea className="form-control" placeholder="Điền trải nghiệm của bạn*"></textarea>
                                        </div>
                                        <div className="pb-3">
                                            <label>
                                                <input type="checkbox" required />
                                                <span className="label-body"> Lưu tên, email cho lần đánh giá tiếp theo.</span>
                                            </label>
                                        </div>
                                        {/* <button type="submit" name="submit" className="btn btn-dark btn-large text-uppercase w-100 disable">Gửi đánh giá</button> */}
                                        <div type="submit" name="submit" className="btn btn-dark btn-large text-uppercase w-100 disable" style={{ cursor: "not-allowed" }}>Gửi đánh giá</div>
                                        <p className="text-danger">Chức năng đang trong quá trình sửa chữa, xin lỗi vì sự bất tiện này!!</p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <FastRegister />
                <Services />
            </div>
        </>
    );
}

export default Detail;