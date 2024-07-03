import React from 'react'

function Wishlist() {
    return (
        <>
            <section id="banner" class="py-3" style={{ background: "#F9F3EC" }}>
                <div class="container">
                    <div class="hero-content py-5 my-3">
                        <h2 class="display-1 mt-3 mb-0">Wishlist</h2>
                        <nav class="breadcrumb">
                            <a class="breadcrumb-item nav-link" href="/#">Home</a>
                            <a class="breadcrumb-item nav-link" href="/#">Pages</a>
                            <span class="breadcrumb-item active" aria-current="page">Wishlist</span>
                        </nav>
                    </div>
                </div>
            </section>

            <section id="Wishlist" class="py-5 my-5">
                <div class="container">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col" class="card-title text-uppercase">Product</th>
                                <th scope="col" class="card-title text-uppercase">Unit Price</th>
                                <th scope="col" class="card-title text-uppercase">Stock Status</th>
                                <th scope="col" class="card-title text-uppercase"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="py-4">
                                    <div class="cart-info d-flex flex-wrap align-items-center ">
                                        <div class="col-lg-3">
                                            <div class="card-image">
                                                <img src="images/item2.jpg" alt="cloth" class="img-fluid" />
                                            </div>
                                        </div>
                                        <div class="col-lg-9">
                                            <div class="card-detail ps-3">
                                                <h5 class="card-title">
                                                    <a href="/#" class="text-decoration-none">Jeans Jacket</a>
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td class="py-4 align-middle">
                                    <div class="total-price">
                                        <span class="secondary-font fw-medium">$230.00</span>
                                    </div>
                                </td>
                                <td class="py-4 align-middle">
                                    <div class="total-price">
                                        <span class="secondary-font fw-medium">In Stoke</span>
                                    </div>
                                </td>
                                <td class="py-4 align-middle">
                                    <div class="d-flex align-items-center">
                                        <div class="me-4"><button class="btn btn-dark p-3 text-uppercase fs-6 btn-rounded-none w-100">Add to
                                            cart</button></div>
                                        <div class="cart-remove">
                                            <a href="/#">
                                                Xóa khỏi cart
                                            </a>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td class="py-4">
                                    <div class="cart-info d-flex flex-wrap align-items-center ">
                                        <div class="col-lg-3">
                                            <div class="card-image">
                                                <img src="images/item11.jpg" alt="cloth" class="img-fluid" />
                                            </div>
                                        </div>
                                        <div class="col-lg-9">
                                            <div class="card-detail ps-3">
                                                <h5 class="card-title">
                                                    <a href="/#" class="text-decoration-none">Cat Food</a>
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td class="py-4 align-middle">
                                    <div class="total-price">
                                        <span class="secondary-font fw-medium">$100.00</span>
                                    </div>
                                </td>
                                <td class="py-4 align-middle">
                                    <div class="total-price">
                                        <span class="secondary-font fw-medium">In Stoke</span>
                                    </div>
                                </td>
                                <td class="py-4 align-middle">
                                    <div class="d-flex align-items-center">
                                        <div class="me-4"><button class="btn btn-dark p-3 text-uppercase fs-6 btn-rounded-none w-100">Add to
                                            cart</button></div>
                                        <div class="cart-remove">
                                            <a href="/#">
                                                Xóa khỏi cart
                                            </a>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td class="py-4">
                                    <div class="cart-info d-flex flex-wrap align-items-center ">
                                        <div class="col-lg-3">
                                            <div class="card-image">
                                                <img src="images/item14.jpg" alt="cloth" class="img-fluid" />
                                            </div>
                                        </div>
                                        <div class="col-lg-9">
                                            <div class="card-detail ps-3">
                                                <h5 class="card-title">
                                                    <a href="/#" class="text-decoration-none">Dog Food</a>
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td class="py-4 align-middle">
                                    <div class="total-price">
                                        <span class="secondary-font fw-medium">$90.00</span>
                                    </div>
                                </td>
                                <td class="py-4 align-middle">
                                    <div class="total-price">
                                        <span class="secondary-font fw-medium">Out of Stoke</span>
                                    </div>
                                </td>
                                <td class="py-4 align-middle">
                                    <div class="d-flex align-items-center">
                                        <div class="me-4"><button class="btn btn-dark p-3 text-uppercase fs-6 btn-rounded-none w-100">Add to
                                            cart</button></div>
                                        <div class="cart-remove">
                                            <a href="/#">
                                                Xóa khỏi cart
                                            </a>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td class="py-4">
                                    <div class="cart-info d-flex flex-wrap align-items-center ">
                                        <div class="col-lg-3">
                                            <div class="card-image">
                                                <img src="images/item7.jpg" alt="cloth" class="img-fluid" />
                                            </div>
                                        </div>
                                        <div class="col-lg-9">
                                            <div class="card-detail ps-3">
                                                <h5 class="card-title">
                                                    <a href="/#" class="text-decoration-none">Yellow T-shirt</a>
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td class="py-4 align-middle">
                                    <div class="total-price">
                                        <span class="secondary-font fw-medium">$250.00</span>
                                    </div>
                                </td>
                                <td class="py-4 align-middle">
                                    <div class="total-price">
                                        <span class="secondary-font fw-medium">In Stoke</span>
                                    </div>
                                </td>
                                <td class="py-4 align-middle">
                                    <div class="d-flex align-items-center">
                                        <div class="me-4"><button class="btn btn-dark p-3 text-uppercase fs-6 btn-rounded-none w-100">Add to
                                            cart</button></div>
                                        <div class="cart-remove">
                                            <a href="/#">
                                                Xóa khỏi cart
                                            </a>
                                        </div>
                                    </div>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </section>

            <section id="register" style={{ background: "url('images/background-img.png') no-repeat" }}>
                <div class="container ">
                    <div class="row my-5 py-5">
                        <div class="offset-md-3 col-md-6 my-5 ">
                            <h2 class="display-3 fw-normal text-center">Get 20% Off on <span class="text-primary">first Purchase</span>
                            </h2>
                            <form>
                                <div class="mb-3">
                                    <input type="email" class="form-control form-control-lg" name="email" id="email"
                                        placeholder="Enter Your Email Address" />
                                </div>
                                <div class="mb-3">
                                    <input type="password" class="form-control form-control-lg" name="email" id="password1"
                                        placeholder="Create Password" />
                                </div>
                                <div class="mb-3">
                                    <input type="password" class="form-control form-control-lg" name="email" id="password2"
                                        placeholder="Repeat Password" />
                                </div>

                                <div class="d-grid gap-2">
                                    <button type="submit" class="btn btn-dark btn-lg rounded-1">Register it now</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <section id="service">
                <div class="container pt-5 mt-5">
                    <div class="row g-md-5 pt-4">
                        <div class="col-md-3 my-3">
                            <div class="card">
                                <div>
                                    <iconify-icon class="service-icon text-primary" icon="la:shopping-cart"></iconify-icon>
                                </div>
                                <h3 class="card-title py-2 m-0">Free Delivery</h3>
                                <div class="card-text">
                                    <p class="blog-paragraph fs-6">Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 my-3">
                            <div class="card">
                                <div>
                                    <iconify-icon class="service-icon text-primary" icon="la:user-check"></iconify-icon>
                                </div>
                                <h3 class="card-title py-2 m-0">100% secure payment</h3>
                                <div class="card-text">
                                    <p class="blog-paragraph fs-6">Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 my-3">
                            <div class="card">
                                <div>
                                    <iconify-icon class="service-icon text-primary" icon="la:tag"></iconify-icon>
                                </div>
                                <h3 class="card-title py-2 m-0">Daily Offer</h3>
                                <div class="card-text">
                                    <p class="blog-paragraph fs-6">Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 my-3">
                            <div class="card">
                                <div>
                                    <iconify-icon class="service-icon text-primary" icon="la:award"></iconify-icon>
                                </div>
                                <h3 class="card-title py-2 m-0">Quality guarantee</h3>
                                <div class="card-text">
                                    <p class="blog-paragraph fs-6">Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section id="insta" class="my-5">
                <div class="row g-0 py-5">
                    <div class="col instagram-item  text-center position-relative">
                        <div class="icon-overlay d-flex justify-content-center position-absolute">
                            <iconify-icon class="text-white" icon="la:instagram"></iconify-icon>
                        </div>
                        <a href="/#">
                            <img src="images/insta1.jpg" alt="insta-img" class="img-fluid rounded-3" />
                        </a>
                    </div>
                    <div class="col instagram-item  text-center position-relative">
                        <div class="icon-overlay d-flex justify-content-center position-absolute">
                            <iconify-icon class="text-white" icon="la:instagram"></iconify-icon>
                        </div>
                        <a href="/#">
                            <img src="images/insta2.jpg" alt="insta-img" class="img-fluid rounded-3" />
                        </a>
                    </div>
                    <div class="col instagram-item  text-center position-relative">
                        <div class="icon-overlay d-flex justify-content-center position-absolute">
                            <iconify-icon class="text-white" icon="la:instagram"></iconify-icon>
                        </div>
                        <a href="/#">
                            <img src="images/insta3.jpg" alt="insta-img" class="img-fluid rounded-3" />
                        </a>
                    </div>
                    <div class="col instagram-item  text-center position-relative">
                        <div class="icon-overlay d-flex justify-content-center position-absolute">
                            <iconify-icon class="text-white" icon="la:instagram"></iconify-icon>
                        </div>
                        <a href="/#">
                            <img src="images/insta4.jpg" alt="insta-img" class="img-fluid rounded-3" />
                        </a>
                    </div>
                    <div class="col instagram-item  text-center position-relative">
                        <div class="icon-overlay d-flex justify-content-center position-absolute">
                            <iconify-icon class="text-white" icon="la:instagram"></iconify-icon>
                        </div>
                        <a href="/#">
                            <img src="images/insta5.jpg" alt="insta-img" class="img-fluid rounded-3" />
                        </a>
                    </div>
                    <div class="col instagram-item  text-center position-relative">
                        <div class="icon-overlay d-flex justify-content-center position-absolute">
                            <iconify-icon class="text-white" icon="la:instagram"></iconify-icon>
                        </div>
                        <a href="/#">
                            <img src="images/insta6.jpg" alt="insta-img" class="img-fluid rounded-3" />
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Wishlist