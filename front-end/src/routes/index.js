import About from "../pages/About";
import Blog from "../pages/Blog";
import Booking from "../pages/Booking";
import Cart from "../pages/cart";
import Contact from "../pages/Contact";
import Detail from "../pages/detail";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ForgetPassword from "../pages/Forgetpass";
import OTPInput from "../pages/OTPinput";
import Resetpassword from "../pages/Resetpassword";
import Register from "../pages/register";
import Service from "../pages/Service";
import Shop from "../pages/Shop";
import ShopPet from "../pages/shoppet";
import Success from "../pages/success";
import Notfound from "../pages/notfound";
import UserDetail from "../pages/userdetail";
import UserDetailEdit from "../pages/userdetailedit";
import ChangePassword from "../pages/changepassword";
import DetailPet from "../pages/detailpet";

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
  { path: "/service", component: Service },
  { path: "/contact", component: Contact },
  { path: "/shop", component: Shop },
  { path: "/shoppet", component: ShopPet },
  { path: "/blog", component: Blog },
  { path: "/booking", component: Booking },
  { path: "/login", component: Login },
  { path: "/forget-password", component: ForgetPassword },
  { path: "/OTPInput", component: OTPInput },
  { path: "/Resetpassword", component: Resetpassword },
  { path: "/register", component: Register },
  { path: "/detail/:id", component: Detail },
  { path: "/detailpet/:id", component: DetailPet },
  { path: "/cart", component: Cart },
  { path: "/success", component: Success },
  { path: "/userdetail/:id", component: UserDetail },
  { path: "/userdetailedit/:id", component: UserDetailEdit },
  { path: "/changepassword/:id", component: ChangePassword },
  // { path: "/admin/admindonhang", component: adminDonHang },

  { path: "/employee/thongke", component: Thongke },
  { path: "/employee/index", component: AdminIndex },
  { path: "/employee/binhluan", component: AdminBinhLuan },
  { path: "/employee/dichvu", component: AdminDichVu },
  { path: "/employee/adddichvu", component: AdminAddDichVu },
  { path: "/employee/sanpham", component: AdminSanPham },
  { path: "/employee/addsanpham", component: AdminAddSanPham },
  { path: "/employee/editsanpham", component: AdminEditSanPham },
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
