import React, { useState } from "react";
import imageAbout from "../assets/img/images-about/image1.png";
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
import Navbar from "../components/Navbar";

function About(props) {
  const [comment, setComment] = useState(0)

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
        <div className="w-full relative">
          <img
            src={imageAbout}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            alt="Image-banner"
          />
          <div className="absolute inset-0 flex items-center justify-center text-center">
            <p className="text-white text-7xl font-bold">
              Giới Thiệu Về DGHOUSE
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center mt-10 mb-14 ">
          <div className="text-left max-w-6xl p-6 ">
            <p className="text-xl text-black">
              DGHOUSE ra đời với mong muốn mang lại cho khách hàng sự chuyên
              nghiệp, uy tín mang nét đẹp hoa mỹ mà chúng tôi đem lại sự trải
              nghiệm tốt nhất cho thú cưng của chúng ta. Với hơn 5 năm kinh
              nghiệm trong ngành dịch vụ thú cưng bao gồm: Thú y, Spa thú cưng,
              Khách sạn thú cưng, Cung cấp các dòng thú cưng chuyên nghiệp...
            </p>
            <h2 className="font-bold text-6xl py-10">
              Tầm nhìn – Sứ mệnh – Giá trị cốt lõi của D G HOUSE
            </h2>
            <div className="text-left">
              <div className="pb-6">
                <h1 className="font-bold text-xl py-2">TẦM NHÌN</h1>
                <p>
                  D G HOUSE định hướng phát triển trở thành Công ty cung
                  cấp các Sản phẩm, dịch vụ cho thú cưng hàng đầu Việt Nam.
                </p>
                <h1 className="font-bold text-xl py-2">SỨ MỆNH</h1>
                <p>
                  Cam kết mang đến trọn vẹn trải nghiệm cho Khách hàng và vẻ đẹp
                  toàn diện cho thú cưng.
                </p>
                <h1 className="font-bold text-xl py-2">GÍA TRỊ CỐT LÕI</h1>
                <ul className="list-disc space-y-4">
                  <li className=" ml-[20px]">
                    Trân trọng khách hàng: Mỗi khách hàng khi đến D G HOUSE là
                    một điều đáng quý. Khách hàng xứng đáng được trải nghiệm
                    nhữnD Gịch vụ tốt nhất, thú cưng được chăm sóc chỉn chu
                    nhất.
                  </li>
                  <li className=" ml-[20px]">
                    Tôn trọng đồng nghiệp: Luôn luôn lắng nghe và đề cao tinh
                    thần đồng đội, tất cả cùng vì một mục tiêu phát triển chung.
                  </li>
                  <li className=" ml-[20px]">
                    Coi trọng công việc: Thái độ làm việc chuyên nghiệp, chịu
                    trách nhiệm với kết quả công việc.
                  </li>
                </ul>
                <h2 className="my-8">
                  <span className="font-bold">D G HOUSE</span> – Với hơn 5 kinh
                  nghiệm trong ngành dịch vụ thú cưng bao gồm: Spa thú cưng,
                  Dịch vụ chăm sóc thú cưng tại nhà, Thú y, Sản phẩm dành cho
                  thú cưng, Khách sạn thú cưng, Dịch vụ dắt chó đi dạo,…
                </h2>
              </div>
              <img src={imageMain} className="w-full" />
              <h1 className="py-5 text-center text-xl text-blue-600 font-medium underline">
                Địa chỉ : Công Viên Phần Mềm Quang Trung, Quận 12
              </h1>
              <h2 className="font-bold text-6xl py-10">Đội ngũ GD HOUSE</h2>
              <p className="pb-10">
                Với đội ngũ Nhân viên Spa – Grooming chuyên nghiệp, đội ngũ chăm
                sóc khách hàng có nhiều năm kinh nghiệm. Nhân viên D G
                HOUSE với tin thần trách nhiệm, cởi mở với Slogan “Để thú
                cưng của bạn được chỉn chu nhất”.
              </p>
              <img src={dogImage} className="w-full " />
              <img src={catImage} className="w-full " />
              <p className="py-6">
                Cam kết mang lại cho quý khách dịch vụ với chất lượng tốt nhất
                và mức chi phí hợp lý.
              </p>
              <div className="items-start">
                <h2 className="text-2xl font-bold mb-4">
                  Tại sao lại chọn D G HOUSE
                </h2>
                <ul className="list-disc space-y-4 list-inside  ml-4 mb-10">
                  <li>Dịch vụ CHẤT LƯỢNG đi đôi với UY TÍN.</li>
                  <li className="whitespace-pre-line">
                    Đặc biệt, Gói Tháng 4 và 8 lần dành cho các Khách hàng có
                    nhu cầu sử dụng thường xuyên với rất nhiều ưu đãi.
                  </li>
                  <li>
                    Đội ngũ nhân viên CHUYÊN NGHIỆP với THÁI ĐỘ phục vụ Pet yêu
                    một cách tốt nhất.
                  </li>
                  <li>
                    Có bộ phận riêng để THEO DÕI tình hình thú cưng của bạn.
                  </li>
                  <li>Trang thiết bị ĐẦY ĐỦ, ĐẢM BẢO vệ sinh sạch sẽ.</li>
                  <li>Giá TỐT NHẤT thị trường</li>
                  <li>
                    Chương trình KHUYẾN MÃI thường xuyên, ưu đãi đặc biệt với
                    khách hàng đã sử dụnD Gịch vụ.
                  </li>
                </ul>
                <img src={Image2} alt="Imgae2" className="w-full" />
                <img src={Image3} alt="Image3" className="w-full" />
                <p
                  style={{
                    color: "#3858BB",
                  }}
                  className="text-center my-5 underline font-bold "
                >
                  Cung cấp các sản phẩm – phụ kiện dành cho thú cưng
                </p>
                <img src={Image4} className="w-full" />
                <p
                  style={{
                    color: "#3858BB",
                  }}
                  className="text-center my-5 underline font-bold "
                >
                  Cung cấp các sản phẩm – phụ kiện dành cho thú cưng
                </p>
                <img src={Image5} className="w-full" />
                <p
                  style={{
                    color: "#3858BB",
                  }}
                  className="text-center my-5 underline font-bold "
                >
                  Khách sạn thú cưng
                </p>

                <img src={Image6} className="w-full" />
                <img src={Image7} className="w-full" />
                <img src={Image8} className="w-full" />
                <p>
                  Chúng tôi đem đến cho thú cưng của bạn một sự chăm sóc với
                  tình thương yêu, tinh thần trách nhiệm, và sự thông hiểu tâm
                  lý sâu sắc.
                </p>
                <div className="bg-slate-500 w-full h-52 my-8"></div>
                <div className="flex space-x-6 border-b-2 py-12 pt-8">
                  <span
                    style={{
                      backgroundColor: "rgba(59, 89, 152, 1)",
                    }}
                    className="text-white font-bold flex items-center justify-center py-4 px-10 rounded-lg "
                  >
                    FACEBOOK
                  </span>
                  <span
                    style={{
                      backgroundColor: "#49B3F4",
                    }}
                    className="text-white flex font-bold  items-center justify-center px-10 rounded-lg"
                  >
                    TWITTER
                  </span>
                  <span
                    style={{
                      backgroundColor: "#0077B5",
                    }}
                    className="text-white flex font-bold  items-center justify-center px-10  rounded-lg"
                  >
                    LINKEDIN
                  </span>
                  <span
                    style={{
                      backgroundColor: "#BD081C",
                    }}
                    className="text-white font-bold  flex items-center justify-center px-10 rounded-lg"
                  >
                    PRINTERESTT
                  </span>
                </div>
                <div className=" flex justify-between my-10 h-auto">
                  <div className="font-bold text-xl">{comment} comments</div>
                  <div className="text-xl font-semibold">
                    Sort by:
                    <select
                      style={{
                        backgroundColor: "gray",
                      }}
                      id="filter"
                      className="ml-2 border border-gray-300 rounded px-2 py-1"
                    >
                      <option value="newest">New</option>
                      <option value="oldest">Oldest</option>
                    </select>
                  </div>
                </div>
                <div className="flex items-center h-10 w-full py-20 border-y-2">
                  <div className="w-28 border h-28 overflow-hidden">
                    <img
                      src="avatar.jpg"
                      alt="User Avatar"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="ml-4 w-full">
                    <input
                      type="text"
                      placeholder="Add a comment..."
                      className="border border-gray-300 rounded px-2 py-1 h-28 w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
