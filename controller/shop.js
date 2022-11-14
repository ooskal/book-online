const Product = require("../models/product");
const Cart = require("../models/cart");
const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: "127.0.0.1",
  port: "3306",
  user: "root",
  password: "753698",
  database: "book",
});

connection.connect();
//ejs 는 path 도 같이 렌더링 해줘야함, 안그러면 인식못함
exports.getIndex = (req, res) => {
  connection.query("select * from book", (err, result) => {
    if (err) throw err;
    res.render("shop/index", { booklist: result, path: "/index" });
  });
};

exports.getDetail = (req, res) => {
  const prodId = req.params.productId;

  connection.query(
    "select * from book where book.book_num = ?",
    [prodId],
    (err, result) => {
      if (err) throw err;
      res.render("shop/product-detail", {
        product: result,
        path: "/product",
      });
    }
  );
};
