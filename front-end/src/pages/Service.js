import React from 'react';
import '../pages/style/service.css';
import backgroundImg from "../assets/images-service/background.jpg";
import img1 from "../assets/images-service/1.jpg"
import img2 from "../assets/images-service/2.jpg"
import img3 from "../assets/images-service/3.jpg"
import img4 from "../assets/images-service/4.jpg"
import img5 from "../assets/images-service/5.jpg"
import img6 from "../assets/images-service/6.jpg"
import img7 from "../assets/images-service/7.jpg"
import img8 from "../assets/images-service/8.jpg"
import img9 from "../assets/images-service/9.jpg"
function Service(props) {
    return (
        <div>
            <div class="img">
                <img src={backgroundImg} alt="" />
                <h1 style={{ color: "White", fontWeight: "800" }}>Dịch Vụ Tại Nhà</h1>
            </div>
            <div class="container">
                <div class="content">
                    <div class="left">
                        <div class="item">
                            <img src={img1} alt="" />
                            <div class="item-content">
                                <h3><a href={{}}>Top shop thú cưng uy tín và giá rẻ tại quận 7 - TPHCM</a></h3>
                                <div class="question">Bạn đang băn khoăn không biết shop thú cưng uy tín và giá rẻ tại quận 7
                                    cho thú cưng</div>
                                <button>Xem thêm</button>
                            </div>
                            <hr style={{ borderTop: "1px solid #d0d0d0" }} />
                            <div class="date">10/04/2023 <span style={{ marginLeft: "10px" }}> chưa có phản hồi</span></div>
                        </div>
                        <div class="item">
                            <img src={img2} alt="" />
                            <div class="item-content">
                                <h3><a href={{}}>Spa thú cưng chất lượng tại Quận 7</a></h3>
                                <div class="question">Bạn đang băn khoăn không biết shop thú cưng uy tín và giá rẻ tại quận 7
                                    cho thú cưng</div>
                                <button>Xem thêm</button>
                            </div>
                            <hr style={{ borderTop: "1px solid #d0d0d0" }} />
                            <div class="date">10/04/2023 <span style={{ marginLeft: "10px" }}> chưa có phản hồi</span></div>
                        </div>
                        <div class="item">
                            <img src={img3} alt="" />
                            <div class="item-content">
                                <h3><a href={{}}>PET HOTEL – Khách sạn thú cưng TPHCM</a></h3>
                                <div class="question">Bạn đang băn khoăn không biết shop thú cưng uy tín và giá rẻ tại quận 7
                                    cho thú cưng</div>
                                <button>Xem thêm </button>
                            </div>
                            <hr style={{ borderTop: "1px solid #d0d0d0" }} />
                            <div class="date">10/04/2023 <span style={{ marginLeft: "10px" }}> chưa có phản hồi</span></div>
                        </div>
                        <div class="item">
                            <img src={img4} alt="" />
                            <div class="item-content">
                                <h3><a href={{}}>Những sự thật thú vị về Mèo? Bạn đã biết?</a></h3>
                                <div class="question">Bạn đang băn khoăn không biết shop thú cưng uy tín và giá rẻ tại quận 7
                                    cho thú cưng</div>
                                <button>Xem thêm</button>
                            </div>
                            <hr style={{ borderTop: "1px solid #d0d0d0" }} />
                            <div class="date">10/04/2023 <span style={{ marginLeft: "10px" }}> chưa có phản hồi</span></div>
                        </div>
                        <div class="item">
                            <img src={img5} alt="" />
                            <div class="item-content">
                                <h3><a href={{}}>Tại sao chó của Tôi rụng lông ?</a></h3>
                                <div class="question">Bạn đang băn khoăn không biết shop thú cưng uy tín và giá rẻ tại quận 7
                                    cho thú cưng</div>
                                <button>Xem thêm</button>
                            </div>
                            <hr style={{ borderTop: "1px solid #d0d0d0" }} />
                            <div class="date">10/04/2023 <span style={{ marginLeft: "10px" }}> chưa có phản hồi</span></div>
                        </div>
                        <div class="item">
                            <img src={img6} alt="" />
                            <div class="item-content">
                                <h3><a href={{}}>Dịch vụ cắt tỉa lông chó mèo chất lượng tại TPHCM</a></h3>
                                <div class="question">Bạn đang băn khoăn không biết shop thú cưng uy tín và giá rẻ tại quận 7
                                    cho thú cưng</div>
                                <button>Xem thêm</button>
                            </div>
                            <hr style={{ borderTop: "1px solid #d0d0d0" }} />
                            <div class="date">10/04/2023 <span style={{ marginLeft: "10px" }}> chưa có phản hồi</span></div>
                        </div>
                        <div class="item">
                            <img src={img7} alt="" />
                            <div class="item-content">
                                <h3><a href={{}}>Những loài chuột “độc lạ” nhất thế giới</a></h3>
                                <div class="question">Bạn đang băn khoăn không biết shop thú cưng uy tín và giá rẻ tại quận 7
                                    cho thú cưng</div>
                                <button>Xem thêm</button>
                            </div>
                            <hr style={{ borderTop: "1px solid #d0d0d0" }} />
                            <div class="date">10/04/2023 <span style={{ marginLeft: "10px" }}> chưa có phản hồi</span></div>
                        </div>
                        <div class="item">
                            <img src={img8} alt="" />
                            <div class="item-content">
                                <h3><a href={{}}>Cách đỡ đẻ cho mèo tại nhà và những điều cần lưu ý</a></h3>
                                <div class="question">Bất kể là bạn nuôi mèo thuần chủng như là một nghề để kiếm sống hay chịu
                                    trách nhiệm chăm</div>
                                <button>Xem thêm</button>
                            </div>
                            <hr style={{ borderTop: "1px solid #d0d0d0" }} />
                            <div class="date">10/04/2023 <span style={{ marginLeft: "10px" }}> chưa có phản hồi</span></div>
                        </div>
                        <div class="item">
                            <img src={img9} alt="" />
                            <div class="item-content">
                                <h3><a href={{}}>Cách nuôi mèo Mướp mập mạp khỏe mạnh chuẩn nhất</a></h3>
                                <div class="question">Bạn đang băn khoăn không biết shop thú cưng uy tín và giá rẻ tại quận 7
                                    cho thú cưng</div>
                                <button>Xem thêm</button>
                            </div>
                            <hr style={{ borderTop: "1px solid #d0d0d0" }} />
                            <div class="date">10/04/2023 <span style={{ marginLeft: "10px" }}> chưa có phản hồi</span></div>
                        </div>
                    </div>
                    <div class="right">
                        <div class="search">
                            <span>
                                <i class="fas fa-search" style={{ border: "1px solid #f0f0f0", borderRadius: "50% 0 0 50%" }}></i>
                            </span>
                            <input type="search" placeholder="Tìm kiếm..." />
                            <span>
                                <i class="fas fa-search"
                                    style={{ border: "1px solid #f0f0f0", borderRadius: "0 50% 50% 0", color: "#f0f0f0" }}></i>
                            </span>
                        </div>
                        <div class="danhmuc">
                            <h1>DANH MỤC</h1>
                            <ul class="danhmuc-list">
                                <li><a href={{}}><i class="far fa-circle"></i><span> Chia sẻ kinh nghiệm </span></a></li>
                                <li><a href={{}}><i class="far fa-circle"></i><span> Góc giải trí </span></a></li>
                                <li><a href={{}}><i class="far fa-circle"></i><span> Dịch vụ tại nhà </span></a></li>
                            </ul>

                        </div>
                        <div class="news">
                            <h1>BÀI VIẾT MỚI</h1>
                            <ul class="news-list">
                                <li>
                                    <a href={{}}>
                                        <p class="header">Mách bạn dịch vụ spa thú cưng tại nhà tốt nhất tại quận 7 </p>
                                        <p class="date"><i class="fas fa-bullseye"></i> <span>02 Th6 2023</span></p>
                                    </a>
                                </li>
                                <li>
                                    <a href={{}}>
                                        <p class="header">Những Món Đồ Chơi Cho Mèo Mê Tít </p>
                                        <p class="date"><i class="fas fa-bullseye"></i> <span>02 Th6 2023</span></p>
                                    </a>
                                </li>
                                <li>
                                    <a href={{}}>
                                        <p class="header">Dáng Ngủ Của Mèo Nói Lên Điều Gì?</p>
                                        <p class="date"><i class="fas fa-bullseye"></i> <span>02 Th6 2023</span></p>
                                    </a>
                                </li>
                                <li>
                                    <a href={{}}>
                                        <p class="header">Mẹo chọn chuồng cho mèo phù hợp</p>
                                        <p class="date"><i class="fas fa-bullseye"></i> <span>02 Th6 2023</span></p>
                                    </a>
                                </li>
                                <li>
                                    <a href={{}}>
                                        <p class="header">Những món đồ dành cho thú cưng nên có</p>
                                        <p class="date"><i class="fas fa-bullseye"></i> <span>02 Th6 2023</span></p>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Service;