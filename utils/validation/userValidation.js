/**
 * userValidation.js
 * @description :: validate each post and put request as per user model
 */

const joi = require('joi');
const {
  options, isCountOnly, populate, select 
} = require('./commonFilterValidation');
const authConstantDefault = require('../../constants/authConstant');    
const { USER_TYPES } = require('../../constants/authConstant');
const { convertObjectToEnum } = require('../common');   

/** validation keys and properties of user */
exports.schemaKeys = joi.object({
  first_name: joi.string().allow(null).allow(''),
  last_name: joi.string().allow(null).allow(''),
  date_birth: joi.date().options({ convert: true }).allow(null).allow(''),
  address: joi.string().allow(null).allow(''),
  token: joi.string().allow(null).allow(''),
  password: joi.string().allow(null).allow(''),
  phone_mobile: joi.string().allow(null).allow(''),
  email: joi.string().allow(null).allow(''),
  token_type: joi.string().allow(null).allow(''),
  userType: joi.number().allow(0),
  session_active: joi.boolean(),
  isDeleted: joi.boolean(),
  mobileNo: joi.string().allow(null).allow(''),
  resetPasswordLink: joi.object({
    code:joi.string(),
    expireTime:joi.date().options({ convert: true })
  })
}).unknown(true);

/** validation keys and properties of user for updation */
exports.updateSchemaKeys = joi.object({
  first_name: joi.string().allow(null).allow(''),
  last_name: joi.string().allow(null).allow(''),
  date_birth: joi.date().options({ convert: true }).allow(null).allow(''),
  address: joi.string().allow(null).allow(''),
  token: joi.string().allow(null).allow(''),
  password: joi.string().allow(null).allow(''),
  phone_mobile: joi.string().allow(null).allow(''),
  email: joi.string().allow(null).allow(''),
  token_type: joi.string().allow(null).allow(''),
  userType: joi.number().allow(0),
  session_active: joi.boolean(),
  isDeleted: joi.boolean(),
  mobileNo: joi.string().allow(null).allow(''),
  resetPasswordLink: joi.object({
    code:joi.string(),
    expireTime:joi.date().options({ convert: true })
  }),
  _id: joi.string().regex(/^[0-9a-fA-F]{24}$/)
}).unknown(true);

let keys = ['query', 'where'];
/** validation keys and properties of user for filter documents from collection */
exports.findFilterKeys = joi.object({
  options: options,
  ...Object.fromEntries(
    keys.map(key => [key, joi.object({
      first_name: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      last_name: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      date_birth: joi.alternatives().try(joi.array().items(),joi.date().options({ convert: true }),joi.object()),
      address: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      token: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      password: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      phone_mobile: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      email: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      token_type: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      session_active: joi.alternatives().try(joi.array().items(),joi.boolean(),joi.object()),
      isDeleted: joi.alternatives().try(joi.array().items(),joi.boolean(),joi.object()),
      mobileNo: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      id: joi.any(),
      _id: joi.alternatives().try(joi.array().items(),joi.string().regex(/^[0-9a-fA-F]{24}$/),joi.object())
    }).unknown(true),])
  ),
  isCountOnly: isCountOnly,
  populate: joi.array().items(populate),
  select: select
    
}).unknown(true);
