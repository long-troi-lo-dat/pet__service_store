import React from "react";
import LogoHeader from "../../assets/logo-1.png";

function Footer(props) {
  return (
    <footer
      style={{
        width: "100%",
        backgroundColor: "White",
        marginTop: "50px",
        marginBottom: "20px"
      }}
    >
      <div class="tillefinal" style={{ color: "#41403E", backgroundColor: "#f9f3ec" }}>
        Hotline hỗ trợ 24/7 của chúng tôi luôn sẵn sàng giải đáp mọi thắc mắc
        của bạn | 077 766 3476
      </div>
      <div class="container">
        <div class="d-flex justify-content-between">
          <div class="mb-6 md:mb-0" style={{ maxWidth: "400px", textAlign: "justify" }}>
            <img src={LogoHeader} alt="" />
            <p style={{ fontSize: "13px" }}>
              DG House ra đời với mong muốn mang lại cho khách hàng sự chuyên nghiệp, uy tín mang nét đẹp hoa mỹ mà chúng tôi đem lại sự trải nghiệm tốt nhất cho thú cưng của chúng ta. Với nhiều năm kinh nghiệm trong ngành dịch vụ thú cưng bao gồm: Spa thú cưng, Khách sạn thú cưng, Dịch vụ thú cưng tại nhà,…
            </p>
          </div>
          <div>
            <h3 style={{ height: "62px", lineHeight: "62px" }}>
              Dịch vụ
            </h3>
            <ul style={{ fontSize: "13px" }}>
              <li class="mb-2">
                Spa chuẩn thú cưng 5 sao
              </li>
              <li class="mb-2">
                Dịch vụ cắt tỉa lông
              </li>
              <li class="mb-2">
                Dịch vụ hotel thú cưng
              </li>
            </ul>
          </div>
          <div>
            <h3 style={{ height: "62px", lineHeight: "62px" }}>
              Truy cập
            </h3>
            <ul style={{ fontSize: "13px" }}>
              <li class="mb-2">
                Giới thiệu về DG House
              </li>
              <li class="mb-2">
                Chia sẻ kiến thức và kinh nghiệm
              </li>
            </ul>
          </div>
          <div>
            <img src={process.env.REACT_APP_URL_API + "/footer/logo-da-thong-bao-voi-bo-cong-thuong.png"} alt="" />
          </div>
        </div>
      </div>
    </footer>
  )
}


export default Footer;
