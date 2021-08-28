const router = require('express').Router();
const userRoutes = require('./userRoutes');
const articleRoutes = require('./articleRoutes');
//const commentRoutes = require('./commentRoutes');

router.use('/users', userRoutes);
router.use('/dashboard', articleRoutes);
//router.use('/article', commentRoutes);

module.exports = router;
