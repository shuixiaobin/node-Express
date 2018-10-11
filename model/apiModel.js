module.exports = {
    department:'select * from department',
    selectOne:'select * from employee where name=? and departId=?',
    selectFood:'select * from food',
    addorder:'insert into orderfood(employeeId,departId,foodId,drinkId,weekDay) values(?,?,?,?,?)',
    myfood:'select o.drinkId as soup,o.lastModTime as ordertime,o.weekDay as week,f.name as foodname from orderfood as o left join food as f on o.foodId = f.id where o.employeeId=?'
};
