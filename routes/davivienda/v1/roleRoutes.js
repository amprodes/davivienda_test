/**
 * roleRoutes.js
 * @description :: CRUD API routes for role
 */

const express = require('express');
const router = express.Router();
const roleController = require('../../../controller/davivienda/v1/roleController');
const { PLATFORM } =  require('../../../constants/authConstant'); 
const auth = require('../../../middleware/auth');
const checkRolePermission = require('../../../middleware/checkRolePermission');

router.route('/davivienda/api/v1/role/create').post(auth(PLATFORM.DAVIVIENDA),checkRolePermission,roleController.addRole);
router.route('/davivienda/api/v1/role/addBulk').post(auth(PLATFORM.DAVIVIENDA),checkRolePermission,roleController.bulkInsertRole);
router.route('/davivienda/api/v1/role/list').post(auth(PLATFORM.DAVIVIENDA),checkRolePermission,roleController.findAllRole);
router.route('/davivienda/api/v1/role/count').post(auth(PLATFORM.DAVIVIENDA),checkRolePermission,roleController.getRoleCount);
router.route('/davivienda/api/v1/role/updateBulk').put(auth(PLATFORM.DAVIVIENDA),checkRolePermission,roleController.bulkUpdateRole);
router.route('/davivienda/api/v1/role/softDeleteMany').put(auth(PLATFORM.DAVIVIENDA),checkRolePermission,roleController.softDeleteManyRole);
router.route('/davivienda/api/v1/role/deleteMany').post(auth(PLATFORM.DAVIVIENDA),checkRolePermission,roleController.deleteManyRole);
router.route('/davivienda/api/v1/role/softDelete/:id').put(auth(PLATFORM.DAVIVIENDA),checkRolePermission,roleController.softDeleteRole);
router.route('/davivienda/api/v1/role/partial-update/:id').put(auth(PLATFORM.DAVIVIENDA),checkRolePermission,roleController.partialUpdateRole);
router.route('/davivienda/api/v1/role/update/:id').put(auth(PLATFORM.DAVIVIENDA),checkRolePermission,roleController.updateRole);    
router.route('/davivienda/api/v1/role/:id').get(auth(PLATFORM.DAVIVIENDA),checkRolePermission,roleController.getRole);
router.route('/davivienda/api/v1/role/delete/:id').delete(auth(PLATFORM.DAVIVIENDA),checkRolePermission,roleController.deleteRole);

module.exports = router;
