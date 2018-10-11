var express = require('express');
var router = express.Router();
var employeectrl = require('../controller/employeeCtrl');
//列表
router.get('/list', function(req, res, next) {
    //res.render('employee/list', { title: '列表' });
    if(req.session.user){
        employeectrl.list(req,res,next);
    }else{
        res.redirect('/');
    }

});
//增加
router.get('/add', function(req, res, next) {
    if(req.session.user) {
        res.render('employee/add', {title: '增加'});
    }else{
        res.redirect('/');
    }
});
//增加动作
router.post('/addAction', function(req, res, next) {
    if(req.session.user) {
        employeectrl.add(req,res,next);
    }else{
        res.redirect('/');
    }
});
//修改
router.get('/edit', function(req, res, next) {
    //res.render('employee/edit', { title: '修改' });
    if(req.session.user) {
        employeectrl.editPage(req,res,next);
    }else{
        res.redirect('/');
    }
});
//修改动作
router.post('/editAction', function(req, res, next) {
    if(req.session.user) {
        employeectrl.edit(req,res,next);
    }else{
        res.redirect('/');
    }
});
//删除动作
router.get('/delAction', function(req, res, next) {
    if(req.session.user) {
        employeectrl.del(req,res,next);
    }else{
        res.redirect('/');
    }
});


module.exports = router;
