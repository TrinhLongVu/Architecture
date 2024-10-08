import db from '../index.mjs'; // Adjust the path as necessary

export const sqlScript = `INSERT INTO SUKIENYEUTHICHes (ID_NGUOIDUNG, ID_SUKIEN, ISFAVORITE, createdAt, updatedAt) VALUES
(1, 10, TRUE, '2023-08-15', '2023-08-15'),
(2, 5, TRUE, '2023-09-10', '2023-09-11'),
(3, 12, TRUE, '2023-07-05', '2023-07-06'),
(4, 20, TRUE, '2023-06-20', '2023-06-21'),
(5, 9, TRUE, '2023-10-01', '2023-10-02'),
(6, 15, TRUE, '2023-05-18', '2023-05-18'),
(7, 2, TRUE, '2023-04-22', '2023-04-23'),
(8, 6, TRUE, '2023-03-19', '2023-03-20'),
(9, 18, TRUE, '2023-09-03', '2023-09-04'),
(10, 21, TRUE, '2023-02-14', '2023-02-15'),
(11, 25, TRUE, '2023-08-25', '2023-08-25'),
(12, 29, TRUE, '2023-07-30', '2023-07-31'),
(13, 3, TRUE, '2023-11-12', '2023-11-13'),
(14, 7, TRUE, '2023-05-26', '2023-05-26'),
(15, 1, TRUE, '2023-04-17', '2023-04-17'),
(16, 8, TRUE, '2023-06-28', '2023-06-29'),
(17, 14, TRUE, '2023-07-06', '2023-07-06'),
(18, 11, TRUE, '2023-08-19', '2023-08-19'),
(19, 30, TRUE, '2023-11-05', '2023-11-06'),
(20, 35, TRUE, '2023-09-20', '2023-09-21'),
(21, 4, TRUE, '2023-05-23', '2023-05-24'),
(22, 13, TRUE, '2023-07-10', '2023-07-10'),
(23, 19, TRUE, '2023-08-09', '2023-08-09'),
(24, 24, TRUE, '2023-06-01', '2023-06-02'),
(25, 31, TRUE, '2023-05-09', '2023-05-10'),
(26, 37, TRUE, '2023-10-19', '2023-10-20'),
(27, 41, TRUE, '2023-09-12', '2023-09-13'),
(28, 27, TRUE, '2023-03-29', '2023-03-30'),
(29, 44, TRUE, '2023-05-07', '2023-05-08'),
(30, 5, TRUE, '2023-09-11', '2023-09-12'),
(31, 23, TRUE, '2023-04-25', '2023-04-26'),
(32, 17, TRUE, '2023-06-13', '2023-06-13'),
(33, 45, TRUE, '2023-08-02', '2023-08-03'),
(34, 28, TRUE, '2023-07-21', '2023-07-21'),
(35, 26, TRUE, '2023-02-09', '2023-02-10'),
(36, 32, TRUE, '2023-09-01', '2023-09-02'),
(37, 40, TRUE, '2023-10-06', '2023-10-07'),
(38, 22, TRUE, '2023-08-16', '2023-08-17'),
(39, 48, TRUE, '2023-09-04', '2023-09-05'),
(40, 51, TRUE, '2023-07-12', '2023-07-12'),
(41, 49, TRUE, '2023-03-22', '2023-03-23'),
(42, 36, TRUE, '2023-08-23', '2023-08-24'),
(43, 39, TRUE, '2023-09-09', '2023-09-09'),
(44, 53, TRUE, '2023-05-15', '2023-05-15'),
(45, 42, TRUE, '2023-06-06', '2023-06-07'),
(46, 43, TRUE, '2023-02-14', '2023-02-15'),
(47, 50, TRUE, '2023-03-08', '2023-03-09'),
(48, 47, TRUE, '2023-07-25', '2023-07-26'),
(49, 54, TRUE, '2023-10-15', '2023-10-16'),
(50, 16, TRUE, '2023-08-17', '2023-08-18'),
(51, 56, TRUE, '2023-11-07', '2023-11-08'),
(52, 46, TRUE, '2023-09-30', '2023-10-01'),
(53, 55, TRUE, '2023-04-20', '2023-04-21'),
(54, 52, TRUE, '2023-06-10', '2023-06-11'),
(55, 57, TRUE, '2023-07-15', '2023-07-16'),
(56, 34, TRUE, '2023-08-21', '2023-08-22'),
(57, 58, TRUE, '2023-05-05', '2023-05-06'),
(58, 38, TRUE, '2023-02-28', '2023-03-01'),
(59, 33, TRUE, '2023-07-28', '2023-07-29'),
(60, 59, TRUE, '2023-03-06', '2023-03-07'),
(61, 21, TRUE, '2023-10-09', '2023-10-10'),
(62, 1, TRUE, '2023-04-01', '2023-04-02'),
(63, 11, TRUE, '2023-07-18', '2023-07-18'),
(64, 2, TRUE, '2023-08-01', '2023-08-02'),
(65, 8, TRUE, '2023-06-03', '2023-06-04'),
(66, 22, TRUE, '2023-05-19', '2023-05-20'),
(67, 24, TRUE, '2023-10-25', '2023-10-26'),
(68, 18, TRUE, '2023-08-29', '2023-08-30'),
(69, 7, TRUE, '2023-03-25', '2023-03-26'),
(70, 12, TRUE, '2023-06-16', '2023-06-16'),
(71, 9, TRUE, '2023-11-11', '2023-11-12'),
(72, 31, TRUE, '2023-02-25', '2023-02-26'),
(73, 13, TRUE, '2023-09-26', '2023-09-27'),
(74, 5, TRUE, '2023-05-12', '2023-05-13'),
(75, 26, TRUE, '2023-07-04', '2023-07-04'),
(76, 17, TRUE, '2023-08-05', '2023-08-06'),
(77, 32, TRUE, '2023-02-06', '2023-02-07'),
(78, 4, TRUE, '2023-04-13', '2023-04-14'),
(79, 19, TRUE, '2023-03-18', '2023-03-19'),
(80, 29, TRUE, '2023-06-05', '2023-06-06'),
(81, 15, TRUE, '2023-09-07', '2023-09-08'),
(82, 33, TRUE, '2023-07-08', '2023-07-09'),
(83, 27, TRUE, '2023-03-10', '2023-03-11'),
(84, 45, TRUE, '2023-06-22', '2023-06-23'),
(85, 16, TRUE, '2023-05-17', '2023-05-18'),
(86, 36, TRUE, '2023-10-28', '2023-10-29'),
(87, 48, TRUE, '2023-11-02', '2023-11-03'),
(88, 43, TRUE, '2023-08-11', '2023-08-11'),
(89, 6, TRUE, '2023-09-22', '2023-09-23'),
(90, 37, TRUE, '2023-07-23', '2023-07-24'),
(91, 44, TRUE, '2023-11-09', '2023-11-10'),
(92, 42, TRUE, '2023-10-12', '2023-10-13'),
(93, 50, TRUE, '2023-06-25', '2023-06-25'),
(94, 38, TRUE, '2023-09-17', '2023-09-18'),
(95, 55, TRUE, '2023-07-01', '2023-07-02'),
(96, 14, TRUE, '2023-11-04', '2023-11-05'),
(97, 41, TRUE, '2023-10-03', '2023-10-04'),
(98, 58, TRUE, '2023-03-14', '2023-03-15'),
(99, 53, TRUE, '2023-04-08', '2023-04-09'),
(100, 59, TRUE, '2023-05-11', '2023-05-12'),
(101, 1, TRUE, '2023-04-15', '2023-04-16'),
(102, 2, TRUE, '2023-03-10', '2023-03-11'),
(103, 3, TRUE, '2023-06-05', '2023-06-06'),
(104, 4, TRUE, '2023-07-22', '2023-07-22'),
(105, 2, TRUE, '2023-08-30', '2023-08-31'),
(106, 1, TRUE, '2023-09-14', '2023-09-15'),
(107, 3, TRUE, '2023-02-20', '2023-02-21'),
(108, 4, TRUE, '2023-04-11', '2023-04-12'),
(109, 1, TRUE, '2023-05-13', '2023-05-14'),
(110, 2, TRUE, '2023-03-25', '2023-03-26'),
(111, 3, TRUE, '2023-07-19', '2023-07-20'),
(112, 4, TRUE, '2023-09-05', '2023-09-06'),
(113, 2, TRUE, '2023-08-08', '2023-08-09'),
(114, 1, TRUE, '2023-10-17', '2023-10-18'),
(115, 3, TRUE, '2023-05-29', '2023-05-30'),
(116, 4, TRUE, '2023-11-09', '2023-11-10'),
(117, 1, TRUE, '2023-06-23', '2023-06-24'),
(118, 2, TRUE, '2023-07-17', '2023-07-18'),
(119, 3, TRUE, '2023-04-09', '2023-04-10'),
(120, 4, TRUE, '2023-08-15', '2023-08-16'),
(121, 1, TRUE, '2023-09-11', '2023-09-12'),
(122, 2, TRUE, '2023-02-28', '2023-03-01'),
(123, 3, TRUE, '2023-04-24', '2023-04-25'),
(124, 4, TRUE, '2023-06-07', '2023-06-08'),
(125, 1, TRUE, '2023-05-19', '2023-05-20'),
(126, 2, TRUE, '2023-09-28', '2023-09-29'),
(127, 3, TRUE, '2023-07-03', '2023-07-04'),
(128, 4, TRUE, '2023-08-21', '2023-08-22'),
(129, 2, TRUE, '2023-11-12', '2023-11-13'),
(130, 1, TRUE, '2023-05-04', '2023-05-05'),
(131, 3, TRUE, '2023-10-24', '2023-10-25'),
(132, 4, TRUE, '2023-09-06', '2023-09-07'),
(133, 1, TRUE, '2023-02-07', '2023-02-08'),
(134, 2, TRUE, '2023-06-27', '2023-06-28'),
(135, 3, TRUE, '2023-03-29', '2023-03-30'),
(136, 4, TRUE, '2023-10-04', '2023-10-05'),
(137, 1, TRUE, '2023-08-14', '2023-08-15'),
(138, 2, TRUE, '2023-09-03', '2023-09-04'),
(139, 3, TRUE, '2023-05-11', '2023-05-12'),
(140, 4, TRUE, '2023-07-13', '2023-07-14'),
(141, 1, TRUE, '2023-10-19', '2023-10-20'),
(142, 2, TRUE, '2023-06-11', '2023-06-12'),
(143, 3, TRUE, '2023-08-31', '2023-09-01'),
(144, 4, TRUE, '2023-07-24', '2023-07-25'),
(145, 1, TRUE, '2023-09-18', '2023-09-19'),
(146, 2, TRUE, '2023-04-30', '2023-05-01'),
(147, 3, TRUE, '2023-08-05', '2023-08-06'),
(148, 4, TRUE, '2023-06-14', '2023-06-15'),
(149, 1, TRUE, '2023-05-21', '2023-05-22'),
(150, 2, TRUE, '2023-10-08', '2023-10-09');

`;

export const SUKIENYEUTHICHSampleData = async () => {
  try{
    await db.sequelize.query(sqlScript, {raw: true});
    console.log('Sample data imported successfully!');
  } catch (error){
    console.error('Error importing sample data:', error);
  }
}