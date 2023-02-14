/**
 * projectRouteRoutes.js
 * @description :: CRUD API routes for projectRoute
 */

const express = require('express');
const router = express.Router();
const projectRouteController = require('../../../controller/davivienda/v1/projectRouteController');
const { PLATFORM } =  require('../../../constants/authConstant'); 
const auth = require('../../../middleware/auth');
const checkRolePermission = require('../../../middleware/checkRolePermission');

router.route('/davivienda/api/v1/projectroute/create').post(auth(PLATFORM.DAVIVIENDA),checkRolePermission,projectRouteController.addProjectRoute);
router.route('/davivienda/api/v1/projectroute/addBulk').post(auth(PLATFORM.DAVIVIENDA),checkRolePermission,projectRouteController.bulkInsertProjectRoute);
router.route('/davivienda/api/v1/projectroute/list').post(auth(PLATFORM.DAVIVIENDA),checkRolePermission,projectRouteController.findAllProjectRoute);
router.route('/davivienda/api/v1/projectroute/count').post(auth(PLATFORM.DAVIVIENDA),checkRolePermission,projectRouteController.getProjectRouteCount);
router.route('/davivienda/api/v1/projectroute/updateBulk').put(auth(PLATFORM.DAVIVIENDA),checkRolePermission,projectRouteController.bulkUpdateProjectRoute);
router.route('/davivienda/api/v1/projectroute/softDeleteMany').put(auth(PLATFORM.DAVIVIENDA),checkRolePermission,projectRouteController.softDeleteManyProjectRoute);
router.route('/davivienda/api/v1/projectroute/deleteMany').post(auth(PLATFORM.DAVIVIENDA),checkRolePermission,projectRouteController.deleteManyProjectRoute);
router.route('/davivienda/api/v1/projectroute/softDelete/:id').put(auth(PLATFORM.DAVIVIENDA),checkRolePermission,projectRouteController.softDeleteProjectRoute);
router.route('/davivienda/api/v1/projectroute/partial-update/:id').put(auth(PLATFORM.DAVIVIENDA),checkRolePermission,projectRouteController.partialUpdateProjectRoute);
router.route('/davivienda/api/v1/projectroute/update/:id').put(auth(PLATFORM.DAVIVIENDA),checkRolePermission,projectRouteController.updateProjectRoute);    
router.route('/davivienda/api/v1/projectroute/:id').get(auth(PLATFORM.DAVIVIENDA),checkRolePermission,projectRouteController.getProjectRoute);
router.route('/davivienda/api/v1/projectroute/delete/:id').delete(auth(PLATFORM.DAVIVIENDA),checkRolePermission,projectRouteController.deleteProjectRoute);

module.exports = router;
