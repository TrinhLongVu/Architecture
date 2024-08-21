-- CREATE DATABASE brand;
USE brand;

-- Creating the THUONGHIEU table
CREATE TABLE THUONGHIEU (
    ID_THUONGHIEU INT AUTO_INCREMENT PRIMARY KEY,
    TENTHUONGHIEU VARCHAR(255) NOT NULL,
    DIACHI VARCHAR(255),
    AVATAR VARCHAR(255),
    ID_NGUOIDUNG INT
);

-- Creating the SUKIEN table
CREATE TABLE SUKIEN (
    ID_SUKIEN INT AUTO_INCREMENT PRIMARY KEY,
    ID_THUONGHIEU INT,
    TENSUKIEN VARCHAR(255) NOT NULL,
    HINHANH VARCHAR(255),
    TGBATDAU DATETIME,
    TGKETTHUC DATETIME,
    LOAITROCHOI VARCHAR(255)
);

-- Creating the VOUCHER table
CREATE TABLE VOUCHER (
    ID_VOUCHER INT AUTO_INCREMENT PRIMARY KEY,
    ID_THUONGHIEU INT,
    NGAYHETHAN DATETIME,
    TRIGIA INT,
    TRANGTHAI VARCHAR(50),
    HINHANH VARCHAR(255),
    QRCODE VARCHAR(255),
    MOTA TEXT
);

-- Creating the VOUCHER_SUKIEN table
CREATE TABLE VOUCHER_SUKIEN (
    ID_VOUCHER INT,
    ID_SUKIEN INT,
    SOLUONGVOUCHER INT,
    SOLUOTSUDUNG INT,
    TRANGTHAI VARCHAR(50),
    PRIMARY KEY (ID_VOUCHER, ID_SUKIEN)
);

-- Insert data into THUONGHIEU
INSERT INTO THUONGHIEU (TENTHUONGHIEU, DIACHI, AVATAR) VALUES
('Tocotoco', '227 Nguyen Van Cu', 'https://cellphones.com.vn/sforum/wp-content/uploads/2023/10/avatar-trang-4.jpg');

-- Assume the ID of the inserted record is 1. If you want to get the actual ID, you can use LAST_INSERT_ID() in a real scenario.
-- Insert data into SUKIEN
INSERT INTO SUKIEN (ID_THUONGHIEU, TENSUKIEN, HINHANH, TGBATDAU, TGKETTHUC, LOAITROCHOI) VALUES
(1, 'Saturday Quiz', 'https://res.cloudinary.com/dhsz5hhqq/image/upload/v1724226408/kientrucphanmem/zq1trvomzyppthtlztlq.jpg', '2024-08-20 09:00:00', '2024-08-30 18:00:00', 'Trivia Quiz'),
(1, 'Lucky Draw', 'https://res.cloudinary.com/dhsz5hhqq/image/upload/v1724226408/kientrucphanmem/zq1trvomzyppthtlztlq.jpg', '2024-09-01 10:00:00', '2024-09-10 20:00:00', 'Roll Dice');

-- Insert data into VOUCHER
INSERT INTO VOUCHER (ID_THUONGHIEU, NGAYHETHAN, TRIGIA, TRANGTHAI, HINHANH, QRCODE, MOTA) VALUES
(1, '2024-09-20 21:00:00', 20000, 'usable', 'https://res.cloudinary.com/dhsz5hhqq/image/upload/v1723957394/kientrucphanmem/wctjdhke7rfs3fnj7bf4.jpg', 'https://res.cloudinary.com/dhsz5hhqq/image/upload/v1723957396/kientrucphanmem/egzi8vpkyicvhq1pxkse.png', 'This is a 20000VND voucher for your shopping'),
(1, '2024-09-20 21:00:00', 50000, 'usable', 'https://res.cloudinary.com/dhsz5hhqq/image/upload/v1723957562/kientrucphanmem/fvqrtvdfryyaqjg0rduf.jpg', 'https://res.cloudinary.com/dhsz5hhqq/image/upload/v1723957563/kientrucphanmem/jufkogsy3spnd0u3kccu.png', 'This is a 50000VND voucher for your shopping');

-- Insert data into VOUCHER_SUKIEN
INSERT INTO VOUCHER_SUKIEN (ID_VOUCHER, ID_SUKIEN, SOLUONGVOUCHER, SOLUOTSUDUNG, TRANGTHAI) VALUES
(1, 4, 100, 0, 'usable'),
(2, 4, 150, 0, 'usable');
