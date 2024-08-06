const express = require('express');
const connect_mysql = require('./dbs/mysql.dbs');


app = express();

// connect database
connect_mysql;


//const ThuongHieu = require("./models/thuonghieu.m")
// // Example usage of ThuongHieu model
// const createSample = async () => {
//     try {
//         const id = await ThuongHieu.create({
//             TENTHUONGHIEU: "TOCOTOCO",
//             DIACHI: "227 NGUYEN VAN CU",
//             AVATAR: "https://cellphones.com.vn/sforum/wp-content/uploads/2023/10/avatar-trang-4.jpg"
//         });
//         console.log(`Created record with ID: ${id}`);
//     } catch (err) {
//         console.error('Error creating record:', err);
//     }
// };
// createSample();


// const getSample = async () => {
//     try {
//         const result = await ThuongHieu.getAll()
//         console.log(result)
//     } catch (err) {
//         console.error('Error getting records:', err);
//     }
// }
// getSample()

module.exports = app