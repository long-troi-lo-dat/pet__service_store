const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const route = require("./src/routes/index");
const db = require("./src/db/dbConfig");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");
const readline = require("readline");
var config = require("config");
let router = express.Router();

dotenv.config();

const port = process.env.PORT || 8000;

const app = express();

const BaseURL = process.env.PUBLIC_URL;
app.use(
  cors({
    origin: BaseURL,
    credentials: true,
  })
);

app.use(express.json());
app.use(express.static("./Images"));

app.use(express.urlencoded({ extended: false }));

app.use("/api", route);

app.get("/", function (req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);

  res.send("Welcome you, admin");
});

//api shop
app.get("/shop", (req, res) => {
  const sql = "SELECT * FROM sanpham ORDER BY id_dm DESC, ngaythem DESC ";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.get("/shop/:category/:detail/:price", (req, res) => {
  const category = req.params.category;
  const idgl = req.params.detail;
  const price = req.params.price;

  // Set conditions for filtering
  const catesql = `id_dm = ?`;
  const detailsql = idgl !== "0" ? `id_gl = ?` : null;
  const pricesql =
    price !== "0" ? (parseInt(price) > 200000 ? "gia > ?" : "gia < ?") : null;

  const params = [category];
  if (detailsql) params.push(idgl);
  if (pricesql) params.push(parseInt(price));

  const conditions = [catesql, detailsql, pricesql]
    .filter((condition) => condition !== null)
    .join(" AND ");

  const sql = `SELECT * FROM sanpham WHERE ${conditions} ORDER BY id_dm ASC, ngaythem DESC`;

  // Execute the query with parameters
  db.query(sql, params, (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal server error" });
    }
    console.log(sql, params, "query result");
    return res.json(data);
  });
});
app.get("/detail/:id", (req, res) => {
  const sql = "SELECT * FROM sanpham WHERE id_sp = ?";
  const id = req.params.id;
  db.query(sql, [id], (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  });
});

app.get("/binhluan/:id", (req, res) => {
  const sql = "SELECT * FROM binhluan where anHien=0 and id_sp= ?";
  const id = req.params.id;
  db.query(sql, [id], (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  });
});
app.get("/AdminBinhLuan", (req, res) => {
  const sql = "SELECT * FROM binhluan";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
app.get("/AdminSanPham", (req, res) => {
  const sql = "SELECT * FROM sanpham order by ngaythem desc";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
app.get("/employee/shop/:category", (req, res) => {
  const iddm = req.params.category;
  let sql = "SELECT * FROM sanpham ORDER BY ngaythem DESC";
  if (iddm !== "0") {
    sql = "SELECT * FROM sanpham WHERE id_dm=? ORDER BY ngaythem DESC";
  }
  db.query(sql, iddm, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
app.get("/AdminDichVu", (req, res) => {
  const sql = "SELECT * FROM dichvu";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
app.get("/AdminThuCung", (req, res) => {
  const sql =
    "select thucung.*, giongloai.ten as tengiongloai from thucung INNER JOIN giongloai on thucung.id_gl = giongloai.id_gl order by thucung.id";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
app.get("/AdminNguoiDung", (req, res) => {
  const sql = "SELECT * FROM nguoidung";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
app.get("/quanlynguoidung/:cate", (req, res) => {
  const cate = req.params.cate;
  var cateText = "not vaitro=0";
  if (cate == 0) {
    cateText = "vaitro=0";
  }
  const sql = `SELECT * FROM nguoidung where ${cateText}`;
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
app.post("/vohieuhoa/:iduser", (req, res) => {
  const sql = `UPDATE nguoidung SET vohieuhoa=1 WHERE id_user= ${req.params.iduser}`;
  db.query(sql, (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  });
});
app.post("/kichhoat/:iduser", (req, res) => {
  const sql = `UPDATE nguoidung SET vohieuhoa=0 WHERE id_user= ${req.params.iduser}`;
  db.query(sql, (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  });
});
app.get("/AdminDonHang", (req, res) => {
  const sql = "SELECT * FROM donhang where trangthai<4 order by ngaydat desc";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
app.get("/AdminDonHangThanhCong", (req, res) => {
  const sql = "SELECT * FROM donhang where trangthai=4";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
app.get("/AdminDatLich", (req, res) => {
  const sql =
    "SELECT * FROM donhangdichvu where trangthai<3 order by ngay desc , thoigian desc";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
app.get("/AdminDatLich/:chinhanh", (req, res) => {
  const sql = `SELECT * FROM donhangdichvu where trangthai<3 and id_chinhanh=${req.params.chinhanh} order by ngay desc , thoigian desc`;
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
app.get("/employee/nhanvien/:chinhanh/:idnhanvien", (req, res) => {
  const sql = `SELECT * FROM donhangdichvu where nhanvien=${req.params.idnhanvien} and id_chinhanh=${req.params.chinhanh} order by ngay desc , thoigian desc`;
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
app.get("/employee/datlich/chuaphancong", (req, res) => {
  const value = req.params.donhang;
  const sql =
    "SELECT * FROM donhangdichvu where nhanvien=1 order by ngay desc , thoigian desc";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
app.get("/employee/datlich/dangthuchien", (req, res) => {
  const value = req.params.donhang;
  const sql =
    "SELECT * FROM donhangdichvu where trangthai<3 order by ngay desc , thoigian desc";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
app.get("/employee/datlich/dahoanthanh", (req, res) => {
  const value = req.params.donhang;
  const sql =
    "SELECT * FROM donhangdichvu where trangthai=3 order by ngay desc , thoigian desc";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
app.get("/employee/nhanvien/:chinhanh/datlich/chuaphancong", (req, res) => {
  const value = req.params.chinhanh;
  const sql = `SELECT * FROM donhangdichvu where nhanvien=1 and id_chinhanh=${req.params.chinhanh} order by ngay desc , thoigian desc`;
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
app.get("/employee/nhanvien/:chinhanh/datlich/dangthuchien", (req, res) => {
  const value = req.params.chinhanh;
  const sql = `SELECT * FROM donhangdichvu where trangthai<3 and id_chinhanh=${req.params.chinhanh} order by ngay desc , thoigian desc`;
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
app.get("/employee/nhanvien/:chinhanh/datlich/dahoanthanh", (req, res) => {
  const value = req.params.chinhanh;
  const sql = `SELECT * FROM donhangdichvu where trangthai=3 and id_chinhanh=${req.params.chinhanh} order by ngay desc , thoigian desc`;
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
app.get("/ChiNhanh/DatLich", (req, res) => {
  const chinhanh = req.query.chinhanh;
  const sql =
    "SELECT * FROM donhangdichvu where id_chinhanh=? and not trangthai=3";
  db.query(sql, [chinhanh], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
app.get("/dondahoanthanhchinhanh", (req, res) => {
  const chinhanh = req.query.chinhanh;
  const sql = "SELECT * FROM donhangdichvu where id_chinhanh=? and trangthai=3";
  db.query(sql, [chinhanh], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
app.get("/NhanVien/DichVu", (req, res) => {
  const chinhanh = req.query.chinhanh;
  const sql = "SELECT * FROM nguoidung where chinhanh=?";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
app.get("/NhanVien/DatLich", (req, res) => {
  const chinhanh = req.query.chinhanh;
  const nhanvien = req.query.nhanvien;
  const sql =
    "SELECT * FROM donhangdichvu where id_chinhanh=? and nhanvien=? order by ngay desc , thoigian desc";
  db.query(sql, [chinhanh, nhanvien], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
app.get("/DichVu2/DonHang/:id", (req, res) => {
  const sql = "SELECT * FROM donhangdichvu where chinhanh=2 and nhanvien=?";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
app.post("/selectnhanvien", (req, res) => {
  const sql = `UPDATE donhangdichvu SET nhanvien='${req.body.nhanvien}' WHERE id='${req.body.id}'`;
  db.query(sql, (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  });
});
// thống kê doanh thu
app.get("/thongke/donhang/theongay", (req, res) => {
  const sql = `SELECT DATE(ngaydat) AS datengaydat, SUM(tongtien) AS tongtien
  FROM donhang
  GROUP BY datengaydat
  ORDER BY datengaydat`;
  db.query(sql, (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  });
});
app.get("/thongke/donhang/theothang", (req, res) => {
  const sql = `SELECT MONTH(ngaydat) AS monthngaydat, SUM(tongtien) AS sumtongtien
  FROM donhang where MONTH(ngaydat) = MONTH(CURDATE())
  GROUP BY monthngaydat
  ORDER BY monthngaydat`;
  db.query(sql, (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  });
});
app.get("/thongke/donhang/chuaxacnhan", (req, res) => {
  const sql = `SELECT count(id) as donhangchuaxacnhan FROM donhang WHERE trangthai=0`;
  db.query(sql, (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  });
});
app.get("/thongke/donhang/dahoanthanh", (req, res) => {
  const sql = `SELECT count(id) as donhangdahoanthanh FROM donhang WHERE trangthai=4`;
  db.query(sql, (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  });
});
app.get("/thongke/donhang/nhanvien/:nhanvien/dahoanthanh", (req, res) => {
  const sql = `SELECT count(id) as donhangdahoanthanh FROM donhangdichvu WHERE trangthai=3 and nhanvien=${req.params.nhanvien}`;
  db.query(sql, (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  });
});
app.get("/thongke/donhang/nhanvien/:nhanvien/tongdanhthu", (req, res) => {
  const sql = `SELECT SUM(tongtien) AS tong_tien_thang FROM donhangdichvu WHERE trangthai=3 and nhanvien=${req.params.nhanvien}`;
  db.query(sql, (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  });
});
app.get("/thongke/dichvu/nhanvien/roi", (req, res) => {
  // const sql = `SELECT nhanvien, COUNT(*) AS so_don_hang FROM donhangdichvu where MONTH(ngay) = 11 GROUP BY nhanvien;`
  const sql = `SELECT nhanvien, MONTH(ngay) as thang, COUNT(*) AS so_don_hang 
  FROM donhangdichvu where trangthai=3
  GROUP BY nhanvien, MONTH(ngay)`;
  db.query(sql, (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  });
});

app.get("/thongke/:chinhanh/dichvu/nhanvien/roi", (req, res) => {
  // const sql = `SELECT nhanvien, COUNT(*) AS so_don_hang FROM donhangdichvu where MONTH(ngay) = 11 GROUP BY nhanvien;`
  const sql = `SELECT nhanvien, MONTH(ngay) as thang, COUNT(*) AS so_don_hang 
  FROM donhangdichvu where trangthai=3 and id_chinhanh=${req.params.chinhanh}
  GROUP BY nhanvien, MONTH(ngay)`;
  db.query(sql, (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  });
});
app.get("/thongke/chinhanh/:chinhanh/dichvu/nhanvien/roi", (req, res) => {
  // const sql = `SELECT nhanvien, COUNT(*) AS so_don_hang FROM donhangdichvu where MONTH(ngay) = 11 GROUP BY nhanvien;`
  const sql = `SELECT nhanvien, MONTH(ngay) as thang, COUNT(*) AS so_don_hang 
  FROM donhangdichvu where trangthai=3 and id_chinhanh=${req.params.chinhanh}
  GROUP BY nhanvien, MONTH(ngay)`;
  db.query(sql, (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  });
});
app.get("/thongke/dichvu/nhanvien/chua", (req, res) => {
  // const sql = `SELECT nhanvien, COUNT(*) AS so_don_hang FROM donhangdichvu where MONTH(ngay) = 11 GROUP BY nhanvien;`
  const sql = `SELECT MONTH(ngay) as thangdat, Day(ngay) as ngaydat,nhanvien, COUNT(*) AS so_don_hang 
  FROM donhangdichvu where trangthai<3
  GROUP BY nhanvien, Day(ngay) order by ngaydat`;
  db.query(sql, (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  });
});

app.get("/thongke/chinhanh/:chinhanh/dichvu/nhanvien/chua", (req, res) => {
  // const sql = `SELECT nhanvien, COUNT(*) AS so_don_hang FROM donhangdichvu where MONTH(ngay) = 11 GROUP BY nhanvien;`
  const sql = `SELECT MONTH(ngay) as thangdat, Day(ngay) as ngaydat,nhanvien, COUNT(*) AS so_don_hang 
  FROM donhangdichvu where trangthai<3 and id_chinhanh=${req.params.chinhanh}
  GROUP BY nhanvien, Day(ngay) order by ngaydat`;
  db.query(sql, (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  });
});
app.get("/thongke/chinhanh/dichvu/nhanvien/:nhanvien/chua", (req, res) => {
  // const sql = `SELECT nhanvien, COUNT(*) AS so_don_hang FROM donhangdichvu where MONTH(ngay) = 11 GROUP BY nhanvien;`
  const sql = `SELECT MONTH(ngay) as thangdat, Day(ngay) as ngaydat,nhanvien, COUNT(*) AS so_don_hang 
  FROM donhangdichvu where trangthai<3 and nhanvien=${req.params.nhanvien}
  GROUP BY nhanvien, Day(ngay) order by ngaydat`;
  db.query(sql, (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  });
});

app.get("/thongke/dichvu/tongtien", (req, res) => {
  // const sql = `SELECT nhanvien, COUNT(*) AS so_don_hang FROM donhangdichvu where MONTH(ngay) = 11 GROUP BY nhanvien;`
  const sql = `SELECT MONTH(ngay) as thang, SUM(tongtien) AS tong_tien_thang
  FROM donhangdichvu
  GROUP BY MONTH(ngay)`;
  db.query(sql, (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  });
});
app.get("/thongke/dichvu/:chinhanh/tongtien", (req, res) => {
  const sql = `SELECT MONTH(ngay) as thang, SUM(tongtien) AS tong_tien_thang
  FROM donhangdichvu where id_chinhanh=${req.params.chinhanh}
  GROUP BY MONTH(ngay)`;
  db.query(sql, (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  });
});
app.get("/thongke/newregister", (req, res) => {
  const sql = `SELECT COUNT(id_user) AS so_nguoi_dang_ky_moi FROM nguoidung WHERE MONTH(ngaytao) = MONTH(CURDATE())`;
  db.query(sql, (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  });
});
app.get("/thongke/datlich/chuahoanthanh", (req, res) => {
  const sql = `SELECT count(id) as datlichchuahoanthanh FROM donhangdichvu WHERE trangthai<3`;
  db.query(sql, (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  });
});

//
app.post("/nextstatus", (req, res) => {
  const sql = `UPDATE donhangdichvu SET trangthai='${
    req.body.trangthai + 1
  }' WHERE id='${req.body.id}'`;
  db.query(sql, (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  });
});
app.post("/backstatus", (req, res) => {
  const sql = `UPDATE donhangdichvu SET trangthai='${
    req.body.trangthai - 1
  }' WHERE id='${req.body.id}'`;
  db.query(sql, (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  });
});
app.post("/nextstatusdh", (req, res) => {
  const sql = `UPDATE donhang SET trangthai='${
    req.body.trangthai + 1
  }' WHERE id='${req.body.id}'`;
  db.query(sql, (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  });
});
app.post("/backstatusdh", (req, res) => {
  const sql = `UPDATE donhang SET trangthai='${
    req.body.trangthai - 1
  }' WHERE id='${req.body.id}'`;
  db.query(sql, (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  });
});
app.get("/xoadonhang", (req, res) => {
  const receivedData = req.query.id;
  const sql = "DELETE FROM `donhang` WHERE id = ?";
  db.query(sql, [receivedData], (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  });
});
app.get("/detaildonhang", (req, res) => {
  const receivedData = req.query.data;
  const sql =
    "SELECT donhangchitiet.id_dhct,sanpham.hinhanh,donhangchitiet.id_sp,donhangchitiet.thanhtien,donhangchitiet.soluong,donhangchitiet.id_dh,sanpham.ten,sanpham.gia   FROM`donhangchitiet`   INNER JOIN `sanpham` ON donhangchitiet.id_sp = sanpham.id_sp   WHERE donhangchitiet.id_dh = ? ";
  db.query(sql, [receivedData], (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  });
});
app.post("/adddichvu", (req, res) => {
  const sql = "INSERT into `dichvu` (`ten`,`gia`,`mota`) values (?,?,?)";
  const values = [req.body.ten, req.body.gia, req.body.mota];
  db.query(sql, values, (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  });
});
app.post("/addsanpham", (req, res) => {
  const sql =
    "INSERT into `sanpham` (`ten`,`gia`,`hinhanh`,`soluong`,`mota`,`id_dm`) values (?,?,?,?,?,?)";
  const values = [
    req.body.ten,
    req.body.gia,
    req.body.hinhanh,
    req.body.soluong,
    req.body.mota,
    req.body.iddm,
  ];
  db.query(sql, values, (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  });
});
app.get("/chitietsanpham/:id", (req, res) => {
  const sql = "SELECT * FROM sanpham where id_sp=?";
  db.query(sql, req.params.id, (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  });
});
app.post("/editsanpham", (req, res) => {
  const sql =
    "update `sanpham` set `ten`=?,`gia`=?,`hinhanh`=?,`soluong`=?,`mota`=?,`id_dm`=? where id_sp=?";
  const values = [
    req.body.ten,
    req.body.gia,
    req.body.hinhanh,
    req.body.soluong,
    req.body.mota,
    req.body.iddm,
    req.body.idsp,
  ];
  db.query(sql, values, (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  });
});

app.post("/addnguoidung", (req, res) => {
  const sql =
    "INSERT into `nguoidung` (`hoTen`,`anhdaidien`,`sdt`,`email`,`matkhau`,`diachi`,`mota`,`chinhanh`,`vaitro`) values (?,?,?,?,?,?,?,?,?)";
  const values = [
    req.body.hoTen,
    req.body.anhdaidien,
    req.body.sdt,
    req.body.email,
    req.body.matkhau,
    req.body.diachi,
    req.body.mota,
    req.body.chinhanh,
    req.body.vaitro,
  ];
  db.query(sql, values, (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  });
});
app.get("/xoadichvu", (req, res) => {
  const receivedData = req.query.id;
  const sql = "DELETE FROM `dichvu` WHERE id = ?";
  db.query(sql, [receivedData], (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  });
});
app.post("/ansanpham/:id", (req, res) => {
  const receivedData = req.params.id;
  const sql = "UPDATE `sanpham` SET `anhien`='1' WHERE id_sp=?";
  db.query(sql, receivedData, (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  });
});
app.post("/hiensanpham/:id", (req, res) => {
  const receivedData = req.params.id;
  const sql = "UPDATE `sanpham` SET `anhien`='0' WHERE id_sp=?";
  db.query(sql, receivedData, (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  });
});
app.post("/anbinhluan/:id", (req, res) => {
  const receivedData = req.params.id;
  const sql = "UPDATE `binhluan` SET `anHien`='1' WHERE id=?";
  db.query(sql, receivedData, (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  });
});
app.post("/hienbinhluan/:id", (req, res) => {
  const receivedData = req.params.id;
  const sql = "UPDATE `binhluan` SET `anHien`='0' WHERE id=?";
  db.query(sql, receivedData, (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  });
});
app.get("/xoathucung", (req, res) => {
  const receivedData = req.query.id;
  const sql = "DELETE FROM `thucung` WHERE id = ?";
  db.query(sql, [receivedData], (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  });
});

//api user
app.post("/binhluan", (req, res) => {
  const sql =
    "INSERT into `binhluan` (`hoten`,`noidung`,`id_sp`) values (?,?,?)";
  const values = [req.body.hoten, req.body.noidung, req.body.idsp];
  db.query(sql, values, (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  });
});

// app.post('/signup', (req, res) => {
//   const sql = "INSERT into `nguoidung` (`hoTen`,`sdt`,`email`,`matkhau`,`chinhanh`) values (?,?,?,?,1)";
//   const values = [
//     req.body.hoten,
//     req.body.sdt,
//     req.body.email,
//     req.body.password
//   ]
//   db.query(sql, values, (err, data) => {
//     if (err) {
//       return res.json(err)
//     }
//     return res.json(data)
//   })
// })

app.post("/signup", async (req, res) => {
  try {
    const checkEmailQuery = "SELECT * FROM `nguoidung` WHERE `email` = ?";
    const emailExists = await new Promise((resolve, reject) => {
      db.query(checkEmailQuery, [req.body.email], (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data.length > 0);
        }
      });
    });

    if (emailExists) {
      return res.json({ error: "Email đã tồn tại trong hệ thống" });
    }
    const insertUserQuery =
      "INSERT INTO `nguoidung` (`hoTen`, `sdt`, `email`, `matkhau`, `chinhanh`) VALUES (?, ?, ?, ?, 1)";
    const values = [
      req.body.hoten,
      req.body.sdt,
      req.body.email,
      req.body.password,
    ];

    db.query(insertUserQuery, values, (err, data) => {
      if (err) {
        return res.json({ error: "Đăng ký thất bại", details: err });
      }

      return res.json({ success: true, message: "Đăng ký thành công" });
    });
  } catch (error) {
    return res.json({ error: "Đăng ký thất bại", details: error.message });
  }
});

// app.post('/login', (req, res) => {
//   const sql = "SELECT * FROM `nguoidung` WHERE `email` = ? AND `matkhau` = ?";
//   db.query(sql, [req.body.email, req.body.password], (err, data) => {
//     if (err) {
//       return res.json(err)
//     }
//     if (data.length > 0) {
//       return res.json(data)
//     } else {
//       return res.json("fail")
//     }
//   })
// })

app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const sql = "SELECT * FROM `nguoidung` WHERE `email` = ?";
  db.query(sql, [email], async (err, data) => {
    if (err) {
      return res.json(err);
    }

    if (data.length > 0) {
      const user = data[0];
      // const passwordMatch = await bcrypt.compare(password, user.matkhau);
      var passwordMatch = "";
      if (password === user.matkhau) {
        passwordMatch = "true";
      } else {
        passwordMatch = "false";
      }
      if (passwordMatch === "true") {
        if (user.vohieuhoa === 0) {
          return res.json(user);
        } else {
          // Account is disabled
          return res.json({
            error: `Tài khoản đã bị vô hiệu hóa! Vui lòng liên hệ 0901 660 002 để biết thêm thông tin chi tiết`,
          });
        }
      } else {
        // Mật khẩu không trùng khớp
        return res.json({ error: "Sai mật khẩu" });
      }
    } else {
      // Người dùng không tồn tại
      return res.json({ error: "Người dùng không tồn tại" });
    }
  });
});

app.get("/userdetailedit/:id", (req, res) => {
  const id = req.params.id;
  // const sql = "SELECT * FROM `nguoidung` WHERE id_user = ?";
  const sql =
    "SELECT hoTen,anhdaidien,sdt,diachi FROM `nguoidung` WHERE id_user = ?";
  db.query(sql, id, (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  });
});
app.get("/userdetail/:id", (req, res) => {
  const id = req.params.id;
  // const sql = "SELECT * FROM `nguoidung` WHERE id_user = ?";
  const sql = "SELECT * FROM `nguoidung` WHERE id_user = ?";
  db.query(sql, id, (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  });
});
app.post("/updatethongtin", (req, res) => {
  const values = [
    req.body.hoTen,
    req.body.anhdaidien,
    req.body.sdt,
    req.body.diachi,
  ];
  const sql = `UPDATE nguoidung SET hoTen=?,anhdaidien=?,sdt=?,diachi=? WHERE id_user= ${req.body.id_user}`;
  db.query(sql, values, (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  });
});

app.post("/changepassword", async (req, res) => {
  const oldpassword = req.body.oldpassword;
  const newpassword = req.body.newpassword;
  const id_user = req.body.id_user;

  const sql1 = "SELECT * FROM NGUOIDUNG WHERE id_user = ?";
  db.query(sql1, [id_user], async (err, data) => {
    if (err) {
      return res.json(err);
    }

    if (data.length === 0) {
      return res.json({ error: "User not found" });
    }

    const user = data[0];

    // const passwordMatch = await bcrypt.compare(user.matkhau, oldpassword);
    // // const passwordMatch = bcrypt.compareSync("123456", "123456");
    // console.log(passwordMatch)
    var passwordMatch = "";
    if (user.matkhau === oldpassword) {
      passwordMatch = "true";
    } else {
      passwordMatch = "false";
    }
    if (passwordMatch === "false") {
      return res.json({ error: "Mật khẩu hiện tại không đúng" });
    }
    // if (passwordMatch) {
    //   return res.json({ error: 'Mật khẩu hiện tại không đúng' });
    // }

    // const hashedNewPassword = await bcrypt.hash(newpassword, 10);

    const sql2 = "UPDATE nguoidung SET matkhau = ? WHERE id_user = ?";
    db.query(sql2, [newpassword, id_user], (err, data) => {
      if (err) {
        return res.json(err);
      }
      return res.json(data);
    });
  });
});

app.get("/donhanguser/:id", (req, res) => {
  const id = req.params.id;
  const sql = "SELECT * FROM `donhangdichvu` WHERE id_user = ?";
  db.query(sql, [id], (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  });
});

app.get("/detaildatlichuser", (req, res) => {
  const receivedData = req.query.data;
  const receivedIdUser = req.query.iduser;
  const sql = "SELECT * FROM `donhangdichvu` WHERE id=? and id_user =?";
  db.query(sql, [receivedData, receivedIdUser], (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  });
});
app.get("/detaildatlich", (req, res) => {
  const receivedData = req.query.data;
  const sql = "SELECT * FROM `donhangdichvu` WHERE id=?";
  db.query(sql, [receivedData], (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  });
});
app.get("/detaildonhanguser", (req, res) => {
  const receivedData = req.query.data;
  const sql =
    "SELECT donhangchitiet.id_dhct,donhangchitiet.id_sp,donhangchitiet.thanhtien,donhangchitiet.soluong,donhangchitiet.id_dh,sanpham.ten,sanpham.gia   FROM`donhangchitiet`   INNER JOIN `sanpham` ON donhangchitiet.id_sp = sanpham.id_sp   WHERE donhangchitiet.id_dh = ?";
  db.query(sql, [receivedData], (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  });
});

app.post("/bookingservice", (req, res) => {
  const sql =
    "INSERT INTO `donhangdichvu` (`hoten`, `sodienthoai`, `email`, `ngay` ,`thoigian`, `tenthucung`, `loai`, `thuocgiong`, `sotuoi`, `trongluong`, `ghichu`,`tongtien`, `id_dichvu`, `id_user`,`id_chinhanh`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
  var giatien = 0;
  if (req.body.dichvu == 1) {
    giatien = 500000;
  } else if (req.body.dichvu == 2) {
    giatien = 300000;
  } else if (req.body.dichvu == 3) {
    giatien = 120000;
  } else if (req.body.dichvu == 5) {
    giatien = 800000;
  } else if (req.body.dichvu == 6) {
    giatien = 962000;
  } else {
    giatien = 100000;
  }
  const values = [
    req.body.hoten,
    req.body.sdt,
    req.body.email,
    req.body.ngay,
    req.body.thoigian,
    req.body.tenthucung,
    req.body.loai,
    req.body.thuocgiong,
    req.body.tuoi,
    req.body.trongluong,
    req.body.ghichu,
    giatien,
    req.body.dichvu,
    req.body.iduser,
    req.body.chinhanh,
  ];
  db.query(sql, values, (err, data) => {
    if (err) {
      return res.json(err);
    }

    const mailOptions = {
      from: "Dghousepetshop115@gmail.com",
      to: email,
      subject: "DGHOUSE PET SHOP KHÔI PHỤC MẬT KHẨU",
      html: `< !DOCTYPE html >
      <html lang="en" >
        <head>
          <meta charset="UTF-8">
            <title>CodePen - OTP Email Template</title>
  
  
        </head>
        <body>
          <!-- partial:index.partial.html -->
          <div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">
            <div style="margin:50px auto;width:70%;padding:20px 0">
              <div style="border-bottom:1px solid #eee">
                <a href="" style="font-size:1.4em;color: #00466a;text-decoration:none;font-weight:600">DG House</a>
              </div>
              <p style="font-size:1.1em">Xin chào,</p>
              <p>Cảm ơn bạn vì đã chọn DG House. Dùng mã OTP dưới đây để khôi phục lại mật khẩu của bạn. OTP sẽ tồn tại trong 5 phút</p>
              <h2 style="background: #00466a;margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;">${otp}</h2>
              <p style="font-size:0.9em;">Trân trọng,<br />DG House</p>
              <hr style="border:none;border-top:1px solid #eee" />
              <div style="float:right;padding:8px 0;color:#aaa;font-size:0.8em;line-height:1;font-weight:300">
                <p>DG House Inc</p>
                <p>1600 Amphitheatre Parkway</p>
                <p>California</p>
              </div>
            </div>
          </div>
          <!-- partial -->
  
        </body>
      </html>`,
    };
    try {
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error("Lỗi gửi OTP qua email:", error);
          return res.status(500).json({ error: "Lỗi gửi OTP qua email" });
        }

        console.log("Email gửi thành công:", info);
        res.status(200).json({ message: "OTP đã được gửi thành công" });
      });
    } catch (error) {
      console.error("Lỗi không mong muốn:", error);
      res.status(500).json({ error: "Lỗi không mong muốn" });
    }
  });
});

// app.post('/bookingservice', (req, res) => {
//   const sql = "INSERT INTO `donhangdichvu` (`hoten`, `sodienthoai`, `email`, `ngay` ,`thoigian`, `tenthucung`, `loai`, `thuocgiong`, `sotuoi`, `trongluong`, `ghichu`,`trangthai`,`tongtien`,`nhanvien`, `id_dichvu`, `id_user`,`id_chinhanh`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
//   const randomUserId = Math.floor(Math.random() * (37 - 22 + 1)) + 22;
//   const randomTrangThai = Math.floor(Math.random() * 4);
//   let randomNhanVien = 0;
//   if (req.body.chinhanh == 2) {
//     randomNhanVien = Math.floor(Math.random() * (12 - 10 + 1)) + 10;
//   } else if (req.body.chinhanh == 3) {
//     randomNhanVien = Math.floor(Math.random() * (14 - 13 + 1)) + 13;
//   }
//   var giatien = 0;
//   if (req.body.dichvu == 1) {
//     giatien = 500000
//   }
//   else if (req.body.dichvu == 2) {
//     giatien = 300000
//   }
//   else if (req.body.dichvu == 3) {
//     giatien = 120000
//   }
//   else if (req.body.dichvu == 5) {
//     giatien = 800000
//   }
//   else if (req.body.dichvu == 6) {
//     giatien = 962000
//   }
//   else {
//     giatien = 100000
//   }
//   const values = [
//     req.body.hoten,
//     req.body.sdt,
//     req.body.email,
//     req.body.ngay,
//     req.body.thoigian,
//     req.body.tenthucung,
//     req.body.loai,
//     req.body.thuocgiong,
//     req.body.tuoi,
//     req.body.trongluong,
//     req.body.ghichu,
//     randomTrangThai,
//     giatien,
//     randomNhanVien,
//     req.body.dichvu,
//     randomUserId,
//     req.body.chinhanh
//   ]
//   db.query(sql, values, (err, data) => {
//     if (err) {
//       return res.json(err)
//     }
//     return res.json(data)
//   })
// })
app.get("/huydichvu", (req, res) => {
  const receivedData = req.query.id;
  const sql = "DELETE FROM `donhangdichvu` WHERE id = ?";
  db.query(sql, [receivedData], (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  });
});

app.get("/huydonhang", (req, res) => {
  const receivedData = req.query.id;
  const sql = "DELETE FROM `donhang` WHERE id = ?";
  db.query(sql, [receivedData], (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  });
});

app.get("/xemdathang", (req, res) => {
  const receivedData = req.query.id;
  const sql = "select * FROM `donhang` WHERE id_user = ?";
  db.query(sql, [receivedData], (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  });
});

app.get("/xemdatlich", (req, res) => {
  const receivedData = req.query.id;
  const sql = "select * FROM `donhangdichvu` WHERE id_user = ?";
  db.query(sql, [receivedData], (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  });
});

// đặt hàng
app.post("/dathang", (req, res) => {
  const { hoten, sodienthoai, diachi, ghichu, id_user, cart } = req.body;
  const tongtien = cart.reduce(
    (total, item) => total + item.gia * item.amount,
    0
  );
  const donhangSql = `INSERT INTO donhang(ten_nguoi_nhan, sdt_nguoi_nhan, diachi, tongtien, id_user, ghichu) VALUES(?, ?, ?, ?, ?, ?)`;
  db.query(
    donhangSql,
    [hoten, sodienthoai, diachi, tongtien, id_user, ghichu],
    (err, result) => {
      if (err) {
        console.log("don hang");
        return res.json(err);
      } else {
        const madh = result.insertId;
        const donhangchitietSql = `INSERT INTO donhangchitiet(id_dh, id_sp, soluong, thanhtien) VALUES ? `;
        const thongtincanthiet = cart.map((item) => [
          madh,
          item.id_sp,
          item.amount,
          item.gia * item.amount,
        ]);
        db.query(donhangchitietSql, [thongtincanthiet], (err, result) => {
          if (err) {
            return res.json(err);
            // console.error('Error inserting order details:', err);
            // res.status(500).json({ message: 'Internal Server Error' });
          } else {
            cart.forEach((item) => {
              const updateSanPhamSql = `UPDATE sanpham SET soluong = soluong - ? WHERE id_sp = ? `;
              db.query(
                updateSanPhamSql,
                [item.amount, item.id_sp],
                (err, updateResult) => {
                  if (err) {
                    console.error("Error updating product quantity:", err);
                  }
                }
              );
            });
            res.status(200).json({ message: "Order added successfully" });
          }
        });
      }
    }
  );
});

// //payment
// router.post('/create_payment_url', function (req, res, next) {
//   var ipAddr = req.headers['x-forwarded-for'] ||
//     req.connection.remoteAddress ||
//     req.socket.remoteAddress ||
//     req.connection.socket.remoteAddress;

//   var config = require('config');
//   var dateFormat = require('dateformat');

//   var tmnCode = config.get('RIRKXC7Z');
//   var secretKey = config.get('vnp_HashSecret');
//   var vnpUrl = config.get('https://sandbox.vnpayment.vn/paymentv2/vpcpay.html');
//   var returnUrl = config.get('vnp_ReturnUrl');

//   var date = new Date();

//   var createDate = dateFormat(date, 'yyyymmddHHmmss');
//   var orderId = dateFormat(date, 'HHmmss');
//   var amount = req.body.amount;
//   var bankCode = req.body.bankCode;

//   var orderInfo = req.body.orderDescription;
//   var orderType = req.body.orderType;
//   var locale = req.body.language;
//   if (locale === null || locale === '') {
//     locale = 'vn';
//   }
//   var currCode = 'VND';
//   var vnp_Params = {};
//   vnp_Params['vnp_Version'] = '2.1.0';
//   vnp_Params['vnp_Command'] = 'pay';
//   vnp_Params['vnp_TmnCode'] = tmnCode;
//   // vnp_Params['vnp_Merchant'] = ''
//   vnp_Params['vnp_Locale'] = locale;
//   vnp_Params['vnp_CurrCode'] = currCode;
//   vnp_Params['vnp_TxnRef'] = orderId;
//   vnp_Params['vnp_OrderInfo'] = orderInfo;
//   vnp_Params['vnp_OrderType'] = orderType;
//   vnp_Params['vnp_Amount'] = amount * 100;
//   vnp_Params['vnp_ReturnUrl'] = returnUrl;
//   vnp_Params['vnp_IpAddr'] = ipAddr;
//   vnp_Params['vnp_CreateDate'] = createDate;
//   if (bankCode !== null && bankCode !== '') {
//     vnp_Params['vnp_BankCode'] = bankCode;
//   }

//   vnp_Params = sortObject(vnp_Params);

//   var querystring = require('qs');
//   var signData = querystring.stringify(vnp_Params, { encode: false });
//   var crypto = require("crypto");
//   var hmac = crypto.createHmac("sha512", secretKey);
//   var signed = hmac.update(new Buffer(signData, 'utf-8')).digest("hex");
//   vnp_Params['vnp_SecureHash'] = signed;
//   vnpUrl += '?' + querystring.stringify(vnp_Params, { encode: false });

//   res.redirect(vnpUrl)
// });

// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'dghousepetshop115@gmail.com',
//     pass: 'vuem nuln cmxh bzqv',
//   },
// });

const otpStorage = {};

app.post("/forgot_password", (req, res) => {
  const { email } = req.body;

  // Validate email (you may want to add more robust validation)
  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  // Generate and store OTP
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  otpStorage[email] = otp;

  // Send OTP via email
  const mailOptions = {
    from: "Dghousepetshop115@gmail.com",
    to: email,
    subject: "DGHOUSE PET SHOP KHÔI PHỤC MẬT KHẨU",
    html: `< !DOCTYPE html >
    <html lang="en" >
      <head>
        <meta charset="UTF-8">
          <title>CodePen - OTP Email Template</title>


      </head>
      <body>
        <!-- partial:index.partial.html -->
        <div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">
          <div style="margin:50px auto;width:70%;padding:20px 0">
            <div style="border-bottom:1px solid #eee">
              <a href="" style="font-size:1.4em;color: #00466a;text-decoration:none;font-weight:600">DG House</a>
            </div>
            <p style="font-size:1.1em">Xin chào,</p>
            <p>Cảm ơn bạn vì đã chọn DG House. Dùng mã OTP dưới đây để khôi phục lại mật khẩu của bạn. OTP sẽ tồn tại trong 5 phút</p>
            <h2 style="background: #00466a;margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;">${otp}</h2>
            <p style="font-size:0.9em;">Trân trọng,<br />DG House</p>
            <hr style="border:none;border-top:1px solid #eee" />
            <div style="float:right;padding:8px 0;color:#aaa;font-size:0.8em;line-height:1;font-weight:300">
              <p>DG House Inc</p>
              <p>1600 Amphitheatre Parkway</p>
              <p>California</p>
            </div>
          </div>
        </div>
        <!-- partial -->

      </body>
    </html>`,
  };

  try {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Lỗi gửi OTP qua email:", error);
        return res.status(500).json({ error: "Lỗi gửi OTP qua email" });
      }

      console.log("Email gửi thành công:", info);
      res.status(200).json({ message: "OTP đã được gửi thành công" });
    });
  } catch (error) {
    console.error("Lỗi không mong muốn:", error);
    res.status(500).json({ error: "Lỗi không mong muốn" });
  }
});

app.post("/verify-otp", (req, res) => {
  const { emailFromLocal, otp } = req.body;

  console.log(emailFromLocal, otp);

  // Validate email and OTP
  if (!emailFromLocal || !otp) {
    return res.status(400).json({ error: "Email and OTP are required" });
  }

  // Verify OTP
  if (otpStorage[emailFromLocal] === otp) {
    // Clear OTP after successful verification
    delete otpStorage[emailFromLocal];
    res.status(200).json({ message: "OTP verified successfully" });
  } else {
    res.status(401).json({ error: "Invalid OTP" });
  }
});

app.post("/doimatkhau", (req, res) => {
  const sql = `UPDATE nguoidung SET matkhau = '${req.body.password}' WHERE email = '${req.body.emailFromLocal}'`;
  db.query(sql, (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  });
});
// Khởi động máy chủ
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
