/**
 * routeRoleRoutes.js
 * @description :: CRUD API routes for routeRole
 */

const express = require('express');
const router = express.Router();
const routeRoleController = require('../../../controller/davivienda/v1/routeRoleController');
const { PLATFORM } =  require('../../../constants/authConstant'); 
const auth = require('../../../middleware/auth');
const checkRolePermission = require('../../../middleware/checkRolePermission');

router.route('/davivienda/api/v1/routerole/create').post(auth(PLATFORM.DAVIVIENDA),checkRolePermission,routeRoleController.addRouteRole);
router.route('/davivienda/api/v1/routerole/addBulk').post(auth(PLATFORM.DAVIVIENDA),checkRolePermission,routeRoleController.bulkInsertRouteRole);
router.route('/davivienda/api/v1/routerole/list').post(auth(PLATFORM.DAVIVIENDA),checkRolePermission,routeRoleController.findAllRouteRole);
router.route('/davivienda/api/v1/routerole/count').post(auth(PLATFORM.DAVIVIENDA),checkRolePermission,routeRoleController.getRouteRoleCount);
router.route('/davivienda/api/v1/routerole/updateBulk').put(auth(PLATFORM.DAVIVIENDA),checkRolePermission,routeRoleController.bulkUpdateRouteRole);
router.route('/davivienda/api/v1/routerole/softDeleteMany').put(auth(PLATFORM.DAVIVIENDA),checkRolePermission,routeRoleController.softDeleteManyRouteRole);
router.route('/davivienda/api/v1/routerole/deleteMany').post(auth(PLATFORM.DAVIVIENDA),checkRolePermission,routeRoleController.deleteManyRouteRole);
router.route('/davivienda/api/v1/routerole/softDelete/:id').put(auth(PLATFORM.DAVIVIENDA),checkRolePermission,routeRoleController.softDeleteRouteRole);
router.route('/davivienda/api/v1/routerole/partial-update/:id').put(auth(PLATFORM.DAVIVIENDA),checkRolePermission,routeRoleController.partialUpdateRouteRole);
router.route('/davivienda/api/v1/routerole/update/:id').put(auth(PLATFORM.DAVIVIENDA),checkRolePermission,routeRoleController.updateRouteRole);    
router.route('/davivienda/api/v1/routerole/:id').get(auth(PLATFORM.DAVIVIENDA),checkRolePermission,routeRoleController.getRouteRole);
router.route('/davivienda/api/v1/routerole/delete/:id').delete(auth(PLATFORM.DAVIVIENDA),checkRolePermission,routeRoleController.deleteRouteRole);

module.exports = router;
