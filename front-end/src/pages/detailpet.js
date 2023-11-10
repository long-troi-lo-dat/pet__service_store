import React, { useEffect, useState } from 'react';
import '../assets/css/detail.css';
import '../assets/css/global1.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
// import facebook from '../assets/img/facebook.png';
// import twitter from '../assets/img/twitter.png';
// import linkdln from '../assets/img/in.png';
// import pinterest from '../assets/img/pinterest.png';
// import pate from '../assets/img/pate.jpg';

// const initialFormData = {
//     hoten: "",
//     noidung: "",
// };

function DetailPet(props) {
    const imageUserComment = [
        "https://cdn3.iconfinder.com/data/icons/avatars-9/145/Avatar_Cat-512.png",
        "https://cdn3.iconfinder.com/data/icons/avatars-9/145/Avatar_Penguin-512.png",
        "https://cdn3.iconfinder.com/data/icons/avatars-9/145/Avatar_Panda-512.png",
        "https://cdn3.iconfinder.com/data/icons/avatars-9/145/Avatar_Dog-512.png",
        "https://cdn3.iconfinder.com/data/icons/avatars-9/145/Avatar_Rabbit-512.png",
        "https://www.iconfinder.com/icons/586750/animal_avatar_frog_user_picture_account_icon",
        "",
    ]

    const params = useParams();
    const id = params.id

    const [datadetailpet, setDataDetailpet] = useState([]);
    // const [dataBinhLuan, setDataBinhluan] = useState([]);
    const [datadcungloai, setDatacungloai] = useState([]);
    // const [formBLData, setFormData] = useState({
    //     initialFormData,
    //     idsp: id
    // });

    // const handleChangeInput = (event) => {
    //     const { name, value } = event.target;
    //     setFormData({ ...formBLData, [name]: value });
    // };

    // const handleRegisterSubmit = async (event) => {
    //     const validateName = formBLData.hoten
    //     const validateNoidung = formBLData.noidung

    //     if (validateName !== "" && validateNoidung !== "") {
    //         await axios.post('http://localhost:8000/binhluan', formBLData)
    //             .then(
    //                 res => {
    //                     console.log(res)
    //                 }
    //             )
    //             .catch(
    //                 err => console.log(err)
    //             )
    //     }
    // };
    let tiem = ""
    if (DetailPet.tiemphong === 1) {
        tiem = "Chưa tiêm phòng"
    }
    else {
        tiem = "Đã tiêm phòng"
    }
    let gioitinh = ""
    if (DetailPet.gioitinh === 0) {
        gioitinh = "Chưa xác định"
    } else if (DetailPet.gioitinh === 1) {
        gioitinh = "Đực"
    } else {
        gioitinh = "Cái"
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/detailpet/${id}`)
            .then((response) => {
                setDataDetailpet(response.data);
            })
            .catch((error) => {
                console.error('error fetching data :', error);
            });
        // axios.get(`http://localhost:8000/binhluan/${id}`)
        //     .then((response) => {
        //         setDataBinhluan(response.data);
        //     })
        //     .catch((error) => {
        //         console.error('error fetching data :', error);
        //     });
    }, []);
    return (
        <>
            <section class="py-5">
                <div class="container">
                    {datadetailpet.map((item, i) => (
                        <div class="row gx-5">
                            <aside class="col-lg-6">
                                <div class="rounded-4 mb-3 d-flex justify-content-center">
                                    <a data-fslightbox="mygalley" class="rounded-4" target="_blank" data-type="image" href="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/detail1/big.webp">
                                        <img style={{ maxWidth: "100%", maxHeight: "50vh", margin: "auto" }} class="rounded-4 fit" src={item.hinhanh} />
                                    </a>
                                </div>
                            </aside>
                            <main class="col-lg-6">
                                <div class="ps-lg-3">
                                    {/* <div class="d-flex my-3">
                                        <span class="text-muted">Còn lại {item.soluong} sản phẩm trong kho</span>
                                    </div> */}
                                    <div class="mb-3">
                                        Tên: <span class="h3">{item.ten}</span>
                                        {/* <span class="h4 text-muted">/một bé</span> */}
                                    </div>
                                    <div class="mb-3">
                                        Giá: <span class="h3">{item.gia.toLocaleString('vi', { style: 'currency', currency: 'VND' })}</span>
                                        {/* <span class="h4 text-muted">/một bé</span> */}
                                    </div>

                                    <p className="h6">
                                        <span class="col-3">Tiêm phòng:</span><strong> {tiem}</strong>
                                    </p>
                                    <p className="h6">
                                        Mô tả:<strong> {item.mota}</strong>
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

                                    <button class="btn btn-primary shadow-0"> <i class="me-1 fa fa-shopping-basket"></i> Thêm vào giỏ hàng </button>
                                </div>
                            </main>
                        </div>
                    ))}
                </div>
            </section>
            <section class="bg-light border-top py-4">
                <div class="container">
                    <div class="row gx-4">
                        <div class="col-lg-8 mb-4">
                            <div class="border rounded-2 px-3 py-2 bg-white">
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

                            </div>
                        </div>
                        <div class="col-lg-4">
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
                        </div>
                    </div>
                </div>
            </section >
            <section class="py-5 bg-light">
                <div class="container px-4 px-lg-5 mt-5">
                    <h2 class="fw-bolder mb-4">Related products</h2>
                    <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        <div class="col mb-5">
                            <div class="card h-100">
                                <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                                <div class="card-body p-4">
                                    <div class="text-center">
                                        <h5 class="fw-bolder">Fancy Product</h5>
                                        $40.00 - $80.00
                                    </div>
                                </div>
                                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                                </div>
                            </div>
                        </div>
                        <div class="col mb-5">
                            <div class="card h-100">
                                <div class="badge bg-dark text-white position-absolute" style={{ top: "0.5rem", right: "0.5rem" }}>Sale</div>
                                <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                                <div class="card-body p-4">
                                    <div class="text-center">
                                        <h5 class="fw-bolder">Special Item</h5>
                                        <div class="d-flex justify-content-center small text-warning mb-2">
                                            <div class="bi-star-fill"></div>
                                            <div class="bi-star-fill"></div>
                                            <div class="bi-star-fill"></div>
                                            <div class="bi-star-fill"></div>
                                            <div class="bi-star-fill"></div>
                                        </div>
                                        <span class="text-muted text-decoration-line-through">$20.00</span>
                                        $18.00
                                    </div>
                                </div>
                                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                                </div>
                            </div>
                        </div>
                        <div class="col mb-5">
                            <div class="card h-100">
                                <div class="badge bg-dark text-white position-absolute" style={{ top: "0.5rem", right: "0.5rem" }}>Sale</div>
                                <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                                <div class="card-body p-4">
                                    <div class="text-center">
                                        <h5 class="fw-bolder">Sale Item</h5>
                                        <span class="text-muted text-decoration-line-through">$50.00</span>
                                        $25.00
                                    </div>
                                </div>
                                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                                </div>
                            </div>
                        </div>
                        <div class="col mb-5">
                            <div class="card h-100">
                                <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                                <div class="card-body p-4">
                                    <div class="text-center">
                                        <h5 class="fw-bolder">Popular Item</h5>
                                        <div class="d-flex justify-content-center small text-warning mb-2">
                                            <div class="bi-star-fill"></div>
                                            <div class="bi-star-fill"></div>
                                            <div class="bi-star-fill"></div>
                                            <div class="bi-star-fill"></div>
                                            <div class="bi-star-fill"></div>
                                        </div>
                                        $40.00
                                    </div>
                                </div>
                                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default DetailPet;