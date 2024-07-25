import React from "react";

import FastRegister from "../components/FastRegister"
import Services from "../components/Services"

import imgthumbnail from "../assets/img/images-blog/thumbnail.png"
import thumbnailswiper from "../assets/img/images-blog/thumbnailswiper.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import "swiper/css";
import 'swiper/css/pagination';
function Blog() {
    return (
        <>
            <section id="banner" className="py-3 mb-5" style={{ background: "#F9F3EC" }}>
                <div className="container">
                    <div className="hero-content py-5 my-3">
                        <h2 className="display-1 mt-3 mb-0">Blogs</h2>
                        <nav className="breadcrumb">
                            <div className="breadcrumb-item">Trang chủ</div>
                            <span className="breadcrumb-item active">Blogs</span>
                        </nav>
                    </div>
                </div>
            </section>
            <div className="container">
                <Swiper
                    autoplay={{
                        delay: 200000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="pb-5"
                >
                    <SwiperSlide>
                        <div className="post-entry d-lg-flex">
                            <div className="col-md-4 me-lg-5 mb-4 mb-lg-0">
                                <a href="single.html" className="text-primary">
                                    <img src={thumbnailswiper} alt="dghouse.shop/blogs" className="img-fluid rounded-3" />
                                </a>
                            </div>
                            <div className="content align-self-center col-md-7">
                                <div className="post-meta mb-3">
                                    <a href="/#" className="category">Business</a>, <a href="/#" className="category">Travel</a> —
                                    <span className="date">July 2, 2020</span>
                                    <h2 className="heading mb-2"><a href="single.html" className="text-primary">10 lý do để giúp đỡ động vật bị bỏ rơi.</a></h2>
                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="post-entry d-lg-flex">
                            <div className="me-lg-5 mb-4 mb-lg-0">
                                <a href="single.html" className="text-primary">
                                    <img src={thumbnailswiper} alt="dghouse.shop/blogs" className="img-fluid rounded-3" />
                                </a>
                            </div>
                            <div className="content align-self-center">
                                <div className="post-meta mb-3">
                                    <a href="/#" className="category">Business</a>, <a href="/#" className="category">Travel</a> —
                                    <span className="date">July 2, 2020</span>
                                </div>
                                <h2 className="heading mb-2"><a href="single.html" className="text-primary">Your most unhappy customers are your greatest source of learning.</a></h2>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="post-entry d-lg-flex">
                            <div className="me-lg-5 mb-4 mb-lg-0">
                                <a href="single.html" className="text-primary">
                                    <img src={thumbnailswiper} alt="dghouse.shop/blogs" className="img-fluid rounded-3" />
                                </a>
                            </div>
                            <div className="content align-self-center">
                                <div className="post-meta mb-3">
                                    <a href="/#" className="category">Business</a>, <a href="/#" className="category">Travel</a> —
                                    <span className="date">July 2, 2020</span>
                                </div>
                                <h2 className="heading mb-2"><a href="single.html" className="text-primary">Your most unhappy customers are your greatest source of learning.</a></h2>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-lg-4">
                        <div className="post-entry d-block small-post-entry-v">
                            <div className="thumbnail rounded-3">
                                <a href="single.html" className="text-primary">
                                    <img src={imgthumbnail} alt="dghouse.shop/blogs" className="img-fluid rounded-3" />
                                </a>
                            </div>
                            <div className="content">
                                <div className="post-meta mb-1">
                                    <a href="/#" className="category">Business</a>, <a href="/#" className="category">Travel</a> —
                                    <span className="date opacity-50">July 2, 2020</span>
                                </div>
                                <h3 className="heading mb-2"><a href="/#" className="text-primary">Your most unhappy customers are your greatest source of learning.</a></h3>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="post-entry d-block small-post-entry-v">
                            <div className="thumbnail rounded-3">
                                <a href="single.html" className="text-primary">
                                    <img src={imgthumbnail} alt="dghouse.shop/blogs" className="img-fluid rounded-3" />
                                </a>
                            </div>
                            <div className="content">
                                <div className="post-meta mb-1">
                                    <a href="/#" className="category">Business</a>, <a href="/#" className="category">Travel</a> —
                                    <span className="date opacity-50">July 2, 2020</span>
                                </div>
                                <h3 className="heading mb-2"><a href="/#" className="text-primary">Your most unhappy customers are your greatest source of learning.</a></h3>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="post-entry d-block small-post-entry-v">
                            <div className="thumbnail rounded-3">
                                <a href="single.html" className="text-primary">
                                    <img src={imgthumbnail} alt="dghouse.shop/blogs" className="img-fluid rounded-3" />
                                </a>
                            </div>
                            <div className="content">
                                <div className="post-meta mb-1">
                                    <a href="/#" className="category">Business</a>, <a href="/#" className="category">Travel</a> —
                                    <span className="date opacity-50">July 2, 2020</span>
                                </div>
                                <h3 className="heading mb-2"><a href="/#" className="text-primary">Your most unhappy customers are your greatest source of learning.</a></h3>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="post-entry d-block small-post-entry-v">
                            <div className="thumbnail rounded-3">
                                <a href="single.html" className="text-primary">
                                    <img src={imgthumbnail} alt="dghouse.shop/blogs" className="img-fluid rounded-3" />
                                </a>
                            </div>
                            <div className="content">
                                <div className="post-meta mb-1">
                                    <a href="/#" className="category">Business</a>, <a href="/#" className="category">Travel</a> —
                                    <span className="date opacity-50">July 2, 2020</span>
                                </div>
                                <h3 className="heading mb-2"><a href="/#" className="text-primary">Your most unhappy customers are your greatest source of learning.</a></h3>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="post-entry d-block small-post-entry-v">
                            <div className="thumbnail rounded-3">
                                <a href="single.html" className="text-primary">
                                    <img src={imgthumbnail} alt="dghouse.shop/blogs" className="img-fluid rounded-3" />
                                </a>
                            </div>
                            <div className="content">
                                <div className="post-meta mb-1">
                                    <a href="/#" className="category">Business</a>, <a href="/#" className="category">Travel</a> —
                                    <span className="date opacity-50">July 2, 2020</span>
                                </div>
                                <h3 className="heading mb-2"><a href="/#" className="text-primary">Your most unhappy customers are your greatest source of learning.</a></h3>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="post-entry d-block small-post-entry-v">
                            <div className="thumbnail rounded-3">
                                <a href="single.html" className="text-primary">
                                    <img src={imgthumbnail} alt="dghouse.shop/blogs" className="img-fluid rounded-3" />
                                </a>
                            </div>
                            <div className="content">
                                <div className="post-meta mb-1">
                                    <a href="/#" className="category">Business</a>, <a href="/#" className="category">Travel</a> —
                                    <span className="date opacity-50">July 2, 2020</span>
                                </div>
                                <h3 className="heading mb-2"><a href="/#" className="text-primary">Your most unhappy customers are your greatest source of learning.</a></h3>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FastRegister />
            <Services />
        </>

    );
}

export default Blog;
