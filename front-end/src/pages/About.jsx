import React from "react";
import imageMain from "../assets/img/images-about/logo-2.png";
import dogImage from "../assets/img/images-about/dogImage.png";
import catImage from "../assets/img/images-about/catImage.png";
import Image2 from "../assets/img/images-about/image2.png";
import Image3 from "../assets/img/images-about/image3.png";
import Image4 from "../assets/img/images-about/image4.png";
import Image5 from "../assets/img/images-about/image5.png";
import Image6 from "../assets/img/images-about/image6.png";
import Image7 from "../assets/img/images-about/image7.png";
import Image8 from "../assets/img/images-about/image8.png";

function About() {

  return (
    <>
      <section id="banner" className="py-3 mb-5" style={{ background: "#F9F3EC" }}>
        <div className="container">
          <div className="hero-content py-5 my-3">
            <h2 className="display-1 mt-3 mb-0">Giới thiệu</h2>
            <nav className="breadcrumb">
              <div className="breadcrumb-item">Trang chủ</div>
              <span className="breadcrumb-item active">Giới thiệu</span>
            </nav>
          </div>
        </div>
      </section>
      {/* <div>
        <img
          src={imageAbout}
          className="img-fluid"
          alt=""
        />
      </div> */}

      <div className="container">
        <p className="text-justify">
          DGHOUSE ra đời với mong muốn mang lại cho khách hàng sự chuyên nghiệp, uy tín, và vẻ đẹp hoa mỹ. Chúng tôi cam kết đem lại trải nghiệm tốt nhất cho thú cưng của bạn. Với hơn 5 năm kinh nghiệm trong ngành dịch vụ thú cưng, chúng tôi cung cấp các dịch vụ như thú y, spa thú cưng, khách sạn thú cưng, và nhiều hơn nữa.
        </p>

        <h1>Tầm nhìn – Sứ mệnh – Giá trị cốt lõi</h1>

        <div className="">
          <h2 className="py-2">Tầm nhìn</h2>
          <p className="text-justify">
            DGHOUSE định hướng phát triển trở thành công ty cung cấp các sản phẩm và dịch vụ cho thú cưng hàng đầu Việt Nam.
          </p>

          <h2 className="py-2">Sứ mệnh</h2>
          <p className="text-justify">
            Cam kết mang đến trọn vẹn trải nghiệm cho khách hàng và vẻ đẹp toàn diện cho thú cưng.
          </p>

          <h2 className="font-bold text-xl py-2">Giá trị cốt lõi</h2>
          <ul className="list-disc space-y-4 ml-6">
            <li>Trân trọng khách hàng: Mỗi khách hàng khi đến DGHOUSE là một điều đáng quý. Khách hàng xứng đáng được trải nghiệm những dịch vụ tốt nhất, thú cưng được chăm sóc chu đáo nhất.</li>
            <li>Tôn trọng đồng nghiệp: Luôn lắng nghe và đề cao tinh thần đồng đội, tất cả cùng vì một mục tiêu phát triển chung.</li>
            <li>Coi trọng công việc: Thái độ làm việc chuyên nghiệp, chịu trách nhiệm với kết quả công việc.</li>
          </ul>

          <p className="my-8">
            DGHOUSE – Với hơn 5 năm kinh nghiệm trong ngành dịch vụ thú cưng bao gồm: Spa thú cưng, dịch vụ chăm sóc thú cưng tại nhà, thú y, sản phẩm dành cho thú cưng, khách sạn thú cưng, dịch vụ dắt chó đi dạo, và nhiều dịch vụ khác.
          </p>

          <div>
            <img src={imageMain} className="img-fluid mx-auto" alt="Main" />
          </div>

          <h1 className="py-5 text-center text-xl text-blue-600 font-medium underline">Địa chỉ: Quận Bình Thạnh, Tp. Hồ Chí Minh</h1>

          <h2 className="font-bold text-6xl py-10">Đội ngũ DGHOUSE</h2>
          <p className="pb-10">
            Với đội ngũ nhân viên Spa – Grooming chuyên nghiệp, đội ngũ chăm sóc khách hàng nhiều năm kinh nghiệm. Nhân viên DGHOUSE làm việc với tinh thần trách nhiệm, cởi mở với slogan “Để thú cưng của bạn được chăm sóc tốt nhất”.
          </p>

          <img src={dogImage} className="img-fluid" alt="Dog" />
          <img src={catImage} className="img-fluid" alt="Cat" />

          <p className="py-6">Cam kết mang lại cho quý khách dịch vụ với chất lượng tốt nhất và mức chi phí hợp lý.</p>

          <div className="items-start">
            <h2 className="text-2xl font-bold mb-4">Tại sao lại chọn DGHOUSE</h2>
            <ul className="list-disc space-y-4 list-inside ml-4 mb-10">
              <li>Dịch vụ CHẤT LƯỢNG đi đôi với UY TÍN.</li>
              <li>Đặc biệt, gói tháng 4 và 8 lần dành cho các khách hàng có nhu cầu sử dụng thường xuyên với rất nhiều ưu đãi.</li>
              <li>Đội ngũ nhân viên CHUYÊN NGHIỆP với thái độ phục vụ pet yêu một cách tốt nhất.</li>
              <li>Có bộ phận riêng để THEO DÕI tình hình thú cưng của bạn.</li>
              <li>Trang thiết bị ĐẦY ĐỦ, ĐẢM BẢO vệ sinh sạch sẽ.</li>
              <li>Giá TỐT NHẤT thị trường.</li>
              <li>Chương trình KHUYẾN MÃI thường xuyên, ưu đãi đặc biệt với khách hàng đã sử dụng dịch vụ.</li>
            </ul>

            <img src={Image2} alt="Image2" className="img-fluid" />
            <img src={Image3} alt="Image3" className="img-fluid" />

            <p className="text-center my-5 underline font-bold" style={{ color: "#3858BB" }}>Cung cấp các sản phẩm – phụ kiện dành cho thú cưng</p>

            <img src={Image4} className="img-fluid" alt="Image4" />
            <p className="text-center my-5 underline font-bold" style={{ color: "#3858BB" }}>Cung cấp các sản phẩm – phụ kiện dành cho thú cưng</p>

            <img src={Image5} className="img-fluid" alt="Image5" />
            <p className="text-center my-5 underline font-bold" style={{ color: "#3858BB" }}>Khách sạn thú cưng</p>

            <img src={Image6} className="img-fluid" alt="Image6" />
            <img src={Image7} className="img-fluid" alt="Image7" />
            <img src={Image8} className="img-fluid" alt="Image8" />

            <p>Chúng tôi đem đến cho thú cưng của bạn một sự chăm sóc với tình yêu thương, tinh thần trách nhiệm, và sự thấu hiểu tâm lý sâu sắc.</p>

          </div>
        </div>
      </div>
    </>
  );
}

export default About;
