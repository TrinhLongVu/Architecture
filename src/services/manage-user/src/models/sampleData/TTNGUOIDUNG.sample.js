import db from '../index.mjs'; // Adjust the path as necessary

export const importUserSampleData = async () => {
  try {
    const sampleData = [
      {
        ID_TTNGUOIDUNG: 1,
        MATKHAU: "123",
        TENDANGNHAP: "Igor",
        AVATAR: "",
        EMAIL: "phasellus.dapibus.quam@yahoo.edu",
        GIOITINH: 0,
        NGAYSINH: "1998-07-18 08:05:11",
        FACEBOOKID: "753DED7B-752D-CDF2-DDCD-7472D74D386C",
        SDT: "059-470-2877",
        TRANGTHAI: "Banned",
        VAITRO: "Brand"
      },
      {
        ID_TTNGUOIDUNG: 2,
        MATKHAU: "123",
        TENDANGNHAP: "Omar",
        AVATAR: "",
        EMAIL: "sed.pharetra@icloud.ca",
        GIOITINH: 0,
        NGAYSINH: "1989-05-26 02:34:10",
        FACEBOOKID: "A6DE9E1D-D8AB-1B90-73ED-A3C751F9B1CD",
        SDT: "025-125-7484",
        TRANGTHAI: "Active",
        VAITRO: "User"
      },
      {
        ID_TTNGUOIDUNG: 3,
        MATKHAU: "123",
        TENDANGNHAP: "Allistair",
        AVATAR: "",
        EMAIL: "non@outlook.edu",
        GIOITINH: 0,
        NGAYSINH: "1990-12-28 21:45:02",
        FACEBOOKID: "11DABFDA-56A5-BC74-4829-3855C7A55AD1",
        SDT: "012-765-8630",
        TRANGTHAI: "Active",
        VAITRO: "Admin"
      },
      {
        ID_TTNGUOIDUNG: 4,
        MATKHAU: "123",
        TENDANGNHAP: "Brenna",
        AVATAR: "",
        EMAIL: "fusce.dolor@hotmail.edu",
        GIOITINH: 1,
        NGAYSINH: "1991-07-27 21:48:04",
        FACEBOOKID: "9423EE44-59E2-2838-4B62-EAA58D3971F3",
        SDT: "081-927-3422",
        TRANGTHAI: "Un-activated",
        VAITRO: "Admin"
      },
      {
        ID_TTNGUOIDUNG: 5,
        MATKHAU: "123",
        TENDANGNHAP: "Nasim",
        AVATAR: "",
        EMAIL: "metus.in@outlook.net",
        GIOITINH: 1,
        NGAYSINH: "1986-09-19 01:08:50",
        FACEBOOKID: "1B898C97-DAD8-C69E-32A2-4ADEF96D4C8F",
        SDT: "099-096-8614",
        TRANGTHAI: "Un-activated",
        VAITRO: "Admin"
      },
      {
        ID_TTNGUOIDUNG: 6,
        MATKHAU: "123",
        TENDANGNHAP: "Adena",
        AVATAR: "",
        EMAIL: "ac.turpis@google.ca",
        GIOITINH: 0,
        NGAYSINH: "2005-09-04 09:58:26",
        FACEBOOKID: "2758DAB0-D5A8-5D71-A407-8431EAA6B95E",
        SDT: "068-531-2832",
        TRANGTHAI: "Active",
        VAITRO: "Brand"
      },
      {
        ID_TTNGUOIDUNG: 7,
        MATKHAU: "123",
        TENDANGNHAP: "Anika",
        AVATAR: "",
        EMAIL: "vel.nisl@icloud.couk",
        GIOITINH: 1,
        NGAYSINH: "1997-06-27 16:50:10",
        FACEBOOKID: "5F850A74-C142-FE92-7666-642382356ABF",
        SDT: "082-764-9047",
        TRANGTHAI: "Banned",
        VAITRO: "User"
      },
      {
        ID_TTNGUOIDUNG: 8,
        MATKHAU: "123",
        TENDANGNHAP: "Ingrid",
        AVATAR: "",
        EMAIL: "ultrices.posuere@google.edu",
        GIOITINH: 0,
        NGAYSINH: "1991-12-30 02:43:39",
        FACEBOOKID: "1CECF194-4734-EC2C-88CD-853F2D65A138",
        SDT: "063-469-3488",
        TRANGTHAI: "Active",
        VAITRO: "Admin"
      },
      {
        ID_TTNGUOIDUNG: 9,
        MATKHAU: "123",
        TENDANGNHAP: "MacKenzie",
        AVATAR: "",
        EMAIL: "sed.pede.nec@yahoo.org",
        GIOITINH: 0,
        NGAYSINH: "2000-10-13 01:34:52",
        FACEBOOKID: "D2CB0BBE-149F-277C-3CD2-3042822DC982",
        SDT: "079-828-3048",
        TRANGTHAI: "Banned",
        VAITRO: "User"
      },
      {
        ID_TTNGUOIDUNG: 10,
        MATKHAU: "123",
        TENDANGNHAP: "Kiara",
        AVATAR: "",
        EMAIL: "tincidunt.congue@protonmail.net",
        GIOITINH: 0,
        NGAYSINH: "1990-01-06 02:15:07",
        FACEBOOKID: "CB94DF9D-48E9-91AD-E1EC-44238E72BDB3",
        SDT: "062-068-8313",
        TRANGTHAI: "Active",
        VAITRO: "User"
      }
    ];

    await db.TTNGUOIDUNG.bulkCreate(sampleData);
    console.log('Sample data imported successfully!');
  } catch (error) {
    console.error('Error importing sample data:', error);
  }
};