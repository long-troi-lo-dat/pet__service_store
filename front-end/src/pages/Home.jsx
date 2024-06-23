import React, { useContext, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

import { Icon } from '@iconify/react';
// Import Swiper styles
import "swiper/css";
import 'swiper/css/pagination';
import "../assets/css/bootstrap.css";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// import "../assets/css/vendor.css";
import Navbar from '../components/Navbar';

import { GlobalContext } from "../Context";

export default function Home() {
  const { shouldScroll, setShouldScroll } = useContext(GlobalContext);

  useEffect(() => {
    if (shouldScroll) {
      const element = document.getElementById("dichvutialong");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setShouldScroll(false)
      }
    }
  }, [shouldScroll, setShouldScroll]);
  return (
    // <>
    //   <Navbar />
    //   <section className="flex justify-between max-w-6xl mx-auto pt-20 pb-20 items-center">
    //     <div className="">
    //       <p className="font-semibold text-sm flex gap-2 items-center px-2">
    //         <div className="w-10 bg-[#3858BB] h-[2px]"></div>
    //         <span> D G HOUSE</span>
    //       </p>
    //       <h1 className="py-8 text-6xl italic leading-tight" style={{ WebkitTextStrokeWidth: '2px', WebkitTextStrokeColor: '101A5F' }}>
    //         HỆ THỐNG DỊCH VỤ THÚ CƯNG
    //         {/* <span className="font-extrabold stroke-[#101A5F] stroke-2 ">
    //           {" "}
    //           TẠI NHÀ
    //         </span> */}
    //       </h1>
    //       <p className="text-2xl font-light">
    //         <span className="font-bold">UY TÍN HÀNG ĐẦU </span>TẠI HỒ CHÍ MINH
    //       </p>
    //       <div className="flex gap-3 pt-9">
    //         <button className="bg-[#3858BB] py-3 px-5 text-white rounded-[20px] font-bold text-xs">
    //           XEM THÊM
    //         </button>
    //         {localStorage.getItem("login") === "yes" ?
    //           <a className="bg-white py-3 px-5 text-[#3858BB] border-[#3858BB] border-2 rounded-[20px] font-bold text-xs" href="/booking">
    //             ONLINE BOOKING
    //           </a>
    //           :
    //           <a className="bg-white py-3 px-5 text-[#3858BB] border-[#3858BB] border-2 rounded-[20px] font-bold text-xs" href="/login">
    //             ONLINE BOOKING
    //           </a>}
    //       </div>
    //     </div>
    //     <div>
    //       <img alt="dghouse.shop" src={ImageSlide} style={{ width: "766px" }} alt="" />
    //     </div>
    //   </section>
    //   <section className="bg-[#101A5F] pt-32 pb-9 ">
    //     <div className="max-w-6xl mx-auto  flex justify-between">
    //       <div className="px-5">
    //         <p className="font-semibold text-sm text-white">PET SERVIVEIVE</p>
    //         <h2 className="pt-5 font-extrabold text-6xl text-white">DỊCH VỤ</h2>
    //         <div className="flex gap-2 py-5">
    //           <span className="bg-white w-1 h-1 rounded-full block"></span>
    //           <span className="bg-white w-1 h-1 rounded-full block"></span>
    //           <span className="bg-white w-1 h-1 rounded-full block"></span>
    //           <div className="w-20 h-1 rounded-[20px] bg-white"></div>
    //         </div>
    //         <p className="font-semibold italic text-3xl text-white">HÀNG ĐẦU</p>
    //         <img alt="dghouse.shop" src={ImageService} alt="" />
    //       </div>
    //       <div className="flex-1 flex gap-9">
    //         <div className="bg-white rounded-[20px] flex items-center p-5 flex-col h-fit">
    //           <img alt="dghouse.shop" src={ImageServiceItem1} className="w-16" alt="" />
    //           <h3 className="font-bold text-base">PET SHOP</h3>
    //           <p className="font-medium text-xs py-3">
    //             Cùng với hơn 3.000 khách hàng đã luôn tin tưởng, đồng hành,
    //             chúng tôi luôn đặt ra những mục tiêu và thử thách mới.
    //             GDHOUSEGDHOUSE cung cấp các sản phẩm, phụ kiện rất đa dạng...
    //           </p>
    //           <button className="bg-[#3858BB] py-2 px-5 text-white rounded-[20px] font-bold text-xs mb-5">
    //             XEM THÊM
    //           </button>
    //         </div>
    //         <div className="bg-white rounded-[20px] flex items-center p-5 flex-col h-fit">
    //           <img alt="dghouse.shop" src={ImageServiceItem2} className="w-16" alt="" />
    //           <h3 className="font-bold text-base">PET SHOP</h3>
    //           <p className="font-medium text-xs py-3">
    //             Cùng với hơn 3.000 khách hàng đã luôn tin tưởng, đồng hành,
    //             chúng tôi luôn đặt ra những mục tiêu và thử thách mới.
    //             GDHOUSEGDHOUSE cung cấp các sản phẩm, phụ kiện rất đa dạng...
    //           </p>
    //           <button className="bg-[#3858BB] py-2 px-5 text-white rounded-[20px] font-bold text-xs mb-5">
    //             XEM THÊM
    //           </button>
    //         </div>
    //         <div className="bg-white rounded-[20px] flex items-center p-5 flex-col h-fit">
    //           <img alt="dghouse.shop" src={ImageServiceItem3} className="w-16" alt="" />
    //           <h3 className="font-bold text-base">PET SHOP</h3>
    //           <p className="font-medium text-xs py-3">
    //             Cùng với hơn 3.000 khách hàng đã luôn tin tưởng, đồng hành,
    //             chúng tôi luôn đặt ra những mục tiêu và thử thách mới.
    //             GDHOUSEGDHOUSE cung cấp các sản phẩm, phụ kiện rất đa dạng...
    //           </p>
    //           <button className="bg-[#3858BB] py-2 px-5 text-white rounded-[20px] font-bold text-xs mb-5">
    //             XEM THÊM
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    //   <section className="max-w-6xl mx-auto  flex justify-between pt-44 pb-60">
    //     <div className="px-5 w-2/5 ">
    //       <p className="font-semibold text-sm text-black">HOT ITEM</p>
    //       <h2 className="pt-5 font-extrabold text-6xl text-black leading-tight">
    //         SẢN PHẨM <span className="italic text-[#49B3F4]">NỔI BẬT</span>
    //       </h2>
    //       <div className="flex gap-2 py-5">
    //         <span className="bg-[#101A5F] w-1 h-1 rounded-full block"></span>
    //         <span className="bg-[#101A5F] w-1 h-1 rounded-full block"></span>
    //         <span className="bg-[#101A5F] w-1 h-1 rounded-full block"></span>
    //         <div className="w-20 h-1 rounded-[20px] bg-[#101A5F]"></div>
    //       </div>
    //       <button className="bg-[#3858BB] py-3 px-5 text-white rounded-[20px] font-bold text-xs">
    //         XEM CỬA HÀNG
    //       </button>
    //     </div>
    //     <div className="flex gap-9">
    //       <div
    //         className="flex flex-col items-center p-5 rounded-[20px]"
    //         style={{ boxShadow: "1px 1px 4px rgba(0, 0, 0, 0.25)" }}
    //       >
    //         <img alt="dghouse.shop" src={ImageProduct1} className="w-[219px] h-[230px]" alt="" />
    //         <p className="font-semibold text-[10px] text-[#D9D9D9]">
    //           SẢN PHẨM TRỊ LIỆU
    //         </p>
    //         <h4 className="font-bold text-xs text-black py-4">
    //           Chai xịt huấn luyện vệ sinh cho chó
    //         </h4>
    //         <h3 className="font-semibold text-lg text-[#101A5F]">150.000 đ</h3>
    //       </div>
    //       <div
    //         className="flex flex-col items-center  p-5 rounded-[20px]"
    //         style={{ boxShadow: "1px 1px 4px rgba(0, 0, 0, 0.25)" }}
    //       >
    //         <img alt="dghouse.shop" src="https://petservicehcm.com/wp-content/uploads/2022/07/Khung-Shopee-41.png.webp" className="w-[219px] h-[230px]" alt="" />
    //         <p className="font-semibold text-[10px] text-[#D9D9D9]">
    //           Thức ăn cho thú cưng
    //         </p>
    //         <h4 className="font-bold text-xs text-black py-4">
    //           Hạt chó Royal Canin Poodle Puppy - 1.5Kg
    //         </h4>
    //         <h3 className="font-semibold text-lg text-[#101A5F]">466.000 đ</h3>
    //       </div>
    //     </div>
    //   </section>
    //   <section className="max-w-6xl mx-auto pb-20">
    //     <div className=" flex justify-between ">
    //       <div>
    //         <p className="flex gap-2 items-center">
    //           <span className="h-1 bg-[#3858BB] w-10 block"></span>
    //           <span className="text-sm font-semibold text-black">
    //             HÂN HẠNH ĐƯỢC PHỤC VỤ
    //           </span>
    //         </p>
    //         <h1 className="font-semibold text-5xl pt-5 pb-12">Our Feedback</h1>
    //         <div className="flex gap-10 pb-10">
    //           <div>
    //             <div className="w-16  h-16 rounded-xl bg-black"></div>
    //             <img alt="dghouse.shop" src="" alt="" />
    //             <h6 className="text-5xl font-medium py-4 text-black">4,334</h6>
    //             <p className="font-medium text-base text-[#49B3F4]">
    //               Khách hàng hài lòng
    //             </p>
    //           </div>
    //           <div>
    //             <div className="w-16  h-16 rounded-xl bg-black"></div>
    //             <img alt="dghouse.shop" src="" alt="" />
    //             <h6 className="text-5xl font-medium py-4 text-black">5,000</h6>
    //             <p className="font-medium text-base text-[#49B3F4]">
    //               Bé được chăm sóc.
    //             </p>
    //           </div>
    //           <div>
    //             <div className="w-16  h-16 rounded-xl bg-black"></div>
    //             <img alt="dghouse.shop" src="" alt="" />
    //             <h6 className="text-5xl font-medium py-4 text-black">150</h6>
    //             <p className="font-medium text-base text-[#49B3F4]">
    //               Booking mỗi tuần
    //             </p>
    //           </div>
    //         </div>
    //         <div className="bg-slate-300  h-72 w-[496px] rounded-xl flex items-center justify-center">
    //           FANPAGE
    //         </div>
    //       </div>
    //       <div>
    //         <img alt="dghouse.shop" src={ImageSlide1} alt="" />

    //         {/* <Swiper
    //     pagination={{
    //       dynamicBullets: true,
    //     }}
    //     modules={[Pagination]}
    //     className="mySwiper"
    //   >
    //     <SwiperSlide>
    //       <img alt="dghouse.shop" src={ImageSlide1} alt="" />
    //     </SwiperSlide>
    //     <SwiperSlide>Slide 2</SwiperSlide>
    //     <SwiperSlide>Slide 3</SwiperSlide>

    //   </Swiper> */}
    //       </div>
    //     </div>
    //   </section>
    //   <section
    //     className="w-full relative mb-[600px]"
    //     style={{
    //       background:
    //         "linear-gradient(123deg, rgba(34,42,99,1) 0%, rgba(70,123,236,1) 100%)",
    //     }}
    //   >
    //     <div className="max-w-6xl mx-auto pt-24 pb-40 flex justify-between items-center ">
    //       <div>
    //         <h3 className="font-bold text-3xl text-white mb-5">
    //           DỊCH VỤ TẬN TÌNH AN TÂM CHẤT LƯỢNG
    //         </h3>
    //         <p className="italic font-semibold text-base text-white">
    //           Liên hệ ngay để được tư vấn và báo giá các dịch vụ phù hợp cho bé
    //           yêu của bạn!
    //         </p>
    //       </div>
    //       <div>
    //         <button className="bg-white text-[#467BEC] py-3 px-10 rounded-[50px] font-bold text-sm">
    //           TƯ VẤN MIỄN PHÍ
    //         </button>
    //       </div>
    //     </div>
    //     <div
    //       className="max-w-6xl mx-auto absolute top-[170%] left-1/2 w-full z-10  "
    //       style={{ transform: "translate(-50%, -50%)" }}
    //     >
    //       <div
    //         className="bg-white w-full h-full rounded-xl "
    //         style={{ boxShadow: "0 4px 4px rgba(0,0,0,.25)" }}
    //       >
    //         <div className="flex justify-between items-center px-20">
    //           <div>
    //             <div className="flex gap-2 items-center">
    //               <span className="block h-1 w-10 bg-[#3858BB]"></span>
    //               <p className="font-semibold text-sm text-black">Thông tin</p>
    //             </div>
    //             <h3 className="font-semibold text-5xl text-black leading-tight my-5">
    //               Spa cho thú cưng{" "}
    //               <span className="italic text-[#49B3F4]">Chuẩn 5 sao</span>
    //             </h3>
    //             <button className="bg-[#3858BB] py-3 px-5 text-white rounded-[20px] font-bold text-xs">
    //               XEM THÊM
    //             </button>
    //           </div>
    //           <div>
    //             <img alt="dghouse.shop" src={ImageBanner} alt="" />
    //           </div>
    //         </div>
    //         <div className="bg-[#CCCCCC] w-full h-16 px-20 flex items-center gap-10">
    //           <div className="flex gap-2">
    //             <svg
    //               width="23"
    //               height="21"
    //               viewBox="0 0 23 21"
    //               fill="none"
    //               xmlns="http://www.w3.org/2000/svg"
    //             >
    //               <path
    //                 d="M20.2913 2.61183C19.7805 2.10083 19.1741 1.69547 18.5066 1.41891C17.8392 1.14235 17.1238 1 16.4013 1C15.6788 1 14.9634 1.14235 14.2959 1.41891C13.6285 1.69547 13.022 2.10083 12.5113 2.61183L11.4513 3.67183L10.3913 2.61183C9.3596 1.58013 7.96032 1.00053 6.50129 1.00053C5.04226 1.00053 3.64298 1.58013 2.61129 2.61183C1.5796 3.64352 1 5.04279 1 6.50183C1 7.96086 1.5796 9.36013 2.61129 10.3918L3.67129 11.4518L11.4513 19.2318L19.2313 11.4518L20.2913 10.3918C20.8023 9.88107 21.2076 9.27464 21.4842 8.60718C21.7608 7.93972 21.9031 7.22431 21.9031 6.50183C21.9031 5.77934 21.7608 5.06393 21.4842 4.39647C21.2076 3.72901 20.8023 3.12258 20.2913 2.61183Z"
    //                 stroke="black"
    //                 stroke-width="2"
    //                 stroke-linecap="round"
    //                 stroke-linejoin="round"
    //               />
    //             </svg>
    //             <p className="text-sm font-light">DỊCH VỤ CHUYÊN NGHIỆP</p>
    //           </div>
    //           <div className="flex gap-2">
    //             <svg
    //               width="23"
    //               height="21"
    //               viewBox="0 0 23 21"
    //               fill="none"
    //               xmlns="http://www.w3.org/2000/svg"
    //             >
    //               <path
    //                 d="M20.2913 2.61183C19.7805 2.10083 19.1741 1.69547 18.5066 1.41891C17.8392 1.14235 17.1238 1 16.4013 1C15.6788 1 14.9634 1.14235 14.2959 1.41891C13.6285 1.69547 13.022 2.10083 12.5113 2.61183L11.4513 3.67183L10.3913 2.61183C9.3596 1.58013 7.96032 1.00053 6.50129 1.00053C5.04226 1.00053 3.64298 1.58013 2.61129 2.61183C1.5796 3.64352 1 5.04279 1 6.50183C1 7.96086 1.5796 9.36013 2.61129 10.3918L3.67129 11.4518L11.4513 19.2318L19.2313 11.4518L20.2913 10.3918C20.8023 9.88107 21.2076 9.27464 21.4842 8.60718C21.7608 7.93972 21.9031 7.22431 21.9031 6.50183C21.9031 5.77934 21.7608 5.06393 21.4842 4.39647C21.2076 3.72901 20.8023 3.12258 20.2913 2.61183Z"
    //                 stroke="black"
    //                 stroke-width="2"
    //                 stroke-linecap="round"
    //                 stroke-linejoin="round"
    //               />
    //             </svg>
    //             <p className="text-sm font-light">NHANH CHÓNG</p>
    //           </div>
    //         </div>
    //         <div className="py-10 px-20">
    //           <p className="font-medium text-sm">KHÁM SỨC KHỎE MIỄN PHÍ</p>
    //           <p className="font-medium text-sm mt-6">
    //             Mọi hành động ở GDHOUSE đều bắt đầu từ sứ mệnh Trao gửi yêu
    //             thương. Do vậy, Spa đạt chuẩn với quy trình khắt khe sẽ mang lại
    //             sự thom tho và sạch sẽ cho thú cưng của bạn.
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    //   <section className="max-w-6xl mx-auto  flex justify-between pt-44 pb-60">
    //     <div className="px-5  flex-1">
    //       <p className="font-semibold text-sm text-black">
    //         THÔNG TIN & BẢNG GIÁ
    //       </p>
    //       <h2 className="pt-5 font-extrabold text-6xl text-black leading-tight">
    //         DỊCH VỤ TẮM VỆ SINH{" "}
    //         <span className="italic text-[#49B3F4]">tại nhà</span>
    //       </h2>
    //       <div className="flex gap-2 py-5">
    //         <span className="bg-[#101A5F] w-1 h-1 rounded-full block"></span>
    //         <span className="bg-[#101A5F] w-1 h-1 rounded-full block"></span>
    //         <span className="bg-[#101A5F] w-1 h-1 rounded-full block"></span>
    //         <div className="w-20 h-1 rounded-[20px] bg-[#101A5F]"></div>
    //       </div>
    //       <div className="flex gap-5 ">
    //         <button className="bg-[#3858BB] py-3 px-5 text-white rounded-[20px] font-bold text-xs flex  items-center gap-2">
    //           XEM THÊM
    //           <svg
    //             width="14"
    //             height="11"
    //             viewBox="0 0 14 11"
    //             fill="none"
    //             xmlns="http://www.w3.org/2000/svg"
    //           >
    //             <path
    //               d="M3 3L7 8L11 3"
    //               stroke="white"
    //               stroke-linecap="round"
    //               stroke-linejoin="round"
    //             />
    //           </svg>
    //         </button>
    //         <a className="bg-white py-3 px-8 text-[#3858BB] border-[#3858BB] border-2 rounded-[20px] font-bold text-xs" href="/booking">
    //           Đặt lịch ngay
    //         </a>
    //       </div>
    //     </div>
    //     <div className="">
    //       <img
    //         src={ImageServiceItem4}
    //         className="w-[499px] h-[526px] rounded-[20px] object-cover"
    //         alt=""
    //       />
    //     </div>
    //   </section>
    //   <section className="mb-56">
    //     <p className="font-semibold text-base text-center">DGHOUSE.COM</p>
    //     <h2 className="font-bold text-5xl text-black text-center mt-8 mb-10">
    //       CHÚNG TÔI LUÔN LUÔN <span className="text-[#49B3F4]">SÃN SÀNG</span>{" "}
    //       PHỤC VỤ BẠN
    //     </h2>
    //     <p className="font-extrabold text-sm justify-center text-[#467BEC] flex items-center gap-2">
    //       <svg
    //         width="23"
    //         height="18"
    //         viewBox="0 0 23 18"
    //         fill="none"
    //         xmlns="http://www.w3.org/2000/svg"
    //       >
    //         <path
    //           d="M18.9161 10.9467V12.9467C18.9169 13.1324 18.8741 13.3162 18.7905 13.4863C18.7068 13.6564 18.5841 13.8091 18.4301 13.9346C18.2762 14.0602 18.0945 14.1557 17.8966 14.2152C17.6988 14.2747 17.4891 14.2968 17.2811 14.2801C14.9732 14.0572 12.7563 13.3562 10.8086 12.2334C8.99646 11.2098 7.46009 9.84418 6.30859 8.2334C5.04107 6.4942 4.25227 4.51406 4.00609 2.4534C3.98735 2.26904 4.01199 2.08324 4.07846 1.90781C4.14493 1.73239 4.25177 1.57119 4.39216 1.43448C4.53256 1.29777 4.70344 1.18854 4.89393 1.11375C5.08442 1.03895 5.29034 1.00024 5.49859 1.00006H7.74859C8.11257 0.99688 8.46543 1.11145 8.74141 1.32242C9.01739 1.53339 9.19765 1.82636 9.24859 2.14673C9.34355 2.78678 9.51968 3.41522 9.77359 4.02006C9.8745 4.25868 9.89633 4.51801 9.83652 4.76732C9.7767 5.01663 9.63774 5.24547 9.43609 5.42673L8.48359 6.2734C9.55125 7.94243 11.1059 9.32436 12.9836 10.2734L13.9361 9.42673C14.14 9.24749 14.3975 9.12396 14.6779 9.07079C14.9584 9.01762 15.2501 9.03704 15.5186 9.12673C16.199 9.35243 16.906 9.50898 17.6261 9.5934C17.9904 9.63908 18.3231 9.8022 18.561 10.0517C18.7988 10.3013 18.9252 10.6198 18.9161 10.9467Z"
    //           fill="#467BEC"
    //         />
    //       </svg>
    //       DỊCH VỤ THÚ CƯNG TẠI NHÀ - 24/7
    //     </p>
    //   </section>
    //   <section className="max-w-6xl mx-auto flex justify-between items-center gap-16 mb-52" id="dichvutialong">
    //     <div>
    //       <img
    //         src={ImageServiceItem5}
    //         className="rounded-[10px] w-[496px] h-[496px] object-cover"
    //         alt=""
    //       />
    //     </div>
    //     <div>
    //       <p className="font-semibold text-sm">THÔNG TIN & BẢNG GIÁ</p>
    //       <h2 className="font-semibold text-5xl leading-tight py-4">
    //         Dịch vụ cắt tỉa lông{" "}
    //         <span className="italic text-[#49B3F4]">tại nhà</span>
    //       </h2>
    //       <div className="flex">
    //         <ul className="ml-5">
    //           <li className="italic font-semibold text-base text-[#273172] list-disc mb-4">
    //             CẮT GỌN LÔNG
    //           </li>
    //           <li className="italic font-semibold text-base text-[#273172] list-disc mb-4">
    //             Tỉa Lông Tạo Kiểu
    //           </li>
    //           <li className="italic font-semibold text-base text-[#273172] list-disc mb-4">
    //             Cạo Lông
    //           </li>
    //         </ul>
    //         <div className="ml-20">
    //           <div className="flex items-center gap-2">
    //             <p className="font-semibold text-base">CHỈ TỪ</p>
    //             <span className="w-12 h-[1px] bg-[#3858BB]"></span>
    //           </div>
    //           <h1 className="text-[38px] text-[#49B3F4] font-semibold italic">
    //             400.000đ
    //           </h1>
    //         </div>
    //       </div>
    //       <div className="flex gap-5 ">
    //         <button className="bg-[#3858BB] py-3 px-5 text-white rounded-[20px] font-bold text-xs flex  items-center gap-2">
    //           XEM THÊM
    //           <svg
    //             width="14"
    //             height="11"
    //             viewBox="0 0 14 11"
    //             fill="none"
    //             xmlns="http://www.w3.org/2000/svg"
    //           >
    //             <path
    //               d="M3 3L7 8L11 3"
    //               stroke="white"
    //               stroke-linecap="round"
    //               stroke-linejoin="round"
    //             />
    //           </svg>
    //         </button>
    //         <a className="bg-white py-3 px-8 text-[#3858BB] border-[#3858BB] border-2 rounded-[20px] font-bold text-xs" href="/booking">
    //           Đặt lịch ngay
    //         </a>
    //       </div>
    //     </div>
    //   </section>
    //   <section className="bg-[#49B3F4] w-full py-20">
    //     <div className="max-w-6xl mx-auto flex items-center justify-between">
    //       <div className="">
    //         <p className="font-semibold text-sm text-black">
    //           THÔNG TIN & BẢNG GIÁ
    //         </p>
    //         <h2 className="pt-5 font-semibold text-5xl text-black leading-tight">
    //           G D HOUSE <br />
    //           <span> COMBO</span>
    //         </h2>
    //         <div className="flex gap-2 py-5">
    //           <span className="bg-[#101A5F] w-1 h-1 rounded-full block"></span>
    //           <span className="bg-[#101A5F] w-1 h-1 rounded-full block"></span>
    //           <span className="bg-[#101A5F] w-1 h-1 rounded-full block"></span>
    //           <div className="w-20 h-1 rounded-[20px] bg-[#101A5F]"></div>
    //         </div>
    //       </div>
    //       <div className=" flex gap-9">
    //         <div className="bg-white rounded-[20px] flex items-center py-5 pl-10 flex-col h-fit">
    //           <div className="pr-10 flex justify-center flex-col items-center">
    //             <svg
    //               width="40"
    //               height="40"
    //               viewBox="0 0 40 40"
    //               fill="none"
    //               xmlns="http://www.w3.org/2000/svg"
    //             >
    //               <path
    //                 d="M19.9997 36.6668C29.2044 36.6668 36.6663 29.2049 36.6663 20.0002C36.6663 10.7954 29.2044 3.3335 19.9997 3.3335C10.7949 3.3335 3.33301 10.7954 3.33301 20.0002C3.33301 29.2049 10.7949 36.6668 19.9997 36.6668Z"
    //                 stroke="black"
    //                 stroke-width="2"
    //                 stroke-linecap="round"
    //                 stroke-linejoin="round"
    //               />
    //               <path
    //                 d="M13.333 23.3335C13.333 23.3335 15.833 24.1668 19.9997 24.1668C24.5152 24.1668 26.6663 23.3335 26.6663 23.3335"
    //                 stroke="black"
    //                 stroke-width="2"
    //                 stroke-linecap="round"
    //                 stroke-linejoin="round"
    //               />
    //               <path
    //                 d="M14.7373 24C14.7373 24 16.711 25 20.0005 25C23.5654 25 25.2636 24 25.2636 24"
    //                 stroke="black"
    //                 stroke-width="2"
    //                 stroke-linecap="round"
    //                 stroke-linejoin="round"
    //               />
    //               <path
    //                 d="M13.333 23.3335C13.333 23.3335 15.833 26.6668 19.9997 26.6668C24.5152 26.6668 26.6663 23.3335 26.6663 23.3335"
    //                 stroke="black"
    //                 stroke-width="2"
    //                 stroke-linecap="round"
    //                 stroke-linejoin="round"
    //               />
    //               <path
    //                 d="M15 15H15.0158"
    //                 stroke="black"
    //                 stroke-width="4"
    //                 stroke-linecap="round"
    //                 stroke-linejoin="round"
    //               />
    //               <path
    //                 d="M25 15H25.0158"
    //                 stroke="black"
    //                 stroke-width="4"
    //                 stroke-linecap="round"
    //                 stroke-linejoin="round"
    //               />
    //             </svg>
    //             <h3 className="font-extrabold text-[28px] text-[#467BEC] my-2">
    //               COMBO 1
    //             </h3>
    //           </div>
    //           <div className="w-full">
    //             <h4 className="font-semibold text-2xl h-20 bg-[rgba(76,76,76,.29)] flex items-center px-5 rounded-tl-[30px] rounded-bl-[30px]">
    //               200.000 VNĐ
    //             </h4>
    //           </div>
    //           <ul className="pr-10 mt-4">
    //             <li className="flex items-center gap-2 mb-2">
    //               <div className="bg-black w-6 h-6 rounded-full flex items-center justify-center">
    //                 <span className="block h-[1px] w-2 bg-white"></span>
    //               </div>
    //               <p>Cạo lông</p>
    //             </li>
    //             <li className="flex items-center gap-2 mb-2">
    //               <div className="bg-[#23A455] w-6 h-6 rounded-full flex items-center justify-center">
    //                 <svg
    //                   width="19"
    //                   height="16"
    //                   viewBox="0 0 19 16"
    //                   fill="none"
    //                   xmlns="http://www.w3.org/2000/svg"
    //                 >
    //                   <path
    //                     d="M15.7285 3.72803L8.85352 10.603L5.72852 7.47803"
    //                     stroke="white"
    //                     stroke-width="2"
    //                     stroke-linecap="round"
    //                     stroke-linejoin="round"
    //                   />
    //                 </svg>
    //               </div>
    //               <p>Tắm sấy</p>
    //             </li>
    //             <li className="flex items-center gap-2 mb-2">
    //               <div className="bg-[#23A455] w-6 h-6 rounded-full flex items-center justify-center">
    //                 <svg
    //                   width="19"
    //                   height="16"
    //                   viewBox="0 0 19 16"
    //                   fill="none"
    //                   xmlns="http://www.w3.org/2000/svg"
    //                 >
    //                   <path
    //                     d="M15.7285 3.72803L8.85352 10.603L5.72852 7.47803"
    //                     stroke="white"
    //                     stroke-width="2"
    //                     stroke-linecap="round"
    //                     stroke-linejoin="round"
    //                   />
    //                 </svg>
    //               </div>
    //               <p>Vệ sinh / Xịt thơm</p>
    //             </li>
    //             <li className="flex items-center gap-2 mb-2">
    //               <div className="bg-black w-6 h-6 rounded-full flex items-center justify-center">
    //                 <span className="block h-[1px] w-2 bg-white"></span>
    //               </div>
    //               <p>Cắt tỉa / Tạo kiểu</p>
    //             </li>
    //           </ul>
    //           <button className="flex gap-2 items-center pr-10">
    //             <svg
    //               width="15"
    //               height="15"
    //               viewBox="0 0 15 15"
    //               fill="none"
    //               xmlns="http://www.w3.org/2000/svg"
    //             >
    //               <g clip-path="url(#clip0_267_1962)">
    //                 <path
    //                   d="M10.625 1.87519C10.7892 1.71104 10.984 1.58082 11.1985 1.49199C11.413 1.40315 11.6429 1.35742 11.875 1.35742C12.1071 1.35742 12.337 1.40315 12.5515 1.49199C12.766 1.58082 12.9608 1.71104 13.125 1.87519C13.2892 2.03934 13.4194 2.23422 13.5082 2.44869C13.597 2.66317 13.6428 2.89304 13.6428 3.12519C13.6428 3.35734 13.597 3.58721 13.5082 3.80168C13.4194 4.01616 13.2892 4.21104 13.125 4.37519L4.6875 12.8127L1.25 13.7502L2.1875 10.3127L10.625 1.87519Z"
    //                   stroke="#49B3F4"
    //                   stroke-linecap="round"
    //                   stroke-linejoin="round"
    //                 />
    //               </g>
    //               <defs>
    //                 <clipPath id="clip0_267_1962">
    //                   <rect width="15" height="15" fill="white" />
    //                 </clipPath>
    //               </defs>
    //             </svg>

    //             <span className="font-semibold text-sm text-[#49B3F4]">
    //               Đặt lịch ngay
    //             </span>
    //           </button>
    //         </div>
    //         <div className="bg-white rounded-[20px] flex items-center py-5 pl-10 flex-col h-fit">
    //           <div className="pr-10 flex justify-center flex-col items-center">
    //             <svg
    //               width="40"
    //               height="40"
    //               viewBox="0 0 40 40"
    //               fill="none"
    //               xmlns="http://www.w3.org/2000/svg"
    //             >
    //               <path
    //                 d="M19.9997 36.6668C29.2044 36.6668 36.6663 29.2049 36.6663 20.0002C36.6663 10.7954 29.2044 3.3335 19.9997 3.3335C10.7949 3.3335 3.33301 10.7954 3.33301 20.0002C3.33301 29.2049 10.7949 36.6668 19.9997 36.6668Z"
    //                 stroke="black"
    //                 stroke-width="2"
    //                 stroke-linecap="round"
    //                 stroke-linejoin="round"
    //               />
    //               <path
    //                 d="M13.333 23.3335C13.333 23.3335 15.833 24.1668 19.9997 24.1668C24.5152 24.1668 26.6663 23.3335 26.6663 23.3335"
    //                 stroke="black"
    //                 stroke-width="2"
    //                 stroke-linecap="round"
    //                 stroke-linejoin="round"
    //               />
    //               <path
    //                 d="M14.7373 24C14.7373 24 16.711 25 20.0005 25C23.5654 25 25.2636 24 25.2636 24"
    //                 stroke="black"
    //                 stroke-width="2"
    //                 stroke-linecap="round"
    //                 stroke-linejoin="round"
    //               />
    //               <path
    //                 d="M13.333 23.3335C13.333 23.3335 15.833 26.6668 19.9997 26.6668C24.5152 26.6668 26.6663 23.3335 26.6663 23.3335"
    //                 stroke="black"
    //                 stroke-width="2"
    //                 stroke-linecap="round"
    //                 stroke-linejoin="round"
    //               />
    //               <path
    //                 d="M15 15H15.0158"
    //                 stroke="black"
    //                 stroke-width="4"
    //                 stroke-linecap="round"
    //                 stroke-linejoin="round"
    //               />
    //               <path
    //                 d="M25 15H25.0158"
    //                 stroke="black"
    //                 stroke-width="4"
    //                 stroke-linecap="round"
    //                 stroke-linejoin="round"
    //               />
    //             </svg>
    //             <h3 className="font-extrabold text-[28px] text-[#467BEC] my-2">
    //               COMBO 2
    //             </h3>
    //           </div>
    //           <div className="w-full">
    //             <h4 className="font-semibold text-2xl h-20 bg-[rgba(76,76,76,.29)] flex items-center px-5 rounded-tl-[30px] rounded-bl-[30px]">
    //               400.000 VNĐ
    //             </h4>
    //           </div>
    //           <ul className="pr-10 mt-4">
    //             <li className="flex items-center gap-2 mb-2">
    //               <div className="bg-[#23A455] w-6 h-6 rounded-full flex items-center justify-center">
    //                 <svg
    //                   width="19"
    //                   height="16"
    //                   viewBox="0 0 19 16"
    //                   fill="none"
    //                   xmlns="http://www.w3.org/2000/svg"
    //                 >
    //                   <path
    //                     d="M15.7285 3.72803L8.85352 10.603L5.72852 7.47803"
    //                     stroke="white"
    //                     stroke-width="2"
    //                     stroke-linecap="round"
    //                     stroke-linejoin="round"
    //                   />
    //                 </svg>
    //               </div>
    //               <p>Cạo lông</p>
    //             </li>
    //             <li className="flex items-center gap-2 mb-2">
    //               <div className="bg-[#23A455] w-6 h-6 rounded-full flex items-center justify-center">
    //                 <svg
    //                   width="19"
    //                   height="16"
    //                   viewBox="0 0 19 16"
    //                   fill="none"
    //                   xmlns="http://www.w3.org/2000/svg"
    //                 >
    //                   <path
    //                     d="M15.7285 3.72803L8.85352 10.603L5.72852 7.47803"
    //                     stroke="white"
    //                     stroke-width="2"
    //                     stroke-linecap="round"
    //                     stroke-linejoin="round"
    //                   />
    //                 </svg>
    //               </div>
    //               <p>Tắm sấy</p>
    //             </li>
    //             <li className="flex items-center gap-2 mb-2">
    //               <div className="bg-[#23A455] w-6 h-6 rounded-full flex items-center justify-center">
    //                 <svg
    //                   width="19"
    //                   height="16"
    //                   viewBox="0 0 19 16"
    //                   fill="none"
    //                   xmlns="http://www.w3.org/2000/svg"
    //                 >
    //                   <path
    //                     d="M15.7285 3.72803L8.85352 10.603L5.72852 7.47803"
    //                     stroke="white"
    //                     stroke-width="2"
    //                     stroke-linecap="round"
    //                     stroke-linejoin="round"
    //                   />
    //                 </svg>
    //               </div>
    //               <p>Vệ sinh / Xịt thơm</p>
    //             </li>
    //             <li className="flex items-center gap-2 mb-2">
    //               <div className="bg-[#23A455] w-6 h-6 rounded-full flex items-center justify-center">
    //                 <svg
    //                   width="19"
    //                   height="16"
    //                   viewBox="0 0 19 16"
    //                   fill="none"
    //                   xmlns="http://www.w3.org/2000/svg"
    //                 >
    //                   <path
    //                     d="M15.7285 3.72803L8.85352 10.603L5.72852 7.47803"
    //                     stroke="white"
    //                     stroke-width="2"
    //                     stroke-linecap="round"
    //                     stroke-linejoin="round"
    //                   />
    //                 </svg>
    //               </div>
    //               <p>Cắt tỉa / Tạo kiểu</p>
    //             </li>
    //           </ul>
    //           <button className="flex gap-2 items-center pr-10">
    //             <svg
    //               width="15"
    //               height="15"
    //               viewBox="0 0 15 15"
    //               fill="none"
    //               xmlns="http://www.w3.org/2000/svg"
    //             >
    //               <g clip-path="url(#clip0_267_1962)">
    //                 <path
    //                   d="M10.625 1.87519C10.7892 1.71104 10.984 1.58082 11.1985 1.49199C11.413 1.40315 11.6429 1.35742 11.875 1.35742C12.1071 1.35742 12.337 1.40315 12.5515 1.49199C12.766 1.58082 12.9608 1.71104 13.125 1.87519C13.2892 2.03934 13.4194 2.23422 13.5082 2.44869C13.597 2.66317 13.6428 2.89304 13.6428 3.12519C13.6428 3.35734 13.597 3.58721 13.5082 3.80168C13.4194 4.01616 13.2892 4.21104 13.125 4.37519L4.6875 12.8127L1.25 13.7502L2.1875 10.3127L10.625 1.87519Z"
    //                   stroke="#49B3F4"
    //                   stroke-linecap="round"
    //                   stroke-linejoin="round"
    //                 />
    //               </g>
    //               <defs>
    //                 <clipPath id="clip0_267_1962">
    //                   <rect width="15" height="15" fill="white" />
    //                 </clipPath>
    //               </defs>
    //             </svg>

    //             <span className="font-semibold text-sm text-[#49B3F4]">
    //               Đặt lịch ngay
    //             </span>
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // </>
    <>

      <Navbar />
      <section id="banner" style={{ background: "#F9F3EC" }}>
        <div class="container">
          <Swiper
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
          >

            <SwiperSlide>
              <div class="row banner-content align-items-center">
                <div class="img-wrapper col-md-5">
                  <img alt="dghouse.shop" src={process.env.REACT_APP_URL_API + "/images/banner-img.png"} class="img-fluid" />
                </div>
                <div class="content-wrapper col-md-7 p-5 mb-5">
                  <div class="secondary-font text-primary text-uppercase mb-4">Save 10 - 20 % off</div>
                  <h2 class="banner-title display-1 fw-normal">Best destination for <span class="text-primary">your
                    pets</span>
                  </h2>
                  <a href="/#" class="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1">
                    shop now

                  </a>
                </div>

              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="row banner-content align-items-center">
                <div class="img-wrapper col-md-5">
                  <img alt="dghouse.shop" src={process.env.REACT_APP_URL_API + "/images/banner-img3.png"} class="img-fluid" />
                </div>
                <div class="content-wrapper col-md-7 p-5 mb-5">
                  <div class="secondary-font text-primary text-uppercase mb-4">Save 10 - 20 % off</div>
                  <h2 class="banner-title display-1 fw-normal">Best destination for <span class="text-primary">your
                    pets</span>
                  </h2>
                  <a href="/#" class="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1">
                    shop now

                  </a>
                </div>

              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="row banner-content align-items-center">
                <div class="img-wrapper col-md-5">
                  <img alt="dghouse.shop" src={process.env.REACT_APP_URL_API + "/images/banner-img4.png"} class="img-fluid" />
                </div>
                <div class="content-wrapper col-md-7 p-5 mb-5">
                  <div class="secondary-font text-primary text-uppercase mb-4">Save 10 - 20 % off</div>
                  <h2 class="banner-title display-1 fw-normal">Best destination for <span class="text-primary">your
                    pets</span>
                  </h2>
                  <a href="/#" class="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1">
                    shop now

                  </a>
                </div>

              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      <section id="categories">
        <div class="container my-3 py-5">
          <div class="row my-5">
            <div class="col text-center">
              <a href="/#" class="categories-item">
                <Icon class="category-icon" icon="ph:bowl-food" style={{ fontSize: '100px', color: "#DEAD6F99" }}></Icon>
                <h5>Foodies</h5>
              </a>
            </div>
            <div class="col text-center">
              <a href="/#" class="categories-item">
                <Icon class="category-icon" icon="ph:bird" style={{ fontSize: '100px', color: "#DEAD6F99" }}></Icon>
                <h5>Bird Shop</h5>
              </a>
            </div>
            <div class="col text-center">
              <a href="/#" class="categories-item">
                <Icon class="category-icon" icon="ph:dog" style={{ fontSize: '100px', color: "#DEAD6F99" }}></Icon>
                <h5>Dog Shop</h5>
              </a>
            </div>
            <div class="col text-center">
              <a href="/#" class="categories-item">
                <Icon class="category-icon" icon="ph:fish" style={{ fontSize: '100px', color: "#DEAD6F99" }}></Icon>
                <h5>Fish Shop</h5>
              </a>
            </div>
            <div class="col text-center">
              <a href="/#" class="categories-item">
                <Icon class="category-icon" icon="ph:cat" style={{ fontSize: '100px', color: "#DEAD6F99" }}></Icon>
                <h5>Cat Shop</h5>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="clothing" class="my-5 overflow-hidden">
        <div class="container pb-5">

          <div class="section-header d-md-flex justify-content-between align-items-center mb-3">
            <h2 class="display-3 fw-normal">Pet Clothing</h2>
            <div>
              <a href="/#" class="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1">
                shop now
              </a>
            </div>
          </div>

          <Swiper
            spaceBetween={50}
            slidesPerView={4}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Autoplay, Navigation]}
          >
            <SwiperSlide>
              <div class="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle">
                New
              </div>
              <div class="card position-relative">
                <a href="single-product.html"><img alt="dghouse.shop" src={process.env.REACT_APP_URL_API + "/images/item1.jpg"} class="img-fluid rounded-4" /></a>
                <div class="card-body p-0">
                  <a href="single-product.html">
                    <h3 class="card-title pt-4 m-0">Grey hoodie</h3>
                  </a>

                  <div class="card-text">
                    <span class="rating secondary-font">
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      5.0
                    </span>

                    <h3 class="secondary-font text-primary">$18.00</h3>

                    <div class="d-flex flex-wrap mt-3">
                      <a href="/#" class="btn-cart me-3 px-4 pt-3 pb-3">
                        <h5 class="text-uppercase m-0">Add to Cart</h5>
                      </a>
                      <a href="/#" class="btn-wishlist px-4 pt-3 ">
                        <Icon icon="fluent:heart-28-filled" class="fs-5"></Icon>
                      </a>
                    </div>


                  </div>

                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle"></div>
              <div class="card position-relative">
                <a href="single-product.html"><img alt="dghouse.shop" src={process.env.REACT_APP_URL_API + "/images/item2.jpg"} class="img-fluid rounded-4" /></a>
                <div class="card-body p-0">
                  <a href="single-product.html">
                    <h3 class="card-title pt-4 m-0">Grey hoodie</h3>
                  </a>

                  <div class="card-text">
                    <span class="rating secondary-font">
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      5.0</span>

                    <h3 class="secondary-font text-primary">$18.00</h3>

                    <div class="d-flex flex-wrap mt-3">
                      <a href="/#" class="btn-cart me-3 px-4 pt-3 pb-3">
                        <h5 class="text-uppercase m-0">Add to Cart</h5>
                      </a>
                      <a href="/#" class="btn-wishlist px-4 pt-3 ">
                        <Icon icon="fluent:heart-28-filled" class="fs-5"></Icon>
                      </a>
                    </div>

                  </div>

                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle">
                -10%
              </div>
              <div class="card position-relative">
                <a href="single-product.html"><img alt="dghouse.shop" src={process.env.REACT_APP_URL_API + "/images/item3.jpg"} class="img-fluid rounded-4" /></a>
                <div class="card-body p-0">
                  <a href="single-product.html">
                    <h3 class="card-title pt-4 m-0">Grey hoodie</h3>
                  </a>

                  <div class="card-text">
                    <span class="rating secondary-font">
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      5.0</span>

                    <h3 class="secondary-font text-primary">$18.00</h3>

                    <div class="d-flex flex-wrap mt-3">
                      <a href="/#" class="btn-cart me-3 px-4 pt-3 pb-3">
                        <h5 class="text-uppercase m-0">Add to Cart</h5>
                      </a>
                      <a href="/#" class="btn-wishlist px-4 pt-3 ">
                        <Icon icon="fluent:heart-28-filled" class="fs-5"></Icon>
                      </a>
                    </div>


                  </div>

                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle"></div>
              <div class="card position-relative">
                <a href="single-product.html"><img alt="dghouse.shop" src={process.env.REACT_APP_URL_API + "/images/item4.jpg"} class="img-fluid rounded-4" /></a>
                <div class="card-body p-0">
                  <a href="single-product.html">
                    <h3 class="card-title pt-4 m-0">Grey hoodie</h3>
                  </a>

                  <div class="card-text">
                    <span class="rating secondary-font">
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      5.0</span>

                    <h3 class="secondary-font text-primary">$18.00</h3>

                    <div class="d-flex flex-wrap mt-3">
                      <a href="/#" class="btn-cart me-3 px-4 pt-3 pb-3">
                        <h5 class="text-uppercase m-0">Add to Cart</h5>
                      </a>
                      <a href="/#" class="btn-wishlist px-4 pt-3 ">
                        <Icon icon="fluent:heart-28-filled" class="fs-5"></Icon>
                      </a>
                    </div>


                  </div>

                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle"></div>
              <div class="card position-relative">
                <a href="single-product.html"><img alt="dghouse.shop" src={process.env.REACT_APP_URL_API + "/images/item7.jpg"} class="img-fluid rounded-4" /></a>
                <div class="card-body p-0">
                  <a href="single-product.html">
                    <h3 class="card-title pt-4 m-0">Grey hoodie</h3>
                  </a>

                  <div class="card-text">
                    <span class="rating secondary-font">
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      5.0</span>

                    <h3 class="secondary-font text-primary">$18.00</h3>

                    <div class="d-flex flex-wrap mt-3">
                      <a href="/#" class="btn-cart me-3 px-4 pt-3 pb-3">
                        <h5 class="text-uppercase m-0">Add to Cart</h5>
                      </a>
                      <a href="/#" class="btn-wishlist px-4 pt-3 ">
                        <Icon icon="fluent:heart-28-filled" class="fs-5"></Icon>
                      </a>
                    </div>


                  </div>

                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle"></div>
              <div class="card position-relative">
                <a href="single-product.html"><img alt="dghouse.shop" src={process.env.REACT_APP_URL_API + "/images/item8.jpg"} class="img-fluid rounded-4" /></a>
                <div class="card-body p-0">
                  <a href="single-product.html">
                    <h3 class="card-title pt-4 m-0">Grey hoodie</h3>
                  </a>

                  <div class="card-text">
                    <span class="rating secondary-font">
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      5.0</span>

                    <h3 class="secondary-font text-primary">$18.00</h3>

                    <div class="d-flex flex-wrap mt-3">
                      <a href="/#" class="btn-cart me-3 px-4 pt-3 pb-3">
                        <h5 class="text-uppercase m-0">Add to Cart</h5>
                      </a>
                      <a href="/#" class="btn-wishlist px-4 pt-3 ">
                        <Icon icon="fluent:heart-28-filled" class="fs-5"></Icon>
                      </a>
                    </div>


                  </div>

                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      <section id="foodies" class="my-5">
        <div class="container my-5 py-5">

          <div class="section-header d-md-flex justify-content-between align-items-center">
            <h2 class="display-3 fw-normal">Pet Foodies</h2>
            <div class="mb-4 mb-md-0">
              <p class="m-0">
                <button class="filter-button me-4  active" data-filter="*">ALL</button>
                <button class="filter-button me-4 " data-filter=".cat">CAT</button>
                <button class="filter-button me-4 " data-filter=".dog">DOG</button>
                <button class="filter-button me-4 " data-filter=".bird">BIRD</button>
              </p>
            </div>
            <div>
              <a href="/#" class="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1">
                shop now
              </a>
            </div>
          </div>

          <div class="isotope-container row">

            <div class="item cat col-md-4 col-lg-3 my-4">
              <div class="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle"></div>
              <div class="card position-relative">
                <a href="single-product.html"><img alt="dghouse.shop" src={process.env.REACT_APP_URL_API + "/images/item9.jpg"} class="img-fluid rounded-4" /></a>
                <div class="card-body p-0">
                  <a href="single-product.html">
                    <h3 class="card-title pt-4 m-0">Grey hoodie</h3>
                  </a>

                  <div class="card-text">
                    <span class="rating secondary-font">
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      5.0</span>

                    <h3 class="secondary-font text-primary">$18.00</h3>

                    <div class="d-flex flex-wrap mt-3">
                      <a href="/#" class="btn-cart me-3 px-4 pt-3 pb-3">
                        <h5 class="text-uppercase m-0">Add to Cart</h5>
                      </a>
                      <a href="/#" class="btn-wishlist px-4 pt-3 ">
                        <Icon icon="fluent:heart-28-filled" class="fs-5"></Icon>
                      </a>
                    </div>


                  </div>

                </div>
              </div>
            </div>

            <div class="item dog col-md-4 col-lg-3 my-4">
              <div class="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle">
                New
              </div>
              <div class="card position-relative">
                <a href="single-product.html"><img alt="dghouse.shop" src={process.env.REACT_APP_URL_API + "/images/item10.jpg"} class="img-fluid rounded-4" /></a>
                <div class="card-body p-0">
                  <a href="single-product.html">
                    <h3 class="card-title pt-4 m-0">Grey hoodie</h3>
                  </a>

                  <div class="card-text">
                    <span class="rating secondary-font">
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      5.0</span>

                    <h3 class="secondary-font text-primary">$18.00</h3>

                    <div class="d-flex flex-wrap mt-3">
                      <a href="/#" class="btn-cart me-3 px-4 pt-3 pb-3">
                        <h5 class="text-uppercase m-0">Add to Cart</h5>
                      </a>
                      <a href="/#" class="btn-wishlist px-4 pt-3 ">
                        <Icon icon="fluent:heart-28-filled" class="fs-5"></Icon>
                      </a>
                    </div>


                  </div>

                </div>
              </div>
            </div>

            <div class="item dog col-md-4 col-lg-3 my-4">
              <div class="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle"></div>
              <div class="card position-relative">
                <a href="single-product.html"><img alt="dghouse.shop" src={process.env.REACT_APP_URL_API + "/images/item11.jpg"} class="img-fluid rounded-4" /></a>
                <div class="card-body p-0">
                  <a href="single-product.html">
                    <h3 class="card-title pt-4 m-0">Grey hoodie</h3>
                  </a>

                  <div class="card-text">
                    <span class="rating secondary-font">
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      5.0</span>

                    <h3 class="secondary-font text-primary">$18.00</h3>

                    <div class="d-flex flex-wrap mt-3">
                      <a href="/#" class="btn-cart me-3 px-4 pt-3 pb-3">
                        <h5 class="text-uppercase m-0">Add to Cart</h5>
                      </a>
                      <a href="/#" class="btn-wishlist px-4 pt-3 ">
                        <Icon icon="fluent:heart-28-filled" class="fs-5"></Icon>
                      </a>
                    </div>


                  </div>

                </div>
              </div>
            </div>

            <div class="item cat col-md-4 col-lg-3 my-4">
              <div class="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle">
                Sold
              </div>
              <div class="card position-relative">
                <a href="single-product.html"><img alt="dghouse.shop" src={process.env.REACT_APP_URL_API + "/images/item12.jpg"} class="img-fluid rounded-4" /></a>
                <div class="card-body p-0">
                  <a href="single-product.html">
                    <h3 class="card-title pt-4 m-0">Grey hoodie</h3>
                  </a>

                  <div class="card-text">
                    <span class="rating secondary-font">
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      5.0</span>

                    <h3 class="secondary-font text-primary">$18.00</h3>

                    <div class="d-flex flex-wrap mt-3">
                      <a href="/#" class="btn-cart me-3 px-4 pt-3 pb-3">
                        <h5 class="text-uppercase m-0">Add to Cart</h5>
                      </a>
                      <a href="/#" class="btn-wishlist px-4 pt-3 ">
                        <Icon icon="fluent:heart-28-filled" class="fs-5"></Icon>
                      </a>
                    </div>


                  </div>

                </div>
              </div>
            </div>

            <div class="item bird col-md-4 col-lg-3 my-4">
              <div class="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle"></div>
              <div class="card position-relative">
                <a href="single-product.html"><img alt="dghouse.shop" src={process.env.REACT_APP_URL_API + "/images/item13.jpg"} class="img-fluid rounded-4" /></a>
                <div class="card-body p-0">
                  <a href="single-product.html">
                    <h3 class="card-title pt-4 m-0">Grey hoodie</h3>
                  </a>

                  <div class="card-text">
                    <span class="rating secondary-font">
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      5.0</span>

                    <h3 class="secondary-font text-primary">$18.00</h3>

                    <div class="d-flex flex-wrap mt-3">
                      <a href="/#" class="btn-cart me-3 px-4 pt-3 pb-3">
                        <h5 class="text-uppercase m-0">Add to Cart</h5>
                      </a>
                      <a href="/#" class="btn-wishlist px-4 pt-3 ">
                        <Icon icon="fluent:heart-28-filled" class="fs-5"></Icon>
                      </a>
                    </div>


                  </div>

                </div>
              </div>
            </div>

            <div class="item bird col-md-4 col-lg-3 my-4">
              <div class="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle"></div>
              <div class="card position-relative">
                <a href="single-product.html"><img alt="dghouse.shop" src={process.env.REACT_APP_URL_API + "/images/item14.jpg"} class="img-fluid rounded-4" /></a>
                <div class="card-body p-0">
                  <a href="single-product.html">
                    <h3 class="card-title pt-4 m-0">Grey hoodie</h3>
                  </a>

                  <div class="card-text">
                    <span class="rating secondary-font">
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      5.0</span>

                    <h3 class="secondary-font text-primary">$18.00</h3>

                    <div class="d-flex flex-wrap mt-3">
                      <a href="/#" class="btn-cart me-3 px-4 pt-3 pb-3">
                        <h5 class="text-uppercase m-0">Add to Cart</h5>
                      </a>
                      <a href="/#" class="btn-wishlist px-4 pt-3 ">
                        <Icon icon="fluent:heart-28-filled" class="fs-5"></Icon>
                      </a>
                    </div>


                  </div>

                </div>
              </div>
            </div>

            <div class="item dog col-md-4 col-lg-3 my-4">
              <div class="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle">
                Sale
              </div>
              <div class="card position-relative">
                <a href="single-product.html"><img alt="dghouse.shop" src={process.env.REACT_APP_URL_API + "/images/item15.jpg"} class="img-fluid rounded-4" /></a>
                <div class="card-body p-0">
                  <a href="single-product.html">
                    <h3 class="card-title pt-4 m-0">Grey hoodie</h3>
                  </a>

                  <div class="card-text">
                    <span class="rating secondary-font">
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      5.0</span>

                    <h3 class="secondary-font text-primary">$18.00</h3>

                    <div class="d-flex flex-wrap mt-3">
                      <a href="/#" class="btn-cart me-3 px-4 pt-3 pb-3">
                        <h5 class="text-uppercase m-0">Add to Cart</h5>
                      </a>
                      <a href="/#" class="btn-wishlist px-4 pt-3 ">
                        <Icon icon="fluent:heart-28-filled" class="fs-5"></Icon>
                      </a>
                    </div>


                  </div>

                </div>
              </div>
            </div>

            <div class="item cat col-md-4 col-lg-3 my-4">
              <div class="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle"></div>
              <div class="card position-relative">
                <a href="single-product.html"><img alt="dghouse.shop" src={process.env.REACT_APP_URL_API + "/images/item16.jpg"} class="img-fluid rounded-4" /></a>
                <div class="card-body p-0">
                  <a href="single-product.html">
                    <h3 class="card-title pt-4 m-0">Grey hoodie</h3>
                  </a>

                  <div class="card-text">
                    <span class="rating secondary-font">
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      5.0</span>

                    <h3 class="secondary-font text-primary">$18.00</h3>

                    <div class="d-flex flex-wrap mt-3">
                      <a href="/#" class="btn-cart me-3 px-4 pt-3 pb-3">
                        <h5 class="text-uppercase m-0">Add to Cart</h5>
                      </a>
                      <a href="/#" class="btn-wishlist px-4 pt-3 ">
                        <Icon icon="fluent:heart-28-filled" class="fs-5"></Icon>
                      </a>
                    </div>


                  </div>

                </div>
              </div>
            </div>


          </div>


        </div>
      </section>

      <section id="banner-2" class="my-3" style={{ background: "#F9F3EC" }}>
        <div class="container">
          <div class="row flex-row-reverse banner-content align-items-center">
            <div class="img-wrapper col-12 col-md-6">
              <img alt="dghouse.shop" src={process.env.REACT_APP_URL_API + "/images/banner-img2.png"} class="img-fluid" />
            </div>
            <div class="content-wrapper col-12 offset-md-1 col-md-5 p-5">
              <div class="secondary-font text-primary text-uppercase mb-3 fs-4">Upto 40% off</div>
              <h2 class="banner-title display-1 fw-normal">Clearance sale !!!
              </h2>
              <a href="/#" class="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1">
                shop now
              </a>
            </div>

          </div>
        </div>
      </section>

      <section id="testimonial">
        <div class="container my-5 py-5">
          <div class="row">
            <div class="offset-md-1 col-md-10">
              <Swiper
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
              >
                <SwiperSlide>
                  <div class="row ">
                    <div class="col-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="10em" height="10em" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621c.537-.278 1.24-.375 1.929-.311c1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5a3.871 3.871 0 0 1-2.748-1.179m10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621c.537-.278 1.24-.375 1.929-.311c1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5a3.871 3.871 0 0 1-2.748-1.179"></path>
                      </svg>
                    </div>
                    <div class="col-md-10 mt-md-5 p-5 pt-0 pt-md-5">
                      <p class="testimonial-content fs-2">Mèo vốn là loài vật trung thành tuyệt đối trong tình cảm, vì vậy mèo chính là thú cưng mang lại nguồn năng lực biến ngôi nhà lạnh lẽo thành nơi ấm áp và hạnh phúc.</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div class="row ">
                    <div class="col-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="10em" height="10em" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621c.537-.278 1.24-.375 1.929-.311c1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5a3.871 3.871 0 0 1-2.748-1.179m10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621c.537-.278 1.24-.375 1.929-.311c1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5a3.871 3.871 0 0 1-2.748-1.179"></path>
                      </svg>
                    </div>
                    <div class="col-md-10 mt-md-5 p-5 pt-0 pt-md-5">
                      <p class="testimonial-content fs-2">Chó và mèo đều không thể nói, nhưng chúng có thể nghe và hiểu bạn hơn bất kỳ ai khác.</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div class="row ">
                    <div class="col-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="10em" height="10em" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621c.537-.278 1.24-.375 1.929-.311c1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5a3.871 3.871 0 0 1-2.748-1.179m10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621c.537-.278 1.24-.375 1.929-.311c1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5a3.871 3.871 0 0 1-2.748-1.179"></path>
                      </svg>
                    </div>
                    <div class="col-md-10 mt-md-5 p-5 pt-0 pt-md-5">
                      <p class="testimonial-content fs-2">Những cuộc tình đầu với thú cưng mang lại những kỷ niệm đáng nhớ và những trải nghiệm không thể nào quên. Thú cưng giúp ta hiểu rõ hơn về tình yêu vô điều kiện và sự chia sẻ.</p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>

      </section>

      <section id="bestselling" class="my-5 overflow-hidden">
        <div class="container py-5 mb-5">

          <div class="section-header d-md-flex justify-content-between align-items-center mb-3">
            <h2 class="display-3 fw-normal">Best selling products</h2>
            <div>
              <a href="/#" class="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1">
                shop now
              </a>
            </div>
          </div>
          <Swiper className="mySwiper"
            spaceBetween={50}
            slidesPerView={4}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Autoplay, Navigation]}
          >
            <SwiperSlide>
              <div class="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle"></div>
              <div class="card position-relative">
                <a href="single-product.html"><img alt="dghouse.shop" src={process.env.REACT_APP_URL_API + "/images/item5.jpg"} class="img-fluid rounded-4" /></a>
                <div class="card-body p-0">
                  <a href="single-product.html">
                    <h3 class="card-title pt-4 m-0">Grey hoodie</h3>
                  </a>

                  <div class="card-text">
                    <span class="rating secondary-font">
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      5.0</span>

                    <h3 class="secondary-font text-primary">$18.00</h3>

                    <div class="d-flex flex-wrap mt-3">
                      <a href="/#" class="btn-cart me-3 px-4 pt-3 pb-3">
                        <h5 class="text-uppercase m-0">Add to Cart</h5>
                      </a>
                      <a href="/#" class="btn-wishlist px-4 pt-3 ">
                        <Icon icon="fluent:heart-28-filled" class="fs-5"></Icon>
                      </a>
                    </div>


                  </div>

                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle"></div>
              <div class="card position-relative">
                <a href="single-product.html"><img alt="dghouse.shop" src={process.env.REACT_APP_URL_API + "/images/item6.jpg"} class="img-fluid rounded-4" /></a>
                <div class="card-body p-0">
                  <a href="single-product.html">
                    <h3 class="card-title pt-4 m-0">Grey hoodie</h3>
                  </a>

                  <div class="card-text">
                    <span class="rating secondary-font">
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      5.0</span>

                    <h3 class="secondary-font text-primary">$18.00</h3>

                    <div class="d-flex flex-wrap mt-3">
                      <a href="/#" class="btn-cart me-3 px-4 pt-3 pb-3">
                        <h5 class="text-uppercase m-0">Add to Cart</h5>
                      </a>
                      <a href="/#" class="btn-wishlist px-4 pt-3 ">
                        <Icon icon="fluent:heart-28-filled" class="fs-5"></Icon>
                      </a>
                    </div>

                  </div>

                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle">
                Sale
              </div>
              <div class="card position-relative">
                <a href="single-product.html"><img alt="dghouse.shop" src={process.env.REACT_APP_URL_API + "/images/item7.jpg"} class="img-fluid rounded-4" /></a>
                <div class="card-body p-0">
                  <a href="single-product.html">
                    <h3 class="card-title pt-4 m-0">Grey hoodie</h3>
                  </a>

                  <div class="card-text">
                    <span class="rating secondary-font">
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      5.0</span>

                    <h3 class="secondary-font text-primary">$18.00</h3>

                    <div class="d-flex flex-wrap mt-3">
                      <a href="/#" class="btn-cart me-3 px-4 pt-3 pb-3">
                        <h5 class="text-uppercase m-0">Add to Cart</h5>
                      </a>
                      <a href="/#" class="btn-wishlist px-4 pt-3 ">
                        <Icon icon="fluent:heart-28-filled" class="fs-5"></Icon>
                      </a>
                    </div>


                  </div>

                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle"></div>
              <div class="card position-relative">
                <a href="single-product.html"><img alt="dghouse.shop" src={process.env.REACT_APP_URL_API + "/images/item8.jpg"} class="img-fluid rounded-4" /></a>
                <div class="card-body p-0">
                  <a href="single-product.html">
                    <h3 class="card-title pt-4 m-0">Grey hoodie</h3>
                  </a>

                  <div class="card-text">
                    <span class="rating secondary-font">
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      5.0</span>

                    <h3 class="secondary-font text-primary">$18.00</h3>

                    <div class="d-flex flex-wrap mt-3">
                      <a href="/#" class="btn-cart me-3 px-4 pt-3 pb-3">
                        <h5 class="text-uppercase m-0">Add to Cart</h5>
                      </a>
                      <a href="/#" class="btn-wishlist px-4 pt-3 ">
                        <Icon icon="fluent:heart-28-filled" class="fs-5"></Icon>
                      </a>
                    </div>


                  </div>

                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle">
                -10%
              </div>
              <div class="card position-relative">
                <a href="single-product.html"><img alt="dghouse.shop" src={process.env.REACT_APP_URL_API + "/images/item3.jpg"} class="img-fluid rounded-4" /></a>
                <div class="card-body p-0">
                  <a href="single-product.html">
                    <h3 class="card-title pt-4 m-0">Grey hoodie</h3>
                  </a>

                  <div class="card-text">
                    <span class="rating secondary-font">
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      5.0</span>

                    <h3 class="secondary-font text-primary">$18.00</h3>

                    <div class="d-flex flex-wrap mt-3">
                      <a href="/#" class="btn-cart me-3 px-4 pt-3 pb-3">
                        <h5 class="text-uppercase m-0">Add to Cart</h5>
                      </a>
                      <a href="/#" class="btn-wishlist px-4 pt-3 ">
                        <Icon icon="fluent:heart-28-filled" class="fs-5"></Icon>
                      </a>
                    </div>


                  </div>

                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle"></div>
              <div class="card position-relative">
                <a href="single-product.html"><img alt="dghouse.shop" src={process.env.REACT_APP_URL_API + "/images/item4.jpg"} class="img-fluid rounded-4" /></a>
                <div class="card-body p-0">
                  <a href="single-product.html">
                    <h3 class="card-title pt-4 m-0">Grey hoodie</h3>
                  </a>

                  <div class="card-text">
                    <span class="rating secondary-font">
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      <Icon icon="clarity:star-solid" class="text-primary"></Icon>
                      5.0</span>

                    <h3 class="secondary-font text-primary">$18.00</h3>

                    <div class="d-flex flex-wrap mt-3">
                      <a href="/#" class="btn-cart me-3 px-4 pt-3 pb-3">
                        <h5 class="text-uppercase m-0">Add to Cart</h5>
                      </a>
                      <a href="/#" class="btn-wishlist px-4 pt-3 ">
                        <Icon icon="fluent:heart-28-filled" class="fs-5"></Icon>
                      </a>
                    </div>


                  </div>

                </div>
              </div>
            </SwiperSlide>
          </Swiper>


        </div>
      </section>

      <section id="register" style={{ background: "url('images/background-img.png') no-repeat" }}>
        <div class="container ">
          <div class="row my-5 py-5">
            <div class="offset-md-3 col-md-6 my-5 ">
              <h2 class="display-3 fw-normal text-center">Get 20% Off on <span class="text-primary">first Purchase</span>
              </h2>
              <form>
                <div class="mb-3">
                  <input type="email" class="form-control form-control-lg" name="email" id="email"
                    placeholder="Enter Your Email Address" />
                </div>
                <div class="mb-3">
                  <input type="password" class="form-control form-control-lg" name="email" id="password1"
                    placeholder="Create Password" />
                </div>
                <div class="mb-3">
                  <input type="password" class="form-control form-control-lg" name="email" id="password2"
                    placeholder="Repeat Password" />
                </div>

                <div class="d-grid gap-2">
                  <button type="submit" class="btn btn-dark btn-lg rounded-1">Register it now</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section id="latest-blog" class="my-5">
        <div class="container py-5 my-5">
          <div class="row mt-5">
            <div class="section-header d-md-flex justify-content-between align-items-center mb-3">
              <h2 class="display-3 fw-normal">Latest Blog Post</h2>
              <div>
                <a href="/#" class="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1">
                  Read all
                  <svg width="24" height="24" viewBox="0 0 24 24" class="mb-1">
                    <use xlinkHref="#arrow-right"></use>
                  </svg></a>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4 my-4 my-md-0">
              <div class="z-1 position-absolute rounded-3 m-2 px-3 pt-1 bg-light">
                <h3 class="secondary-font text-primary m-0">20</h3>
                <p class="secondary-font fs-6 m-0">Feb</p>

              </div>
              <div class="card position-relative">
                <a href="single-post.html"><img alt="dghouse.shop" src={process.env.REACT_APP_URL_API + "/images/blog1.jpg"} class="img-fluid rounded-4" /></a>
                <div class="card-body p-0">
                  <a href="single-post.html">
                    <h3 class="card-title pt-4 pb-3 m-0">10 Reasons to be helpful towards any animals</h3>
                  </a>

                  <div class="card-text">
                    <p class="blog-paragraph fs-6">At the core of our practice is the idea that cities are the incubators of
                      our greatest
                      achievements, and the best hope for a sustainable future.</p>
                    <a href="single-post.html" class="blog-read">read more</a>
                  </div>

                </div>
              </div>
            </div>
            <div class="col-md-4 my-4 my-md-0">
              <div class="z-1 position-absolute rounded-3 m-2 px-3 pt-1 bg-light">
                <h3 class="secondary-font text-primary m-0">21</h3>
                <p class="secondary-font fs-6 m-0">Feb</p>

              </div>
              <div class="card position-relative">
                <a href="single-post.html"><img alt="dghouse.shop" src={process.env.REACT_APP_URL_API + "/images/blog2.jpg"} class="img-fluid rounded-4" /></a>
                <div class="card-body p-0">
                  <a href="single-post.html">
                    <h3 class="card-title pt-4 pb-3 m-0">How to know your pet is hungry</h3>
                  </a>

                  <div class="card-text">
                    <p class="blog-paragraph fs-6">At the core of our practice is the idea that cities are the incubators of
                      our greatest
                      achievements, and the best hope for a sustainable future.</p>
                    <a href="single-post.html" class="blog-read">read more</a>
                  </div>

                </div>
              </div>
            </div>
            <div class="col-md-4 my-4 my-md-0">
              <div class="z-1 position-absolute rounded-3 m-2 px-3 pt-1 bg-light">
                <h3 class="secondary-font text-primary m-0">22</h3>
                <p class="secondary-font fs-6 m-0">Feb</p>

              </div>
              <div class="card position-relative">
                <a href="single-post.html"><img alt="dghouse.shop" src={process.env.REACT_APP_URL_API + "/images/blog3.jpg"} class="img-fluid rounded-4" /></a>
                <div class="card-body p-0">
                  <a href="single-post.html">
                    <h3 class="card-title pt-4 pb-3 m-0">Best home for your pets</h3>
                  </a>

                  <div class="card-text">
                    <p class="blog-paragraph fs-6">At the core of our practice is the idea that cities are the incubators of
                      our greatest
                      achievements, and the best hope for a sustainable future.</p>
                    <a href="single-post.html" class="blog-read">read more</a>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section id="service">
        <div class="container py-5 my-5">
          <div class="row g-md-5 pt-4">
            <div class="col-md-3 my-3">
              <div class="card">
                <div>
                  <Icon class="service-icon text-primary" icon="la:shopping-cart"></Icon>
                </div>
                <h3 class="card-title py-2 m-0">Free Delivery</h3>
                <div class="card-text">
                  <p class="blog-paragraph fs-6">Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
                </div>
              </div>
            </div>
            <div class="col-md-3 my-3">
              <div class="card">
                <div>
                  <Icon class="service-icon text-primary" icon="la:user-check"></Icon>
                </div>
                <h3 class="card-title py-2 m-0">100% secure payment</h3>
                <div class="card-text">
                  <p class="blog-paragraph fs-6">Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
                </div>
              </div>
            </div>
            <div class="col-md-3 my-3">
              <div class="card">
                <div>
                  <Icon class="service-icon text-primary" icon="la:tag"></Icon>
                </div>
                <h3 class="card-title py-2 m-0">Daily Offer</h3>
                <div class="card-text">
                  <p class="blog-paragraph fs-6">Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
                </div>
              </div>
            </div>
            <div class="col-md-3 my-3">
              <div class="card">
                <div>
                  <Icon class="service-icon text-primary" icon="la:award"></Icon>
                </div>
                <h3 class="card-title py-2 m-0">Quality guarantee</h3>
                <div class="card-text">
                  <p class="blog-paragraph fs-6">Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section> */}

      {/* <section id="insta" class="my-5">
        <div class="row g-0 py-5">
          <div class="col instagram-item  text-center position-relative">
            <div class="icon-overlay d-flex justify-content-center position-absolute">
              <Icon class="text-white" icon="la:instagram"></Icon>
            </div>
            <a href="/#">
              <img alt="dghouse.shop" src="images/insta1.jpg" class="img-fluid rounded-3" />
            </a>
          </div>
          <div class="col instagram-item  text-center position-relative">
            <div class="icon-overlay d-flex justify-content-center position-absolute">
              <Icon class="text-white" icon="la:instagram"></Icon>
            </div>
            <a href="/#">
              <img alt="dghouse.shop" src="images/insta2.jpg" class="img-fluid rounded-3" />
            </a>
          </div>
          <div class="col instagram-item  text-center position-relative">
            <div class="icon-overlay d-flex justify-content-center position-absolute">
              <Icon class="text-white" icon="la:instagram"></Icon>
            </div>
            <a href="/#">
              <img alt="dghouse.shop" src="images/insta3.jpg" class="img-fluid rounded-3" />
            </a>
          </div>
          <div class="col instagram-item  text-center position-relative">
            <div class="icon-overlay d-flex justify-content-center position-absolute">
              <Icon class="text-white" icon="la:instagram"></Icon>
            </div>
            <a href="/#">
              <img alt="dghouse.shop" src="images/insta4.jpg" class="img-fluid rounded-3" />
            </a>
          </div>
          <div class="col instagram-item  text-center position-relative">
            <div class="icon-overlay d-flex justify-content-center position-absolute">
              <Icon class="text-white" icon="la:instagram"></Icon>
            </div>
            <a href="/#">
              <img alt="dghouse.shop" src="images/insta5.jpg" class="img-fluid rounded-3" />
            </a>
          </div>
          <div class="col instagram-item  text-center position-relative">
            <div class="icon-overlay d-flex justify-content-center position-absolute">
              <Icon class="text-white" icon="la:instagram"></Icon>
            </div>
            <a href="/#">
              <img alt="dghouse.shop" src="images/insta6.jpg" class="img-fluid rounded-3" />
            </a>
          </div>
        </div>
      </section> */}
    </>
  )
}
