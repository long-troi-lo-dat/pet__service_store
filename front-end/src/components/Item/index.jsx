import React, { useContext, useEffect } from 'react';
import { Icon } from '@iconify/react';
import { unLogin, IssetInCartNotify, Notify, quantityNotify } from "../Validate/Notify";
import { GlobalContext } from "../../Context";
import Aos from 'aos';
import 'aos/dist/aos.css';

function Item(props) {
    const { cart, setCart } = useContext(GlobalContext);

    useEffect(() => {
        Aos.init({ duration: 600 });
    }, []);

    const onAddToCartHandler = (item) => {
        console.log(cart);

        if (localStorage.getItem('login') === 'no') {
            unLogin();
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
            <div className="z-1 position-absolute rounded-3 px-3 border border-dark-subtle bg-white">
                New
            </div>
            <div className="z-1 position-absolute end-0 rounded-3 bg-white">
                <button className="btn border border-dark-subtle btn-outline-heart">
                    <Icon icon="fluent:heart-24-filled" className="fs-5" />
                </button>
            </div>
            <div className="card position-relative text-center text-md-start border p-2">
                <a href="single-product.html" className="d-flex justify-content-center">
                    <img alt="dghouse.shop" src={`${process.env.REACT_APP_URL_API}/products/${props.hinh}`} className="img-product text-center rounded-4 mt-4" />
                </a>
                <hr />
                <div className="card-body p-0">
                    <a href={`/detailproduct/${props.id_sp}`}>
                        <h6 className="card-title pt-4 text-truncate">{props.ten}</h6>
                    </a>
                    <div className="card-text">
                        <h5 className="secondary-font text-primary">
                            {props.gia.toLocaleString('vi', { style: 'currency', currency: 'VND' })}
                        </h5>
                        <span className="rating secondary-font">
                            <div className="d-flex justify-content-md-start justify-content-center align-items-center">
                                <Icon icon="clarity:star-solid" className="text-primary" />
                                <Icon icon="clarity:star-solid" className="text-primary" />
                                <Icon icon="clarity:star-solid" className="text-primary" />
                                <Icon icon="clarity:star-solid" className="text-primary" />
                                <Icon icon="clarity:star-solid" className="text-primary" />
                                5.0
                            </div>
                        </span>
                        <div className="d-flex flex-wrap justify-content-center mt-3">
                            <button onClick={() => { onAddToCartHandler(props) }} className="btn btn-cart px-4 pt-3 pb-3 border">
                                <h6 className="text-uppercase m-0">Add to Cart</h6>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Item;
