import React from 'react';
import '../pages/style/contact.css'
import Navbar from '../components/Navbar';

function Contact() {
    return (
        <>
            <Navbar />
            <div>
                <div class="contact-banner"></div>
                <div class="container-contact">
                    <div class="contact-parent">
                        <div class="content-contact">
                            <div class="lin-h1">Liên Hệ</div>
                            <div class="ng-gp-container">
                                <p class="ng-gp">Đóng góp ý kiến</p>
                                <p class="ng-gp">
                                    <span>Các trường được đánh dấu </span>
                                    <span class="span1">*</span>
                                    <span class="l-bt-buc"> là bắt buộc</span>
                                </p>
                            </div>
                            <b class="hy-gh-thm">Hãy ghé thăm</b>
                            <div class="office-spa-nh-container">
                                <span>
                                    <b>DG House</b>
                                    <i class="i"> </i>
                                </span>
                                <b class="l-bt-buc">nhé</b>
                            </div>
                            <div class="dghouse-hcm-ra-container">
                                <span class="dghouse-hcm">DGHOUSE HCM</span>
                                <span class="ra-i-vi">
                                    ra đời với mong muốn mang lại cho khách hàng sự chuyên nghiệp,
                                    uy tín mang nét đẹp hoa mỹ mà chúng tôi đem lại sự trải nghiệm
                                    tốt nhất cho thú cưng của mọi nhà. Với hơn nhiều năm kinh nghiệm
                                    trong ngành dịch vụ thú cưng bao gồm: Spa thú cưng, Thú y, Sản
                                    phẩm dành cho thú cưng, Khách sạn thú cưng, Dịch vụ dắt chó đi
                                    dạo, Cung cấp các dòng thú cưng chuyên nghiệp…</span
                                >
                            </div>
                            <div class="content-child-1"></div>
                            <div class="content-child-2"></div>
                            <div class="content-child-3"></div>
                            <div class="content-child-4"></div>
                        </div>
                        <div class="address-contact-main">
                            <div class="adress-contact-logo-1"></div>
                            <span class="address-contact">Công viên phần mềm Quang Trung</span>
                            <div class="adress-contact-logo-2"></div>
                            <span class="hotline-contact">Hotline 123 456 789</span>
                            <div class="adress-contact-logo-3"></div>
                            <span class="email-contact">dghouse@gmail.com</span>
                        </div>
                    </div>



                    <div class="rectangle-parent-contact">
                        <div class="button">
                            <button class="gi-yu-cu" type="button" >GỬI YÊU CẦU</button>
                        </div>
                        <div class="h-tn-container">
                            <span>Họ Tên</span>
                            <span class="span1"> *</span>
                            <input id="name" name="name" type="text" value="" />
                        </div>
                        <div class="email">
                            <span>Email</span>
                            <span class="span1"> *</span>
                            <input id="email" name="email" type="text" value="" />
                        </div>
                        <div class="li-nhn">
                            <span>Lời Nhắn</span>
                            <span class="span1">*</span>
                            <input id="loinhan" name="loinhan" type="text" value="" />
                        </div>
                        <div class="s-in-thoi-container">
                            <span>Số Điện Thoại</span>
                            <span class="span1">*</span>
                            <input id="sdt" name="sdt" type="text" value="" />
                        </div>
                    </div>

                    <div class="map">
                        <iframe title="myFrame" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d85322.97044067287!2d106.58329504167578!3d10.825381860147075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529292e8d3dd1%3A0xf15f5aad773c112b!2zSOG7kyBDaMOtIE1pbmgsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1695492615910!5m2!1svi!2s" style={{ height: "600px", width: "1350px" }}></iframe>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Contact;