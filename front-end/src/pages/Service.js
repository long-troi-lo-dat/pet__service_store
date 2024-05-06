import React from 'react';
import './style/service.css';
import backgroundImg from "../assets/img/images-service/background.jpg";
import Navbar from '../components/Navbar';
import Cart from './cart';

function Service(props) {
    return (
        <>
            <Navbar />
            <div
                style={{
                    fontFamily: "Montsterrat",
                    fontWeight: 400,
                }}
                className=""
            >
                <div class="sv__banner">
                    <img src={backgroundImg} alt="" />
                </div>
                <div className=' text-4xl font-bold text-center py-6'>Dịch Vụ Tại Nhà</div>
                <div class="sv__coverfull flex w-4/5 m-auto py-8">
                    <div class="sv__prd-1 flex w-4/5">
                        <div class="sv__littleprd1 mb-5">
                            <div class="sv__coverimg">
                                <img
                                    src={require("../assets/img/images-service/1.jpg")}
                                    alt=""
                                    class="w-full h-full"
                                />
                            </div>
                            <div class="sv__textprd">
                                Top shop thú cưng uy tín và giá rẻ tại quận 7 – TPHCM
                            </div>
                            <div class="sv__littletext">
                                Bạn đang băn khoăn không biết shop thú cưng uy tín và giá rẻ tại quận 7 cho thú cưng
                            </div>
                            <div class="sv__btn-more"> XEM THÊM</div>
                            <div class="sv__line"></div>
                            <div class="sv__coverlittleft flex">
                                <div class="sv__littleft">10/4/2023</div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="5" viewBox="0 0 6 5" fill="none">
                                    <circle cx="2.50684" cy="2.5" r="2.5" fill="#8E8E8E" />
                                </svg>
                                <div class="sv__littleft pl-2">Không phản hồi</div>
                            </div>
                        </div>
                        <div class="sv__littleprd1 mb-5">
                            <div class="sv__coverimg">
                                <img
                                    src={require("../assets/img/images-service/2.jpg")}
                                    alt=""
                                    class="w-full h-full"
                                />
                            </div>
                            <div class="sv__textprd">
                                Spa thú cưng chất lượng tại Quận 7
                            </div>
                            <div class="sv__littletext">
                                Bạn đang muốn tìm kiếm một spa thú cưng chất lượng và đáng tin cậy để cắt tỉa và tắm
                            </div>
                            <div class="sv__btn-more"> XEM THÊM</div>
                            <div class="sv__line"></div>
                            <div class="sv__coverlittleft flex">
                                <div class="sv__littleft">10/4/2023</div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="5" viewBox="0 0 6 5" fill="none">
                                    <circle cx="2.50684" cy="2.5" r="2.5" fill="#8E8E8E" />
                                </svg>
                                <div class="sv__littleft pl-2">Không phản hồi</div>
                            </div>
                        </div>
                        <div class="sv__littleprd1 mb-5">
                            <div class="sv__coverimg">
                                <img
                                    src={require("../assets/img/images-service/3.jpg")}
                                    alt=""
                                    class="w-full h-full"
                                />
                            </div>
                            <div class="sv__textprd">
                                G D HOUSE - Khách sạn thú cưng
                            </div>
                            <div class="sv__littletext">
                                Bạn đang tìm kiếm một Khách sạn thú cưng tại TPHCM? Bạn có việc phải đi xa hay phải đi
                            </div>
                            <div class="sv__btn-more"> XEM THÊM</div>
                            <div class="sv__line"></div>
                            <div class="sv__coverlittleft flex">
                                <div class="sv__littleft">10/4/2023</div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="5" viewBox="0 0 6 5" fill="none">
                                    <circle cx="2.50684" cy="2.5" r="2.5" fill="#8E8E8E" />
                                </svg>
                                <div class="sv__littleft pl-2">Không phản hồi</div>
                            </div>
                        </div>
                        <div class="sv__littleprd1 mb-5">
                            <div class="sv__coverimg">
                                <img
                                    src={require("../assets/img/images-service/4.jpg")}
                                    alt=""
                                    class="w-full h-full"
                                />
                            </div>
                            <div class="sv__textprd">
                                Những sự thật thú vị về Mèo? Bạn đã biết?
                            </div>
                            <div class="sv__littletext">
                                Mèo là loài động vật có vú, thân hình nhỏ nhắn, thông minh nhanh nhẹn và được nuôi thành thú
                            </div>
                            <div class="sv__btn-more"> XEM THÊM</div>
                            <div class="sv__line"></div>
                            <div class="sv__coverlittleft flex">
                                <div class="sv__littleft">10/4/2023</div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="5" viewBox="0 0 6 5" fill="none">
                                    <circle cx="2.50684" cy="2.5" r="2.5" fill="#8E8E8E" />
                                </svg>
                                <div class="sv__littleft pl-2">Không phản hồi</div>
                            </div>
                        </div>
                        <div class="sv__littleprd1 mb-5">
                            <div class="sv__coverimg">
                                <img
                                    src={require("../assets/img/images-service/5.jpg")}
                                    alt=""
                                    class="w-full h-full"
                                />
                            </div>
                            <div class="sv__textprd">
                                Tại sao chó của Tôi rụng lông ?
                            </div>
                            <div class="sv__littletext">
                                Nếu bạn nuôi một chú chó rụng lông rất nhiều, đó có thể là một đặc điểm của giống chó
                            </div>
                            <div class="sv__btn-more"> XEM THÊM</div>
                            <div class="sv__line"></div>
                            <div class="sv__coverlittleft flex">
                                <div class="sv__littleft">10/4/2023</div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="5" viewBox="0 0 6 5" fill="none">
                                    <circle cx="2.50684" cy="2.5" r="2.5" fill="#8E8E8E" />
                                </svg>
                                <div class="sv__littleft pl-2">Không phản hồi</div>
                            </div>
                        </div>
                        <div class="sv__littleprd1 mb-5">
                            <div class="sv__coverimg">
                                <img
                                    src={require("../assets/img/images-service/6.jpg")}
                                    alt=""
                                    class="w-full h-full"
                                />
                            </div>
                            <div class="sv__textprd">
                                Dịch vụ cắt tỉa lông chó mèo chất lượng
                            </div>
                            <div class="sv__littletext">
                                Dịch vụ cắt tỉa lông chó mèo là điều mà một người chủ tốt cần quan tâm. Điều này giúp
                            </div>
                            <div class="sv__btn-more"> XEM THÊM</div>
                            <div class="sv__line"></div>
                            <div class="sv__coverlittleft flex">
                                <div class="sv__littleft">10/4/2023</div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="5" viewBox="0 0 6 5" fill="none">
                                    <circle cx="2.50684" cy="2.5" r="2.5" fill="#8E8E8E" />
                                </svg>
                                <div class="sv__littleft pl-2">Không phản hồi</div>
                            </div>
                        </div>
                        <div class="sv__littleprd1 mb-5">
                            <div class="sv__coverimg">
                                <img
                                    src={require("../assets/img/images-service/7.jpg")}
                                    alt=""
                                    class="w-full h-full"
                                />
                            </div>
                            <div class="sv__textprd">
                                Tại sao chó của Tôi rụng lông ?
                            </div>
                            <div class="sv__littletext">
                                Nếu bạn nuôi một chú chó rụng lông rất nhiều, đó có thể là một đặc điểm của giống chó
                            </div>
                            <div class="sv__btn-more"> XEM THÊM</div>
                            <div class="sv__line"></div>
                            <div class="sv__coverlittleft flex">
                                <div class="sv__littleft">10/4/2023</div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="5" viewBox="0 0 6 5" fill="none">
                                    <circle cx="2.50684" cy="2.5" r="2.5" fill="#8E8E8E" />
                                </svg>
                                <div class="sv__littleft pl-2">Không phản hồi</div>
                            </div>
                        </div>
                        <div class="sv__littleprd1 mb-5">
                            <div class="sv__coverimg">
                                <img
                                    src={require("../assets/img/images-service/8.jpg")}
                                    alt=""
                                    class="w-full h-full"
                                />
                            </div>
                            <div class="sv__textprd">
                                Spa thú cưng chất lượng tại Quận 7
                            </div>
                            <div class="sv__littletext">
                                Bạn đang muốn tìm kiếm một spa thú cưng chất lượng và đáng tin cậy để cắt tỉa và tắm
                            </div>
                            <div class="sv__btn-more"> XEM THÊM</div>
                            <div class="sv__line"></div>
                            <div class="sv__coverlittleft flex">
                                <div class="sv__littleft">10/4/2023</div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="5" viewBox="0 0 6 5" fill="none">
                                    <circle cx="2.50684" cy="2.5" r="2.5" fill="#8E8E8E" />
                                </svg>
                                <div class="sv__littleft pl-2">Không phản hồi</div>
                            </div>
                        </div>


                    </div>
                    <div class="prd-2 ml-16">
                        <div class="searches">
                            <div class="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 15 15" fill="none">
                                    <path d="M7.5 14C11.0899 14 14 11.0899 14 7.5C14 3.91015 11.0899 1 7.5 1C3.91015 1 1 3.91015 1 7.5C1 11.0899 3.91015 14 7.5 14Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg><svg xmlns="http://www.w3.org/2000/svg" width="4.735px" height="5.272px" viewBox="0 0 7 8" fill="none">
                                    <path d="M1.29987 7L5.06934 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg></div>
                            <input class="holder" placeholder='Tìm kiếm...' />
                        </div>
                        <div class="sv__cvalltext">
                            <div class="sv__tllist">
                                DANH MỤC
                            </div>
                            <div class="sv__cvlist">
                                <div class="sv__list">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 12 12" fill="none">
                                        <path d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z" stroke="#666666" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <div class="sv__tlist pl-2">Chia Sẽ Kinh Nghiệm</div>
                                </div>
                                <div class="sv__list">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 12 12" fill="none">
                                        <path d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z" stroke="#666666" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <div class="sv__tlist pl-2">Góc Giải Trí</div>
                                </div>
                                <div class="sv__list">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 12 12" fill="none">
                                        <path d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z" stroke="#666666" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <div class="sv__tlist pl-2">Dịch vụ tại nhà</div>
                                </div>


                            </div>
                        </div>
                        <div class="sv__cvallblog">
                            <div class="sv__tlblog"> BÀI VIẾT MỚI</div>
                            <div class="sv__cvtextblog">
                                <div class="sv__textblog">
                                    Mách bạn dịch vụ spa thú cưng tại nhà tốt nhất tại quận 7
                                    <div class="sv__cvdatepost flex">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                            <path d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z" stroke="#666666" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <div class="sv__date ml-1">02 Th6 2023</div>
                                    </div>
                                </div>
                                <div class="sv__textblog">
                                    Mách bạn dịch vụ spa thú cưng tại nhà tốt nhất tại quận 7
                                    <div class="sv__cvdatepost flex">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                            <path d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z" stroke="#666666" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <div class="sv__date ml-1">02 Th6 2023</div>
                                    </div>
                                </div>
                                <div class="sv__textblog">
                                    Mách bạn dịch vụ spa thú cưng tại nhà tốt nhất tại quận 7
                                    <div class="sv__cvdatepost flex">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                            <path d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z" stroke="#666666" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <div class="sv__date ml-1">02 Th6 2023</div>
                                    </div>
                                </div>
                                <div class="sv__textblog">
                                    Mách bạn dịch vụ spa thú cưng tại nhà tốt nhất tại quận 7
                                    <div class="sv__cvdatepost flex">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                            <path d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z" stroke="#666666" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <div class="sv__date ml-1">02 Th6 2023</div>
                                    </div>
                                </div>
                                <div class="sv__textblog">
                                    Mách bạn dịch vụ spa thú cưng tại nhà tốt nhất tại quận 7
                                    <div class="sv__cvdatepost flex">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 12 12" fill="none">
                                            <path d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z" stroke="#666666" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <div class="sv__date ml-1">02 Th6 2023</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="sv__btn-move flex">
                    <div class="sv__move">1</div>
                    <div class="sv__move">2</div>
                    <div class="sv__move">3</div>
                    <div class="sv__move">4</div>
                    <div class="sv__move">...</div>
                    <div class="sv__move">17</div>
                    <div class="sv__move">18</div>
                    <div class="sv__move">19</div>
                    <div class="sv__move">20</div>
                </div>

            </div>
        </>

    );
}

export default Service;