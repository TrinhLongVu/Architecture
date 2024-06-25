import _ from 'lodash';

const getInfoData = ({fields = [], object = {}}) => {
    return _.pick(object, fields)
}

const generateOTP = () => {
  let otp = '';
  for (let i = 0; i < 6; i++) {
    otp += Math.floor(Math.random() * 10);
  }
  return otp.padStart(6, '0');
};


export { generateOTP, getInfoData};