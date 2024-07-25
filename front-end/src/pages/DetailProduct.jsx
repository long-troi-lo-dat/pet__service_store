import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../axios';
import { Icon } from '@iconify/react';
import { UnLoginError, IssetInCartNotify, AddToCartSuccess, OutOfStuckError } from "../components/Validate/Notify";
import { GlobalContext } from "../Context";
import FastRegister from '../components/FastRegister';
import Services from '../components/Services';

const initialFormData = {
    hoten: "",
    email: "",
    binhluan: "",
};

function Detail() {

    const params = useParams();
    const id = params.id

    const [dataProduct, setDataProduct] = useState([]);
    const [dataComment, setDataComment] = useState([]);
    const { cart, setCart } = useContext(GlobalContext)
    const [activeTab, setActiveTab] = useState('description');

    const [formData, setFormData] = useState({ initialFormData, id_sp: id });

    const handleChangeInput = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setFormData({
            ...formData,
            [name]: value
        })
    };

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

    const onAddCommentHandler = (event) => {
        event.preventDefault()
        axios.post("/api/comment", formData)
            .then((res) => {
                console.log(res.data);
                window.location.reload()
            })
            .catch(error => {
                if (error.response) {
                    console.log(error.response.data);
                }
            });
    }

    const getData = async () => {
        await axios.get(`/api/product/${id}`)
            .then((response) => {
                setDataProduct(response.data[0]);
            })
            .catch(error => {
                if (error.response) {
                    console.log(error.response.data);
                }
            });
        await axios.get(`/api/comment/detailproduct/${id}`)
            .then((response) => {
                setDataComment(response.data);
            })
            .catch(error => {
                if (error.response) {
                    console.log(error.response.data);
                }
            });
    }
    useEffect(() => {
        getData()
    });

    return (
        <>
            <section id="banner" className="py-3 mb-5" style={{ background: "#F9F3EC" }}>
                <div className="container">
                    <div className="hero-content py-5 my-3">
                        <h2 className="display-1 mt-3 mb-0">Cửa hàng</h2>
                        <nav className="breadcrumb">
                            <div className="breadcrumb-item">Trang chủ</div>
                            <span className="breadcrumb-item active">Cửa hàng</span>
                        </nav>
                    </div>
                </div>
            </section>
            <div id="detailproduct">
                <div className="container">
                    <section className="my-4 mb-5" >
                        <div className="row" key={dataProduct.id_sp}>
                            <div className="col-12 col-xl-6">
                                <div className="d-flex justify-content-center align-items-center">
                                    <img className="img-fluid rounded-4" src={process.env.REACT_APP_URL_API + "/products/" + dataProduct.hinh} alt="" />
                                </div>
                            </div>
                            <div className="col-12 col-xl-6">
                                <div className="p-4">
                                    <h5 className="">
                                        {dataProduct.ten}
                                    </h5>
                                    <h3>
                                        {Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(dataProduct.gia)}
                                    </h3>
                                    <div className="row mb-4">
                                    </div>
                                    {dataProduct.soluong === 0 ?
                                        <button className="btn btn-primary shadow-0 disabled"> <i className="me-1 fa fa-shopping-basket"></i> Sản phẩm tạm hết hàng </button>
                                        :
                                        <button className="btn btn-primary shadow-0" onClick={() => { onAddToCartHandler(dataProduct) }}> <i className="me-1 fa fa-shopping-basket"></i> Thêm vào giỏ hàng </button>
                                    }
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="d-flex flex-column flex-md-row align-items-start gap-5 mb-5">
                        <div className="nav flex-row flex-wrap flex-md-column nav-pills me-3 col-lg-3">
                            <button
                                className={`nav-link fs-5 mb-2 text-start ${activeTab === 'description' ? 'active' : ''}`}
                                type="button"
                                onClick={() => handleTabClick('description')}
                            >
                                Mô tả
                            </button>
                            <button
                                className={`nav-link fs-5 mb-2 text-start ${activeTab === 'additional' ? 'active' : ''}`}
                                onClick={() => handleTabClick('additional')}
                            >
                                Thông tin khác
                            </button>
                            <button
                                className={`nav-link fs-5 mb-2 text-start ${activeTab === 'reviews' ? 'active' : ''}`}
                                onClick={() => handleTabClick('reviews')}
                            >
                                Đánh giá
                            </button>
                        </div>
                        <div className="tab-content" id="v-pills-tabContent">
                            <div className={`tab-pane fade ${activeTab === 'description' ? 'active show' : ''}`}>
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
                            <div className={`tab-pane fade ${activeTab === 'additional' ? 'active show' : ''}`}>
                                <h2>Hướng dẫn sử dụng</h2>
                                <p>Sản phẩm này không phải là thuốc và không có tác dụng thay thế thuốc chữa bệnh.</p>
                            </div>
                            <div className={`tab-pane fade ${activeTab === 'reviews' ? 'active show' : ''}`}>
                                <div className="review-box d-flex flex-wrap">
                                    {dataComment.map((item, i) => (
                                        <div className="col-lg-6 d-flex flex-wrap gap-3" key={i}>
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
                                                        <span className="rating-count">(5)</span>
                                                    </div>
                                                    <div className="review-header">
                                                        <span className="author-name opacity-50">{item.hoten}</span>
                                                    </div>
                                                    <div className="review-header">
                                                        <span className="review-date opacity-50">{new Date(item.ngaythem).toLocaleDateString("vi-VN")}</span>
                                                    </div>
                                                    <p className="comment">{item.binhluan}.</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    {/* <div className="col-lg-6 d-flex flex-wrap gap-3">
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
                                    </div> */}
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
                                                        <Icon icon="clarity:star-solid" className="text-primary me-2" />
                                                        <Icon icon="clarity:star-solid" className="text-primary me-2" />
                                                        <Icon icon="clarity:star-solid" className="text-primary me-2" />
                                                        <Icon icon="clarity:star-solid" className="text-primary me-2" />
                                                        <Icon icon="clarity:star-solid" className="text-primary me-2" />
                                                        (5.0)
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pb-3">
                                            <label htmlFor="hoten">Tên của bạn</label>
                                            <input id="hoten" type="text" name="hoten" placeholder="Điền tên của bạn*" className="form-control" onChange={handleChangeInput} />
                                        </div>
                                        <div className="pb-3">
                                            <label htmlFor="email">Email</label>
                                            <input id="email" type="text" name="email" placeholder="Điền email của bạn*" className="form-control" onChange={handleChangeInput} />
                                        </div>
                                        <div className="pb-3">
                                            <label htmlFor="binhluan">Trải nghiệm của bạn</label>
                                            <textarea id="binhluan" className="form-control" onChange={handleChangeInput} name="binhluan" placeholder="Điền trải nghiệm của bạn*"></textarea>
                                        </div>
                                        <div className="pb-3">
                                            <label>
                                                <input type="checkbox" />
                                                <span className="label-body"> Lưu tên, email cho lần đánh giá tiếp theo.</span>
                                            </label>
                                        </div>
                                        {/* <button type="submit" name="submit" className="btn btn-dark btn-large text-uppercase w-100 disable">Gửi đánh giá</button> */}
                                        <div type="submit" name="submit" className="btn btn-dark btn-large text-uppercase w-100" onClick={onAddCommentHandler}>Gửi đánh giá</div>
                                        {/* <p className="text-danger">Chức năng đang trong quá trình sửa chữa, xin lỗi vì sự bất tiện này!!</p> */}
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