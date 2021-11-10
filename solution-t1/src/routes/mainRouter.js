const express = require('express');
const MainController = require('../controllers/mainController');

const router = express.Router();

const controller = new MainController();



router.get('/', controller.showIndexPage);

router.post('/add-list', controller.insertList);

router.get('/detail/:category_id', controller.detailPage);

router.post('/add-item/:category_id', controller.addItem);

router.get('/delete/category/:category_id', controller.removeCategory);

module.exports = router;