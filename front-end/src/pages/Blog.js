import React from "react";
import './style/style.css';
import imagebanner from '../assets/img/images-blog/image 3.png';
import info1 from '../assets/img/images-blog/Rectangle 103.png';
import info2 from '../assets/img/images-blog/Rectangle 106.png';
import info3 from '../assets/img/images-blog/Rectangle 112.png';
import info4 from '../assets/img/images-blog/Rectangle 118.png';
import info5 from '../assets/img/images-blog/Rectangle 124.png';
import info6 from '../assets/img/images-blog/Rectangle 134.png';
import info7 from '../assets/img/images-blog/Rectangle 136.png';
import Navbar from "../components/Navbar";
function Blog(props) {
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
                <div className="w-full h-96">
                    <img
                        src={imagebanner}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        alt="imagebanner"
                    />

                </div>
                <div class="coverfull flex w-4/5 m-auto py-14">
                    <div class="prd-1 flex w-4/5">
                        <div class="littleprd1 mb-5">
                            <div class="coverimg">
                                <img
                                    src={info1}
                                    alt=""
                                    class="w-full h-full"
                                />
                            </div>
                            <div class="textprd">
                                Top shop thú cưng uy tín và giá rẻ tại quận 7 – TPHCM
                            </div>
                            <div class="littletext">
                                Bạn đang băn khoăn không biết shop thú cưng uy tín và giá rẻ tại quận 7 cho thú cưng
                            </div>
                            <div class="btn-more"> XEM THÊM</div>
                            <div class="line"></div>
                            <div class="coverlittleft flex">
                                <div class="littleft">10/4/2023</div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="5" viewBox="0 0 6 5" fill="none">
                                    <circle cx="2.50684" cy="2.5" r="2.5" fill="#8E8E8E" />
                                </svg>
                                <div class="littleft pl-2">Không phản hồi</div>
                            </div>
                        </div>
                        <div class="littleprd1 mb-5">
                            <div class="coverimg">
                                <img
                                    src={info2}
                                    alt=""
                                    class="w-full h-full"
                                />
                            </div>
                            <div class="textprd">
                                Spa thú cưng chất lượng tại Quận 7
                            </div>
                            <div class="littletext">
                                Bạn đang muốn tìm kiếm một spa thú cưng chất lượng và đáng tin cậy để cắt tỉa và tắm
                            </div>
                            <div class="btn-more"> XEM THÊM</div>
                            <div class="line"></div>
                            <div class="coverlittleft flex">
                                <div class="littleft">10/4/2023</div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="5" viewBox="0 0 6 5" fill="none">
                                    <circle cx="2.50684" cy="2.5" r="2.5" fill="#8E8E8E" />
                                </svg>
                                <div class="littleft pl-2">Không phản hồi</div>
                            </div>
                        </div>
                        <div class="littleprd1 mb-5">
                            <div class="coverimg">
                                <img
                                    src={info3}
                                    alt=""
                                    class="w-full h-full"
                                />
                            </div>
                            <div class="textprd">
                                G D HOUSE - Khách sạn thú cưng
                            </div>
                            <div class="littletext">
                                Bạn đang tìm kiếm một Khách sạn thú cưng tại TPHCM? Bạn có việc phải đi xa hay phải đi
                            </div>
                            <div class="btn-more"> XEM THÊM</div>
                            <div class="line"></div>
                            <div class="coverlittleft flex">
                                <div class="littleft">10/4/2023</div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="5" viewBox="0 0 6 5" fill="none">
                                    <circle cx="2.50684" cy="2.5" r="2.5" fill="#8E8E8E" />
                                </svg>
                                <div class="littleft pl-2">Không phản hồi</div>
                            </div>
                        </div>
                        <div class="littleprd1 mb-5">
                            <div class="coverimg">
                                <img
                                    src={info4}
                                    alt=""
                                    class="w-full h-full"
                                />
                            </div>
                            <div class="textprd">
                                Những sự thật thú vị về Mèo? Bạn đã biết?
                            </div>
                            <div class="littletext">
                                Mèo là loài động vật có vú, thân hình nhỏ nhắn, thông minh nhanh nhẹn và được nuôi thành thú
                            </div>
                            <div class="btn-more"> XEM THÊM</div>
                            <div class="line"></div>
                            <div class="coverlittleft flex">
                                <div class="littleft">10/4/2023</div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="5" viewBox="0 0 6 5" fill="none">
                                    <circle cx="2.50684" cy="2.5" r="2.5" fill="#8E8E8E" />
                                </svg>
                                <div class="littleft pl-2">Không phản hồi</div>
                            </div>
                        </div>
                        <div class="littleprd1 mb-5">
                            <div class="coverimg">
                                <img
                                    src={info5}
                                    alt=""
                                    class="w-full h-full"
                                />
                            </div>
                            <div class="textprd">
                                Tại sao chó của Tôi rụng lông ?
                            </div>
                            <div class="littletext">
                                Nếu bạn nuôi một chú chó rụng lông rất nhiều, đó có thể là một đặc điểm của giống chó
                            </div>
                            <div class="btn-more"> XEM THÊM</div>
                            <div class="line"></div>
                            <div class="coverlittleft flex">
                                <div class="littleft">10/4/2023</div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="5" viewBox="0 0 6 5" fill="none">
                                    <circle cx="2.50684" cy="2.5" r="2.5" fill="#8E8E8E" />
                                </svg>
                                <div class="littleft pl-2">Không phản hồi</div>
                            </div>
                        </div>
                        <div class="littleprd1 mb-5">
                            <div class="coverimg">
                                <img
                                    src={info7}
                                    alt=""
                                    class="w-full h-full"
                                />
                            </div>
                            <div class="textprd">
                                Dịch vụ cắt tỉa lông chó mèo chất lượng
                            </div>
                            <div class="littletext">
                                Dịch vụ cắt tỉa lông chó mèo là điều mà một người chủ tốt cần quan tâm. Điều này giúp
                            </div>
                            <div class="btn-more"> XEM THÊM</div>
                            <div class="line"></div>
                            <div class="coverlittleft flex">
                                <div class="littleft">10/4/2023</div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="5" viewBox="0 0 6 5" fill="none">
                                    <circle cx="2.50684" cy="2.5" r="2.5" fill="#8E8E8E" />
                                </svg>
                                <div class="littleft pl-2">Không phản hồi</div>
                            </div>
                        </div>
                        <div class="littleprd1 mb-5">
                            <div class="coverimg">
                                <img
                                    src={info7}
                                    alt=""
                                    class="w-full h-full"
                                />
                            </div>
                            <div class="textprd">
                                Tại sao chó của Tôi rụng lông ?
                            </div>
                            <div class="littletext">
                                Nếu bạn nuôi một chú chó rụng lông rất nhiều, đó có thể là một đặc điểm của giống chó
                            </div>
                            <div class="btn-more"> XEM THÊM</div>
                            <div class="line"></div>
                            <div class="coverlittleft flex">
                                <div class="littleft">10/4/2023</div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="5" viewBox="0 0 6 5" fill="none">
                                    <circle cx="2.50684" cy="2.5" r="2.5" fill="#8E8E8E" />
                                </svg>
                                <div class="littleft pl-2">Không phản hồi</div>
                            </div>
                        </div>
                        <div class="littleprd1 mb-5">
                            <div class="coverimg">
                                <img
                                    src={info6}
                                    alt=""
                                    class="w-full h-full"
                                />
                            </div>
                            <div class="textprd">
                                Spa thú cưng chất lượng tại Quận 7
                            </div>
                            <div class="littletext">
                                Bạn đang muốn tìm kiếm một spa thú cưng chất lượng và đáng tin cậy để cắt tỉa và tắm
                            </div>
                            <div class="btn-more"> XEM THÊM</div>
                            <div class="line"></div>
                            <div class="coverlittleft flex">
                                <div class="littleft">10/4/2023</div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="5" viewBox="0 0 6 5" fill="none">
                                    <circle cx="2.50684" cy="2.5" r="2.5" fill="#8E8E8E" />
                                </svg>
                                <div class="littleft pl-2">Không phản hồi</div>
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
                            <div class="holder">Tìm kiếm...</div>
                        </div>
                        <div class="cvalltext">
                            <div class="tllist">
                                DANH MỤC
                            </div>
                            <div class="cvlist">
                                <div class="list">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 12 12" fill="none">
                                        <path d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z" stroke="#666666" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <div class="tlist pl-2">Chia Sẽ Kinh Nghiệm</div>
                                </div>
                                <div class="list">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 12 12" fill="none">
                                        <path d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z" stroke="#666666" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <div class="tlist pl-2">Góc Giải Trí</div>
                                </div>
                                <div class="list">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 12 12" fill="none">
                                        <path d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z" stroke="#666666" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <div class="tlist pl-2">Dịch vụ tại nhà</div>
                                </div>


                            </div>
                        </div>
                        <div class="cvallblog">
                            <div class="tlblog"> BÀI VIẾT MỚI</div>
                            <div class="cvtextblog">
                                <div class="textblog">
                                    Mách bạn dịch vụ spa thú cưng tại nhà tốt nhất tại quận 7
                                    <div class="cvdatepost flex">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                            <path d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z" stroke="#666666" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <div class="date ml-1">02 Th6 2023</div>
                                    </div>
                                </div>
                                <div class="textblog">
                                    Mách bạn dịch vụ spa thú cưng tại nhà tốt nhất tại quận 7
                                    <div class="cvdatepost flex">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                            <path d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z" stroke="#666666" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <div class="date ml-1">02 Th6 2023</div>
                                    </div>
                                </div>
                                <div class="textblog">
                                    Mách bạn dịch vụ spa thú cưng tại nhà tốt nhất tại quận 7
                                    <div class="cvdatepost flex">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                            <path d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z" stroke="#666666" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <div class="date ml-1">02 Th6 2023</div>
                                    </div>
                                </div>
                                <div class="textblog">
                                    Mách bạn dịch vụ spa thú cưng tại nhà tốt nhất tại quận 7
                                    <div class="cvdatepost flex">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                            <path d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z" stroke="#666666" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <div class="date ml-1">02 Th6 2023</div>
                                    </div>
                                </div>
                                <div class="textblog">
                                    Mách bạn dịch vụ spa thú cưng tại nhà tốt nhất tại quận 7
                                    <div class="cvdatepost flex">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 12 12" fill="none">
                                            <path d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z" stroke="#666666" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <div class="date ml-1">02 Th6 2023</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="btn-move flex">
                    <div class="move">1</div>
                    <div class="move">2</div>
                    <div class="move">3</div>
                    <div class="move">4</div>
                    <div class="move">...</div>
                    <div class="move">17</div>
                    <div class="move">18</div>
                    <div class="move">19</div>
                    <div class="move">20</div>
                </div>

            </div>
        </>

    );
}

export default Blog;
