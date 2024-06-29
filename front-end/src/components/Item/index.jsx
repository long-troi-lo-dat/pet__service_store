import React, { useContext, useEffect } from 'react'
import { Icon } from '@iconify/react';
import { unLogin, IssetInCartNotify, Notify, quantityNotify } from "../Validate/Notify";
import { GlobalContext } from "../../Context";
import Aos from 'aos'
import 'aos/dist/aos.css'
function Item(props) {
    const { cart, setCart } = useContext(GlobalContext)

    useEffect(() => {
        Aos.init({ duration: 1500 })
    })

    const onAddToCartHandler = (item) => {

        if (localStorage.getItem('login') === 'no') {
            unLogin()
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
                Notify();
                setCart(updatedCart);
            } else {
                console.error('Số lượng vượt quá giới hạn');
                quantityNotify();
            }
        } else {
            if (availableQuantity > 0) {
                const updatedCart = [...cart, { ...item, amount: 1 }];
                Notify();
                setCart(updatedCart);
            } else {
                console.error('Sản phẩm đã hết hàng');
                quantityNotify();
            }
        }
    };

    return (
        <div data-aos="fade-up" data-aos-delay={props.delay}>
            <div class="z-1 position-absolute rounded-3 px-3 border border-dark-subtle bg-white">
                New
            </div>
            <div class="z-1 position-absolute end-0 rounded-3 bg-white">
                <button class="btn border border-dark-subtle btn-outline-heart"><Icon icon="fluent:heart-24-filled" class="fs-5"></Icon></button>
            </div>
            <div class="card position-relative text-center text-md-start border p-2">
                <a href="single-product.html"><img alt="dghouse.shop" src={process.env.REACT_APP_URL_API + "/products/" + props.hinh} class="img-fluid rounded-4 border-bottom mt-4 bg-image" /></a>
                <div class="card-body p-0">
                    <a href={"/detailproduct/" + props.id_sp}>
                        <h6 class="card-title pt-4 text-truncate">{props.ten}</h6>
                    </a>

                    <div class="card-text">
                        <h5 class="secondary-font text-primary">{props.gia.toLocaleString('vi', { style: 'currency', currency: 'VND' })}</h5>

                        <span class="rating secondary-font">
                            <div class="">
                                <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                                <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                                <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                                <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                                <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                                5.0
                            </div>
                        </span>

                        <div class="d-flex flex-wrap justify-content-center mt-3">
                            <button onClick={() => { onAddToCartHandler(props) }} class="btn btn-cart px-4 pt-3 pb-3 border">
                                <h6 class="text-uppercase m-0">Add to Cart</h6>
                            </button>
                            {/* <a href="/#" class="btn-wishlist px-4 pt-3 ">
                            <Icon icon="fluent:heart-24-filled" class="fs-5"></Icon>
                          </a> */}
                        </div>


                    </div>

                </div>
            </div>
        </div>
    )
}

export default Item