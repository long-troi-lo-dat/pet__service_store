import React from 'react';
import '../assets/css/detail.css';
import '../assets/css/global1.css';
import facebook from '../assets/img/facebook.png';
import twitter from '../assets/img/twitter.png';
import linkdln from '../assets/img/in.png';
import pinterest from '../assets/img/pinterest.png';
import pate from '../assets/img/pate.jpg';


function Detail(props) {
    return (
        <>
            <div class="trang-chi-tit-sn-phm">

                <div class="mxh">
                    <div class="mxh-child"></div>

                    <div class="mxh-item"></div>

                    <div class="mxh-inner"></div>


                    <b class="facebook">FACEBOOK</b>
                    <img class="facebook-icon1" alt="" src={facebook} />

                    <div class="rectangle-icon"></div>

                    <b class="twitter">TWITTER</b>
                    <b class="linkedin">LINKEDIN</b>
                    <b class="pinterestt">PINTEREST</b>
                    <img class="twitter-icon" alt="" src={twitter} />

                    <img class="linkedin-icon" alt="" src={linkdln} />

                    <img class="pinterest-icon" alt="" src={pinterest} />
                </div>
                <div class="tensanpham">
                    <img class="tensanpham-child" alt="" src={pate} />

                    <div class="pate-lon-ch-container">
                        <p class="dg-house-qun">Pate lon chó mèo</p>
                        <p class="dg-house-qun">[Cá Ngừ Trắng & Thịt Gà] 80g</p>
                    </div>
                    <div class="div3">
                        150.000
                        <span class="span">đ</span>
                    </div>
                    <div class="availability-cn-container">
                        <span class="availability">Availability : </span>
                        <span class="cn-3-hng">còn 3 hàng</span>
                    </div>
                    <div class="vector-parent">
                        <img class="frame-item" alt="" src="./public/polygon-9.svg" />

                        <div class="div4">1</div>
                        <img class="frame-inner" alt="" src="./public/polygon-10.svg" />
                    </div>
                    <div class="thm-vo-gi-hng-wrapper" id="frameContainer2">
                        <div class="thm-vo-gi">THÊM VÀO GIỎ HÀNG</div>
                    </div>
                </div>
                <div class="mota">
                    <div class="pate-lon-ch1">
                        Pate lon chó mèo [Cá Ngừ Trắng & Thịt Gà] 80g
                    </div>
                    <div class="c-ng-trng1">
                        Cá ngừ trắng & Thịt gà đóng hộp Tuna White Meat là món ăn nhẹ giàu
                        dinh dưỡng, hỗ trợ cho sự phát triển toàn diện của mèo:
                    </div>
                    <div class="c-ng-trng2">
                        Cá ngừ trắng & Thịt gà đóng hộp Tuna White Meat bổ sung những vitamin
                        và khoáng chất thiết yếu mà bữa ăn hằng ngày có thể bị thiếu hụt. Sản
                        phẩm hỗ trợ chăm sóc lông bóng mượt, giúp sáng mắt, giảm đổ ghèn, tăng
                        cường trí não.
                    </div>
                    <div class="trong-c-ng">
                        Trong cá ngừ, thịt trắng là phần tinh túy, giàu dinh dưỡng và có nhiều
                        lợi ích đặc biệt đối với sức khỏe và làm đẹp. Thịt trắng có nhiều lợi
                        ích: giàu chất béo bão hòa không no - chất béo có lợi cho sức khỏe, dễ
                        tiêu hóa và hấp thu, giúp cơ thể đào thải lượng cholesterol xấu, tốt
                        cho tim mạch.
                    </div>
                    <div class="s-dng-tht-container">
                        <ul class="s-dng-tht">
                            Sử dụng thịt cá ngừ trắng và thịt gà tươi, miếng cá mềm, kích thước
                            nhỏ vừa ăn
                        </ul>
                    </div>
                    <div class="s-dng-tht-container1">
                        <ul class="s-dng-tht">
                            Sử dụng thịt cá ngừ trắng và thịt gà tươi, miếng cá mềm, kích thước
                            nhỏ vừa ăn
                        </ul>
                    </div>
                    <div class="s-dng-tht-container2">
                        <ul class="s-dng-tht">
                            Sử dụng thịt cá ngừ trắng và thịt gà tươi, miếng cá mềm, kích thước
                            nhỏ vừa ăn
                        </ul>
                    </div>
                    <div class="s-dng-tht-container2">
                        <ul class="s-dng-tht">
                            Sử dụng thịt cá ngừ trắng và thịt gà tươi, miếng cá mềm, kích thước
                            nhỏ vừa ăn
                        </ul>
                    </div>
                    <div class="s-dng-tht-container4">
                        <ul class="s-dng-tht">
                            Sử dụng thịt cá ngừ trắng và thịt gà tươi, miếng cá mềm, kích thước
                            nhỏ vừa ăn
                        </ul>
                    </div>
                    <div class="s-dng-tht-container5">
                        <ul class="s-dng-tht">
                            Sử dụng thịt cá ngừ trắng và thịt gà tươi, miếng cá mềm, kích thước
                            nhỏ vừa ăn
                        </ul>
                    </div>
                    <div class="s-dng-tht-container6">
                        <ul class="s-dng-tht">
                            Sử dụng thịt cá ngừ trắng và thịt gà tươi, miếng cá mềm, kích thước
                            nhỏ vừa ăn
                        </ul>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Detail;