import React from 'react';
import FastRegister from "../components/FastRegister"
import Services from "../components/Services"
function Contact() {
    return (
        <>
            <section id="banner" className="py-3 mb-5" style={{ background: "#F9F3EC" }}>
                <div className="container">
                    <div className="hero-content py-5 my-3">
                        <h2 className="display-1 mt-3 mb-0">Liên hệ</h2>
                        <nav className="breadcrumb">
                            <div className="breadcrumb-item">Trang chủ</div>
                            <span className="breadcrumb-item active">Liên hệ</span>
                        </nav>
                    </div>
                </div>
            </section>
            <section id="contact">
                <div className="container mb-5">
                    <div className="row">
                        <div className="col-lg-6 pb-5 pe-5">
                            <h2 className="text-dark">Thông tin cửa hàng</h2>
                            <p>Thời gian làm việc từ 8:00 sáng đến 18:00 chiều, liên hệ của bạn sẽ được trả lời trong vòng 24 tiếng.</p>
                            <div className="text-dark">
                                <h4 className="mb-3">Trụ sở</h4>
                                <div className="contact-phone">
                                    <p><a href="tel:+0777663476" className="text-dark">077 766 3476</a></p>
                                </div>
                                <div className="contact-email">
                                    <p><a href="mailto:hnbaolong.4work@gmail.com" className="text-dark">Hnbaolong.4work@gmail.com</a></p>
                                </div>
                                <div className="contact-address">
                                    <p>
                                        <a href="https://maps.app.goo.gl/2i4tEu4SRnXJKXQE8" rel='noreferrer' target="_blank" className="text-dark">
                                            290 Nơ Trang Long, Phường 10, Quận Bình Thạnh, Tp. Hồ Chí Minh
                                        </a>
                                    </p>
                                    <div className="iframe-rwd">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3918.9460458488725!2d106.69655632488303!3d10.81544103933573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1zSOG6u20gMjkwIE7GoSBUcmFuZyBMb25nLCBwaMaw4budbmcgMTIsIELDrG5oIFRo4bqhbmgsIEjhu5MgQ2jDrSBNaW5o!5e0!3m2!1svi!2s!4v1720107542519!5m2!1svi!2s" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="office-location" className="img-fluid"></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <h2 className="text-dark">Để lại thông tin liên hệ</h2>
                            <p>Điền vào thông tin dưới đây để liên hệ với chúng mình.</p>
                            <form className="form-group flex-wrap">
                                <div className="col-lg-12 d-flex mb-3">
                                    <input type="text" placeholder="Tên của bạn" className="form-control ps-3 me-3" />
                                    <input type="text" placeholder="Email của bạn" className="form-control ps-3" />
                                </div>
                                <div className="col-lg-12 mb-3">
                                    <input type="text" placeholder="Số điện thoại liên hệ" className="form-control ps-3" />
                                </div>
                                <div className="col-lg-12 mb-3">
                                    <input type="text" placeholder="Chủ đề bạn muốn đề cập là gì?" className="form-control ps-3" />
                                </div>
                                <div className="col-lg-12 mb-3">
                                    <textarea className="form-control ps-3" style={{ height: "150px" }} placeholder="Lời nhắn của bạn" />
                                </div>
                                <div className="d-grid">
                                    <button type="submit" className="btn btn-dark btn-lg rounded-1">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section >
            <FastRegister />
            <Services />
        </>
    )
};

export default Contact;