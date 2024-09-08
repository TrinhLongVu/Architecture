import * as voucherUserService from '../services/voucher.s.js';

export const createVoucherUser = async (req, res) => {
  try {
    const voucherUser = await voucherUserService.createVoucherUser(req.body);
    res.status(201).json(voucherUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getAllVoucherUsers = async (req, res) => {
  try {
    const voucherUsers = await voucherUserService.getAllVoucherUsers();
    res.status(200).json(voucherUsers);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getVoucherUserByUserIdController = async (req, res) => {
  try {
    const {idNguoiDung} = req.params;
    const voucherUsers = await voucherUserService.getVoucherUsersByUserId(idNguoiDung);
    res.status(200).json(voucherUsers);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getVoucherUserById = async (req, res) => {
  try {
    const voucherUser = await voucherUserService.getVoucherUserById(req.params.idNguoiDung, req.params.idVoucher);
    if (voucherUser) {
      res.status(200).json(voucherUser);
    } else {
      res.status(404).json({ error: 'Voucher-User relationship not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const updateVoucherUser = async (req, res) => {
  try {
    const voucherUser = await voucherUserService.updateVoucherUser(req.params.idNguoiDung, req.params.idVoucher, req.body);
    if (voucherUser) {
      res.status(200).json(voucherUser);
    } else {
      res.status(404).json({ error: 'Voucher-User relationship not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteVoucherUser = async (req, res) => {
  try {
    const voucherUser = await voucherUserService.deleteVoucherUser(req.params.idNguoiDung, req.params.idVoucher);
    if (voucherUser) {
      res.status(200).send({message: "User's voucher deleted!"});
    } else {
      res.status(404).json({ error: 'Voucher-User relationship not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const spendVoucher = async (req, res) => {
  try {
    const voucherUser = await voucherUserService.spendVoucher(req.params.idNguoiDung, req.params.idVoucher);
    res.status(200).json(voucherUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const updateVoucherStatus = async (req, res) => {
  try {
    const voucherUser = await voucherUserService.updateVoucherStatus(req.params.idNguoiDung, req.params.idVoucher, req.body.expired);
    res.status(200).json(voucherUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


