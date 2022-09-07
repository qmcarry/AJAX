const express = require("express");

const app = express();

app.get("/server", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.send("hello ajax");
});
app.all("/server", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.send("hello ajax post");
});
app.all("/json-server", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  //响应一个数据
  const data = {
    name: "atguigu jack",
  };
  const str = JSON.stringify(data);
  res.send(str);
});
//针对浏览器缓存
app.get("/browser", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  //   setTimeout(() => {
  //     res.send("hello ajax cache ie 延迟响应");
  //   }, 3000);
  res.send("hello ajax cache ie 延迟响应");
});
//axios
app.all("/axios-server", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  //响应一个数据
  const data = {
    name: "atguigu jack",
  };
  const str = JSON.stringify(data);
  res.send(str);
});
//fetch
app.all("/fetch-server", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  //响应一个数据
  const data = {
    name: "atguigu jack",
  };
  const str = JSON.stringify(data);
  res.send(str);
});
//jsonp
app.all("/jsonp-server", (req, res) => {
  const data = {
    name: "atguigu",
  };
  const str = JSON.stringify(data);

  // res.send('console.log("jsonp server")');
  res.send(`handle(${str})`);
});
//jsonp实践 用户名检测是否存在
app.all("/check-username", (req, res) => {
  const data = {
    exist: 1,
    msg: "用户名已经存在",
  };
  //将数据转换成json字符串
  const str = JSON.stringify(data);

  // res.send('console.log("jsonp server")');
  res.end(`handle(${str})`);
});
//cors
app.all("/cors-server", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.setHeader("Access-Control-Allow-Method", "*");
  res.send("cors server");
});
app.listen(8000, () => {
  console.log("http://127.0.0.1:8000");
});
