/**
 * userRoutes.js
 * @description :: CRUD API routes for user
 */

const express = require('express');
const router = express.Router();
const userController = require('../../../controller/davivienda/v1/userController');
const { PLATFORM } =  require('../../../constants/authConstant'); 
const auth = require('../../../middleware/auth');
const checkRolePermission = require('../../../middleware/checkRolePermission');
const UsercontrollerController = require('../../../controller/davivienda/v1/UsercontrollerController');

router.route('/davivienda/api/v1/user/me').get(auth(PLATFORM.DAVIVIENDA),userController.getLoggedInUserInfo);
router.route('/davivienda/api/v1/user/create').post(auth(PLATFORM.DAVIVIENDA),checkRolePermission,userController.addUser);
router.route('/davivienda/api/v1/user/addBulk').post(auth(PLATFORM.DAVIVIENDA),checkRolePermission,userController.bulkInsertUser);
router.route('/davivienda/api/v1/user/list').post(auth(PLATFORM.DAVIVIENDA),checkRolePermission,userController.findAllUser);
router.route('/davivienda/api/v1/user/count').post(auth(PLATFORM.DAVIVIENDA),checkRolePermission,userController.getUserCount);
router.route('/davivienda/api/v1/user/:id').get(auth(PLATFORM.DAVIVIENDA),checkRolePermission,userController.getUser);
router.route('/davivienda/api/v1/user/update/:id').put(auth(PLATFORM.DAVIVIENDA),checkRolePermission,userController.updateUser);    
router.route('/davivienda/api/v1/user/partial-update/:id').put(auth(PLATFORM.DAVIVIENDA),checkRolePermission,userController.partialUpdateUser);
router.route('/davivienda/api/v1/user/updateBulk').put(auth(PLATFORM.DAVIVIENDA),checkRolePermission,userController.bulkUpdateUser);
router.route('/davivienda/api/v1/user/softDelete/:id').put(auth(PLATFORM.DAVIVIENDA),checkRolePermission,userController.softDeleteUser);
router.route('/davivienda/api/v1/user/softDeleteMany').put(auth(PLATFORM.DAVIVIENDA),checkRolePermission,userController.softDeleteManyUser);
router.route('/davivienda/api/v1/user/delete/:id').delete(auth(PLATFORM.DAVIVIENDA),checkRolePermission,userController.deleteUser);
router.route('/davivienda/api/v1/user/deleteMany').post(auth(PLATFORM.DAVIVIENDA),checkRolePermission,userController.deleteManyUser);
router.route('/davivienda/api/v1/user/change-password').put(auth(PLATFORM.DAVIVIENDA),userController.changePassword);
router.route('/davivienda/api/v1/user/update-profile').put(auth(PLATFORM.DAVIVIENDA),userController.updateProfile);
router.route('/api/v1/user/delete/:id').delete(auth(PLATFORM.DAVIVIENDA), UsercontrollerController.deleteUser);
router.route('/api/v1/user/update/:id').put(auth(PLATFORM.DAVIVIENDA), UsercontrollerController.updateUser);
router.route('/api/v1/user/create').post(auth(PLATFORM.DAVIVIENDA), UsercontrollerController.addUser);
router.route('/api/v1/user/:id').get(auth(PLATFORM.DAVIVIENDA), UsercontrollerController.getUser);
router.route('/api/v1/users').post(auth(PLATFORM.DAVIVIENDA), UsercontrollerController.findAllUser);

module.exports = router;
