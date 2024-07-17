import React, { useEffect, useState } from 'react'
import Services from '../components/Services'
import FastRegister from '../components/FastRegister'
import { Link } from 'react-router-dom';
import { FiTrash } from "react-icons/fi";
import { RemoveWishlistSuccess, RemoveWishlistFail } from "../components/Validate/Notify";

function Wishlist() {
    const [wishlist, setWishlist] = useState([])

    useEffect(() => {
        const savedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        setWishlist(savedWishlist);
    }, []);

    const onRemoveWishlistHandler = (item) => {
        const existingWishlistItem = wishlist.find(wishlistItem => wishlistItem.id_sp === item.id_sp);
        if (existingWishlistItem) {
            const updatedWishlist = wishlist.filter(wishlistItem => wishlistItem.id_sp !== item.id_sp);
            setWishlist(updatedWishlist);
            localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
            RemoveWishlistSuccess();
        } else {
            RemoveWishlistFail();
        }
    };

    return (
        <>
            <section id="banner" className="py-3 mb-5" style={{ background: "#F9F3EC" }}>
                <div className="container">
                    <div className="hero-content py-5 my-3">
                        <h2 className="display-1 mt-3 mb-0">Ưa thích</h2>
                        <nav className="breadcrumb">
                            <a className="breadcrumb-item nav-link" href="/#">Home</a>
                            <a className="breadcrumb-item nav-link" href="/#">Pages</a>
                            <span className="breadcrumb-item nav-link active" aria-current="page">Ưa thích</span>
                        </nav>
                    </div>
                </div>
            </section>

            <section id="Wishlist" className="py-5 my-5">
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col" className="card-title text-uppercase">Sản phẩm</th>
                                <th scope="col" className="card-title text-uppercase">Giá</th>
                                <th scope="col" className="card-title text-uppercase">SL còn</th>
                                <th scope="col" className="card-title text-uppercase"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {wishlist.map((item, i) => (
                                <tr key={i}>
                                    <td className="py-4">
                                        <div className="cart-info d-flex flex-wrap align-items-center ">
                                            <div className="col-lg-3">
                                                <div className="card-image">
                                                    <img src={`${process.env.REACT_APP_URL_API}/products/${item.hinh}`} alt="cloth" className="img-fluid" />
                                                </div>
                                            </div>
                                            <div className="col-lg-9">
                                                <div className="card-detail ps-3">
                                                    <h6 className="card-title">
                                                        <Link to={`/detailproduct/${item.id_sp}`} className="text-decoration-none">{item.ten}</Link>
                                                    </h6>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-4 align-middle">
                                        <div className="total-price">
                                            <span className="secondary-font fw-medium">{item.gia}</span>
                                        </div>
                                    </td>
                                    <td className="py-4 align-middle">
                                        <div className="total-price">
                                            <span className="secondary-font fw-medium">{item.soluong}</span>
                                        </div>
                                    </td>
                                    <td className="py-4 align-middle">
                                        <div className="d-flex align-items-center">
                                            <div className="me-4"><button className="btn btn-dark p-3 text-uppercase fs-6 btn-rounded-none w-100">Add to cart</button></div>
                                            <div className="cart-remove">
                                                <button className="" onClick={() => onRemoveWishlistHandler(item)}>
                                                    <FiTrash fontSize={20} />
                                                </button>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            <FastRegister />
            <Services />
        </>
    )
}

export default Wishlist
