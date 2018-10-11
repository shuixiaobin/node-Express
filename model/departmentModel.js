module.exports = {
    select:'select * from department',
    selectOne:'select * from department where id=?',
    add:'insert into department(name) values(?)',
    edit:'update department set name=? where id=?',
    del:'delete from department where id=?'
};