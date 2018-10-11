module.exports = {
    select:'select * from food',
    selectOne:'select * from food where id=?',
    add:'insert into food(name) values(?)',
    edit:'update food set name=? where id=?',
    del:'delete from food where id=?',
    orderdetail:'select d.name as departmentName, e.name as employeeName, o.foodId, o.drinkId, o.weekDay' +
    ' FROM orderfood as o INNER JOIN department as d ON d.id = o.departId ' +
    'INNER JOIN employee as e ON e.id = o.employeeId ' +
    'WHERE o.weekDay=?'
};