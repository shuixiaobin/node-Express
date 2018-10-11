var express = require('express');
var router = express.Router();
var foodCtrl= require("../controller/foodCtrl");

//列表
router.get('/list', function(req, res, next) {
    // res.render('food/list', { title: '列表' });
    if(req.session.user) {
        foodCtrl.list(req,res,next);
    }else{
        res.redirect('/');
    }
});
//增加
router.get('/add', function(req, res, next) {
    res.render('food/add', { title: '增加' });
});
//增加动作
router.post('/addAction', function(req, res, next) {
    if(req.session.user) {
        foodCtrl.add(req,res,next);
    }else{
        res.redirect('/');
    }
});
//修改
router.get('/edit', function(req, res, next) {
    // res.render('food/edit', { title: '修改' });
    if(req.session.user) {
        foodCtrl.editPage(req,res,next);
    }else{
        res.redirect('/');
    }
});
//修改动作
router.post('/editAction', function(req, res, next) {
    if(req.session.user) {
        foodCtrl.edit(req,res,next);
    }else{
        res.redirect('/');
    }
});
//删除动作
router.get('/delAction', function(req, res, next) {
     if(req.session.user) {
        foodCtrl.del(req,res,next);
    }else{
        res.redirect('/');
    }
});
router.get('/detailpage', function(req, res, next) {
    res.render('detail/detail', { title: '订餐统计'});
});
router.get('/orderdetail', function(req, res, next) {
    if(req.session.user) {
        foodCtrl.orderdetail(req,res,next);
    }else{
        res.redirect('/');
    }
});
module.exports = router;
