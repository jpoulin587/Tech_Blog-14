const router = require('express').Router();
const { Article, Comment, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    const articleData = await Article.findAll({
      include: [
        {
          model: User,
          attributes: ['email'],
        },
      ],
    });
    const articles = articleData.map((article) => article.get(
      {plain: true}));

    res.render('homepage',{
      articles,
      // logged_in: req.session.logged_in
    });

    // res.json(articleData);
  } catch(err) {
    res.json(err);
  }
});

router.get('/article/:id', async (req, res) => {
  try{
    const articleData = await Article.findOne({where: {id: req.params.id},
      include: [{model: Comment }]
    });
    // console.log(articleData);
    const article = articleData.get({ plain: true });

    res.render('article', {
      ...article,
      // logged_in: req.session.logged_in

    });
    // res.json(articleData)
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/dashboard', withAuth, async (req,res) => {
  try {
    const userData = await User.findOne({where: {id: req.session.user_id,},
      attributes: {exclude: ['password']},
      include: [{model: Article}],
    });

    const user = userData.get({ plain: true });

    res.render('dashboard', {
      ...user,
      logged_in: true
    });

   // res.json(userData);
  } catch (err) {
    // res.render('dashboard');
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }

  res.render('login');
});



// router.get('/login', async (req, res) => {
//   // console.log('connected');
//   try {
//     res.render('login');
//   }catch (err) {
//     res.status(500).json(err);
//   }
// });






module.exports = router;