-- CREATE DATABASE brand;
USE brand;

-- Creating the THUONGHIEU table
CREATE TABLE THUONGHIEU (
    ID_THUONGHIEU INT AUTO_INCREMENT PRIMARY KEY,
    TENTHUONGHIEU VARCHAR(255) NOT NULL,
    DIACHI NVARCHAR(255),
    AVATAR VARCHAR(255),
    LINHVUC NVARCHAR(255),
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
INSERT INTO THUONGHIEU (TENTHUONGHIEU, DIACHI, AVATAR, LINHVUC) VALUES
('Tocotoco', N'866 Chu Văn An, Phường 12, Bình Thạnh, Thành phố Hồ Chí Minh, Việt Nam', 'https://cellphones.com.vn/sforum/wp-content/uploads/2023/10/avatar-trang-4.jpg', 'Coffee and Tea'),
('Phuc Long', N'570 Kinh Đ. Vương, An Lạc, Bình Tân, Thành phố Hồ Chí Minh Việt Nam', 'https://cellphones.com.vn/sforum/wp-content/uploads/2023/10/avatar-trang-4.jpg', 'Coffee and Tea'),
('Lotteria', N'421 Chu Văn An, Phường 12, Bình Thạnh, Thành phố Hồ Chí Minh, Việt Nam', 'https://cellphones.com.vn/sforum/wp-content/uploads/2023/10/avatar-trang-4.jpg', 'Food'),
('Starbucks', N'943 Minh Phụng, Phường 9, Quận 11, Thành phố Hồ Chí Minh, Việt Nam', 'https://cellphones.com.vn/sforum/wp-content/uploads/2023/10/avatar-trang-4.jpg', 'Coffee and Tea'),
('The Coffee House', N'767 Đ. Cộng Hòa, Phường 4, Tân Bình, Thành phố Hồ Chí Minh, Việt Nam', 'https://cellphones.com.vn/sforum/wp-content/uploads/2023/10/avatar-trang-4.jpg', 'Coffee and Tea'),
('Highlands', N'342 Đ. Gia Phú, Phường 3, Quận 6, Thành phố Hồ Chí Minh, Việt Nam', 'https://cellphones.com.vn/sforum/wp-content/uploads/2023/10/avatar-trang-4.jpg', 'Coffee and Tea');

-- Assume the ID of the inserted record is 1. If you want to get the actual ID, you can use LAST_INSERT_ID() in a real scenario.
-- Insert data into SUKIEN
-- For ID_SUKIEN = 1
INSERT INTO SUKIEN (ID_THUONGHIEU, TENSUKIEN, HINHANH, TGBATDAU, TGKETTHUC, LOAITROCHOI) VALUES
(1, 'Weekend Trivia Extravaganza', 'https://res.cloudinary.com/dhsz5hhqq/image/upload/v1724226408/kientrucphanmem/zq1trvomzyppthtlztlq.jpg', '2024-08-20 08:00:00', '2024-08-20 22:00:00', 'Trivia Quiz'),
(1, 'Lucky Dice Draw', 'https://res.cloudinary.com/dhsz5hhqq/image/upload/v1724226408/kientrucphanmem/zq1trvomzyppthtlztlq.jpg', '2024-08-21 10:00:00', '2024-08-21 20:00:00', 'Roll Dice'),
(1, 'Trivia Night Showdown', 'https://res.cloudinary.com/dhsz5hhqq/image/upload/v1724226408/kientrucphanmem/zq1trvomzyppthtlztlq.jpg', '2024-08-22 09:00:00', '2024-08-22 21:00:00', 'Trivia Quiz'),
(1, 'Dice Roll Madness', 'https://res.cloudinary.com/dhsz5hhqq/image/upload/v1724226408/kientrucphanmem/zq1trvomzyppthtlztlq.jpg', '2024-08-23 11:00:00', '2024-08-23 19:00:00', 'Roll Dice'),
(1, 'Brain Buster Challenge', 'https://res.cloudinary.com/dhsz5hhqq/image/upload/v1724226408/kientrucphanmem/zq1trvomzyppthtlztlq.jpg', '2024-08-24 12:00:00', '2024-08-24 18:00:00', 'Trivia Quiz'),
(1, 'Roll the Dice Event', 'https://res.cloudinary.com/dhsz5hhqq/image/upload/v1724226408/kientrucphanmem/zq1trvomzyppthtlztlq.jpg', '2024-08-25 10:00:00', '2024-08-25 22:00:00', 'Roll Dice'),
(1, 'Ultimate Trivia Tournament', 'https://res.cloudinary.com/dhsz5hhqq/image/upload/v1724226408/kientrucphanmem/zq1trvomzyppthtlztlq.jpg', '2024-08-26 09:00:00', '2024-08-26 21:00:00', 'Trivia Quiz'),
(1, 'Dice Roll Extravaganza', 'https://res.cloudinary.com/dhsz5hhqq/image/upload/v1724226408/kientrucphanmem/zq1trvomzyppthtlztlq.jpg', '2024-08-27 12:00:00', '2024-08-27 18:00:00', 'Roll Dice'),
(1, 'Trivia Blitz', 'https://res.cloudinary.com/dhsz5hhqq/image/upload/v1724226408/kientrucphanmem/zq1trvomzyppthtlztlq.jpg', '2024-08-28 08:00:00', '2024-08-28 20:00:00', 'Trivia Quiz'),
(1, 'Roll & Win Challenge', 'https://res.cloudinary.com/dhsz5hhqq/image/upload/v1724226408/kientrucphanmem/zq1trvomzyppthtlztlq.jpg', '2024-08-29 10:00:00', '2024-08-29 22:00:00', 'Roll Dice');

-- For ID_SUKIEN = 2
INSERT INTO SUKIEN (ID_THUONGHIEU, TENSUKIEN, HINHANH, TGBATDAU, TGKETTHUC, LOAITROCHOI) VALUES
(2, 'Lucky Draw Bonanza', 'https://res.cloudinary.com/dhsz5hhqq/image/upload/v1724226408/kientrucphanmem/zq1trvomzyppthtlztlq.jpg', '2024-09-01 09:00:00', '2024-09-01 21:00:00', 'Roll Dice'),
(2, 'Spin & Win', 'https://res.cloudinary.com/dhsz5hhqq/image/upload/v1724226408/kientrucphanmem/zq1trvomzyppthtlztlq.jpg', '2024-09-02 10:00:00', '2024-09-02 22:00:00', 'Roll Dice'),
(2, 'Quiz Master Challenge', 'https://res.cloudinary.com/dhsz5hhqq/image/upload/v1724226408/kientrucphanmem/zq1trvomzyppthtlztlq.jpg', '2024-09-03 11:00:00', '2024-09-03 20:00:00', 'Trivia Quiz'),
(2, 'Rolling Jackpot Event', 'https://res.cloudinary.com/dhsz5hhqq/image/upload/v1724226408/kientrucphanmem/zq1trvomzyppthtlztlq.jpg', '2024-09-04 12:00:00', '2024-09-04 21:00:00', 'Roll Dice'),
(2, 'Daily Trivia Teasers', 'https://res.cloudinary.com/dhsz5hhqq/image/upload/v1724226408/kientrucphanmem/zq1trvomzyppthtlztlq.jpg', '2024-09-05 09:00:00', '2024-09-05 20:00:00', 'Trivia Quiz'),
(2, 'Dice Frenzy', 'https://res.cloudinary.com/dhsz5hhqq/image/upload/v1724226408/kientrucphanmem/zq1trvomzyppthtlztlq.jpg', '2024-09-06 10:00:00', '2024-09-06 22:00:00', 'Roll Dice'),
(2, 'Weekend Trivia Knockout', 'https://res.cloudinary.com/dhsz5hhqq/image/upload/v1724226408/kientrucphanmem/zq1trvomzyppthtlztlq.jpg', '2024-09-07 11:00:00', '2024-09-07 19:00:00', 'Trivia Quiz'),
(2, 'High Stakes Roll', 'https://res.cloudinary.com/dhsz5hhqq/image/upload/v1724226408/kientrucphanmem/zq1trvomzyppthtlztlq.jpg', '2024-09-08 12:00:00', '2024-09-08 20:00:00', 'Roll Dice'),
(2, 'Brainstorming Trivia', 'https://res.cloudinary.com/dhsz5hhqq/image/upload/v1724226408/kientrucphanmem/zq1trvomzyppthtlztlq.jpg', '2024-09-09 09:00:00', '2024-09-09 21:00:00', 'Trivia Quiz'),
(2, 'Dice Roll Delight', 'https://res.cloudinary.com/dhsz5hhqq/image/upload/v1724226408/kientrucphanmem/zq1trvomzyppthtlztlq.jpg', '2024-09-10 10:00:00', '2024-09-10 22:00:00', 'Roll Dice');

-- For ID_SUKIEN = 3
INSERT INTO SUKIEN (ID_THUONGHIEU, TENSUKIEN, HINHANH, TGBATDAU, TGKETTHUC, LOAITROCHOI) VALUES
(3, 'Trivia Showdown Sunday', 'https://res.cloudinary.com/dhsz5hhqq/image/upload/v1724226408/kientrucphanmem/zq1trvomzyppthtlztlq.jpg', '2024-09-11 08:00:00', '2024-09-11 20:00:00', 'Trivia Quiz'),
(3, 'Spin & Win Bonanza', 'https://res.cloudinary.com/dhsz5hhqq/image/upload/v1724226408/kientrucphanmem/zq1trvomzyppthtlztlq.jpg', '2024-09-12 09:00:00', '2024-09-12 22:00:00', 'Roll Dice'),
(3, 'Trivia Night Fun', 'https://res.cloudinary.com/dhsz5hhqq/image/upload/v1724226408/kientrucphanmem/zq1trvomzyppthtlztlq.jpg', '2024-09-13 10:00:00', '2024-09-13 21:00:00', 'Trivia Quiz'),
(3, 'Dice Roll Frenzy', 'https://res.cloudinary.com/dhsz5hhqq/image/upload/v1724226408/kientrucphanmem/zq1trvomzyppthtlztlq.jpg', '2024-09-14 11:00:00', '2024-09-14 19:00:00', 'Roll Dice'),
(3, 'Ultimate Trivia Showdown', 'https://res.cloudinary.com/dhsz5hhqq/image/upload/v1724226408/kientrucphanmem/zq1trvomzyppthtlztlq.jpg', '2024-09-15 12:00:00', '2024-09-15 20:00:00', 'Trivia Quiz'),
(3, 'Lucky Dice Days', 'https://res.cloudinary.com/dhsz5hhqq/image/upload/v1724226408/kientrucphanmem/zq1trvomzyppthtlztlq.jpg', '2024-09-16 09:00:00', '2024-09-16 21:00:00', 'Roll Dice'),
(3, 'Trivia Battle Royale', 'https://res.cloudinary.com/dhsz5hhqq/image/upload/v1724226408/kientrucphanmem/zq1trvomzyppthtlztlq.jpg', '2024-09-17 10:00:00', '2024-09-17 22:00:00', 'Trivia Quiz'),
(3, 'Roll Dice Extravaganza', 'https://res.cloudinary.com/dhsz5hhqq/image/upload/v1724226408/kientrucphanmem/zq1trvomzyppthtlztlq.jpg', '2024-09-18 12:00:00', '2024-09-18 18:00:00', 'Roll Dice'),
(3, 'Trivia Master Quiz', 'https://res.cloudinary.com/dhsz5hhqq/image/upload/v1724226408/kientrucphanmem/zq1trvomzyppthtlztlq.jpg', '2024-09-19 09:00:00', '2024-09-19 21:00:00', 'Trivia Quiz'),
(3, 'Dice Roll Fiesta', 'https://res.cloudinary.com/dhsz5hhqq/image/upload/v1724226408/kientrucphanmem/zq1trvomzyppthtlztlq.jpg', '2024-09-20 10:00:00', '2024-09-20 22:00:00', 'Roll Dice');

-- For ID_SUKIEN = 4
INSERT INTO SUKIEN (ID_THUONGHIEU, TENSUKIEN, HINHANH, TGBATDAU, TGKETTHUC, LOAITROCHOI) VALUES
(4, 'Trivia Challenge Fest', 'https://res.cloudinary.com/dhsz5hhqq/image/upload/v1724226408/kientrucphanmem/zq1trvomzyppthtlztlq.jpg', '2024-09-21 08:00:00', '2024-09-21 22:00:00', 'Trivia Quiz'),
(4, 'Roll the Dice Weekend', 'https://res.cloudinary.com/dhsz5hhqq/image/upload/v1724226408/kientrucphanmem/zq1trvomzyppthtlztlq.jpg', '2024-09-22 09:00:00', '2024-09-22 21:00:00', 'Roll Dice'),
(4, 'Trivia Quiz Mania', 'https://res.cloudinary.com/dhsz5hhqq/image/upload/v1724226408/kientrucphanmem/zq1trvomzyppthtlztlq.jpg', '2024-09-23 10:00:00', '2024-09-23 20:00:00', 'Trivia Quiz'),
(4, 'Dice Roll Spectacular', 'https://res.cloudinary.com/dhsz5hhqq/image/upload/v1724226408/kientrucphanmem/zq1trvomzyppthtlztlq.jpg', '2024-09-24 11:00:00', '2024-09-24 19:00:00', 'Roll Dice'),
(4, 'Ultimate Quiz Fest', 'https://res.cloudinary.com/dhsz5hhqq/image/upload/v1724226408/kientrucphanmem/zq1trvomzyppthtlztlq.jpg', '2024-09-25 12:00:00', '2024-09-25 20:00:00', 'Trivia Quiz'),
(4, 'High Stakes Dice Roll', 'https://res.cloudinary.com/dhsz5hhqq/image/upload/v1724226408/kientrucphanmem/zq1trvomzyppthtlztlq.jpg', '2024-09-26 09:00:00', '2024-09-26 21:00:00', 'Roll Dice'),
(4, 'Trivia Quiz Extravaganza', 'https://res.cloudinary.com/dhsz5hhqq/image/upload/v1724226408/kientrucphanmem/zq1trvomzyppthtlztlq.jpg', '2024-09-27 10:00:00', '2024-09-27 22:00:00', 'Trivia Quiz'),
(4, 'Dice Roll Delight', 'https://res.cloudinary.com/dhsz5hhqq/image/upload/v1724226408/kientrucphanmem/zq1trvomzyppthtlztlq.jpg', '2024-09-28 11:00:00', '2024-09-28 18:00:00', 'Roll Dice'),
(4, 'Trivia Quiz Fiesta', 'https://res.cloudinary.com/dhsz5hhqq/image/upload/v1724226408/kientrucphanmem/zq1trvomzyppthtlztlq.jpg', '2024-09-29 12:00:00', '2024-09-29 21:00:00', 'Trivia Quiz'),
(4, 'Roll & Win Spectacle', 'https://res.cloudinary.com/dhsz5hhqq/image/upload/v1724226408/kientrucphanmem/zq1trvomzyppthtlztlq.jpg', '2024-09-30 10:00:00', '2024-09-30 22:00:00', 'Roll Dice');

-- For ID_SUKIEN = 5
INSERT INTO SUKIEN (ID_THUONGHIEU, TENSUKIEN, HINHANH, TGBATDAU, TGKETTHUC, LOAITROCHOI) VALUES
(5, 'Quiz Mania Extravaganza', 'https://res.cloudinary.com/dhsz5hhqq/image/upload/v1724226408/kientrucphanmem/zq1trvomzyppthtlztlq.jpg', '2024-10-01 09:00:00', '2024-10-01 21:00:00', 'Trivia Quiz'),
(5, 'Roll the Dice Fest', 'https://res.cloudinary.com/dhsz5hhqq/image/upload/v1724226408/kientrucphanmem/zq1trvomzyppthtlztlq.jpg', '2024-10-02 10:00:00', '2024-10-02 22:00:00', 'Roll Dice'),
(5, 'Trivia Showdown', 'https://res.cloudinary.com/dhsz5hhqq/image/upload/v1724226408/kientrucphanmem/zq1trvomzyppthtlztlq.jpg', '2024-10-03 11:00:00', '2024-10-03 20:00:00', 'Trivia Quiz'),
(5, 'Dice Roll Frenzy', 'https://res.cloudinary.com/dhsz5hhqq/image/upload/v1724226408/kientrucphanmem/zq1trvomzyppthtlztlq.jpg', '2024-10-04 12:00:00', '2024-10-04 22:00:00', 'Roll Dice'),
(5, 'Ultimate Trivia Event', 'https://res.cloudinary.com/dhsz5hhqq/image/upload/v1724226408/kientrucphanmem/zq1trvomzyppthtlztlq.jpg', '2024-10-05 09:00:00', '2024-10-05 21:00:00', 'Trivia Quiz'),
(5, 'Dice Roll Fiesta', 'https://res.cloudinary.com/dhsz5hhqq/image/upload/v1724226408/kientrucphanmem/zq1trvomzyppthtlztlq.jpg', '2024-10-06 10:00:00', '2024-10-06 22:00:00', 'Roll Dice'),
(5, 'Trivia Battle', 'https://res.cloudinary.com/dhsz5hhqq/image/upload/v1724226408/kientrucphanmem/zq1trvomzyppthtlztlq.jpg', '2024-10-07 11:00:00', '2024-10-07 20:00:00', 'Trivia Quiz'),
(5, 'Roll Dice Mania', 'https://res.cloudinary.com/dhsz5hhqq/image/upload/v1724226408/kientrucphanmem/zq1trvomzyppthtlztlq.jpg', '2024-10-08 12:00:00', '2024-10-08 22:00:00', 'Roll Dice'),
(5, 'Trivia Quiz Extravaganza', 'https://res.cloudinary.com/dhsz5hhqq/image/upload/v1724226408/kientrucphanmem/zq1trvomzyppthtlztlq.jpg', '2024-10-09 09:00:00', '2024-10-09 21:00:00', 'Trivia Quiz'),
(5, 'Dice Roll Delight', 'https://res.cloudinary.com/dhsz5hhqq/image/upload/v1724226408/kientrucphanmem/zq1trvomzyppthtlztlq.jpg', '2024-10-10 10:00:00', '2024-10-10 22:00:00', 'Roll Dice');

-- For ID_SUKIEN = 6
INSERT INTO SUKIEN (ID_THUONGHIEU, TENSUKIEN, HINHANH, TGBATDAU, TGKETTHUC, LOAITROCHOI) VALUES
(6, 'Quiz Showdown', 'https://res.cloudinary.com/dhsz5hhqq/image/upload/v1724226408/kientrucphanmem/zq1trvomzyppthtlztlq.jpg', '2024-10-11 09:00:00', '2024-10-11 21:00:00', 'Trivia Quiz'),
(6, 'Roll Dice Extravaganza', 'https://res.cloudinary.com/dhsz5hhqq/image/upload/v1724226408/kientrucphanmem/zq1trvomzyppthtlztlq.jpg', '2024-10-12 10:00:00', '2024-10-12 22:00:00', 'Roll Dice'),
(6, 'Ultimate Trivia Challenge', 'https://res.cloudinary.com/dhsz5hhqq/image/upload/v1724226408/kientrucphanmem/zq1trvomzyppthtlztlq.jpg', '2024-10-13 11:00:00', '2024-10-13 20:00:00', 'Trivia Quiz'),
(6, 'Dice Roll Festival', 'https://res.cloudinary.com/dhsz5hhqq/image/upload/v1724226408/kientrucphanmem/zq1trvomzyppthtlztlq.jpg', '2024-10-14 12:00:00', '2024-10-14 22:00:00', 'Roll Dice'),
(6, 'Trivia Quiz Party', 'https://res.cloudinary.com/dhsz5hhqq/image/upload/v1724226408/kientrucphanmem/zq1trvomzyppthtlztlq.jpg', '2024-10-15 09:00:00', '2024-10-15 21:00:00', 'Trivia Quiz'),
(6, 'Dice Roll Mania', 'https://res.cloudinary.com/dhsz5hhqq/image/upload/v1724226408/kientrucphanmem/zq1trvomzyppthtlztlq.jpg', '2024-10-16 10:00:00', '2024-10-16 22:00:00', 'Roll Dice'),
(6, 'Trivia Fest Spectacular', 'https://res.cloudinary.com/dhsz5hhqq/image/upload/v1724226408/kientrucphanmem/zq1trvomzyppthtlztlq.jpg', '2024-10-17 11:00:00', '2024-10-17 20:00:00', 'Trivia Quiz'),
(6, 'Roll Dice Gala', 'https://res.cloudinary.com/dhsz5hhqq/image/upload/v1724226408/kientrucphanmem/zq1trvomzyppthtlztlq.jpg', '2024-10-18 12:00:00', '2024-10-18 22:00:00', 'Roll Dice'),
(6, 'Trivia Quiz Fest', 'https://res.cloudinary.com/dhsz5hhqq/image/upload/v1724226408/kientrucphanmem/zq1trvomzyppthtlztlq.jpg', '2024-10-19 09:00:00', '2024-10-19 21:00:00', 'Trivia Quiz'),
(6, 'Dice Roll Delight Fest', 'https://res.cloudinary.com/dhsz5hhqq/image/upload/v1724226408/kientrucphanmem/zq1trvomzyppthtlztlq.jpg', '2024-10-20 10:00:00', '2024-10-20 22:00:00', 'Roll Dice');


-- Insert data into VOUCHER
INSERT INTO VOUCHER (ID_THUONGHIEU, NGAYHETHAN, TRIGIA, TRANGTHAI, HINHANH, QRCODE, MOTA) VALUES
(1, '2024-09-20 21:00:00', 20000, 'usable', 'https://res.cloudinary.com/dhsz5hhqq/image/upload/v1723957394/kientrucphanmem/wctjdhke7rfs3fnj7bf4.jpg', 'https://res.cloudinary.com/dhsz5hhqq/image/upload/v1723957396/kientrucphanmem/egzi8vpkyicvhq1pxkse.png', '20.000VND voucher'),
(1, '2024-09-20 21:00:00', 50000, 'usable', 'https://res.cloudinary.com/dhsz5hhqq/image/upload/v1723957562/kientrucphanmem/fvqrtvdfryyaqjg0rduf.jpg', 'https://res.cloudinary.com/dhsz5hhqq/image/upload/v1723957563/kientrucphanmem/jufkogsy3spnd0u3kccu.png', '50.000VND voucher'),
(2, '2024-09-20 21:00:00', 20000, 'usable', 'https://res.cloudinary.com/dhsz5hhqq/image/upload/v1723957394/kientrucphanmem/wctjdhke7rfs3fnj7bf4.jpg', 'https://res.cloudinary.com/dhsz5hhqq/image/upload/v1723957396/kientrucphanmem/egzi8vpkyicvhq1pxkse.png', '20.000VND voucher'),
(2, '2024-09-20 21:00:00', 50000, 'usable', 'https://res.cloudinary.com/dhsz5hhqq/image/upload/v1723957562/kientrucphanmem/fvqrtvdfryyaqjg0rduf.jpg', 'https://res.cloudinary.com/dhsz5hhqq/image/upload/v1723957563/kientrucphanmem/jufkogsy3spnd0u3kccu.png', '50.000VND voucher'),
(3, '2024-09-20 21:00:00', 20000, 'usable', 'https://res.cloudinary.com/dhsz5hhqq/image/upload/v1723957394/kientrucphanmem/wctjdhke7rfs3fnj7bf4.jpg', 'https://res.cloudinary.com/dhsz5hhqq/image/upload/v1723957396/kientrucphanmem/egzi8vpkyicvhq1pxkse.png', '20.000VND voucher'),
(3, '2024-09-20 21:00:00', 50000, 'usable', 'https://res.cloudinary.com/dhsz5hhqq/image/upload/v1723957562/kientrucphanmem/fvqrtvdfryyaqjg0rduf.jpg', 'https://res.cloudinary.com/dhsz5hhqq/image/upload/v1723957563/kientrucphanmem/jufkogsy3spnd0u3kccu.png', '50.000VND voucher'),
(4, '2024-09-20 21:00:00', 20000, 'usable', 'https://res.cloudinary.com/dhsz5hhqq/image/upload/v1723957394/kientrucphanmem/wctjdhke7rfs3fnj7bf4.jpg', 'https://res.cloudinary.com/dhsz5hhqq/image/upload/v1723957396/kientrucphanmem/egzi8vpkyicvhq1pxkse.png', '20.000VND voucher'),
(4, '2024-09-20 21:00:00', 50000, 'usable', 'https://res.cloudinary.com/dhsz5hhqq/image/upload/v1723957562/kientrucphanmem/fvqrtvdfryyaqjg0rduf.jpg', 'https://res.cloudinary.com/dhsz5hhqq/image/upload/v1723957563/kientrucphanmem/jufkogsy3spnd0u3kccu.png', '50.000VND voucher'),
(5, '2024-09-20 21:00:00', 20000, 'usable', 'https://res.cloudinary.com/dhsz5hhqq/image/upload/v1723957394/kientrucphanmem/wctjdhke7rfs3fnj7bf4.jpg', 'https://res.cloudinary.com/dhsz5hhqq/image/upload/v1723957396/kientrucphanmem/egzi8vpkyicvhq1pxkse.png', '20.000VND voucher'),
(5, '2024-09-20 21:00:00', 50000, 'usable', 'https://res.cloudinary.com/dhsz5hhqq/image/upload/v1723957562/kientrucphanmem/fvqrtvdfryyaqjg0rduf.jpg', 'https://res.cloudinary.com/dhsz5hhqq/image/upload/v1723957563/kientrucphanmem/jufkogsy3spnd0u3kccu.png', '50.000VND voucher'),
(6, '2024-09-20 21:00:00', 20000, 'usable', 'https://res.cloudinary.com/dhsz5hhqq/image/upload/v1723957394/kientrucphanmem/wctjdhke7rfs3fnj7bf4.jpg', 'https://res.cloudinary.com/dhsz5hhqq/image/upload/v1723957396/kientrucphanmem/egzi8vpkyicvhq1pxkse.png', '20.000VND voucher'),
(6, '2024-09-20 21:00:00', 50000, 'usable', 'https://res.cloudinary.com/dhsz5hhqq/image/upload/v1723957562/kientrucphanmem/fvqrtvdfryyaqjg0rduf.jpg', 'https://res.cloudinary.com/dhsz5hhqq/image/upload/v1723957563/kientrucphanmem/jufkogsy3spnd0u3kccu.png', '50.000VND voucher');

-- Insert data into VOUCHER_SUKIEN
INSERT INTO VOUCHER_SUKIEN (ID_VOUCHER, ID_SUKIEN, SOLUONGVOUCHER, SOLUOTSUDUNG, TRANGTHAI) VALUES
(1, 1, 100, 0, 'usable'),
(2, 1, 150, 0, 'usable');
