import { where } from 'sequelize';
import db from '../models/index.mjs';

export const createVoucherUser = async (data) => {
  return await db.VOUCHERNGUOIDUNG.create(data);
};

export const getAllVoucherUsers = async () => {
  return await db.VOUCHERNGUOIDUNG.findAll();
};

export const getVoucherUsersByUserId = async (idNguoiDung) => {
  return await db.VOUCHERNGUOIDUNG.findAll({
    where:{
      ID_NGUOIDUNG: idNguoiDung
    }
  });
};

export const getVoucherUserById = async (idNguoiDung, idVoucher) => {
  return await db.VOUCHERNGUOIDUNG.findOne({ where: { ID_NGUOIDUNG: idNguoiDung, ID_VOUCHER: idVoucher } });
};

export const updateVoucherUser = async (idNguoiDung, idVoucher, data) => {
  const voucherUser = await db.VOUCHERNGUOIDUNG.findOne({ where: { ID_NGUOIDUNG: idNguoiDung, ID_VOUCHER: idVoucher } });
  if (voucherUser) {
    return await voucherUser.update(data);
  }
  return null;
};

export const deleteVoucherUser = async (idNguoiDung, idVoucher) => {
  const voucherUser = await db.VOUCHERNGUOIDUNG.findOne({ where: { ID_NGUOIDUNG: idNguoiDung, ID_VOUCHER: idVoucher } });
  if (voucherUser) {
    await voucherUser.destroy();
    return voucherUser;
  }
  return null;
};

export const spendVoucher = async (idNguoiDung, idVoucher) => {
  const voucherUser = await db.VOUCHERNGUOIDUNG.findOne({ where: { ID_NGUOIDUNG: idNguoiDung, ID_VOUCHER: idVoucher } });
  if (voucherUser) {
    if (voucherUser.TRANGTHAI === 'Unusable') {
      throw new Error('Voucher is unusable');
    }
    if (voucherUser.SOLUOTDUNG > 0) {
      voucherUser.SOLUOTDUNG -= 1;
      if (voucherUser.SOLUOTDUNG === 0) {
        voucherUser.TRANGTHAI = 'Unusable';
      }
      await voucherUser.save();
      return voucherUser;
    } else {
      throw new Error('No uses left for this voucher');
    }
  }
  throw new Error('Voucher-User relationship not found');
};

export const updateVoucherStatus = async (idNguoiDung, idVoucher, expired) => {
  const voucherUser = await db.VOUCHERNGUOIDUNG.findOne({ where: { ID_NGUOIDUNG: idNguoiDung, ID_VOUCHER: idVoucher } });
  if (voucherUser) {
    voucherUser.TRANGTHAI = expired ? 'Unusable' : 'Usable';
    await voucherUser.save();
    return voucherUser;
  }
  throw new Error('Voucher-User relationship not found');
};
