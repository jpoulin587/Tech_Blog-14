const router = require('express').Router();
const { Article, Comment, User } = require('../models');
// const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    console.log('connected');
    try {
        const data = await Article.findAll();
        res.json(data);
    } catch(err) {
        res.json(err);
    }
});

router.get('/login', async (req, res) => {
    console.log('connected');
    try {
        res.render('./login')
    }catch (err) {
        res.status(500).json(err);
    }
});






module.exports = router;