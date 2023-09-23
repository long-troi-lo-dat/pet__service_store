import React from 'react';
import './lienhe.css'

function Contact(props) {
    return (
        <div>
            <div class="banner"></div>
            <div class="v12_226">
                <div class="v12_317">
                    <span class="v12_91">Liên Hệ</span>
                    <span class="v12_92">Đóng góp ý kiến Các trường được đánh dấu * là bắt buộc</span>
                    <span class="v12_102">Hãy ghé thăm</span>
                    <span class="v12_101">Office Spa nhé</span>
                    <span class="v12_96">
                        DGHOUSE HCM ra đời với mong muốn mang lại cho
                        khách hàng sự chuyên nghiệp, uy tín mang nét đẹp hoa mỹ mà chúng tôi đem lại sự trải nghiệm tốt nhất cho
                        thú cưng của mọi nhà. Với hơn nhiều năm kinh nghiệm trong ngành dịch vụ thú cưng bao gồm: Spa thú cưng,
                        Thú y, Sản phẩm dành cho thú cưng, Khách sạn thú cưng, Dịch vụ dắt chó đi dạo, Cung cấp các dòng thú
                        cưng chuyên nghiệp…
                    </span>

                    <div class="v12_98"></div>
                    <div class="v12_99"></div>
                    <div class="v12_100"></div>
                    <div class="v12_97"></div>
                </div>

                <div class="v12_316">
                    <div class="v12_197"></div>
                    <span class="v12_199">Công viên phần mềm Quang Trung</span>
                    <div class="v12_198"></div>
                    <span class="v12_200">Hotline 0825 478 781</span>
                    <div class="v12_196"></div>
                    <span class="v12_201">dghouse@gmail.com</span>
                </div>

                <span class="v12_202">
                    <form>
                        <label for="name">Họ Tên *</label>
                        <input id="name" name="name" type="text" value="" />
                    </form>
                </span>

                <span class="v12_206">
                    <form>
                        <label for="name">Số Điện Thoại* </label>
                        <input id="sdt" name="sdt" type="number" value="" />
                    </form>
                </span>

                <span class="v12_207">
                    <form>
                        <label for="name">Email *</label>
                        <input id="email" name="email" type="text" value="" />
                    </form>
                </span>

                <span class="v12_209">
                    <form>
                        <label for="name">Lời Nhắn*</label>
                        <input id="loinhan" name="loinhan" type="text" value="" />
                    </form>
                </span>

                <div class="v12_213">
                    <button class="v12_210" type="button" >GỬI YÊU CẦU</button>

                </div>



            </div>

            <div class="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d85322.97044067287!2d106.58329504167578!3d10.825381860147075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529292e8d3dd1%3A0xf15f5aad773c112b!2zSOG7kyBDaMOtIE1pbmgsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1695492615910!5m2!1svi!2s" style={{ height: "600px", width: "1350px" }}></iframe>
            </div>

        </div>

    );
}

export default Contact;