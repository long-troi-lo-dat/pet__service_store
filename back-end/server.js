const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const route = require("./src/routes/index")
const db = require("./src/db/dbConfig");
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
  const sql = 'SELECT * FROM thucung';
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
  const sql = 'SELECT * FROM donhangdichvu';
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
app.get('/ChiNhanh/DatLich', (req, res) => {
  const chinhanh = req.query.chinhanh
  const sql = 'SELECT * FROM donhangdichvu where id_chinhanh=?';
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

app.get('/detaildonhanguser', (req, res) => {
  const receivedData = req.query.data;
  const sql = "SELECT * FROM `donhangdichvu` WHERE id = ?"; // Include the placeholder
  db.query(sql, [receivedData], (err, data) => { // Pass the value in an array
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
  const sql = "DELETE FROM `donhangdichvu` WHERE id = ?"; // Include the placeholder
  db.query(sql, [receivedData], (err, data) => { // Pass the value in an array
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
