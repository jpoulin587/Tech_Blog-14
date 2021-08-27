const router = require('express').Router();
const userRoutes = require('./userRoutes');
const articleRoutes = require('./articleRoutes');

router.use('/users', userRoutes);
router.use('/dashboard', articleRoutes);

module.exports = router;
