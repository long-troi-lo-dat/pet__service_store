import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../axios';
import { UnLoginError, IssetInCartNotify, AddToCartSuccess, OutOfStuckError } from "../components/Validate/Notify";
import { GlobalContext } from "../Context";

function Detail() {

    const params = useParams();
    const id = params.id

    const [dataProduct, setDataProduct] = useState([]);
    const { cart, setCart } = useContext(GlobalContext)

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
            <div className="container-fluid" style={{ background: "#f9f3ec" }}>
                <div className="container py-3">
                    <div className="py-5 my-3">
                        <h2 className="display-1 mb-2">Single <span className="text-primary">Product</span></h2>
                        <h6>Home / Pages / {dataProduct.ten}</h6>
                    </div>
                </div>
            </div>
            <div className="container">
                <section class="my-4" >
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
                                        <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="/#">Xem chi tiết</a></div>
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
                                        <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="/#">Xem chi tiết</a></div>
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
                                        <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="/#">Xem chi tiết</a></div>
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
                                        <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="/#">Xem chi tiết</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default Detail;