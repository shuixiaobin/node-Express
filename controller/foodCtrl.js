var pool = require('../conf/conn');
var foodModel = require('../model/foodModel');

module.exports = {
    del:function(req,res){

        pool.getConnection(function(err,connection){

            var param = req.query;
            var id = param.id;

            connection.query(foodModel.del,[id],function(err,result){
                console.log(result);
                if(result){
                    //成功
                    res.json({
                        code:200,
                        msg:'success'
                    });

                }else{
                    res.json({
                        code:'-1',
                        msg:'error'
                    });
                }
                connection.release();//释放连接
            });
        });
    },
    editPage:function(req,res){
        pool.getConnection(function(err,connection){
            var id = req.query.id;
            connection.query(foodModel.selectOne,[id],function(err,result){
                console.log(result);
                if(result && result[0]){
                    res.render('food/edit', { title: '编辑餐品',detail:result[0]});

                }else{
                    res.json({
                        code:'-1',
                        msg:'error'
                    });
                }
                connection.release();//释放连接
            });
        });
    },
    edit:function(req,res){
        pool.getConnection(function(err,connection){

            var param = req.body;
            var id = param.id;
            var name = param.name;

            connection.query(foodModel.edit,[name,id],function(err,result){
                console.log(result);
                if(result){
                    //成功
                    res.json({
                        code:200,
                        msg:'success'
                    });

                }else{
                    res.json({
                        code:'-1',
                        msg:'error'
                    });
                }
                connection.release();//释放连接
            });
        });
    },
    add:function(req,res){

        pool.getConnection(function(err,connection){

            var param = req.body;
            var foodval = param.foodval;

            connection.query(foodModel.add,[foodval],function(err,result){
                console.log(result.insertId);
                if(result.insertId>0){
                   //成功插入
                    res.json({
                        code:200,
                        msg:'success'
                    });

                }else{
                    res.json({
                        code:'-1',
                        msg:'error'
                    });
                }
                connection.release();//释放连接
            });
        });
    },
    list:function(req,res){

        pool.getConnection(function(err,connection){

            connection.query(foodModel.select,[],function(err,result){
                console.log(result);
                if(result && result[0]){
                    res.render('food/list', { title: '餐品列表',list:result});

                }else{
                    res.json({
                        code:'-1',
                        msg:'error'
                    });
                }
                connection.release();//释放连接
            });
        });
    },

    orderdetail:function(req,res){
        pool.getConnection(function(err,connection){

            var week = req.query.week;
            connection.query(foodModel.orderdetail,[week],function(err,result){
                console.log(result);
                if(result && result[0]){

                    res.json({ list:result});

                }else{
                    res.json({
                        code:'-1',
                        msg:'error'
                    });
                }
                connection.release();//释放连接
            });
        });
    }
};