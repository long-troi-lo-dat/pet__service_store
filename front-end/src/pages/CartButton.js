import React from 'react';
// import '../assets/css/global3.css';
import { FiShoppingCart, } from "react-icons/fi";

function CartButton({ setShowCart }) {
    const onShowCartHandler = () => {
        setShowCart(true)
    }
    return (
        <span style={{ position: "fixed", zIndex: "100", right: "-220px", bottom: "20px", width: "300px" }}>
            <button style={{ border: "1px solid #333", padding: "15px", borderRadius: "50%", lineHeight: "50px", textAlign: "center" }} onClick={onShowCartHandler}><FiShoppingCart size={24} /></button>
        </span>
    );
}

export default CartButton;