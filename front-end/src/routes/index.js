import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import Shop from "../pages/Shop";
import DetailProduct from "../pages/DetailProduct";
import BookingService from "../pages/BookingService";
import Cart from "../pages/Cart";
import Success from "../pages/NotifySuccess";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import PasswordForget from "../pages/PasswordForget";
import PasswordOtpInput from "../pages/PasswordOtpInput";
import PasswordReset from "../pages/PasswordReset";
import UserDetail from "../pages/UserDetail";
import UserDetailEdit from "../pages/UserDetailEdit";
import PasswordChange from "../pages/PasswordChange";
import Notfound from "../pages/PageNotFound";

// import adminDonHang from "../pages/QuanLyAdmin/qldonhang";
import Thongke from "../pages/QuanLyAdmin/thongke";
import AdminIndex from "../pages/QuanLyAdmin/index"
import AdminBinhLuan from "../pages/QuanLyAdmin/binhluan";
import AdminDichVu from "../pages/QuanLyAdmin/dichvu";
import AdminAddDichVu from "../pages/QuanLyAdmin/adddichvu";
import AdminSanPham from "../pages/QuanLyAdmin/sanpham";
import AdminAddSanPham from "../pages/QuanLyAdmin/addsanpham";
import AdminEditSanPham from "../pages/QuanLyAdmin/editsanpham";
import AdminAddNguoiDung from "../pages/QuanLyAdmin/addnguoidung";
import AdminThuCung from "../pages/QuanLyAdmin/thucung";
import AdminDonHang from "../pages/QuanLyAdmin/donhang";
import AdminDatLich from "../pages/QuanLyAdmin/datlich";
import AdminNguoiDung from "../pages/QuanLyAdmin/nguoidung";

// import QuanLyChiNhanhIndex from "../pages/QuanLyChiNhanh/index"
import QuanLyChiNhanhDonHang from "../pages/QuanLyChiNhanh/donhang";
import QuanLyChiNhanhDatLich from "../pages/QuanLyChiNhanh/datlich";
import ThongkeChinhanh from "../pages/QuanLyChiNhanh/thongke";

import NhanVienDichVu from "../pages/QuanLyDichVu/index"
import NhanVienDichVuDatLich from "../pages/QuanLyDichVu/datlich"

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/services", component: Services },
  { path: "/blog", component: Blog },
  { path: "/contact", component: Contact },
  { path: "/shop", component: Shop },
  { path: "/detailproduct/:id", component: DetailProduct },
  { path: "/bookingservice", component: BookingService },
  { path: "/cart", component: Cart },
  { path: "/success", component: Success },
  { path: "/login", component: SignIn },
  { path: "/register", component: SignUp },
  { path: "/password-forget", component: PasswordForget },
  { path: "/password-OTP-input", component: PasswordOtpInput },
  { path: "/password-reset", component: PasswordReset },
  { path: "/userdetail/:id", component: UserDetail },
  { path: "/userdetailedit/:id", component: UserDetailEdit },
  { path: "/PassWordChange/:id", component: PasswordChange },

  { path: "/employee/thongke", component: Thongke },
  { path: "/employee/index", component: AdminIndex },
  { path: "/employee/binhluan", component: AdminBinhLuan },
  { path: "/employee/dichvu", component: AdminDichVu },
  { path: "/employee/adddichvu", component: AdminAddDichVu },
  { path: "/employee/sanpham", component: AdminSanPham },
  { path: "/employee/addsanpham", component: AdminAddSanPham },
  { path: "/employee/editsanpham/:id", component: AdminEditSanPham },
  { path: "/employee/addnguoidung", component: AdminAddNguoiDung },
  { path: "/employee/thucung", component: AdminThuCung },
  { path: "/employee/donhang", component: AdminDonHang },
  { path: "/employee/datlich", component: AdminDatLich },
  { path: "/employee/nguoidung", component: AdminNguoiDung },

  // { path: "/employee/index", component: AdminIndex },
  { path: "/QuanLyChiNhanh/donhang", component: QuanLyChiNhanhDonHang },
  { path: "/QuanLyChiNhanh/datlich", component: QuanLyChiNhanhDatLich },
  { path: "/QuanLyChiNhanh/thongke", component: ThongkeChinhanh },

  { path: "/NhanVienDichVu/index", component: NhanVienDichVu },
  { path: "/NhanVienDichVu/datlich", component: NhanVienDichVuDatLich },

  { path: "*", component: Notfound },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
