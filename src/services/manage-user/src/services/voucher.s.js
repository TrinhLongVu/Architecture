import { where } from 'sequelize';
import db from '../models/index.mjs';
import axios from 'axios';

export const createVoucherUser = async (data) => {
  const {ID_NGUOIDUNG, ID_VOUCHER, SOLUOTDUNG} = {...data}
  let voucherUser = await db.VOUCHERNGUOIDUNG.findOne({
    where:{
      ID_NGUOIDUNG: ID_NGUOIDUNG,
      ID_VOUCHER: ID_VOUCHER
    }
  })
  if(voucherUser){
    if(voucherUser.TRANGTHAI === "Usable"){
      voucherUser.SOLUOTDUNG = parseInt(voucherUser.SOLUOTDUNG, 10) + parseInt(SOLUOTDUNG, 10);
      voucherUser.save();
      return voucherUser
    }else{
      throw new Error('Voucher is unusable');
    }
  }else{
    return db.VOUCHERNGUOIDUNG.create(data);
  }
};

export const getAllVoucherUsers = async () => {
  return await db.VOUCHERNGUOIDUNG.findAll();
};

export const getVoucherUsersByUserId = async (idNguoiDung) => {
  if (!idNguoiDung) {
    throw new Error('User ID is required');
  }

  try {
    const usersVoucher = await db.VOUCHERNGUOIDUNG.findAll({
      where: {
        ID_NGUOIDUNG: idNguoiDung
      }
    });

    if (!usersVoucher || usersVoucher.length === 0) {
      return [];
    }

    const voucherData = await Promise.all(usersVoucher.map(async (voucher) => {
      try {
        const response = await axios.get(`http://nginx/brand/api/v1/voucher/voucherId/${voucher.ID_VOUCHER}`, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const data = response.data;
        return {
          ...voucher.dataValues,
          voucherData: data
        };
      } catch (error) {
        console.error(`Failed to fetch voucher data for ID ${voucher.ID_VOUCHER}:`, error);
        return {
          ...voucher.dataValues,
          voucherData: null
        };
      }
    }));

    return voucherData;
  } catch (error) {
    console.error('Failed to fetch user vouchers:', error);
    throw new Error('Failed to fetch user vouchers');
  }
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
