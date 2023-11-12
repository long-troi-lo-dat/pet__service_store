import React from 'react';
// import '../assets/css/global3.css';
import { FiShoppingCart, } from "react-icons/fi";

function CartButton({ setShowCart }) {
    const onShowCartHandler = () => {
        setShowCart(true)
    }
    return (
        <button onClick={onShowCartHandler}><FiShoppingCart size={24} /></button>
    );
}

export default CartButton;