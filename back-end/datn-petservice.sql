-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th10 05, 2023 lúc 07:36 PM
-- Phiên bản máy phục vụ: 10.4.27-MariaDB
-- Phiên bản PHP: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `datn-petservice`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `binhluan`
--

CREATE TABLE `binhluan` (
  `id` int(4) NOT NULL,
  `noidung` varchar(50) NOT NULL,
  `ngaybinhluan` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `anHien` tinyint(1) NOT NULL DEFAULT 0,
  `id_sp` int(4) NOT NULL,
  `id_user` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `danhmuc`
--

CREATE TABLE `danhmuc` (
  `id_dm` int(4) NOT NULL,
  `ten` varchar(50) NOT NULL,
  `anHien` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `danhmuc`
--

INSERT INTO `danhmuc` (`id_dm`, `ten`, `anHien`) VALUES
(1, 'Chó', 0),
(2, 'Thực phẩm chức năng', 0),
(3, 'Dịch vụ', 0);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `dichvu`
--

CREATE TABLE `dichvu` (
  `id_dv` int(4) NOT NULL,
  `ten` varchar(50) NOT NULL,
  `gia` double NOT NULL,
  `mota` varchar(50) NOT NULL,
  `id_dm` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `dichvu`
--

INSERT INTO `dichvu` (`id_dv`, `ten`, `gia`, `mota`, `id_dm`) VALUES
(1, 'Dịch vụ tắm chó', 500000, 'tắm rửa cho chó, bao gồm cắt móng, cạo lông chân', 3),
(2, 'khám chữa bệnh tại nhà', 300000, 'khám tại nhà', 3),
(3, 'khám chữa bệnh tại cơ sở', 120000, 'khám tại cơ sở', 3),
(4, 'giữ, chăm sóc hộ chủ', 100000, 'hotel thú cưng', 3);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `donhang`
--

CREATE TABLE `donhang` (
  `id` int(4) NOT NULL,
  `id_user` int(4) NOT NULL,
  `ten_nguoi_nhan` text NOT NULL,
  `sdt_nguoi_nhan` varchar(20) NOT NULL,
  `tongtien` int(11) NOT NULL,
  `ngaydat` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `trangthai` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `donhangchitiet`
--

CREATE TABLE `donhangchitiet` (
  `id_dhct` int(4) NOT NULL,
  `id_dh` int(4) NOT NULL,
  `id_sp` int(4) NOT NULL,
  `id_dv` int(4) NOT NULL,
  `soluong` int(11) NOT NULL,
  `tong` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `giongloai`
--

CREATE TABLE `giongloai` (
  `id_gl` int(4) NOT NULL,
  `ten` varchar(50) NOT NULL,
  `anHien` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `giongloai`
--

INSERT INTO `giongloai` (`id_gl`, `ten`, `anHien`) VALUES
(1, 'Alaska', 0),
(2, 'Bloodhound', 0),
(3, 'Goldens', 0),
(4, 'Border Collies', 0),
(5, 'chó cỏ', 0);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `nguoidung`
--

CREATE TABLE `nguoidung` (
  `id_user` int(4) NOT NULL,
  `hoTen` varchar(100) NOT NULL,
  `sdt` varchar(20) NOT NULL,
  `email` varchar(50) NOT NULL,
  `matkhau` varchar(100) NOT NULL,
  `diachi` varchar(50) NOT NULL,
  `mota` varchar(100) NOT NULL,
  `vaitro` tinyint(1) NOT NULL,
  `lichsudh` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `nguoidung`
--

INSERT INTO `nguoidung` (`id_user`, `hoTen`, `sdt`, `email`, `matkhau`, `diachi`, `mota`, `vaitro`, `lichsudh`) VALUES
(1, 'Bảo long', '0777663476', 'huynhngocblong@gmail.com', '123456789', '1 điện biên phủ', '', 1, ''),
(2, 'quốc bảo', '0123664879', 'quocbao@gmail.com', '123456789', '3 điện biên phủ', '', 1, ''),
(3, 'gia long', '0123654798', 'longgiagia@gmail.com', '123456789', '6 xa lộ hà nội', '', 2, ''),
(4, 'tuần lộc', '0451389762', 'tuanlocc@gmail.com', '123456789', '965 hoàng sa', '', 2, ''),
(5, 'Anh tài', '0987456132', 'maianhtai@gmail.com', '123456789', '578 trường sa', '', 0, '');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `sanpham`
--

CREATE TABLE `sanpham` (
  `id_sp` int(4) NOT NULL,
  `ten` varchar(50) NOT NULL,
  `gia` double NOT NULL,
  `hinhanh` varchar(255) NOT NULL,
  `ngaythem` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `soluong` int(11) NOT NULL,
  `mota` varchar(100) NOT NULL,
  `id_dm` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `sanpham`
--

INSERT INTO `sanpham` (`id_sp`, `ten`, `gia`, `hinhanh`, `ngaythem`, `soluong`, `mota`, `id_dm`) VALUES
(1, 'Bánh bích quy hỗn hợp cho chó | túi 220g', 75000, '1', '2023-09-23 16:50:34', 20, 'thực phẩm cho chó', 2),
(2, 'Hạt ANF 2KG cho chó vị cừu', 460000, '2', '2023-09-23 16:50:34', 5, 'thực phẩm bổ sung', 2),
(3, 'Hạt chó Royal Canin Poodle Puppy - 1.5Kg', 466000, 'https://fagopet.vn/uploads/images/62b3f0149487f64db4fa408c/nuoi_cho_ta__4_.webp', '2023-10-05 16:45:05', 3, 'thực phẩm bổ sung', 2),
(4, 'Hạt Royal Canin Hair&Skin 2kg', 556000, '4', '2023-10-05 16:41:06', 10, 'thực phẩm cho chó', 2),
(5, 'Hạt Royal Canin kitten 2kg', 527000, '5', '2023-09-23 16:50:34', 5, 'thực phẩm chức năng', 2);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `thucung`
--

CREATE TABLE `thucung` (
  `id` int(4) NOT NULL,
  `ten` varchar(50) NOT NULL,
  `id_user` int(11) NOT NULL DEFAULT 0,
  `gioitinh` tinyint(1) NOT NULL DEFAULT 0 COMMENT '0: chưa biết\r\n1: đực\r\n2: cái',
  `id_gl` int(4) NOT NULL,
  `gia` int(11) NOT NULL,
  `dob` date NOT NULL,
  `hinhanh` varchar(100) NOT NULL,
  `tiemphong` tinyint(1) NOT NULL DEFAULT 0 COMMENT '0: chưa tiêm\r\n1: đã tiêm',
  `trangthai` tinyint(1) NOT NULL DEFAULT 0,
  `mota` varchar(50) NOT NULL,
  `id_dm` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `thucung`
--

INSERT INTO `thucung` (`id`, `ten`, `id_user`, `gioitinh`, `id_gl`, `gia`, `dob`, `hinhanh`, `tiemphong`, `trangthai`, `mota`, `id_dm`) VALUES
(1, 'Sen', 0, 1, 1, 75000000, '2023-08-15', '1', 0, 0, '1,5 tháng tuổi, 5kg', 1),
(2, 'Coca', 0, 2, 5, 1000000, '2023-09-09', '2', 1, 0, '4kg', 1),
(3, 'lucky', 0, 1, 3, 35000000, '2023-04-14', '3', 1, 0, '8kg', 1),
(4, 'mỹ diệu', 0, 2, 2, 20000000, '2023-01-19', '4', 1, 0, '10kg', 1),
(5, 'mực', 5, 0, 5, 700000, '2023-06-13', '5', 0, 1, '9kg', 1),
(6, 'bò sữa', 0, 1, 4, 40000000, '2023-07-09', '6', 1, 0, '6kg', 1),
(7, 'đốm', 0, 0, 4, 35000000, '2023-06-08', '7', 1, 0, '8kg', 1);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `binhluan`
--
ALTER TABLE `binhluan`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_binhluan_sp` (`id_sp`),
  ADD KEY `fk_binhluan_user` (`id_user`);

--
-- Chỉ mục cho bảng `danhmuc`
--
ALTER TABLE `danhmuc`
  ADD PRIMARY KEY (`id_dm`);

--
-- Chỉ mục cho bảng `dichvu`
--
ALTER TABLE `dichvu`
  ADD PRIMARY KEY (`id_dv`),
  ADD KEY `fk_dichvu_danhmuc` (`id_dm`);

--
-- Chỉ mục cho bảng `donhang`
--
ALTER TABLE `donhang`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_donhang_user` (`id_user`);

--
-- Chỉ mục cho bảng `donhangchitiet`
--
ALTER TABLE `donhangchitiet`
  ADD PRIMARY KEY (`id_dhct`),
  ADD KEY `fk_dhct_donhang` (`id_dh`),
  ADD KEY `fk_dhct_sanpham` (`id_sp`),
  ADD KEY `fk_dhct_dichvu` (`id_dv`);

--
-- Chỉ mục cho bảng `giongloai`
--
ALTER TABLE `giongloai`
  ADD PRIMARY KEY (`id_gl`);

--
-- Chỉ mục cho bảng `nguoidung`
--
ALTER TABLE `nguoidung`
  ADD PRIMARY KEY (`id_user`);

--
-- Chỉ mục cho bảng `sanpham`
--
ALTER TABLE `sanpham`
  ADD PRIMARY KEY (`id_sp`),
  ADD KEY `fk_sanpham_danhmuc` (`id_dm`);

--
-- Chỉ mục cho bảng `thucung`
--
ALTER TABLE `thucung`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_thucung_giongloai` (`id_gl`),
  ADD KEY `fk_thucung_danhmuc` (`id_dm`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `binhluan`
--
ALTER TABLE `binhluan`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `danhmuc`
--
ALTER TABLE `danhmuc`
  MODIFY `id_dm` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `dichvu`
--
ALTER TABLE `dichvu`
  MODIFY `id_dv` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT cho bảng `donhang`
--
ALTER TABLE `donhang`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `donhangchitiet`
--
ALTER TABLE `donhangchitiet`
  MODIFY `id_dhct` int(4) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `giongloai`
--
ALTER TABLE `giongloai`
  MODIFY `id_gl` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT cho bảng `nguoidung`
--
ALTER TABLE `nguoidung`
  MODIFY `id_user` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT cho bảng `sanpham`
--
ALTER TABLE `sanpham`
  MODIFY `id_sp` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT cho bảng `thucung`
--
ALTER TABLE `thucung`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `binhluan`
--
ALTER TABLE `binhluan`
  ADD CONSTRAINT `fk_binhluan_sp` FOREIGN KEY (`id_sp`) REFERENCES `sanpham` (`id_sp`),
  ADD CONSTRAINT `fk_binhluan_user` FOREIGN KEY (`id_user`) REFERENCES `nguoidung` (`id_user`);

--
-- Các ràng buộc cho bảng `dichvu`
--
ALTER TABLE `dichvu`
  ADD CONSTRAINT `fk_dichvu_danhmuc` FOREIGN KEY (`id_dm`) REFERENCES `danhmuc` (`id_dm`);

--
-- Các ràng buộc cho bảng `donhang`
--
ALTER TABLE `donhang`
  ADD CONSTRAINT `fk_donhang_user` FOREIGN KEY (`id_user`) REFERENCES `nguoidung` (`id_user`);

--
-- Các ràng buộc cho bảng `donhangchitiet`
--
ALTER TABLE `donhangchitiet`
  ADD CONSTRAINT `fk_dhct_dichvu` FOREIGN KEY (`id_dv`) REFERENCES `dichvu` (`id_dv`),
  ADD CONSTRAINT `fk_dhct_donhang` FOREIGN KEY (`id_dh`) REFERENCES `donhang` (`id`),
  ADD CONSTRAINT `fk_dhct_sanpham` FOREIGN KEY (`id_sp`) REFERENCES `sanpham` (`id_sp`);

--
-- Các ràng buộc cho bảng `sanpham`
--
ALTER TABLE `sanpham`
  ADD CONSTRAINT `fk_sanpham_danhmuc` FOREIGN KEY (`id_dm`) REFERENCES `danhmuc` (`id_dm`);

--
-- Các ràng buộc cho bảng `thucung`
--
ALTER TABLE `thucung`
  ADD CONSTRAINT `fk_thucung_danhmuc` FOREIGN KEY (`id_dm`) REFERENCES `danhmuc` (`id_dm`),
  ADD CONSTRAINT `fk_thucung_giongloai` FOREIGN KEY (`id_gl`) REFERENCES `giongloai` (`id_gl`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
