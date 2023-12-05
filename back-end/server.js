const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const route = require("./src/routes/index")
const db = require("./src/db/dbConfig");
const bodyParser = require('body-parser');
const nodemailer = require("nodemailer");
const readline = require('readline');
let router = express.Router();
// let $ = require('jquery');
// const request = require('request');
// const moment = require('moment');
dotenv.config();

const port = process.env.PORT || 8000;

const app = express();

app.use(cors());
app.use(express.json());


app.use("/api", route)

app.get('/', (re, res) => {
  return res.json("abc");
})

//api crud
//api shop
app.get('/shop', (req, res) => {
  const sql = 'SELECT * FROM sanpham ORDER by ngaythem DESC';
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
app.get('/shop100', (req, res) => {
  const sql = 'SELECT * FROM sanpham where gia<100000 ORDER by ngaythem DESC';
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
app.get('/shopduoi500', (req, res) => {
  const sql = 'SELECT * FROM sanpham where gia<500000 ORDER by ngaythem DESC';
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
app.get('/shoptren500', (req, res) => {
  const sql = 'SELECT * FROM sanpham where gia>100000 ORDER by ngaythem DESC';
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
app.get('/petshop', (req, res) => {
  const sql = 'SELECT * FROM thucung';
  db.query(sql, (err, data) => {
    if (err) return res.json('Error');
    return res.json(data);
  });
});
app.get('/detail/:id', (req, res) => {
  const sql = 'SELECT * FROM sanpham WHERE id_sp = ?';
  const id = req.params.id;
  db.query(sql, [id], (err, data) => {
    if (err) return res.json('Error');
    return res.json(data);
  });
});
app.get('/detailpet/:id', (req, res) => {
  const sql = 'SELECT * FROM thucung WHERE id = ?';
  const id = req.params.id;
  db.query(sql, [id], (err, data) => {
    if (err) return res.json('Error');
    return res.json(data);
  });
});
app.get('/binhluan/:id', (req, res) => {
  const sql = 'SELECT * FROM binhluan where anHien=0 and id_sp= ?';
  const id = req.params.id;
  db.query(sql, [id], (err, data) => {
    if (err) return res.json('Error');
    return res.json(data);
  });
});
app.get('/AdminBinhLuan', (req, res) => {
  const sql = 'SELECT * FROM binhluan';
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
app.get('/AdminSanPham', (req, res) => {
  const sql = 'SELECT * FROM sanpham';
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
app.get('/AdminDichVu', (req, res) => {
  const sql = 'SELECT * FROM dichvu';
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
app.get('/AdminThuCung', (req, res) => {
  const sql = 'select thucung.*, giongloai.ten as tengiongloai from thucung INNER JOIN giongloai on thucung.id_gl = giongloai.id_gl order by thucung.id';
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
app.get('/AdminNguoiDung', (req, res) => {
  const sql = 'SELECT * FROM nguoidung';
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
app.get('/AdminDonHang', (req, res) => {
  const sql = 'SELECT * FROM donhang';
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
app.get('/AdminDatLich', (req, res) => {
  const sql = 'SELECT * FROM donhangdichvu order by ngay and thoigian DESC';
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
app.get('/ChiNhanh/DatLich', (req, res) => {
  const chinhanh = req.query.chinhanh
  const sql = 'SELECT * FROM donhangdichvu where id_chinhanh=? and not trangthai=3';
  db.query(sql, [chinhanh], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
app.get('/nhanvienchinhanh2', (req, res) => {
  const sql = 'SELECT * FROM nguoidung where id_chinhanh=2';
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
app.get('/nhanvienchinhanh3', (req, res) => {
  const sql = 'SELECT * FROM nguoidung where id_chinhanh=3';
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
app.get('/dondahoanthanhchinhanh', (req, res) => {
  const chinhanh = req.query.chinhanh
  const sql = 'SELECT * FROM donhangdichvu where id_chinhanh=? and trangthai=3';
  db.query(sql, [chinhanh], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
app.get('/NhanVien/DichVu', (req, res) => {
  const chinhanh = req.query.chinhanh
  const sql = 'SELECT * FROM nguoidung where chinhanh=?';
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
app.get('/NhanVien/DatLich', (req, res) => {
  const chinhanh = req.query.chinhanh
  const nhanvien = req.query.nhanvien
  const sql = 'SELECT * FROM donhangdichvu where id_chinhanh=? and nhanvien=?';
  db.query(sql, [chinhanh, nhanvien], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
app.get('/DichVu2/DonHang/:id', (req, res) => {
  const sql = 'SELECT * FROM donhangdichvu where chinhanh=2 and nhanvien=?';
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
app.post('/selectnhanvien', (req, res) => {
  const sql = `UPDATE donhangdichvu SET nhanvien='${req.body.nhanvien}' WHERE id='${req.body.id}'`;
  db.query(sql, (err, data) => {
    if (err) {
      return res.json(err)
    }
    return res.json(data)
  }
  )
})
app.get('/thongkechinhanh1', (req, res) => {
  const sql = `select * From donhangdichvu where id_chinhanh=2 and trangthai=3`;
  db.query(sql, (err, data) => {
    if (err) {
      return res.json(err)
    }
    return res.json(data)
  }
  )
})
app.get('/thongkechinhanh2', (req, res) => {
  const sql = `select * From donhangdichvu where id_chinhanh=3`;
  db.query(sql, (err, data) => {
    if (err) {
      return res.json(err)
    }
    return res.json(data)
  }
  )
})
app.get('/tongdonhoanthanhchinhanh1', (req, res) => {
  const sql = `SELECT COUNT(*) FROM donhang where id_chinhanh=2 and trangthai=3`;
  db.query(sql, (err, data) => {
    if (err) {
      return res.json(err)
    }
    return res.json(data)
  }
  )
})
app.get('/tongdonchuahoanthanhchinhanh1', (req, res) => {
  const sql = `SELECT COUNT(*) FROM donhang where id_chinhanh=2 and trangthai<3`;
  db.query(sql, (err, data) => {
    if (err) {
      return res.json(err)
    }
    return res.json(data)
  }
  )
})
app.get('/tongdonhoanthanhchinhanh2', (req, res) => {
  const sql = `select * From donhangdichvu where id_chinhanh=3`;
  db.query(sql, (err, data) => {
    if (err) {
      return res.json(err)
    }
    return res.json(data)
  }
  )
})
app.get('/tongdonchuahoanthanhchinhanh2', (req, res) => {
  const sql = `select * From donhangdichvu where id_chinhanh=3 and trangthai<3`;
  db.query(sql, (err, data) => {
    if (err) {
      return res.json(err)
    }
    return res.json(data)
  }
  )
})
app.post('/nextstatus', (req, res) => {
  const sql = `UPDATE donhangdichvu SET trangthai='${req.body.trangthai + 1}' WHERE id='${req.body.id}'`;
  db.query(sql, (err, data) => {
    if (err) {
      return res.json(err)
    }
    return res.json(data)
  }
  )
})
app.post('/backstatus', (req, res) => {
  const sql = `UPDATE donhangdichvu SET trangthai='${req.body.trangthai - 1}' WHERE id='${req.body.id}'`;
  db.query(sql, (err, data) => {
    if (err) {
      return res.json(err)
    }
    return res.json(data)
  }
  )
})
app.post('/nextstatusdh', (req, res) => {
  const sql = `UPDATE donhang SET trangthai='${req.body.trangthai + 1}' WHERE id='${req.body.id}'`;
  db.query(sql, (err, data) => {
    if (err) {
      return res.json(err)
    }
    return res.json(data)
  }
  )
})
app.post('/backstatusdh', (req, res) => {
  const sql = `UPDATE donhang SET trangthai='${req.body.trangthai - 1}' WHERE id='${req.body.id}'`;
  db.query(sql, (err, data) => {
    if (err) {
      return res.json(err)
    }
    return res.json(data)
  }
  )
})
app.get('/xoadonhang', (req, res) => {
  const receivedData = req.query.id;
  const sql = "DELETE FROM `donhang` WHERE id = ?";
  db.query(sql, [receivedData], (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  });
});
app.get('/detaildonhang', (req, res) => {
  const receivedData = req.query.data;
  const sql = "SELECT donhangchitiet.id_dhct,donhangchitiet.id_sp,donhangchitiet.thanhtien,donhangchitiet.soluong,donhangchitiet.id_dh,sanpham.ten,sanpham.gia   FROM`donhangchitiet`   INNER JOIN `sanpham` ON donhangchitiet.id_sp = sanpham.id_sp   WHERE donhangchitiet.id_dh = ? ";
  db.query(sql, [receivedData], (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  });
});
app.post('/adddichvu', (req, res) => {
  const sql = "INSERT into `dichvu` (`ten`,`gia`,`mota`,`id_dm`) values (?,?,?,3)";
  const values = [
    req.body.ten,
    req.body.gia,
    req.body.mota
  ]
  db.query(sql, values, (err, data) => {
    if (err) {
      return res.json(err)
    }
    return res.json(data)
  })
})
app.post('/addsanpham', (req, res) => {
  const sql = "INSERT into `sanpham` (`ten`,`gia`,`hinhanh`,`soluong`,`mota`,`id_dm`) values (?,?,?,?,?,2)";
  const values = [
    req.body.ten,
    req.body.gia,
    req.body.hinhanh,
    req.body.soluong,
    req.body.mota
  ]
  db.query(sql, values, (err, data) => {
    if (err) {
      return res.json(err)
    }
    return res.json(data)
  })
})
app.post('/addthucung', (req, res) => {
  const sql = "INSERT into `thucung` (`ten`,`gioitinh`,`id_gl`,`gia`,`dob`,`hinhanh`,`tiemphong`,`mota`,`id_dm`) values (?,?,?,?,?,?,?,?,1)";
  const values = [
    req.body.ten,
    req.body.gioitinh,
    req.body.id_gl,
    req.body.gia,
    req.body.dob,
    req.body.hinhanh,
    req.body.tiemphong,
    req.body.mota,
  ]
  db.query(sql, values, (err, data) => {
    if (err) {
      return res.json(err)
    }
    return res.json(data)
  })
})
app.get('/xoadichvu', (req, res) => {
  const receivedData = req.query.id;
  const sql = "DELETE FROM `dichvu` WHERE id = ?";
  db.query(sql, [receivedData], (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  });
});
app.get('/xoasanpham', (req, res) => {
  const receivedData = req.query.id;
  const sql = "DELETE FROM `sanpham` WHERE id = ?";
  db.query(sql, [receivedData], (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  });
});
app.get('/xoathucung', (req, res) => {
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
app.post('/binhluan', (req, res) => {
  const sql = "INSERT into `binhluan` (`hoten`,`noidung`,`id_sp`) values (?,?,?)";
  const values = [
    req.body.hoten,
    req.body.noidung,
    req.body.idsp,
  ]
  db.query(sql, values, (err, data) => {
    if (err) {
      return res.json(err)
    }
    return res.json(data)
  })
})

app.post('/signup', (req, res) => {
  const sql = "INSERT into `nguoidung` (`hoTen`,`sdt`,`email`,`matkhau`,`chinhanh`) values (?,?,?,?,1)";
  const values = [
    req.body.hoten,
    req.body.sdt,
    req.body.email,
    req.body.password
  ]
  db.query(sql, values, (err, data) => {
    if (err) {
      return res.json(err)
    }
    return res.json(data)
  })
})

app.post('/login', (req, res) => {
  const sql = "SELECT * FROM `nguoidung` WHERE `email` = ? AND `matkhau` = ?";
  db.query(sql, [req.body.email, req.body.password], (err, data) => {
    if (err) {
      return res.json(err)
    }
    if (data.length > 0) {
      return res.json(data)
    } else {
      return res.json("fail")
    }
  })
})

app.get('/userdetail/:id', (req, res) => {
  const id = req.params.id;
  const sql = "SELECT *FROM `nguoidung` WHERE id_user = ?";
  db.query(sql, [id], (err, data) => {
    if (err) {
      return res.json(err)
    }
    return res.json(data)
  })
})
app.post('/updatethongtin', (req, res) => {
  const values = [
    req.body.hoTen,
    req.body.anhdaidien,
    req.body.sdt,
    req.body.diachi,
    req.body.id_user
  ]
  const sql = `UPDATE nguoidung SET hoTen=?,anhdaidien=?,sdt=?,diachi=? WHERE id_user=?`;
  db.query(sql, values, (err, data) => {
    if (err) {
      return res.json(err)
    }
    return res.json(data)
  }
  )
})


app.get('/donhanguser/:id', (req, res) => {
  const id = req.params.id;
  const sql = "SELECT * FROM `donhangdichvu` WHERE id_user = ?";
  db.query(sql, [id], (err, data) => {
    if (err) {
      return res.json(err)
    }
    return res.json(data)
  })
})

app.get('/detaildatlichuser', (req, res) => {
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
app.get('/detaildatlich', (req, res) => {
  const receivedData = req.query.data;
  const sql = "SELECT * FROM `donhangdichvu` WHERE id=?";
  db.query(sql, [receivedData], (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  });
});
app.get('/detaildonhanguser', (req, res) => {
  const receivedData = req.query.data;
  const sql = "SELECT donhangchitiet.id_dhct,donhangchitiet.id_sp,donhangchitiet.thanhtien,donhangchitiet.soluong,donhangchitiet.id_dh,sanpham.ten,sanpham.gia   FROM`donhangchitiet`   INNER JOIN `sanpham` ON donhangchitiet.id_sp = sanpham.id_sp   WHERE donhangchitiet.id_dh = ?";
  db.query(sql, [receivedData], (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  });
});

app.post('/bookingservice', (req, res) => {
  const sql = "INSERT INTO `donhangdichvu` (`hoten`, `sodienthoai`, `email`, `ngay` ,`thoigian`, `tenthucung`, `loai`, `thuocgiong`, `sotuoi`, `trongluong`, `ghichu`,`tongtien`, `id_dichvu`, `id_user`,`id_chinhanh`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
  var giatien = 0;
  if (req.body.dichvu == 1) {
    giatien = 500000
  }
  else if (req.body.dichvu == 2) {
    giatien = 300000
  }
  else if (req.body.dichvu == 3) {
    giatien = 120000
  }
  else {
    giatien = 100000
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
    req.body.chinhanh
  ]
  db.query(sql, values, (err, data) => {
    if (err) {
      return res.json(err)
    }
    return res.json(data)
  })
})

app.get('/huydichvu', (req, res) => {
  const receivedData = req.query.id;
  const sql = "DELETE FROM `donhangdichvu` WHERE id = ?";
  db.query(sql, [receivedData], (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  });
});

app.get('/huydonhang', (req, res) => {
  const receivedData = req.query.id;
  const sql = "DELETE FROM `donhang` WHERE id = ?";
  db.query(sql, [receivedData], (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  });
});

app.get('/xemdathang', (req, res) => {
  const receivedData = req.query.id;
  const sql = "select * FROM `donhang` WHERE id_user = ?";
  db.query(sql, [receivedData], (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  });
});

app.get('/xemdatlich', (req, res) => {
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
app.post('/dathang', (req, res) => {
  const { hoten, sodienthoai, diachi, ghichu, id_user, cart } = req.body;
  const tongtien = cart.reduce((total, item) => total + item.gia * item.amount, 0)
  const donhangSql = `INSERT INTO donhang (ten_nguoi_nhan, sdt_nguoi_nhan, diachi,tongtien, id_user,ghichu) VALUES (?, ?, ?, ?, ?, ?)`;
  db.query(donhangSql, [hoten, sodienthoai, diachi, tongtien, id_user, ghichu], (err, result) => {
    if (err) {
      console.log("don hang")
      return res.json(err);
    } else {
      const madh = result.insertId;
      const donhangchitietSql = `INSERT INTO donhangchitiet (id_dh, id_sp, soluong, thanhtien) VALUES ?`;
      const thongtincanthiet = cart.map(item => [madh, item.id_sp, item.amount, item.gia * item.amount]);
      db.query(donhangchitietSql, [thongtincanthiet], (err, result) => {
        if (err) {
          return res.json(err);
          // console.error('Error inserting order details:', err);
          // res.status(500).json({ message: 'Internal Server Error' });
        } else {
          res.status(200).json({ message: 'Order added successfully' });
        }
      });
    }
  })
})

//payment
router.post('/create_payment_url', function (req, res, next) {
  var ipAddr = req.headers['x-forwarded-for'] ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    req.connection.socket.remoteAddress;

  var config = require('config');
  var dateFormat = require('dateformat');


  var tmnCode = config.get('RIRKXC7Z');
  var secretKey = config.get('vnp_HashSecret');
  var vnpUrl = config.get('https://sandbox.vnpayment.vn/paymentv2/vpcpay.html');
  var returnUrl = config.get('vnp_ReturnUrl');

  var date = new Date();

  var createDate = dateFormat(date, 'yyyymmddHHmmss');
  var orderId = dateFormat(date, 'HHmmss');
  var amount = req.body.amount;
  var bankCode = req.body.bankCode;

  var orderInfo = req.body.orderDescription;
  var orderType = req.body.orderType;
  var locale = req.body.language;
  if (locale === null || locale === '') {
    locale = 'vn';
  }
  var currCode = 'VND';
  var vnp_Params = {};
  vnp_Params['vnp_Version'] = '2.1.0';
  vnp_Params['vnp_Command'] = 'pay';
  vnp_Params['vnp_TmnCode'] = tmnCode;
  // vnp_Params['vnp_Merchant'] = ''
  vnp_Params['vnp_Locale'] = locale;
  vnp_Params['vnp_CurrCode'] = currCode;
  vnp_Params['vnp_TxnRef'] = orderId;
  vnp_Params['vnp_OrderInfo'] = orderInfo;
  vnp_Params['vnp_OrderType'] = orderType;
  vnp_Params['vnp_Amount'] = amount * 100;
  vnp_Params['vnp_ReturnUrl'] = returnUrl;
  vnp_Params['vnp_IpAddr'] = ipAddr;
  vnp_Params['vnp_CreateDate'] = createDate;
  if (bankCode !== null && bankCode !== '') {
    vnp_Params['vnp_BankCode'] = bankCode;
  }

  vnp_Params = sortObject(vnp_Params);

  var querystring = require('qs');
  var signData = querystring.stringify(vnp_Params, { encode: false });
  var crypto = require("crypto");
  var hmac = crypto.createHmac("sha512", secretKey);
  var signed = hmac.update(new Buffer(signData, 'utf-8')).digest("hex");
  vnp_Params['vnp_SecureHash'] = signed;
  vnpUrl += '?' + querystring.stringify(vnp_Params, { encode: false });

  res.redirect(vnpUrl)
});

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'dghousepetshop115@gmail.com',
    pass: 'vuem nuln cmxh bzqv',
  },
});

const otpStorage = {};

app.post('/forgot_password', (req, res) => {
  const { email } = req.body;

  // Validate email (you may want to add more robust validation)
  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  // Generate and store OTP
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  otpStorage[email] = otp;

  // Send OTP via email
  const mailOptions = {
    from: 'dghousepetshop115@gmail.com',
    to: email,
    subject: "DGHOUSE PET SHOP KHÔI PHỤC MẬT KHẨU",
    html: `<!DOCTYPE html>
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
      <a href="" style="font-size:1.4em;color: #00466a;text-decoration:none;font-weight:600">Koding 101</a>
    </div>
    <p style="font-size:1.1em">Hi,</p>
    <p>Thank you for choosing Koding 101. Use the following OTP to complete your Password Recovery Procedure. OTP is valid for 5 minutes</p>
    <h2 style="background: #00466a;margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;">${otp}</h2>
    <p style="font-size:0.9em;">Regards,<br />Koding 101</p>
    <hr style="border:none;border-top:1px solid #eee" />
    <div style="float:right;padding:8px 0;color:#aaa;font-size:0.8em;line-height:1;font-weight:300">
      <p>Koding 101 Inc</p>
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
        console.error('Lỗi gửi OTP qua email:', error);
        return res.status(500).json({ error: 'Lỗi gửi OTP qua email' });
      }

      console.log('Email gửi thành công:', info);
      res.status(200).json({ message: 'OTP đã được gửi thành công' });
    });
  } catch (error) {
    console.error('Lỗi không mong muốn:', error);
    res.status(500).json({ error: 'Lỗi không mong muốn' });
  }
});

app.post('/verify-otp', (req, res) => {
  const { emailFromLocal, otp } = req.body;

  console.log(emailFromLocal, otp);

  // Validate email and OTP
  if (!emailFromLocal || !otp) {
    return res.status(400).json({ error: 'Email and OTP are required' });
  }

  // Verify OTP
  if (otpStorage[emailFromLocal] === otp) {
    // Clear OTP after successful verification
    delete otpStorage[emailFromLocal];
    res.status(200).json({ message: 'OTP verified successfully' });
  } else {
    res.status(401).json({ error: 'Invalid OTP' });
  }
});

app.post('/doimatkhau', (req, res) => {
  const sql = `UPDATE nguoidung SET matkhau='${req.body.password}' WHERE email='${req.body.emailFromLocal}'`;
  db.query(sql, (err, data) => {
    if (err) {
      return res.json(err)
    }
    return res.json(data)
  }
  )
})
// Khởi động máy chủ
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
