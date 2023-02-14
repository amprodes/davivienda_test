/**
 * userRoleRoutes.js
 * @description :: CRUD API routes for userRole
 */

const express = require('express');
const router = express.Router();
const userRoleController = require('../../../controller/davivienda/v1/userRoleController');
const { PLATFORM } =  require('../../../constants/authConstant'); 
const auth = require('../../../middleware/auth');
const checkRolePermission = require('../../../middleware/checkRolePermission');

router.route('/davivienda/api/v1/userrole/create').post(auth(PLATFORM.DAVIVIENDA),checkRolePermission,userRoleController.addUserRole);
router.route('/davivienda/api/v1/userrole/addBulk').post(auth(PLATFORM.DAVIVIENDA),checkRolePermission,userRoleController.bulkInsertUserRole);
router.route('/davivienda/api/v1/userrole/list').post(auth(PLATFORM.DAVIVIENDA),checkRolePermission,userRoleController.findAllUserRole);
router.route('/davivienda/api/v1/userrole/count').post(auth(PLATFORM.DAVIVIENDA),checkRolePermission,userRoleController.getUserRoleCount);
router.route('/davivienda/api/v1/userrole/updateBulk').put(auth(PLATFORM.DAVIVIENDA),checkRolePermission,userRoleController.bulkUpdateUserRole);
router.route('/davivienda/api/v1/userrole/softDeleteMany').put(auth(PLATFORM.DAVIVIENDA),checkRolePermission,userRoleController.softDeleteManyUserRole);
router.route('/davivienda/api/v1/userrole/deleteMany').post(auth(PLATFORM.DAVIVIENDA),checkRolePermission,userRoleController.deleteManyUserRole);
router.route('/davivienda/api/v1/userrole/softDelete/:id').put(auth(PLATFORM.DAVIVIENDA),checkRolePermission,userRoleController.softDeleteUserRole);
router.route('/davivienda/api/v1/userrole/partial-update/:id').put(auth(PLATFORM.DAVIVIENDA),checkRolePermission,userRoleController.partialUpdateUserRole);
router.route('/davivienda/api/v1/userrole/update/:id').put(auth(PLATFORM.DAVIVIENDA),checkRolePermission,userRoleController.updateUserRole);    
router.route('/davivienda/api/v1/userrole/:id').get(auth(PLATFORM.DAVIVIENDA),checkRolePermission,userRoleController.getUserRole);
router.route('/davivienda/api/v1/userrole/delete/:id').delete(auth(PLATFORM.DAVIVIENDA),checkRolePermission,userRoleController.deleteUserRole);

module.exports = router;
