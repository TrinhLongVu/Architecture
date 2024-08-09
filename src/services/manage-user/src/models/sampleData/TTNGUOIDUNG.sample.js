import db from '../index.mjs'; // Adjust the path as necessary

const importUserSampleData = async () => {
  try {
    const sampleData = [
      {
        ID_TTNGUOIDUNG: 1,
        MATKHAU: "123",
        TENDANGNHAP: "Cheryl",
        AVATAR: "",
        EMAIL: "nibh.sit@icloud.com",
        GIOITINH: 0,
        NGAYSINH: "2002-06-15 21:36:52",
        FACEBOOKID: "E1565220-D3CE-4CEB-A727-DBDC4C6B92AE"
      },
      {
        ID_TTNGUOIDUNG: 2,
        MATKHAU: "123",
        TENDANGNHAP: "Barclay",
        AVATAR: "",
        EMAIL: "sed.orci.lobortis@protonmail.net",
        GIOITINH: 0,
        NGAYSINH: "1998-01-13 11:01:08",
        FACEBOOKID: "68491217-CA7E-8CBB-1AE1-7D4630CDB2C8"
      },
      {
        ID_TTNGUOIDUNG: 3,
        MATKHAU: "123",
        TENDANGNHAP: "Fritz",
        AVATAR: "",
        EMAIL: "ut@hotmail.couk",
        GIOITINH: 1,
        NGAYSINH: "2002-04-08 02:00:22",
        FACEBOOKID: "87A2F87C-4D7B-770A-A3D2-5DB4B5D1ADAC"
      },
      {
        ID_TTNGUOIDUNG: 4,
        MATKHAU: "123",
        TENDANGNHAP: "Lester",
        AVATAR: "",
        EMAIL: "penatibus@google.couk",
        GIOITINH: 1,
        NGAYSINH: "2006-01-17 22:16:53",
        FACEBOOKID: "5ED9E42D-AA6B-29DB-3177-91D3743506AA"
      },
      {
        ID_TTNGUOIDUNG: 5,
        MATKHAU: "123",
        TENDANGNHAP: "Moses",
        AVATAR: "",
        EMAIL: "sit.amet@protonmail.net",
        GIOITINH: 1,
        NGAYSINH: "2003-07-10 21:19:55",
        FACEBOOKID: "170F4147-5BAD-9323-C487-8BFA09432671"
      },
      {
        ID_TTNGUOIDUNG: 6,
        MATKHAU: "123",
        TENDANGNHAP: "Mikayla",
        AVATAR: "",
        EMAIL: "id.libero@hotmail.net",
        GIOITINH: 1,
        NGAYSINH: "1992-02-07 15:46:38",
        FACEBOOKID: "E5A27416-CC36-E10C-66A7-6F295ABA5C18"
      },
      {
        ID_TTNGUOIDUNG: 7,
        MATKHAU: "123",
        TENDANGNHAP: "Omar",
        AVATAR: "",
        EMAIL: "cursus@google.edu",
        GIOITINH: 0,
        NGAYSINH: "1990-10-19 20:01:09",
        FACEBOOKID: "252FABE4-08EB-0D44-6934-DA2443966D47"
      },
      {
        ID_TTNGUOIDUNG: 8,
        MATKHAU: "123",
        TENDANGNHAP: "Ignacia",
        AVATAR: "",
        EMAIL: "luctus.curabitur.egestas@google.com",
        GIOITINH: 1,
        NGAYSINH: "1992-07-08 14:36:40",
        FACEBOOKID: "5D47371D-230C-8098-87C2-39E53C9125EA"
      },
      {
        ID_TTNGUOIDUNG: 9,
        MATKHAU: "123",
        TENDANGNHAP: "Howard",
        AVATAR: "",
        EMAIL: "cras@hotmail.com",
        GIOITINH: 0,
        NGAYSINH: "2006-09-18 16:45:02",
        FACEBOOKID: "53A70449-C4E9-EE83-6B14-C810509727A9"
      },
      {
        ID_TTNGUOIDUNG: 10,
        MATKHAU: "123",
        TENDANGNHAP: "Zenia",
        AVATAR: "",
        EMAIL: "vulputate@outlook.couk",
        GIOITINH: 1,
        NGAYSINH: "1999-07-30 08:50:29",
        FACEBOOKID: "E7EB9941-E335-FED5-CCE3-4E8896378953"
      }
    ];

    await db.TTNGUOIDUNG.bulkCreate(sampleData);
    console.log('Sample data imported successfully!');
  } catch (error) {
    console.error('Error importing sample data:', error);
  }
};

export {importUserSampleData};