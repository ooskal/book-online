//my sql 연동정보와 테이블 정보를담음
const Sequelize = require("sequelize");

const sequelize = new Sequelize("book", "root", "753698", {
  dialect: "mysql",
  host: "127.0.0.1",
  port: "3306",
});

//테이블 정의
//책

module.exports = {};
