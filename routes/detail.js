var express = require('express');
var router = express.Router();

//订餐详情页面
router.get('/detail', function(req, res, next) {
    res.render('detail/detail', { title: '一号车订餐管理后台' });
});

//订餐历史页面
router.get('/history', function(req, res, next) {
    res.render('detail/history', { title: '一号车订餐管理后台' });
});

//删除动作
router.get('/deleteFood', function(req, res, next) {


});
module.exports = router;
