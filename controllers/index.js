const router = require('express').Router();
const userRoutes = require('./userRoutes');

//const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

router.use('/', homeRoutes);
router.use('/users', userRoutes);
//router.use('/api', apiRoutes);

module.exports = router;
