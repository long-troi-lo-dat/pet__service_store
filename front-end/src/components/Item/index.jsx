import React, { useContext, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';
import { UnLoginError, IssetInCartNotify, AddToCartSuccess, OutOfStuckError, AddToWishlistSuccess, AddToWishlistFail } from "../Validate/Notify";
import { GlobalContext } from "../../Context";
import Aos from 'aos';
import 'aos/dist/aos.css';

function Item(props) {
    const { cart, setCart } = useContext(GlobalContext);
    const [wishlist, setWishlist] = useState([]);
    const [isInWishlist, setIsInWishlist] = useState(false);

    useEffect(() => {
        Aos.init({ duration: 600 });
    }, []);

    useEffect(() => {
        const savedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        setWishlist(savedWishlist);
        const existingWistlistItem = savedWishlist.find(WistlistItem => WistlistItem.id_sp === props.id_sp);
        setIsInWishlist(!!existingWistlistItem);
    }, [props.id_sp]);

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

    const onAddToWishlistHandler = (item) => {
        const existingWistlistItem = wishlist.find(WistlistItem => WistlistItem.id_sp === item.id_sp);
        if (existingWistlistItem) {
            AddToWishlistFail();
        } else {
            const updatedWishlist = [...wishlist, item];
            setWishlist(updatedWishlist);
            AddToWishlistSuccess();
            setIsInWishlist(true);  // Update the state to true when the item is added to the wishlist
            localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
        }
    };

    return (
        <div className="card position-relative text-center text-md-start border p-2" >
            <div className="z-1 position-absolute rounded-3 px-3 border border-dark-subtle bg-white">
                New
            </div>
            <button
                className={`z-1 position-absolute end-0 me-2 rounded-3 px-3 border border-dark-subtle btn-outline-heart bg-white ${isInWishlist ? 'text-danger' : ''}`}
                onClick={() => { onAddToWishlistHandler(props) }}
            >
                <Icon icon="fluent:heart-24-filled" className="fs-5" />
            </button>
            <Link to={`/detailproduct/${props.id_sp}`} className="d-flex justify-content-center">
                <img alt="dghouse.shop" src={`${process.env.REACT_APP_URL_API}/products/${props.hinh}`} className="img-product text-center rounded-4 mt-4" />
            </Link>
            <hr />
            <div className="card-body p-0">
                <Link to={`/detailproduct/${props.id_sp}`}>
                    <h6 className="card-title mt-2 text-truncate lh2">{props.ten}</h6>
                </Link>
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
                            <h6 className="text-uppercase m-0">Thêm vào giỏ</h6>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Item;
