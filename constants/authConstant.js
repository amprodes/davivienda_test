/**
 * authConstant.js
 * @description :: constants used in authentication
 */

const JWT = {
  DAVIVIENDA_SECRET:'myjwtdaviviendasecret',
  EXPIRES_IN: 10000
};

const USER_TYPES = { User:1, };

const PLATFORM = { DAVIVIENDA:1, };

let LOGIN_ACCESS = { [USER_TYPES.User]:[PLATFORM.DAVIVIENDA], };

const MAX_LOGIN_RETRY_LIMIT = 3;
const LOGIN_REACTIVE_TIME = 20;   

const FORGOT_PASSWORD_WITH = {
  LINK: {
    email: true,
    sms: false
  },
  EXPIRE_TIME: 120
};

module.exports = {
  JWT,
  USER_TYPES,
  PLATFORM,
  MAX_LOGIN_RETRY_LIMIT,
  LOGIN_REACTIVE_TIME,
  FORGOT_PASSWORD_WITH,
  LOGIN_ACCESS,
};