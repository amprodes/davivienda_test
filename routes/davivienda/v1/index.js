/**
 * index.js
 * @description :: index route file of davivienda platform.
 */

const express =  require('express');
const router =  express.Router();
router.use('/davivienda/auth',require('./auth'));
router.use('/api/v1/user',require('./auth'));
router.use(require('./userRoutes'));
router.use(require('./roleRoutes'));
router.use(require('./projectRouteRoutes'));
router.use(require('./routeRoleRoutes'));
router.use(require('./userRoleRoutes'));
router.use(require('./uploadRoutes'));

module.exports = router;
