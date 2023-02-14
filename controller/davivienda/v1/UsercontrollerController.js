
/**
 * @description :: exports API action methods
 */
const User = require('../../../model/user');
const userSchemaKey = require('../../../utils/validation/userValidation');
const validation = require('../../../utils/validateRequest');
const dbService = require('../../../utils/dbService');
const ObjectId = require('mongodb').ObjectId;
const auth = require('../../../services/auth');
const deleteDependentService = require('../../../utils/deleteDependent');
const utils = require('../../../utils/common');
/**
 * @description : delete document of User from table.
 * @param {Object} req : request including id as req param.
 * @param {Object} res : response contains deleted document.
 * @return {Object} : deleted User. {status, message, data}
 */
const deleteUser = async (req,res) => {
  try {
    if (!req.params.id){
      return res.badRequest({ message : 'Insufficient request parameters! id is required.' });
    }
    const query = {
      _id: {
        $eq: req.params.id,
        $ne: req.user.id
      }
    };
    let deletedUser;
    if (req.body.isWarning) { 
      deletedUser = await deleteDependentService.countUser(query);
    } else {
      deletedUser = await deleteDependentService.deleteUser(query);
    }
    if (!deletedUser){
      return res.recordNotFound();
    }
    return res.success({ data :deletedUser });
  }
  catch (error){
    return res.internalServerError({ message:error.message }); 
  }
};  
/** 
 * @description : 
 * @param {Object} req : request for updateUser
 * @param {Object} res : response for updateUser
 * @return {Object} : response for updateUser
 */
const updateUser = async (req, res) => {
  try {
    let data = req.body;
    let validateRequest = validation.validateParamsWithJoi(
      data,
      userSchemaKey.updateSchemaKeys
    );
    if (!validateRequest.isValid) {
      return res.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
    }
    delete data.password;
    delete data.createdAt;
    delete data.updatedAt;
    if (data.id) delete data.id;
    let result = await dbService.updateOne(User,{ _id:req.user.id },data,{ new:true });
    if (!result){
      return res.recordNotFound();
    }            
    return res.success({ data :result });
  } catch (error){
    if (error.name === 'ValidationError'){
      return res.validationError({ message : `Invalid Data, Validation Failed at ${ error.message}` });
    }
    if (error.code && error.code === 11000){
      return res.validationError({ message : 'Data duplication found.' });
    }
    return res.internalServerError({ message:error.message });
  }
};    
/**
 * @description : create document of User in mongodb collection.
 * @param {Object} req : request including body for creating document.
 * @param {Object} res : response of created document
 * @return {Object} : created User. {status, message, data}
 */ 
const addUser = async (req, res) => {
  try {
    let dataToCreate = { ...req.body || {} };
    let validateRequest = validation.validateParamsWithJoi(
      dataToCreate,
      userSchemaKey.schemaKeys);
    if (!validateRequest.isValid) {
      return res.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
    }
    dataToCreate.addedBy = req.user.id;
    dataToCreate.token = req.headers.authorization.replace('Bearer ', '') || req.cookies.token.replace('Bearer ', '');
    dataToCreate = new User(dataToCreate);
    let createdUser = await dbService.create(User,dataToCreate);
    return res.success({ data : createdUser });
  } catch (error) {
    return res.internalServerError({ message:error.message }); 
  }
};
/**
 * @description : find document of User from table by id;
 * @param {Object} req : request including id in request params.
 * @param {Object} res : response contains document retrieved from table.
 * @return {Object} : found User. {status, message, data}
 */
const getUser = async (req,res) => {
  try {
    let query = {};
    if (!ObjectId.isValid(req.params.id)) {
      return res.validationError({ message : 'invalid objectId.' });
    }
    query._id = req.params.id;
    let options = {};
    let foundUser = await dbService.findOne(User,query, options);
    if (!foundUser){
      return res.recordNotFound();
    }
    return res.success({ data :foundUser });
  }
  catch (error){
    return res.internalServerError({ message:error.message });
  }
};  

/**
 * @description : find all documents of User from collection based on query and options.
 * @param {Object} req : request including option and query. {query, options : {page, limit, pagination, populate}, isCountOnly}
 * @param {Object} res : response contains data found from collection.
 * @return {Object} : found User(s). {status, message, data}
 */
const findAllUser = async (req,res) => {
  try {
    let options = {};
    let query = {};
    let validateRequest = validation.validateFilterWithJoi(
      req.body,
      userSchemaKey.findFilterKeys,
      User.schema.obj
    );
    console.log(validateRequest)
    if (!validateRequest.isValid) {
      return res.validationError({ message: `${validateRequest.message}` });
    }
    if (typeof req.body.query === 'object' && req.body.query !== null) {
      query = { ...req.body.query };
    } 
    query._id = { $ne: req.user.id };
    if (req.body && req.body.query && req.body.query._id) {
      query._id.$in = [req.body.query._id];
    }
    if (req.body.isCountOnly){
      let totalRecords = await dbService.count(User, query);
      return res.success({ data: { totalRecords } });
    }
    if (req.body && typeof req.body.options === 'object' && req.body.options !== null) {
      options = { ...req.body.options };
    }
    let foundUsers = await dbService.paginate( User,query,options);
    if (!foundUsers || !foundUsers.data || !foundUsers.data.length){
      return res.recordNotFound(); 
    }
    return res.success({ data :foundUsers });
  } catch (error){
    return res.internalServerError({ message:error.message });
  }
};

module.exports = {
  deleteUser,
  updateUser,
  addUser,
  getUser,
  findAllUser,
};
