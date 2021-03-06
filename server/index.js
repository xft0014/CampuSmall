var express = require("express");
var cors = require("cors");
var cookieParser = require("cookie-parser");

var app = express();

// 使用 中间件;
app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: true,
    credentials: true,
    maxAge: "1728000",
  })
);

app.use("/web/api", require("./routes/web"));
app.use("/web/admin", require("./routes/admin"));

// 静态文件托管
app.use("/public", express.static(__dirname + "/DB/webpublic"));
app.use("/post", express.static(__dirname + "/DB/postgoods"));
app.use("/certification", express.static(__dirname + "/DB/certification"));
app.use("/share", express.static(__dirname + "/DB/share"));

app.listen(3000, function () {
  console.log("启动成功：http://localhost:3000");
});
