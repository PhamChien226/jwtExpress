/**
 * Created by trungquandev.com's author on 16/10/2019.
 * src/server.js
 */
const express = require("express");
const app = express();
const initAPIs = require("./api");
const mongoose = require('mongoose');
// Cho phép các api của ứng dụng xử lý dữ liệu từ body của request
app.use(express.json());

// Khởi tạo các routes cho ứng dụng
initAPIs(app);

// chọn một port mà bạn muốn và sử dụng để chạy ứng dụng tại local
let port = 4000;

//connect to DB
// const url = "mongodb://127.0.0.1:27017/test";
// const url = "mongodb+srv://phamchien:Phamchien2206@cluster0-r6up2.mongodb.net/test?retryWrites=true&w=majority"
// const url =  "mongodb://127.0.0.1:27017/?compressors=disabled&gssapiServiceName=mongodb/test"
const url = "mongodb://0.0.0.0:2717/test";

mongoose.connect(url, { useNewUrlParser: true },
  () => console.log("connect to DB!")
)

app.listen(port, () => {
  console.log(`Hello trungquandev.com, I'm running at localhost:${port}/`);
});