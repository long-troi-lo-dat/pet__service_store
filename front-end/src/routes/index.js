import About from "../pages/About";
import Blog from "../pages/Blog";
import Booking from "../pages/Booking";
import Cart from "../pages/cart";
import Contact from "../pages/Contact";
import Detail from "../pages/detail";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/register";
import Service from "../pages/Service";
import Shop from "../pages/Shop";
import ShopPet from "../pages/shoppet";
import Success from "../pages/success";
import Notfound from "../pages/notfound";
import UserDetail from "../pages/userdetail";
import UserDetailEdit from "../pages/userdetailedit";
import DetailPet from "../pages/detailpet";

// import adminDonHang from "../pages/QuanLyAdmin/qldonhang";
import AdminIndex from "../pages/QuanLyAdmin/index"
import AdminBinhLuan from "../pages/QuanLyAdmin/binhluan";
import AdminDichVu from "../pages/QuanLyAdmin/dichvu";
import AdminAddDichVu from "../pages/QuanLyAdmin/adddichvu";
import AdminSanPham from "../pages/QuanLyAdmin/sanpham";
import AdminAddSanPham from "../pages/QuanLyAdmin/addsanpham";
import AdminThuCung from "../pages/QuanLyAdmin/thucung";
import AdminAddThuCung from "../pages/QuanLyAdmin/addthucung";
import AdminDonHang from "../pages/QuanLyAdmin/donhang";
import AdminDatLich from "../pages/QuanLyAdmin/datlich";
import AdminNguoiDung from "../pages/QuanLyAdmin/nguoidung";

import QuanLyChiNhanhIndex from "../pages/QuanLyChiNhanh/index"
import QuanLyChiNhanhDonHang from "../pages/QuanLyChiNhanh/donhang";
import QuanLyChiNhanhDatLich from "../pages/QuanLyChiNhanh/datlich";

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
  { path: "/register", component: Register },
  { path: "/detail/:id", component: Detail },
  { path: "/detailpet/:id", component: DetailPet },
  { path: "/cart", component: Cart },
  { path: "/success", component: Success },
  { path: "/userdetail/:id", component: UserDetail },
  { path: "/userdetailedit/:id", component: UserDetailEdit },
  // { path: "/admin/admindonhang", component: adminDonHang },

  { path: "/admin/index", component: AdminIndex },
  { path: "/admin/binhluan", component: AdminBinhLuan },
  { path: "/admin/dichvu", component: AdminDichVu },
  { path: "/admin/adddichvu", component: AdminAddDichVu },
  { path: "/admin/sanpham", component: AdminSanPham },
  { path: "/admin/addsanpham", component: AdminAddSanPham },
  { path: "/admin/thucung", component: AdminThuCung },
  { path: "/admin/addthucung", component: AdminAddThuCung },
  { path: "/admin/donhang", component: AdminDonHang },
  { path: "/admin/datlich", component: AdminDatLich },
  { path: "/admin/nguoidung", component: AdminNguoiDung },

  { path: "/QuanLyChiNhanh/index", component: QuanLyChiNhanhIndex },
  { path: "/QuanLyChiNhanh/donhang", component: QuanLyChiNhanhDonHang },
  { path: "/QuanLyChiNhanh/datlich", component: QuanLyChiNhanhDatLich },

  { path: "/NhanVienDichVu/index", component: NhanVienDichVu },
  { path: "/NhanVienDichVu/datlich", component: NhanVienDichVuDatLich },

  { path: "*", component: Notfound },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
