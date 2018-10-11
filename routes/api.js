var express = require('express');
var router = express.Router();
var apictrl = require('../controller/apiCtrl');
//部门列表
router.get('/getDepartment', function(req, res, next) {

    apictrl.getDepartment(req,res,next);


});
//提交认证
//1.查询员工表，确保有信息
//2.更新员工表
router.post('/employeeAuth', function(req, res, next) {

    apictrl.employeeAuth(req,res,next);



});
//获取菜单图片和餐食列表
router.get('/getMenuPic', function(req, res, next) {

    apictrl.getMenuPic(req,res,next);
});

//提交点餐信息
//插入订餐表
router.post('/orderFood', function(req, res, next) {

    apictrl.commitFood(req,res,next);

});

//我定的餐
router.get('/myFood', function(req, res, next) {
    apictrl.myfood(req,res,next);
});


module.exports = router;
