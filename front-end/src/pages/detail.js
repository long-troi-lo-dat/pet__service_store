import React, { useEffect, useState } from 'react';
import '../assets/css/detail.css';
import '../assets/css/global1.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar';
// import facebook from '../assets/img/facebook.png';
// import twitter from '../assets/img/twitter.png';
// import linkdln from '../assets/img/in.png';
// import pinterest from '../assets/img/pinterest.png';
// import pate from '../assets/img/pate.jpg';

const initialFormData = {
    hoten: "",
    noidung: "",
};

function Detail(props) {
    const imageUserComment = [
        "https://cdn3.iconfinder.com/data/icons/avatars-9/145/Avatar_Cat-512.png",
        "https://cdn3.iconfinder.com/data/icons/avatars-9/145/Avatar_Penguin-512.png",
        "https://cdn3.iconfinder.com/data/icons/avatars-9/145/Avatar_Panda-512.png",
        "https://cdn3.iconfinder.com/data/icons/avatars-9/145/Avatar_Dog-512.png",
        "https://cdn3.iconfinder.com/data/icons/avatars-9/145/Avatar_Rabbit-512.png",
        "https://www.iconfinder.com/icons/586750/animal_avatar_frog_user_picture_account_icon",
    ]

    const params = useParams();
    const id = params.id

    const [datadetail, setDataDetail] = useState([]);
    const [dataBinhLuan, setDataBinhluan] = useState([]);
    const [formBLData, setFormData] = useState({
        initialFormData,
        idsp: id
    });

    const handleChangeInput = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formBLData, [name]: value });
    };

    const handleCommentSubmit = async (event) => {
        const validateName = formBLData.hoten
        const validateNoidung = formBLData.noidung

        if (validateName !== "" && validateNoidung !== "") {
            await axios.post('http://localhost:8000/binhluan', formBLData)
                .then(
                    res => {
                        console.log(res)
                        window.location.reload()
                    }
                )
                .catch(
                    err => console.log(err)
                )
        }
    };


    useEffect(() => {
        axios.get(`http://localhost:8000/detail/${id}`)
            .then((response) => {
                setDataDetail(response.data);
            })
            .catch((error) => {
                console.error('error fetching data :', error);
            });
        axios.get(`http://localhost:8000/binhluan/${id}`)
            .then((response) => {
                setDataBinhluan(response.data);
            })
            .catch((error) => {
                console.error('error fetching data :', error);
            });
    }, []);

    // var randomImage = imageUserComment[Math.floor(Math.random() * imageUserComment.length)];
    return (
        // <>
        //     <div class="trang-chi-tit-sn-phm">

        //         <div class="mxh">
        //             <div class="mxh-child"></div>

        //             <div class="mxh-item"></div>

        //             <div class="mxh-inner"></div>


        //             <b class="facebook">FACEBOOK</b>
        //             <img class="facebook-icon1" alt="" src={facebook} />

        //             <div class="rectangle-icon"></div>

        //             <b class="twitter">TWITTER</b>
        //             <b class="linkedin">LINKEDIN</b>
        //             <b class="pinterestt">PINTEREST</b>
        //             <img class="twitter-icon" alt="" src={twitter} />

        //             <img class="linkedin-icon" alt="" src={linkdln} />

        //             <img class="pinterest-icon" alt="" src={pinterest} />
        //         </div>
        //         <div class="tensanpham">
        //             <img class="tensanpham-child" alt="" src={pate} />

        //             <div class="pate-lon-ch-container">
        //                 <p class="dg-house-qun">Pate lon chó mèo</p>
        //                 <p class="dg-house-qun">[Cá Ngừ Trắng & Thịt Gà] 80g</p>
        //             </div>
        //             <div class="div3">
        //                 150.000
        //                 <span class="span">đ</span>
        //             </div>
        //             <div class="availability-cn-container">
        //                 <span class="availability">Availability : </span>
        //                 <span class="cn-3-hng">còn 3 hàng</span>
        //             </div>
        //             <div class="vector-parent">
        //                 <img class="frame-item" alt="" src="./public/polygon-9.svg" />

        //                 <div class="div4">1</div>
        //                 <img class="frame-inner" alt="" src="./public/polygon-10.svg" />
        //             </div>
        //             <div class="thm-vo-gi-hng-wrapper" id="frameContainer2">
        //                 <div class="thm-vo-gi">THÊM VÀO GIỎ HÀNG</div>
        //             </div>
        //         </div>
        //         <div class="mota">
        //             <div class="pate-lon-ch1">
        //                 Pate lon chó mèo [Cá Ngừ Trắng & Thịt Gà] 80g
        //             </div>
        //             <div class="c-ng-trng1">
        //                 Cá ngừ trắng & Thịt gà đóng hộp Tuna White Meat là món ăn nhẹ giàu
        //                 dinh dưỡng, hỗ trợ cho sự phát triển toàn diện của mèo:
        //             </div>
        //             <div class="c-ng-trng2">
        //                 Cá ngừ trắng & Thịt gà đóng hộp Tuna White Meat bổ sung những vitamin
        //                 và khoáng chất thiết yếu mà bữa ăn hằng ngày có thể bị thiếu hụt. Sản
        //                 phẩm hỗ trợ chăm sóc lông bóng mượt, giúp sáng mắt, giảm đổ ghèn, tăng
        //                 cường trí não.
        //             </div>
        //             <div class="trong-c-ng">
        //                 Trong cá ngừ, thịt trắng là phần tinh túy, giàu dinh dưỡng và có nhiều
        //                 lợi ích đặc biệt đối với sức khỏe và làm đẹp. Thịt trắng có nhiều lợi
        //                 ích: giàu chất béo bão hòa không no - chất béo có lợi cho sức khỏe, dễ
        //                 tiêu hóa và hấp thu, giúp cơ thể đào thải lượng cholesterol xấu, tốt
        //                 cho tim mạch.
        //             </div>
        //             <div class="s-dng-tht-container">
        //                 <ul class="s-dng-tht">
        //                     Sử dụng thịt cá ngừ trắng và thịt gà tươi, miếng cá mềm, kích thước
        //                     nhỏ vừa ăn
        //                 </ul>
        //             </div>
        //             <div class="s-dng-tht-container1">
        //                 <ul class="s-dng-tht">
        //                     Sử dụng thịt cá ngừ trắng và thịt gà tươi, miếng cá mềm, kích thước
        //                     nhỏ vừa ăn
        //                 </ul>
        //             </div>
        //             <div class="s-dng-tht-container2">
        //                 <ul class="s-dng-tht">
        //                     Sử dụng thịt cá ngừ trắng và thịt gà tươi, miếng cá mềm, kích thước
        //                     nhỏ vừa ăn
        //                 </ul>
        //             </div>
        //             <div class="s-dng-tht-container2">
        //                 <ul class="s-dng-tht">
        //                     Sử dụng thịt cá ngừ trắng và thịt gà tươi, miếng cá mềm, kích thước
        //                     nhỏ vừa ăn
        //                 </ul>
        //             </div>
        //             <div class="s-dng-tht-container4">
        //                 <ul class="s-dng-tht">
        //                     Sử dụng thịt cá ngừ trắng và thịt gà tươi, miếng cá mềm, kích thước
        //                     nhỏ vừa ăn
        //                 </ul>
        //             </div>
        //             <div class="s-dng-tht-container5">
        //                 <ul class="s-dng-tht">
        //                     Sử dụng thịt cá ngừ trắng và thịt gà tươi, miếng cá mềm, kích thước
        //                     nhỏ vừa ăn
        //                 </ul>
        //             </div>
        //             <div class="s-dng-tht-container6">
        //                 <ul class="s-dng-tht">
        //                     Sử dụng thịt cá ngừ trắng và thịt gà tươi, miếng cá mềm, kích thước
        //                     nhỏ vừa ăn
        //                 </ul>
        //             </div>
        //         </div>
        //     </div>

        // </>
        <>
            <Navbar />
            <section class=" border-top py-4" >
                <div class="" style={{ marginTop: "50px" }}>
                    {datadetail.map((item, i) => {
                        // <div class="container px-4 px-lg-5 my-5">
                        //     <div class="row gx-4 gx-lg-5 align-items-center">
                        //         <div class="col-md-6"><img class="card-img-top mb-5 mb-md-0" src={item.hinhanh} alt="..." /></div>
                        //         <div class="col-md-6">
                        //             <div class="small mb-1">SKU: BST-498</div>
                        //             <h1 class="display-5 fw-bolder">{item.ten}</h1>
                        //             <div class="fs-5 mb-5">
                        //                 {/* <span class="text-decoration-line-through">$45.00</span> */}
                        //                 <span className='h3'>{item.gia.toLocaleString('vi', { style: 'currency', currency: 'VND' })}</span>
                        //             </div>
                        //             <p class="lead mb-3" style={{ textTransform: "capitalize" }}>{item.mota}</p>
                        //             <div class="d-flex">
                        //                 <input class="form-control text-center me-3" id="inputQuantity" type="num" value="1" style={{ maxWidth: "3rem" }} />
                        //                 <button class="btn btn-outline-dark flex-shrink-0" type="button">
                        //                     <i class="bi-cart-fill me-1"></i>
                        //                     Thêm vào giỏ
                        //                 </button>
                        //             </div>
                        //         </div>
                        //     </div>
                        // </div>
                        if (item.id_dm === 6) {
                            return (
                                <div class="row gx-5">
                                    <aside class="col-lg-6">
                                        <div class="rounded-4 mb-3 d-flex justify-content-center">
                                            <img style={{ maxWidth: "100%", maxHeight: "50vh", margin: "auto" }} class="rounded-4 fit" src={item.hinhanh} alt="" />
                                        </div>
                                    </aside>
                                    <main class="col-lg-6">
                                        <div class="ps-lg-3">
                                            <h4 class="h2 title text-dark">
                                                {item.ten} <br />
                                            </h4>
                                            <div class="d-flex my-3">
                                                <span class="text-muted">Còn lại {item.soluong} sản phẩm trong kho</span>
                                                {/* <span class="text-success ms-2">Trong kho</span> */}
                                            </div>

                                            <div class="mb-3">
                                                <span class="h3">{item.gia.toLocaleString('vi', { style: 'currency', currency: 'VND' })}</span>
                                                <span class="h4 text-muted">/một gói</span>
                                            </div>

                                            <p className="h5">
                                                {item.mota}
                                            </p>

                                            {/* <div class="row">
                                        <dt class="col-3">Type:</dt>
                                        <dd class="col-9">Regular</dd>

                                        <dt class="col-3">Color</dt>
                                        <dd class="col-9">Brown</dd>

                                        <dt class="col-3">Material</dt>
                                        <dd class="col-9">Cotton, Jeans</dd>

                                        <dt class="col-3">Brand</dt>
                                        <dd class="col-9">Reebook</dd>
                                    </div> */}

                                            {/* <hr /> */}

                                            <div class="row mb-4">
                                                {/* <div class="col-md-4 col-6">
                                            <label class="mb-2">Size</label>
                                            <select class="form-select border border-secondary" style={{ height: "35px" }}>
                                                <option>Small</option>
                                                <option>Medium</option>
                                                <option>Large</option>
                                            </select>
                                        </div> */}
                                                <div class="col-md-4 col-6 mb-3">
                                                    <label class="mb-2 d-block">Quantity</label>
                                                    <div class="input-group mb-3" style={{ width: "170px" }}>
                                                        <button class="btn btn-white border border-secondary px-3" type="button" id="button-addon1" data-mdb-ripple-color="dark">
                                                            -
                                                        </button>
                                                        <input type="text" class="form-control text-center border border-secondary" placeholder="1" aria-label="Example text with button addon" aria-describedby="button-addon1" />
                                                        <button class="btn btn-white border border-secondary px-3" type="button" id="button-addon2" data-mdb-ripple-color="dark">
                                                            +
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <button class="btn btn-primary shadow-0"> <i class="me-1 fa fa-shopping-basket"></i> Thêm vào giỏ hàng </button>
                                        </div>
                                    </main>
                                </div>
                            )
                        } else {
                            return (
                                <div class="row gx-5" style={{}}>
                                    <aside class="col-lg-6">
                                        <div class="rounded-4 mb-3 d-flex justify-content-center">
                                            <img style={{ maxWidth: "100%", maxHeight: "50vh", margin: "auto" }} class="rounded-4 fit" src={item.hinhanh} alt="" />
                                        </div>
                                    </aside>
                                    <main class="col-lg-6">
                                        <div class="ps-lg-3">
                                            <h4 class="h2 title text-dark">
                                                {item.ten} <br />
                                            </h4>
                                            <div class="d-flex my-3">
                                                {item.soluong === 0 ?
                                                    <span class="text-muted">Sản phẩm tạm hết hàng</span>
                                                    :
                                                    <span class="text-muted">Còn lại {item.soluong} sản phẩm trong kho</span>
                                                }
                                                {/* <span class="text-success ms-2">Trong kho</span> */}
                                            </div>

                                            <div class="mb-3">
                                                <span class="h3">{item.gia.toLocaleString('vi', { style: 'currency', currency: 'VND' })}</span>
                                            </div>

                                            {/* <p className="h5">
                                                {item.mota}
                                            </p> */}

                                            {/* <div class="row">
                                        <dt class="col-3">Type:</dt>
                                        <dd class="col-9">Regular</dd>

                                        <dt class="col-3">Color</dt>
                                        <dd class="col-9">Brown</dd>

                                        <dt class="col-3">Material</dt>
                                        <dd class="col-9">Cotton, Jeans</dd>

                                        <dt class="col-3">Brand</dt>
                                        <dd class="col-9">Reebook</dd>
                                    </div> */}

                                            {/* <hr /> */}

                                            <div class="row mb-4">
                                                {/* <div class="col-md-4 col-6">
                                            <label class="mb-2">Size</label>
                                            <select class="form-select border border-secondary" style={{ height: "35px" }}>
                                                <option>Small</option>
                                                <option>Medium</option>
                                                <option>Large</option>
                                            </select>
                                        </div> */}
                                                {item.soluong === 0 ?
                                                    ""
                                                    :
                                                    <div class="col-md-4 col-6 mb-3">
                                                        <label class="mb-2 d-block">Số lượng</label>
                                                        <div class="input-group mb-3" style={{ width: "170px" }}>
                                                            <button class="btn btn-white border border-secondary px-3" type="button" id="button-addon1" data-mdb-ripple-color="dark">
                                                                -
                                                            </button>
                                                            <input type="text" class="form-control text-center border border-secondary" placeholder="1" aria-label="Example text with button addon" aria-describedby="button-addon1" />
                                                            <button class="btn btn-white border border-secondary px-3" type="button" id="button-addon2" data-mdb-ripple-color="dark">
                                                                +
                                                            </button>
                                                        </div>
                                                    </div>
                                                }
                                            </div>
                                            {item.soluong === 0 ?
                                                <button class="btn btn-primary shadow-0 disabled"> <i class="me-1 fa fa-shopping-basket"></i> Sản phẩm tạm hết hàng </button>
                                                :
                                                <button class="btn btn-primary shadow-0"> <i class="me-1 fa fa-shopping-basket"></i> Thêm vào giỏ hàng </button>
                                            }
                                        </div>
                                    </main>
                                </div>
                            )
                        }
                    })}
                </div>
            </section>
            <section class="bg-light border-top py-4">
                <div class="container">
                    <div class="row gx-4">
                        <div class="col-lg-12 mb-4">
                            <div class=" px-3 py-2 bg-white" style={{ borderRadius: "20px", boxShadow: "0px 0px 15px -9px rgba(0,0,0,0.5)" }}>
                                {/* <ul class="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
                                    <li class="nav-item d-flex" role="presentation">
                                        <a class="nav-link d-flex align-items-center justify-content-center w-100 active" id="ex1-tab-1" data-mdb-toggle="pill" href="#ex1-pills-1" role="tab" aria-controls="ex1-pills-1" aria-selected="true">Specification</a>
                                    </li>
                                    <li class="nav-item d-flex" role="presentation">
                                        <a class="nav-link d-flex align-items-center justify-content-center w-100" id="ex1-tab-2" data-mdb-toggle="pill" href="#ex1-pills-2" role="tab" aria-controls="ex1-pills-2" aria-selected="false">Warranty info</a>
                                    </li>
                                    <li class="nav-item d-flex" role="presentation">
                                        <a class="nav-link d-flex align-items-center justify-content-center w-100" id="ex1-tab-3" data-mdb-toggle="pill" href="#ex1-pills-3" role="tab" aria-controls="ex1-pills-3" aria-selected="false">Shipping info</a>
                                    </li>
                                    <li class="nav-item d-flex" role="presentation">
                                        <a class="nav-link d-flex align-items-center justify-content-center w-100" id="ex1-tab-4" data-mdb-toggle="pill" href="#ex1-pills-4" role="tab" aria-controls="ex1-pills-4" aria-selected="false">Seller profile</a>
                                    </li>
                                </ul> */}
                                <div class="tab-content" id="ex1-content">
                                    <div class="tab-pane fade show active" id="ex1-pills-1" role="tabpanel" aria-labelledby="ex1-tab-1">
                                        <h2 className='h2'>
                                            Đánh giá sản phẩm
                                        </h2>
                                        <hr />
                                        <div class="row pt-3">
                                            <div class="form-group col-md-6">
                                                <label for="inputHoten" className='pb-2'>Họ và tên</label>
                                                <input type="text" class="form-control" id="inputHoten"
                                                    placeholder="Tên của bạn" name="hoten" onChange={handleChangeInput} />
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="inputNoidung" className='py-2'>Nội dung</label>
                                            <textarea class="form-control" id="inputNoidung" rows="3" placeholder='Gửi nội dung bình luận . . . ' name="noidung" onChange={handleChangeInput}></textarea>
                                        </div>
                                        <button type="button" onClick={handleCommentSubmit} class="btn btn-success mt-3 py-2" style={{ backgroundColor: "#198754", marginBottom: "20px" }}>Gửi bình luận</button>
                                        {/* <div class="col-12 col-md-6">
                                                <ul class="list-unstyled mb-0">
                                                    <li><i class="fas fa-check text-success me-2"></i>Some great feature name here</li>
                                                    <li><i class="fas fa-check text-success me-2"></i>Lorem ipsum dolor sit amet, consectetur</li>
                                                    <li><i class="fas fa-check text-success me-2"></i>Duis aute irure dolor in reprehenderit</li>
                                                    <li><i class="fas fa-check text-success me-2"></i>Optical heart sensor</li>
                                                </ul>
                                            </div> */}
                                        {/* <div class="col-12 col-md-6 mb-0">
                                                <ul class="list-unstyled">
                                                    <li><i class="fas fa-check text-success me-2"></i>Easy fast and ver good</li>
                                                    <li><i class="fas fa-check text-success me-2"></i>Some great feature name here</li>
                                                    <li><i class="fas fa-check text-success me-2"></i>Modern style and design</li>
                                                </ul>
                                            </div> */}
                                        <div className=''>
                                            {dataBinhLuan.map((bl, i) => {
                                                // Chọn ngẫu nhiên một index từ 0 đến độ dài của mảng imageUserComment
                                                const randomIndex = Math.floor(Math.random() * imageUserComment.length);
                                                // Lấy ảnh đại diện tương ứng với index đã chọn
                                                const randomAvatar = imageUserComment[randomIndex];

                                                return (
                                                    <div className="border" style={{ display: "flex", padding: "10px", lineHeight: "80px", marginBottom: "5px" }}>
                                                        <div style={{ marginRight: "15px" }}>
                                                            <img src={randomAvatar} alt="" style={{ maxWidth: "50px" }} />
                                                        </div>
                                                        <div className=''>
                                                            <h5 className='h5'>{bl.hoten}</h5>
                                                            <h6 className='h6'>{bl.noidung}</h6>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div class="col-lg-4">
                            <div class="px-0 border rounded-2 shadow-0">
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">Similar items</h5>
                                        <div class="d-flex mb-3">
                                            <a href="#" class="me-3">
                                                <img src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/8.webp" style={{ minWidth: "96px", height: "96px" }} class="img-md img-thumbnail" />
                                            </a>
                                            <div class="info">
                                                <a href="#" class="nav-link mb-1">
                                                    Rucksack Backpack Large <br />
                                                    Line Mounts
                                                </a>
                                                <strong class="text-dark"> $38.90</strong>
                                            </div>
                                        </div>

                                        <div class="d-flex mb-3">
                                            <a href="#" class="me-3">
                                                <img src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/9.webp" style={{ minWidth: "96px", height: "96px" }} class="img-md img-thumbnail" />
                                            </a>
                                            <div class="info">
                                                <a href="#" class="nav-link mb-1">
                                                    Summer New Men's Denim <br />
                                                    Jeans Shorts
                                                </a>
                                                <strong class="text-dark"> $29.50</strong>
                                            </div>
                                        </div>

                                        <div class="d-flex mb-3">
                                            <a href="#" class="me-3">
                                                <img src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/10.webp" style={{ minWidth: "96px", height: "96px" }} class="img-md img-thumbnail" />
                                            </a>
                                            <div class="info">
                                                <a href="#" class="nav-link mb-1"> T-shirts with multiple colors, for men and lady </a>
                                                <strong class="text-dark"> $120.00</strong>
                                            </div>
                                        </div>

                                        <div class="d-flex">
                                            <a href="#" class="me-3">
                                                <img src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/11.webp" style={{ minWidth: "96px", height: "96px" }} class="img-md img-thumbnail" />
                                            </a>
                                            <div class="info">
                                                <a href="#" class="nav-link mb-1"> Blazer Suit Dress Jacket for Men, Blue color </a>
                                                <strong class="text-dark"> $339.90</strong>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section >
            <section class="py-5 bg-light">
                <div class="container px-4 px-lg-5 mt-5">
                    <h2 class="fw-bolder mb-4">Related products</h2>
                    <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        <div class="col mb-5">
                            <div class="card h-100">
                                <img class="card-img-top" src="https://www.petmart.vn/wp-content/uploads/2012/08/pate-cho-cho-nuoc-sot-vi-thit-ga-pedigree-pouch-chicken-300x300.jpg" alt="..." />
                                <div class="card-body p-4">
                                    <div class="text-center">
                                        <h5 class="fw-bolder">Pate mozzi cho mèo</h5>
                                        150.000đ
                                    </div>
                                </div>
                                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Xem chi tiết</a></div>
                                </div>
                            </div>
                        </div>
                        <div class="col mb-5">
                            <div class="card h-100">
                                <div class="badge bg-dark text-white position-absolute" style={{ top: "0.5rem", right: "0.5rem" }}>Sale</div>
                                <img class="card-img-top" src="https://www.petmart.vn/wp-content/uploads/2019/04/pate-cho-cho-vi-thit-bo-tron-rau-cu-iris-chicken-beef-vegetable-300x300.jpg" alt="..." />
                                <div class="card-body p-4">
                                    <div class="text-center">
                                        <h5 class="fw-bolder">Pate Meowow cho mèo (3 vị)</h5>
                                        {/* <div class="d-flex justify-content-center small text-warning mb-2">
                                            <div class="bi-star-fill"></div>
                                            <div class="bi-star-fill"></div>
                                            <div class="bi-star-fill"></div>
                                            <div class="bi-star-fill"></div>
                                            <div class="bi-star-fill"></div>
                                        </div> */}
                                        150.000đ
                                    </div>
                                </div>
                                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Xem chi tiết</a></div>
                                </div>
                            </div>
                        </div>
                        <div class="col mb-5">
                            <div class="card h-100">
                                <div class="badge bg-dark text-white position-absolute" style={{ top: "0.5rem", right: "0.5rem" }}>Sale</div>
                                <img class="card-img-top" src="https://www.petmart.vn/wp-content/uploads/2016/09/duong-long-cho-cho-poodle-vegebrand-poodle-hair-beauty-300x300.jpg" alt="..." />
                                <div class="card-body p-4">
                                    <div class="text-center">
                                        <h5 class="fw-bolder">Hạt Reflex cho mèo adult 1,5kg-Gà</h5>
                                        527.000đ
                                    </div>
                                </div>
                                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Xem chi tiết</a></div>
                                </div>
                            </div>
                        </div>
                        <div class="col mb-5">
                            <div class="card h-100">
                                <img class="card-img-top" src="https://www.petmart.vn/wp-content/uploads/2020/11/thuc-an-cho-cho-poodle-mkb-all-life-stages-formula-nutrition-300x300.jpg" alt="..." />
                                <div class="card-body p-4">
                                    <div class="text-center">
                                        <h5 class="fw-bolder">Hạt Royal Canin Hair&Skin 2kg</h5>
                                        556.000đ
                                    </div>
                                </div>
                                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Xem chi tiết</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Detail;