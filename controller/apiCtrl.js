var pool = require('../conf/conn');
var apimodel = require('../model/apiModel');
var fs = require('fs');

module.exports = {
    getDepartment: function (req, res) {

        pool.getConnection(function (err, connection) {

            connection.query(apimodel.department, [], function (err, result) {
                console.log(result);
                if (result && result[0]) {
                    res.json({list: result});

                } else {
                    res.json({
                        code: '-1',
                        msg: 'error'
                    });
                }
                connection.release();//释放连接
            });
        });
    },
    employeeAuth: function (req, res) {
        pool.getConnection(function (err, connection) {
            var employeename = req.body.employeename;
            var departId = req.body.departmentId;
            console.log(employeename);
            console.log(departId);
            connection.query(apimodel.selectOne, [employeename, departId], function (err, result) {

                if (result && result[0]) {
                    res.json({code: 200, msg: "success", employeeId: result[0]['id']});

                } else {
                    res.json({
                        code: '-1',
                        msg: 'error'
                    });
                }
                connection.release();//释放连接
            })
        })
    },
    getMenuPic: function (req, res) {
        pool.getConnection(function (err, connection) {

            connection.query(apimodel.selectFood, [], function (err, result) {
                console.log(result);
                if (result && result[0]) {
                    //读取图片
                    fs.readFile('../public/upload.txt', 'utf8', function (err, data) {
                        console.log(data);
                        var path = ""
                        if (err) {
                            path = ''
                        } else {
                            path = data;
                        }
                        res.json({foodList: result, picUrl: path});
                    });
                    // res.render('employee/edit', { title: '餐品列表',detail:result});

                } else {
                    res.json({
                        code: '-1',
                        msg: 'error'
                    });
                }
                connection.release();//释放连接
            });
        });
    },
    commitFood: function (req, res) {
        pool.getConnection(function (err, connection) {
            var food = JSON.parse(req.body.food);
            var departId = JSON.parse(req.body.departId);
            var employeeId = JSON.parse(req.body.employeeId);
            console.log(food);
            var flag = true;
            for (var key in food) {
                connection.query(apimodel.addorder, [employeeId, departId, food[key]['food'], food[key]['soup'], key], function (err, result) {
                    console.log(result);
                    if (!result) {
                        flag = false;
                    }
                });
            }
            if(flag){
                res.json({code:200,msg:"success"});
            }

        })
    },
    myfood:function (req, res) {
        pool.getConnection(function (err, connection) {
            var employeeid = req.query.employeeid;
            connection.query(apimodel.myfood, [employeeid], function (err, result) {
                console.log(result);
                if(result){
                    res.json({code:200,msg:'success',list:result});
                }


                connection.release();//释放连接
            });
        });
    }
};
